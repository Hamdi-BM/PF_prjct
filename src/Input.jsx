import React, { useState } from 'react';


function Input({Vplaceholder,Vtype}){
    const [value, setValue] = useState('');
    const handleChange = (e) => {
    setValue(e.target.value);
  };
    return  <div className="input">
                
                <input  placeholder={Vplaceholder}
                        type={Vtype}
                        value={value}
                        onChange={handleChange} required>
                </input>
            </div>  
}
export default Input;