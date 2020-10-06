export const updateObject = (preState, updatedProps) => {
  return {
    ...preState,
    ...updatedProps,
  };
};
