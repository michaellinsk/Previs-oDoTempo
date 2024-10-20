
# Previsão do Tempo 🌦️

## 📋 Sobre o Projeto
Este projeto é uma aplicação web simples que permite ao usuário consultar a previsão do tempo para qualquer cidade no mundo. A aplicação utiliza a API do **OpenWeatherMap** para obter dados climáticos em tempo real e apresenta as seguintes informações:
- **Temperatura atual** em graus Celsius
- **Descrição das condições climáticas** (Ex.: Céu limpo, Nublado)
- **Ícone** representando o clima atual
- **Umidade** do ar (%)
- **Velocidade do vento** (km/h)
- **Bandeira do país** correspondente à cidade consultada

## 🚀 Funcionalidades
- **Busca por cidade**: Insira o nome da cidade e veja a previsão do tempo em tempo real.
- **Informações completas**: Temperatura, umidade, velocidade do vento e descrição do clima.
- **Interação simplificada**: Envio do nome da cidade pelo botão de pesquisa ou pressionando **Enter**.
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela.
- **Bandeira Dinâmica**: Exibe a bandeira do país correspondente à cidade pesquisada.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura do conteúdo.
- **CSS3**: Estilo e layout da aplicação.
- **JavaScript**: Lógica da aplicação e integração com API externa.
- **OpenWeatherMap API**: Para obter dados climáticos em tempo real.
- **FlagsAPI**: Para exibir bandeiras dos países.

## 📂 Estrutura do Projeto
```
previsao-do-tempo/
│
├── index.html      # Página principal da aplicação
├── css/
│   └── style.css   # Arquivo de estilo CSS
├── js/
│   └── script.js   # Lógica da aplicação e consumo de API
└── README.md       # Documentação do projeto
```

## 🧩 Explicação do Código
### HTML (`index.html`)
- Estrutura básica da interface com campo de entrada e botão de pesquisa.
- Exibe as informações climáticas, como temperatura e umidade, com ícones representativos.

### CSS (`style.css`)
- Gradiente de fundo e layout centralizado.
- Estilização dos componentes para garantir uma interface amigável e responsiva.

### JavaScript (`script.js`)
- **Função `getWeatherData`**: Busca dados climáticos da API do OpenWeatherMap.
- **Função `showWeatherData`**: Exibe os dados obtidos na interface.
- **Eventos**: Configura a interação ao clicar no botão ou pressionar Enter no campo de entrada.

## 🔑 Como Usar
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd previsao-do-tempo
   ```
2. Abra o arquivo `index.html` no navegador.
3. Digite o nome de uma cidade e clique no botão de pesquisa ou pressione **Enter**.
4. Veja a previsão do tempo exibida na tela.

## 🔄 Exemplo de Uso
Digite "São Paulo" e veja informações como:
- **Temperatura**: 25°C
- **Clima**: Parcialmente nublado
- **Umidade**: 60%
- **Velocidade do vento**: 10km/h

## 🔧 Possíveis Melhorias
- Adicionar **detecção automática de localização**.
- Exibir previsão para **próximos dias**.
- Permitir alternar entre unidades de temperatura (Celsius/Fahrenheit).
- Mostrar dados visuais mais ricos, como gráficos de previsão.

## ⚠️ Dependências e APIs
- Crie uma conta no [OpenWeatherMap](https://openweathermap.org/) e obtenha uma API key.
- Atualize a variável `apikey` no arquivo `script.js` com sua chave de API.

## 🤝 Contribuições
1. Faça um fork do repositório.
2. Crie uma branch para a nova feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o GitHub:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## 📝 Licença
Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido por:** Michael Rodrigues
