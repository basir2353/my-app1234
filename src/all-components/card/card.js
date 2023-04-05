import './card.css';

export default function Card(props){

    return <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={ props.myAd.picture || "https://materializecss.com/images/office.jpg"} />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"> {props.myAd.title} <i class="material-icons right">more_vert</i></span>
        <p><a href="#">{props.myAd.price}</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>{props.myAd.price}</p>
      </div>
    </div>

}