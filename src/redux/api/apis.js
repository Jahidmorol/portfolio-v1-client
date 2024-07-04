import { baseApi } from "./baseApi";

const allApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    getBlogs: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    getBlog: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
    getProjects: build.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
    getSkills: build.query({
      query: () => ({
        url: "/skill",
        method: "GET",
      }),
    }),
    getExperience: build.query({
      query: () => ({
        url: "/experience",
        method: "GET",
      }),
    }),
    getProject: build.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetExperienceQuery,
  useGetBlogsQuery,
  useGetBlogQuery,
  useGetProjectsQuery,
  useGetProjectQuery,
  useGetSkillsQuery,
} = allApis;
