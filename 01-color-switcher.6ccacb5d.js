!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.body};t.start.addEventListener("click",(function(){var n=setInterval(a,1e3);o=n,t.start.disabled=!0})),t.stop.addEventListener("click",(function(){clearInterval(o),t.start.disabled=!1}));var o=null;function a(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.6ccacb5d.js.map