import '@/styles/globals.css'
import React from 'react';
import themeprovider from './Themeprovider';

export const theme = {
  primaryColor : "red",
  secondaryColor : "blue"
}



export default function App({ Component, pageProps }) {
  return (
  <themeprovider.Provider value = {theme}>
  <Component {...pageProps} />
  </themeprovider.Provider>
  )
}
