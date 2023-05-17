import "../styles/item.css";

function Item({products}) {
  return (
    <div>
      <div className="product">
        {products.map((product) => (
          <div key={product.id}>
            <img className="image" alt="제품이미지" src={product.image_url || product.brand_image_url}></img>
            <div className="topLine">
              <div className="leftText">
                <div className="productTitle">{product.type === "Category" ? "#" + product.title : product.title || product.brand_name}</div>
              </div>
              <div className="rightText">
                {product.type === "Product" ? product.discountPercentage + "%" : null}
                {product.type === "Brand" ? "관심고객수" : null}
              </div>
            </div>
            <div className="priceAndfollwer">{product.price || product.follower}</div>
            <div className="subTitle">{product.sub_title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
