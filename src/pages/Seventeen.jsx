import one from './LYP/seven/one.jpeg'
import five from './LYP/seven/five.jpeg'
import six from './LYP/seven/six.jpeg'
import seven from './LYP/seven/seven.jpeg'
import eight from './LYP/seven/eight.jpeg'
import nine from './LYP/seven/nine.jpeg'
import ten from './LYP/seven/ten.jpeg'







function Seventeen() {
  return  (
    <main> 
    <div>
      <br/><br/><br/><br/>
   
      

    <div
  id="carouselExampleCrossfade"
  className="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
    >




  {/* Indicators */}
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


    <button
      type="button"
      data-bs-target="#carouselExampleCrossfade"
      data-bs-slide-to="6"
      aria-label="Slide 7"
    ></button>

  </div>




{/* Image Containers */}



  <div className="carousel-inner relative w-full overflow-hidden">




    <div className="carousel-item active float-left ">
      <img
        src={one}
        className="block "
        alt=""
      />
    </div>


    <div className="carousel-item float-left ">
      <img
        src={five}
        className="block "
        alt=""
      />
    </div>


    <div className="carousel-item float-left ">
      <img
        src={six}
        className="block "
        alt=""
      />
    </div>

    <div className="carousel-item float-left ">
      <img
        src={seven}
        className="block "
        alt=""
      />
    </div>



    <div className="carousel-item float-left ">
      <img
        src={eight}
        className="block "
        alt=""
      />
    </div>

    <div className="carousel-item float-left ">
      <img
        src={nine}
        className="block "
        alt=""
      />
    </div>

    <div className="carousel-item float-left ">
      <img
        src={ten}
        className="block "
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

export default Seventeen






