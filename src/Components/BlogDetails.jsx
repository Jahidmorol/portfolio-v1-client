import { Link, useParams } from "react-router-dom";
import { useGetBlogQuery, useGetBlogsQuery } from "../redux/api/apis";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBlogQuery(id);
  const { data: allBlogs } = useGetBlogsQuery(undefined);

  return (
    <div className="max-w-screen-lg mx-auto pt-24">
      <div className="lg:flex">
        {/* Single Blog details side */}
        <div className="lg:w-[70%] lg:px-10 bg-secondary-color md:py-10 md:px-6 rounded-xl">
          <img
            className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src={data?.data?.image}
            alt="Blog Image"
          />
          <div className="p-3 md:p-0">
            <p className="md:mt-6 text-sm text-white uppercase">Want to know</p>
            <h1 className="mt-2 md:mt-4 text-lg md:text-2xl font-semibold leading-tight primary-color">
              {data?.data?.title}
            </h1>
            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://i.ibb.co/CtjVFXW/jahid-prof.jpg"
                alt="image"
              />
              <div className="mx-4">
                <h1 className="text-sm text-white">Jahid Hasan Zarif</h1>
                <p className="text-sm text-white">Author</p>
              </div>
            </div>
            <p
              className=" text-white mt-5 text-justify mb-5"
              dangerouslySetInnerHTML={{ __html: data?.data?.content }}
            />
          </div>
        </div>

        {/* List of Blog Side side */}
        <div className="mt-8 lg:w-[30%] lg:mt-0 lg:px-6">
          <h2 className="text-2xl font-semibold pb-5 pt-6">Recent Blogs</h2>

          {isLoading ? (
            <>
              <div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-4 w-[80%] rounded"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-full rounded mt-3"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-2 w-1/2 rounded mt-2"></div>
                <div className="bg-slate-500 animate-pulse bg-opacity-50 h-1 w-full rounded my-7"></div>
              </div>
            </>
          ) : (
            allBlogs?.data?.slice(0, 5).map((blog) => (
              <div key={blog._id}>
                <Link to={`/blogs/${blog._id}`}>
                  <h2 className="block mt-2 font-medium text-white hover:underline hover:text-[#0fcda1]">
                    {blog?.title}
                  </h2>
                </Link>
                <p
                  className="text-sm text-slate-300 mb-5"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content.length > 50
                        ? blog.content.slice(0, 50) + "..."
                        : blog.content,
                  }}
                />
                <hr className="my-6 border border-[#0fcda18c]" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
