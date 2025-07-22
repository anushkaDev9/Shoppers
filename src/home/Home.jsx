import React from 'react'
import Header from '../comp/Header'
import LatestCollection from '../comp/LatestCollection'
import BestSellers from '../comp/BestSellers'
const Home = () => {
  return (
    <div >
      <Header/>
      <LatestCollection/>
      <BestSellers/>
    </div>
  )
}

export default Home