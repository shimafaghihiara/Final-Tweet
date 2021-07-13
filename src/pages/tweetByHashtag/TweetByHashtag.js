import React, {useEffect, useState} from 'react';
import useStyle from "../home/Styles";
import Header from "../../components/header/header";
import {Divider} from "@material-ui/core";
import TweetList from "../home/components/tweetList";
import axios from "axios";
import {getAllTweets} from "../../Api/Api_tweet";



const TweetByHashtag = (props) => {

    const classes=useStyle();

    const [tweets,setTweets]=useState([]);

    useEffect(()=>{
        getAllTweets((isOk,data)=>{
                if(!isOk)
                    return alert(data.massage);
                else
                    setTweets(data)
            }
        );
    },[])

    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={"/images/img_3.png"}  width={'30'}/>}/>
            <Divider className={classes.divider}/>
            <TweetList data={tweets}/>

        </div>
    );
};

export default TweetByHashtag;