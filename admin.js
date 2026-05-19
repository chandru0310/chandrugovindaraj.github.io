/* ─── ADMIN.JS ─── */

let data = getPortfolioData();

// ─── TABS ───
const tabBtns = document.querySelectorAll('.sidebar-item');
const tabSections = document.querySelectorAll('.admin-tab');
const topbarTitle = document.getElementById('topbarTitle');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.remove('active'));
    tabSections.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active');
    topbarTitle.textContent = btn.textContent.trim().replace(/^[^ ]+ /, '');
    closeSidebar();
  });
});

// ─── SIDEBAR MOBILE ───
const sidebar = document.getElementById('adminSidebar');
document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('sidebarClose').addEventListener('click', () => closeSidebar());
function closeSidebar() { sidebar.classList.remove('open'); }

// ─── TOAST ───
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ─── SAVE STATUS ───
function showSaved() {
  const s = document.getElementById('saveStatus');
  s.textContent = '✓ Saved!'; s.classList.add('visible');
  setTimeout(() => s.classList.remove('visible'), 2000);
}

// ─── LOAD PROFILE ───
function loadProfile() {
  const p = data.profile;
  document.getElementById('profileName').value = p.name || '';
  document.getElementById('profileTitle').value = p.title || '';
  document.getElementById('profileTagline').value = p.tagline || '';
  document.getElementById('profileEmail').value = p.email || '';
  document.getElementById('profilePhone').value = p.phone || '';
  document.getElementById('profileLinkedin').value = p.linkedin || '';
  document.getElementById('profileBlog').value = p.blog || '';
  document.getElementById('profileLocation').value = p.location || '';
  document.getElementById('profileAddress').value = p.address || '';
}

function collectProfile() {
  data.profile = {
    name: document.getElementById('profileName').value,
    title: document.getElementById('profileTitle').value,
    tagline: document.getElementById('profileTagline').value,
    email: document.getElementById('profileEmail').value,
    phone: document.getElementById('profilePhone').value,
    linkedin: document.getElementById('profileLinkedin').value,
    blog: document.getElementById('profileBlog').value,
    location: document.getElementById('profileLocation').value,
    address: document.getElementById('profileAddress').value,
  };
}

// ─── SKILLS ───
function renderSkillsList() {
  const list = document.getElementById('skillsList');
  list.innerHTML = data.skills.map((s, i) => `
    <div class="item-card" id="skill-card-${i}">
      <div class="item-card-header" onclick="toggleItem('skill-body-${i}')">
        <div class="item-card-emoji">${s.icon}</div>
        <div class="item-card-title">${s.name}</div>
        <div class="item-card-badge">${s.level} · ${s.percent}%</div>
        <div class="item-card-actions">
          <button class="item-btn delete" onclick="event.stopPropagation();deleteSkill(${i})">Delete</button>
        </div>
      </div>
      <div class="item-body collapsed" id="skill-body-${i}">
        <div class="form-grid">
          <div class="form-group">
            <label>Icon (emoji)</label>
            <input type="text" value="${s.icon}" onchange="updateSkill(${i},'icon',this.value)" />
          </div>
          <div class="form-group">
            <label>Skill Name</label>
            <input type="text" value="${s.name}" onchange="updateSkill(${i},'name',this.value)" />
          </div>
          <div class="form-group">
            <label>Level Label</label>
            <input type="text" value="${s.level}" onchange="updateSkill(${i},'level',this.value)" placeholder="e.g. Basic, Intermediate" />
          </div>
          <div class="form-group">
            <label>Proficiency % — <strong>${s.percent}%</strong></label>
            <input type="range" min="0" max="100" value="${s.percent}"
              oninput="updateSkill(${i},'percent',parseInt(this.value));this.previousElementSibling.querySelector('strong').textContent=this.value+'%'" />
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateSkill(i, key, val) { data.skills[i][key] = val; }
function deleteSkill(i) { if (confirm('Delete this skill?')) { data.skills.splice(i, 1); renderSkillsList(); } }
function addSkill() {
  data.skills.push({ id: Date.now(), icon: '⭐', name: 'New Skill', level: 'Beginner', percent: 50 });
  renderSkillsList();
  const cards = document.querySelectorAll('.item-card');
  const last = cards[cards.length - 1];
  last.scrollIntoView({ behavior: 'smooth' });
  toggleItem(`skill-body-${data.skills.length - 1}`);
}

// ─── PROJECTS ───
function renderProjectsList() {
  const list = document.getElementById('projectsList');
  list.innerHTML = data.projects.map((p, i) => `
    <div class="item-card" id="proj-card-${i}">
      <div class="item-card-header" onclick="toggleItem('proj-body-${i}')">
        <div class="item-card-emoji">${p.emoji}</div>
        <div class="item-card-title">${p.title}</div>
        <div class="item-card-badge">${p.tag.substring(0,20)}…</div>
        <div class="item-card-actions">
          <button class="item-btn delete" onclick="event.stopPropagation();deleteProject(${i})">Delete</button>
        </div>
      </div>
      <div class="item-body collapsed" id="proj-body-${i}">
        <div class="form-grid">
          <div class="form-group">
            <label>Emoji / Icon</label>
            <input type="text" value="${p.emoji}" onchange="updateProject(${i},'emoji',this.value)" />
          </div>
          <div class="form-group">
            <label>Tag / Category</label>
            <input type="text" value="${p.tag}" onchange="updateProject(${i},'tag',this.value)" />
          </div>
          <div class="form-group full">
            <label>Title</label>
            <input type="text" value="${p.title}" onchange="updateProject(${i},'title',this.value)" />
          </div>
          <div class="form-group full">
            <label>Description</label>
            <textarea rows="3" onchange="updateProject(${i},'desc',this.value)">${p.desc}</textarea>
          </div>
          <div class="form-group">
            <label>Blog / Live URL</label>
            <input type="url" value="${p.link}" onchange="updateProject(${i},'link',this.value)" placeholder="https://..." />
          </div>
          <div class="form-group">
            <label>GitHub URL</label>
            <input type="url" value="${p.github}" onchange="updateProject(${i},'github',this.value)" placeholder="https://github.com/..." />
          </div>
          <div class="form-group full">
            <label>Background Gradient CSS</label>
            <input type="text" value="${p.bgColor}" onchange="updateProject(${i},'bgColor',this.value)" placeholder="linear-gradient(135deg,#1a1a2e,#16213e)" />
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateProject(i, key, val) { data.projects[i][key] = val; }
function deleteProject(i) { if (confirm('Delete this project?')) { data.projects.splice(i, 1); renderProjectsList(); } }
function addProject() {
  data.projects.push({
    id: Date.now(), emoji: '🔧',
    bgColor: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tag: 'Project · 2026', title: 'New Project',
    desc: 'Describe your project here.',
    link: '', github: ''
  });
  renderProjectsList();
  toggleItem(`proj-body-${data.projects.length - 1}`);
}

// ─── CERTS ───
function renderCertsList() {
  const list = document.getElementById('certsList');
  list.innerHTML = data.certifications.map((c, i) => `
    <div class="item-card" id="cert-card-${i}">
      <div class="item-card-header" onclick="toggleItem('cert-body-${i}')">
        <div class="item-card-emoji">${c.icon}</div>
        <div class="item-card-title">${c.name}</div>
        <div class="item-card-badge">${c.year}</div>
        <div class="item-card-actions">
          <button class="item-btn delete" onclick="event.stopPropagation();deleteCert(${i})">Delete</button>
        </div>
      </div>
      <div class="item-body collapsed" id="cert-body-${i}">
        <div class="form-grid">
          <div class="form-group">
            <label>Icon (emoji)</label>
            <input type="text" value="${c.icon}" onchange="updateCert(${i},'icon',this.value)" />
          </div>
          <div class="form-group">
            <label>Year</label>
            <input type="text" value="${c.year}" onchange="updateCert(${i},'year',this.value)" />
          </div>
          <div class="form-group full">
            <label>Certificate / Event Name</label>
            <input type="text" value="${c.name}" onchange="updateCert(${i},'name',this.value)" />
          </div>
          <div class="form-group full">
            <label>Issuing Body / Description</label>
            <input type="text" value="${c.body}" onchange="updateCert(${i},'body',this.value)" />
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function updateCert(i, key, val) { data.certifications[i][key] = val; }
function deleteCert(i) { if (confirm('Delete this cert?')) { data.certifications.splice(i, 1); renderCertsList(); } }
function addCert() {
  data.certifications.push({ id: Date.now(), icon: '📜', name: 'New Certification', body: 'Issuing organization', year: new Date().getFullYear().toString() });
  renderCertsList();
  toggleItem(`cert-body-${data.certifications.length - 1}`);
}

// ─── TOGGLE EXPAND ───
function toggleItem(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('collapsed');
}

// ─── SAVE ALL ───
function saveAll() {
  collectProfile();
  savePortfolioData(data);
  showSaved();
  showToast('✓ Portfolio saved! Changes are live.');
}

// ─── RESET ───
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Reset ALL data to defaults? This cannot be undone.')) {
    data = resetPortfolioData();
    window.PORTFOLIO = data;
    loadProfile();
    renderSkillsList();
    renderProjectsList();
    renderCertsList();
    showToast('Portfolio reset to defaults.');
  }
});

// ─── KEYBOARD SHORTCUT Ctrl+S ───
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); saveAll(); }
});

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  loadProfile();
  renderSkillsList();
  renderProjectsList();
  renderCertsList();
});
