'use strict';

const methods = iface => {
  const result = [];
  for (const methodName in iface) {
    const metod = iface[methodName];
    if (typeof(metod) === 'function') result.push([metod.name, metod.length]);
  }
  return result;
};
module.exports = { methods };
