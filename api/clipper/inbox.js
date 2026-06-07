"use strict";

const { handleNodeRequest } = require("../../chatwork-clipper/server/clipper-core.cjs");

module.exports = function inbox(req, res) {
  return handleNodeRequest(req, res, "inbox", process.env);
};
