let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// 🔹 ฟังก์ชันรองรับคีย์บอร์ด
document.addEventListener("keydown", function(event) {
  let key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } 
  else if (key === "Enter") {
    event.preventDefault(); // ป้องกันการ refresh หน้า
    calculateResult();
  } 
  else if (key === "Backspace") {
    deleteLast();
  } 
  else if (key === "Escape") {
    clearDisplay();
  }
});
