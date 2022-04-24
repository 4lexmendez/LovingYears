import {FcLike} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Soundbar from './Soundbar'





function Navbar({title}) {
  return (
  <nav className= 'navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className = 'container mx-auto'>
      <div className="flex-none px-2 mx-2">
          <FcLike className='inline pr-2 text-3xl' />
           <Link to='/' className='text-lg font-bold align-middle'>
          {title}
          </Link>
          <FcLike className='inline pr-2 text-3xl' />
          

      </div>
      
      <div className="flex-1 px-2 mx-2 gap-10">
          <div className='flex justify-end gap-2'>
              <Link to='/' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  Home
              </Link>
              <Link to='/seventeen' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  17'
              </Link>
              <Link to='/eighteen' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  18'
              </Link>
              <Link to='/nineteen' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  19'
              </Link>
              <Link to='/twenty' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  20'
              </Link>
              <Link to='/twentyone' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  21'
              </Link>
              <Link to='/twentytwo' className='btn btn-outline btn-primary btn-xs rounded-btn' >
                  22'
              </Link>
              
              
              
              
          </div>
          

      </div>
      

      </div>
      
      

  </nav>
  )
}

Navbar.defaultProps = {
    title: 'Loving Years'
}
Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar