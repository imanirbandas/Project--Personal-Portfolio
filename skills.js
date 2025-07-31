
document.addEventListener('DOMContentLoaded', () => {
  const skills = [
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'Python', level: '70%' },
    { name: 'C', level: '85%' },
    { name: 'C++', level: '80%' },
    { name: 'NumPy', level: '70%' },
    { name: 'Pandas', level: '65%' },
    { name: 'Matplotlib', level: '60%' },
    { name: 'Tailwind CSS', level: '65%' },
    { name: 'Git & GitHub', level: '80%' },
    { name: 'VSCode', level: '95%' },
    { name: 'Figma', level: '70%' },
    { name: 'Graphics Design', level: '60%' }
  ];

  const grid = document.querySelector('.skills-grid');
  const progressBars = document.getElementById('progressBars');

  skills.forEach((skill, index) => {
    // ----- Skill Button -----
    const btn = document.createElement('button');
    btn.className = 'skill-btn';
    btn.textContent = skill.name;
    grid.appendChild(btn);

    // ----- Progress Bar Container -----
    const container = document.createElement('div');
    container.className = 'progress-container';
    container.style.setProperty('--i', index); // for animation delay

    const title = document.createElement('div');
    title.className = 'progress-title';
    title.textContent = skill.name;

    const bar = document.createElement('div');
    bar.className = 'progress-bar';

    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.setProperty('--progress', skill.level);

    bar.appendChild(fill);
    container.appendChild(title);
    container.appendChild(bar);
    progressBars.appendChild(container);
  });
});
