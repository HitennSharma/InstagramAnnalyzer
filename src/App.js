import Header from './Components/Header.js'
import './App.css';
import ProductList from './Components/ProductList.js';
import { Fragment, useState } from 'react';
import Foot from './Components/Footer.js'
import { useEffect } from 'react';
import AddItem from './Components/AddItem.js'

function App() {
  const[totalPrice,setTotalPrice]=useState(0)
  const [productList, setproductList] = useState([
    {
      name: "iphone 14",
      price: 100000,
      quantity: 0,
      totalPrice: 0
    },
    {
      name: "iphone 13",
      price: 58000,
      quantity: 0,
      totalPrice: 0
    },
    {
      name: "iphone 12",
      price: 24000,
      quantity: 0,
      totalPrice: 0
    }
  ])

  function increaseQuantity(product) {
    let i = productList.indexOf(product);
    if (i <= productList.length) {
      let newProductList = [...productList];
      newProductList[i].quantity += 1;
      setproductList(newProductList);
      console.log("increased")
    }
    else {
      console.log("error while increasing")
    }
    price()
  }
  function decreaseQuantity(product) {
    let i = productList.indexOf(product);
    if (productList[i].quantity>0) {
      
        let newProductList = [...productList];
        newProductList[i].quantity -= 1;
        setproductList(newProductList);
        console.log("decreased")
      
    }
    else {
      console.log("error while decreasing")
    }
    price()

  }
  function removeQuantity(product){
    // let i = productList.indexOf(product);
    
    let newProductList = productList.filter((productt) => productt !== product);
    setproductList(newProductList);
    price()
  }
  
  function price() {
    let totalPrice = productList.reduce((sum, product) => sum + product.price * product.quantity, 0);
    
    setTotalPrice(totalPrice);
  }
  function addItem(productName, productPrice) {
    // Create a new product object
    const newProduct = {
      name: productName,
      price: productPrice,
      quantity: 0,
      totalPrice: 0
    };
  
    // Update the productList state by creating a new array with the new product
    setproductList((prevProductList) => [...prevProductList, newProduct]);
  }
  
  useEffect(() => {
    price();
  }, [productList]);
  

  return (
    <Fragment>
      <Header />
      <main>
        <AddItem addItem={addItem}></AddItem>
        <ProductList 
        products={productList} 
        increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} 
        removeQuantity ={removeQuantity}
        />
        
      </main>
      <Foot price={totalPrice}/>
    </Fragment>
  );
}

export default App;
