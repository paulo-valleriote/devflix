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

  color: #E5E5E5;
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

  color: #F5F5F5;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-radius: 4px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  background: #53585D;

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
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </WrapperFormField>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
