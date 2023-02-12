import { useCallback, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import './DrumPad.css';

export default function DrumPad({clip, audioSrc, volume, changeDisplay, power}) {

  const [active, setActive] = [power]

  const playSound = useCallback(()=>{
    const sound=document.getElementById(clip.key);
    sound.currentTime=0;
    sound.volume = volume;
    changeDisplay(clip.id);
    sound.play();
  },[volume]);

  const handleKeyPress= useCallback((e)=>{
    if(e.keyCode === clip.keyCode){
      playSound();
    }
  },[playSound])

  useEffect(()=>{
    document.addEventListener('keydown',handleKeyPress);
    return()=>{
      document.removeEventListener('keydown',handleKeyPress);
    }
  },[handleKeyPress]);


  return (
    <div className='drum-pad' id={clip.id} onClick={()=>{
      playSound();
    }}>
        <audio className='clip' src={audioSrc} id={clip.key} />
        {clip.key}  
    </div>
  )
}
