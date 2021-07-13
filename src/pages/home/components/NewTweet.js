import React, {useState} from 'react';
import useStyle from "../Styles";
import {Button, Grid, IconButton, Typography} from "@material-ui/core";
import classnames from "classnames";
import axios from "axios";
import {toast} from "react-toastify";
import {newTweetRequest} from "../../../Api/Api_tweet";
import { useTweetState, settweetText as settweet, useTweetDispatch } from '../../../context/TweetContext';

const NewTweet = ({updateTweet}) => {

    //Namespace management idea from http://enterprisejquery.com/2010/10/how-good-c-habits-can-encourage-bad-javascript-habits-part-1/
    (function( cursorManager ) {

        //From: http://www.w3.org/TR/html-markup/syntax.html#syntax-elements
        var voidNodeTags = ['AREA', 'BASE', 'BR', 'COL', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'MENUITEM', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR', 'BASEFONT', 'BGSOUND', 'FRAME', 'ISINDEX'];

        //From: https://stackoverflow.com/questions/237104/array-containsobj-in-javascript
        Array.prototype.contains = function(obj) {
            var i = this.length;
            while (i--) {
                if (this[i] === obj) {
                    return true;
                }
            }
            return false;
        }

        //Basic idea from: https://stackoverflow.com/questions/19790442/test-if-an-element-can-contain-text
        function canContainText(node) {
            if(node.nodeType == 1) { //is an element node
                return !voidNodeTags.contains(node.nodeName);
            } else { //is not an element node
                return false;
            }
        };

        function getLastChildElement(el){
            var lc = el.lastChild;
            while(lc && lc.nodeType != 1) {
                if(lc.previousSibling)
                    lc = lc.previousSibling;
                else
                    break;
            }
            return lc;
        }

        //Based on Nico Burns's answer
        cursorManager.setEndOfContenteditable = function(contentEditableElement)
        {

            while(getLastChildElement(contentEditableElement) &&
            canContainText(getLastChildElement(contentEditableElement))) {
                contentEditableElement = getLastChildElement(contentEditableElement);
            }

            var range,selection;
            if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
            {
                range = document.createRange();//Create a range (a range is a like the selection but invisible)
                range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
                range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
                selection = window.getSelection();//get the selection object (allows you to change selection)
                selection.removeAllRanges();//remove any selections already made
                selection.addRange(range);//make the range you have just created the visible selection
            }
            else if(document.selection)//IE 8 and lower
            {
                range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
                range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
                range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
                range.select();//Select the range (make it the visible selection
            }
        }

    }( window.cursorManager = window.cursorManager || {}));


    const renderTwit=(text)=>
    {
        return {__html:text.replace(/#\S+/g ,"<span style='color: cornflowerblue' >$&</span>" )} ;
    }
    const classes=useStyle();

    const inputFile=React.useRef();

  //  const [tweet,settweet]=useState();
        const {tweetText:tweet}=useTweetState();
        const tweetDispatch=useTweetDispatch();

    const [imageFile,setImageFile]=useState();
    const [imagePath,setImagePath]=useState();

    // React.useEffect(()=> {
    //     //search do
    //     input.current.addEventListener("input",function (e){
    //     settweet(renderTwit(e.target.innerText))
    //         window.cursorManager.setEndOfContenteditable(e.target);
    //     },false);
    //
    // },[])

    const newTweetClick=()=> {
        const tweetText = tweet;
        if (!tweetText)
            return;
        // const data = {
        //     "text": tweetText,
        // };
        const formData=new FormData();
        formData.append('text',tweetText);
        if (imageFile)
            formData.append('image',imageFile);

        newTweetRequest(formData, (isok, data) => {
            if (!isok)
                return toast.error(data);
            toast.warn("توییت شما با موفقیت ارسال شد");
            updateTweet();
           settweet(tweetDispatch,"");
           setImagePath();
           setImageFile();
        })

    };

    const getImage=()=>{
        if(localStorage.getItem("image") && localStorage.getItem("image") !=="undefined")
            return localStorage.getItem("image")
        return "images/prof.png"
    };

    const selectImg=()=>{
        inputFile.current.click();
    };
    const  onchangeImage=(e)=>
    {
        if (e.target.files && e.target.files.length>0) {
            setImageFile(e.target.files[0]);

            const reader=new FileReader();
            reader.onload=(e)=>{
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }

    }

    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} style={{width:65, height:65,borderRadius:'50%'}}/>
                <input className={classnames(classes.input,)} placeholder="توییت کن..."
                       value={tweet} onChange={e=>settweet(tweetDispatch, e.target.value)}/>
                <input type={"file"} style={{display:"none"}} ref={inputFile} onChange={onchangeImage}/>
            </Grid>
            {
                imagePath &&
                <div>
                    <div style={{backgroundImage:`url(${imagePath})`}} className={classes.imgupload}></div>
                </div>
            }
            <Grid container direction={"row-reverse"} style={{marginTop: 16}}>
                <Button variant={"contained"} color={"primary"} onClick={newTweetClick} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetIcon} onClick={selectImg}>
                    <img src={"/images/imagess.png"} style={{width:25}}/>
                </IconButton>
            </Grid>

        </div>
    );
};

export default NewTweet;