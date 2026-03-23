import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions';
import Rechart from './components/Rechart/Rechart';

const pricingPromise=fetch("PricingData.json").then(res=>res.json());
const resultPromise=fetch("StudentResult.json").then(res=>res.json());

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
      </main>
      <footer>

      </footer>

    

    </>
  )
}

export default App
