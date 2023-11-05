'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { JOKES_CONTENT } from '../apis/mock-data'

export default function ContentHome() {
  const [jokeIndex, setJokeIndex] = useState<number | null>(null)
  const [funny, setFunny] = useState<{ like: number; dislike: number }>({
    like: 0,
    dislike: 0,
  })

  const isFinish = useMemo(
    () => jokeIndex === JOKES_CONTENT.length - 1,
    [jokeIndex]
  )

  useEffect(() => {
    const jokeIndex = window.localStorage.getItem('jokeIndex')
    if (jokeIndex) {
      setJokeIndex(Number(jokeIndex))
    } else {
      setJokeIndex(0)
    }
  }, [])

  const handleNextJoke = useCallback(() => {
    if (isFinish) return
    if (jokeIndex !== null) {
      setJokeIndex(jokeIndex + 1)
      window.localStorage.setItem('jokeIndex', (jokeIndex + 1).toString())
    }
  }, [isFinish, jokeIndex])

  const likeFunny = useCallback(() => {
    handleNextJoke()
    setFunny({ ...funny, like: funny.like + 1 })
  }, [funny, handleNextJoke])

  const dislikeFunny = useCallback(() => {
    handleNextJoke()
    setFunny({ ...funny, dislike: funny.dislike + 1 })
  }, [funny, handleNextJoke])

  return (
    <>
      <div className="h-[250px] bg-[#29B363] flex items-center justify-center flex-col text-white lg:gap-6 gap-4 xl:px-52 lg:px-32 md:px-24 sm:px-12 px-6">
        <h1 className="text-3xl font-semibold text-center">
          A joke a day keeps the doctor away
        </h1>
        <p className="text-xs text-center">
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>

      <div className="xl:px-80 lg:px-52 md:px-24 sm:px-8 px-3 flex flex-col xl:gap-12 md:gap-10 gap-6 xl:mt-16 md:mt-12 mt-6">
        {jokeIndex !== null && (
          <p className="text-[#6C6C6C] leading-6 text-justify">
            {JOKES_CONTENT[jokeIndex]}
          </p>
        )}
        <span className="h-[1px] bg-gray-200 mx-[100px]"></span>
        <div className="flex flex-col sm:flex-row justify-center sm:gap-7 gap-3">
          <button
            disabled={isFinish}
            onClick={likeFunny}
            className={`px-16 py-3 shadow-md bg-[#2C7EDB] text-white text-[15px] ${
              isFinish ? 'opacity-60' : ''
            }`}
          >
            This is Funny!
          </button>
          <button
            disabled={isFinish}
            onClick={dislikeFunny}
            className={`px-16 py-3 shadow-md bg-[#29B363] text-white text-[15px] ${
              isFinish ? 'opacity-60' : ''
            }`}
          >
            This is not funny.
          </button>
        </div>
      </div>
    </>
  )
}
