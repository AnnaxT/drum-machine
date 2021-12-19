import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';

const PowerSwitch = ({ powerOnOff, isOnOff, }) => {

    const displayOnOff = isOnOff === 'ON' ? 'ON' : 'OFF';

    return (
        <div>
            <Typography variant="h6" align="center">Power</Typography>
        <FormControlLabel
            control={<Switch defaultChecked onChange={() => powerOnOff()}/>}
            label={displayOnOff}
            labelPlacement="right"
            />
      </div>
    )
}

export default PowerSwitch;

PowerSwitch.propTypes = {
    powerOnOff: PropTypes.func.isRequired,
    isOnOff: PropTypes.string.isRequired,
}