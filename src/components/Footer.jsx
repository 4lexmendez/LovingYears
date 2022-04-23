import Social from './Social'


function Footer() {
    const footerYear = new Date().getFullYear()




  return (
    <footer className='footer p-10 bg-primary text-primary-content footer-center'>
    
    <div>
       
        <Social />
        <p>Copyright &copy; {footerYear} All rights reserved</p>

    </div>
    </footer>
  )
}

export default Footer