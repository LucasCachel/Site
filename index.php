<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transporte Coletivo Glória</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <header class="home-header">
        <div class="logo">
            <img class="head-img" src="cabecalho.png" alt="Logo Transporte Coletivo Glória">
        </div>
        <nav>
            <ul>
                <li><a href="missao.html">Missão</a></li>
                <li><a href="qualidade.html">Qualidade</a></li>
                <li><a href="videos.html">Vídeos</a></li>
                <li><a href="lgpd.html">LGPD</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <div class="containermain">
            <img src="gloria.jpg" alt="Logo Transporte Coletivo Glória" class="logo-image">
        </div>
    </section>
  
    </section>

    <section id="slides">
        <div class="containerslide">
            <div class="logo-slide">
                <img src="vaisumir.png" alt="Logo da empresa" class="logo-img">
            </div>
            <ul class="slides">
                <li><a href="historia_imagem1.html"><img src="teste1.jpeg" alt="Imagem 1"></a></li>
                <li><a href="historia_imagem2.html"><img src="teste2.jpeg" alt="Imagem 2"></a></li>
                <li><a href="historia_imagem3.html"><img src="teste3.jpeg" alt="Imagem 3"></a></li>
            </ul>
            <a class="prev" onclick="plusSlides(-1)"><i class="fas fa-chevron-left"></i></a>
            <a class="next" onclick="plusSlides(1)"><i class="fas fa-chevron-right"></i></a>
        </div>
    
        <div id="areaHistoria" class="area-historia"></div>
    </section>

    <section id="quadrados">
        <div class="containerquadrado">
            <div class="tab">
                <button class="tablinks" onclick="window.open('http://200.250.197.42:9805/(S(qr5qylixs2ni2gnogm13js24))/Candidato.aspx?emp=24qa97v11E+szrp398PF2w==&est=24qa97v11E+szrp398PF2w==')">Trabalhe Conosco</button>
                <button class="tablinks" onclick="window.open('http://totemweb.vcg.com.br:9802/(S(rdxllesavk0t4lr5je3nleun))/LoginTotem.aspx?parms=1sZcyuqUx9blM8LV9LYgUA4Jexf1Y/RWw/sLjiAkVS9iUM8zzlcbvQxmPtDLm5l8mgBA1SBoq/lzpkPgF41Ohhl8o35QuFF5pYE1I6xZ4KXbZpszSmaerY5DMFjck0lfEnk2T2gRLPOsKIWlDy6MTA==')">Totem Web</button>
                <button class="tablinks" onclick="window.location.href='historia.html'">História</button>
            </div>
    
            <div id="trabalheConosco" class="tabcontent">
                <p>Conteúdo do Trabalhe Conosco...</p>
            </div>
    
            <div id="totemWeb" class="tabcontent">
                <p>Conteúdo do Totem Web...</p>
            </div>
    
            <div id="historia" class="tabcontent">
                <p>Conteúdo da História...</p>
            </div>
        </div>
    </section>
    
    <div class="cookie-banner" id="cookieBanner">
        <p>A TC Glória faz uso de cookies para fornecer a você a melhor experiência possível em nosso site. Você pode gerenciar suas preferências ou aceitar todos os cookies. Para saber mais, <a href="lgpd.html" style="color: #ffffff;">consulte nossa Política de Privacidade e Política de Cookies.</a></p>
        <div class="cookie-buttons">
            <button onclick="aceitarCookies()">Aceitar</button>
            <button onclick="negarCookies()">Negar</button>
            <button id="botaoGerenciarCookies">Gerenciar Cookies</button>
        </div>
    </div>
    <div id="modalOverlay" class="modal-overlay"></div>
    <div id="modalCookies" class="modal" style="display: none;">
        <div class="modal-content">
            <!-- Conteúdo do modal -->
            <span id="fecharModalCookies" class="fechar-modal">&times;</span>
            <h2>Gerenciar Cookies</h2>

            <div class="cookie-option">
            <label for="analyticsSwitch" class="cookie-title">Cookies Analíticos:</label>
            <label class="switch">
                <input type="checkbox" id="analyticsSwitch">
                <span class="slider"></span>
            </label>
            <p class="cookie-text">Utilizamos estes cookies para analisar a forma como os usuários usam o site e monitorar a performance deste. Isto permite-nos fornecer uma experiência de alta qualidade ao personalizar a nossa oferta e rapidamente identificar e corrigir quaisquer problemas que surjam. Por exemplo, usamos cookies de desempenho para saber quais as páginas mais populares, qual o método de ligação entre páginas que é mais eficaz, ou para determinar a razão de algumas páginas estarem a receber mensagens de erro. Baseado na utilização do site, podemos também utilizar estes cookies para destacar artigos ou serviços do site que pensamos ser do interesse dos usuários. Estes cookies são utilizados apenas para efeitos de criação e análise estatística, sem nunca recolher informação de carácter pessoal.</p>
        </div>

        <div class="cookie-option">
            <label for="functionalSwitch" class="cookie-title">Cookies de Funcionalidade:</label>
            <label class="switch">
                <input type="checkbox" id="functionalSwitch">
                <span class="slider"></span>
            </label>
            <p class="cookie-text">Utilizamos cookies de funcionalidade para nos permitir relembrar as preferências do usuário. Por exemplo, os cookies evitam digitar o nome do utilizador cada vez que este acede ao site. Também usamos cookies de funcionalidade para fornecer serviços avançados ao usuário, como por exemplo efetuar comentários a um artigo. Em resumo, os cookies de funcionalidade guardam as preferências do usuário relativamente à utilização do site, de forma que não seja necessário voltar a configurar o site cada vez que o visita, bem como assegura a disponibilização de funcionalidades adicionais do site.</p>
        </div>

        <div class="cookie-option">
            <label for="advertisingSwitch" class="cookie-title">Cookies de Publicidade:</label>
            <label class="switch">
                <input type="checkbox" id="advertisingSwitch">
                <span class="slider"></span>
            </label>
            <p class="cookie-text">Servem para direcionar a publicidade em função dos interesses de cada usuário e do número de visitas que realizou, permitindo limitar o número de vezes da exibição do anúncio. Estes cookies ajudam a medir a eficácia da publicidade.</p>
        </div>

        <button id="aceitarTodosCookies">Aceitar Todos os Cookies</button>
        <button id="salvarPreferencias">Salvar Preferências</button>
        </div>
    </div>

    <section id="Unidades e Contatos">
        <div class="containeruc">
            <h2>Unidades e Contatos</h2>
            <ul class="unidades">
                <li>
                    <h4>Unidade Boa Vista</h4>
                    <p>Av. Paraná nº 2265</p>
                </li>
                <li>
                    <h4>Unidade Teffé</h4>
                    <p>Rua Teffé nº 707</p>
                </li>
                <li>
                    <h4>Unidade Atuba</h4>
                    <p>BR-116 Km 91,5 nº 3003 Curitiba/PR</p>
                </li>
            </ul>
            <div class="contato">
                <p><strong>Tel.</strong> (41) 3251-5922</p>
                <p><strong>Email:</strong> <a href="mailto:tcgloria@tcgloria.com.br">tcgloria@tcgloria.com.br</a></p>
            </div>
        </div>
    </section>

    <footer>
        <div class="containerpe">
            <p class="company-name">&copy; 2024 Transporte Coletivo Glória</p>
            <div class="social-icons">
                <a href="https://www.instagram.com/tcgloria_/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
