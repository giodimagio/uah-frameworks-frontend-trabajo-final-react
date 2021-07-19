import { useState } from 'react';

const title = "TRABAJO FINAL | COMPRANDO CON REACT";
const categorias = [{ label: "Todos los productos", value: "todos" }, { label: "Palas", value: "palas", }, { label: "Pelotas", value: "botes", },];

export default function Header(props) {

	const { onSelectedCategory } = props;
	const [idCategory, setCategory] = useState(categorias[0].value);
	const handleChange = function (event) {
		setCategory(event.target.value);
		onSelectedCategory(event.target.value);
	};

	return (
		<header>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container text-white">
					{title}
					<a className="navbar-brand" href="#Admin">
						<i className="bi bi-shield-lock"></i>
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="d-inline-flex mt-3 mb-4">
					<select value={idCategory} onChange={handleChange}>
						{
							categorias.map((category, index) => (
								<option key={category + index} value={category.value}>{category.label}</option>
							))
						}
					</select>
				</div >
			</div >
		</header >
	);
}

