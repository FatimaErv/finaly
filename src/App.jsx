import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'
import { Provider } from 'react-redux'

function App() {

  return (
    <div className='wrapper'>
     <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App
