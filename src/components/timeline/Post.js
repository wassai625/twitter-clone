import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post() {
  return (
    <div className='post'>
      <div className='post_avatar'>
          <Avatar />
      </div>
      <div className='post_body'>
          <div className='post_header'>
              <div className='post_ headerText'>
                  <h3>プログラミング練習
                    <span className='post_headerSpecial'>
                      <VerifiedUserIcon className="post_badge" />
                      @Shin_Enginner
                    </span>
                  </h3>
              </div>
              <div className='post_headerDescriptuion'>
                  <p>React</p>
              </div>
          </div>
          <img src="http://source.unsplash.com/random" />
          <div className='post_footer'>
              <ChatBubbleOutlineIcon fontSize='small' />
              <RepeatIcon fontSize='small' />
              <FavoriteBorderIcon fontSize='small' />
              <PublishIcon fontSize='small' />
          </div>
      </div>
    </div>
  )
}

export default Post
