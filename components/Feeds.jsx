import React from 'react'
import Post from './Post'
import styles from './Feeds.module.css'

const Posts = (props) => {
  return (
    <>
      <div className={styles.main}>
        {
          props.posts.map((el,index)=>{
            console.log(el)
            const{user,location,likes,downloads,urls,description,updated_at} = el
            if(props.posts.length === index+1){
              return <Post user={user} location={location} likes={likes} downloads={downloads} image={urls} key={user} isLast={true} page={props.page} setPage={props.setPage} description={description} updatedAt={updated_at}/>
            }
            else{
              return <Post user={user} location={location} likes={likes} downloads={downloads} image={urls} key={user} isLast={false}  description={description} updatedAt={updated_at}/>
            }
          })
        }
      </div>
    </>
  )
}

export default Posts