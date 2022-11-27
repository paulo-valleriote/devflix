import React from "react"

const FormField = ({ label, FieldType, type, name, value, onChange }) => {
    return (
        <div>
            <label>
                {label}:
                <FieldType
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField