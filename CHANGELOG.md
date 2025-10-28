# CHANGELOG

## Phase 1: Clone Provided Repository & Setup
- **Cloned** instructor repository: `git clone [REPO-URL]`
- **Checked branches**: `git branch -a` (found `main`, `dev`, `conflict-simulator`)
- **Explored structure** of all branches using `git checkout dev` and `git checkout conflict-simulator`
- **Renamed** remote from origin → instructor:  
  `git remote rename origin instructor`
- **Added** own repo as origin:  
  `git remote add origin https://github.com/YOUR-USERNAME/git-solved-YOUR-ID.git`
- **Verified** remotes with `git remote -v`
- **Pushed main** branch to personal repo:  
  `git push -u origin main`
- **Checkpoint 1:**  
  Captured `git log --oneline --graph --all` → `checkpoint1.png`

---

## Phase 2: First Merge (main + dev)
- **Attempted merge:** `git merge dev`
- **Conflicts detected in 6 files:**
  - `config/app-config.yaml`
  - `config/database-config.json`
  - `scripts/deploy.sh`
  - `scripts/monitor.js`
  - `docs/architecture.md`
  - `README.md`
- **Resolution Strategy:**  
  Kept production as base, added development features as optional or environment-specific.
- **Resolved all files manually:**
  - `app-config.yaml` → unified prod/dev config.
  - `database-config.json` → separate production & development profiles.
  - `deploy.sh` → added environment conditional logic.
  - `monitor.js` → dynamic configuration by `NODE_ENV`.
  - `architecture.md` → combined docs for both environments.
  - `README.md` → merged feature sets.
- **Committed merge:**  
  `git commit -m "merge: Resolve conflicts between main and dev"`
- **Pushed updates:**  
  `git push origin main`
- **Checkpoint 2:**  
  Captured `git log --oneline --graph --all` → `checkpoint2.png`

---

## Phase 3: Second Merge (main + conflict-simulator)
- **Merged branch:** `git merge conflict-simulator`
- **Resolved additional conflicts** in the same 6 core files.
- **Strategy:** kept stable production code and integrated experimental features as optional/commented-out.
- **Committed merge:**  
  `git commit -m "merge: Resolve conflicts from conflict-simulator branch"`
- **Verified merge integrity** using `git status` and `git log`.

---

## Phase 4: Git Fetch & Pull
- **Executed fetch from instructor repo:**  
  `git fetch instructor`
- **Compared remote & local branches:**  
  `git diff main instructor/main`
- **Pulled updates if available:**  
  `git pull instructor main`
- **Documented usage:**  
  - Used `git fetch` → 1 time  
  - Used `git pull` → 1 time
- **Verified clean working directory:**  
  `git status`
- **Took screenshot of verification.**


