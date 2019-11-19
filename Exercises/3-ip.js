'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const reducer = (accum, curVal) => (accum << 8) + +curVal;
  return (ip.split('.').reduce(reducer));
};
module.exports = { ipToInt };
