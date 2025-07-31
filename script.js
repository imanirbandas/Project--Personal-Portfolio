
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function typeWriterEffect(element, textArray, i = 0, charIndex = 0) {
  if (i === textArray.length) i = 0;

  const currentText = textArray[i];
  element.innerHTML = currentText.substring(0, charIndex + 1);

  if (charIndex < currentText.length - 1) {
    setTimeout(() => typeWriterEffect(element, textArray, i, charIndex + 1), 100);
  } else {
    setTimeout(() => typeWriterEffect(element, textArray, i + 1, 0), 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const typeEl = document.querySelector('.typewrite');
  const phrases = JSON.parse(typeEl.getAttribute('data-text'));
  typeWriterEffect(typeEl, phrases);
});


document.addEventListener('DOMContentLoaded', () => {
  const typeEl = document.querySelector('.typewrite');
  try {
    const raw = typeEl.getAttribute('data-text');
    const phrases = JSON.parse(raw);
    typeWriterEffect(typeEl, phrases);
  } catch (e) {
    console.error('Invalid JSON in data-text:', e);
  }
});
  const cards = document.querySelectorAll('.project-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    observer.observe(card);
  });
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("skillsCarousel");

  const logos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
  ];

  const skillMap = {
    "c": "C",
    "cplusplus": "C++",
    "python": "Python",
    "numpy": "NumPy",
    "pandas": "Pandas",
    "matplotlib":"Matplotlib",
    "javascript": "JavaScript",
    "html5": "HTML5",
    "css3": "CSS3",
    "tailwindcss": "Tailwind",
    "git": "Git",
    "github": "GitHub",
    "vscode": "VSCode",
    "figma": "Figma"
  };

  const elements = [];
  const spacing = 160;
  const totalWidth = logos.length * spacing;

  logos.forEach((logo, i) => {
    const img = document.createElement("img");
    img.src = logo;
    container.appendChild(img);
    elements.push({ el: img, offset: i * spacing });
  });

  let frame = 0;

  function animate() {
  frame = (frame + 2) % totalWidth;


    let activeSkill = null;

    elements.forEach((obj) => {
      const x = ((obj.offset - frame + totalWidth) % totalWidth) - 100;
      obj.el.style.left = `${x}px`;

      const center = 500;
      const dist = Math.abs(x + 30 - center);
      const scale = 1.2 - Math.min(dist / 400, 1) * 0.4;
      const opacity = 1 - Math.min(dist / 400, 1) * 0.5;
      const glow = dist < 80;

      obj.el.style.transform = `scale(${scale})`;
      obj.el.style.opacity = opacity;

      if (glow) {
        obj.el.style.boxShadow = "0 0 25px #00ffff, 0 0 40px #00ffff";
        obj.el.style.zIndex = 10;

        // Get active skill name from src
        const src = obj.el.src;
        const matchedKey = Object.keys(skillMap).find(key => src.includes(key));
        if (matchedKey) {
          activeSkill = skillMap[matchedKey];
        }

      } else {
        obj.el.style.boxShadow = "none";
        obj.el.style.zIndex = 1;
      }
    });

    // Update highlighted skill
  const spans = document.querySelectorAll("#skillsText span");
spans.forEach(span => {
  if (span.dataset.skill === activeSkill?.toLowerCase()) {
    span.classList.add("active");
  } else {
    span.classList.remove("active");
  }
});


    requestAnimationFrame(animate);
  }

  animate();
});
function typeWriterEffect(el, phrases, i = 0, charIndex = 0) {
  if (i === phrases.length) i = 0;
  const text = phrases[i];
  el.innerHTML = text.substring(0, charIndex + 1);

  if (charIndex < text.length - 1) {
    setTimeout(() => typeWriterEffect(el, phrases, i, charIndex + 1), 100);
  } else {
    setTimeout(() => typeWriterEffect(el, phrases, i + 1, 0), 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewrite");
  const phrases = JSON.parse(el.getAttribute("data-text"));
  typeWriterEffect(el, phrases);

  const aiInput = document.getElementById("aiInput");
  const aiResponse = document.getElementById("aiResponse");

  aiInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = aiInput.value.toLowerCase();
      aiResponse.textContent = getAIReply(value);
      aiInput.value = "";
    }
  });
});

function getAIReply(input) {
  if (input.includes("cgpa")) return "📘 My CGPA is 7.4";
  if (input.includes("interest")) return "💡 Web Dev, AI, Graphics Design";
  if (input.includes("goal")) return "🎯 I aim to become a Full Stack AI Developer";
  return "🤖 I'm still learning! Ask me about my CGPA, interests, or goals.";
}
