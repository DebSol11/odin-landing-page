var html = "";
for (var i = 0, l = 4; l > i; i++) {
    html += `<div class="inner-container">
                <div class="placeholder-image"></div>
                <p>this is some subtext under an illustration or image</p>
            </div>`;
}

document.getElementsByClassName('information-container').innerText = html;