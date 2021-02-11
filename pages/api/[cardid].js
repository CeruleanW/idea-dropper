import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const card = await db
    .collection("box")
    .find({})
    .sort({ "last-access-date": -1 })
    .limit(20)
    .toArray();
  res.json(card);
};