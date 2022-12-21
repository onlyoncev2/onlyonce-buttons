/*!
 * onlyonce-buttons v1
 */
(function () {
    'use strict';

    var document = window.document;
    var domain = 'forms.onlyonce.com';

    var buttonClass = 'oo-btn';    
    var styling = ".oo-btn{box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:8px 20px;gap:10px;width:fit-content;height:40px;left:20px;top:20px;text-decoration:none;font-style:normal;font-size:16px;line-height:20px}a.oo-btn{text-decoration:none;}.oo-btn.light{background:#e9edef;border:1px solid #a2a9af;color:#303030}.oo-btn.light:hover{background:#fbfeff}.oo-btn.light:active{background:#ddeff8}.oo-btn.dark{background:#00202e;color:#fff}.oo-btn.dark:hover{background:#003b53}.oo-btn.dark:active{background:#015273}"

    var icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5143 0H5.48571C2.45604 0 0 2.45604 0 5.48571V18.5143C0 21.544 2.45604 24 5.48571 24H18.5143C21.544 24 24 21.544 24 18.5143V5.48571C24 2.45604 21.544 0 18.5143 0Z" fill="#00A0E1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3141 8.29075C9.55864 8.6132 8.22842 10.1513 8.22842 12C8.22842 13.8487 9.55864 15.3868 11.3141 15.7092V19.8563C7.28004 19.5088 4.11414 16.1241 4.11414 12C4.11414 7.87586 7.28004 4.49117 11.3141 4.14368V8.29075ZM12.6856 4.14368V8.29075C14.4411 8.6132 15.7713 10.1513 15.7713 12C15.7713 13.8487 14.4411 15.3868 12.6856 15.7092V19.8563C16.7197 19.5088 19.8856 16.1241 19.8856 12C19.8856 7.87586 16.7197 4.49117 12.6856 4.14368Z" fill="white"/></svg>';


    const createCSS = css => {
        let el = document.createElement('style');
        el.innerText = styling;
        document.head.appendChild(el);
    };

    const styleButtons = () => {
        var btns = document.querySelectorAll('a.' + buttonClass);
        btns.forEach(btn => {
            const text = btn.innerText;
            btn.innerHTML = icon
            btn.append(text)
        });
    }

    const render = () => {
        createCSS()
        styleButtons()
    }

    render()
})();