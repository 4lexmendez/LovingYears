import React from 'react'
import Note from './docs/Note.pdf'



export const Home = () => {
  return (
    <> 
   
    <div>
      It has been 5 years so far and everyday, 
      <br />
      whether dark & gloomy or shiny & delightful
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
        
      <a href={Note} download="Note.pdf"> Note </a>

      </button>
      


    </div>

    </>
  )
}

export default Home