import axios from "axios";
import {getAxiosInstance, getAxiosInstanceAPI, getAxiosInstanceAuth} from "./Api";

export const loginApi=(data,callback)=>{
    getAxiosInstanceAuth().post("login",data)
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error.response.data.message);
    })

};

export const RegisterApi=(data,callback)=>{
    getAxiosInstanceAuth().post("register",data)
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error.response.data.message);
    })

};

export const uploadUserPhoto=(photo,callback)=>{
    getAxiosInstanceAPI().post("uploadUserPhoto",photo)
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error.response.data.message);
    })

};
