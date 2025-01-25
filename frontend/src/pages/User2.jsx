import React from 'react';
import Bedroom from '../components/Bedroom';
import Kitchen from '../components/Kitchen';
import { Button } from 'antd';
import "../styles/Styles.css";

const User2 = () => {
  return (
    <div className='user-container'>
        <h1>User 2</h1>
        <div className='user-rooms'>
          <Bedroom />
          <Kitchen />
        </div>
        <div className='user-buttons'>
          <Button>All ON</Button>
          <Button>All OFF</Button>
        </div>
      </div>
  )
}

export default User2;