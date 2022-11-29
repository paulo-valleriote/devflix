import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ConfirmButton } from '../../../components /Button';
import FormField from '../../../components /FormField';
import PageDefault from '../../../components /PageRoot';
import API from '../../../config';
import useForm from '../../../hooks/useForm';

export default function RegistarNewVideo() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleValues, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    API.get('/categories')
      .then((res) => res.data)
      .then((res) => setCategories([...res]))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo:
        {' '}
        {values.title}
      </h1>

      <form onSubmit={async (e) => {
        e.preventDefault();

        const findCategoryId = categories.find((category) => category.title === values.category);

        try {
          API.post('/videos', {
            title: values.title,
            url: values.url,
            categoryId: findCategoryId.id,
          });
        } catch (err) {
          console.log(err.message);
        }

        navigate('/');
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleValues}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleValues}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleValues}
          suggestions={categoryTitles}
        />

        <ConfirmButton>
          Salvar
        </ConfirmButton>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}
