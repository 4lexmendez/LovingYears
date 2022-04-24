import one from './LYP/twenty/one.jpeg'
import two from './LYP/twenty/two.jpeg'
import three from './LYP/twenty/three.jpeg'
import four from './LYP/twenty/four.jpeg'
import five from './LYP/twenty/five.jpeg'
import six from './LYP/twenty/six.jpeg'
import seven from './LYP/twenty/seven.jpeg'





function Twenty() {
  return  (
    <main> 
    <div>
    
    <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
  <img class= "skew-y-12" src={one} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={two} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={three} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={four} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={five} width="300" height="400"/>
  </div> 
  <div class="carousel-item">
  <img class= "skew-y-12" src={six} width="300" height="400"/>
  </div>
  <div class="carousel-item">
  <img class= "skew-y-12" src={seven} width="300" height="400"/>
  </div> 
  

</div>

    
    </div>
    </main>
  )
}

export default Twenty