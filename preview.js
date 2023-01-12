/*!
 * onlyonce-buttons v1
 */
(function () {
  "use strict";
  const form = document.querySelector("form");
  const previewBtn = document.getElementsByClassName("oo-btn")[0];
  const textAreaCode = document.getElementById("btn-code");

  const formIdRegex = /^[a-zA-Z0-9]*\/[a-zA-Z0-9-]*/;
  
  form.addEventListener("change", function () {
    let id = document.getElementById("btn-id").value;
    let size = document.getElementById("btn-size").checked;
    let colorscheme = document.getElementById("btn-color-scheme").value;
    let regexVal = id.match(formIdRegex);

    if(!regexVal && id){
      return;
    }


    previewBtn.setAttribute("data-size", size ? 'small' : 'normal');
    previewBtn.setAttribute("data-color-scheme", colorscheme);

    let previewCode = `<a href="https://buttons.onlyonce.com" data-id="${regexVal?.[0]}" data-size="${size ? 'small' : 'normal'}" data-color-scheme="${colorscheme}" aria-label="Fill with OnlyOnce" class="oo-btn">Fill with OnlyOnce</a>`
    textAreaCode.value = previewCode;
  });
})();
