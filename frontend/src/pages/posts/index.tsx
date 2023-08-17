import { NextPageContext } from "next";
import { v4 as uuid } from "uuid";
import React from "react";
import Link from "next/link";
import { postsStyled } from "../../global/style/posts.css";
import BasicCard from "../../components/Card";
import nookies from "nookies";
import TokenService from "../../services/auth/TokenService";
import AuthService from "../../services/auth/AuthService";
import { withSession } from "../../services/auth/session";

interface IPosts {
  posts: [
    {
      id: string;
      title: string;
      description: string;
      author: string;
      date: string;
    }
  ];
}

export const getServerSideProps = withSession( async (ctx: any) => {
  const postsJSON = await fetch("http://localhost:3008/posts");
  const posts = await postsJSON.json();
  return {
    props: {
      session: ctx.req.session,
      posts,
    },
  };
});

const Posts = ({ posts }: IPosts) => {
  return (
    <section id="page">
      <h1 id="title">Posts</h1>
      <div className={postsStyled}>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <BasicCard
              title={post.title}
              description={post.description}
              author={post.author}
              date={post.date}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Posts;
