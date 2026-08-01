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

    if (command === 'whoami' || command === 'cd') {
      navigate('/')
    } else if (command === 'man ndiaga') {
      navigate('/about')
    } else if (command === 'sudo hire me' || command === 'ls ~/skills' || command === 'cat resume.md') {
      navigate('/resume')
    } else if (command === 'cat README.md' ) {
      navigate('/about')
    } else if (command.startsWith('cd')) {
      let target = '/' + command.substring(3);
      if(target === '/home') {
        target = '/'
      }
      navigate(target)
    };
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
        placeholder="type command"
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
