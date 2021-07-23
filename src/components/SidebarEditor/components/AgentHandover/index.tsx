import { useState } from "react";

const AgentHandover = ({ data, onSuccess, onCancel }: any) => {
  const [state, setState] = useState<any>({
    ...data,
  });

  const onChangeField: any = (event: any) => {
    const { name, value } = event.target;

    setState((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="rz__editor--block">
      <h1>AgentHandover</h1>
      <div className="form-group">
        <input
          name="nodeName"
          value={state.nodeName}
          onChange={onChangeField}
        />
      </div>

      <div className="form-group">
        <textarea
          name="responseValue"
          value={state.responseValue}
          onChange={onChangeField}
        />
      </div>

      <div className="rz--btn-section">
        <button
          className="rz--btn-primary"
          onClick={() => {
            onSuccess(state);
          }}
        >
          Update
        </button>
        <button className="rz--btn-secondary" onClick={() => onCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AgentHandover;
