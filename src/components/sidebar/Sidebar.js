import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

import "./Sidebar.css";

function sidebar() {
  return (
    <div className='sidebar'>
      {/* ツイッターアイコン */}
      <TwitterIcon className='sidebar_twitterIcon'/>
        
      {/* SidebarOption */}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題を検索" Icon={SearchIcon}/>
      <SidebarOption text="通知" Icon={NotificationsNoneIcon}/>
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon}/>
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}/>
      <SidebarOption text="リスト" Icon={ListAltIcon}/>
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon}/>
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon}/>
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* ツイートボタン */}
      <Button variant='outlined' className='sidebar_tweet' fullWidth>ツイートする</Button>
    </div>
  )
}

export default sidebar
