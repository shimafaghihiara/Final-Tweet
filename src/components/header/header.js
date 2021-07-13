import React from 'react';
import useStyle from "./Styles";
import HomeIcon from '@material-ui/icons/Home';
import {Typography} from "@material-ui/core";

const Header = ({title,icon}) => {
    const classes=useStyle();
    return (
        <div className={classes.header}>
            {icon}
            <Typography className={classes.headerTitle}>
                {title}
            </Typography>

        </div>
    );
};

export default Header;