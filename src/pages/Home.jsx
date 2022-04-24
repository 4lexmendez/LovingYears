import React from 'react'
import NOTE from './docs/NOTE.pdf'
import "./styles.css"



export const Home = () => {
  return (
    <> 
   
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

      <button class="btn btn-outline btn-primary">
        
      <a href={NOTE} download="NOTE.pdf"> NOTE </a>

      </button>
      </div>
      



    </>
  )
}

export default Home