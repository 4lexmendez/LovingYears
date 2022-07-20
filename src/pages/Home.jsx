import React from 'react'
import NOTE from './NOTE.pdf'




export const Home = () => {
  return (
    <> 
    
    <section class="w-15 h-15 p-1 bg-pink-600 rounded-md animate-ping">
      A Small Token Of Love
    </section>


    <main className="homeDiv">
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
      
      <p>
        Find out my first thoughts in this note below
        <br/>
      </p>
        <br/>


        <article class="w-20 h-10 p-2 bg-pink-600 rounded-md animate-bounce"> 
          <a href={NOTE} className="homeDiv" without rel="noopener noreferrer" target="_blank" >
            NOTE
           </a>
        </article>



      </main>
    </>
  )
}

export default Home