export const getSchedule = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/schedule?country=US`
  );
  const schedule = await response.json();
  return schedule;
};

export const getShow = async (showId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/shows/${showId}`
  );
  const show = await response.json();
  return show;
};

export const getShowCast = async (showId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/shows/${showId}/cast`
  );
  const showCast = await response.json();
  return showCast;
};

export const getEpisode = async (episodeUrl) => {
  const response = await fetch(`${episodeUrl}`);
  const episode = await response.json();
  return episode;
};
