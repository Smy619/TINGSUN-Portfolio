
(function(){
  const html = document.documentElement;
  const supported = ["fr","en"];
  const stored = localStorage.getItem("lang");
  let lang = stored && supported.includes(stored) ? stored : (navigator.language || "fr").slice(0,2);
  if(!supported.includes(lang)) lang = "fr";

  async function loadLang(l){
    try {
      const res = await fetch(`/i18n/${l}.json`);
      const dict = await res.json();
      apply(dict, l);
      localStorage.setItem("lang", l);
    } catch (e) {
      console.error("i18n load error", e);
    }
  }

  function apply(dict, l){
    html.setAttribute("lang", l);
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      if(!key) return;
      const val = dict[key];
      if(typeof val === "string"){
        if(node.tagName === "INPUT" || node.tagName === "TEXTAREA"){
          node.setAttribute("placeholder", val);
        } else {
          node.innerText = val;
        }
      }
    });
    // buttons aria-pressed state
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === l ? "true" : "false");
    });
    // Update <title> when available
    if(dict["__title"]) document.title = dict["__title"];
  }

  // expose for header buttons
  window.setLang = function(l){
    if(l===lang) return;
    lang = l;
    loadLang(lang);
  };

  // init
  loadLang(lang);
})();
