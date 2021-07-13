import React from "react";
import useStyle from './Styles';
import Typography from "@material-ui/core/Typography";
import RightSidebar from "../RightSideBar/rightSidebar";
import Divider from '@material-ui/core/Divider';
import LeftSideBar from "../LeftSideBar/leftSideBar";
import Home from '../../pages/home/home';
import TweetByHashtag from "../../pages/tweetByHashtag/TweetByHashtag";
import TweetByUser from "../../pages/tweetsByUser/TweetsByUser";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Posts from "../../pages/test/Posts";
import DetailPosts from "../../pages/test/DetailPosts";
import Page404 from "../../pages/page404/Page404";


const Layout=(props)=>{
    const classes=useStyle();


    return(
        <div className={classes.root}>
      <RightSidebar/>
      <Divider orientation={"vertical"} className={classes.divider} />
      <div className={classes.content}>
          {props.children}
      </div>
            <Divider orientation={"vertical"} className={classes.divider} />
           <LeftSideBar/>
        </div>

    );
};

export default Layout;