import cartStyle from './Cart.module.css';

const tableProductName = "Producto";
const tableQuantityName = "Cantidad";
const tablePriceName = "Importe";
const cartName = "Carrito";
const cartEmptyMessage = "Añade elementos al carrito";
const cartButtonName = "Realizar Pedido";
const cartTotalPriceName = "Precio Total:  ";
const plusSign = "+";
const minusSign = "-";

export default function Cart(props) {

	const { cartItems, onAddToCart, onRemoveFromCart } = props;
	const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

	return (
		<div className="container">
			<div className="cart d-flex align-items-end">
				<div className="me-2">
					<i className="bi bi-cart4 fs-2"></i>
					<span className="fs-3 fw-bold text-success"><sup>{totalItems}</sup></span>
				</div>
				<h4>{cartName}</h4>
			</div>
			<hr />
			<table className="table">
				<thead>
					<tr>
						<th scope="col">{tableProductName}</th>
						<th scope="col">{tableQuantityName}</th>
						<th className="text-end" scope="col">{tablePriceName}</th>
					</tr>
				</thead>
			</table>
			{(cartItems.length === 0)
				? <p>{cartEmptyMessage}</p>
				: cartItems.map((item) => (
					<>
						<div className="row align-items-center">
							<div className="col-4">
								<img className={cartStyle.imgCart} src={item.imageUrl} alt={item.id} />
							</div>
							<div className="col-4">
								<div className="d-flex justify-content-between align-items-center">
									<button className={`btn btn-danger fw-bold ${cartStyle.btnCircle}`} onClick={() => onRemoveFromCart(item)}>
										{minusSign}
									</button>
									<div>
										<span>{item.qty}</span>
									</div>
									<button className={`btn btn-success fw-bold ${cartStyle.btnCircle}`} onClick={() => onAddToCart(item)} disabled={item.stock === 0}>
										{plusSign}
									</button>
								</div>
							</div>
							<div className="col-4">
								<div>
									<span className="float-end">
										{(item.price * item.qty).toFixed(2)} €
									</span>
								</div>
							</div>
						</div>
						<p>{item.name}</p>
						<hr />
					</>
				))
			}
			{cartItems.length !== 0 && (
				<>
					<div>
						<p className="fw-bold">{cartTotalPriceName + " " + totalPrice.toFixed(2)}</p>
					</div>
					<div>
						<button type="button" className="btn btn-dark" onClick={() => alert('Pedido realizado')} disabled={cartItems.length === 0}>
							{cartButtonName}
						</button>
					</div>
				</>
			)}
		</div>
	);
}