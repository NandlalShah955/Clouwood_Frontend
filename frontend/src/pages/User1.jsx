import React from 'react'
import Bedroom from '../components/Bedroom';
import Kitchen from '../components/Kitchen';
import MyButton from '../components/MyButton';
import "../styles/Styles.css";

const User1 = () => {
  return (
      <div className='user-container'>
        <h1>User 1</h1>
        <div className='user-rooms'>
          <Bedroom />
          <Kitchen />
        </div>
          <MyButton />
      </div>
  )
}

export default User1;