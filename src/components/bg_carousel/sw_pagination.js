import React from 'react'

const CarouselPagination = ({count, changeImage, activeSlide}) => {
  const numberArray = count && Array.from(Array(count).keys())
  return (
    <div className="sw_pagination d-flex">
      {numberArray &&
        numberArray.length &&
        numberArray.map((e, i) => (
          <span
            onClick={() => changeImage(e)}
            className={
              'd-flex align-items-end ' + ((activeSlide == i && 'active') || '')
            }
            key={e + 3}
          >
            {' '}
            0{i + 1}{' '}
          </span>
        ))}
    </div>
  )
}
export default CarouselPagination
