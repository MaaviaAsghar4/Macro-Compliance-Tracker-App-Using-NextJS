import { connectToDatabase } from "../../utils/mongodb";
import { ObjectID } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const { method } = req;

  switch (method) {
    case "GET":
      const { date } = req.query;
      const dataModel = {
        _id: new ObjectID(),
        date: date,
        calories: { label: "Calories", total: 0, target: 0, variant: 0 },
        carbs: { label: "Carbs", total: 0, target: 0, variant: 0 },
        fat: { label: "Fat", total: 0, target: 0, variant: 0 },
        protein: { label: "Protein", total: 0, target: 0, variant: 0 },
      };

      var doc = {};
      if (date) {
        doc = await db
          .collection("complianceTracker")
          .findOne({ date: new Date(date as string) });
      } else {
        doc = await db.collection("complianceTracker").findOne();
      }

      if (doc == null) {
        doc = dataModel;
      }
      res.json(doc);
      break;
    case "POST":
      let data = req.body;
      data = JSON.parse(data);
      data.date = new Date(data.date);
      doc = await db.collection("complianceTracker").updateOne(
        { date: new Date(data.date) },
        {
          $set: data,
        },
        { upsert: true }
      );

      res.json({ message: "ok" });
    default:
      break;
  }
};
