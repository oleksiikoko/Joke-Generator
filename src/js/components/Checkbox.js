class Checkbox {
  constructor(name, onChange, checked = false) {
    this.id = `checkbox-${name.toLowerCase().replace(" ", "-")}`;
    this.onChange = onChange;

    this.checkContainer = document.createElement("label");
    this.checkContainer.className = "checkbox__container";
    this.checkContainer.innerHTML = name;

    this.checkbox = document.createElement("input");

    this.checkbox.type = "checkbox";
    this.checkbox.className = "checkbox";
    this.checkbox.setAttribute("id", this.id);
    checked && this.checkbox.setAttribute("checked", true);

    this.checkContainer.appendChild(this.checkbox);
    this.checkContainer.innerHTML +=
      '<span class="checkbox__checkmark"><span class="checkbox__checkmark--checked"></span></span>';

    this.checkContainer.addEventListener("click", (event) => {
      this.setChecked();
      event.preventDefault();
    });
  }

  get checkboxNode() {
    return this.checkContainer;
  }

  get checkboxDomNode() {
    return document.getElementById(this.id).parentNode;
  }

  setChecked() {
    document.getElementById(this.id).setAttribute("checked", true);
    this.onChange();
  }

  setUncheked() {
    document.getElementById(this.id).removeAttribute("checked");
  }
}

export default Checkbox;
