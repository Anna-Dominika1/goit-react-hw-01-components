import React from "react";

const Statistics = ({ stats, title }) => {
  return (
    <section className="section_static">
      {title === "Upload stats" ? (
        <h2 className="title">{title}</h2>
      ) : (
        !(<h2 className="title">{title}</h2>)
      )}
      <ul className="ul">
        {stats.map((prop) => (
          <li key={prop.id} className="items">
            <span className="label">{prop.label}</span>
            <span className="percentage">{prop.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
