import { Button } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import React from 'react';
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
          <div className='tweetBox_input'>
          <Avatar />
           <input placeholder='いまどうしてる？' 
            type="text"></input>
          </div>
          <input className='tweetBox_imageInput' placeholder='画像のURLを入力してください'
           type="text"></input>
          <Button className='tweetBox_tweetButton' 
           type='submit'>ツイートする</Button>
      </form>
    </div>
  );
}

export default TweetBox;
