import main from "../../database/connection";
import Kitten from "../../database/schema";

export default async function get_Users(req, res) {
  try {
    await main(); // Connect to the database

    const create = new Kitten({ name: "souvik" });
    await create.save(); // Save the new kitten document in the database

    res.status(200).json(create);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
