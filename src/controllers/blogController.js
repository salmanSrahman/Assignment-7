exports.blogCreate = async (req, res) => {
  res.status(200).json({ status: "success", data: "blog created" });
};
exports.blogRead = async (req, res) => {
  res.status(200).json({ status: "success", data: "blog read" });
};
exports.blogUpdate = async (req, res) => {
  res.status(200).json({ status: "success", data: "blog update" });
};
exports.blogDelete = async (req, res) => {
  res.status(200).json({ status: "success", data: "blog delete" });
};
