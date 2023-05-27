'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import rocket from '../../assets/rocket.png'

const Rocket = () => {
  const [showRocket, setShowRocket] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRocket(false)
    }, 3000) // Tempo em milissegundos para o foguete sumir (3 segundos)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (showRocket) {
      controls.start({ x: '100%', y: '100%' })
      controls.start({ x: '0%', y: '0%' })
    }
  }, [showRocket, controls])

  return (
    <motion.div
      className="fixed bottom-0 right-0"
      initial={{ x: '100%', y: '100%' }}
      animate={controls}
      transition={{ duration: 3, ease: 'linear' }}
      style={{ display: showRocket ? 'block' : 'none' }}
    >
      <Image src={rocket} alt="Rocket" className="h-16 w-16" />
    </motion.div>
  )
}

export default Rocket
