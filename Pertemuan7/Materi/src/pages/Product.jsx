import React from "react";
import { useParams } from "react-router-dom";

function Product() {

  const { id } = useParams();

	return <div>Ini Halaman Product dengan ID {id}</div>;
}

export default Product;
