import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { AppProps } from 'next/app';
import React from 'react'
const mytheme = {
  mycolors:
  {
    primary: "pink"
  }
}
function MyApp({ Component, pageProps }:AppProps) {
  // console.log(Component.myLayout)
  // if (Component.myLayout) {
  //   return Component.myLayout(<Component {...pageProps} />)
  // }
  return (
    <ThemeProvider theme={mytheme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
