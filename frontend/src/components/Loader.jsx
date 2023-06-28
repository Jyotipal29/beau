import { FadeLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Loader = ({ loading }) => {
  return (
    <div className="flex justify-center w-full  h-full">
      <FadeLoader
        color="#F6E05E"
        height={100}
        radius={5}
        width={3}
        loading={loading}
      />
    </div>
  );
};

export default Loader;
