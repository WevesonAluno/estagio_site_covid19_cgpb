// Configurações iniciais do mapa
var map = L.map('mapid').setView([-7.2216, -35.8730], 13); // Coordenadas centralizadas em Campina Grande
    
// Adiciona uma camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dados dos bairros
const dadosBairros = [
    //Zona Norte
    { coordenadas: [-7.2040329, -35.8865022], zona: 'Zona Norte', bairro: 'Alto Branco', novosCasos: 0, totalObitos: 2, totalCasos: 70 },
    { coordenadas: [-7.2023993, -35.9091867], zona: 'Zona Norte', bairro: 'Araxá', novosCasos: 0, totalObitos: 2, totalCasos: 70 },
    { coordenadas: [-7.1915733, -35.8874861], zona: 'Zona Norte', bairro: 'Bairro das Nações', novosCasos: 0, totalObitos: 2, totalCasos: 70 },
    { coordenadas: [-7.2110085, -35.8895252], zona: 'Zona Norte', bairro: 'Conceição', novosCasos: 0, totalObitos: 0, totalCasos: 70 },
    { coordenadas: [-7.1905128, -35.9087854], zona: 'Zona Norte', bairro: 'Cuités', novosCasos: 0, totalObitos: 0, totalCasos: 70 },
    { coordenadas: [-7.1941546, -35.8942189], zona: 'Zona Norte', bairro: 'Jardim Continental', novosCasos: 1, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2016614, -35.8845193], zona: 'Zona Norte', bairro: 'Jardim Menezes', novosCasos: 1, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2048856, -35.882008], zona: 'Zona Norte', bairro: 'Jardim Tavares', novosCasos: 1, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2055377, -35.9017666], zona: 'Zona Norte', bairro: 'Jeremias', novosCasos: 1, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2124739, -35.8826157], zona: 'Zona Norte', bairro: 'Lauritzen', novosCasos: 10, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.203456, -35.8957936], zona: 'Zona Norte', bairro: 'Louzeiro', novosCasos: 20, totalObitos: 3, totalCasos: 70 },
    { coordenadas: [-7.2041042, -35.9109652], zona: 'Zona Norte', bairro: 'Novo Araxá', novosCasos: 0, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2067518, -35.9048153], zona: 'Zona Norte', bairro: 'Palmeira', novosCasos: 0, totalObitos: 1, totalCasos: 70 },
    //Zona Oeste
    { coordenadas: [-7.220554, -35.9083529], zona: 'Zona Oeste', bairro: 'Bela Vista', novosCasos: 5, totalObitos: 0, totalCasos: 100 },
    { coordenadas: [-7.2212089, -35.9284245], zona: 'Zona Oeste', bairro: 'Bodocongó', novosCasos: 0, totalObitos: 3, totalCasos: 100 },
    { coordenadas: [-7.2265739, -35.9100552], zona: 'Zona Oeste', bairro: 'Centenário', novosCasos: 0, totalObitos: 4, totalCasos: 100 },
    { coordenadas: [-7.2369761, -35.9207761], zona: 'Zona Oeste', bairro: 'Dinamérica', novosCasos: 1, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2379271, -35.9441866], zona: 'Zona Oeste', bairro: 'Malvinas', novosCasos: 5, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2113604, -35.9048215], zona: 'Zona Oeste', bairro: 'Monte Santo', novosCasos: 10, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.217064, -35.9598051], zona: 'Zona Oeste', bairro: 'Mutirão do Serrotão', novosCasos: 0, totalObitos:31, totalCasos: 100 },
    { coordenadas: [-7.2023528, -35.927198], zona: 'Zona Oeste', bairro: 'Novo Bodocongó', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.223034, -35.9108036], zona: 'Zona Oeste', bairro: 'Pedregal', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2197873, -35.8992341], zona: 'Zona Oeste', bairro: 'Prata', novosCasos: 50, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2311734, -35.9079901], zona: 'Zona Oeste', bairro: 'Quarenta', novosCasos: 0, totalObitos: 3, totalCasos: 100 },
    { coordenadas: [-7.2223614, -35.8760416], zona: 'Zona Oeste', bairro: 'Ramadinha', novosCasos: 1, totalObitos: 2, totalCasos: 100 },
    { coordenadas: [-7.2423076, -35.9159176], zona: 'Zona Oeste', bairro: 'Santa Cruz', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2347566, -35.9123186], zona: 'Zona Oeste', bairro: 'Santa Rosa', novosCasos: 1, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2170643, -35.9506208], zona: 'Zona Oeste', bairro: 'Serrotão', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2580384, -35.97963], zona: 'Zona Oeste', bairro: 'Sítio Lucas', novosCasos: 10, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2002386, -35.874614], zona: 'Zona Oeste', bairro: 'Sítio Estreito', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    { coordenadas: [-7.2240922, -35.9589084], zona: 'Zona Oeste', bairro: 'Universitário', novosCasos: 0, totalObitos: 1, totalCasos: 100 },
    //Zona Leste
    { coordenadas: [-7.2124375, -35.8687257], zona: 'Zona Leste', bairro: 'Castelo Branco', novosCasos: 3, totalObitos: 0, totalCasos: 30 },
    { coordenadas: [-7.2258917, -35.8762769], zona: 'Zona Leste', bairro: 'José Pinheiro', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2341991, -35.8680387], zona: 'Zona Leste', bairro: 'Mirante', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2249118, -35.870228], zona: 'Zona Leste', bairro: 'Monte Castelo', novosCasos: 1, totalObitos: 5, totalCasos: 30 },
    { coordenadas: [-7.2167538, -35.8629506], zona: 'Zona Leste', bairro: 'Nova Brasília', novosCasos: 9, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2164965, -35.8759095], zona: 'Zona Leste', bairro: 'Santo Antônio', novosCasos: 0, totalObitos: 2, totalCasos: 30 },
    //Zona Sul
    { coordenadas: [-7.2693037, -35.9273857], zona: 'Zona Sul', bairro: 'Acácio Figueiredo', novosCasos: 10, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2754802, -35.9439447], zona: 'Zona Sul', bairro: 'Bairro das Cidades', novosCasos: 20, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2381725, -35.8876477], zona: 'Zona Sul', bairro: 'Catolé', novosCasos: 0, totalObitos: 0, totalCasos: 30 },
    { coordenadas: [-7.2747151, -35.920542], zona: 'Zona Sul', bairro: 'Catolé de Zé Ferreira', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2492557, -35.9137458], zona: 'Zona Sul', bairro: 'Cruzeiro', novosCasos: 1, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2677098, -35.9008439], zona: 'Zona Sul', bairro: 'Distrito Industrial', novosCasos: 1, totalObitos: 3, totalCasos: 30 },
    { coordenadas: [-7.2464555, -35.9188026], zona: 'Zona Sul', bairro: 'Distrito dos Mecânicos', novosCasos: 1, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2312113, -35.8911965], zona: 'Zona Sul', bairro: 'Estação Velha', novosCasos: 1, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2533373, -35.8816343], zona: 'Zona Sul', bairro: 'Itararé', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2560853, -35.912641], zona: 'Zona Sul', bairro: 'Jardim Borborema', novosCasos: 0, totalObitos: 0, totalCasos: 30 },
    { coordenadas: [-7.2346917, -35.9033971], zona: 'Zona Sul', bairro: 'Jardim Quarenta', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2507479, -35.8994941], zona: 'Zona Sul', bairro: 'Jardim Paulistano', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2533371, -35.9365817], zona: 'Zona Sul', bairro: 'Jardim Verdejante', novosCasos: 0, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2365406, -35.9002794], zona: 'Zona Sul', bairro: 'Liberdade', novosCasos: 0, totalObitos: 2, totalCasos: 70 },
    { coordenadas: [-7.2920203, -35.8897619], zona: 'Zona Sul', bairro: 'Ligeiro', novosCasos: 20, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2556156, -35.9042143], zona: 'Zona Sul', bairro: 'Novo Cruzeiro', novosCasos: 5, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2605503, -35.9028527], zona: 'Zona Sul', bairro: 'Novo Horizonte', novosCasos: 5, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2560087, -35.9280977], zona: 'Zona Sul', bairro: 'Palmeira Imperial', novosCasos: 1, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.258328, -35.9097971], zona: 'Zona Sul', bairro: 'Ressurreição', novosCasos: 1, totalObitos: 4, totalCasos: 70 },
    { coordenadas: [-7.2507479, -35.9040861], zona: 'Zona Sul', bairro: 'Rosa Cruz', novosCasos: 0, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2433375, -35.8787031], zona: 'Zona Sul', bairro: 'Sandra Cavalcante', novosCasos: 0, totalObitos: 1, totalCasos: 70 },
    { coordenadas: [-7.2257821, -35.8936345], zona: 'Zona Sul', bairro: 'São José', novosCasos: 0, totalObitos: 0, totalCasos: 70 },
    { coordenadas: [-7.2427506, -35.942764], zona: 'Zona Sul', bairro: 'Serra da Borborema', novosCasos: 2, totalObitos: 0, totalCasos: 100 },
    { coordenadas: [-7.2466434, -35.900226], zona: 'Zona Sul', bairro: 'Tambor', novosCasos: 2, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2631691, -35.9437689], zona: 'Zona Sul', bairro: 'Três Irmãs', novosCasos: 0, totalObitos: 1, totalCasos: 30 },
    { coordenadas: [-7.2722388, -35.9167318], zona: 'Zona Sul', bairro: 'Velame', novosCasos: 0, totalObitos: 1, totalCasos: 100 }
  ];

    

    // Função para determinar o tamanho do marcador com base nos novos casos
    function tamanhoECorDoMarcador(novosCasos) {
        if (novosCasos === 0) {
        return { tamanho: 1, cor: 'green' }; 
        } else if (novosCasos >= 1 && novosCasos <= 2) {
        return { tamanho: 1, cor: 'purple' }; 
        } else if (novosCasos >= 3 && novosCasos <= 10) {
        return { tamanho: 2, cor: 'purple' }; 
        } else {
        return { tamanho: 3, cor: 'purple' }; 
        }
    }

    // Iterar sobre a base de dados de bairros e adicionar marcadores no mapa
dadosBairros.forEach(function (dado) {
    const { coordenadas, zona, bairro, novosCasos, totalObitos, totalCasos } = dado; 
    const { tamanho, cor } = tamanhoECorDoMarcador(novosCasos);
    L.circleMarker(coordenadas, {
        radius: tamanho * 4,
        fillColor: cor,
        fillOpacity: 0.8,
        color: 'black',
        weight: 2,
    }).addTo(map)
    .bindPopup(`${bairro}, ${zona}<br>Novos Casos: ${novosCasos}<br>Total de Casos: ${totalCasos}<br>Total de Óbitos: ${totalObitos}`);
});

    // Criar camada de informativo
    var informativo = L.control();
    informativo.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'informativo');
        div.innerHTML = `
        <div class="legenda">
            <div class="cor verde"></div> Sem novos casos
        </div>
        <div class="legenda">
            <div class="cor roxa"></div> Novos casos
        </div>
        `;
    return div;
    };

    informativo.addTo(map);
  
    // Preenche o quadro com informações
    function preencherQuadroComBairros() {
        const quadroElement = document.getElementById('dados_table');

        dadosBairros.forEach(dado => {
            const zona = dado.zona;
            const bairro = dado.bairro;
            const novosCasos = dado.novosCasos;
            const totalObitos = dado.totalObitos;
            const totalCasos = dado.totalCasos;

            const linha = document.createElement('tr');
            linha.innerHTML = `<td>${zona}</td><td>${bairro}</td><td>Novos casos: ${novosCasos}</td><td>Total de óbitos: ${totalObitos}</td><td>Total de casos: ${totalCasos}</td>`;

            quadroElement.appendChild(linha);
        });
    }

    preencherQuadroComBairros();