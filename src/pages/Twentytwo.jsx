import one from './LYP/twentytwo/one.jpeg'
import two from './LYP/twentytwo/two.jpeg'
import three from './LYP/twentytwo/three.jpeg'
import four from './LYP/twentytwo/four.jpeg'
import five from './LYP/twentytwo/five.jpeg'
import six from './LYP/twentytwo/six.jpeg'
import seven from './LYP/twentytwo/seven.jpeg'




function Twentytwo() {
  return  (
    <main> 
    <div>
    
    <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
  <img class= "skew-y-12" src={one} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={two} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={three} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={four} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={five} width="300" height="200"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={six} width="300" height="200"/>
  </div>
  <div class="carousel-item">
  <img class= "skew-y-12" src={seven} width="300" height="200"/>
  </div> 
  

</div>

    
    </div>
    </main>
  )
}

export default Twentytwo