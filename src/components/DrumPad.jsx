import React, { useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            height: '70px',
            width:'80px',
        },
        height: '90px',
        width:'100px',
    }
}));

const DrumPad = ({ drumPad, drumId, src, disabled, volume, uniqueId }) => {

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

const handleKeyDown = (e) => {
    if (e.key === drumPad || e.key.toUpperCase() === drumPad) {
        drumId();
        playSound();
    }
}

useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // clean up
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
},[]);

return (
    <Button
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        id={uniqueId}
        className={clsx(classes.root,'drum-pad')}
        sx={{
            fontSize:25
        }}
        >
       {drumPad}
       <audio ref={audioEl} src={src} className="clip" id={drumPad}></audio>
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
