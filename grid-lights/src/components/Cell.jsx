import React from 'react'

const Cell = ({filled, onClick, isDisabled, label}) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  )
}

export default Cell