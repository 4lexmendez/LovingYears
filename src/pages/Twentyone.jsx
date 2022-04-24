import one from './LYP/twentyone/one.jpeg'
import two from './LYP/twentyone/two.jpeg'
import three from './LYP/twentyone/three.jpeg'
import four from './LYP/twentyone/four.jpeg'
import five from './LYP/twentyone/five.jpeg'
import six from './LYP/twentyone/six.jpeg'



function Twentyone() {
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
  <img src={five} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img src={six} width="300" height="200"/>
  </div> 
  

</div>

    
    </div>
    </main>
  )
}

export default Twentyone