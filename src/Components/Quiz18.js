import React from "react";

//  useEffect

function Quiz18() {
  const [getAPI, setGetAPI] = React.useState({});

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

  React.useEffect(() => {
    fetch(url, yelpAPI_options)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setGetAPI(data));
  }, []);
  return <div>{JSON.stringify(getAPI)}</div>;
}

export default Quiz18;
