<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Admin Panel — Chandru Govindaraj</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="admin.css"/>
</head>
<body>

<!-- Auth guard -->
<script>
if(sessionStorage.getItem("cg_admin_auth")!=="true" && localStorage.getItem("cg_admin_auth")!=="true"){
  window.location.href="login.html";
}
</script>

<div class="layout">

  <!-- SIDEBAR -->
  <aside class="sidebar" id="sidebar">
    <div class="sb-top">
      <div class="sb-logo">CG<span>.</span> <small>Admin</small></div>
      <button class="sb-close" id="sbClose">✕</button>
    </div>
    <nav class="sb-nav">
      <button class="sb-btn active" data-tab="profile">👤 Profile</button>
      <button class="sb-btn" data-tab="skills">⚡ Skills</button>
      <button class="sb-btn" data-tab="projects">🚀 Projects</button>
      <button class="sb-btn" data-tab="certs">📜 Certifications</button>
    </nav>
    <div class="sb-footer">
      <a href="../index.html" class="sb-link" target="_blank">↗ View Live Site</a>
      <button class="sb-link danger" id="logoutBtn">⎋ Logout</button>
      <button class="sb-link danger" id="resetBtn">↺ Reset to Defaults</button>
    </div>
  </aside>

  <!-- MAIN -->
  <main class="main">

    <!-- TOPBAR -->
    <div class="topbar">
      <button class="tb-menu" id="tbMenu">☰</button>
      <div class="tb-title" id="tbTitle">Profile</div>
      <div class="tb-right">
        <span class="saved-badge" id="savedBadge">✓ Saved</span>
        <button class="btn-save" onclick="saveAll()">Save Changes</button>
      </div>
    </div>

    <!-- ── PROFILE TAB ── -->
    <div class="tab active" id="tab-profile">
      <div class="tab-head">Profile Information</div>
      <div class="ac">
        <div class="fgrid">
          <div class="fg"><label>Full Name</label><input id="pName" type="text"/></div>
          <div class="fg"><label>Short Title</label><input id="pTitle" type="text"/></div>
          <div class="fg full"><label>Bio / Tagline</label><textarea id="pBio" rows="3"></textarea></div>
          <div class="fg"><label>Email</label><input id="pEmail" type="email"/></div>
          <div class="fg"><label>Phone</label><input id="pPhone" type="text"/></div>
          <div class="fg"><label>LinkedIn Username</label><input id="pLinkedin" type="text"/></div>
          <div class="fg"><label>Blog URL</label><input id="pBlog" type="url"/></div>
          <div class="fg"><label>Location</label><input id="pLocation" type="text"/></div>
          <div class="fg full"><label>Full Address</label><textarea id="pAddress" rows="2"></textarea></div>
        </div>
      </div>
      <div class="tab-head" style="margin-top:2rem">Change Admin Password</div>
      <div class="ac">
        <div class="fgrid">
          <div class="fg"><label>New Username</label><input id="newUser" type="text" placeholder="admin"/></div>
          <div class="fg"><label>New Password</label><input id="newPass" type="password" placeholder="••••••••"/></div>
          <div class="fg full"><button class="btn-save" onclick="changeCredentials()">Update Credentials</button></div>
        </div>
      </div>
    </div>

    <!-- ── SKILLS TAB ── -->
    <div class="tab" id="tab-skills">
      <div class="tab-head-row">
        <div class="tab-head">Skills</div>
        <button class="btn-add" onclick="addSkill()">+ Add Skill</button>
      </div>
      <div id="skillsList" class="item-list"></div>
    </div>

    <!-- ── PROJECTS TAB ── -->
    <div class="tab" id="tab-projects">
      <div class="tab-head-row">
        <div class="tab-head">Projects</div>
        <button class="btn-add" onclick="addProject()">+ Add Project</button>
      </div>
      <div id="projectsList" class="item-list"></div>
    </div>

    <!-- ── CERTS TAB ── -->
    <div class="tab" id="tab-certs">
      <div class="tab-head-row">
        <div class="tab-head">Certifications &amp; Events</div>
        <button class="btn-add" onclick="addCert()">+ Add Certification</button>
      </div>
      <div id="certsList" class="item-list"></div>
    </div>

  </main>
</div>

<div class="toast" id="toast"></div>

<script src="../js/data.js"></script>
<script src="admin.js"></script>
</body>
</html>
