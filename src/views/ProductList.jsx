import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  // if (!merchants?.length) {
  //     console.log(merchants.length)
  //     return <p>No merchant found!</p>;
  // }
  // console.log("Merchant", merchants);

  return (
    <div className="wrapper-product">
      {products?.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </div>
  );
}
