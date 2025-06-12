// Solution with future security concerns
// ----------
var html = "";
for (var i = 0, l = 4; l > i; i++) {
    html += `<div class="inner-container">
                <div class="placeholder-image"></div>
                <p>this is some subtext under an illustration or image</p>
            </div>`;
}

document.getElementsByClassName('information-container')[0].innerHTML = html;

// Solution with less security concerns (use innerText or textContent instead of innerHTML)
// ----------
// const dummyText = "this is some subtext under an illustration or image";

// dummyText.forEach((item) => {
//   const newDivContainer = document.createElement("div");
//   newDivContainer.classList.add("inner-container");
//   const newImageDiv = document.createElement("div");
//   newImageDiv.classList.add("placeholder-image");
//   var newDummyText = document.createElement("p");
//   newDummyText.textContent = item;
//   const selectElement = document.getElementsByClassName(
//     "information-container"
//   );

//   selectElement.appendChild(newDivContainer);
//   newDivContainer.appendChild(newImageDiv);
//   newDivContainer.appendChild(newDummyText);
// });
