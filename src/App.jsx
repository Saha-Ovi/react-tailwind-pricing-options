import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions';
import Rechart from './components/Rechart/Rechart';
import axios, { Axios } from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise=fetch("PricingData.json").then(res=>res.json());
const resultPromise=fetch("StudentResult.json").then(res=>res.json());
const marksPromise=axios.get("MarksData.json");

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>

       <Suspense fallback={
        <div className='flex justify-center items-center'>
          <span className='loading loading-ring loading-xl '></span>
        </div>
       }>
         <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
       </Suspense>

       <Suspense fallback={
        <div className='flex justify-center items-center'>
          <span className='loading loading-ring loading-xl '></span>
        </div>
       }>
        <Rechart resultPromise={resultPromise}></Rechart>
       </Suspense>
       <Suspense fallback={
        <div className='flex justify-center items-center'>
          <span className='loading loading-ring loading-xl '></span>
        </div>
       }>
            <MarksChart marksPromise={marksPromise} ></MarksChart>
       </Suspense>
      </main>
      <footer>

      </footer>

    

    </>
  )
}

export default App
