const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {

    let result = eval(display.value);

    // Ondalık düzeltme
    result = parseFloat(result.toFixed(10));

    display.value = result;

  } catch {
    display.value = "Hata";
  }
}

// Klavye desteği
document.addEventListener("keydown", function(event) {

  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    deleteLast();
  }

  if (key === "Escape") {
    clearDisplay();
  }
});