import React from 'react'
import './_svg_section.scss'

const WaveSvg = ({children, id}) => (
  <svg viewBox="0 0 100 10">
    <defs>
      <pattern
        id={id}
        x="0"
        y="0"
        width="100"
        height="25"
        patternUnits="userSpaceOnUse"
      >
        <path
          transform="translate(0, -2)"
          d="M0 15 0 6C20 9 38 11 55 8 78 5 87 4 140 6l0 19z"
          id={id+'-center'}
          fill="#ffdd00b5"
        />

        <path
          d="M0 25 0 6C20 9 38 11 55 7 68 4 87 2 140 6l0 19z"
          id={id+'-bottom'}
          fill="#FFDD00"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill={'url(#' + id + ')'} />
  </svg>
)

const SvgSection = ({children, style}) => (
  <div className="svg_section w-100">
    <WaveSvg id="Wawetop" />

    <div className="inner">{children}</div>
    <div
      className=""
      style={{
        display: 'inline-block',
        transform: 'rotate(180deg)',
        marginTop: '-1px',
        width: '100%',
      }}
    >
      <WaveSvg id="Wawebottom" />
    </div>
  </div>
)

export default SvgSection
