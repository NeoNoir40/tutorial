import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div>
            <h1>Bienvenido a mi pagina chuc</h1>
            <div>
                <Link to={"/register"}>
                    <button className='rounded-lg mt-10 bg-blue-500 opacity-50 hover:opacity-100 transition-all text-white'>
                        Iniciar Sesion
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
