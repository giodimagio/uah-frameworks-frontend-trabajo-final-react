import Product from "./Product";

export default function Main(props) {

	const { products, onAddToCart } = props;

	return (
		<>
			{products.map((product) => (
				<Product class="col-4" key={product.id} product={product} onAddToCart={onAddToCart}></Product>
			))}
		</>
	);
}
