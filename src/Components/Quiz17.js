import React, { useState } from "react";

// Working with API data using Yelp_API

function Quiz17() {
  const [getAPI, setGetAPI] = useState({});

  // When you make a console.log, you will realise there's an infinite loop running.
  // This infinite loop runs as the API call is made. That is, it continues to make the API call infinitely.
  // To correct this, there's a need for "React useEffect".
  // Check next quiz on React useEffect
  console.log("Let's see");

  const yelpAPI_Key =
    "zydb-ryJdxxQ1q8cfjOLv58ZhAWxfahCUgYw2jvxlEoEFPuJP7yO4pe2T4Ig0s_yCsNc0kPQN6RyMYpHlFvcPt1tug4mhDBHnxtybyZwRTdQosCpUMQtWyZGpbbeYXYx";

  const yelpAPI_options = {
    headers: {
      Authorization: `bearer ${yelpAPI_Key}`,
    },
  };

  const url =
    "https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews";

  fetch(url, yelpAPI_options)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setGetAPI(data));

  return <div>{JSON.stringify(getAPI)}</div>;
}

export default Quiz17;
