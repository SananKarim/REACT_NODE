const express = require("express");

const { validateSignup } = require("../rules/rules");

function validateRequest(req, res, next) {
  const { error, value } = validateSignup(req.body);
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(422).json({
      error: errorMessages,
    });
  } else {
    next();
  }
}
module.exports = validateRequest;
