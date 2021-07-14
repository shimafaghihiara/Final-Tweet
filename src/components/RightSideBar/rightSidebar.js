import React, {useEffect, useState} from 'react';
import useStyle from './Style';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {ButtonBase} from "@material-ui/core";
import {Link} from "react-router-dom";
import axios from "axios";
import {getAllHashtags} from "../../Api/Api_tweet";
import { setHashTagList, useTweetDispatch, useTweetState } from '../../context/TweetContext';

const RightSidebar = () => {
    const classes=useStyle();
    //const [hashtags,setHashtags]=useState([]);
    const {hashTags:hashtags}=useTweetState();
    const tweetDispatch=useTweetDispatch();

    useEffect(()=>{
        getAllHashtags((isOk,data)=>{
                if(!isOk)
                    return alert(data.message)
                else
                setHashTagList(tweetDispatch,data)
            }
        );
    },[])

    return (
        <div className={classes.root}>
            <Link to={"/"}>
            <Grid container direction={"row"} alignItems={'center'}>
                <Grid item >
                    <img  src={"/images/img.png"} width={'50'}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.LogoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            </Link>
                <Typography className={classes.hashtagTitle}>
                    داغ ترین هشتگ ها
                </Typography>

            {
                hashtags.map(item =>
                    <Link to={"/hashtags/"+item.text}>
                    <Grid container direction={"column"} alignItems={'center'}>
                        <ButtonBase className={classes.hashtagButte}>

                        <Grid item>
                                    <img src={"/images/img_3.png"}  width={'30'}/>
                        </Grid>
                                    <Typography className={classes.hashtag}>
                                        {item.text}
                                    </Typography>

                        </ButtonBase>

                    </Grid> </Link>

                )
            }




            
        </div>
    );
};

export default RightSidebar;