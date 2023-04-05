import { useEffect } from 'react';
import M from 'materialize-css';

 

export default function (){
       
  useEffect(()=>{

    M.Carousel.init(document.getElementById('meraTag'), {});


  }, []);


   
  return <div>
 
<h1>asjkdaskdj</h1>
<div class="carousel" id='meraTag'>
    <a class="carousel-item" href="#one!"><img src="1.png" /></a>
    <a class="carousel-item" href="#one!"><img src="1.jpg" /></a>
    <a class="carousel-item" href="#one!"><img src="1.jpg" /></a>
    <a class="carousel-item" href="#one!"><img src="1.jpg" /></a>
    {/* <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a> */}
  </div>

    </div>


}