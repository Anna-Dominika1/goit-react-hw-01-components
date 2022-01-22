import React from "react";
import PropTypes from "prop-types";
import statsStyles from "./stats.module.css";
const Statistics = ({ stats, title }) => {
  return (
    <section className={statsStyles.section_static}>
      {title && <h2 className={statsStyles.title}>{title}</h2>}
      <ul className={statsStyles.ul}>
        {stats.map((prop) => (
          <li key={prop.id} className={statsStyles.items}>
            <span className={statsStyles.label}>{prop.label}</span>
            <span className={statsStyles.percentage}>{prop.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
