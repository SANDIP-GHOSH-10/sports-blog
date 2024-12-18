import React from 'react'
import Carousal from '../components/Carousal'
import BlogCard from '../components/LatestBlogCard'
import Show from './Show'
import BlogButton from '../components/BlogButton'
import Gallery from './Galary'
import PartnerPage from '../components/PartnerPage'

const Home = () => {
  return (
    <div  >
      <Carousal/>
      <BlogCard/>
      <BlogButton/>
      <Show/>
      <Gallery/>
      <PartnerPage/>
      </div>
  )
}

export default Home
