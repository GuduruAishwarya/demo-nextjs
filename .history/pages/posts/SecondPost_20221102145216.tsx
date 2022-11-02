import Head from "next/head"
import Footer from "components/footer.js"
import React from "react"
export default function MySecondPost() {
    return (
    <>
    <Head>
        <title>Second Post</title>
      </Head>
    <div>Second Post page</div>
    </>
        )}
MySecondPost.myLayout=function MyPageLayout(p)
{
  return(
    <>
    {p}
    {console.log("p",p)}
    <Footer/>
    </>
  )
}