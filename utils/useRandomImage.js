import {useEffect,useState} from 'react'
import axios from 'axios';

export default function useRandomImage(url,page){
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [feeds,setFeeds] = useState([])
    
    useEffect(()=>{
        setFeeds([])
    },[url])

    useEffect(()=>{
        axios({
            method:'GET',
            url:url,
        }).then((res)=>{
            setFeeds((prevFeeds) =>{
                return [...new Set([...prevFeeds,...res.data.map((el)=>el)])]
            })
            setLoading(false);
            // console.log(res.data)
        }).catch((error)=>{
            setError(true)
            console.log(error)
        })
    },[page])
    return {loading,error,feeds};
}
