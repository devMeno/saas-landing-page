import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Button } from 'flowbite-react';
// import { Navbar } from 'flowbite-react';
import Banner from './components/banner'
import Second from './components/second'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Banner />
            <Second />
        </>
    )
}

export default App
