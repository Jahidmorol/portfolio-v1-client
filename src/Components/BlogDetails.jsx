import { Link } from "react-router-dom";

const BlogDetails = () => {
  const allBlogs = [
    {
      _id: "1",
      title: "Introduction to React",
      imageUrl: "https://i.ibb.co/M59mJ2x/cat1.jpg",
      details:
        "<p>React is a JavaScript library for building user interfaces lorem1 asdfjka kajfkd kfhoijf9fkj oiflkfhf ioasjfa fikfhjkdf idfujdf fadhfoihf 8dfhadnf kjfhf afoks adfajfjkfkfjfoifoisjdfj jkfakf dkfsdf iuadjff dfjdfad sfidfdif adfhi iuihjknghiasdf </p>",
    },
    {
      _id: "2",
      title: "Introduction to Another",
      imageUrl: "https://i.ibb.co/M59mJ2x/cat1.jpg",
      details:
        "<p>React is a JavaScript library for building user interfaces lorem1 asdfjka kajfkd kfhoijf9fkj oiflkfhf ioasjfa fikfhjkdf idfujdf fadhfoihf 8dfhadnf kjfhf afoks adfajfjkfkfjfoifoisjdfj jkfakf dkfsdf iuadjff dfjdfad sfidfdif adfhi iuihjknghiasdf </p>",
    },
  ];
  const singleBlog = {
    _id: "1",
    title: "Introduction to React",
    imageUrl: "https://i.ibb.co/M59mJ2x/cat1.jpg",
    details:
      "<p>React is a JavaScript library for building user interfaces lorem1 asdfjka kajfkd kfhoijf9fkj oiflkfhf ioasjfa fikfhjkdf idfujdf fadhfoihf 8dfhadnf kjfhf afoks adfajfjkfkfjfoifoisjdfj jkfakf dkfsdf iuadjff dfjdfad sfidfdif adfhi iuihjknghiasdf </p>",
    userImage: "https://i.ibb.co/dKZBwws/IMG-20230913-113345.jpg",
    userName: "Jahid Morol",
  };

  const isLoading = false;

  return (
    <div className="flexcode-container !pt-16 md:!pt-10">
      <div className="lg:flex">
        {/* Single Blog details side */}
        <div className="lg:w-[70%] lg:px-10 bg-secondary-color md:py-10 md:px-6 rounded-xl">
          <img
            className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src={singleBlog?.imageUrl}
            alt="Blog Image"
          />
          <div className="p-3 md:p-0">
            <p className="md:mt-6 text-sm text-white uppercase">Want to know</p>
            <h1 className="mt-2 md:mt-4 text-lg md:text-2xl font-semibold leading-tight primary-color">
              {singleBlog?.title}
            </h1>
            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={"https://i.ibb.co/dKZBwws/IMG-20230913-113345.jpg"}
                alt="image"
              />
              <div className="mx-4">
                <h1 className="text-sm text-white">Jahid Morol</h1>
                <p className="text-sm text-white">Author</p>
              </div>
            </div>
            <p
              className=" text-white mt-5 text-justify mb-5"
              dangerouslySetInnerHTML={{ __html: singleBlog?.details }}
            />
          </div>
        </div>

        {/* List of Blog Side side */}
        <div className="mt-8 lg:w-[30%] lg:mt-0 lg:px-6">
          <h2 className="text-2xl font-semibold pb-5">Recent Blogs</h2>

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
            allBlogs?.slice(0, 5).map((blog) => (
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
                      blog.details.length > 50
                        ? blog.details.slice(0, 50) + "..."
                        : blog.details,
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
