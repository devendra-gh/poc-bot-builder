import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Reset = ({ updateSidebar }: any) => {
  return (
    <div className="rz__editor--block">
      <h1>Hello Reset</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 2</li>
        <li>Item 2</li>
        <li>Item 2</li>
        <li>Item 2</li>
      </ul>

      <div className="rz--btn-section">
        <button
          className="rz--btn-primary"
          onClick={() => {
            updateSidebar(false, {});
          }}
        >
          Update
        </button>
        <button
          className="rz--btn-secondary"
          onClick={() => updateSidebar(false, {})}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Reset;
