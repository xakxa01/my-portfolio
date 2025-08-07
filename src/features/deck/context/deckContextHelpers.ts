import { createContext } from 'react'
import { IDeckContext } from '@/shared/types'

export const deckContext = createContext({} as IDeckContext)

export const ANIMATION_CONFIG = {
  SWIPE: { tension: 150, friction: 50 },
  MOVE: { tension: 500, friction: 60 }
}

export const RESET_DELAY = 600

export const to = (i: number, delay?: number) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: -2 + Math.random() * 5,
  delay: i * delay!,
})

export const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -10000 })

export const swipeLeft = () => ({ x: -2000, rot: -30, scale: 0.8, y: 0 })
export const swipeRight = () => ({ x: 2000, rot: 30, scale: 0.8, y: 0 })
