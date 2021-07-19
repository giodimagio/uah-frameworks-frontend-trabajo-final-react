import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Cart from "./components/Cart.js";
import db from "./db";
import { useState } from "react";

function App() {

	const { items } = db;
	const [cartItems, setCartItems] = useState([]);
	const [productItems, setProductItems] = useState(items);

	const onAddToCart = (product) => {

		const fountItem = cartItems.find(x => x.id === product.id);
		const indexData = items.findIndex((x) => x.id === product.id);

		if (fountItem) {
			setCartItems(cartItems.map(x => x.id === product.id ? { ...fountItem, qty: fountItem.qty + 1, stock: fountItem.stock - 1 } : x));
		} else {
			setCartItems([...cartItems, { ...product, qty: 1, stock: product.stock - 1 }]);
		}
		items[indexData].stock--;
	};

	const onRemoveFromCart = (product) => {

		const fountItem = cartItems.find((x) => x.id === product.id);
		const indexData = items.findIndex((x) => x.id === product.id);

		if (fountItem.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(cartItems.map(x => x.id === product.id ? { ...fountItem, qty: fountItem.qty - 1, stock: fountItem.stock + 1 } : x));
		}
		items[indexData].stock++;
	};

	const onSelectedCategory = (selectedCategory) => {
		if (selectedCategory === "todos") {
			setProductItems([...items]);
		} else {

			setProductItems(items.filter((x) =>
				!x.category.indexOf(selectedCategory)));
		}
	};

	return (
		<>
			<Header onSelectedCategory={onSelectedCategory}></Header>
			<div className="container">
				<div className="row">
					<div className="col-9">
						<div className="row">
							<Main onAddToCart={onAddToCart} products={productItems}></Main>
						</div>
					</div>
					<div className="col-3">
						<div className="row">
							<Cart onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} cartItems={cartItems} countCartItems={cartItems.length}></Cart>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
