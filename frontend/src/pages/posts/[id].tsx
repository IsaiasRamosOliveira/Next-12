import { useRouter } from "next/router";
import React from "react";
import posts from "../../json/posts.json";

export async function getStaticPaths() {
  const paths = posts.posts.map((post) => (
    { params: { id: `${post.id}` } }
  ));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const post = posts.posts.find((post) => post.id == id);
  return {
    props: post,
    revalidate: 30,
  };
}
const Post = ({ id, name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Post;
