import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from '../../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    /* firebaseのデータベースに追加する */
    e.preventDefault();

    addDoc(collection(db, "posts"),{
        displayName: "初ツイート",
        username: "harapeko_wassai",
        verified: true,
        text: tweetMessage,
        avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
        image: tweetImage,
        timestamp: serverTimestamp(),
    });

    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className='tweetBox'>
      <form>
          <div className='tweetBox_input'>
          <Avatar />
           <input
           value={tweetMessage} 
           placeholder='いまどうしてる？' type="text"
           onChange={(e) => setTweetMessage(e.target.value)}
           ></input>
          </div>
          <input 
           value={tweetImage} 
           className='tweetBox_imageInput' placeholder='画像のURLを入力してください'
           type="text"
           onChange={(e) => setTweetImage(e.target.value)}
           ></input>
          <Button className='tweetBox_tweetButton' type='submit'
           onClick={sendTweet}
          >ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox;
