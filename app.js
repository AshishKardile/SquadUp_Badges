/* ==========================================================================
   TRAINER COLLECTION - BADGES & ACHIEVEMENTS COMPONENT ENGINE
   ========================================================================== */

// --- DATA DEFINITIONS ---
const BADGES_DATA = [
  {
    id: 'badge_1',
    batch: 'BATCH 01',
    title: 'Thunder Badge',
    req: 'Awarded on successful trainer account login',
    image: 'assets/badges/B1.png',
    unlocked: true, // Batch 01 unlocked by default on login!
    element: 'Lightning',
    unlockedAt: 'Default Unlocked'
  },
  {
    id: 'badge_2',
    batch: 'BATCH 02',
    title: 'Flame Badge',
    req: 'Maintain 7-Day Workshop Streak',
    image: 'assets/badges/B2.png',
    unlocked: false,
    element: 'Fire',
    unlockedAt: null
  },
  {
    id: 'badge_3',
    batch: 'BATCH 03',
    title: 'Leaf Badge',
    req: 'Complete 10 Quests',
    image: 'assets/badges/B3.png',
    unlocked: false,
    element: 'Nature',
    unlockedAt: null
  },
  {
    id: 'badge_4',
    batch: 'BATCH 04',
    title: 'Mind Badge',
    req: 'Submit Creative Project',
    image: 'assets/badges/B4.png',
    unlocked: false,
    element: 'Idea',
    unlockedAt: null
  },
  {
    id: 'badge_5',
    batch: 'BATCH 05',
    title: 'Phantom Badge',
    req: 'Defeat Boss Challenge',
    image: 'assets/badges/B5.png',
    unlocked: false,
    element: 'Ghost',
    unlockedAt: null
  },
  {
    id: 'badge_6',
    batch: 'BATCH 06',
    title: 'Dragon Badge',
    req: 'Reach Top 5 Squad Leaderboard',
    image: 'assets/badges/B6.png',
    unlocked: false,
    element: 'Dragon',
    unlockedAt: null
  }
];

const TROPHIES_DATA = [
  {
    id: 'trophy_1',
    title: 'FIRST STEP',
    sub: 'FIRST EGG',
    req: 'Awarded for attending the first workshop achievement award',
    image: 'assets/trophies/First_Step_1.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_2',
    title: 'CONSISTENCY',
    sub: '7-DAY STREAK',
    req: 'Given for excellent attendance throughout the workshop',
    image: 'assets/trophies/Consistency Champion_2.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_3',
    title: 'QUEST MASTER',
    sub: 'QUEST MASTERY',
    req: 'Given for completing a large number of quests',
    image: 'assets/trophies/Quest_Mastery_3.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_4',
    title: 'STRATEGIST',
    sub: 'CORE SKILLS',
    req: 'Master 3 core tech & strategy skills',
    image: 'assets/trophies/Skill_Mastery_4.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_5',
    title: 'TEAM PLAYER',
    sub: 'TEAMWORK',
    req: 'Help and support squad team members',
    image: 'assets/trophies/Team_Player_5.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_6',
    title: 'CREATIVE',
    sub: 'DESIGN WORK',
    req: 'Given for best creative and project design work',
    image: 'assets/trophies/Creative_trainer_6.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_7',
    title: 'TECH TRAINER',
    sub: 'CODING QUEST',
    req: 'Solving complex tech & coding challenges',
    image: 'assets/trophies/Tech_trainer_7.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_8',
    title: 'CHALLENGER',
    sub: 'BOSS CRUSHER',
    req: 'Awarded for completing difficult boss challenges',
    image: 'assets/trophies/Challange crusher_8.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_9',
    title: 'RISING STAR',
    sub: 'IMPROVEMENT',
    req: 'Given for most noticeable performance improvement',
    image: 'assets/trophies/Rising_star_9.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_10',
    title: 'LEGEND',
    sub: 'MASTER TRAINER',
    req: 'Given for completing the entire 6-month journey',
    image: 'assets/trophies/Master_trainer_10.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_11',
    title: 'PROJECT LEAD',
    sub: 'TOP PERFORMER',
    req: 'Rank #1 in squad monthly performance leaderboard',
    image: 'assets/trophies/Top_Performer_11.png',
    unlocked: false,
    unlockedAt: null
  },
  {
    id: 'trophy_12',
    title: 'MENTOR',
    sub: 'COMMUNITY HERO',
    req: 'Given for helping and supporting other students',
    image: 'assets/trophies/Community_helper_12.png',
    unlocked: false,
    unlockedAt: null
  }
];

// State Manager
let state = {
  badges: BADGES_DATA,
  trophies: TROPHIES_DATA
};

// --- RETRO POKEMON BGM CHIPTUNE SYNTHESIZER ---
let audioCtx = null;
let isMusicPlaying = false;
let bgmInterval = null;

const BGM_MELODY = [
  { note: 261.63, duration: 0.25 }, // C4
  { note: 329.63, duration: 0.25 }, // E4
  { note: 392.00, duration: 0.25 }, // G4
  { note: 523.25, duration: 0.5 },  // C5
  { note: 440.00, duration: 0.25 }, // A4
  { note: 392.00, duration: 0.5 },  // G4
  { note: 329.63, duration: 0.25 }, // E4
  { note: 261.63, duration: 0.5 },  // C4
  { note: 293.66, duration: 0.25 }, // D4
  { note: 349.23, duration: 0.25 }, // F4
  { note: 440.00, duration: 0.25 }, // A4
  { note: 493.88, duration: 0.5 },  // B4
  { note: 523.25, duration: 0.75 }  // C5
];

function toggleBGM() {
  const toggleBtn = document.getElementById('toggleMusicBtn');
  if (isMusicPlaying) {
    stopBGM();
    toggleBtn.textContent = '🎵 BGM: OFF';
    toggleBtn.classList.remove('playing');
  } else {
    startBGM();
    toggleBtn.textContent = '🔊 BGM: ON';
    toggleBtn.classList.add('playing');
  }
}

function startBGM() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    isMusicPlaying = true;
    let step = 0;

    bgmInterval = setInterval(() => {
      if (!isMusicPlaying) return;
      const current = BGM_MELODY[step % BGM_MELODY.length];
      playChiptuneNote(current.note, current.duration);
      step++;
    }, 350);
  } catch(e) {
    console.log('Audio Context error');
  }
}

function stopBGM() {
  isMusicPlaying = false;
  if (bgmInterval) clearInterval(bgmInterval);
}

function playChiptuneNote(freq, duration) {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'square';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

// --- UNLOCK FANFARE AUDIO ---
function playUnlockSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);
      
      gain.gain.setValueAtTime(0.3, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.3);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.3);
    });
  } catch(e) {
    console.log('Web Audio API disabled');
  }
}

// --- DOM ELEMENTS ---
const gymBadgesGrid = document.getElementById('gymBadgesGrid');
const trophiesGrid = document.getElementById('trophiesGrid');
const earnedCount = document.getElementById('earnedCount');
const headerBadgeImg = document.getElementById('headerBadgeImg');

const detailModal = document.getElementById('detailModal');
const closeDetailModal = document.getElementById('closeDetailModal');
const modalItemImg = document.getElementById('modalItemImg');
const modalItemTitle = document.getElementById('modalItemTitle');
const modalItemCategory = document.getElementById('modalItemCategory');
const modalItemDesc = document.getElementById('modalItemDesc');
const modalRequirementText = document.getElementById('modalRequirementText');
const modalUnlockDate = document.getElementById('modalUnlockDate');
const modalStatusPill = document.getElementById('modalStatusPill');
const modalRarityBadge = document.getElementById('modalRarityBadge');
const modalActionBtn = document.getElementById('modalActionBtn');

const demoPanel = document.getElementById('demoPanel');
const toggleDemoBtn = document.getElementById('toggleDemoBtn');
const closeDemoBtn = document.getElementById('closeDemoBtn');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');
const toastContainer = document.getElementById('toastContainer');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderBadges();
  renderTrophies();
  updateProgressBars();
  setupEventListeners();
  initConfetti();
});

// --- RENDER FUNCTIONS ---
function renderBadges() {
  gymBadgesGrid.innerHTML = '';
  
  state.badges.forEach((badge) => {
    const card = document.createElement('div');
    card.className = `badge-card ${badge.unlocked ? 'unlocked' : 'locked'}`;
    card.setAttribute('data-id', badge.id);
    
    card.innerHTML = `
      <div class="badge-frame">
        <img src="${badge.image}" alt="${badge.title}" class="badge-img" />
      </div>
      <div class="badge-ribbon">${badge.batch}</div>
      <div class="status-badge-icon ${badge.unlocked ? 'checkmark' : 'lock'}">
        ${badge.unlocked ? '✓' : '🔒'}
      </div>
    `;
    
    card.addEventListener('click', () => openItemDetail(badge, 'Gym Badge'));
    gymBadgesGrid.appendChild(card);
  });
}

function renderTrophies() {
  trophiesGrid.innerHTML = '';
  
  state.trophies.forEach((trophy) => {
    const card = document.createElement('div');
    card.className = `trophy-card ${trophy.unlocked ? 'unlocked' : 'locked'}`;
    card.setAttribute('data-id', trophy.id);
    
    card.innerHTML = `
      <div class="trophy-img-box">
        <img src="${trophy.image}" alt="${trophy.title}" class="trophy-img" />
        <div class="trophy-status-badge ${trophy.unlocked ? 'checkmark' : 'lock'}">
          ${trophy.unlocked ? '✓' : '🔒'}
        </div>
      </div>
      <div class="trophy-title-tag">${trophy.title}</div>
      <div class="trophy-sub-tag">${trophy.sub}</div>
    `;
    
    card.addEventListener('click', () => openItemDetail(trophy, 'Achievement Trophy'));
    trophiesGrid.appendChild(card);
  });
}

function updateProgressBars() {
  const unlockedBadges = state.badges.filter(b => b.unlocked).length;
  earnedCount.textContent = unlockedBadges;
  
  for (let i = 0; i < 6; i++) {
    const seg = document.getElementById(`segBar${i}`);
    if (seg) {
      if (i < unlockedBadges) {
        seg.classList.add('active');
      } else {
        seg.classList.remove('active');
      }
    }
  }

  if (unlockedBadges > 0) {
    headerBadgeImg.classList.remove('locked-filter');
    const activeUnlocked = state.badges.find(b => b.unlocked);
    if (activeUnlocked) headerBadgeImg.src = activeUnlocked.image;
  } else {
    headerBadgeImg.classList.add('locked-filter');
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  closeDetailModal.addEventListener('click', () => detailModal.classList.remove('active'));
  modalActionBtn.addEventListener('click', () => detailModal.classList.remove('active'));

  toggleDemoBtn.addEventListener('click', () => demoPanel.classList.toggle('open'));
  closeDemoBtn.addEventListener('click', () => demoPanel.classList.remove('open'));
  toggleMusicBtn.addEventListener('click', toggleBGM);

  // Simulator Buttons
  document.querySelectorAll('.demo-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = e.currentTarget.getAttribute('data-action');
      handleDemoAction(action);
    });
  });
}

// --- CORE UNLOCK & LOCK FUNCTIONS ---
function unlockBadge(id, silent = false) {
  const badge = state.badges.find(b => b.id === id || b.batch.toLowerCase() === id.toLowerCase());
  if (badge && !badge.unlocked) {
    badge.unlocked = true;
    badge.unlockedAt = new Date().toLocaleDateString();
    renderBadges();
    updateProgressBars();
    if (!silent) {
      playUnlockSound();
      triggerConfetti();
      showToast('🏆 BADGE UNLOCKED!', `${badge.batch} (${badge.title}) has been unlocked!`);
    }
  }
}

function lockBadge(id) {
  const badge = state.badges.find(b => b.id === id || b.batch.toLowerCase() === id.toLowerCase());
  if (badge) {
    badge.unlocked = false;
    badge.unlockedAt = null;
    renderBadges();
    updateProgressBars();
  }
}

function unlockTrophy(id, silent = false) {
  const trophy = state.trophies.find(t => t.id === id || t.title.toLowerCase() === id.toLowerCase());
  if (trophy && !trophy.unlocked) {
    trophy.unlocked = true;
    trophy.unlockedAt = new Date().toLocaleDateString();
    renderTrophies();
    if (!silent) {
      playUnlockSound();
      triggerConfetti();
      showToast('🌟 TROPHY UNLOCKED!', `${trophy.title} trophy unlocked!`);
    }
  }
}

function lockTrophy(id) {
  const trophy = state.trophies.find(t => t.id === id || t.title.toLowerCase() === id.toLowerCase());
  if (trophy) {
    trophy.unlocked = false;
    trophy.unlockedAt = null;
    renderTrophies();
  }
}

function handleDemoAction(action) {
  if (action.startsWith('toggle_b')) {
    const badgeNum = action.replace('toggle_b', '');
    const badgeId = `badge_${badgeNum}`;
    const badge = state.badges.find(b => b.id === badgeId);
    if (badge.unlocked) {
      lockBadge(badgeId);
    } else {
      unlockBadge(badgeId);
    }
  } else if (action.startsWith('t')) {
    const trophyNum = action.replace('t', '');
    const trophyId = `trophy_${trophyNum}`;
    const trophy = state.trophies.find(t => t.id === trophyId);
    if (trophy.unlocked) {
      lockTrophy(trophyId);
    } else {
      unlockTrophy(trophyId);
    }
  } else if (action === 'reset') {
    state.badges.forEach((b, i) => { b.unlocked = (i === 0); b.unlockedAt = i === 0 ? 'Default' : null; });
    state.trophies.forEach(t => { t.unlocked = false; t.unlockedAt = null; });
    renderBadges();
    renderTrophies();
    updateProgressBars();
    showToast('🔄 RESET COMPLETE', 'Reset to initial state (Badge 01 unlocked, rest locked).');
  }
}

function openItemDetail(item, category) {
  modalItemImg.src = item.image;
  modalItemTitle.textContent = item.title || item.batch;
  modalItemCategory.textContent = `${category} • ${item.batch || item.sub || ''}`;
  modalItemDesc.textContent = item.req;
  modalRequirementText.textContent = item.req;
  
  if (item.unlocked) {
    modalStatusPill.textContent = 'UNLOCKED';
    modalStatusPill.className = 'modal-status-pill unlocked';
    modalUnlockDate.textContent = item.unlockedAt || 'Unlocked';
    modalRarityBadge.textContent = 'EARNED ACHIEVEMENT';
    modalRarityBadge.style.background = '#2ECC71';
    modalItemImg.style.filter = 'none';
  } else {
    modalStatusPill.textContent = 'LOCKED';
    modalStatusPill.className = 'modal-status-pill';
    modalUnlockDate.textContent = 'Not Yet Unlocked';
    modalRarityBadge.textContent = 'LOCKED ACHIEVEMENT';
    modalRarityBadge.style.background = '#E74C3C';
    modalItemImg.style.filter = 'grayscale(100%) brightness(40%)';
  }

  detailModal.classList.add('active');
}

function showToast(title, message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">✨</div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Confetti System
let confettiCtx = null;
let confettiParticles = [];

function initConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  confettiCtx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
}

function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || !confettiCtx) return;

  confettiParticles = [];
  const colors = ['#f1c40f', '#e67e22', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];

  for (let i = 0; i < 70; i++) {
    confettiParticles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 - 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10
    });
  }

  function animate() {
    confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rSpeed;

      if (p.y < canvas.height) {
        active = true;
        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        confettiCtx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(animate);
    } else {
      confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// Global API
window.TrainerAchievements = {
  unlockBadge: unlockBadge,
  lockBadge: lockBadge,
  unlockTrophy: unlockTrophy,
  lockTrophy: lockTrophy,
  startBGM: startBGM,
  stopBGM: stopBGM,
  setUnlockedBadges: function(badgeIdsArray) {
    state.badges.forEach(b => {
      b.unlocked = badgeIdsArray.includes(b.id) || badgeIdsArray.includes(parseInt(b.id.replace('badge_', '')));
    });
    renderBadges();
    updateProgressBars();
  },
  setUnlockedTrophies: function(trophyIdsArray) {
    state.trophies.forEach(t => {
      t.unlocked = trophyIdsArray.includes(t.id) || trophyIdsArray.includes(parseInt(t.id.replace('trophy_', '')));
    });
    renderTrophies();
  },
  getState: function() {
    return state;
  }
};
