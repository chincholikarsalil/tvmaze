export const getSchedule = async () => {
  const response = await fetch(process.env.REACT_APP_AWS_LAMBDA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "salil-tvmaze.s3-website.ap-south-1.amazonaws.com",
    },
    body: JSON.stringify({ name: "getSchedule" }),
  });
  const schedule = await response.json();
  return schedule;
};

export const getShow = async (showId) => {
  const response = await fetch(process.env.REACT_APP_AWS_LAMBDA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "salil-tvmaze.s3-website.ap-south-1.amazonaws.com",
    },
    body: JSON.stringify({ name: "getShow", showId: showId }),
  });
  const show = await response.json();
  return show;
};

export const getShowCast = async (showId) => {
  const response = await fetch(process.env.REACT_APP_AWS_LAMBDA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "salil-tvmaze.s3-website.ap-south-1.amazonaws.com",
    },
    body: JSON.stringify({ name: "getShowCast", showId: showId }),
  });
  const showCast = await response.json();
  return showCast;
};

export const getEpisode = async (episodeId) => {
  const response = await fetch(process.env.REACT_APP_AWS_LAMBDA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "salil-tvmaze.s3-website.ap-south-1.amazonaws.com",
    },
    body: JSON.stringify({ name: "getEpisode", episodeId: episodeId }),
  });
  const episode = await response.json();
  return episode;
};
