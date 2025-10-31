 
import './App.css'
import Navbar from './components/navbar/navbar'
import BannerItem from './components/bannerItem/BannerItem'
import CardItem from './components/cardItem/Card'
import FooterItem from './components/footerItem/FooterItem'
import { useState, useEffect, Suspense } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // state declare
  const [cardData, setCardData] = useState([])
const [selectedTasks, setSelectedTasks] = useState([])
const [resolvedTasks, setResolvedTasks] = useState([])
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)
  
useEffect(() => {
  const fetchCard = async () => {
    try{
      const res = await fetch('/card.json')
      const data = await res.json()
      setCardData(data)
    } catch (err) {
      console.error('Error loading data:', err)
    }
  }
  fetchCard()
}, [])
// card handle click

  const handleCardClick = (card) => {
    if (!selectedTasks.some(t => t.id === card.id)) {
      setSelectedTasks([...selectedTasks, card])
      setInProgressCount(prev => prev + 1)
      toast.info(`"${card.title}" is In Progress!`, {autoClose: 2000 })
    }
     }
    
    
    // Task complete handler
    const handleComplete = (cardId) => {
      const task = selectedTasks.find(task => task.id === cardId)
      if (!task) return;
      setSelectedTasks(prev => prev.filter(t => t.id !== cardId))

      setResolvedTasks([...resolvedTasks, task])

      setCardData(prev => prev.filter(t => t.id !== cardId))

       setInProgressCount(prev => prev - 1)
      setResolvedCount(prev => prev + 1)
      
      toast.success(`Task "${task.title}" marked as complete!`, {autoClose: 3000 })
      

    }
  
  
  return (
    <>
    <Navbar></Navbar>
    <BannerItem inProgress={inProgressCount} resolved={resolvedCount}></BannerItem>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <CardItem cardData={cardData}
    onCardClick={handleCardClick}
    selectedTasks={selectedTasks}
    onComplete={handleComplete}
    resolvedTasks={resolvedTasks}
    ></CardItem>
    </Suspense>
    <ToastContainer position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
    <FooterItem></FooterItem>
    </>
    
  )
}

export default App
