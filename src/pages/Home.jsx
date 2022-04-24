import React from 'react'
import NOTE from './docs/NOTE.pdf'



export const Home = () => {
  return (
    <> 
   
    <div>
      It has been 5 years so far & everyday, 
      <br />
      whether dark & gloomy 
      <br/>or shiny & delightful
      <br/> I'm grateful to spend w you
      <br/>
      <br/>
      I Love You  
      <br/>
      <br/>
      <small>Find out my first thoughts
        <br/>
        </small>

      <button class="btn btn-outline btn-primary">
        
      <a href={NOTE} download="NOTE.pdf"> NOTE </a>

      </button>
      


    </div>

    </>
  )
}

export default Home