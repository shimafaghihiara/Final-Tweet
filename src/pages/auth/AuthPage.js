import React, {useState} from 'react';
import {Paper} from "@material-ui/core";
import {Tab, Tabs, Typography} from "@material-ui/core";
import useStyle from "./Styles";
import {toast} from "react-toastify";
import {loginApi, RegisterApi} from "../../Api/Api_auth";

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



    const handleChange=(e,newValue)=>{
        setTab(newValue);
    }

    const validateLogin=(user)=>{
        if(!user.username)
            return "باید حتما یوزرنیم را وارد کنید";
        if (!user.password)
            return "باید پسورد را وارد کنید"
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
            toast.success('شما با موفقیت وارد شدید');
            localStorage.setItem("name",data.name);
            localStorage.setItem("username",data.username);
            localStorage.setItem("image",data.image);
            localStorage.setItem("x-auth-token",data["x-auth-token"]);
            window.location.reload();
        })
    }


    const validateRegister=(user)=>{
        if(!user.name)
           return"نام کامل خود را وارد کنید";
        if(!user.username)
            return"نام کاربری خود را وارد کنید";
        if(!user.password)
            return "پسورد را باید وارد کنید";
        if(user.password!=RepasswordRegister)
            return "پسورد را با تکرار آن برابر وارد کنید";
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
            toast.success('شما با موفقیت ثبت نام شدید');
            localStorage.setItem("name", data.name);
            localStorage.setItem("username", data.username);
            localStorage.setItem("image", data.image);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload();
        })

    }


    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>به توییتر ما خوش آمدید</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab className={classes.tabs} label="ورود" value={LOGIN_TAB_VALUE} />
                <Tab className={classes.tabs} label="ثبت نام" value={REG_TAB_VALUE}/>
            </Tabs>
            {tab===LOGIN_TAB_VALUE &&
            <div className={classes.login}>
                <Typography>نام کاربری</Typography>
                <input className={classes.input} value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)}/>
                <Typography>رمز عبور</Typography>
                <input className={classes.input} value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)}/>
                <button  className={classes.btn} onClick={handleLogin}>ورود</button>
            </div>}
            {tab===REG_TAB_VALUE &&
            <div className={classes.register}>
                <Typography>نام کامل</Typography>
                <input className={classes.input} value={FullNameRegister} onChange={e=>setFullNameRegister(e.target.value)}></input>
                <Typography>نام کاربری</Typography>
                <input className={classes.input} value={usernameRegister} onChange={e=>setUsernameRegister(e.target.value)}/>
                <Typography>رمز عبور</Typography>
                <input className={classes.input} value={passwordRegister} onChange={e=>setPasswordRegister(e.target.value)}/>
                <Typography>تکرار رمز عبور</Typography>
                <input className={classes.input} value={RepasswordRegister} onChange={e=>setRePasswordRegister(e.target.value)}/>
                <button className={classes.btn} onClick={handleRegister}>ثبت نام</button>
            </div>}

        </Paper>
    );
};

export default AuthPage;