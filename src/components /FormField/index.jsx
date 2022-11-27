import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, FieldType, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
        <FieldType
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  FieldType: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
