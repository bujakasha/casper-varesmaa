import React from 'react'
import PropTypes from 'prop-types'
import PaginationControl from './pagination_control'
import ControlArrow from './arrow_control'
import './_swiper_controls.scss'

const SwiperControl = ({activeIndex, showIfSm, slides, slideTo, goPrev, goNext}) => {
  //  const slides = [0,1,2];

  return (
    <div className={(!showIfSm&&'d-none d-sm-flex '||'d-flex')+
    
    " sw_controls align-items-end justify-content-between"}>
      <div className="numbers d-one d-flex  align-items-end">
        {slides.map((index, i) => (
          <PaginationControl
            key={`desktop${i}`}
            active={activeIndex}
            index={i}
            onClick={slideTo}
          />
        ))}
      </div>
      <div className="numrs d-flex align-items-end" />

      <div className="" style={{height: '35px'}}>
        <ControlArrow direction="left" onClick={goPrev} />
        <ControlArrow direction="right" onClick={goNext} />
      </div>
    </div>
  )
}

SwiperControl.propTypes = {
  activeIndex: PropTypes.number,
  showIfSm: PropTypes.bool,
  slideTo: PropTypes.func,
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
}

export default SwiperControl
