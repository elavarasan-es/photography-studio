import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface recentBlogdatacardProps {
  recentBlogdata: { title: string; image: string; cardtext: string, link:string};
}

export default function BlogCard({ recentBlogdata }: recentBlogdatacardProps) {
  return (
    <div className="p-2 hover:cursor-pointer group shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-500  w-[22rem] max-h-[32rem] overflow-hidden">
      <div className=" bg-white ">
        <div className="w-full h-48 overflow-hidden rounded">
          <img
            src={recentBlogdata.image}
            alt={recentBlogdata.title}
            className="w-full h-full object-cover group-hover:grayscale transition "
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center font-pacifico mt-4 line-clamp-2">
            {recentBlogdata?.title}
          </h1>

          <p className="text-gray-700 text-sm px-2 py-5 max-w-[18rem] h-[8rem] line-clamp-3">
            {recentBlogdata?.cardtext}
          </p>
        </div>

        <div className="flex items-center justify-start ml-3">
          <button className="text-[#BA9E52] px-4 flex py-2 rounded hover:text-gray-800 transition">
           <Link to={recentBlogdata.link}>Read more</Link>
            <div><ChevronRight className="p-0 text-[#BA9E52] hover:text-gray-800" /></div>
          </button>
        </div>
      </div>
    </div>
  );
}
