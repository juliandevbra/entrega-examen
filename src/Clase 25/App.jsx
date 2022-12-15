import { ToastContainer } from 'react-toastify'
import './App.css'
import ContactForm from './Clase 23/ContactForm'
import AsyncAwait from './Clase 25/AsyncAwait'
import FetchAxios from './Clase 25/FetchAxios'

const App = () =>  {

  return (
    <>
      <FetchAxios/>
      <AsyncAwait/>
      <ToastContainer />
    </>
  )
}

export default App
