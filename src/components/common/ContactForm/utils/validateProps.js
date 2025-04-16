const validateVisibleFields = (visibleFields) => {
  if (typeof visibleFields !== "object" || visibleFields === null) {
    throw new Error("Invalid prop: 'visibleFields' should be an object.");
  }

  const validFields = ["name", "email", "phone", "subject", "message", "files"];

  Object.keys(visibleFields).forEach((key) => {
    if (!validFields.includes(key)) {
      throw new Error(
        `Invalid prop: 'visibleFields' contains an unknown field '${key}'. Available fields are: ${validFields.join(", ")}.`,
      );
    }
    if (typeof visibleFields[key] !== "boolean") {
      throw new Error(
        `Invalid prop: 'visibleFields.${key}' should be a boolean.`,
      );
    }
  });
};

const validateDisplayMode = (displayMode) => {
  if (!["label", "placeholder", "both"].includes(displayMode)) {
    throw new Error(
      "Invalid prop: 'displayMode' should be one of 'label', 'placeholder', or 'both'.",
    );
  }
};

const validateSubmitLabel = (submitLabel) => {
  if (typeof submitLabel !== "string") {
    throw new Error("Invalid prop: 'submitLabel' should be a string.");
  }
};

const validateCustomConfig = (customConfig) => {
  if (typeof customConfig !== "object" || customConfig === null) {
    throw new Error("Invalid prop: 'customConfig' should be an object.");
  }

  if (customConfig.email?.required === false) {
    throw new Error(
      "Email field must be required to ensure proper Reply-To setup in SES.",
    );
  }

  Object.entries(customConfig).forEach(([key, config]) => {
    if (typeof config !== "object" || config === null) {
      throw new Error(`Invalid field config: '${key}' should be an object.`);
    }

    if (config.label && typeof config.label !== "string") {
      throw new Error(
        `Invalid field config: '${key}.label' should be a string.`,
      );
    }
    if (config.placeholder && typeof config.placeholder !== "string") {
      throw new Error(
        `Invalid field config: '${key}.placeholder' should be a string.`,
      );
    }
    if (config.required !== undefined && typeof config.required !== "boolean") {
      throw new Error(
        `Invalid field config: '${key}.required' should be a boolean.`,
      );
    }
    if (config.rows !== undefined && typeof config.rows !== "number") {
      throw new Error(
        `Invalid field config: '${key}.rows' should be a number.`,
      );
    }
    if (
      config.maxFilesCount !== undefined &&
      typeof config.maxFilesCount !== "number"
    ) {
      throw new Error(
        `Invalid field config: '${key}.maxFilesCount' should be a number.`,
      );
    }
    if (
      config.maxFileSize !== undefined &&
      typeof config.maxFileSize !== "number"
    ) {
      throw new Error(
        `Invalid field config: '${key}.maxFileSize' should be a number.`,
      );
    }
  });
};

const validateProps = (
  visibleFields,
  displayMode,
  submitLabel,
  customConfig,
) => {
  validateVisibleFields(visibleFields);
  validateDisplayMode(displayMode);
  validateSubmitLabel(submitLabel);
  validateCustomConfig(customConfig);
};

export default validateProps;
