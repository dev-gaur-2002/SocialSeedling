import cacheData from "memory-cache";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserGlobal } from "../app/GlobalRedux/Features/user/userSlice";

export default async function fetchWithCache(username){
    const url = `https://api.unsplash.com/users/${username}/?client_id:${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    const value = cacheData.get(url);
    if(value){
        console.log("values exists")
        return value;
    }
    else{
        // const data;
        const hours = 24;
        await axios({
            method:'GET',
            url:`https://api.unsplash.com/users/${username}/`,
            params:{client_id:process.env.NEXT_PUBLIC_ACCESS_KEY},
        }).then((response) => {
            cacheData.put(url,response.data,hours*1000*60*60)
            // dispatch(setUserToGlobal(response.data));
            console.log(response.data)
            return response.data;}
            // response
        ).catch((error)=>{
            console.log(error);
        })
    }
}