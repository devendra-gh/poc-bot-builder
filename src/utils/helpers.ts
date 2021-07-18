export const canAllowToLink = (id: any, target: any, type: any) => {
  if (target.includes(type)) {
    return false;
  }

  if (id.includes("output")) {
    return false;
  }

  return {
    input: "input-port-01",
    output: "output-port-11",
    label: "Link",
    readonly: false,
    className: "my-custom-link-class",
  };
};
