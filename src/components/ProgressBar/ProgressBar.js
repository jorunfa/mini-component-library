/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressWrapper = styled.div`
  width: 100%;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const ProgressInner = styled.div`
  height: 100%;
  background: ${p => `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary} ${p.value}%, transparent ${p.value}%, transparent)`};
  border-radius: 4px;
  transition: background-color 0.5s ease;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unkown ProgressBar size ${size}`);
  }

  return <ProgressWrapper
      role="progressbar"
      aria-valuenow={value}
      max="100"
      aria-valuemax="100"
      aria-valuemin="0"
      style={styles}
      >
    <VisuallyHidden>Progress is {value}%</VisuallyHidden>
    <ProgressInner
      style={styles}
      value={value}
    ></ProgressInner>
  </ProgressWrapper>
};

export default ProgressBar;
