export const validates = (validates: Array<(value?: any, values?: any) => any>, value?: any, values?: any) => {
  const handler = (value?: any, values?: any) => {
    for (const validate of validates) {
      const error = validate(value, values);
      if (error) {
        return error;
      }
    }
  };
  if (value || values) {
    return handler(value, values);
  }
  return handler;
};
