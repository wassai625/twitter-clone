import React, { useState, useEffect } from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from '../../firebase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


function Timeline() {

  const [posts, setPosts] = useState([]);

  

  useEffect (() => {
    const postDate = collection(db, "posts");
    const q = query(postDate, orderBy("timestamp","desc"));
    // getDocs(q).then((querySnapshot) => {
    //  setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    /*リアルタイムデータ取得 */
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    })
  }, []);

  return (
    <div className='timeline'>
      {/* Header */}
        <div className='timeline_header'>
            <h2>ホーム</h2>
        </div>
      {/* TweetBox */}
        <TweetBox />
      {/* Post */}
      
        {posts.map((post) => (
         <Post 
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))};
      
    </div>
  );
}

export default Timeline;
