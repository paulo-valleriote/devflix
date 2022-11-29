/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components /Button';
import FormField from '../../../components /FormField';
import PageDefault from '../../../components /PageRoot';
import API from '../../../baseurl';
import Loading from '../../../components /Loading';
import Table from '../../../components /Table';

export default function RegisterNewCategory() {
  const initialValues = {
    title: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      API.post('/categories', {
        title: values.title,
        description: values.description,
        color: values.color,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
    setCategories([...categories, values]);

    setValues(initialValues);
  };

  const fetchCategories = async () => {
    try {
      const res = await API.get('categories');

      setCategories([
        ...res.data,
      ]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeCategory = async (id) => {
    try {
      await API.delete(`/categories/${id}`);

      fetchCategories();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormField
          label="Título da Categoria"
          type="text"
          name="title"
          value={values.title}
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

        <FormField
          label="Autenticação"
          type="text"
          name="auth"
          value={values.auth}
          onChange={handleValues}
        />

        <Button
          style={{
            backgroundColor: 'var(--primary)',
            border: 'none',
            marginRight: '30px',
            marginBottom: '30px',
          }}
        >
          Salvar
        </Button>

        <Button
          onClick={(e) => {
            e.preventDefault();
            setValues(initialValues);
          }}
          style={{
            color: 'var(--black)',
            backgroundColor: 'var(--grayDarker)',
            border: 'none',
          }}
        >
          Limpar
        </Button>
      </form>

      {
        categories.length === 0 && (
          <Loading>
            Carregando categorias...
          </Loading>
        )
      }

      {
        categories.length !== 0 && (
          <Table>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.title}</td>
                <td>{category.description}</td>
                <td>Editar</td>
                <td onClick={() => removeCategory(category.id)}>Remover</td>
              </tr>
            ))}
          </Table>
        )
      }

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
