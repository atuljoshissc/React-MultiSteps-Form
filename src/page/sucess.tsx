import React from 'react'
import { Link } from 'react-router-dom'

const sucess : React.FC = () => {
  return (
      <div>

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600">🎉 Form Submitted Successfully!</h1>
      <p className="mt-4 text-gray-700">Thank you for filling out the form.</p>
     <Link to="/"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Sumbit Another Form </button></Link>
    </div>
      
    </div>
  )
}
export default sucess