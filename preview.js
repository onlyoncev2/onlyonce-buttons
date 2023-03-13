/*!
 * onlyonce-buttons v1
 */
(function () {
  "use strict";
  const form = document.querySelector("form");
  const previewBtn = document.getElementsByClassName("oo-btn")[0];
  const textAreaCode = document.getElementById("btn-code");

  const formIdRegex = /^[a-zA-Z0-9]+\/[a-zA-Z0-9-]+/;
  
  form.addEventListener("change", function () {
    let id = document.getElementById("btn-id").value;
    let text = document.getElementById("btn-text").value;
    let formid = document.getElementById("form-id");
    let size = document.getElementById("btn-size").checked;
    let colorscheme = document.getElementById("btn-color-scheme").value;
    let regexVal = id.match(formIdRegex);

    previewBtn.querySelector('span').textContent  = text;
    previewBtn.setAttribute("data-size", size ? 'small' : 'normal');
    previewBtn.setAttribute("data-color-scheme", colorscheme);

    console.log(regexVal)

    if(regexVal == null || !regexVal && id){
      textAreaCode.disabled = true;
      formid.classList.remove("has-success");
      return;
    }

    formid.classList.add("has-success");
    
    textAreaCode.disabled = false;

    let previewCode = `<a href="https://buttons.onlyonce.com" data-id="${regexVal?.[0]}" data-size="${size ? 'small' : 'normal'}" data-color-scheme="${colorscheme}" aria-label="${text}" class="oo-btn">${text}</a>`
    textAreaCode.value = previewCode;
  });
})();
