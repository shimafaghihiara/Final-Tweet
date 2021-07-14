import React, {useEffect, useState} from 'react';
import useStyle from "../home/Styles";
import Header from "../../components/header/header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/tweetList";
import axios from "axios";
import {getAllTweets, getTweetByHashtag} from "../../Api/Api_tweet";
import { toast } from 'react-toastify';
import { useTweetDispatch, useTweetState ,settweetList} from '../../context/TweetContext';
import {useLocation} from "react-router-dom";



const TweetByHashtag = (props) => {

    const classes=useStyle();
    const Location=useLocation();
    //const [tweets,setTweets]=useState([]);
    const {tweetList:tweets}=useTweetState();
    const tweetDispatch=useTweetDispatch();

    useEffect(()=>{
        getTweetByHashtag(props.match.params.hashtag,(isOk,data)=>{
                if(!isOk)
                    return toast.error(data.massage);
                else
                    settweetList(tweetDispatch,data)
            }
        );
    },[Location])

    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/img_3.png"}  width={'30'}/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>

        </div>
    );
};

export default TweetByHashtag;