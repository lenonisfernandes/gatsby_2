import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout title="Sobre">
      <h1>Sobre Esse Site</h1>
      <p>Estamos desenvolvendo estudos de Jamstack com Gatsby.</p>
      <Link to="/">Volta</Link>
    </Layout>
  )
}

export const Head = () => <title>Sobre</title>
