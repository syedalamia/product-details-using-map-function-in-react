import React, { useState } from "react";

function ProductDEtails() {
  const [productList, productListCall] = useState([
    {
      name: "samsung",
      phone: "019",
    },
    {
      name: "Lg",
      phone: "018",
    },
  ]);

  return (
    <>
      {productList.length ? (
        <p>
          {productList.map((data, index) => {
            return (
              <>
                <h2>Item - {index + 1}</h2>
                <h2>{data.name}</h2>
                <button>See Details</button>
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
