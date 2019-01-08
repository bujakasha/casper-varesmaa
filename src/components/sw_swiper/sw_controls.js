import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const CarouselControls = ({count, previous, next, activeImage}) => {
  const isCount = count && count >= 2
  const isLeft = isCount && activeImage != 0
  const isRight = isCount && activeImage < count
  return (
    <div className="sw_controls">
      <button
        type="button"
        onClick={previous}
        className={'btn sw_control_arr ' + ((isLeft && 'active') || 'disabled')}
      >
        <FontAwesomeIcon
          icon={['fal', 'long-arrow-left']}
          size="2x"
          transform="shrink-3s"
        />
      </button>

      <button
        type="button"
        onClick={next}
        className={
          'btn sw_control_arr ' + ((isRight && 'active') || 'disabled')
        }
      >
        <FontAwesomeIcon
          icon={['fal', 'long-arrow-right']}
          size="2x"
          transform="shrink-3s"
        />
      </button>
    </div>
  )
}
export default CarouselControls

export const ControlArrow = ({direction = 'right', onClick, isActive}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={'btn sw_control_arr ' + ((isActive && 'active') || 'disabled')}
    >
      <FontAwesomeIcon
        icon={['fal', `long-arrow-${direction}`]}
        size="2x"
        transform="shrink-3s"
      />
    </button>
  )
}
