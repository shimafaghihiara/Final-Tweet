import { Drawer } from "@material-ui/core";
import React from "react";
import { toggleDrawer, useLayoutDispatch, useLayoutState } from "../../context/LayoutContext";
import RightSidebar from "../RightSideBar/rightSidebar";

const TwittDrawer=()=>{
    const {drawOpen}=useLayoutState();
    const layoutDispatch=useLayoutDispatch();
    return (
    <Drawer anchor={"right"} open={drawOpen} onClose={()=>{ toggleDrawer(layoutDispatch); }}>
        <RightSidebar/>
    </Drawer>
    );
};

export default TwittDrawer;