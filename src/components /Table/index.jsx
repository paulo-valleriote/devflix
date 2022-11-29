import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StylezedTable = styled.table`
  margin-top: 20px;
  margin-bottom: 80px;
  width: 100%;

  table-layout: auto;

  border: 2px solid var(--primary);

  border-collapse: collapse;

  font-size: 27px;

  font-weight: 300;

  
  thead td {
    padding: 10px;
    
    border: 2px solid var(--primary);
    
    font-size: 35px;
    
    font-weight: 400;
  }

  td{
    padding: 10px; 
  }
  `;

function Table({ children }) {
  return (
    <StylezedTable>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Descrição</td>
          <td>Editar</td>
          <td>Remover</td>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </StylezedTable>
  );
}

Table.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Table;
