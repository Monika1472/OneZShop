import React from 'react'
import { MenuList } from '../Helpers/MenuList';
import  MenuItem  from '../Components/MenuItem';
import '../Styles/MenuCart.css'
import BackgrdImage from '../Images/Photoback.png';
import { Link } from 'react-router-dom';

// function MenuCart() {
//   const [cartItems, setCartItems] = useState([{
//     name:"Blackberrys Luxe Green Shirt",
//     image:'BlackberrysLuxe',
//     price:550.00
// }]);

//   const onAddToCart = (item) => {
//     // Check if the item is already in the cart
//     const isItemInCart = cartItems.some((cartItem) => cartItem.name === item.name);

//     // If the item is not in the cart, add it
//     if (!isItemInCart) {
//       setCartItems((prevItems) => [...prevItems, item]);
//       console.log("Item added to cart:", item);
//     } else {
//       console.log("Item is already in the cart:", item);
//     }
//   };
 
// console.log("nth :" ,cartItems)

// // function MenuCart() {
// //   // console.log(MenuItem.name);
// //   // const [count,setCount]=useState(0);
// //   // const onhandleAddToCart=(e)=>{
// //   //   e.preventDefault();
// //   //   setCount((count)=>count+1);
// //   //   console.log("add to cart form submitted");
// //   const onAddToCart = (item) => {
// //     // Add your logic for handling the addition to the cart
// //     console.log("Item added to cart:", item);
// //   };
 
//   return (
//     <div className='menu' style={{backgroundImage:`url(${BackgrdImage})`}} >
//         <h1 className='menuTitle'>Products</h1>
//         <div className='menuList'>
//           {MenuList.map((menuItem,key)=>{
//             // console.log(menuItem.name);
//             return <MenuItem key={key}
//             image={menuItem.image}
//             name={menuItem.name}
//             price={menuItem.price}
//             onAddToCart={onAddToCart} />
//         })}
//         </div>
//     </div>
//   );
// }

// export default MenuCart;

// ... (existing code)

const MenuCart = ({cartItems, setCartItems}) => {
  // const temp=["pencil","jpeg",15];
  // const [cartItems, setCartItems] = useState([temp]); // Initialize cartItems as an empty array

  const onAddToCart = ({name,image,price}) => {
    const item = {name,image,price,quantity:1};
    setCartItems((prevItems) => [...prevItems, item]);
    console.log("Check",cartItems);
    // cartItems.push(item);cartItems.push(item);
    
    // const isItemInCart = cartItems.some((cartItem) => cartItem.name === item.name);
    

    // if (!isItemInCart) {
    //   setCartItems((prevItems) => [...prevItems, item]);
    //   console.log("Item added to cart Funnyyyyy:", item);
    //   // setCartItems(item);
    //   console.log(cartItems);
      
      
      
    // } else {
    //   console.log("Item is already in the cart:", item);
      
    // }
    
};

const onhandleViewCart=(e)=>{
  e.preventDefault();
  return(
    <Link to="/Cart"></Link>
  );
  // setCount((count)=>count+1);
  // console.log("add to cart form submitted");
}



  return (
    <>
    <div className='menu' style={{backgroundImage:`url(${BackgrdImage})`}} >
      <h1 className='menuTitle'>Products</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => (
          <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} 
          onAddToCart={onAddToCart}
          onhandleViewCart={onhandleViewCart} />
        ))}
      </div>
      <Link to="/Cart">
          <button >View cart</button>
    </Link>
    </div>
    </>
    
  );
}

export default MenuCart;
