import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components /Button';
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

  useEffect(() => {
    const URL = 'http://localhost:8080/categories';
    fetch(URL)
      .then(async (serverRes) => {
        const res = await serverRes.json();
        setCategories([
          ...res,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleValues}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleValues}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category}`}>
            {category.name}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
