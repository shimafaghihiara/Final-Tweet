import axios from "axios";
import {getAxiosInstance, getAxiosInstanceAPI} from "./Api";

export const getAllTweets=(callback)=>{
    getAxiosInstanceAPI().post("getAllTweet")
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error);
    })

};

export const getAllUsers=(callback)=>{
    getAxiosInstanceAPI().get("getAllUser")
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error);
    })

};

export const getAllHashtags=(callback)=>{
    getAxiosInstanceAPI().get("getAllHashTags")
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error);
    })

};
export const newTweetRequest=(data,callback)=>{
    getAxiosInstanceAPI().post("newTweet",data)
        .then(responsive=>{
            const data=responsive.data;
            callback(true,data);
        }).catch(error=>{
        console.log(error);
        callback(false,error);
    });
};


