
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";





export default function SocialFollow() {
  return (
    
        
      


    <div class="grid grid-flow-col gap-10 bg-primary ">
      
 <a href="https://www.youtube.com/channel/UCoEzp7t1xdHp7ItsaD30N8w"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>


      <a href="https://github.com/4lexmendez"
        className="facebook social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
      
      
     


      <a href="https://www.twitter.com/4lexmendez" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      


      <a href="https://www.instagram.com/4lexmendez"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

      </div>
     
    );
  }