import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tooltip, initTE } from "tw-elements";
import Header from './pages/header'
import WorkSpace from './pages/workspace';
import Toolbox from './pages/toolbox'

function App() {

  return (
    <>
      <div className='h-[100vh] '>
        { <Header /> }
        <div className='flex h-[93vh]'>
          { <WorkSpace /> }
          { <Toolbox /> }
        </div>
      </div>
    </>
  )
}

export default App
