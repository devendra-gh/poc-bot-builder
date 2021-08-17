import { v4 as uuidv4 } from "uuid";

export const canAllowToLink = (id, target, type) => {
  if (target.includes(type)) {
    return false;
  }

  if (id.includes("input")) {
    return false;
  }

  return true;
};

export const getPort = (fn, isInputPort = false) => {
  const prefix = isInputPort ? "input-port" : "output-port";
  const alignment = isInputPort ? "left" : "right";

  return {
    id: `${prefix}--${uuidv4()}`,
    alignment: alignment,
    canLink: fn,
  };
};

export const validateFlowJSON = (jsonStringified) => {
  let jsonFlow;

  if (typeof jsonStringified === "string") {
    try {
      jsonFlow = JSON.parse(jsonStringified);
    } catch (e) {
      return null;
    }
  } else {
    jsonFlow = jsonStringified;
  }

  if (
    !jsonFlow.id ||
    !jsonFlow.schema ||
    !Object.keys(jsonFlow.schema).length ||
    !jsonFlow.schema.nodes.length
  ) {
    return null;
  }

  return jsonFlow;
};
