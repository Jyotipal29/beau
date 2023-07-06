import ClipLoader from "react-spinners/ClipLoader";
// eslint-disable-next-line react/prop-types
const Loader = ({ loading }) => {
  return (
    <div className="flex justify-center w-full  h-full">
      <ClipLoader color="#db0133" size={70} loading={loading} />
    </div>
  );
};

export default Loader;
