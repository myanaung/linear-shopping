import React from "react";
import { useParams } from "react-router-dom";
import DetailChild from "./../DetailChild/DetailChild";

const Detail = ({ products }) => {
  const { id } = useParams();

  const product = products.filter((product) => product.id.toString() === id);
  return (
    <>
      {product.map((product) => (
        <DetailChild product={product} key={product.id} />
      ))}
    </>
  );
};

export default Detail;
