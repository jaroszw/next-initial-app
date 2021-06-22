import React from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetUpHandler(meetupData) {
    console.log(meetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.replace("/");
  }

  return (
    <div>
      <h1>New Meetiup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetupPage;
