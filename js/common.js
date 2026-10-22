/* =========================================================
   心動時分 HeartbeatMomen — 全站共用腳本
   提供：導覽列、頁尾、Cookie 同意橫幅、k2() 聊天事件、手機選單
   ========================================================= */

// 全站共用連結
var NAV_LINKS = [
    { href: 'index.html', label: '首頁' },
    { href: 'features.html', label: '創新速配' },
    { href: 'process.html', label: '牽手流程' },
    { href: 'success-cases.html', label: '成功案例' },
    { href: 'faq.html', label: '常見問題' },
    { href: 'about.html', label: '關於我們' },
    { href: 'contact.html', label: '聯繫我們' }
];

// 真實聯絡資訊
var CONTACT = {
    email: 'help@heartbeatmoment.cc',
    phone: '00852-3192037',
    address: '香港灣仔區日善街111號',
    zip: '999077'
};

// 目前頁面檔名
function currentPage() {
    var path = window.location.pathname;
    var name = path.substring(path.lastIndexOf('/') + 1);
    return name || 'index.html';
}

// 產生導覽列 HTML
function navHTML() {
    var cur = currentPage();
    var links = NAV_LINKS.map(function (l) {
        var active = (l.href === cur) ? ' class="active"' : '';
        return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
    }).join('');
    return '' +
        '<a class="brand" href="index.html" aria-label="心動時分 首頁">' +
        '  <div class="brand-mark"><i class="fa-solid fa-heart"></i></div>' +
        '  <div><div class="brand-name">心動時分</div><div class="brand-sub">HeartbeatMomen</div></div>' +
        '</a>' +
        '<nav class="nav-links" aria-label="主要導覽">' + links + '</nav>' +
        '<button class="btn btn-primary btn-sm nav-cta" onclick="k2()"><span>免費配對</span><i class="fa-solid fa-arrow-right"></i></button>' +
        '<button class="nav-toggle" id="navToggle" aria-label="開啟選單" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>';
}

// 產生手機抽屜選單 HTML
function drawerHTML() {
    var cur = currentPage();
    var links = NAV_LINKS.map(function (l) {
        var active = (l.href === cur) ? ' class="active"' : '';
        return '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
    }).join('');
    return '<div class="nav-drawer" id="navDrawer">' + links +
        '<button class="btn btn-primary drawer-cta" onclick="k2()"><i class="fa-solid fa-heart"></i><span>免費配對</span></button>' +
        '</div>';
}

// 產生頁尾 HTML
function footerHTML() {
    return '' +
        '<div class="wrap footer-inner">' +
        '  <div class="footer-top">' +
        '    <div class="footer-brand">' +
        '      <div class="brand">' +
        '        <div class="brand-mark"><i class="fa-solid fa-heart"></i></div>' +
        '        <div><div class="brand-name">心動時分</div><div class="brand-sub">HeartbeatMomen</div></div>' +
        '      </div>' +
        '      <p>以真誠為本、以信任為橋，為每一位尋愛之人牽起幸福的緣分。我們提供經實名認證的婚戀配對服務，重視您的隱私與安全。</p>' +
        '      <div class="footer-contact">' +
        '        <div class="fc-item"><i class="fa-solid fa-envelope"></i><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></div>' +
        '        <div class="fc-item"><i class="fa-solid fa-phone"></i><a href="tel:' + CONTACT.phone.replace(/-/g, '') + '">' + CONTACT.phone + '</a></div>' +
        '        <div class="fc-item"><i class="fa-solid fa-location-dot"></i><span>' + CONTACT.address + '（郵編 ' + CONTACT.zip + '）</span></div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="footer-cols">' +
        '      <div class="footer-col"><h4>探索</h4>' +
        '        <a href="features.html">創新速配</a>' +
        '        <a href="process.html">牽手流程</a>' +
        '        <a href="success-cases.html">成功案例</a>' +
        '        <a href="faq.html">常見問題</a>' +
        '      </div>' +
        '      <div class="footer-col"><h4>關於</h4>' +
        '        <a href="about.html">關於我們</a>' +
        '        <a href="contact.html">聯繫我們</a>' +
        '      </div>' +
        '      <div class="footer-col"><h4>法律</h4>' +
        '        <a href="terms.html">用戶條款</a>' +
        '        <a href="privacy.html">隱私政策</a>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="footer-bottom">' +
        '    <div class="fb-brand">2026 心動時分（HeartbeatMomen）婚戀配對服務平台 · 版權所有</div>' +
        '    <div>聲明：本平台嚴厲打擊任何形式之婚戀詐欺、虛假宣傳及不法行為，所有會員均須配合實名登記，並遵守相關法律法規。</div>' +
        '  </div>' +
        '</div>';
}

// 產生 Cookie 同意橫幅 HTML（桌面顯示於左下角）
function cookieHTML() {
    return '' +
        '<div class="cookie-banner" id="cookieBanner" role="dialog" aria-label="Cookie 隱私提示" aria-hidden="true">' +
        '  <div class="cookie-head"><i class="fa-solid fa-cookie-bite"></i><h3>我們重視您的隱私</h3></div>' +
        '  <p>本網站使用 Cookie 及類似技術，以提升瀏覽體驗、分析流量並提供個人化內容。繼續使用即表示您同意我們的 <a href="privacy.html">隱私政策</a> 與 <a href="terms.html">用戶條款</a>。</p>' +
        '  <div class="cookie-actions">' +
        '    <button class="btn btn-ghost" id="cookieDecline">拒絕</button>' +
        '    <button class="btn btn-primary" id="cookieAccept">全部接受</button>' +
        '  </div>' +
        '</div>';
}

// k2() 聊天開啟事件（全站所有行動呼籲按鈕統一調用）
function k2() {
    if (typeof ssq !== 'undefined' && typeof ssq.push === 'function') {
        ssq.push('chatOpen', function (result) {
            console.log('chatOpen 状态：', result.status);
        });
    } else {
        console.warn('ssq 尚未載入，無法開啟聊天');
    }
}

// 綁定手機選單
function bindNavToggle() {
    var toggle = document.getElementById('navToggle');
    var drawer = document.getElementById('navDrawer');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', function () {
        var open = drawer.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
}

// Cookie 同意邏輯（localStorage，失敗不影響頁面）
function initCookie() {
    var banner = document.getElementById('cookieBanner');
    if (!banner) return;
    var KEY = 'hb_cookie_consent';
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
    if (saved === 'accepted' || saved === 'declined') return;

    banner.classList.add('show');
    banner.setAttribute('aria-hidden', 'false');

    function decide(val) {
        try { localStorage.setItem(KEY, val); } catch (e) { /* ignore */ }
        banner.classList.remove('show');
        banner.setAttribute('aria-hidden', 'true');
    }
    var accept = document.getElementById('cookieAccept');
    var decline = document.getElementById('cookieDecline');
    if (accept) accept.addEventListener('click', function () { decide('accepted'); });
    if (decline) decline.addEventListener('click', function () { decide('declined'); });
}

// 滾動進場動畫（二級頁面）
function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('visible'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(function (el) { observer.observe(el); });
}

// 初始化
function initCommon() {
    var header = document.getElementById('site-header');
    if (header) header.innerHTML = navHTML();
    var drawerHost = document.getElementById('site-drawer');
    if (drawerHost) drawerHost.innerHTML = drawerHTML();
    var footer = document.getElementById('site-footer');
    if (footer) footer.innerHTML = footerHTML();
    var cookieHost = document.getElementById('site-cookie');
    if (cookieHost) cookieHost.innerHTML = cookieHTML();

    bindNavToggle();
    initCookie();
    initReveal();
}

document.addEventListener('DOMContentLoaded', initCommon);
