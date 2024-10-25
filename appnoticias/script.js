// API keys (substitua pelas suas próprias keys)
const apiKeyClima = "fe825c1fd991dc42c7cab41bb89363e8";
const apiKeyNoticias = 'SUA_API_KEY_NOTICIAS';
const apiKeyCotacoes = 'SUA_API_KEY_COTACOES';

// Função para obter clima
async function getClima() {
    const respclima = await fetch("https://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=fe825c1fd991dc42c7cab41bb89363e8");
    const dadosclima = await respclima.json();
    console.log(dadosclima);
    document.getElementById("clima").innerText = `Clima: ${dadosclima.weather[0].description} - ${dadosclima.main.temp}°C`;
}

// Função para obter cotacoes
async function getCotacoes() {
    const respcota = await fetch(`(link unavailable)`);
    const dadoscota = await respcota.json();
    document.getElementById('dolar').innerText = `Dólar: ${dadoscota.bpi.BRL.rate}`;
    
    const respbtc = await fetch(`(link unavailable)`);
    const dadosbtc = await respbtc.json();
    document.getElementById('bitcoin').innerText = `Bitcoin: ${dadosbtc.bpi.BTC.rate}`;
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
        const respcat = await fetch(urls[categoria]);
        const dadoscat = await respcat.json();
        const noticias = dadoscat.articles.slice(0, 3); // Mostrar apenas 3 notícias por categoria

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