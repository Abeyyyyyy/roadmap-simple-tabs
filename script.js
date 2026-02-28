const tabs = document.querySelectorAll(".tab");
const tabText = document.getElementById("tabText");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active class
    tabs.forEach(t => t.classList.remove("active"));

    // Add active to clicked tab
    tab.classList.add("active");

    // Change content text
    tabText.textContent = tab.textContent;
  });
});