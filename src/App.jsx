import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions';

const pricingPromise=fetch("PricingData.json").then(res=>res.json());

function App() {


  return (
    <>
      <header>
        <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>

        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </main>
      <footer>

      </footer>

    

    </>
  )
}

export default App
