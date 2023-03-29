/*!
 * onlyonce-buttons v1
 */
(function () {
  "use strict";

  var document = window.document;
  var domain = "https://forms.onlyonce.com";

  var buttonClass = "oo-btn";
  var styling =
    ".oo-btn,a.oo-btn{text-decoration:none}.oo-btn{box-sizing:border-box;border-radius:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:8px 20px;gap:10px;width:max-content;height:40px;left:20px;top:20px;font-style:normal;font-size:16px;line-height:20px}.oo-btn[data-color-scheme=light]{background:#e9edef;border:1px solid #a2a9af;color:#303030}.oo-btn[data-color-scheme=light]:hover{background:#fbfeff}.oo-btn[data-color-scheme=light]:active{background:#ddeff8}.oo-btn[data-color-scheme=dark]{background:#00202e;color:#fff}.oo-btn[data-color-scheme=dark]:hover{background:#003b53}.oo-btn[data-color-scheme=dark]:active{background:#015273}.oo-btn[data-size=small]{font-size:14px;padding:0 8px;height:32px;gap:5px}.oo-btn[data-size=small] svg{height:18px}@media (prefers-color-scheme:dark){.oo-btn[data-color-scheme=auto]{background:#00202e;color:#fff}.oo-btn[data-color-scheme=auto]:hover{background:#003b53}.oo-btn[data-color-scheme=auto]:active{background:#015273}}@media (prefers-color-scheme:light){.oo-btn[data-color-scheme=auto]{background:#e9edef;border:1px solid #a2a9af;color:#303030}.oo-btn[data-color-scheme=auto]:hover{background:#fbfeff}.oo-btn[data-color-scheme=auto]:active{background:#ddeff8}}";
  var icon =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5143 0H5.48571C2.45604 0 0 2.45604 0 5.48571V18.5143C0 21.544 2.45604 24 5.48571 24H18.5143C21.544 24 24 21.544 24 18.5143V5.48571C24 2.45604 21.544 0 18.5143 0Z" fill="#00A0E1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3141 8.29075C9.55864 8.6132 8.22842 10.1513 8.22842 12C8.22842 13.8487 9.55864 15.3868 11.3141 15.7092V19.8563C7.28004 19.5088 4.11414 16.1241 4.11414 12C4.11414 7.87586 7.28004 4.49117 11.3141 4.14368V8.29075ZM12.6856 4.14368V8.29075C14.4411 8.6132 15.7713 10.1513 15.7713 12C15.7713 13.8487 14.4411 15.3868 12.6856 15.7092V19.8563C16.7197 19.5088 19.8856 16.1241 19.8856 12C19.8856 7.87586 16.7197 4.49117 12.6856 4.14368Z" fill="white"/></svg>';

  const createCSS = () => {
    let el = document.createElement("style");
    el.innerText = styling;
    document.head.appendChild(el);
  };

  const styleButtons = () => {
    var btns = document.querySelectorAll("a." + buttonClass);
    btns.forEach((btn) => {
      const text = btn.innerText;
      let span = document.createElement("span");
      span.innerText = text;
      btn.innerHTML = icon;
      btn.append(span);

      let selectedColorScheme = btn.getAttribute("data-color-scheme");
      if (selectedColorScheme == null) {
        btn.setAttribute("data-color-scheme", "light");
      }

      let formId = btn.getAttribute("data-id");
      if(formId == undefined){
        console.warn("No valid data-id attribute found on OnlyOnce button")
        return;
      }
      btn.href = `${domain}/id/${formId}`;
    });
  };

  const render = () => {
    createCSS();
    styleButtons();
  };

  render();
})();
