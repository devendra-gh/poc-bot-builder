import React from "react";
import * as FontAwesome from "react-icons/fa";

const Icon = ({ iconName, size, color }: any) => {
  const fontAwesome: any = FontAwesome;
  const icon = React.createElement(fontAwesome[iconName]);

  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

export default Icon;
