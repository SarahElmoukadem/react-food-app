import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, {useState} from 'react'
import CartProvider from "./store/CartProvider";

function App() {

  const [cartModal, setCartModal] = useState(false)

  const onShowCartHandler = () => {
    setCartModal(true)
  }

  const onHideCartHandler = () => {
    setCartModal(false)

  }


  return (
    <CartProvider>

   {cartModal && <Cart  onClose={onHideCartHandler}/>}

      <Header
       onShowCart={onShowCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
