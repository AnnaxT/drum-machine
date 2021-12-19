import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Typography, IconButton } from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';


const VolumeSlider = ({ disabled, value, onChange, minVolume, maxVolume}) => {

    return (
        <Box sx={{ width: 250 }}>
          <Typography align="center">Volume</Typography>
        <Stack spacing={3} direction="row" sx={{ mb: 1 }} alignItems="center">
          <IconButton aria-label="mute" disabled={disabled} onClick={minVolume}>
             <VolumeDown />
          </IconButton>
          <Slider
            aria-label="Volume"
            value={value}
            min={0}
            max={1}
            step={0.01}
            onChange={onChange}
            disabled={disabled}
            valueLabelDisplay="auto"
            valueLabelFormat={(x) => Math.round(x * 100)}
          />
          <IconButton aria-lebel="full volume" disabled={disabled} onClick={maxVolume}>
            <VolumeUp />
          </IconButton>
        </Stack>
      </Box>
    );
}

export default VolumeSlider;

VolumeSlider.propTypes = {
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  minVolume: PropTypes.func.isRequired,
  maxVolume: PropTypes.func.isRequired,
};