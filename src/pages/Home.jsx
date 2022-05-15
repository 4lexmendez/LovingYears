import React from 'react'
import NOTE from './NOTE.pdf'
import "./styles.css"



export const Home = () => {
  return (
    <> 
    
    <div class="w-15 h-15 p-1 bg-cyan-600 rounded-md animate-ping">A Small Token Of Love</div>

    <div className="homeDiv">
      It has been 5 years so far & everyday, 
      <br />
      whether dark & gloomy, 
      <br/>or shiny & delightful,
      <br/> I'm grateful to spend with you
      <br/>
      <br/>
      I Love You  
      <br/>
      <br/>
      
      <p>Find out my first thoughts in this note below
        <br/>
        </p>
        <br/>


        <div class="w-20 h-10 p-2 bg-cyan-600 rounded-md animate-bounce">
        
      <a href={NOTE} download="NOTE.pdf">NOTE</a>
      
        </div>

      
      </div>
      



    </>
  )
}

export default Home