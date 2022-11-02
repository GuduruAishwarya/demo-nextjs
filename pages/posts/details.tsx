// import useSWR from "swr";
import { GetStaticPaths,GetStaticProps,GetServerSideProps } from "next";
import Link from "next/link";
import * as React from "react";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export default function About() {
//   const { data, error } = useSWR("/api/about", fetcher)

//   if (error) return <div>Error fetching data</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <div>
//       <h1>{data.name}</h1>
//     </div>
//   )
// }
// export default function About(props) {
//     return (
//       <div>
//         <h1>My name is: {props.name}</h1>
//       </div>
//     );
//   }
//////////////////////or///////////////////
  export default function SSG  ({posts}) {
    return (
    <> 

    {/* <div>SSG with data</div>
      <div>

       {users.map((post)=>
           {
             return (
               <div key={post.id}>
                <User posts={post}/>
                 </div>
             )
           })
       }
      </div> */}
      
      <h1>id:{process.env.NEXT_PUBLIC_SSID}</h1>
      <div>SSG with dynamic data</div>
      <div>

       {posts?.map((p)=>
           {
             return (
               <div key={p.id}>
                <div>{p.id}-{p.title}</div>
                <Link href={`/posts/${p.id}`} passHref>
        My post  </Link>
               </div>
             )
           })
       }
      </div> 
      
    </>
    );
  }
  export async function getServerSideProps()  {

    const user=process.env.DB_NAME;
    console.log("user:",user)








    //----------ssg with data------------
    //const data = await fetch("https://randomuser.me/api").then((res) =>
    //       res.json()
    //     );
    //     return {
    //       props: { name: data.results[0].name.first }
    // }
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data=await res.json();
  //   console.log(data)
  // return {
  //   props: { users: data},
  // };

  //ssg with dynamic parameters
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();
    // console.log(data)
  return {
    props: { posts:data.slice(0,3)},
  };
 }
//   export async function getServerSideProps() {
    
//     // res.setHeader(
//     //     'Cache-Control',
//     //     'public, s-maxage=10, stale-while-revalidate=59'
//     //   )
    
//     // console.log("nm",req,res)
//     const data = await fetch("https://randomuser.me/api").then((res) =>
//       res.json()
//     );
//     console.log("getServerSideProps")
//     return {
//       props: { name: data.results[0].name.first },
//     //   notFound:true
//     //   redirect:
//     //   {
//     //       destination:'/posts/1',
//     //       permanent:true
//     //   }
//     };
//   }
//   export async function getStaticProps() {

//     //----------ssg with data------------
//     //const data = await fetch("https://randomuser.me/api").then((res) =>
//     //       res.json()
//     //     );
//     //     return {
//     //       props: { name: data.results[0].name.first }
//     // }
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   //   const data=await res.json();
//   //   console.log(data)
//   // return {
//   //   props: { users: data},
//   // };

//   //ssg with dynamic parameters
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data=await res.json();
//     console.log(data)
//   return {
//     props: { posts:data.slice(0,3)},
//   };
//  }