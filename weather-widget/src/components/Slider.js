import { useState, useCallback, useEffect } from 'react'

export const Slider = ({children}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(1)
  const [containerEl, setContainerEl] = useState(null);
  const setContainer = useCallback(node =>
    node !== null ? setContainerEl(node) : null
  , [])
  const [totalWidth, setTotalWidth] = useState(window.innerWidth)

  let width = containerEl ? containerEl.children[0].offsetWidth : 205 // guess
  let scrollWidth = containerEl ? containerEl.scrollWidth : width*6

  useEffect(() =>
    window.addEventListener("resize", () =>
      setTotalWidth(window.innerWidth)
    ), []
  )

  return (
    <div ref={setContainer} className="Card-Container" style={{ transform: `translateX(${totalWidth/2 - width/2 + activeCardIndex * - scrollWidth/6}px)` }}>
      {children.map((child, i) => {
        return (
          <Slide
            key={i}
            state={i - activeCardIndex}
            onClick={() => setActiveCardIndex(i)}
          >
            {child}
          </Slide>
        )
      })}
    </div>
  )
}

export const Slide = ({state, onClick, children}) => {
  const classes = {
    "-1": "Card Prev",
    "0": "Card Current",
    "1": "Card Next",
  }[state] || "Card"
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}
