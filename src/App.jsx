import './App.css'
import Aboutpage from './component/aboutpage'

import Cardskerala from './component/cardskerala'
import Header from './component/header'
import Homepage from './component/homepage'
import Slider from './component/slider'
import { Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'

function App() {
  const Hpage=lazy(()=>import('./component/homepage'))
  const Aboutpage=lazy(()=>import('./component/aboutpage'))

  return (
    <>
      <Header/>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Hpage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      </Routes>

        </Suspense>
  
      </section>
  
      
    </>
  )
}

export default App;
