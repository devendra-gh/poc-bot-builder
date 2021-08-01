const validateFlowJSON = (jsonStringified: any) => {
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

export default validateFlowJSON;
