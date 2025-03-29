const defaultValues = {
  name: "Default Name",
  email: "example@email.com",
  subject: "Default Subject",
  address: "Default Address",
  type: "text",
  placeholder: "Enter value",
  maxFileSize: 5, // MB
  maxFileCount: 3, // Maksymalnie 3 pliki
};

export const validateConfig = (config) => {
  return config.map((field) => {
    const errors = [];

    // Obsługa grup pól
    if (field.type === "group" && Array.isArray(field.fields)) {
      field.fields = field.fields.map(
        (subField) => validateConfig([subField])[0],
      );
    }

    Object.keys(field).forEach((key) => {
      const expectedType = typeof defaultValues[key];

      if (key === "maxFileSize" || key === "maxFileCount") {
        if (typeof field[key] !== "number" || field[key] <= 0) {
          errors.push(
            `Invalid value for '${key}': expected positive number, got ${typeof field[key]}`,
          );
          field[key] = defaultValues[key];
        }
      } else if (defaultValues[key] !== undefined) {
        if (
          field[key] === undefined ||
          field[key] === null ||
          typeof field[key] !== expectedType
        ) {
          errors.push(
            `Invalid type for '${key}': expected ${expectedType}, got ${typeof field[key]}`,
          );
          field[key] = defaultValues[key];
        }
      }
    });

    if (errors.length > 0) {
      console.error("Form field validation errors:", errors);
    }

    return field;
  });
};
