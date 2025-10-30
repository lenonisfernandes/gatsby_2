import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Teste from '../components/teste';

export default function IndexPage () {
  return (
    <Layout title="Home Page">
      <h1>Olá Mundo Gatsby!</h1>
      <p>Iniciando com os primeiros componentes do React no Gatsby.</p>
      <Teste nome="Machado de Assis" />
      <Link to="/about">Sobre</Link>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
