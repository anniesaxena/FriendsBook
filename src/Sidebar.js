import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import BuildIcon from '@material-ui/icons/Build';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { useStateValue } from './StateProvider';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Divider } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StoreFrontIcon} title="MarketPlace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarketPlace" />
            <Divider />
            <SidebarRow Icon={BuildIcon} title="Created By Annie Saxena ❤️" />
            <SidebarRow Icon={EmojiPeopleIcon} title="Connect with Me" />
            <SidebarRow link="https://linkedin.com/in/annie-saxena" Icon={LinkedInIcon} title="My LinkedIn" />
            <SidebarRow link="https://anniesaxena.github.io/PortfolioAnnie" Icon={LanguageIcon} title="My Portfolio" />
            <SidebarRow link="https://www.instagram.com/aniie_saxena/" Icon={InstagramIcon} title="My Instagram" />
            <Divider />
            <SidebarRow Icon={EmojiEmotionsIcon} title="For Best Experience, use Desktop/Laptop" />
        </div>
    );
}

export default Sidebar;
