import Users from "../model/user";

//GET http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data not Found" });
    return res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

//POST http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    console.log(formData);
    if (!formData)
      return res.status(404).json({ erro: "Form Data Not Prodvided" });
    const user = await Users.create(formData);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error });
  }
}
