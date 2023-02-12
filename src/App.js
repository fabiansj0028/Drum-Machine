import { useState } from 'react';
import './App.css';
import PadBank from './PadBank';

const audios = [
  {
    keyCode:81,
    id: "Heater 1",
    key: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode:87,
    id: "Heater 2",
    key: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode:69,
    id: "Heater 3",
    key: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode:65,
    id: "Heater 4",
    key: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode:83,
    id: "Clap",
    key: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode:68,
    id: "Open-HH",
    key: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode:90,
    id: "Kick-n'-hat",
    key: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode:88,
    id: "Kick",
    key: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode:67,
    id: "Closed-HH",
    key: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]
 
function App() {
  const [soundText, setSoundText] = useState('');
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);

  return (
    <div id='drum-machine' className='inner-container'>
      <PadBank audios={audios} changeDisplay={setSoundText} power={power} volume={volume}/>
      <div className='controls-container'>
        <p id='display'>{soundText}</p>
        <div className='volume-control'>
          <p>Volume</p>
          <input type='range' min='0' max='1' step='0.01' onChange={(e)=>{setVolume(e.target.value)}} value={volume}/>
        </div>
      </div>
    </div>
  );
}

export default App;
