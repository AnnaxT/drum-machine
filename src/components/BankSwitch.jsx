import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';


const BankSwitch = ({ toggleBank, bank, disabled, checked }) => {

    const displayBank = bank === 'bankOne' ? 'Bank 1' : 'Bank 2';

    return (
    <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center" }}>
        <Typography variant="h6" align="center">Mode</Typography>
        <FormControlLabel
            control={<Switch onChange={() => toggleBank()} />}
            label={displayBank}
            labelPlacement="right"
            disabled={disabled}
            checked = {checked}
        />
    </div>
   
    )
}

export default BankSwitch;

BankSwitch.propTypes = {
    toggleBank: PropTypes.func.isRequired,
    bank: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
}