'use strict';

module.exports.now = async event => {

  var now = new Date();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        now: now.toISOString(),
      },
      null,
      2
    ),
  };
};

