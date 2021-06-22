import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Vandal:Zastawa750@cluster0.6ifbl.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    await meetupCollection.insertOne(data);
    res.status(201).json({ message: "Meetup inserted" });
    client.close();
  }
}

export default handler;
