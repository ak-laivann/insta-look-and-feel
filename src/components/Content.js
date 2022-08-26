
import React from 'react';
import './Content.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Content() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/photos')
    .then ( res => {
        setPosts( res.data.filter(data => data.id<15))
    })
    .catch(err => {
      console.log(err)})
  },[])
    
  console.log(posts);
  return (
    <div>
        <div className='content container'>
          {
            posts.map(post => {
              return(
              <img src={post.url} key={post.id} />
              )})
          }
        </div>
    </div>
  )
}

export default Content