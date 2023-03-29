/*!
 * onlyonce-buttons v1
 */
(function () {
  'use strict';
  const form = document.querySelector('form');
  const previewBtn = document.getElementsByClassName('oo-btn')[0];
  const textAreaCode = document.getElementById('btn-code');

  // const formIdRegex = /^[a-zA-Z0-9]+\/[a-zA-Z0-9-]+/;
  // const formUrlRegex = /(onlyonce.com\/id\/)(.*\/..*)/;
  const regex = /^([a-zA-Z0-9]+\/[a-zA-Z0-9-]+)|onlyonce.com\/id\/(.+\/.+$)/;

  form.addEventListener('change', function () {
    let id = document.getElementById('btn-id').value;
    let text = document.getElementById('btn-text').value;
    let formid = document.getElementById('form-id');
    let size = document.getElementById('btn-size').checked;
    let colorscheme = document.getElementById('btn-color-scheme').value;
    let idValue = id.match(regex);

    previewBtn.querySelector('span').textContent = text;
    previewBtn.setAttribute('data-size', size ? 'small' : 'normal');
    previewBtn.setAttribute('data-color-scheme', colorscheme);

    let formId;
    console.log(idValue)
    if (idValue?.[2] != undefined) {
      console.log(`Parsed id from URL ${idValue[2]}`)
      formId = idValue[2];
    }
    else if (idValue?.[0] != undefined) {
      console.log(`Parsed id from id itself ${idValue[0]}`)
      formId = idValue[0]
    }

    console.log(`Form id: ${formId}`)
    if(formId == undefined){
      textAreaCode.disabled = true;
      formid.classList.remove('has-success');
      return;
    }

    formid.classList.add('has-success');
    textAreaCode.disabled = false;

    let previewCode = `<a href='javascript:void(null)' data-id='${formId}' data-size='${
      size ? 'small' : 'normal'
    }' data-color-scheme='${colorscheme}' aria-label='${text}' class='oo-btn'>${text}</a>`;
    textAreaCode.value = previewCode;
  });
})();
