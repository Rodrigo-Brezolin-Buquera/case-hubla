import { findSellerById, findSellers } from "@/api";
import { Seller } from "@/api/types";
import React, { useEffect, useState } from "react";

const SellerSelection = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [sellerDetails, setSellerDetails] = useState<Seller | undefined>(
    undefined
  );

  useEffect(() => {
    findSellers(setSellers);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    findSellerById(event.target.value, setSellerDetails);
  };

  const formatBalance = (value:number) => {
    return value && "R$ " + (value/100).toString().replace('.', ',')
  }

  return (
    <div>
      <p>Select a seller:</p>
      <select placeholder="Sellers" onChange={handleChange}>
        <option key={0} value={""}>
          Sellers
        </option>

        {sellers?.length &&
          sellers.map((i) => {
            return (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            );
          })}
      </select>

      <div>
        {sellerDetails && (
          <>
            <p>{sellerDetails.name}</p>
            <p>{sellerDetails.type}</p>
            <p>{formatBalance(sellerDetails.balance)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SellerSelection;
