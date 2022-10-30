import { useState } from 'react'
import './styles/main.css';
import Presentation from './Pages/Presentation';
import WhoIsTheEventFor from './Pages/WhoIsTheEventFor';
import AlefMiranda from './Pages/AlefMiranda';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
        <Presentation />
        <WhoIsTheEventFor />
        <AlefMiranda />
        <Footer />
        <div className='sponsors bg-white text-black text-center'>
            Developed by <a className="text-blue-900" href="https://github.com/ViniciusAlvesRocha">Vinicius Rocha</a> and designed by <a className="text-blue-900" href="https://www.instagram.com/cassio.dsgn/">Cássio Rufino</a>
        </div>
    </div>
  )
}

export default App
