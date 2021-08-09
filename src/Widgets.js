import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Twitter'da Ara" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>İlgini Çekebilecek Gündemler</h2>

        <TwitterTweetEmbed tweetId={""} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sicakbuz"
          options={{ height: 400 }}
        />

      </div>
    </div>
  );
}

export default Widgets;