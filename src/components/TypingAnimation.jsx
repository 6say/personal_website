import { useState, useEffect } from 'react'

function TypingAnimation({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span>
      {displayedText}
      {!isComplete && <span style={{ animation: 'blink 0.7s infinite', marginLeft: '2px' }}>_</span>}
    </span>
  )
}

export default TypingAnimation
