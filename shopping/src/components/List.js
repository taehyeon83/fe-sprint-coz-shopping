import Item from "./Item";

function List({products}) {
  return (
    <div>
      <Item products={products} />
    </div>
  );
}

export default List;
