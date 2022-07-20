import one from './LYP/nine/one.jpeg'
import three from './LYP/nine/three.jpeg'
import four from './LYP/nine/four.jpeg'
import six from './LYP/nine/six.jpeg'
import eight from './LYP/nine/eight.jpeg'
import ten from './LYP/nine/ten.jpeg'
import twelve from './LYP/nine/twelve.jpeg'




function Nineten() {
  return  (
    <main> 
    <div>
      <br/><br/><br/><br/>
   
      

    <div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>


  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>



    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>


    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>



    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>


    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>



    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="5"
      aria-label="Slide 6"
    ></button>


    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>




  </div>

  <div class="carousel-inner relative w-full overflow-hidden">




    <div class="carousel-item active float-left ">
      <img
        src={one}
        class="block "
        alt=""
      />
    </div>





   





    


    




    <div class="carousel-item float-left ">
      <img
        src={three}
        class="block "
        alt=""
      />
    </div>




   

    <div class="carousel-item float-left ">
      <img
        src={four}
        class="block "
        alt=""
      />
    </div>



   



   

    <div class="carousel-item float-left ">
      <img
        src={six}
        class="block "
        alt=""
      />
    </div>




   


    <div class="carousel-item float-left ">
      <img
        src={eight}
        class="block "
        alt=""
      />
    </div>



    


    <div class="carousel-item float-left ">
      <img
        src={ten}
        class="block "
        alt=""
      />
    </div>


    


    <div class="carousel-item float-left ">
      <img
        src={twelve}
        class="block "
        alt=""
      />
    </div>


  </div>

  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  

</div>

    
    </main>
  )
}

export default Nineten






