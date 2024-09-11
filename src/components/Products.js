
//product list


import one from "../assets/images/p1.jpeg"
import two from "../assets/images/p2.jpeg"
import three from "../assets/images/p3.jpeg"


function Products(){
    return (<div class="products">
        <div class="productone">
        <img src={one}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto fuga libero quas numquam obcaecati reiciendis unde asperiores! Cumque, debitis!</p>
        </div >
        <div class="productone">
        <img src={two}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quidem architecto impedit voluptatem nemo explicabo deserunt nihil suscipit et voluptatum!</p>
        </div>
        <div class="productone">
        <img src={three}></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolore quas cupiditate accusantium nam quaerat quae aperiam, neque facere voluptates.</p>
        </div>
        </div>)
}
 
export default Products