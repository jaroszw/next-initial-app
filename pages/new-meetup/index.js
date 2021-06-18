import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetUpHandler = (meetupData) => {
    console.log(meetupData);
  };

  return (
    <div>
      <h1>New Meetiup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetupPage;
