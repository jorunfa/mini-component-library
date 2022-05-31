import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const iconSize = 24;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextSizeContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px 52px 12px 16px;
  border-radius: inherit;
  color: inherit;
  line-height: 1.171875;
  font-size: ${16 / 16}rem;
  background: ${COLORS.transparentGray15};

  & + div {
    position: absolute;
    right: ${16 - iconSize/2}px;
    top: calc(50% - ${iconSize/2}px);
  }
`;

const SelectInternal = styled.select`
  appearance: none;
  border: none;
  border-radius: inherit;
  background: none;
  color: transparent;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:focus {
    outline-width: 2px;
    outline-style: solid;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <TextSizeContainer>{displayedValue}</TextSizeContainer><Icon id="chevron-down" size={iconSize} strokeWidth={1} />
      <SelectInternal id={label}>{children}</SelectInternal>
    </Wrapper>
  );
};

export default Select;
