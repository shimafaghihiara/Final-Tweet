import React, {useEffect, useState} from 'react';
import useStyle from "../home/Styles";
import Header from "../../components/header/header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/tweetList";
import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import {getAllTweets, getAllUsers} from "../../Api/Api_tweet";



const TweetByUser = (props) => {

    const classes=useStyle();
    const [tweets,setTweets]=useState([]);

    useEffect(()=>{

        getAllTweets((isOk,data)=>{
            if(!isOk)
                return alert(data.message)
            else
                return setTweets(data)
            }
        );

    },[])
    return (
        <div className={classes.root}>
            <Header title={props.match.params.user} icon={<PersonIcon/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>

        </div>
    );
};

export default TweetByUser;