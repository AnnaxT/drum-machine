import React, { useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            height: '80px',
            width:'85px',
        },
        height: '90px',
        width:'100px',
    }
}));

const DrumPad = ({ drumPad, drumId, src, disabled, volume }) => {

const classes = useStyles();
let audioEl = useRef(null);

// Update volume when it changes

useEffect(() => {
    audioEl.current.volume = volume;
},[volume]);

const playSound = () => {
    if (disabled) return;

    const audio = audioEl.current;
    if (audio === null) return;

    audio.currentTime = 0;
    audio.play();
}

const handleClick = () => {
    drumId();
    playSound();
}

return (
    <Button
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        className={classes.root}
        sx={{
            fontSize:25
        }}
        >
       {drumPad}
       <audio ref={audioEl} src={src} className="clip"></audio>
    </Button>
    )
}

export default DrumPad;

DrumPad.propTypes = {
    drumPad: PropTypes.string.isRequired,
    drumId: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
};
