import productStyle from './Product.module.css';

const productAvailableName = "Disponibles";
const productFewAvailableName = "Quedan solo";
const productLastAvailableName = "Queda solo";
const productNotAvailableName = "Agotado";
const buttonAddToCartName = "Agregar a la cesta";

export default function Product(props) {

	const { product, onAddToCart } = props;

	return (
		<div className={`card ${productStyle.cardSize}`}>
			<div className="card-body">
				<img src={product.imageUrl} className={`card-img-top ${productStyle.boxImg}`} alt={product.id}></img>
				<h5 className="card-title fw-bold">
					{product.name}
				</h5>
				<div className="card-subtitle mb-2">
					{(product.stock >= 5)
						? <h6 key={product.id} className="text-success">
							{
								productAvailableName +
								" " +
								product.stock +
								" " +
								product.category
							}
						</h6>
						: [(product.stock >= 2 && product.stock < 5)
							? <h6 key={product.id} className="text-warning">
								{
									productFewAvailableName +
									" " +
									product.stock +
									" " +
									product.category
								}
							</h6>
							: [(product.stock === 1)
								? <h6 key={product.id} className="text-warning">
									{
										productLastAvailableName +
										" " +
										product.stock +
										" " +
										product.category.slice(0, -1)
									}
								</h6>
								: <h6 key={product.id} className="text-danger">{productNotAvailableName}</h6>
							]
						]
					}
				</div>
				<div className="fs-6 fw-light">
					<small>
						<pre>{product.description}</pre>
					</small>
				</div>
				<p className="fw-bold">{product.price} €</p>
				<button type="button" className="btn btn-primary"
					onClick={() => onAddToCart(product)}
					disabled={product.stock <= 0}
				>
					{buttonAddToCartName}
				</button>
			</div>
		</div>
	)
}