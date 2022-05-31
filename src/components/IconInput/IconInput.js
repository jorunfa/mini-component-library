import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unkown IconInput size ${size}`);
  }

  return <Wrapper style={{...styles, '--width': width + "px" }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon
      id={icon}
      size={size === "large" ? 24 : 16}
      strokeWidth={size === "large" ? 2 : 1} />
    <Input placeholder={placeholder} id={label} />
  </Wrapper>;
};

const SIZES = {
  large: {
    "--fontSize": 18 / 16 + "rem",
    "--padding": "8px 0 7px 36px",
    "--borderWidth": "2px",
  },
  small: {
    "--fontSize": 14 / 16 + "rem",
    "--padding": "4px 0 4px 24px",
    "--borderWidth": "1px",
  },
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }

  & div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: auto;
    margin-bottom: auto;
    pointer-events: none;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding: var(--padding);
  width: 100%;
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
