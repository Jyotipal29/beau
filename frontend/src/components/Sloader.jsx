import ClipLoader from "react-spinners/ClipLoader";

// eslint-disable-next-line react/prop-types
const Sloader = ({ sLoading }) => {
  return (
    <div>
      <ClipLoader
        color="#db1333"
        loading={sLoading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Sloader;
