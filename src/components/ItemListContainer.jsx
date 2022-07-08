import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAddItem = (count) => {
    alert(`${count} items will be added to the cart!`);
  };
  return <ItemCount stock={5} initial={1} onAdd={onAddItem}></ItemCount>;
};

export default ItemListContainer;
