import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <span className='underlined font-semibold text-4xl text-red-300'>Bonne nuit</span>
        </>
    )
}

export default App
