import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://f4fcdn.eu/wp-content/uploads/2019/10/Odessa2000ST.jpg",
    address: "Some addres 5, somecity",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://www.ebrdgreencities.com/assets/Uploads/bb1d68f6d4/lviv-625.png",
    address: "Some addres 5, somecity",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg/1200px-%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg",
    address: "Some addres 5, somecity",
    description: "This is a third meetup",
  },
];

export const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
