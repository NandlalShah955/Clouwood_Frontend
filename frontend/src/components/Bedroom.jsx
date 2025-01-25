import React from 'react'
import { Button } from 'antd';
import "../styles/Styles.css";
import Light1 from './Light1';
import Light2 from './Light2';

const Bedroom = () => {
    return (
        <div className='bedroom'>
            <h2>
                Bed Room
            </h2>
            <Light1 />
            <Light2 />
            <div className='bedroom-buttons'>

            <Button>
                Both On
            </Button>
            <Button>
                Both Off
            </Button>
            </div>
        </div>
    )
}

export default Bedroom;