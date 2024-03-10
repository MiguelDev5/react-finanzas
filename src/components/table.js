import React, { useEffect, useState } from 'react';
import { getImagen } from '../js-notes/03-fetch.js';

const TableComponent = () => {
  
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchImagen = async () => {
      const imageUrl = await getImagen();
      setUrl(imageUrl);
    };

    fetchImagen();
  }, []);

  console.log(url);

  return (<div>
      <h1>Miguel Angel</h1>
      <img src={url} alt="Descripción de la imagen" />
      <table>
        <tbody>
          <tr>
            <td>Mis pruebas en react 0001 (Promesas)</td>
          </tr>
          <tr>
            <td>Mis pruebas en react 0001 (Fetch api)</td>
          </tr>
          <tr>
            <td>Mis pruebas en react 0001 (Operadores ternarios)</td>
          </tr>
        </tbody>
      </table>
    </div>);
};

export default TableComponent;