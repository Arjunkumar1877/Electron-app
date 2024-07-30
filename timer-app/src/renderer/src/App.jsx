import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
   
   <div className="">
    <TopBar />
    <h1 className='text-lg'>Hello World</h1>
   </div>
  )
}

export default App

