import React from "react";

var TweetStateContext=React.createContext();
var TweetDispatchContext=React.createContext();

function tweetReducer(state, action){
    switch(action.type){
        case "SET_TWEET_TEXT":
            return{...state , tweetText: action.payload};
        default:{
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function TweetProvider({children}){
    var [state, dispatch]= React.useReducer(tweetReducer,{
       tweetText:'',
    });
    return(
        <TweetStateContext.Provider value={state}>
            <TweetDispatchContext.Provider value={dispatch}>
                {children}
            </TweetDispatchContext.Provider>
        </TweetStateContext.Provider>
        );
}

function useTweetState(){
    var context= React.useContext(TweetStateContext);
    if(context === undefined){
        throw new Error(" useTweetState must be used whitin a TweetProvider");

    }
    return context;
}

function useTweetDispatch(){
    var context= React.useContext(TweetDispatchContext);
    if(context === undefined){
        throw new Error(" useTweettState must be used whitin a TweetProvider");

    }
    return context;
}


export{TweetProvider, useTweetState, useTweetDispatch,settweetText};

//########################################################

function settweetText(dispatch,tweetText){
    dispatch({
        type:"SET_TWEET_TEXT",
        payload: tweetText,
    });
}