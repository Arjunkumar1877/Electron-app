
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Timer from './components/Timer';

function App() {
  const [isOverlay, setIsOverlay] = useState(false);

  useEffect(() => {
    const handleOverlayMode = (event, isOverlayOn) => {
      setIsOverlay(isOverlayOn);
    };

    window.electron.ipcRenderer.on('overlay-mode', handleOverlayMode);

    return () => {
      window.electron.ipcRenderer.removeListener('overlay-mode', handleOverlayMode);
    };
  }, []);

  return (
   
   <div className="">
    <TopBar />
   <div className="bg-black bg-opacity-40 p-2 rounded-b-xl">
   <Timer />
   </div>
   </div>
  )
}

export default App

