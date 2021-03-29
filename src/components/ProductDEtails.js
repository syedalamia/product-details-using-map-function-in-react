import React, { useState } from "react";
import { useLocation, useParams } from "react-router";

function ProductDEtails(props) {
  const [productList, productListCall] = useState([
    {
      name: "samsung",
      phone: "019",
    },
    {
      name: "Motorola",
      phone: "018",
    },
  ]);

  const clickedButton = useParams();
  console.log("the clicked button was", clickedButton);

  return (
    <>
      {productList.length ? (
        <p>
          {productList.map((data, index) => {
            return (
              <>
                <h2>Item - {index + 1}</h2>
                <h2>{data.name}</h2>
                <button
                  onClick={() => {
                    props.passingFunction(productList[index], index + 1);
                  }}
                >
                  See Details
                </button>
              </>
            );
          })}
        </p>
      ) : (
        <p>don't want to show anything</p>
      )}
    </>
  );
}
export default ProductDEtails;
