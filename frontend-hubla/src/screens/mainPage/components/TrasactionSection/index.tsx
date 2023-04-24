import { findTransactions } from '@/api';
import { Transaction } from '@/api/types';
import React, { useState } from 'react'
import TransactionList from './TransactionList';

const TransactionSection = () => {
    const [transactions, setTransactions] = useState<Transaction[] >([]);
    const [showList, setShowList] = useState(false)
  
    const onClick = () => {
        setShowList(!showList)
        if(showList) return null
        findTransactions(setTransactions)
    };

  return (
    <div>
        <button onClick={onClick}> { showList ? "Hide" : "Show"} transactions:</button>

       {showList && <TransactionList list = {transactions}/>}

    </div>
  )
}

export default TransactionSection