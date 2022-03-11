import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../svg/dice.svg';
import { ReactComponent as Pause } from '../svg/pause.svg'
import { ReactComponent as MobilePause } from '../svg/pauseMobile.svg'


const Advice = () => {
    const [advice, setAdvice] = useState("")
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        axios
          .get("https://api.adviceslip.com/advice")
    
          .then((resp) => setAdvice(resp.data.slip));
      }, [count]);


    return (

        <div className='bigContain'>
            <div className="container">
                <h5 className='title'>Advice # {advice.id}</h5>
                <p className='containerAdvice'>{advice.advice}</p>
                <p className='bigScreen'><Pause /></p>
                <p className='littleScreen'><MobilePause /></p>
                <button className='logo' onClick={()=> setCount(count +1)} ><Logo className='dice' /></button>
            </div>

        </div>
    );
};

export default Advice;