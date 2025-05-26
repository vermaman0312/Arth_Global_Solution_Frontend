import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

type props = {
  isPage?: boolean;
}

const NotFoundPage = ({...props}: props) => {
  const navigate = useNavigate();

  return (
    <div className={`${props.isPage ? "w-full h-full" : "w-screen h-screen"} flex flex-col items-center justify-center gap-2`}>
      <Helmet>
        <title>Not found - Garageek</title>
        <meta name="description" content="This is the not found page." />
        <meta name="keywords" content="React, TypeScript, Helmet, SEO" />
      </Helmet>
      <div className="p-2 flex flex-col items-center justify-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300 font-display">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2 font-display">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 mt-5 text-center font-display">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>
      <div className="p-2 flex flex-col items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#0d1b2a] text-white text-xs font-display p-4 rounded-xl"
        >
          Return back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;