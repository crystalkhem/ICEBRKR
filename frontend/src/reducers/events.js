export default (events = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return events;
    case "CREATE":
      return events;
    default:
      return events;
  }
};
