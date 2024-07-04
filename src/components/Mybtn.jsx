import * as React from 'react'

function Mybtn({ children }) {
  return (
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
        }}
      >
        {children}

      </button>

  )
}

export { Mybtn }