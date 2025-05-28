import BlogCard from '../components/BlogCard';
import { BlogData } from '../constants/homeCardDataList ';

export default function Blogs() {
  return (
    <div>
      <div className="text-center bg-[#BA9E52] text-white py-6">
        <h1 className="text-4xl mb-2 font-raleway">Blogs</h1>
        <h4 className="text-xl">
          Picture Perfect: Stories, Tips and Creative ideas
        </h4>
      </div>

      <div className='flex justify-center my-[4%]'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BlogData.map((item) => (
          <BlogCard recentBlogdata={item} />
        ))}
      </div>
      </div>
    </div>
  );
}
