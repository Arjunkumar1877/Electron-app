import React from 'react'

const TopBar = () => {
    const handleClose = ()=>{

    }

    const handleMinimize = ()=>{

    }
  return (
    <div>
      <div className="bg-blue-400 w-screen h-5" style={{ webkitAppRegion: 'drag'}}></div>
      <div id="control-buttons" className='absolute top-0 right-0'>
        <button onClick={handleMinimize} id='minimize'>&#128469;</button>
        <button onClick={handleClose} id='close'> &#x2715;</button>
      </div>
    </div>
  )
}

export default TopBar
