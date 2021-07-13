import React from 'react';
import { Grid, IconButton, Typography} from "@material-ui/core";
import useStyle from "../Styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { settweetText, useTweetDispatch } from '../../../context/TweetContext';

const Tweet = ({data}) => {
    const tweetDispatch=useTweetDispatch();
    const renderTwit=(text)=>
    {
        return {__html:text.replace(/#\S+/g ,"<a href='/tags/$&' style='color: cornflowerblue' >$&</a>" )} ;
    }
const getimage=()=>
{
    if(data.user.image)
        return data.user.image;
    else
        return "images/prof.png";
}

const retweetClick=()=>{
    settweetText(tweetDispatch,data.text);
}


    const classes=useStyle();
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={getimage()} style={{height:65,width:65, borderRadius:"50%"}}/>
                <Grid item container direction={"column"} style={{flex:1,marginRight:'1rem'}}>
                    <Grid item container >
                <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                <Typography className={classes.tweetItemId}  >{data.user.id}</Typography>
            </Grid>
                    <Typography dangerouslySetInnerHTML={renderTwit(data.text)} className={classes.tweetText} component={"p"} />
                    {
                        data.image &&
                        <div>
                            <div style={{backgroundImage:`url(${data.image})`}} className={classes.imgupload}></div>
                        </div>
                    }
                </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={'center'}>
                <IconButton className={classes.newTweetIcon} onClick={retweetClick}>
                    <img src={"/images/Retweet.png"} style={{width:25}}/>
                </IconButton>
               <IconButton className={classes.newTweetIcon}>
              <FavoriteIcon />
               </IconButton>
                <Typography className={classes.likeCount}> {data.likes} </Typography>
            </Grid>
            </Grid>

        </div>
    );
};

export default Tweet;