const orderForm = document.getElementById("orderForm");
const orderStatus = document.getElementById("orderStatus");

orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    customerName: document.getElementById("customerName").value,
    productName: document.getElementById("productName").value,
    quantity: document.getElementById("quantity").value,
  };

  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    orderStatus.innerText = result.message;

    orderForm.reset();
  } catch {
    orderStatus.innerText = "Order failed ❌";
  }
});
