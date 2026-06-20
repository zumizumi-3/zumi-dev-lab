"use strict";

const { handleNodeRequest } = require("../../chatwork-clipper/server/clipper-core.cjs");

module.exports = function destinations(req, res) {
  return handleNodeRequest(req, res, "destinations", process.env);
};
