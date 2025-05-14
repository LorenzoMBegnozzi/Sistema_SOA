# Lorenzo Marzola Begnozzi 23067179-2
# Sistema SOA: Análise de Tendência de Nomes no Brasil 🇧🇷

Este projeto tem como objetivo desenvolver um sistema orientado a serviços (SOA) que consome a API de Nomes do IBGE para analisar tendências de nomes próprios no Brasil, ao longo das décadas.

## 🔍 Objetivo

Analisar a evolução e a popularidade de nomes no Brasil utilizando dados históricos fornecidos pela API do IBGE. O sistema deve:

- Apresentar visualizações e gráficos;
- Permitir consultas por intervalo de décadas e por localização (UF ou município);
- Comparar a evolução de dois nomes ao longo do tempo.

## 🌐 API Utilizada

- [API de Nomes do IBGE](https://servicodados.ibge.gov.br/api/docs/nome) — retorna dados desde a década de 1930 sobre a popularidade de nomes no Brasil.

## 🛠️ Tecnologias Utilizadas

- HTML, CSS, JavaScript
- Frameworks/bibliotecas: [Chart.js](https://www.chartjs.org/), [D3.js](https://d3js.org/) ou [Google Charts](https://developers.google.com/chart)
- API REST (IBGE)
- Ferramentas de versionamento: Git + GitHub

## ✅ Requisitos Funcionais

1. **Evolução do ranking de um nome**
   - Consulta por nome, com filtro de intervalo de décadas (ex: 1970 a 2000).
   - Apresentar gráfico de evolução de ranking.

2. **Evolução de ranking de nomes em uma localidade**
   - Consulta por estado (UF) ou município.
   - Mostrar os 10 nomes mais frequentes em cada década na localidade.
   - Exibir dados em tabela.

3. **Comparação de dois nomes ao longo do tempo**
   - Inserção de dois nomes.
   - Exibição gráfica da popularidade de ambos desde a década de 1930 até a mais recente disponível.

## 💡 Funcionalidades

- Interface gráfica interativa.
- Chamadas REST à API do IBGE.
- Gráficos e tabelas com dados dinâmicos.

