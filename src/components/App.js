import React from 'react';
import Layout from './layout/Layout'
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import TweetByHashtag from "../pages/tweetByHashtag/TweetByHashtag";
import TweetByUser from "../pages/tweetsByUser/TweetsByUser";
import Posts from "../pages/test/Posts";
import DetailPosts from "../pages/test/DetailPosts";
import Home from "../pages/home/home";
import Page404 from "../pages/page404/Page404";
import Hoc from "./Hoc";
import AuthPage from "../pages/auth/AuthPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TweetProvider} from "../context/TweetContext";
import "../i18n"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={"/login"} component={AuthPage}/>
                    <PrivateRoute path={"/"} render={()=>
                    
                    <TweetProvider> <Layout>
                        <Switch>
                            <Route path={"/"} exact component={Home} />
                            <Route path={"/hashtags/:hashtag"} exact component={TweetByHashtag} />
                            <Route path={"/Users/:id/:name"} exact component={TweetByUser} />
                            <Route component={Page404}/>
                        </Switch>
                    </Layout>
                    </TweetProvider>
                    } />
                </Switch>
            </BrowserRouter>
            <ToastContainer/>
        </div>
    );
};

const isLogin=()=> !!localStorage.getItem("x-auth-token");

const PublicRoute=({component, ...props})=>{
    return <Route {...props} render={(props)=>{
    if (isLogin())
        return <Redirect to={"/"} />
    else{
        return React.createElement(component,props);
    }
    }}/>

};

const PrivateRoute=({render, ...props})=>{
        return <Route {...props} render={(props)=>{
        if(isLogin())
            return render(props);
        else return <Redirect to={"/login"}/>
        }
        }/>
};

export default App;