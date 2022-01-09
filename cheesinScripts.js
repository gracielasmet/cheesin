

const checkboxes = [];
var checkboxValues = [ ];

var time = 100;
for (i = 0; i< data.length; i++) {
    document.getElementById('wrapper').innerHTML += "<img src=./smiles/" + data[i].title + ".png><\img>";
}

window.onload = (function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  // document.getElementById('wrapper').innerHTML += "<h1>" + checkboxes.length + "</h>";
  checkboxes.forEach((box) => {
      box.checked = false;
      box.addEventListener("change", () => filterCards());
  });
});

function grabCheckboxValues() {
      var checkboxValues = [];
      const checkboxes = document.querySelectorAll("input[type='checkbox']");

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          checkboxValues.push(checkbox.value);
        }
      });
      return checkboxValues;
}

function filterCards() {
      document.getElementById('wrapper').innerHTML = "";
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      checkboxValues = grabCheckboxValues();

      data.forEach((item) => {
        let classes = item.classes;
        let result = (arr, target) => target.every((v) => arr.includes(v));
        let isMatch = result(classes, checkboxValues);
        if (isMatch) {
          document.getElementById('wrapper').innerHTML += "<img src=./smiles/" + item.title + ".png><\img>";
        }
      });

}
