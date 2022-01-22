import React from "react";
import PropTypes from "prop-types";
import transactionsStyles from "./transactions.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionsStyles.transaction}>
      <thead>
        <tr className={transactionsStyles.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((prop) => (
          <tr className={transactionsStyles.list} key={prop.id}>
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

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
