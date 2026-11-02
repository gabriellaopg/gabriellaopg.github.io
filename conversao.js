// Rótulo da ação de conversão do Google Ads (formato AW-18455720303/xxxxxxxx). Vazio = só mede pageview.
var CONVERSAO_ROTULO = 'AW-18455720303/3qxZCI7RorAdEO_ir-BE';

document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me"], a[href^="tel:"]');
    if (!a || !CONVERSAO_ROTULO || typeof gtag !== 'function') return;
    gtag('event', 'conversion', { send_to: CONVERSAO_ROTULO });
});
