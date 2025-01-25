import React from 'react'
import { Switch } from 'antd';
import "../styles/Styles.css";
const Light1 = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className='lightdiv'>
      <h3>
        Light1
      </h3>
      <Switch className="custom-toggle-button" onChange={onChange} />
    </div>
  )
}

export default Light1;