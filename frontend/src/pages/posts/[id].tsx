import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { IPost } from '../../interface/interfaces';

export async function getStaticPaths() {
  const postJSON = await fetch('http://localhost:3001/posts')
  const posts = await postJSON.json();
  const paths = posts.map((post: IPost) => {
    return { params: { id: `${post.id}` } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(ctx: NextPageContext | any) {
  const id = ctx.params.id
  const postJSON = await fetch(`http://localhost:3001/posts/${id}`)
  const post: IPost = await postJSON.json();
  return {
    props: post
  }
}

const Post = (props: IPost) => {
  const route = useRouter()  
  return (
    <section id='page'>
      <h1 id='title'>Post - {props.id}</h1>
      <p>Author - {props.author}</p><br />
      <p>{props.description}</p><br />
      <i>{props.date}</i>
    </section>
  )
}

export default Post