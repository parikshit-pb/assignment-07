 
import './App.css'
import Navbar from './components/navbar/navbar'
import BannerItem from './components/bannerItem/BannerItem'
import CardItem from './components/cardItem/Card'
import { Suspense } from 'react'

const fetchCard = async () =>{
  const res = fetch("/card.json")
  return (await res).json()
}
function App() {
  const cardPromise = fetchCard()
  
  return (
    <>
    <Navbar></Navbar>
    <BannerItem></BannerItem>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <CardItem cardPromise={cardPromise}></CardItem>
    </Suspense>
    </>
  )
}

export default App
