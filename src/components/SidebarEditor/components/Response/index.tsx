import React from "react";

const Response = ({ updateSidebar }: any) => {
  return (
    <div className="rz__editor--block">
      <h1>Hello Response</h1>
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

export default Response;
