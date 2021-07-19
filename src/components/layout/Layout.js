import React, { useEffect, useState } from "react";
import useStyle from './Styles';
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { getProfileRequest } from "../../Api/Api_tweet";
import { toast } from "react-toastify";
import {useHistory} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import TwittDrawer from "../Drawer/TwittDrawer";


 
const Layout=(props)=>{
    const classes=useStyle();
    const history=useHistory();
    const [wait,setWait]=useState(true);
    const {t} =useTranslation();
    const theme=useTheme();
    const isTabletSize=useMediaQuery(theme.breakpoints.down("sm"));

useEffect(()=>{
    getProfileRequest((isok,data)=>
    {
        if(!isok){
        toast.error(data);
        localStorage.clear();
        return history.push("/login");
        }
        setWait(false);
        localStorage.setItem("name",data.name);
        localStorage.setItem("username",data.username);
        localStorage.setItem("image",data.image);
        localStorage.setItem("x-auth-token",data["x-auth-token"]);
    })

},[])

if(wait)
return <div className={classes.waitt}>
    <CircularProgress  className={"uni_m_b_small"}/>
   <Typography  >{t("waitt")}</Typography>
</div>;

    return(
        <div className={classes.root}>
          { isTabletSize ? <TwittDrawer/>:<RightSidebar/>
         
          }
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