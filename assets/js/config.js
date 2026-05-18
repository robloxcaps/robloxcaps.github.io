// ============================================
//  RCAP MASTER CONFIG
//  Edit here, updates everywhere instantly.
//  Colors/fonts → edit style.css instead.
// ============================================

const SITE_CONFIG = {

    siteName:    'CAP Central',
    year:        '2026',
    authors:     'OGMelodii & Jakyro',

    supabaseUrl: 'https://itirtrahnteyxaxxhitw.supabase.co',
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0aXJ0cmFobnRleXhheHhoaXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2Nzc5NzcsImV4cCI6MjA5MTI1Mzk3N30.KKOsjH6qzv9UsXG5MSFI6DI8oT755I44trWzFZr9SlM',

    logoImg:       '/assets/img/Logos/RBLXCapsMiniLogo.png',
    splashLogoImg: '/assets/img/Logos/Logo.png',

    navLinks: [
        { label: 'Packs',          href: '/Pages/Packs/'   },
        { label: 'Plugins',        href: '/Pages/Plugins/' },
        { label: 'Submit Packs',   href: '/Pages/Submit/'  },
        { label: 'Special Thanks', href: '/Pages/Credits/' },
    ],

    home: {
        slogan:      '"The toolbox roblox studio uses sucks! we are superior"',
        blurbText:   'CAPC (Classic Asset Packs Central) is a place to host your own packs for others to use for free without pay and install other peoples packs. CAPC aims to provide a library of roblox packs which can be used for Retro Roblox games and etc.',
        signupTitle: 'Sign up and start having fun!',
        usernamePh:  'Username (3-20 characters)',
        emailPh:     'Email',
        passwordPh:  'Password (min 6 characters)',
        signupBtn:   'Sign Up',
        loginLink:   'Already have an account? Log in',
        attribution: '',
    },

    footerLinks: [
        { label: 'Discord', href: 'https://discord.gg/wqvWd2zeMV' },
    ],
    footerNavLinks: [
        { label: 'Packs',   href: '/Pages/Packs/'   },
        { label: 'Plugins', href: '/Pages/Plugins/' },
        { label: 'Submit',  href: '/Pages/Submit/'  },
        { label: 'Credits', href: '/Pages/Credits/' },
    ],
    footerNote: '{year} {authors}. This site is not affiliated with ROBLOX in any way, shape or form.',

    notFound: {
        image:    '/img/404.png',
        message:  "Sorry! This page doesn't exist or you typed it in wrong.",
        btnLabel: 'Go Home',
        btnHref:  '/',
    },
};


// ============================================
//  ENGINE
// ============================================

const { createClient } = supabase;
const sb = createClient(SITE_CONFIG.supabaseUrl, SITE_CONFIG.supabaseKey);

// ---- HEADER ----
function buildHeader() {
    const header = document.getElementById('Header');
    if (!header) return;
    const path = window.location.pathname;

    const links = SITE_CONFIG.navLinks.map(link => {
        const active = path.startsWith(link.href);
        return `<a class="MenuItem${active ? ' Active' : ''}" href="${link.href}">${link.label}</a>`;
    }).join('');

    header.innerHTML = `
        <div id="Navigation">
            <a href="/" id="NavLogo">
                <img src="${SITE_CONFIG.logoImg}" alt="${SITE_CONFIG.siteName}" height="28">
            </a>
            ${links}
            <span id="NavAccountArea"></span>
        </div>
    `;
}

// ---- FOOTER ----
function buildFooter() {
    const footer = document.getElementById('Footer');
    if (!footer) return;

    const note = SITE_CONFIG.footerNote
        .replace('{year}', SITE_CONFIG.year)
        .replace('{authors}', SITE_CONFIG.authors);

    footer.innerHTML = `
        <ul>
            ${SITE_CONFIG.footerNavLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
            ${SITE_CONFIG.footerLinks.map(l => `<li><a href="${l.href}" target="_blank">${l.label}</a></li>`).join('')}
        </ul>
        <hr>
        <p class="Legalese">${note}</p>
    `;
}

// ---- 404 ----
function build404() {
    const el = document.getElementById('NotFound');
    if (!el) return;
    const cfg = SITE_CONFIG.notFound;

    el.innerHTML = `
        ${cfg.image ? `<img src="${cfg.image}" style="display:block;margin:0 auto 20px;max-width:300px;" alt="404">` : ''}
        <p style="font-size:18px;font-weight:700;margin-bottom:14px;">${cfg.message}</p>
        <a href="${cfg.btnHref}" class="NoticeBtn">${cfg.btnLabel}</a>
    `;
}

// ---- HOME SPLASH ----
function buildHomeSplash() {
    const splash = document.getElementById('SplashSection');
    if (!splash) return;

    splash.innerHTML = `
        <div id="SplashLeft">
            <img id="SplashLogo" src="${SITE_CONFIG.splashLogoImg}" alt="${SITE_CONFIG.siteName}">
            <div id="SplashBlurb">
                <h2>${SITE_CONFIG.home.slogan}</h2>
                <p>${SITE_CONFIG.home.blurbText}</p>
            </div>
            ${SITE_CONFIG.home.attribution ? `<p class="attribution">${SITE_CONFIG.home.attribution}</p>` : ''}
        </div>
        <div id="SignInArea">
            <div id="SignupBox">
                <div class="box-header"><h3>${SITE_CONFIG.home.signupTitle}</h3></div>
                <div class="box-body">
                    <div class="form-group">
                        <label>Username</label>
                        <input id="hw_username" type="text" placeholder="${SITE_CONFIG.home.usernamePh}" maxlength="24" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input id="hw_email" type="email" placeholder="${SITE_CONFIG.home.emailPh}" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input id="hw_password" type="password" placeholder="${SITE_CONFIG.home.passwordPh}">
                    </div>
                    <button onclick="handleHomeSignup()">${SITE_CONFIG.home.signupBtn}</button>
                    <div id="hw_status"></div>
                </div>
                <div class="box-footer">
                    <a href="/Login/">${SITE_CONFIG.home.loginLink}</a>
                </div>
            </div>
        </div>
    `;
}

// ---- NAV ACCOUNT ----
async function loadNavAccount() {
    const area = document.getElementById('NavAccountArea');
    if (!area) return;

    const { data: { session } } = await sb.auth.getSession();

    if (!session) {
        area.innerHTML = `
            <a class="nav-signup" href="/Signup/">Sign Up</a>
            <span class="nav-or">or</span>
            <a class="nav-login-btn" href="/Login/">Login</a>
        `;
        return;
    }

    const { data: profile } = await sb
        .from('profiles')
        .select('username, is_admin')
        .eq('id', session.user.id)
        .maybeSingle();

    const username = profile?.username || session.user.email || 'User';
    const isAdmin  = profile?.is_admin === true;
    window.isAdmin = isAdmin; // expose for other pages

    area.innerHTML = `
        <a class="MenuItem" href="/Pages/Profile/?u=${encodeURIComponent(username)}">${username}</a>
        ${isAdmin ? `<a class="MenuItem admin-link" href="/Pages/Admin/">Admin Panel</a>` : ''}
        <a class="MenuItem" href="#" onclick="handleLogout(event)">Log Out</a>
    `;
}

// ---- AUTH ----
async function handleLogout(e) {
    e.preventDefault();
    await sb.auth.signOut();
    window.location.reload();
}

async function handleHomeSignup() {
    const username = document.getElementById('hw_username')?.value.trim();
    const email    = document.getElementById('hw_email')?.value.trim();
    const password = document.getElementById('hw_password')?.value;
    const status   = document.getElementById('hw_status');
    if (!status) return;

    const set = (msg, ok) => {
        status.textContent = msg;
        status.className   = ok ? 'success' : 'error';
    };

    if (!username || !email || !password) return set('Please fill in all fields.', false);
    if (!/^[a-zA-Z0-9_]{3,24}$/.test(username)) return set('Invalid username format.', false);
    if (password.length < 6) return set('Password must be at least 6 characters.', false);

    set('Checking username...', true);
    const { data: existing } = await sb.from('profiles').select('username').eq('username', username).maybeSingle();
    if (existing) return set('That username is already taken.', false);

    set('Creating account...', true);
    const { data: authData, error: authErr } = await sb.auth.signUp({
        email, password,
        options: { data: { username } }
    });
    if (authErr) return set(authErr.message, false);

    const userId = authData.user?.id;
    if (!userId) return set('Signup failed. Please try again.', false);

    const { error: profileErr } = await sb.from('profiles').insert({ id: userId, username });
    if (profileErr) return set('Profile setup failed: ' + profileErr.message, false);

    set('Account created! You can now log in.', true);

    document.getElementById('hw_username').value = '';
    document.getElementById('hw_email').value = '';
    document.getElementById('hw_password').value = '';
}

// ---- BOOT ----
document.addEventListener('DOMContentLoaded', () => {
    buildHeader();
    buildFooter();
    build404();
    buildHomeSplash();
    loadNavAccount();
});