window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;
    const headerHeight = header.clientHeight;

    if (scrollPosition > headerHeight) {
        header.style.opacity = 0;
        footer.style.opacity = 1;
    } else {
        header.style.opacity = 1;
        footer.style.opacity = 0;
    }
});

let slideTimer;

function plusSlides(n) {
    clearTimeout(slideTimer);
    showSlides(slideIndex + n);
    slideTimer = setTimeout(function() {
        slideTransitioning(1);
    }, 3000);
}

function showSlides(index) {
    let slides = document.querySelectorAll('.slides li');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (index > slides.length - 1) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides[slideIndex].style.display = 'block';
}

function openTab(evt, tabName) {

    let tabcontents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";


    evt.currentTarget.classList.add("active");
}

function exibirHistoria(historia) {
    var areaHistoria = document.getElementById('areaHistoria');
    areaHistoria.innerHTML = historia;
}

function limparHistoria() {
    var areaHistoria = document.getElementById('areaHistoria');
    areaHistoria.innerHTML = '';
}


function slideTransitioning(n) {
    plusSlides(n);
    slideTimer = setTimeout(function() {
        slideTransitioning(1);
    }, 3000);
}

let slideIndex = 0;
slideTransitioning(1);

window.addEventListener('scroll', function() {
    const logoSlide = document.querySelector('.logo-slide');
    const slideInAt = window.scrollY;
    const logoHeight = logoSlide.offsetHeight;

    if (slideInAt > logoHeight) {
        logoSlide.classList.add('show');
        document.cookie = 'logoVisible=true; path=/';
    } else {
        logoSlide.classList.remove('show');
        document.cookie = 'logoVisible=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
});

window.addEventListener('load', function() {
    const logoVisible = document.cookie.split(';').some((item) => item.trim().startsWith('logoVisible='));
    const logoSlide = document.querySelector('.logo-slide');

    if (logoVisible) {
        logoSlide.classList.add('show');
    }
});


window.addEventListener('load', function() {
    const cookiesAceitos = document.cookie.includes('cookiesAceitos=true');
    const cookiesNegados = document.cookie.includes('cookiesNegados=true');
    const cookieBannerExibido = document.cookie.includes('cookieBannerExibido=true');

    if (cookiesAceitos) {
        
        ocultarBannerCookies();
    } else if (!cookiesNegados && !cookieBannerExibido) {
        
        exibirBannerCookies();
    }
});


window.addEventListener('load', function() {
    const cookieBannerEscolha = obterCookie('cookieBannerEscolha');

    if (cookieBannerEscolha === 'aceitos') {
        
        ocultarBannerCookies();
    } else if (cookieBannerEscolha === 'negados') {
        
        ocultarBannerCookies();
    } else {
        
        exibirBannerCookies();
    }
});


function aceitarCookies() {
    ocultarBannerCookies();
    salvarEscolhaCookies('aceitos');
    salvarPreferencias();
}


function negarCookies() {
    ocultarBannerCookies();
    salvarEscolhaCookies('negados');
    salvarPreferencias();
}


function salvarEscolhaCookies(escolha) {
    definirCookie('cookieBannerEscolha', escolha);
}


function exibirBannerCookies() {
    console.log('Exibindo banner de cookies');
    
    const cookieBanner = document.getElementById('cookieBanner');
    const exibicaoCookie = document.cookie.includes('cookieBannerExibido=true');
    
    if (!exibicaoCookie) {
        
        cookieBanner.style.display = 'block';
    }
}


function ocultarBannerCookies() {
    console.log('Ocultando banner de cookies');
    
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
    definirCookie('cookieBannerExibido', 'true');
}


function exibirModalCookies() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalCookies');
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
}


function fecharModalCookies() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalCookies');
    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
}


document.getElementById('botaoGerenciarCookies').addEventListener('click', exibirModalCookies);


document.getElementById('fecharModalCookies').addEventListener('click', fecharModalCookies);


function definirCookie(nome, valor) {
    document.cookie = `${nome}=${valor}; expires=${getExpirationDate()}; path=/`;
}


function obterCookie(nome) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim().split('='));
    const cookie = cookies.find(c => c[0] === nome);
    return cookie ? cookie[1] : null;
}


function getExpirationDate() {
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    return expirationDate.toUTCString();
}


document.getElementById('salvarPreferencias').addEventListener('click', function() {

    salvarPreferencias();


    fecharModalCookies();


    alert('Preferências salvas com sucesso!');
});


document.getElementById('aceitarTodosCookies').addEventListener('click', function() {

    document.getElementById('analyticsSwitch').checked = true;
    document.getElementById('functionalSwitch').checked = true;
    document.getElementById('advertisingSwitch').checked = true;


    salvarPreferencias();
});

function salvarPreferencias() {
    const analyticsPref = document.getElementById('analyticsSwitch').checked;
    const functionalPref = document.getElementById('functionalSwitch').checked;
    const advertisingPref = document.getElementById('advertisingSwitch').checked;


    definirCookie('analyticsPref', analyticsPref);
    definirCookie('functionalPref', functionalPref);
    definirCookie('advertisingPref', advertisingPref);
}


function aceitarCookies() {
    ocultarBannerCookies();


    document.getElementById('analyticsSwitch').checked = true;
    document.getElementById('functionalSwitch').checked = true;
    document.getElementById('advertisingSwitch').checked = true;
    salvarPreferencias();
}


function negarCookies() {
    ocultarBannerCookies();


    document.getElementById('analyticsSwitch').checked = false;
    document.getElementById('functionalSwitch').checked = false;
    document.getElementById('advertisingSwitch').checked = false;
    salvarPreferencias();
}


function aceitarTodosCookies() {

    document.getElementById('analyticsSwitch').checked = true;
    document.getElementById('functionalSwitch').checked = true;
    document.getElementById('advertisingSwitch').checked = true;


    salvarPreferencias();
}


document.getElementById('aceitarCookiesBanner').addEventListener('click', aceitarCookies);
document.getElementById('negarCookiesBanner').addEventListener('click', negarCookies);
document.getElementById('aceitarTodosCookies').addEventListener('click', aceitarTodosCookies);


function aplicarPreferenciasSalvas() {
    const analyticsPref = obterCookie('analyticsPref');
    const functionalPref = obterCookie('functionalPref');
    const advertisingPref = obterCookie('advertisingPref');


    if (analyticsPref !== null) {
        document.getElementById('analyticsSwitch').checked = analyticsPref === 'true';
    }
    if (functionalPref !== null) {
        document.getElementById('functionalSwitch').checked = functionalPref === 'true';
    }
    if (advertisingPref !== null) {
        document.getElementById('advertisingSwitch').checked = advertisingPref === 'true';
    }
}

function aplicarPreferencias() {
    const analyticsPref = document.getElementById('analyticsSwitch').checked;
    const functionalPref = document.getElementById('functionalSwitch').checked;
    const advertisingPref = document.getElementById('advertisingSwitch').checked;


    document.getElementById('analyticsSwitch').checked = analyticsPref;
    document.getElementById('functionalSwitch').checked = functionalPref;
    document.getElementById('advertisingSwitch').checked = advertisingPref;


    salvarPreferencias();
}


window.addEventListener('load', function() {

    aplicarPreferenciasSalvas();

});



function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

    
    document.querySelectorAll('.slides li a').forEach(link => {
        link.addEventListener('touchstart', function(event) {
            event.preventDefault();
            var url = this.getAttribute('href');
            window.location.href = url;
        });
    });
