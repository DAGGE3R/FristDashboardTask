import React from "react";
import "./bottom-stats.styles.scss";

export const BottomStats = (props) => {
  return (
    <div className="bottom-stats-container">
      <div className="description-stat">
        <span>{props.descStats}</span>
      </div>
      <div className="users-numbers">
        <span>{props.usersNumber}</span>
      </div>
      <div className="meter">
        <span
          style={{
            width: `${props.numPercentage}`,
            backgroundColor: `${props.color}`,
          }}
        ></span>
      </div>
    </div>
  );
};
