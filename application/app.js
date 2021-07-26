function add(a = 0, b = 0) {
  if (typeof (a) === 'string') { return Number(a) + Number(b); }
  return a + b;
}
module.exports = {
  add,
};
