export const canAllowToLink = (id: any, target: any, type: any) => {
  if (target.includes(type)) {
    return false;
  }

  if (id.includes("input")) {
    return false;
  }

  return true;
};
