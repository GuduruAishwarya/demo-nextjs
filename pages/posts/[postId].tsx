import { useRouter } from "next/router";
import React from "react";
// to access the router object inside any function component in your app
export default function BlogPost({post}) {
  const router=useRouter()
  if(router.isFallback)
  {
    return <h1>loading...</h1>
  }
  return (
    <>
    <div>{post.id}-{post.title}</div>
    <div>{post.body}</div>
    </>
  )
}
export async function getStaticPaths()
{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data=await response.json();
  const paths=data.map(post=>{
    return    {
      params:
      {
        postId:`${post.id}`
      }
    }
  })
  return{
    // paths:[
    //   {
    //     params:{postId:'1'}
    //   },
    //   {
    //     params:{postId:'2'}
    //   },
    //   {
    //     params:{postId:'3'}
    //   },
    // ],
    paths:paths,
    fallback:'blocking',
  }
}
export async function getStaticProps(context)
{
  const {params}=context;
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data=await response.json();
  if(!data.id)
  {
    return    {
      notFound:true
    }
  }
  return{
    props:
    {
      post:data
    },
    revalidate:10
  }

}