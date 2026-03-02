document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".accordion details").forEach((d) => {
  d.addEventListener("toggle", () => {
    if (d.open) {
      document.querySelectorAll(".accordion details").forEach((other) => {
        if (other !== d) other.open = false;
      });
    }
  });
});
