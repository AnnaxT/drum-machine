import React from "react";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            height: '400px',
            width: '700px',
        },
        justifyContent:'space-evenly',
        alignItems: 'center',
      },
}))

const Container = ({ children }) => {

    const classes = useStyles();

    return(
        <Paper variant="outlined" square className={classes.root} >
            {children}
        </Paper>
    )
}

export default Container;