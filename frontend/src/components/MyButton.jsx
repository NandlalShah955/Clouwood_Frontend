import React from 'react'
import { Button } from 'antd';
import "../styles/Styles.css";
const MyButton = () => {
  return (
     <div className='user-buttons'>
              <Button>All ON</Button>
              <Button>All OFF</Button>
            </div>
  )
}

export default MyButton