// Floating hearts animation
function createFloatingHeart() {
  const heartsContainer = document.getElementById("heartsContainer")
  const heart = document.createElement("div")
  heart.className = "floating-heart"
  heart.innerHTML = "💕"
  heart.style.left = Math.random() * 100 + "%"
  heart.style.animationDuration = Math.random() * 3 + 5 + "s"
  heart.style.fontSize = Math.random() * 10 + 15 + "px"

  heartsContainer.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 8000)
}

// Create hearts periodically
setInterval(createFloatingHeart, 800)

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Reveal animation on scroll
const revealElements = document.querySelectorAll(".reveal")

const revealOnScroll = () => {
  const windowHeight = window.innerHeight

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const revealPoint = 100

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)
revealOnScroll() // Initial check

// Heart button interaction
const heartButton = document.getElementById("heartButton")
const heartMessage = document.getElementById("heartMessage")

const messages = [
  "Ты прекрасна! 💕",
  "Твоя улыбка освещает мир ✨",
  "Ты особенная 🌸",
  "Ты делаешь каждый день лучше 🌟",
  "Твоя доброта вдохновляет 💖",
  "Ты — чудо 🦋",
  "Мир прекраснее с тобой 🌺",
  "Ты уникальна 💫",
  "Твоё сердце — сокровище 💎",
  "Ты — источник света ☀️",
]

let clickCount = 0

heartButton.addEventListener("click", () => {
  heartButton.classList.add("clicked")

  // Show random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  heartMessage.textContent = randomMessage
  heartMessage.style.animation = "none"
  setTimeout(() => {
    heartMessage.style.animation = "fadeIn 0.5s ease"
  }, 10)

  // Create burst of hearts
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createBurstHeart()
    }, i * 50)
  }

  setTimeout(() => {
    heartButton.classList.remove("clicked")
  }, 600)

  clickCount++

  // Special message after 5 clicks
  if (clickCount === 5) {
    setTimeout(() => {
      heartMessage.textContent = "Ты заметила? Каждое нажатие — это биение моего сердца... 💗"
      heartMessage.style.fontSize = "20px"
    }, 1000)
  }
})

function createBurstHeart() {
  const heart = document.createElement("div")
  heart.className = "floating-heart"
  heart.innerHTML = "💖"
  heart.style.left = "50%"
  heart.style.top = "50%"
  heart.style.position = "fixed"
  heart.style.fontSize = "30px"

  const angle = Math.random() * Math.PI * 2
  const velocity = Math.random() * 200 + 100
  const tx = Math.cos(angle) * velocity
  const ty = Math.sin(angle) * velocity

  heart.style.animation = "none"
  document.getElementById("heartsContainer").appendChild(heart)

  let opacity = 1
  let scale = 1
  let x = 0
  let y = 0

  const animate = () => {
    x += tx * 0.01
    y += ty * 0.01
    opacity -= 0.02
    scale -= 0.01

    heart.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
    heart.style.opacity = opacity

    if (opacity > 0) {
      requestAnimationFrame(animate)
    } else {
      heart.remove()
    }
  }

  animate()
}

// Parallax effect for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroBackground = document.querySelector(".hero-background")
  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add sparkle effect on mouse move
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.95) {
    createSparkle(e.clientX, e.clientY)
  }
})

function createSparkle(x, y) {
  const sparkle = document.createElement("div")
  sparkle.innerHTML = "✨"
  sparkle.style.position = "fixed"
  sparkle.style.left = x + "px"
  sparkle.style.top = y + "px"
  sparkle.style.pointerEvents = "none"
  sparkle.style.fontSize = "20px"
  sparkle.style.zIndex = "9999"
  sparkle.style.animation = "fadeOut 1s ease forwards"

  document.body.appendChild(sparkle)

  setTimeout(() => {
    sparkle.remove()
  }, 1000)
}

// Add fadeOut animation
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`
document.head.appendChild(style)

// Easter egg: Konami code
let konamiCode = []
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
]

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key)
  konamiCode = konamiCode.slice(-8)

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    activateEasterEgg()
  }
})

function activateEasterEgg() {
  // Create massive heart explosion
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createFloatingHeart()
    }, i * 30)
  }

  // Show special message
  const specialMessage = document.createElement("div")
  specialMessage.style.position = "fixed"
  specialMessage.style.top = "50%"
  specialMessage.style.left = "50%"
  specialMessage.style.transform = "translate(-50%, -50%)"
  specialMessage.style.fontSize = "48px"
  specialMessage.style.color = "#FF69B4"
  specialMessage.style.zIndex = "10000"
  specialMessage.style.textAlign = "center"
  specialMessage.style.fontFamily = "Georgia, serif"
  specialMessage.style.textShadow = "0 0 20px rgba(255, 105, 180, 0.5)"
  specialMessage.innerHTML = "Виктория,<br>ты нашла секрет! 💕✨"

  document.body.appendChild(specialMessage)

  setTimeout(() => {
    specialMessage.style.transition = "opacity 2s ease"
    specialMessage.style.opacity = "0"
    setTimeout(() => {
      specialMessage.remove()
    }, 2000)
  }, 3000)
}

// Add typing effect to hero subtitle
const subtitle = document.querySelector(".hero-subtitle")
if (subtitle) {
  const text = subtitle.textContent
  subtitle.textContent = ""
  subtitle.style.opacity = "1"

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  setTimeout(typeWriter, 1500)
}

// Console message
console.log("%c💕 Для Виктории 💕", "font-size: 24px; color: #FF69B4; font-weight: bold;")
console.log("%cЭтот сайт создан с любовью и заботой ✨", "font-size: 14px; color: #FFB6C1;")
