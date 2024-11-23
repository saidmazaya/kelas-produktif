import axios from "axios";
import React, { useEffect, useState } from "react";

function UniversityList() {
	const [universities, setUniversities] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://universities.hipolabs.com/search?country=Indonesia")
			.then((response) => {
				setUniversities(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>Web Universitas di Indonesia</h1>
			{loading ? (
				<p>Loading ...</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>Nama Universitas</th>
							<th>Website</th>
							<th>Domain</th>
						</tr>
					</thead>
					<tbody>
						{universities.map((university) => (
							<tr>
								<td>{university.name}</td>
								<td>
									<a href={university.web_pages[0]} target="_blank">
										{university.web_pages[0]}
									</a>
								</td>
                <td>{university.domains[0]}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default UniversityList