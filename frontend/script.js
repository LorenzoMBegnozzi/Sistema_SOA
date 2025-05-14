const backendUrl = 'http://localhost:3000';

async function buscarEvolucaoNome() {
    const nome = document.getElementById('nome').value;
    const res = await fetch(`${backendUrl}/nome/${nome}`);
    const data = await res.json();

    const decadas = data[0].res.map(entry => entry.periodo);
    const freq = data[0].res.map(entry => entry.frequencia);

    new Chart(document.getElementById('graficoNome'), {
        type: 'line',
        data: {
            labels: decadas,
            datasets: [{
                label: `Popularidade do nome ${nome}`,
                data: freq,
                borderColor: 'blue',
                fill: false
            }]
        }
    });
}

async function buscarTopNomesUF() {
    const uf = document.getElementById('uf').value;
    const res = await fetch(`${backendUrl}/localidade/${uf}`);
    const data = await res.json();

    const tabela = document.getElementById('tabelaNomes');
    tabela.innerHTML = `<tr><th>Década</th><th>Nome</th><th>Frequência</th></tr>`;
    data[0].res.slice(0, 3).forEach(entry => {
        tabela.innerHTML += `
    <tr>
      <td>Todos os anos</td>
      <td>${entry.nome}</td>
      <td>${entry.frequencia}</td>
    </tr>
  `;
    });
}

async function compararNomes() {
    const nome1 = document.getElementById('nome1').value;
    const nome2 = document.getElementById('nome2').value;
    const res = await fetch(`${backendUrl}/comparar?nome1=${nome1}&nome2=${nome2}`);
    const data = await res.json();

    const labels = data.nome1[0].res.map(e => e.periodo);
    const freq1 = data.nome1[0].res.map(e => e.frequencia);
    const freq2 = data.nome2[0].res.map(e => e.frequencia);

    new Chart(document.getElementById('graficoComparacao'), {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: nome1, data: freq1, borderColor: 'green', fill: false },
                { label: nome2, data: freq2, borderColor: 'red', fill: false }
            ]
        }
    });
}
