import React from "react"
import { css } from '@emotion/core'
import { sp, colors } from "../constants/constants"

const hamburger = css({
  display: 'none',
  [`${sp}`]: {
    display: 'block',
    position: 'fixed',
    top: '30px',
    right: '20px',
    width: '36px',
    zIndex: 3,
    '&.opened > div': {
      '&:first-of-type': {
        transform: 'rotate(-45deg) translateX(-6px)',
      },
      '&:nth-of-type(2)': {
        opacity: 0,
      },
      '&:last-of-type': {
        transform: 'rotate(45deg) translateX(-5px)',
      },
    },
    '&:hover': {
      outline: 'none',
    }
  }
})

const line = css({
  [`${sp}`]: {
    width: '100%',
    height: '4px',
    backgroundColor: colors.blackColor,
    transition: 'all 0.3s',
    '&:first-of-type': {
      transform: 'translateY(-10px)',
    },
    '&:nth-of-type(2)': {
      transform: 'translateX(0)',
      opacity: 1,
    },
    '&:last-of-type': {
      transform: 'translateY(10px)',
    },
  }
})

class Hamburger extends React.Component {
  render() {
    const { handleOpen, open } = this.props
    return (
      <div
        css={hamburger}
        role="button"
        tabIndex={0}
        className={open}
        onClick={handleOpen}
        onKeyDown={handleOpen}
      >
        <div css={line} />
        <div css={line} />
        <div css={line} />
      </div>
    )
  }
}

export default Hamburger
