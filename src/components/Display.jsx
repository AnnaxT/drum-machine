import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const Display = ({ drumPad, disabled }) => {

    return(
        <Box
            sx={{
                padding: '10px',
                margin: '15px',
                width: '90%',
                height: "35px",
                textAlign: 'center',
                backgroundColor: !disabled ? 'primary.main' : 'action.disabledBackground',                
            }}
        >
            <Typography variant="h5">
                {drumPad}
            </Typography>         
        </Box>
    )
}

export default Display;

Display.propTypes = {
    drumPad: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}