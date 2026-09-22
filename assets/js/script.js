const saveKey = 'codingQuestProgress';
let progress = JSON.parse(localStorage.getItem(saveKey)) || {
    level: 1, questsDone: 0, badges: ['newbie']
};

function updateUI() {
    const qDone = document.getElementById('quests-done');
    const bCount = document.getElementById('badges-count');
    const progFill = document.getElementById('progress-fill');
    const uLevel = document.getElementById('user-level');
    
    if (uLevel) uLevel.textContent = progress.level;
    if (qDone) qDone.textContent = progress.questsDone;
    if (bCount) bCount.textContent = progress.badges.length;
    if (progFill) progFill.style.width = Math.min(100, (progress.questsDone / 12) * 100) + '%';
}

function completeQuest() {
    progress.questsDone += 1;
    localStorage.setItem(saveKey, JSON.stringify(progress));
    alert('✅ Quest Completed! Keep it up!');
    updateUI();
}

document.addEventListener('DOMContentLoaded', updateUI);