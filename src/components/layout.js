import * as React from "react";
import { Link } from "gatsby";
import {container, navLinks, navLinkItem, navLinkText} from "./layout.module.css"

export default function Layout({title, children}) {
    return (
        <div className={container}>
            <hr />
            <p>cabeçalho</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/">Início</Link></li>
                    <li className={navLinkItem}><Link to="/about">Sobre</Link></li>
                    <li className={navLinkItem}><Link to="/fornecedores">Fornecedores</Link></li>
                </ul>
            </nav>
            <hr />
            <main>
                <h1>{title}</h1>
                {children}
            </main>
            <hr />
            <p>rodapé</p>
            <hr />
        </div>
    )
}
