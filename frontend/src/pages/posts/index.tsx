import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
const PostsStyled = styled.section`
  .posts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 22px;
    .post {
      width: 200px;
      height: 240px;
      padding: 20px;
      border-radius: 14px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.151);
      color: black;
    }
  }
`;

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3002/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <PostsStyled>
      <h1>Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <Link href={`posts/${post.id}`} className="post" key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </PostsStyled>
  );
};

export default Posts;
