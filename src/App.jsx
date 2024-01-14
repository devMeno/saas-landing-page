import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import { Button } from 'flowbite-react';
// import { Navbar } from 'flowbite-react';
import Banner from './components/banner'
import Second from './components/second'
import Third from './components/third'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Banner />
            <Second />
            <Third />
        </>
    )
}

export default App
