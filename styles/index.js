import React from 'react'
import styled, { keyframes } from 'styled-components'
import { space, fontSize, fontWeight } from 'styled-system'

export const colors = {
  cyan: '#0ff',
  violet: '#80f',
  magenta: '#f0f',
  lime: '#8f0',
}

export const Heading = styled('div')([],
  space,
  fontSize
)

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4
}

export const Text = styled('div')([],
  space,
  fontSize,
  fontWeight,
)
