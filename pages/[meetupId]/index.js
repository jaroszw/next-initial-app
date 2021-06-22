import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const { image, title, id, address, description } = props.meetupData;
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "https://f4fcdn.eu/wp-content/uploads/2019/10/Odessa2000ST.jpg",
        title: "First Meetup",
        id: { meetupId },
        address: "Some Street 5, Some City",
        description: "This is meetup number one",
      },
    },
  };
}

export default MeetupDetails;
