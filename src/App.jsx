import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Nav />
            <span className='underlined font-semibold text-4xl text-red-300'>Bonne nuit</span>
        </>
    )
}

export default App
