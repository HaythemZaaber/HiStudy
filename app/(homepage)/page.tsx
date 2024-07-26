import BackToTop from "../backToTop";
import HomePage from "./(home)";
import { getAllPostsMeta } from "@/mdx";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "ELearning Platform",
  description: "ELearning Platform for kids",
};


const Home = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <HomePage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default Home;
