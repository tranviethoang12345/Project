exports.handleResponse = (status, message, code, data = null) => {
  return { status, message, code, data };
};