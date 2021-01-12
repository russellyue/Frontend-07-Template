/**
 *
 * @param {string} val
 * @param {number} system
 */
function stringToNumber(val, system) {
  try {
    return parseInt(val, system);
  } catch (err) {
    return NaN;
  }
}

/**
 *
 * @param {string} number
 * @param {number} system
 */
function numberToString(val, system) {
  try {
    return val.toString(system);
  } catch (err) {
    return null;
  }
}
