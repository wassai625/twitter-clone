import React from 'react';
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';

function Timeline() {
  return (
    <div className='timeline'>
      {/* Header */}
        <div className='timeline_header'>
            <h2>ホーム</h2>
        </div>
      {/* TweetBox */}
        <TweetBox />
      {/* Post */}
        <Post 
        displayName="プログラミング練習"
        username="harapeko_wassai"
        verified={true}
        text="初ツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="http://source.unsplash.com/random"
        />
    </div>
  );
}

export default Timeline;
