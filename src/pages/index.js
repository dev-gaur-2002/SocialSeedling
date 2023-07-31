import Head from 'next/head'
import axios from 'axios'
import useRandomImage from '../../utils/useRandomImage'
import { useState, useRef, useCallback } from 'react'
import Posts from '../../components/Feeds'
import Loader from '../../components/Loader'


const baseUrl = `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&count=10`

const callApi = async () =>{
  // console.log(process.env.NEXT_PUBLIC_ACCESS_KEY)
  const res = await axios.get(baseUrl)
  const {data} = res;
  const finalData = await JSON.parse(JSON.stringify(data))
  // console.log(finalData)
  // console.log(typeof(finalData))
  return finalData;
}

export const getStaticProps = async() => {
  const data = await callApi();
  // console.log(typeof(data))
  return {
   props:{
    data
   } 
  }
}

export default function Home({data}) {
  const [page,setPage] = useState(1);
  const observer = useRef();
  const lastFeed = useCallback((Element)=>{
    console.log("last element")
  });
  const{
    error,
    loading,
    feeds
  } = useRandomImage(baseUrl,page);
  return (
    <>
      {
        error ? (<div className='main-error'>error</div>) :loading?(
          <><Loader></Loader></>
        ):(
          <Posts posts={feeds} page={page} setPage={setPage} />
        )
      }
    </>
  )
}
