import React, { useEffect, useState } from 'react'
// const { useEffect } = React;

function Dashboard() {
  const [data, setData] = useState([]);
  // const [counter, setCounter] = React.useState(10);
  // const [pointer, setPointer] = React.useState(100);
  // useEffect(() => { console.log(counter);
  //   console.log(pointer); }, [counter,pointer]);
  const[cart,setCart]=useState([]);
  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch('https://fakestoreapi.com/products');
      console.log(serverResponse);
      const jsondata = await serverResponse.json();
      setData(jsondata)
      console.log(jsondata);
    }
    fetchData();
  }, []);
  function addToCart(element) {
    // alert(element.title)
    setCart((item) => [...item, element]);
    alert(cart.length + 1 + " item added to cart");

  }
  return (
    <div> 
      <div>{
        cart.length===0?(<h2>Your cart is empty</h2>):(
          cart.map((element)=>(
            <div>
              <h4>{element.title}</h4>
            </div>
          ))
        )
      }</div>
      {/* <div><h2>Counter</h2></div>
      <p>Counter: {counter}</p>
      <div><h2>Pointer</h2></div>
      <p>Pointer: {pointer}</p>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setPointer(pointer - 10)}>Pointer</button> */}
      {/* {JSON.stringify(data)} */}
      {data.length === 0 ? <h2>Data is not available</h2> : (
        data.map((element) => (
          <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <><img src={element.image} alt={element.title} /></>
            <h2>{element.title}</h2>
            <h2>{element.price}</h2>
            
            <h4>{element.description}</h4>
            <h3>{element.category}</h3>
            <button onClick={() => addToCart(element)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  )
}

export default Dashboard