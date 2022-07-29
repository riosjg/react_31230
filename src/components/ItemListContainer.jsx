import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "./utils/data";
import { useParams } from "react-router-dom";
import Spinner from "./ExampleComponents/Spinner";
import {
  getDoc,
  doc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });

  useEffect(() => {
    // OBTENER DOCUMENTO (ITEM/PRODUCTO) POR ID

    // const db = getFirestore();
    // const docRef = doc(db, "items", "cQdNxwMpWJ4XUU9a1Yqq");
    // getDoc(docRef).then((snapshot) => {
    //   const data = { id: snapshot.id, ...snapshot.data() };
    // });

    // OBTENER COLLECCION (LISTA) COMPLETA

    // const db = getFirestore();
    // const itemsCollection = collection(db, "items");
    // getDocs(itemsCollection).then((snapshot) => {
    //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //   console.log(data);
    // });

    // OBTENER COLLECCION (LISTA) CON FILTRO

    // const db = getFirestore();
    // const itemCollection = collection(db, "items");
    // const filteredCollection = query(
    //   itemCollection,
    //   where("category", "==", "instruments"),
    //   limit(1)
    // );
    // getDocs(filteredCollection).then((snapshot) => {
    //   const data = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   console.log(data);
    // });

    setLoading(true);
    promise.then((res) => {
      const products = res;
      if (name) {
        setItems(products.filter((product) => product.category == name));
      } else {
        setItems(products);
      }
      setLoading(false);
    });
  }, [name]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="mt-5">
        <ItemList items={items} />
      </div>
      {/* {loading ? (
        <Spinner />
      ) : (
        <div className="mt-5">
          <ItemList items={items} />
        </div>
      )}

      {!disabled && <button>Hola</button> }

      {loading && <Spinner />}
      {!loading && (
        <div className="mt-5">
          <ItemList items={items} />
        </div>
      )}
    </>
    <>
      <h2>
        {loading ? "Loading..." : "Loaded"}
      </h2>
    </> */}
    </>
  );
};

export default ItemListContainer;
