import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserInfo from "../../../components/UserPage";
import cacheData from "memory-cache";
import axios from "axios";

export default function Page(){
    const router = useRouter();
    const [user, setUser] = useState();
    
    async function fetchWithCache(username){
        const url = `https://api.unsplash.com/users/${username}/?client_id:${process.env.NEXT_PUBLIC_ACCESS_KEY}`
        const value = cacheData.get(url);
        if(value){
            // console.log("values exists")
            return value;
        }
        else{
            const hours = 24;
            await axios({
                method:'GET',
                url:`https://api.unsplash.com/users/${username}/`,
                params:{client_id:process.env.NEXT_PUBLIC_ACCESS_KEY},
            }).then((response) => {
                cacheData.put(url,response.data,hours*1000*60*60)
                setUser(response.data);
                return response.data;}
                // response
            ).catch((error)=>{
                console.log(error);
            })
        }
    }
    const username = router.query.user;

    useEffect(()=>{
        fetchWithCache(username);
    }, [username]);

    return (
        <div>
            {user ? <UserInfo user={user} /> : <>loader</>}
        </div>
    );
}