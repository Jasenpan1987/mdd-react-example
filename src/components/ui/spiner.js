import React from "react";

export const Spiner = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="spiner-mask">
      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
    </div>
  );
};
