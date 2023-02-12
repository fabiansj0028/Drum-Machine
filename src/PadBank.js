import './PadBank.css'
import DrumPad
 from './DrumPad'

export default function PadBank({audios, changeDisplay,power, volume})
{
  return(
      <div className='pad-bank'>
      {audios.map((clip)=>(
        <DrumPad key={clip.id} clip={clip} audioSrc={power? clip.src: '#'} 
                 volume={volume} changeDisplay={changeDisplay} power={power}/>
      ))}
    </div>
  )
}