/*! 20191002-10-RELEASE 2019-10-02 */

((e,t,i)=>{let n;const o={en:{adChoiceBtn:{title:"Why do I see this item?"}},de:{adChoiceBtn:{title:"Warum sehe ich diesen Artikel?"}},fr:{adChoiceBtn:{title:"Pourquoi dois-je voir cet article?"}},it:{adChoiceBtn:{title:"Perché vedo questa voce?"}},jp:{adChoiceBtn:{title:"なぜ私はこのアイテムを見ていますか？"}},pt:{adChoiceBtn:{title:"Por que eu vejo este item?"}}},c=function(e){n=o[e||"en"]||o.en,i.userAdChoice.isInitialized=!0},a=function(e,o){if(!e.hasFloatingButton&&o.plink){e.hasFloatingButton=!0;const c=t.trcGetCurrentStyle(e,"position"),a=t.createElement("div"),d=t.createElement("a");c&&"static"!==c||(e.style.position="relative");let l="trc_user_adChoice_btn";("STATIC"===o["adc-type"]||i.Device.isTouchDevice)&&(l+=" trc_user_adChoice_btn_static"),i.dom.addClass(a,l),a.setAttribute("title",n.adChoiceBtn.title),d.setAttribute("href",o.plink),d.setAttribute("target","_blank"),d.appendChild(a),e.appendChild(d)}},d=function(e){for(let t=0;t<e.boxes.length;t++)a(e.boxes[t],e.recommendationList[t])};i.userAdChoice={init:c,initForMode:d,locale:"en",isInitialized:!1}})(window,document,TRC);