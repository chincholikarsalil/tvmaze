export const getSchedule = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule?country=US`);
  const schedule = await response.json();
  return schedule;
};
