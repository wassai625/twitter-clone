import Search from '@material-ui/icons/Search'
import React from 'react'
import { 
      TwitterTimelineEmbed,
      TwitterShareButton,
      TwitterTweetEmbed 
    } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
            <Search className='widgets_searchIcon' />
            <input placeholder='キーワード検索' type="text"/>
        </div>

        <div className='widgets_widgetsContainer'>
            <h2>いまどうしてる？</h2>

            {/* ライブラリを追加 */}
            <TwitterTweetEmbed tweetId={"1529014124889645056"} />

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="harapeko_wassai"
                options={{height: 400}}
            />
            <TwitterShareButton
                 url='https://twitter.com/harapeko_wassa'
                 options={{ text: "React.js勉強中", via: "harapeko_wassai"}}
            />
        </div>
    </div>
  )
}

export default Widgets
