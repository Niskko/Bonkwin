import React, { useState } from 'react';
import './Home.css';

const Home = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		categorie: '',
		price: '',
		user: '',
	});

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
		event
	) => {
		event.preventDefault();

		try {
			const response = await fetch(
				'http://localhost:8080/api/bonkwin/create',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);
			alert('Votre bonkwin a bien été créé !');
			const data = await response.json();

			console.log('Data:', data);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Titre:
				<input
					type="text"
					name="title"
					value={formData.title}
					onChange={handleInputChange}
					required
				/>
			</label>
			<label>
				Description:
				<input
					type="text"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
					required
				/>
			</label>
			<label>
				Catégories:
				<input
					type="text"
					name="categorie"
					value={formData.categorie}
					onChange={handleInputChange}
					required
				/>
			</label>
			<label>
				Prix:
				<input
					type="number"
					name="price"
					value={formData.price}
					onChange={handleInputChange}
					required
				/>
			</label>
			<button type="submit">Create Bonkwin</button>
		</form>
	);
};

export default Home;
