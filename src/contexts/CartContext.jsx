import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
  doc,
  writeBatch,
} from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const sendOrder = (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };
    addDoc(orderCollection, order)
      .then((res) => console.log(res.id))
      .catch((err) => console.log("error", err));
  };

  const updateOrder = () => {
    const db = getFirestore();
    const docRef = doc(db, "items", "PatNxY6HFkj2NWjdBiQD");
    updateDoc(docRef, { price: 500 })
      .then((res) => alert("Order updated"))
      .catch((err) => alert("Order update failed"));
  };

  const multipleUpdates = () => {
    const db = getFirestore();
    const batch = writeBatch(db);
    const docRef = doc(db, "orders", "yFNkyYhtywT0QBmpI9W1");
    const docWithoutPrice = doc(db, "orders", "0eVkTcqobXQvsYyeQTwv");
    batch.update(docRef, { total: 180 });
    batch.update(docWithoutPrice, {
      buyer: { mail: "test", name: "test", phone: "1111" },
    });
    batch.commit();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        sendOrder,
        updateOrder,
        multipleUpdates,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
