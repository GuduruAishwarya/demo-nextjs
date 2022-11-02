import Link from "next/Link";
import Head from "next/head";
import Script from "next/script";
// import Layout from "layout";
import React from "react";
import styles from "/styles/MyFirstPost.module.scss"
import styled from "styled-components";

const Mystyledtag=styled.h1`
color:${({theme})=>theme.mycolors.primary};`

export default function MyFirstPost() {
    return (
    <>
    {/* <React.StrictMode> */}
    <Layout>
    <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <div>First Post page</div>
    <Mystyledtag>Custom Styled tag </Mystyledtag>
    {/* The Link component enables client-side navigation between two pages in the same Next.js app */}
      <h2 className={styles.headers}>
        <Link href="/posts">Back to Posts</Link>
      </h2>
      {/* whenever Link components appear in the browser’s viewport, Next.js automatically prefetches 
      the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant! */}
    </Layout>
    {/* </React.StrictMode> */}
    </>
        )}