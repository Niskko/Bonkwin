import './Ad.css';

import React, { useEffect, useState } from 'react';

const Ad = () => {
	const [data, setData] = useState<
		{
			id: number;
			title: string;
			description: string;
			categorie: string;
			price: number;
			user: string;
		}[]
	>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:8080/api/bonkwin/');
			const jsonData = await response.json();
			setData(jsonData);
		};

		fetchData();
	}, []);

	return (
		<div className="ads">
			{data.map((item) => (
				<div key={item.id} className="adItem">
					<h3>{item.title}</h3>
					<p>
						{item.description.length > 100
							? item.description.substring(0, 100) + '...'
							: item.description}
					</p>
					<p>{item.price}€</p>
				</div>
			))}
		</div>
	);
};

export default Ad;
