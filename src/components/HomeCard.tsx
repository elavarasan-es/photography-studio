import { Link } from "react-router-dom";

interface cardProps {
  title: string;
  image: string[];
  cardtext: string;
  link : string;
}

interface recentBlogdatacardProps {
  title: string;
  image: string;
  cardtext: string;
   link : string;
}

interface HomeCardProps {
  cardData?: cardProps;
  recentBlogdata?: recentBlogdatacardProps;
}

const HomeCard: React.FC<HomeCardProps> = ({ cardData, recentBlogdata }) => {
  return (
    <div>
      {cardData && (
        <div
          style={{ border: '0.25px solid #f3e9c8' }}
          className="flex flex-col items-center justify-evenly p-6 bg-white rounded-xl shadow-md max-w-xl mx-auto h-[32rem]"
        >
          <h1 className="text-3xl mb-4 text-center font-pacifico">
            {cardData?.title}
          </h1>

          <div className="grid grid-cols-4 gap-x-2 gap-y-1 mb-4">
            {cardData?.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Image ${index + 1}`}
                className="w-full h-28 md:h-24 lg:h-10 lg:w-10 object-cover rounded-md"
              />
            ))}
          </div>

          <p className="text-gray-700 text-center mb-4 px-4">
            {cardData?.cardtext}
          </p>

          <button className="bg-[#BA9E52] text-white px-4 py-2 rounded hover:bg-gray-800 transition">
           <Link to={cardData.link}> View Portfolio</Link>
          </button>
        </div>
      )}
{recentBlogdata && (
  <div
    style={{ border: '0.25px solid #f3e9c8' }}
    className="flex flex-col items-center justify-between bg-white rounded-xl shadow-md w-[22rem] max-h-[32rem] mx-auto overflow-hidden"
  >
    <div className="w-full h-48 overflow-hidden rounded">
      <img
        src={recentBlogdata.image}
        alt={recentBlogdata.title}
        className="w-full h-full object-cover hover:opacity-80 transition "
      />
    </div>

    <h1 className="text-2xl text-center font-pacifico mt-4 line-clamp-2">
      {recentBlogdata?.title}
    </h1>

    <p className="text-gray-700 text-center text-sm px-2 py-5 line-clamp-3">
      {recentBlogdata?.cardtext}
    </p>

    <button className="bg-[#BA9E52] text-white px-4 py-2 my-5 rounded hover:bg-gray-800 transition mt-auto">
      
       <Link to={recentBlogdata?.link}> Read me</Link>
    </button>
  </div>
)}

    </div>
  );
};

export default HomeCard;
