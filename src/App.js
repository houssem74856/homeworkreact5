import './App.css';
import Time from './Time/index'
import Aw9atSalat from './Aw9atSalat/index'
import { useState } from 'react';

function App() {

  const [seconds,setSeconds] = useState('25')
    const [minutes,setMinutes] = useState('57')
    const [hours,setHours] = useState('18')

    setTimeout(() => {
        if(seconds !== '59') {
          if(seconds >= 9){setSeconds((parseInt(seconds)+1).toString())}
          else {setSeconds('0'+(parseInt(seconds)+1).toString())}
      }
        else {
            if(minutes !== 59) {
              if(minutes >= 9){setMinutes((parseInt(minutes)+1).toString())}
              else {setMinutes('0'+(parseInt(minutes)+1).toString())}
              setSeconds('00')
            }
            else{
                if(hours !== 23) {
                  if(hours >= 9){setHours((parseInt(hours)+1).toString())}
                  else {setHours('0'+(parseInt(hours)+1).toString())}
                  setMinutes('00')
                  setSeconds('00') 
                }
                else {
                    setHours('00')
                    setMinutes('00')
                    setSeconds('00')
                }
            }
            }
    },1000)

  return (
    <div className='App'>
        <Time seconds={seconds} minutes={minutes} hours={hours}/>
        <Aw9atSalat minutes={minutes} hours={hours}/>
    </div>
  );
}

export default App;
