import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detailedItems from "./utils/details.json";
import Spinner from "./ExampleComponents/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "detalles", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
