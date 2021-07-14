import React, {useEffect, useState} from 'react';
import useStyle from "../home/Styles";
import Header from "../../components/header/header";
import {Divider, Typography} from "@material-ui/core";
import TweetList from "../home/components/tweetList";
import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import {getAllTweets, getAllUsers, getTweetByUser} from "../../Api/Api_tweet";
import {useLocation} from "react-router-dom";



const TweetByUser = (props) => {

    const classes=useStyle();
    const [tweets,setTweets]=useState([]);
    const Location=useLocation();

    useEffect(()=>{

        getTweetByUser(props.match.params.id,(isOk,data)=>{
            if(!isOk)
                return alert(data.message)
            else
                return setTweets(data)
            }
        );

    },[Location])
    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            {
                tweets.length===0 &&
                <Typography>این کاربر تابحال توییتی ننوشته است</Typography>
            }
            <TweetList data={tweets}/>

        </div>
    );
};

export default TweetByUser;