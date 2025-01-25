import React from 'react'
import "../styles/Styles.css";
import { Button } from 'antd';
import Light1 from './Light1';
import Light2 from './Light2';
const Kitchen = () => {
    return (
        <div className='kitchen'>
            <h2>
                Kitchen
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

export default Kitchen;