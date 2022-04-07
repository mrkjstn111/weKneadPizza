// React Import
import React, { Component } from "react";

// Images Import
import pizza1 from '../images/newyork.png'
import pizza2 from '../images/canadian.png'
import pizza3 from '../images/hawaiian.png'
import pizza4 from '../images/bnm.png'
import pizza5 from '../images/chicbbq.png'
import pizza6 from '../images/hamc.png'
import pizza7 from '../images/meatlvr.png'
import pizza8 from '../images/pepperoni.png'

// Bootstrap / SCSS
import 'bootstrap/dist/js/bootstrap.js'
import '../App.css'
class Pizza extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>Pizza</h1>
    <div class="row">
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza1} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">New Yorker Pizza</h5>
        <p class="card-text">New York–style pizza is pizza made with a characteristically 
        large hand-tossed thin crust, often sold in wide slices to go.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
	  </div>
    </div>

  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza2} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Canadian Pizza</h5>
        <p class="card-text"> Canadian pizza" toppings typically include tomato sauce, 
        mozzarella cheese, pepperoni, and mushrooms.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza3} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Hawaiian Pizza</h5>
        <p class="card-text">Hawaiian Pizza combines pizza sauce, cheese, cooked ham, and pineapple.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza4} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Bacon and Mushroom Pizza</h5>
        <p class="card-text">This Bacon Mushroom Pizza is a delicious union of all things delicious 
        bacon, mushroom, and a creamy, cheesy white pizza sauce.</p>
        <a href="pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>

  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza5} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Chicken Barbeque Pizza</h5>
        <p class="card-text">This Chicken Barbeque pizza coated with delicious ingredients ,mozzarella, bhicken barbeque and tomato sauce.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza6} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Ham and Cheese Pizza</h5>
        <p class="card-text">Enjoy the delicious ham and cheese pizza coated with mozzarella and seasoned ham.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza7} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Meat Lover Pizza</h5>
        <p class="card-text">Enjoy a protein-packed serving of bacon, beef, ham, italian sausage, pepperoni and seasoned pork.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3 my-1">
    <div class="card mx-auto" style={{width: 'auto'}}>
	<img src={pizza8} class="card-img-top" alt="pie-1"/>
      <div class="card-body">
        <h5 class="card-title">Pepperoni Pizza</h5>
        <p class="card-text">This pepperoni pizza recipe uses tomato sauce and oregano 
        on a prebaked crust and is topped with cheese and pepperoni.</p>
        <a href="/pizza" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>

</div>

</div>
        )
    }
}

class Wings extends Component{
    render(){
        return(
            <div>
                <h1>Wings</h1>
            </div>
        )
    }
}

export {Pizza, Wings}