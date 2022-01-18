import React from "react";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',

        [`${theme.breakpoints.up('sm')} and (orientation: landscape)`]: {
            flexDirection: 'row',
            height: '400px',
            width: '700px',
        },
        [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
            flexDirection: 'row',
            height: '100%',
            width: '100%',
        },

        [`${theme.breakpoints.up('sm')} and (orientation: portrait)`]: {
            flexDirection: 'column',
            height: '700px',
            width: '400px',
        },
        [`${theme.breakpoints.up('md')} and (orientation: portrait)`]: {
            flexDirection: 'row',
            height: '400px',
            width: '700px',
        },

        [`${theme.breakpoints.down('sm')} and (orientation: portrait)`]: {
            flexDirection: 'column',
            height: '100%',
            width: '100%',
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