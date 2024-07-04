import { Link } from "react-router-dom";
import { useGetBlogsQuery } from "../redux/api/apis";

const Blog = () => {
  const { data } = useGetBlogsQuery(undefined);

  return (
    <div
      id="blogs"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-10"
    >
      <div className="grid max-w-screen-lg mx-auto grid-cols-1 gap-8 pt-8 md:pt-28 md:grid-cols-2 xl:grid-cols-3">
        {/* {data?.data.map((blog) => (
          <div
            key={blog._id}
            className="rounded-2xl border border-slate-500 hover:border-[#0fcda156] overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                className="object-cover object-center w-full h-48 lg:h-60"
                src={blog.imageUrl}
                alt="Blog Img"
              />
              <div
                className="opacity-0 group-hover:opacity-100 absolute -bottom-20 group-hover:bottom-0 flex gap-3 right-0 left-0 p-2 transition-all duration-300 backdrop-blur-sm bg-black bg-opacity-20 flexcode-banner-bg"
                style={{ boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)" }}
              >
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://res.cloudinary.com/djo4onkzl/image/upload/v1712214195/qc2jldu94gngfotmugzi.jpg"
                  alt="image"
                />
                <div>
                  <h1 className="text-sm font-semibold text-white">
                    Mehedi Hasan Foysal
                  </h1>
                  <span className="text-sm text-slate-200">Author</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <Link to={`/blogs/${blog._id}`}>
                <h1 className="text-lg md:text-xl font-semibold primary-color">
                  {blog.title}
                </h1>
              </Link>

              <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded my-5"></div>
              <p
                className="text-sm text-slate-300 mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.details.length > 140
                      ? blog.details.slice(0, 140) + "..."
                      : blog.details,
                }}
              />
              <Link
                to={`/blogs/${blog._id}`}
                className="inline-block transition-all hover:underline hover:text-[#0fcda1] duration-300 text-right hover:tracking-[2px]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))} */}
        {data?.data?.map((blog) => (
          <div
            key={blog._id}
            className="rounded-2xl border border-slate-500 hover:border-[#0fcda156] overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                className="object-cover object-center w-full h-48 lg:h-60"
                src={blog.image}
                alt="Blog Img"
              />
              <div
                className="opacity-0 group-hover:opacity-100 absolute -bottom-20 group-hover:bottom-0 flex gap-3 right-0 left-0 p-2 transition-all duration-300 backdrop-blur-sm bg-black bg-opacity-20 flexcode-banner-bg"
                style={{ boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)" }}
              >
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://res.cloudinary.com/djo4onkzl/image/upload/v1712214195/qc2jldu94gngfotmugzi.jpg"
                  alt="image"
                />
                <div>
                  <h1 className="text-sm font-semibold text-white">
                    Mehedi Hasan Foysal
                  </h1>
                  <span className="text-sm text-slate-200">Author</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <Link to={`/blogs/${blog._id}`}>
                <h1 className="text-lg md:text-xl font-semibold primary-color">
                  {blog.title}
                </h1>
              </Link>

              <div className="max-w-[150px] flex justify-center border-2 border-[#0fcda1] rounded my-5"></div>
              <p
                className="text-sm text-slate-300 mb-5"
                dangerouslySetInnerHTML={{
                  __html:
                    blog.content.length > 140
                      ? blog.content.slice(0, 140) + "..."
                      : blog.content,
                }}
              />
              <Link
                to={`/blogs/${blog._id}`}
                className="inline-block transition-all hover:underline hover:text-[#0fcda1] duration-300 text-right hover:tracking-[2px]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
