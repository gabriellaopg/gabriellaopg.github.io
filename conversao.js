// Rótulo da ação de conversão do Google Ads (formato AW-18455720303/xxxxxxxx). Vazio = só mede visitas.
var CONVERSAO_ROTULO = 'AW-18455720303/3qxZCI7RorAdEO_ir-BE';

// Onde na página o visitante tocou, para o Analytics mostrar qual botão funciona.
function localDoClique(el) {
    if (el.closest('nav')) return 'menu';
    if (el.closest('footer')) return 'rodape';
    if (el.closest('.contact-section')) return 'contato';
    return 'texto';
}

document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me"], a[href^="tel:"]');
    if (!a || typeof gtag !== 'function') return;

    gtag('event', 'clique_contato', {
        tipo: a.href.indexOf('tel:') === 0 ? 'telefone' : 'whatsapp',
        local: localDoClique(a),
        pagina: location.pathname
    });

    if (CONVERSAO_ROTULO) gtag('event', 'conversion', { send_to: CONVERSAO_ROTULO });
});
