// API keys (substitua pelas suas próprias keys)
const apiKeyClima = "14b9b53166ddc87676391107cab6774e";
const apiKeyNoticias = 'SUA_API_KEY_NOTICIAS';
const apiKeyCotacoes = 'SUA_API_KEY_COTACOES';

// Função para obter clima
async function getClima() {
    const resposta = await fetch(`http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=14b9b53166ddc87676391107cab6774e`);
    const dadosclima = await resposta.json();
    document.getElementById('clima').innerText = `Clima: ${dadosclima.weather[0].description} - ${dadosclima.main.temp}°C`;
}

// Função para obter cotacoes
async function getCotacoes() {
    const resposta = await fetch(`(link unavailable)`);
    const dadoscota = await resposta.json();
    document.getElementById('dolar').innerText = `Dólar: ${dadoscota.bpi.BRL.rate}`;
    
    const respostaBitcoin = await fetch(`(link unavailable)`);
    const dadosBitcoin = await respostaBitcoin.json();
    document.getElementById('bitcoin').innerText = `Bitcoin: ${dadosBitcoin.bpi.BTC.rate}`;
}

// Função para obter notícias
async function getNoticias() {
    const categorias = ['economia', 'esporte', 'politica', 'entretenimento'];
    const urls = {
        economia: '(link unavailable)',
        esporte: '(link unavailable)',
        politica: '(link unavailable)',
        entretenimento: '(link unavailable)',
    };

    for (const categoria of categorias) {
        const resposta = await fetch(urls[categoria]);
        const dados = await resposta.json();
        const noticias = dados.articles.slice(0, 3); // Mostrar apenas 3 notícias por categoria

        const divCategoria = document.getElementById(categoria);
        divCategoria.innerHTML = '';

        noticias.forEach(noticia => {
            const divNoticia = document.createElement('div');
            divNoticia.innerHTML = `
                <h3>${noticia.title}</h3>
                <p>${noticia.description}</p>
                <a href="${noticia.url}">Leia mais</a>
            `;
            divCategoria.appendChild(divNoticia);
        });
    }
}

// Executar funções ao carregar a página
getClima();
getCotacoes();
getNoticias();