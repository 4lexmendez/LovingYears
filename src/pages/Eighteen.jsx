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
      <br/><br/><br/><br/>
   
    
    <div
  id="carouselExampleCrossfade"
  className="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>

  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="0"
      className="active"
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



  </div>



  <div className="carousel-inner relative w-full overflow-hidden">




    <div className="carousel-item active float-left ">
      <img
        src={six}
        className=""
        alt="Wild Landscape"
      />
    </div>





    <div className="carousel-item float-left ">
      <img
        src={five}
        className=""
        alt=""
      />
    </div>




    <div className="carousel-item float-left ">
      <img
        src={three}
        className=""
        alt=""
      />
    </div>


    <div className="carousel-item float-left ">
      <img
        src={four}
        className=""
        alt=""
      />
    </div>


    <div className="carousel-item float-left ">
      <img
        src={one}
        className=""
        alt=""
      />
    </div>





    <div className="carousel-item float-left ">
      <img
        src={two}
        className=""
        alt=""
      />
    </div>


  </div>


  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  

</div>

    
    </main>
  )
}

export default Eighteen






