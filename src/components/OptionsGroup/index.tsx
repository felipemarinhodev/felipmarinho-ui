import React, { useState } from 'react';
import { css, styled } from 'styled-components';

interface OptionGroup {
  id: number;
  title: string;
  body: string;
  footer: string
}
export interface OptionsGroupProps {
  options: OptionGroup[];
  defaultValue?: OptionGroup | null;
  onChange?: (option: OptionGroup) => void
}

const Section = styled.section<{ selected: boolean }>`
  ${({ selected }: { selected: boolean }) => css`
    
  width: 194px;
  height: 88px;
  background: ${selected ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)' : '#FFFFFF'};

  border: 1px solid;
  border-color: ${selected ? '#002f52' : '#EB9B00'};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;

  font-family: sans-serif;
  cursor: pointer;

  header {
    color:${selected ? '#FFFFFF' : '#EB9B00'}; 
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color:${selected ? '#FFFFFF' : '#EB9B00'}; 
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color:${selected ? '#FFFFFF' : 'rgba(0, 0, 0, 0.54)'}; 
    font-size: 12px;
    font-weight: 400;
  }
  `}
`

export const OptionsGroup = ({ options, onChange, defaultValue }: OptionsGroupProps) => {
  const [selected, setSelected] = useState<OptionGroup | null>(defaultValue ?? null);

  const handleSelected = (option: OptionGroup) => {
    setSelected(option);
    if (onChange) {
      onChange(option)
    }
  }

  return (
    <>
      {options.map(option => (
        <Section
          selected={selected !== null && selected.id === option.id}
          key={option.id}
          onClick={() => handleSelected(option)}
        >
          <header>
            {option.title}
          </header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>
            {option.footer}
          </footer>
        </Section>

      ))}

    </>
  )
}
