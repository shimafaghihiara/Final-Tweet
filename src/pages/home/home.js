import React, {useEffect, useState} from 'react';
import useStyle from "./Styles";
import Header from "../../components/header/header";
import {Divider} from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/tweetList";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import {getAllTweets} from "../../Api/Api_tweet";
import { settweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext';
import { useTranslation } from 'react-i18next';



const Home = () => {

    const classes=useStyle();
    const {t}=useTranslation();

//data fetching by axios
   // const [tweets,setTweets]=useState([]);
   const {tweetList:tweets}=useTweetState();
   const tweetDispatch=useTweetDispatch();

    useEffect(()=>{
       updateTweet();
    },[])
  //  end code for data fetching by axios

    const updateTweet=()=>{
        getAllTweets((isOk,data)=>{
                if(!isOk)
                    return alert (t("namovafagh"))
                else
                    settweetList(tweetDispatch,data)
            }
        );
    }

    return (
        <div className={classes.root}>
          <Header title={t("home")} icon={<HomeIcon/>}/>
          <Divider className={classes.divider}/>
          <NewTweet updateTweet={updateTweet}/>
          <TweetList data={tweets}/>

        </div>
    );
};

export default Home;