import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-0  text-primary-content footer-center'>  
    <main class="flex flex-row space-x-4">
  




      <a href="https://www.youtube.com/channel/UCoEzp7t1xdHp7ItsaD30N8w"
            className="hearts">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://github.com/4lexmendez"
            className="hearts">
            <FontAwesomeIcon icon={faGithub} size="2x" />
      </a> 
      <a href="https://www.twitter.com/__alexjandro__" className="hearts">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>           
      <a href="https://www.instagram.com/__alexjandro__"
            className="hearts">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
  <p className="hearts">Copyright &copy; {footerYear} All rights reserved</p>





    </main>
    </footer>
  )
}

export default Footer