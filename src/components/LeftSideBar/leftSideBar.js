import React, {useEffect, useRef, useState} from 'react';
import useStyle from './Style';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {ButtonBase, Divider, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import axios from "axios";
import {getAllUsers} from "../../Api/Api_tweet";
import {uploadUserPhoto} from "../../Api/Api_auth";
import {toast} from "react-toastify";
import { useTranslation } from 'react-i18next';



const Tweeter=({name,id,img})=>{
    const classes=useStyle();
    const {t}=useTranslation();
    const getImage=()=>{
        if(img)
            return img;
        return "images/prof.png"
    }
    return(
        <ButtonBase className={classes.userbtn1}  >
           <Grid container component={"column"}  >

        <Grid container className={classes.tweeterParent} >
        <img src={getImage()} style={{width:60 , borderRadius:'50%' }}/>
        <Grid item container direction={"column"} className={classes.tweeterName} >
            <Typography className={classes.profName}>{name}</Typography>
            <Typography className={classes.profId}>{id}</Typography>
        </Grid>

    </Grid>
           </Grid> </ButtonBase>

)
};

const LeftSideBar = () => {


    const classes=useStyle();
    const [users,setUsers]=useState([]);
    const [anchorMenu,setAnchorMenu]=useState();
    const [imageFile,setImageFile]=useState();
    const [imagePath,setImagePath]=useState();
    const inputRef=useRef();
    const {t,i18n}=useTranslation();

    useEffect(()=>{
        getAllUsers((isOk,data)=>{
                if(!isOk)
                    return toast.error(t("listError"))
                else
                    setUsers(data)
            }
        );
    },[])


    const handToggleleMenu=(e)=>{
        if(anchorMenu)
            setAnchorMenu(null);
        else
            setAnchorMenu(e.currentTarget)

    }

    const getImage=()=>{
        if(imagePath)
            return imagePath;
        if(localStorage.getItem("image") && localStorage.getItem("image") !=="undefined")
            return localStorage.getItem("image")
        return "images/prof.png"
    }

    const changeLang=()=>{
       if(i18n.language==="fa"){
           localStorage.setItem("lang","en");
       i18n.changeLanguage("en");
       }
       else
       {
        localStorage.setItem("lang","fa");
       i18n.changeLanguage("fa");
       }
    };

    const handleAvatarChange=(e)=>
    {
        if(e.target.files && e.target.files.length>0) {
           setImageFile(e.target.files[0])

           const reader=new FileReader();
           reader.onload=(e)=>{
               setImagePath(e.target.result);
           };
           reader.readAsDataURL(e.target.files[0]);

           const formData=new FormData();
           formData.append("image",e.target.files[0]);
            uploadUserPhoto(formData,(isok,data)=>{
                if(!isok)
                    return toast.error(data);
                toast.success(t("uploadPhoto"));
                localStorage.setItem("image",data.imagePath)
            })
        }


    }
    return (
        <div className={classes.root}>
            <Grid container direction={ "row-reverse"} onClick={handToggleleMenu} style={{cursor:"pointer"}}>
                <img src={getImage()} style={{width:70,borderRadius:40}}/>
                <Grid item container direction={"column"} className={classes.parentText}>
                    <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
                    <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
                </Grid>
                <input ref={inputRef} type={'file'} style={{display:"none"}} onChange={handleAvatarChange}/>
            </Grid>
            <Grid container direction={"column"} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>{t("userListTitle")}</Typography>
                <Divider style={{marginLeft:-24, marginRight: -24}} />
                {
                    users.map((item, index) => {
                        return(
                             <Link to={"/Users/"+item._id+"/"+item.name}>
                                <Tweeter name={item.name} id={item.username} img={item.image}/>
                                {index !== users.length-1 &&
                                <Divider style={{marginLeft: -24, marginRight: -24}}/>}

                            </Link>
                        )
                    })

                }


            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={()=>setAnchorMenu(null)} anchorEl={anchorMenu} >
                <MenuItem className={classes.Menu} onClick={()=> {
                    inputRef.current.click();
                }}>
                    {t("editPhoto")}
                </MenuItem>
                <MenuItem className={classes.Menu} onClick={()=> {
                    changeLang();
                }}>
                   {t("changeLanguageMenu")}
                </MenuItem>
                <MenuItem className={classes.Menu} onClick={()=> {
                   localStorage.setItem("name","");
                   localStorage.setItem("username","");
                   localStorage.setItem("image","");
                   localStorage.setItem("x-auth-token","");
                    window.location.reload();
                }}>
                   {t("logoutMenu")}
                </MenuItem>

            </Menu>

        </div>
    );
};

export default LeftSideBar;