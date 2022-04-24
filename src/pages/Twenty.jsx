import one from './LYP/twenty/one.jpeg'
import two from './LYP/twenty/two.jpeg'
import three from './LYP/twenty/three.jpeg'





function Twenty() {
  return  (
    <main> 
    <div>
    
    <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
  <img src={one} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img src={two} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img src={three} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img src={one} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img src={two} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img src={three} width="300" height="400"/>
  </div> 
  

</div>

    
    </div>
    </main>
  )
}

export default Twenty