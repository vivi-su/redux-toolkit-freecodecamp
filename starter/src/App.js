import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import Modal from "./component/modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {cartItems, isLoading} = useSelector((state)=>state.cart);
  const {isOpen} = useSelector((store)=>store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(()=>{
    dispatch(getCartItems('random'));
  },[dispatch])

  if(isLoading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <main>
        {isOpen && 
        <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </>
  ); 

}
export default App;
