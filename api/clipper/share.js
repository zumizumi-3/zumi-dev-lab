"use strict";

const { handleNodeRequest } = require("../../chatwork-clipper/server/clipper-core.cjs");

module.exports = function share(req, res) {
  return handleNodeRequest(req, res, "share", process.env);
};
