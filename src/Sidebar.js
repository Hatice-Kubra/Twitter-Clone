import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import "./Sidebar.css";


function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

          <SidebarOption active Icon={HomeIcon} text="Anasayfa"/>
          <SidebarOption Icon={SearchIcon} text="Keşfet"/>
          <SidebarOption Icon={NotificationsNoneIcon} text="Bildirimler"/>
          <SidebarOption Icon={MailOutlineIcon} text="Mesajlar"/>
          <SidebarOption Icon={BookmarkBorderIcon} text="Yer İşaretleri"/>
          <SidebarOption Icon={ListAltIcon} text="Listeler"/>
          <SidebarOption Icon={PermIdentityIcon} text="Profil"/>
          <SidebarOption Icon={MoreHorizIcon} text="Daha Fazla"/>

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;