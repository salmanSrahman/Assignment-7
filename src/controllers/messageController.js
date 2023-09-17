exports.messageCreate = async (req, res) => {
  res.status(200).json({ status: "success", data: "message created" });
};
exports.messageRead = async (req, res) => {
  res.status(200).json({ status: "success", data: "message read" });
};
exports.messageUpdate = async (req, res) => {
  res.status(200).json({ status: "success", data: "message update" });
};
exports.messageDelete = async (req, res) => {
  res.status(200).json({ status: "success", data: "message delete" });
};
