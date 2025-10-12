const validateDisplayMode = (displayMode) => {
  if (!['label', 'placeholder', 'both'].includes(displayMode)) {
    throw new Error(
      "Invalid prop: 'displayMode' should be one of 'label', 'placeholder', or 'both'."
    );
  }
};

export default validateDisplayMode;
