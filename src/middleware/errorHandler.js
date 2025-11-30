import { ValidationError } from "sequelize";

export function errorHandler(err, req, res, next) {
  console.error("An error occurred: ", err);

  if (err instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: err.errors.map(function (e) {
        return {
          field: e.path,
          message: e.message,
        };
      }),
    });
  }

  if (err.status) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}

export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
}
