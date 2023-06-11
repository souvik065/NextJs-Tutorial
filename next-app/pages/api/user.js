export default function get_Users(req, res) {
  res.status(200).json([
    { id: 1, name: "souvik" },
    { id: 2, name: "dhruv" },
  ]);
}
