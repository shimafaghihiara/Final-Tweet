import React from "react";
import { getAllHashtags } from "../Api/Api_tweet";

var LayoutStateContext=React.createContext();
var LayoutDispatchContext=React.createContext();

function layoutReducer(state, action){
    switch(action.type){
        case "TOGGLE_DRAWER":
            return{...state , drawOpen: !state.drawOpen};
         
        default:{
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function LayoutProvider({children}){
    var [state, dispatch]= React.useReducer(layoutReducer,{
        drawOpen:true,
    });
    return(
        <LayoutStateContext.Provider value={state}>
            <LayoutDispatchContext.Provider value={dispatch}>
                {children}
            </LayoutDispatchContext.Provider>
        </LayoutStateContext.Provider>
        );
}

function useLayoutState(){
    var context= React.useContext(LayoutStateContext);
    if(context === undefined){
        throw new Error(" useLayoutState must be used whitin a LayoutProvider");

    }
    return context;
}

function useLayoutDispatch(){
    var context= React.useContext(LayoutDispatchContext);
    if(context === undefined){
        throw new Error(" useLayoutState must be used whitin a LayoutProvider");

    }
    return context;
}


export{LayoutProvider, useLayoutState, useLayoutDispatch,toggleDrawer,layoutReducer};

//########################################################

function toggleDrawer(dispatch){
    dispatch({
        type:"TOGGLE_DRAWER",
    
    });
}
