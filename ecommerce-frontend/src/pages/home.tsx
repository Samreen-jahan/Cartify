import {Link} from "react-router-dom";
import ProductCart from "../components/product-card";

const Home = () => {
  const addToCartHandler=() =>{}
  return (
    <div className='home'>
      <section></section>

      <h1>Latest  Products
        <Link to= "/search" className='findMore'>
        More
        </Link>
      </h1>

      <main>

        <ProductCart
         productId ="adsvdfg" 
         name="MacBook" 
        price ={21453} 
         stock ={234}
         handler={addToCartHandler}
         photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRNlWdm98G-lFawMTNye9hH3qbRHV3bcHVg&s"
         />

      </main>

    </div>
  )
}

export default Home