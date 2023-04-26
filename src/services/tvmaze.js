export const getSchedule = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/schedule?country=US`,
    {
      crossDomain: true,
    }
  );
  const schedule = await response.json();
  return schedule;
};

export const getShow = async (showId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/shows/${showId}`,
    {
      crossDomain: true,
    }
  );
  const show = await response.json();
  return show;
};

export const getShowCast = async (showId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/shows/${showId}/cast`,
    {
      crossDomain: true,
    }
  );
  const showCast = await response.json();
  return showCast;
};

export const getEpisode = async (episodeId) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/episodes/${episodeId}`,
    {
      crossDomain: true,
    }
  );
  const episode = await response.json();
  return episode;
};
