import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Seventeen from './pages/Seventeen'
import Eighteen from './pages/Eighteen'
import Nineteen from './pages/Nineteen'
import Twenty from './pages/Twenty'
import Twentyone from './pages/Twentyone'
import Twentytwo from './pages/Twentytwo'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
       <div className='flex flex-col justify-between
       h-screen'>
         <Navbar />
         <main className='continer mx-auto px-3 pb-12'>
           <Routes>
           <Route path='/' element={<Home />} />
            
             <Route path='/seventeen' element={<Seventeen />} />
             <Route path='/eighteen' element={<Eighteen />} />
             <Route path='/nineteen' element={<Seventeen />} />
             <Route path='/Twenty' element={<Twenty />} />
             <Route path='/Twentyone' element={<Twentyone />} />
             <Route path='/Twentytwo' element={<Twentytwo />} />

             
           </Routes>
           </main>
           <Footer />
           

      
      
      </div>

    </Router>
   
  )
}

export default App;
