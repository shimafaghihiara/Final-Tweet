import React from 'react';
import useStyle from "./Styles";
import HomeIcon from '@material-ui/icons/Home';
import {IconButton, Typography, useMediaQuery} from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';
import { toggleDrawer, useLayoutDispatch } from '../../context/LayoutContext';

const Header = ({title,icon}) => {
    const classes=useStyle();
    const theme=useTheme();
    const isTabletSize=useMediaQuery(theme.breakpoints.down("sm"));
    const layoutDispatch=useLayoutDispatch();
    return (
        <div className={classes.header}>
            {isTabletSize && (
                <IconButton onClick={()=>toggleDrawer(layoutDispatch)} className={classes.Menu2}>
                    <MenuRoundedIcon/>
                        </IconButton>
            )}
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>

        </div>
    );
};

export default Header;