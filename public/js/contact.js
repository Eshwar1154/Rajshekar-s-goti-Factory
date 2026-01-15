const form = document.getElementById("contactForm");
const statusText = document.getElementById("contactStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    statusText.innerText = result.message;

    form.reset();
  } catch (err) {
    statusText.innerText = "Something went wrong ❌";
  }
});
