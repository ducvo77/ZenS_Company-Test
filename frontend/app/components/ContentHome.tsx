'use client'

import { useState } from 'react'
import { JOKES_CONTENT } from '../apis/mock-data'

export default function ContentHome() {
  const [jokeIndex, setJokeIndex] = useState<number>(Number(localStorage.getItem('jokeIndex')) || 0)
  const [funny, setFunny] = useState<{ like: number; dislike: number }>({
    like: 0,
    dislike: 0
  })
  console.log(Number(localStorage.getItem('jokeIndex')))

  const isFinish = jokeIndex === JOKES_CONTENT.length - 1

  const handleNextJoke = () => {
    if (isFinish) return
    setJokeIndex(jokeIndex + 1)
    localStorage.setItem('jokeIndex', (jokeIndex + 1).toString())
  }

  const likeFunny = () => {
    handleNextJoke()
    setFunny({ ...funny, like: funny.like + 1 })
  }

  const dislikeFunny = () => {
    handleNextJoke()
    setFunny({ ...funny, dislike: funny.dislike + 1 })
  }

  console.log(funny)

  return (
    <>
      <div className='h-[250px] bg-[#29B363] flex items-center justify-center flex-col text-white gap-6'>
        <h1 className='text-3xl font-semibold'>A joke a day keeps the doctor away</h1>
        <p className='text-xs'>If you joke wrong way, your teeth have to pay. (Serious)</p>
      </div>

      <div className='px-[312px] flex flex-col gap-12 mt-16'>
        <p className='text-[#6C6C6C] leading-6'>{JOKES_CONTENT[jokeIndex]}</p>
        <span className='h-[1px] bg-gray-200 mx-[100px]'></span>
        <div className='flex justify-center gap-7'>
          <button
            disabled={isFinish}
            onClick={likeFunny}
            className={`px-20 py-3 shadow-md bg-[#2C7EDB] text-white text-[15px] ${isFinish ? 'opacity-60' : ''}`}
          >
            This is Funny!
          </button>
          <button
            disabled={isFinish}
            onClick={dislikeFunny}
            className={`px-20 py-3 shadow-md bg-[#29B363] text-white text-[15px] ${isFinish ? 'opacity-60' : ''}`}
          >
            This is not funny.
          </button>
        </div>
      </div>
    </>
  )
}
