import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const WrapperFormField = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  display: flex;
  align-items: center;

  height: 56px;

  position: absolute;
  top: 0;
  left: 16px;

  color: var(--grayMedium);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transform: 0% 0%;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  display: block;

  width: 100%;
  height: 60px;
  padding: 16px 16px;
  margin-bottom: 45px;

  color: var(--grayLight);
  font-size: 18px;

  outline: 0;
  border: 0;
  border-radius: 4px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--blackLighter);

  background: var(--blackLighter);

  resize: none;

  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  ${({ hasValue }) => hasValue && css`
      &:not([type='color']) + span {
      transform: scale(.6) translateY(-26px) translateX(-32%);
      }
  `}
`;

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';
  const maxLength = isTextArea ? 36 : 60;

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          maxLength={maxLength}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete="off"
          list={`suggestionFor_${fieldId}`}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </WrapperFormField>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
