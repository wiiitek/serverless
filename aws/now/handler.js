"use strict";

module.exports.now = async (event) => {
  var now = new Date();
  const content = {
    now: now.toISOString(),
  };
  const indent = 2;

  return {
    statusCode: 200,
    body: JSON.stringify(content, null, indent),
  };
};
