import React, {useState} from 'react';
import {Paper} from "@material-ui/core";
import {Tab, Tabs, Typography} from "@material-ui/core";
import useStyle from "./Styles";
import {toast} from "react-toastify";
import {loginApi, RegisterApi} from "../../Api/Api_auth";
import { useTranslation } from 'react-i18next';

const AuthPage = () => {
    const LOGIN_TAB_VALUE=1
    const REG_TAB_VALUE=2
    const classes=useStyle();
    const [tab,setTab]=useState(LOGIN_TAB_VALUE);
    const [usernameLogin,setUsernameLogin]=useState();
    const [passwordLogin,setPasswordLogin]=useState();
    const [FullNameRegister,setFullNameRegister]=useState();
    const [usernameRegister,setUsernameRegister]=useState();
    const [passwordRegister,setPasswordRegister]=useState();
    const [RepasswordRegister,setRePasswordRegister]=useState();
    const {t}=useTranslation();


    const handleChange=(e,newValue)=>{
        setTab(newValue);
    }

    const validateLogin=(user)=>{
        if(!user.username)
            return t("usernameValidator");
        if (!user.password)
            return t("passwordValidation");
    }

    const handleLogin=()=>{
        const user=
            {
                username:usernameLogin,
                password:passwordLogin
            };
        const error=validateLogin(user);
        if (error)
            return toast.warn(error);
        loginApi(user,(isOk,data)=>{
            if(!isOk)
                return toast.error(data)
            toast.success(t("loginSuccess"));
            localStorage.setItem("name",data.name);
            localStorage.setItem("username",data.username);
            localStorage.setItem("image",data.image);
            localStorage.setItem("x-auth-token",data["x-auth-token"]);
            window.location.reload();
        })
    }


    const validateRegister=(user)=>{
        if(!user.name)
           return t("fullName");
        if(!user.username)
            return t("enterUsername");
        if(!user.password)
            return t("enterPass");
        if(user.password!=RepasswordRegister)
            return t("enterRePass");
    };

    const handleRegister=()=> {
        const user=
            {
                name:FullNameRegister,
                username:usernameRegister,
                password:passwordRegister
            };
        const error=validateRegister(user);
        if (error)
            return toast.warn(error);
        RegisterApi(user,(isOk,data)=> {
            if (!isOk)
                return toast.error(data)
            toast.success(t("successRegister"));
            localStorage.setItem("name", data.name);
            localStorage.setItem("username", data.username);
            localStorage.setItem("image", data.image);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })

    }


    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>{t("welcome")}</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab className={classes.tabs} label={t("loginbtn")} value={LOGIN_TAB_VALUE} />
                <Tab className={classes.tabs} label={t("registerbtn")} value={REG_TAB_VALUE}/>
            </Tabs>
            {tab===LOGIN_TAB_VALUE &&
            <div className={classes.login}>
                <Typography>{t("username")}</Typography>
                <input className={classes.input} value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)}/>
                <Typography>{t("password")}</Typography>
                <input className={classes.input} value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)}/>
                <button  className={classes.btn} onClick={handleLogin}>{t("loginbtn")}</button>
            </div>}
            {tab===REG_TAB_VALUE &&
            <div className={classes.register}>
                <Typography>{t("fullnametext")}</Typography>
                <input className={classes.input} value={FullNameRegister} onChange={e=>setFullNameRegister(e.target.value)}></input>
                <Typography>{t("username")}</Typography>
                <input className={classes.input} value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value)}/>
                <Typography>{t("password")}</Typography>
                <input className={classes.input} value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)}/>
                <Typography>{t("repassword")}</Typography>
                <input className={classes.input} value={RepasswordRegister} onChange={e=>setRePasswordRegister(e.target.value)}/>
                <button className={classes.btn} onClick={handleRegister}> {t("registerbtn")}</button>
            </div>}

        </Paper>
    );
};

export default AuthPage;