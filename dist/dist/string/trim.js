/**
 * trim
 * @param str
 */
export default (function (str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
});