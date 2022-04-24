import one from './LYP/eight/one.jpeg'
import two from './LYP/eight/two.jpeg'
import three from './LYP/eight/three.jpeg'
import four from './LYP/eight/four.jpeg'
import five from './LYP/eight/five.jpeg'
import six from './LYP/eight/six.jpeg'

function Eighteen() {
  return  (
    <main> 
    <div>
    
    <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
  <img class= "skew-y-12" src={one} width="300" height="500"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={two} width="300" height="500"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={three} width="300" height="500"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={four} width="300" height="500"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={five} width="300" height="500"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={six} width="300" height="500"/>
  </div> 

</div>

    
    </div>
    </main>
  )
}

export default Eighteen