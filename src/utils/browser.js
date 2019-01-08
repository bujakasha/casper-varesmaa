const isBrowser = typeof window !== 'undefined'

const loadTime = () => {
  if (!isBrowser) {
    return null
  }
  const timing = window.performance && window.performance.timing
  let now = new Date().getTime()
  let loadingTime = now - timing.responseEnd
  return loadingTime
}

export const getPageLoadTiemMs = endWith => {
  return isBrowser && `${loadTime()} ${endWith || 'ms'}`
}

export const getPageLoadTiemSeconds = (endWith, desimals) => {
  return (
    isBrowser &&
    `${((loadTime() % 60000) / 1000).toFixed(desimals || 2)}${endWith || 'sec'}`
  )
}

export const getPageLoadTiemSecondsNumber = desimals => {
  return isBrowser && ((loadTime() % 60000) / 1000).toFixed(desimals || 2)
}
