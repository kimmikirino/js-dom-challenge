# Desafio Javascript utilizando DOM

Criar uma página web que leia um array de objetos (data) e mostre as informações em um parágrafo cada. 

## Regras:

1. Fork o repositório
2. Utilizar o index.html, index.js
3. Pull request para o repositório, para correção
4. Utilizar JS puro

## Desafios:

1. Linkar o index.js no index.html
2. Utilizar o array data
3. Criar um map para iteração entre os itens do array
4. Criar um parágrafo com a informação de Id e Description (vindo do data)
5. Utilizar conceitos ES6+
6. Tags HTML5
7. Layout com CSS

## Adicionais (Opcional)

1. Responsividade
2. Criar novos campos com outras informações e mostrar na tela
3. Editar informações, utilizando input/botões

*****************************************************************

## Edições realizadas:
  * Alteração do index.js:
      - Remoção do array data (pois foi incluído no genero.js);
      - Inclusão do redirecionamento para a página que lista os gêneros;
  * Criação da página gênero;
      - No arquivo genero.js foi incluído o data array data, iteração com map e redirecionamento pra home ao clicar no logo;
  * Layout com css:
      - Tanto o layout da home quanto do gênero estão no mesmo arquivo;
      - Inclusão do layout da classe genre-container e dos divs que sejam filhos diretos, genre-items e description-page;
      - Inclusão da classe genre-container nas especificações de responsividade;
      - Alteração no gallery-container: width de 1360px para 100% e justify-content de flex-start para space-between (no meu note estava mostrando scroll na horizontal);
