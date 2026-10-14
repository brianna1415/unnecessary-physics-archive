const searchInput = document.getElementById("searchInput");
const fieldFilter = document.getElementById("fieldFilter");
const resetFilter = document.getElementById("resetFilter");
const rows = [...document.querySelectorAll(".archive-row")];
const emptyState = document.getElementById("emptyState");
const visibleCount = document.getElementById("visibleCount");

function filterArchive() {
  const query = searchInput.value.trim().toLowerCase();
  const field = fieldFilter.value;
  let visible = 0;
  rows.forEach(row => {
    const matchesText = row.dataset.search.toLowerCase().includes(query);
    const fields = row.dataset.field.split(/\s+/);
    const matchesField = field === "all" || fields.includes(field);
    const show = matchesText && matchesField;
    row.hidden = !show;
    if (show) visible += 1;
  });
  visibleCount.textContent = String(visible).padStart(2, "0");
  emptyState.hidden = visible > 0;
}
searchInput.addEventListener("input", filterArchive);
fieldFilter.addEventListener("change", filterArchive);
resetFilter.addEventListener("click", () => {
  searchInput.value = "";
  fieldFilter.value = "all";
  filterArchive();
  searchInput.focus();
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector("span").textContent = open ? "−" : "＋";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector("span").textContent = "＋";
}));
