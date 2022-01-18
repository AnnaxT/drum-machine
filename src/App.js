import React, { useState, useRef } from 'react';
import Container from './components/Container';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import BankSwitch from './components/BankSwitch';
import PowerSwitch from './components/PowerSwitch';
import VolumeSlider from './components/VolumeSlider';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';
import { bankOne, bankTwo } from './sounds.js'
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles({
  drumPad: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px'
  },

  controlPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  },
});

const wrapper = {
  height:"100vh",
  display:"flex",
  justifyContent: "center",
  alignItems:"center",
  backgroundColor:"#1c1b1b",
}

function App() {

  const [color, setColor] = useState(purple);
  const [isDisabled, setIsDisabled] = useState(false);
  const [power, setPower] = useState('ON');
  const [bank, setBank] = useState('bankOne')
  const [isChecked, setIsChecked] = useState(false);
  const [currentPad, setCurrentPad] = useState('');
  const [volume, setVolume] = useState(0.3);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: color[500]
      }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

});

  // toggle color
  const toggleColor = () => {
    setColor(color === purple ? green : purple);
  }

  // Volume slider
  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
};

  const minVolume = () => {
    setVolume(0);
  };

  const maxVolume = () => {
    setVolume(1);
  };

  // Toggle on and off
  const controlOnOff = () => {
  if (power === 'ON') {
    setPower('OFF');
  } else {
    setPower('ON');
  }
  switchOnOff();
  };

  // switch Off and On

  const switchOnOff = () => {
    setIsDisabled(!isDisabled);
    setCurrentPad('');
    setBank('bankOne');
    setIsChecked(false);
    setVolume(0.3);
    setColor(purple);
  }

  // Toggle bank
  const switchBank = () => {
    if (isDisabled) return;

    setBank(bank === 'bankOne' ? 'bankTwo' : 'bankOne')
    
    setIsChecked(!isChecked);
    setCurrentPad('');
    toggleColor();
    
  };

  const matches = useMediaQuery('(orientation: landscape)')
  const classes = useStyles();
  let bankMode = bank === 'bankOne' ? bankOne : bankTwo;
  
  return (
  <ThemeProvider theme={theme}>
    <div id="drum-machine" style={{ height:"100vh", display:"flex", justifyContent: "center", alignItems:"center", backgroundColor:"#1c1b1b"}}>
     <Container>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {(
          <div className={ classes.drumPad }>
            {bankMode.map((item) => (
            <DrumPad
              className="drum-pad"
              key={item.keyCode}
              drumPad={item.keyTrigger}
              drumId={() => setCurrentPad(item.id)}
              uniqueId={item.id}
              src={item.url}
              disabled={isDisabled}
              bankOne={bankOne}
              volume={volume}
            />
              ))}
          </div>
)}
      
        </Box >
        <Box className={classes.controlPanel}>
        <Typography variant="h4" component="h1" gutterBottom>DRUM MACHINE</Typography>
        <div style={{ display:"flex", justifyContent:'space-around', width: "100%", marginTop:'10px'}} >
          <PowerSwitch 
            powerOnOff={controlOnOff}
            isOnOff={power}
            disabled={isDisabled}
          />

          <BankSwitch
            toggleBank={switchBank}
            bank={bank}
            disabled={isDisabled}
            bankOne={bankOne}
            checked={isChecked}
          />    
        </div>
          <Display
            
            toggleBank={switchBank}
            bank={bank}
            drumPad={currentPad}
            disabled={isDisabled}
          />
          <VolumeSlider
            onChange={handleVolumeChange}
            disabled={isDisabled}
            value={volume}
            minVolume={minVolume}
            maxVolume={maxVolume}
          />
        </Box>
     </Container>
     </div>
   </ThemeProvider>
  );
}

export default App;
