
import React from 'react'
import withRebass from './withRebass'

const Bar = ({
  value = 0,
  theme,
  subStyles,
  transformStyle,
  ...props
}) => {
  const { scale, bold, colors } = theme

  const p = `${value * 100}%`
  const backgroundImage = `linear-gradient(90deg, ${backgroundColor} ${p}%, transparent ${p})`

  const sx = {
    fontWeight: bold,
    padding: scale[1],
    backgroundSize: '100% 100%',
    backgroundImage
  }

  return (
    <div
      {...props}
      {...transformStyle(props, sx)}
    />
  )
}

Bar._name = 'Bar'

export default withRebass(Bar)

