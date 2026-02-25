const btn = document.getElementById("flip");
btn.addEventListener("click", (e) => {
 const flipped = btn.classList.toggle("is-flipped");
 btn.setAttribute("aria-pressed", flipped ? "true" : "false");
});

// optional: preload the back image so the first flip is instant
["front.png", "back.png"].forEach(src => { const i = new Image(); i.src = src; });
