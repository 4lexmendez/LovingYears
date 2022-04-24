import one from './LYP/nine/one.jpeg'
import two from './LYP/nine/two.jpeg'
import three from './LYP/nine/three.jpeg'
import four from './LYP/nine/four.jpeg'
import five from './LYP/nine/five.jpeg'



function Nineteen() {
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
  

</div>

    
    </div>
    </main>
  )
}

export default Nineteen