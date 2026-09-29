# 🏆 Trainer Collection - Badges & Achievements Component

This standalone UI/UX component displays the **Trainer Collection** containing:
- **Header Banner & Levelup Journey**
- **6-Segment Badges Earned Progress Bar & Counter**
- **6 Gym Badges** (`Batch 01` to `Batch 06`)
- **12 Achievement Trophies**
- **Interactive Unlock/Lock Animations, Confetti, and Sound Effects**
- **Detailed HD Modal Inspection Dialog**

---

## 🚀 How to Integrate with Your Project / Backend

The component exposes a simple global JavaScript API on `window.TrainerAchievements`. You can call these functions from your own login system, API responses, or state manager:

### 1. Unlock / Lock a Badge
```javascript
// Unlock Batch 01 (Thunder Badge)
TrainerAchievements.unlockBadge('badge_1');

// Unlock Batch 02 (Flame Badge)
TrainerAchievements.unlockBadge('badge_2');

// Lock a badge again
TrainerAchievements.lockBadge('badge_2');
```

### 2. Unlock / Lock an Achievement Trophy
```javascript
// Unlock Trophy by ID ('trophy_1' to 'trophy_12')
TrainerAchievements.unlockTrophy('trophy_1'); // Unlocks "First Step"
TrainerAchievements.unlockTrophy('trophy_5'); // Unlocks "Team Player"
```

### 3. Bulk Load User Achievements State from Backend / Database
```javascript
// Pass arrays of unlocked IDs (e.g. from user profile API)
TrainerAchievements.setUnlockedBadges([1, 2]); // Unlocks Badge 1 and 2
TrainerAchievements.setUnlockedTrophies([1, 3, 5]); // Unlocks Trophies 1, 3, and 5
```

---

## 📁 File Structure

```
SQUADUP/
├── index.html        # Main HTML layout for Badges & Achievements
├── styles.css        # Full CSS design matching exact theme & responsive rules
├── app.js            # Engine logic, state manager, API & confetti/sound FX
├── vercel.json       # Vercel deployment configuration
└── assets/
    ├── badges/       # 6 High-Res Gym Badges (B1.png - B6.png)
    ├── trophies/     # 12 High-Res Achievement Trophies
    └── ui/           # Background landscape reference image
```

---

## 🛠️ Local Running
Open `index.html` directly in any web browser, or run a local HTTP server:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080`.
