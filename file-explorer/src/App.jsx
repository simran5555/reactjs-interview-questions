import './App.css'
import Folder from './components/Folder'
import explorer from './data/data'

function App() {

  return (
    <>
        <Folder explorer={explorer} />
    </>
  )
}

export default App
