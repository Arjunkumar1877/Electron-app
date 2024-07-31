import React from 'react'

const TopBar = () => {
    const handleClose = ()=>{
window.electron.ipcRenderer.send('close-window')
    }

    const handleMinimize = ()=>{
window.electron.ipcRenderer.send('minimize-window')
    }
  return (
    <div>
      <div className="rounded-t-xl bg-blue-400 w-screen h-5" style={{ webkitAppRegion: 'drag'}}></div>
      <div className="bg-blue-400 w-screen h-5"></div>
      <div id="control-buttons" className='absolute text-stone-200 top-0 right-0 pe-3'>
        <button onClick={handleMinimize} className='p-1' id='minimize'>&#128469;</button>
        <button onClick={handleClose} className='p-1' id='close'> &#x2715;</button>
      </div>
    </div>
  )
}

export default TopBar
