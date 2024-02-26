import React from 'react'
import { Header } from './header/header'
import { Footer } from './footer/footer'

export const MainLayout = ({childer}) => {
  return (
    <>
    <header><Header/></header>
    <main>{childer}</main>
    <footer><Footer/></footer>
    </>
  )
}
