// NoResults component for displaying a user-friendly message when the search returns no results
const NoResults = () => {
  return (
    <li className="not-found">
      <h3>No Results Found!</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NoResults;
