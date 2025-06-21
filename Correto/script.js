function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const meio = Math.floor(array.length / 2);
  const esquerda = array.slice(0, meio);
  const direita = array.slice(meio);

  const sortedEsquerda = mergeSort(esquerda);
  const sortedDireita = mergeSort(direita);

  return merge(sortedEsquerda, sortedDireita);
}

function merge(esquerda, direita) {
  const resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  while (i < esquerda.length) {
    resultado.push(esquerda[i]);
    i++;
  }

  while (j < direita.length) {
    resultado.push(direita[j]);
    j++;
  }

  return resultado;
}


document.getElementById('ordenar').addEventListener('click', function () {
  const entrada = document.getElementById('entradaNumeros').value;

  const numeros = entrada
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  const resultadoDiv = document.getElementById('resultado');
  
  if (numeros.length === 0) {
    resultadoDiv.textContent = 'Insira ao menos um número válido.';
    return;
  }
  
  const inicio = performance.now();
  
  const ordenado = mergeSort(numeros);
  
  const fim = performance.now();
  const tempo = (fim - inicio).toFixed(2);
  
  resultadoDiv.innerHTML = '';
  ordenado.forEach(num => {
    const box = document.createElement('div');
    box.className = 'numero-box';
    box.textContent = num;
    resultadoDiv.appendChild(box);
  });

  const tempoBox = document.createElement('div');
  tempoBox.style.marginTop = '20px';
  tempoBox.style.fontSize = '14px';
  tempoBox.style.color = '#555';
  tempoBox.textContent = `Tempo de ordenação: ${tempo} ms`;
  resultadoDiv.appendChild(tempoBox);
});
