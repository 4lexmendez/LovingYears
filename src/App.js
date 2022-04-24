import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Seventeen from './pages/Seventeen'
import Eighteen from './pages/Eighteen'
import Nineteen from './pages/Nineteen'
import Twenty from './pages/Twenty'
import Twentyone from './pages/Twentyone'
import Twentytwo from './pages/Twentytwo'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Test from './pages/Test'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Soundbar from './components/Soundbar'
import "./styles.css"





function App() {
  return (
    <Router>
     
      
     
       <div className='flex flex-col justify-between
       h-screen'>
         <Navbar />
         <div className="soundBar">
           <Soundbar />

           </div>
           
          
         
         
         
         
  
         <main className='continer mx-auto px-3 pb-12'>
           
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/notfound' element={<NotFound />} />
             <Route path='/*' element={<NotFound />} />
             <Route path='/seventeen' element={<Seventeen />} />
             <Route path='/eighteen' element={<Eighteen />} />
             <Route path='/nineteen' element={<Nineteen />} />
             <Route path='/twenty' element={<Twenty />} />
             <Route path='/twentyone' element={<Twentyone />} />
             <Route path='/twentytwo' element={<Twentytwo />} />
             <Route path='/test' element={<Test />} />

            
           </Routes>
          
           
           </main>
           <Footer />
           


           
      </div>
    </Router>
   
  )
}

export default App;
