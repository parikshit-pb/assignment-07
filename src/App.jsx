 
import './App.css'
import Navbar from './components/navbar/navbar'
import BannerItem from './components/bannerItem/BannerItem'
import CardItem from './components/cardItem/Card'
import { Suspense, useState } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchCard = async () =>{
  const res = fetch("/card.json")
  return (await res).json()
}
function App() {
  // state declare
  const cardPromise = fetchCard()
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)
  const [selectedTasks, setSelectedTasks] = useState([])
// card handle click
  const handleCardClick = (card) => {
    toast.info(`"${card.title}" is In Progress!`)
    setSelectedTasks([...selectedTasks, card])
    setInProgressCount(prev => prev + 1) }
    
    
    // Task complete handler
    const handleComplete = (cardId) => {
      const task = selectedTasks.find(task => task.id === cardId)
      if (task) alert(`Task "${task.title}" marked as complete!`)
      setResolvedCount(prev => prev + 1)
      setInProgressCount(prev => prev- 1)
      setSelectedTasks(prev => prev.filter(task => task.id !== cardId)) 

    }
  
  
  return (
    <>
    <Navbar></Navbar>
    <BannerItem inProgress={inProgressCount} resolved={resolvedCount}></BannerItem>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <CardItem cardPromise={cardPromise}
    onCardClick={handleCardClick}
    selectedTasks={selectedTasks}
    onComplete={handleComplete}></CardItem>
    </Suspense>
    <ToastContainer position='top-right bg-white' autoClose={3000}></ToastContainer>
    </>
    
  )
}

export default App
