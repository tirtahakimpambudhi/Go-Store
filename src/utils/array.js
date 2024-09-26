/**
 * For check array if falsy return default array
 * @param arr {Array} arr to check if falsy return defaultArr param
 * @param defaultArr {Array} default value arr param
 * @returns {Array|Error} return error if not array type
 */
function getArrayOrDefault(arr, defaultArr) {
  // Check if both arguments are arrays
  if (!Array.isArray(arr) || !Array.isArray(defaultArr)) {
    throw new Error("arguments must be array type");
  }

  // Return defaultArr if arr is empty or falsy, otherwise return arr
  return arr == null || arr.length === 0 ? defaultArr : arr;
}

export { getArrayOrDefault };
