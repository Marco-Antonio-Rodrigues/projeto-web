Claro! Abaixo está um `README.md` **detalhado** para o seu projeto de ordenação com Merge Sort em HTML, CSS e JavaScript. O documento está estruturado para facilitar a leitura tanto do sistema como um todo quanto **de cada arquivo e função** individualmente.

---

### 📄 `README.md`

# 📊 Ordenador com Merge Sort (HTML, CSS, JS)

Este projeto é uma aplicação web simples que permite ao usuário digitar uma lista de números, separá-los por vírgulas e ordená-los utilizando o algoritmo **Merge Sort**. A interface exibe os números ordenados em caixas visuais, além de mostrar o **tempo de execução** da ordenação.

---

## 📌 Funcionalidades

- ✅ Campo de entrada para números separados por vírgula.
- ✅ Ordenação eficiente usando Merge Sort.
- ✅ Exibição visual dos números ordenados em blocos (cards).
- ✅ Medição e exibição do tempo de ordenação.
- ✅ Mensagem de erro caso a entrada seja inválida.
- ✅ Responsividade e layout simples, ideal para testes com usuários iniciantes.

---

## 📁 Estrutura de Arquivos

```plaintext
.
├── index.html       # Estrutura da interface (HTML)
├── style.css        # Estilo da interface (CSS)
└── script.js        # Lógica de ordenação e interação (JavaScript)
````

---

## 📜 index.html

Arquivo principal da interface.

### Estrutura:

* `<input>`: onde o usuário insere os números.
* `<button id="ordenar">`: botão que dispara a ordenação.
* `<div id="resultado">`: container onde os números ordenados e o tempo são exibidos.
* `<script src="script.js">`: carrega a lógica JavaScript.
* `<link rel="stylesheet" href="style.css">`: aplica o estilo CSS.

---

## 🎨 style.css

Define o layout visual da aplicação.

### Destaques:

* `body`: define o layout centralizado e a fonte.
* `input`: estiliza o campo de entrada.
* `button`: define tamanho e aparência do botão.
* `#resultado`: container flexível com espaçamento entre os cards.
* `.numero-box`: estilização de cada número (card).

---

## 🧠 script.js

Contém a lógica do Merge Sort e o controle da interface.

### 🔁 `mergeSort(array)`

Função recursiva que implementa o algoritmo Merge Sort.

**Parâmetros**:

* `array`: array de números a ser ordenado.

**Retorno**:

* Array ordenado em ordem crescente.

**Etapas**:

1. Divide o array ao meio.
2. Chama `mergeSort()` recursivamente para cada metade.
3. Combina as partes ordenadas com `merge()`.

---

### 🔗 `merge(esquerda, direita)`

Função auxiliar usada por `mergeSort()` para mesclar dois arrays ordenados.

**Parâmetros**:

* `esquerda`, `direita`: arrays parciais já ordenados.

**Retorno**:

* Array único mesclado e ordenado.

---

### 🖱️ `document.getElementById('ordenar').addEventListener('click', ...)`

Função ativada ao clicar no botão "Ordenar".

**Fluxo**:

1. Lê os valores inseridos pelo usuário.
2. Converte a string em um array numérico, eliminando inválidos.
3. Valida se há números válidos.
4. Mede o tempo de execução da ordenação com `performance.now()`.
5. Ordena com `mergeSort`.
6. Renderiza os números ordenados em `.numero-box`.
7. Exibe o tempo de ordenação no final.

---

## 🧪 Exemplo de uso

**Entrada:**

```
10, 5, 3, 8, 1
```

**Saída:**

```
[1] [3] [5] [8] [10]
Tempo de ordenação: 0.10 ms
```

---

## 🧰 Requisitos

* Navegador moderno (Chrome, Firefox, Edge etc.)
* Nenhuma dependência externa
* Funciona **offline**
