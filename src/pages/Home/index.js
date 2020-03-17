import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-feminino/34/COL-3582-234/COL-3582-234_zoom1.jpg?ts=1577801480&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-exact-feminino/79/D22-2018-879/D22-2018-879_zoom1.jpg?ts=1584322004&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-gonew-dotted-feminino/88/C62-2233-088/C62-2233-088_zoom1.jpg?ts=1584235538&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/14/NQQ-0553-014/NQQ-0553-014_zoom1.jpg?ts=1580231627&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1579006188&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-feminino/26/NQQ-0374-226/NQQ-0374-226_zoom1.jpg?ts=1577801462&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$ 129.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#454777" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
