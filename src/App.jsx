import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tooltip, initTE } from "tw-elements";
import Header from './pages/header'
import WorkSpace from './pages/workspace';
import Toolbox from './pages/toolbox'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { init } from './app/globalSlice'

function App() {
  const global = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
      axios.get("https://business-card-maker-6c95b-default-rtdb.firebaseio.com/global.json")
          .then((response) => {
              dispatch(init(response.data))
          })
          .catch((error) => {
              alert(error);
          })
      
  }, [])

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
