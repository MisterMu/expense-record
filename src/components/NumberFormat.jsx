import React from 'react'
import PT from 'prop-types'

const NumberFormat = ({
  number,
  prefix,
  prefixStyle,
  suffix,
  suffixStyle,
  gutter,
}) => {
  const numToRender = number.toLocaleString()
  return (
    <span>
      {prefix && (
        <span style={{ marginRight: gutter, ...prefixStyle }}>{prefix}</span>
      )}
      <span>{numToRender}</span>
      {suffix && (
        <span style={{ marginLeft: gutter, ...suffixStyle }}>{suffix}</span>
      )}
    </span>
  )
}

NumberFormat.propTypes = {
  number: PT.number,
  prefix: PT.oneOfType([PT.string, PT.node]),
  prefixStyle: PT.objectOf(PT.oneOfType([PT.string, PT.number])),
  suffix: PT.oneOfType([PT.string, PT.node]),
  suffixStyle: PT.objectOf(PT.oneOfType([PT.string, PT.number])),
  gutter: PT.number,
}

NumberFormat.defaultProps = {
  number: 0,
  gutter: 8,
}

export default NumberFormat
