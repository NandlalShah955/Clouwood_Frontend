import React from 'react'
import { Switch } from 'antd';
const Light2 = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className='lightdiv'>
         <h3>
           Light2
         </h3>
         <Switch className="custom-toggle-button" onChange={onChange} />
       </div>
  )
}

export default Light2;