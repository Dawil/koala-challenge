/** @jsxImportSource @emotion/react */

import { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 3em 0;
  height: 450px;
  max-width: 200%;
  min-width: 600px;
  width: auto;
  transition: transform 1s ease;
`

const Card = theme => css`
  background-color: ${theme.colors.background};
  border-radius: 10px;
  max-height: 250px;
  height: 100%;
  opacity: 0;
  width: 200px;
  min-width: 170px;
  max-width:200px;
  margin: 2em 1em;
  padding: 1rem ;
  transition: all 1s ease;
  box-shadow: -5px 5px 3px 2px rgba(200,200,200,0.5);
  position: relative;
`

const Current = css`
  opacity: 1;
  height: 80%;
  max-height: 80%;
  margin: 1em 2em;
  * {
    opacity: 1 !important;
  }
`

const Prev = css`
  opacity: 1;
`

const Next = css`
  opacity: 1;
`

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
    <Container ref={setContainer} style={{ transform: `translateX(${totalWidth/2 - width/2 + activeCardIndex * - scrollWidth/6}px)` }}>
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
    </Container>
  )
}

export const Slide = ({state, onClick, children}) => {
  const theme = useTheme()
  const classes = {
    "-1": [Card(theme), Prev],
    "0": [Card(theme), Current],
    "1": [Card(theme), Next],
  }[state] || [Card(theme)]
  return (
    <div css={[...classes]} onClick={onClick}>
      {children}
    </div>
  )
}
