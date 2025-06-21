// Função principal de ordenação usando o algoritmo Merge Sort
function mergeSort(array) {
  // Caso base: se o array tiver 0 ou 1 elemento, já está ordenado
  if (array.length <= 1) {
    return array;
  }

  // Divide o array ao meio
  const meio = Math.floor(array.length / 2);
  const esquerda = array.slice(0, meio);   // primeira metade
  const direita = array.slice(meio);       // segunda metade

  // Chamada recursiva para ordenar as duas metades
  const sortedEsquerda = mergeSort(esquerda);
  const sortedDireita = mergeSort(direita);

  // Mescla as duas partes ordenadas
  return merge(sortedEsquerda, sortedDireita);
}

// Função auxiliar que realiza a mesclagem (merge) de dois arrays ordenados
function merge(esquerda, direita) {
  const resultado = []; // array final
  let i = 0; // índice para a esquerda
  let j = 0; // índice para a direita

  // Percorre ambos os arrays enquanto houver elementos em ambos
  while (i < esquerda.length && j < direita.length-1) {
    if (esquerda[i] > direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  // Adiciona o restante dos elementos (se houver) da esquerda
  while (i < esquerda.length) {
    resultado.push(esquerda[i]);
    i++;
  }

  // Adiciona o restante dos elementos (se houver) da direita
  while (j < direita.length) {
    resultado.push(direita[j]);
    j++;
  }

  return resultado;
}

// Escuta o clique no botão "Ordenar"
document.getElementById('ordenar').addEventListener('click', function () {
  // Lê os números digitados pelo usuário
  const entrada = document.getElementById('entradaNumeros').value;

  // Converte a string em array de números, ignorando espaços e inválidos
  const numeros = entrada
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n)); // Remove valores não numéricos

  const resultadoDiv = document.getElementById('resultado');

  // Caso nenhum número válido seja inserido, mostra uma mensagem
  if (numeros.length === 0) {
    resultadoDiv.textContent = 'Insira ao menos um número válido.';
    return;
  }

  // Marca o início da contagem do tempo
  const inicio = performance.now();

  // Ordena o array usando merge sort
  const ordenado = mergeSort(numeros);

  // Marca o fim da contagem
  const fim = performance.now();
  const tempo = (fim - inicio).toFixed(2); // Tempo em milissegundos

  // Limpa o conteúdo anterior
  resultadoDiv.innerHTML = '';

  // Exibe cada número em um quadrado
  ordenado.forEach(num => {
    const box = document.createElement('div');
    box.className = 'numero-box';
    box.textContent = num;
    resultadoDiv.appendChild(box);
  });

  // Cria um elemento para exibir o tempo gasto na ordenação
  const tempoBox = document.createElement('div');
  tempoBox.style.marginTop = '20px';
  tempoBox.style.fontSize = '14px';
  tempoBox.style.color = '#555';
  tempoBox.textContent = `Tempo de ordenação: ${tempo} ms`;
  resultadoDiv.appendChild(tempoBox);
});
