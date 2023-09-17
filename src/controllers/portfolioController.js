exports.portfolioCreate = async (req, res) => {
  res.status(200).json({ status: "success", data: "portfolio created" });
};
exports.portfolioRead = async (req, res) => {
  res.status(200).json({ status: "success", data: "portfolio read" });
};
exports.portfolioUpdate = async (req, res) => {
  res.status(200).json({ status: "success", data: "portfolio update" });
};
exports.portfolioDelete = async (req, res) => {
  res.status(200).json({ status: "success", data: "portfolio delete" });
};
