import React, {useEffect, useState} from 'react';
import Slider from "./Slider";

const Content = () => {
    const [swapScreen, setSwapScreen] = useState(true);
    useEffect(()=>{
        const width = window.innerWidth
        if(width < 900){
            setSwapScreen(false)
        }
    }, [])
    return (
        <>
            {
                swapScreen ?
                    <div className='container'>
                        <div className='screen-one'>
                            <h1>
                                Егор, поздравляю тебя с днем рождения!
                            </h1>
                            <h2>
                                в этот змечательный день у меня есть пачка пожеланий
                            </h2>
                        </div>
                        <Slider/>
                    </div> :
                    <div className='mobile-screen'>
                        <div className='mobile-title'>
                            Tы че, пес?
                            <br/>Я же сказал с компа смотреть!
                        </div>
                    </div>
            }
        </>
    );
};

export default Content;