import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

import { MongoClient } from "mongodb";

const MeetupDetails = (props) => {
  console.log(props);
  // const { image, title, id, address, description } = props.meetupData;
  return <MeetupDetail />;
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Vandal:Zastawa750@cluster0.6ifbl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://Vandal:Zastawa750@cluster0.6ifbl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.find().toArray();

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: null,
    },
  };
}

export default MeetupDetails;
