// Photo component that displays the li and img elements
const Photo = ({ imgUrl }) => {
  return (
    <li>
      <img src={imgUrl} alt="" />
    </li>
  );
};

export default Photo;
