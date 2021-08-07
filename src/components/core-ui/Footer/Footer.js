import React from 'react'

const Footer = ({ addClass }) => {
  return (
    <footer className={`flex items-center justify-center ${addClass} md:bottom-0`}>
      <p>&copy; Gerardo Vinces Copyright 2021</p>
    </footer>
  )
}

export default Footer
