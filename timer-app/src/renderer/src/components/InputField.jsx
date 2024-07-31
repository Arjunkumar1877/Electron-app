import React from 'react'

const InputField = ({label, value, onChange, placeholder}) => {
    const handleInputChange = (e)=>{
    const inputValue = e.target.value;
    if(/^\d+$/.test(inputValue)){
        onChange(e)
    }
    }
  return (
    <div className='text-3xl'>
        <label className='text-stone-300'>{label}</label>
        <input type="number"className="w-20 bg-transparent text-blue-400" onChange={handleInputChange} value={value} placeholder={placeholder} />
      
    </div>
  )
}

export default InputField
