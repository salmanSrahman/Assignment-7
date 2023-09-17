exports.commentCreate = async (req, res) => {
  res.status(200).json({ status: "success", data: "comment created" });
};
exports.commentRead = async (req, res) => {
  res.status(200).json({ status: "success", data: "comment read" });
};
exports.commentUpdate = async (req, res) => {
  res.status(200).json({ status: "success", data: "comment update" });
};
exports.commentDelete = async (req, res) => {
  res.status(200).json({ status: "success", data: "comment delete" });
};
