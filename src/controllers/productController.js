exports.productCreate = async (req, res) => {
  res.status(200).json({ status: "success", data: "product created" });
};
exports.productRead = async (req, res) => {
  res.status(200).json({ status: "success", data: "product read" });
};
exports.productUpdate = async (req, res) => {
  res.status(200).json({ status: "success", data: "product update" });
};
exports.productDelete = async (req, res) => {
  res.status(200).json({ status: "success", data: "product delete" });
};
