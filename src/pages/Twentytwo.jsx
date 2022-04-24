import one from './LYP/twentytwo/one.jpeg'
import two from './LYP/twentytwo/two.jpeg'
import three from './LYP/twentytwo/three.jpeg'
import four from './LYP/twentytwo/four.jpeg'




function Twentytwo() {
  return  (
    <main> 
    <div>
    
    <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
  <img src={one} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={two} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={three} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={four} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={one} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={two} width="300" height="200"/>
  </div> 
  

</div>

    
    </div>
    </main>
  )
}

export default Twentytwo