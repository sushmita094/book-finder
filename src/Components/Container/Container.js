import React from "react";

const Container = ({ children, containerClass }) => {
  return <div className={`container ${containerClass}`}>{children}</div>;
};

export default Container;
