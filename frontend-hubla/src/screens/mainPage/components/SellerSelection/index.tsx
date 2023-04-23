import { findSellers } from '@/api';
import { Seller } from '@/api/types';
import React, { useEffect, useState } from 'react'

const SellerSelection = () => {
    const [sellers, setSellers] = useState<Seller[] >([]);

    useEffect(()=>{
        findSellers(setSellers)
    },[])

  return (
    <div>
        <p>Select a seller:</p>
        <select>
            {sellers?.length && sellers.map((i)=>{
                return <option key={i.id} value={i.id} > {i.name}</option>
            })}
        </select>
    </div>
  )
}

export default SellerSelection