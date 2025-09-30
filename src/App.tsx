import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MultiStepForm from './components/MultiStepForm'
import Sucess from './page/sucess'

function App() {
 

  return (
    <>
     {/* <h1 className="text-3xl font-bold underline">Hello This  is react with typescript</h1> */}
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<MultiStepForm />} />
      <Route path='/sucess' element={<Sucess />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


