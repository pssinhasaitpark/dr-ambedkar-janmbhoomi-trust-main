import React from 'react'
import {
  Header,
  HeaderTop,
  Footer,
  Achievment,
} from '../../components/index.js'
import { EventCelebration } from '../../pages/index.js'
const EventCelebrationLayout = () => {
  return (
    <>
      <div className='App'>
      <HeaderTop />
      <Header />
      <EventCelebration />
      <Achievment />
      <Footer />
      </div>
    </>
  )
}

export default EventCelebrationLayout