import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function InteractivePrompt() {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleCommand = (command) => {
    const trimmed = command.trim().toLowerCase()

    if (trimmed === 'whoami') {
      navigate('/')
    } else if (trimmed.startsWith('man ')) {
      navigate('/about')
    } else if (trimmed === 'ls ~/skills') {
      navigate('/skills')
    } else if (trimmed === 'cat resume.md') {
      navigate('/resume')
    } else if (trimmed === 'echo $contact' || trimmed === 'echo $CONTACT') {
      navigate('/contact')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (input.trim()) {
        handleCommand(input)
      }
      setInput('')
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      whiteSpace: 'nowrap',
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace",
      fontWeight: '600',
      fontSize: '0.95rem'
    }}>
      <span style={{ color: '#4ec9b0' }}>ndiaga@devbox</span>
      <span style={{ color: '#d4d4d4' }}>:~$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder=" "
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#d4d4d4',
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace",
          fontWeight: '600',
          fontSize: '0.95rem',
          outline: 'none',
          width: '180px',
          caretColor: '#d4d4d4',
          paddingLeft: '0.25rem'
        }}
      />
    </div>
  )
}

export default InteractivePrompt
