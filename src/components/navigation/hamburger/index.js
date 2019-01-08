import React from 'react'
import './_hamburger.scss'

const Hamburger = ({isOpen, toggle, className}) => {
  return (
    <button
      className={
        className +
        ' hamburger hamburger--squeeze ' +
        (isOpen ? 'is-active' : '')
      }
      aria-label="Toggle menu"
      onClick={toggle}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  )
}
export default Hamburger
