import React from "react";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="tr">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((prop) => (
          <tr className="list" key={prop.id}>
            <td>{prop.type}</td>
            <td>{prop.amount}</td>
            <td>{prop.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
