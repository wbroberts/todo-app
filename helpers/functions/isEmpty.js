// Returns true if an object is empty (for errors object validation)
const isObjEmpty = value => {
  return typeof value === 'object' && Object.keys(value).length === 0;
};

module.exports = isObjEmpty;
