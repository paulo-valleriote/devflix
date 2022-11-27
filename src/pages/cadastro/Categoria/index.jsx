import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components /FormField';
import PageDefault from '../../../components /PageRoot';

export default function RegisterNewCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  const setValue = (fieldKey, fieldValue) => {
    setValues({
      ...values,
      [fieldKey]: fieldValue,
    });
  };

  const handleValues = (e) => {
    e.stopPropagation();

    setValue(e.target.getAttribute('name'), e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCategories([...categories, values]);

    setValues(initialValues);
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Nome da Categoria"
          FieldType="input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleValues}
        />

        <FormField
          label="Descrição"
          FieldType="textarea"
          type=""
          name="description"
          value={values.description}
          onChange={handleValues}
        />

        <FormField
          label="Cor"
          FieldType="input"
          type="color"
          name="color"
          value={values.color}
          onChange={handleValues}
        />

        <button type="button">
          Cadastrar
        </button>

        <ul>
          {categories.map((category) => (
            <li key={`${category}`}>
              {category.name}
            </li>
          ))}
        </ul>
      </form>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
