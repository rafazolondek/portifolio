import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Header />
      <Content />
      <Content2 />
      <Content3 />
      <Projects />

    </>
  )
}

export default App
