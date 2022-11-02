import Link from 'next/link';
import Head from 'next/head';
import useSWR from 'swr';
import React from 'react';
function Clientrender()
{
 const{data,error}= useSWR("client", async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
    const data=await response.json();
    return data
  })
  if(error)
    return <h1>error</h1>
  if(!data)
    return <h1>loading</h1>
  return <h1>{data.title}</h1>
}

export default function MyPosts() {
    return (
    <>
    <Head>
        <title>Posts</title>
      </Head>
      <Clientrender/>
    <div>Posts page</div>
    <h1 className="title">
  Read <Link href="/posts/FirstPost">Firstpost here!</Link>
</h1>
    </>
        )}