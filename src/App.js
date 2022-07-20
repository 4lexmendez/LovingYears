import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Seventeen from './pages/Seventeen'
import Eighteen from './pages/Eighteen'
import Nineteen from './pages/Nineteen'
import Twenty from './pages/Twenty'
import Twentyone from './pages/Twentyone'
import Twentytwo from './pages/Twentytwo'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Soundbar from './components/Soundbar'
import "./styles.css"
import purple from "./purple.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import 'tw-elements';





function App() {
  return (
    <Router>
     
      
     <div style={{ backgroundImage: `url(${purple})` }}>
       <div className='flex flex-col justify-between h-screen'>
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
           </Routes>
           </main>

           
           <Footer />
           


           
        </div>
        </div>
    </Router>
   
  )
}

export default App;
