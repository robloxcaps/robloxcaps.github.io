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
        { label: 'Packs',          href: '/Pages/Packs/',   icon: 'pack' },
        { label: 'Plugins',        href: '/Pages/Plugins/', icon: 'plugin' },
        { label: 'Submit Packs',   href: '/Pages/Submit/',  icon: 'submit' },
        { label: 'Special Thanks', href: '/Pages/Credits/', icon: 'credits' },
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
        { label: 'Packs',   href: '/Pages/Packs/',   icon: 'package' },
        { label: 'Plugins', href: '/Pages/Plugins/', icon: 'plugin' },
        { label: 'Submit',  href: '/Pages/Submit/',  icon: 'page_white_add' },
        { label: 'Credits', href: '/Pages/Credits/', icon: 'heart' },
    ],
    footerNote: '{year} {authors}. This site is not affiliated with ROBLOX in any way, shape or form.',

    notFound: {
        image:    '/img/404.png',
        message:  "Sorry! This page doesn't exist or you typed it in wrong.",
        btnLabel: 'Go Home',
        btnHref:  '/',
    },

    reportReasons: [
        'Inappropriate content',
        'Broken download link',
        'Copyright violation',
        'Spam',
        'Harassment',
        'Other',
    ],

    ui: {
        loading:    'Loading...',
        error:      'Error',
        retry:      'Retry',
        save:       'Save',
        saving:     'Saving...',
        saved:      'Saved!',
        cancel:     'Cancel',
        close:      'Close',
        delete:     'Delete',
        edit:       'Edit',
        approve:    'Approve',
        reject:     'Reject',
        dismiss:    'Dismiss',
        download:   'Download',
        upload:     'Upload',
        submit:     'Submit',
        goHome:     'Go Home',
        search:     'Search',
        noResults:  'No results found.',
        confirm:    'Are you sure?',

        pageTitles: {
            home:        'Home',
            packs:       'Packs',
            pack:        'Pack',
            plugins:     'Plugins',
            submit:      'Submit a Pack',
            login:       'Log In',
            signup:      'Sign Up',
            admin:       'Admin',
            profile:     'Profile',
            settings:    'Settings',
            credits:     'Credits',
            reset:       'Reset Password',
            notFound:    'Oops!',
        },

        admin: {
            heading:       'Admin Panel',
            accessDenied:  'Access Denied',
            noPermission:  "You don't have permission to view this page.",
            refresh:       'Refresh',
            tabs:          ['Dashboard', 'Submissions', 'Packs', 'Users', 'Comments', 'Categories', 'Reports', 'Activity Log'],
            pending:       'Pending',
            allSubmissions:'All Submissions',
            stats:         { users:'Users', pending:'Pending', packs:'Packs', submissions:'Submissions', comments:'Comments', reports:'Reports', banned:'Banned' },
            sectionTitles: ['Delete User', 'Change Username', 'Admin Access', 'Ban User', 'Delete Category'],
            noUsers:       'No users yet.',
            noSubs:        'No submissions yet.',
            noPacks:       'No packs yet.',
            noComments:    'No comments yet.',
            noReports:     'No reports found.',
            noActivity:    'No activity logged yet.',
            noPending:     'No pending submissions!',
            emptyPacks:    'No packs found.',
            emptySubs:     'No submissions found.',
            emptyComments: 'No comments found.',
            emptyReports:  'No reports found.',
            editPack:      'Edit Pack',
            labels:        { title:'Title', author:'Author', category:'Category', description:'Description', iconUrl:'Icon URL', downloadUrl:'Download URL', disableComments:'Disable Comments' },
            placeholders:  { searchPacks:'Search by title or author...', username:'Username', reason:'Reason (optional)', currentUser:'Current username', newUser:'New username', catName:'New category name', filterUser:'Filter by username...', searchComment:'Search by username or content...' },
            actionLabels:  {
                approved_submission: 'Approved submission',
                rejected_submission: 'Rejected submission',
                deleted_pack:        'Deleted pack',
                edited_pack:         'Edited pack',
                deleted_comment:     'Deleted comment',
                dismissed_report:    'Dismissed report',
                banned_user:         'Banned user',
                unbanned_user:       'Unbanned user',
                changed_username:    'Changed username',
                granted_admin:       'Granted admin',
                removed_admin:       'Removed admin',
                deleted_user:        'Deleted user',
                deleted_category:    'Deleted category',
            },
        },

        packs: {
            heading:       'Packs',
            loading:       'Loading packs...',
            error:         'Error loading packs.',
            searchPlace:   'Search packs...',
            categoryLabel: 'Category:',
            sortLabel:     'Sort:',
            sortOptions:   ['Newest First', 'Oldest First', 'A → Z', 'Z → A', 'Author A → Z', 'Author Z → A'],
            allOption:     'All',
            noResults:     'No packs match your search.',
            viewPage:      'View Page',
        },

        submit: {
            heading:        'Submit a Pack',
            loggedOutMsg:   'You need to be logged in to submit a pack.',
            bannedMsg:      'Your account has been banned and cannot submit packs.',
            guidelines:     'Submission Guidelines',
            whatNext:       'What Happens Next?',
            submitting:     'Submitting...',
            success:        'Pack submitted! We\'ll review it...',
            fillRequired:   'Please fill in all required fields.',
            labels:         { packName:'Pack Name', authorName:'Author Name', downloadUrl:'Download URL', iconUrl:'Icon URL', category:'Category', description:'Description' },
            placeholders:   { packName:'e.g. 2009 Roblox Pack', authorName:'e.g. Builderman', downloadUrl:'https://files.catbox.moe/...', iconUrl:'https://...', category:'e.g. Terrain, Props, Buildings...', description:'Describe your pack...' },
        },

        profile: {
            heading:      'Profile',
            notFound:     'User Not Found',
            notFoundMsg:  "This profile doesn't exist or may have been removed.",
            error:        'Something went wrong',
            errorMsg:     "Couldn't load this profile. Try again later.",
            labels:       { username:'Username', role:'Role', joined:'Joined', packs:'Packs' },
            submittedPacks:'Submitted Packs',
            subHistory:   'Submission History',
            noPacks:      'No approved packs submitted yet.',
            noSubs:       'No submissions yet.',
            roles:        { user:'User', banned:'Banned', admin:'Admin', moderator:'Moderator' },
        },

        settings: {
            heading:        'Settings',
            notFound:       'Not found',
            loginRequired:  'This page requires a logged-in account.',
            yourInfo:       'Your Info',
            avatar:         'Avatar',
            changePassword: 'Change Password',
            chooseImage:    'Choose Image',
            updatePassword: 'Update Password',
            newPass:        'New Password',
            confirmPass:    'Confirm Password',
            labels:         { email:'Email', username:'Username', role:'Role' },
        },

        login: {
            heading:   'Member Login',
            forgot:    'Forgot your password?',
            signIn:    'Sign In',
            notMember: 'Not a member? Sign Up',
            emailPh:   'you@gmail.com',
            passPh:    'Your password',
        },

        signup: {
            heading:    'Create an Account',
            signUp:     'Sign Up',
            haveAccount:'Already have an account? Log in here',
            usernamePh: 'e.g. cooluser123',
            emailPh:    'you@gmail.com',
            passPh:     'Min. 6 characters',
            confirmPh:  'Repeat your password',
        },

        reset: {
            heading:     'Reset Password',
            sendLink:    'Send Reset Link',
            backToLogin: 'Back to Login',
            setNewPass:  'Set New Password',
            updatePass:  'Update Password',
        },

        plugins: {
            heading:       'Plugins',
            loading:       'Loading plugins...',
            error:         'Error loading plugins.',
            searchPlace:   'Search plugins...',
            categoryLabel: 'Category:',
            sortLabel:     'Sort:',
            sortOptions:   ['Newest First', 'Oldest First', 'A → Z', 'Z → A', 'Author A → Z', 'Author Z → A'],
            details:       'Details',
            descModal:     'Plugin Description',
            noDesc:        'No description available.',
            noResults:     'No plugins match your search.',
        },

        comments: {
            heading:     'Comments',
            placeholder: 'Leave a comment...',
            post:        'Post Comment',
            disabled:    'Comments are disabled for this pack.',
            loginPrompt: 'Log in to leave a comment.',
            noComments:  'No comments yet.',
            errorLoad:   'Error loading comments.',
            posted:      'Comment posted!',
            posting:     'Posting...',
            minChars:    'Comment must be at least 2 characters.',
        },
    },

    discordWebhookUrl: '',  // set to your Discord webhook URL to auto-forward reports
};


// ============================================
//  ENGINE
// ============================================

const { createClient } = supabase;
const sb = createClient(SITE_CONFIG.supabaseUrl, SITE_CONFIG.supabaseKey);

// ---- ICONS ----
const NAV_ICONS = {
    pack:    'package',
    plugin:  'plugin',
    submit:  'page_white_add',
    credits: 'heart',
    packs:   'package',
    plugins: 'plugin',
    profile: 'user',
    settings:'wrench',
    admin:   'shield',
    home:    'house',
};

function icon(name) {
    return `<img class="nav-icon" src="/assets/img/icons/${name}.png" alt="">`;
}

// ---- HEADER ----
function buildHeader() {
    const header = document.getElementById('Header');
    if (!header) return;
    const path = window.location.pathname;

    const links = SITE_CONFIG.navLinks.map(link => {
        const active = path.startsWith(link.href);
        const ic = NAV_ICONS[link.icon] || 'bullet_go';
        return `<a class="MenuItem${active ? ' Active' : ''}" href="${link.href}">${icon(ic)} ${link.label}</a>`;
    }).join('');

    header.innerHTML = `
        <div id="Navigation">
            <a href="/" id="NavLogo">
                <img src="${SITE_CONFIG.logoImg}" alt="${SITE_CONFIG.siteName}" height="30">
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
            ${SITE_CONFIG.footerNavLinks.map(l => `<li><a href="${l.href}">${icon(l.icon || 'bullet_go')} ${l.label}</a></li>`).join('')}
            ${SITE_CONFIG.footerLinks.map(l => `<li><a href="${l.href}" target="_blank">${icon('comments')} ${l.label}</a></li>`).join('')}
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

// ---- REPORT MODAL ----
function openReportModal(type, id, title) {
    try { title = decodeURIComponent(title); } catch {}
    const existing = document.getElementById('ReportModal');
    if (existing) existing.remove();

    const reasons = SITE_CONFIG.reportReasons.map(r =>
        `<label style="display:block;font-size:11px;margin:3px 0;"><input type="radio" name="report_reason" value="${esc(r)}"> ${esc(r)}</label>`
    ).join('');

    const modal = document.createElement('div');
    modal.id = 'ReportModal';
    modal.innerHTML = `
        <div style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:3000;display:flex;align-items:center;justify-content:center;">
            <div style="background:#fff;border:2px solid var(--c-border);max-width:420px;width:90%;position:relative;">
                <div style="padding:10px 14px;border-bottom:1px solid var(--c-border);background:var(--c-cat-bg);display:flex;align-items:center;justify-content:space-between;">
                    <h3 style="margin:0;font-size:13px;font-weight:700;color:#334;">Report: ${esc(title)}</h3>
                    <span id="ReportClose" style="cursor:pointer;font-size:18px;color:#888;line-height:1;">&times;</span>
                </div>
                <div style="padding:14px;">
                    <p style="font-size:11px;color:#667;margin:0 0 10px;">Why are you reporting this ${type}?</p>
                    <div style="margin-bottom:10px;">${reasons}</div>
                    <textarea id="ReportDetails" placeholder="Additional details (optional)" style="width:100%;box-sizing:border-box;padding:6px 8px;font-size:11px;border:1px solid var(--c-border);font-family:var(--font);resize:vertical;min-height:50px;"></textarea>
                    <div id="ReportStatus" style="font-size:11px;margin-top:6px;"></div>
                    <div style="display:flex;gap:6px;margin-top:10px;">
                        <button id="ReportSubmit" style="flex:1;padding:5px 14px;font-size:11px;background:var(--c-green);color:#fff;border:1px solid var(--c-green-border);cursor:pointer;font-family:var(--font);">Submit Report</button>
                        <button id="ReportCancel" style="padding:5px 14px;font-size:11px;background:var(--c-btn);border:1px solid var(--c-btn-border);cursor:pointer;font-family:var(--font);">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const close = () => modal.remove();
    modal.querySelector('#ReportClose').onclick = close;
    modal.querySelector('#ReportCancel').onclick = close;
    modal.querySelector('div[style*="position:fixed"]').onclick = e => { if (e.target === e.currentTarget) close(); };

    modal.querySelector('#ReportSubmit').onclick = async function () {
        const btn = this;
        const selected = modal.querySelector('input[name="report_reason"]:checked');
        if (!selected) {
            modal.querySelector('#ReportStatus').textContent = 'Please select a reason.';
            modal.querySelector('#ReportStatus').style.color = '#cc3333';
            return;
        }
        const details = modal.querySelector('#ReportDetails').value.trim();
        btn.disabled = true;
        btn.textContent = 'Submitting...';

        const { data: { session } } = await sb.auth.getSession();
        if (!session) {
            modal.querySelector('#ReportStatus').textContent = 'You must be logged in to report.';
            modal.querySelector('#ReportStatus').style.color = '#cc3333';
            btn.disabled = false;
            btn.textContent = 'Submit Report';
            return;
        }

        const payload = {
            content_type: type,
            content_id: id,
            reason: selected.value,
            details: details || null,
            reported_by: session.user.id,
        };

        const { error } = await sb.from('reports').insert(payload);
        if (error) {
            modal.querySelector('#ReportStatus').textContent = 'Failed to submit report: ' + error.message;
            modal.querySelector('#ReportStatus').style.color = '#cc3333';
            btn.disabled = false;
            btn.textContent = 'Submit Report';
            return;
        }

        // Forward to Discord webhook if configured
        if (SITE_CONFIG.discordWebhookUrl) {
            try {
                const userResp = await sb.from('profiles').select('username').eq('id', session.user.id).maybeSingle();
                const username = userResp?.data?.username || 'Unknown';
                const embed = {
                    embeds: [{
                        title: `Report: ${title}`,
                        color: 0xcc3333,
                        fields: [
                            { name: 'Type', value: type, inline: true },
                            { name: 'ID', value: id, inline: true },
                            { name: 'Reason', value: selected.value, inline: true },
                            { name: 'Details', value: details || 'None' },
                            { name: 'Reported by', value: username },
                        ],
                        timestamp: new Date().toISOString(),
                    }],
                };
                await fetch(SITE_CONFIG.discordWebhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(embed) });
            } catch {}
        }

        modal.innerHTML = `
            <div style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:3000;display:flex;align-items:center;justify-content:center;">
                <div style="background:#fff;border:2px solid var(--c-border);max-width:380px;width:90%;padding:24px;text-align:center;">
                    <img src="/assets/img/icons/accept.png" width="32" height="32" alt="" style="display:inline-block;">
                    <h3 style="font-size:14px;margin:10px 0 4px;color:#334;">Report Submitted</h3>
                    <p style="font-size:11px;color:#667;margin:0 0 14px;">Thank you. Our team will review this report.</p>
                    <button id="ReportDone" style="padding:5px 20px;font-size:11px;background:var(--c-btn);border:1px solid var(--c-btn-border);cursor:pointer;font-family:var(--font);">Close</button>
                </div>
            </div>
        `;
        modal.querySelector('#ReportDone').onclick = () => modal.remove();
    };
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
                    <a href="/Pages/Login/">${SITE_CONFIG.home.loginLink}</a>
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
            <a class="nav-signup" href="/Pages/SignUp/">${icon('user_add')} Sign Up</a>
            <span class="nav-or">or</span>
            <a class="nav-login-btn" href="/Pages/Login/">${icon('key')} Login</a>
        `;
        return;
    }

    const { data: profile } = await sb
        .from('profiles')
        .select('username, is_admin, role, avatar_url')
        .eq('id', session.user.id)
        .maybeSingle();

    const username = profile?.username || session.user.email || 'User';
    const isAdmin  = profile?.is_admin === true;
    const userRole = profile?.role || null;
    const avatar   = profile?.avatar_url || null;
    window.isAdmin    = isAdmin;
    window.userRole   = userRole;

    const path = window.location.pathname;
    const onProfile = path.startsWith('/Pages/Profile/');
    const onSettings = path.startsWith('/Pages/Settings/');
    const showAdminLink = isAdmin || userRole === 'moderator';

    const avatarHtml = avatar
        ? `<img class="nav-avatar" src="${esc(avatar)}" alt="">`
        : `<span class="nav-avatar-letter">${esc(username.charAt(0).toUpperCase())}</span>`;

    area.innerHTML = `
        <a class="MenuItem${onProfile ? ' Active' : ''}" href="/Pages/Profile/?u=${encodeURIComponent(username)}">${avatarHtml} ${esc(username)}</a>
        <a class="MenuItem${onSettings ? ' Active' : ''}" href="/Pages/Settings/">${icon('wrench')} Settings</a>
        ${showAdminLink ? `<a class="MenuItem admin-link${path.startsWith('/Pages/Admin/') ? ' Active' : ''}" href="/Pages/Admin/">${icon('shield')} Admin Panel</a>` : ''}
        <a class="MenuItem" href="#" onclick="handleLogout(event)">${icon('door_out')} Log Out</a>
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

// ---- HELPERS ----
function esc(t) { if (!t) return ''; const d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
function sanitizeUrl(url) {
    if (!url) return '';
    try { const u = new URL(url); return (u.protocol === 'http:' || u.protocol === 'https:') ? url : ''; }
    catch { return ''; }
}

// ---- BOOT ----
document.addEventListener('DOMContentLoaded', () => {
    buildHeader();
    buildFooter();
    build404();
    buildHomeSplash();
    loadNavAccount();
});