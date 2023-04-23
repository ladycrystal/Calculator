class Calculator {
  constructor(val) {
    this.equation = val;
    this.showEquation();
  }
  showEquation() {
    return this.equation;
  }

  display(val) {
    if (this.equation === "0") {
      this.equation = val;
    } else {
      this.equation += val;
    }
    return this.showEquation();
  }
  solve() {
    this.equation = String(eval(this.equation));
    return this.showEquation();
  }
  clearScreen() {
    this.equation = "0";
    return this.showEquation();
  }
}

class UICalculator extends Calculator {
  showEquation() {
    document.getElementById("result").value = this.equation;
  }
}

const calculator = new Calculator("2+3");
