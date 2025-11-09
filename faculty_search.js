const searchInput = document.querySelector(".search-input");
const facultyCards = document.querySelectorAll(".faculty-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  facultyCards.forEach((card) => {
    const name = card.querySelector("h3")?.innerText.toLowerCase() || "";
    const designation = card.querySelector("p")?.innerText.toLowerCase() || "";

    if (name.includes(query) || designation.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

const select = document.querySelector(".search-select");
select.innerHTML = '<option value="">Select Faculty</option>';
facultyCards.forEach((card) => {
  const name = card.querySelector("h3")?.innerText.trim();
  if (name) {
    const id = "faculty-" + name.toLowerCase().replace(/\s+/g, "-");
    card.id = id;

    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    select.appendChild(option);
  }
});

select.addEventListener("change", (e) => {
  const selectedId = e.target.value;
  if (selectedId) {
    const element = document.getElementById(selectedId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.style.border = "3px solid #007bff";
      setTimeout(() => (element.style.border = ""), 2000);
    }
  }
});

const readMoreButtons = document.querySelectorAll(".read-more");
readMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const info = btn.parentElement.querySelector(".more-info");
    if (info.style.display === "none" || !info.style.display) {
      info.style.display = "block";
      btn.textContent = "Read Less";
    } else {
      info.style.display = "none";
      btn.textContent = "Read More";
    }
  });
});
