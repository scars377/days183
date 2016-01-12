!function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){(function(t,n,i){r(5),r(9);var a=r(10),o=r(13),l=r(16);console.clear();var s=t.createClass({displayName:"App",getInitialState:function(){return{records:[],hash:""}},addRecord:function(e){var t=this.state.records;t.push(e),this.setRecords(t)},removeRecord:function(e){var t=this.state.records;t.splice(e,1),this.setRecords(t)},removeAllRecord:function(){1==confirm("是否清空紀錄")&&this.setState({records:[],hash:""})},toggleRecord:function(e){var t=this.state.records;t[e].dep=!t[e].dep,this.setRecords(t)},setRecords:function(e){e=e.sort(function(e,t){return e.date.getTime()-t.date.getTime()});var t=l.stringify(e);window.location.hash=t,this.setState({records:e,hash:t})},componentDidMount:function(){var e=window.location.hash.replace(/^#/,""),t=l.parse(e);this.setRecords(t)},render:function(){var e=window.location.origin+window.location.pathname+"#"+this.state.hash;return t.createElement("div",{className:"app"},t.createElement("h1",null,"最近一年居住國內超過183日試算器"),t.createElement("div",{className:"title-info"},t.createElement("ol",null,t.createElement("li",null,"社會救助法第4條第5項規定略以，(中)低收入戶申請人最近一年居住國內應超過183日。"),t.createElement("li",null,"「出境日」視為未居住國內，「入境日」視為居住國內。"),t.createElement("li",null,"本程式僅提供簡易試算功能，實際結果仍須經主關機關核算認定。"))),t.createElement(a,{setRecords:this.setRecords,addRecord:this.addRecord,removeAllRecord:this.removeAllRecord}),"日期格式: 1030602",t.createElement("br",null),t.createElement(o,{records:this.state.records,removeRecord:this.removeRecord,toggleRecord:this.toggleRecord}),t.createElement("br",null),""==this.state.hash?null:t.createElement("div",null,"記錄網址: ",t.createElement("a",{href:e},e)),t.createElement("br",null),t.createElement("br",null),t.createElement("div",{className:"tips"},t.createElement("h2",null,"操作說明"),t.createElement("br",null),t.createElement("p",null,"輸入框中",t.createElement("br",null),"按 Q 或 Numpad+ 可切換為 [入境]",t.createElement("br",null),"按 W 或 Numpad- 可切換為 [出境]",t.createElement("br",null),"按 E 或 Numpad/ 可切換[出境]與[入境]",t.createElement("br",null)),t.createElement("p",null,"記錄的出入境標記可點擊以切換",t.createElement("br",null),"Ctrl-點擊記錄的移除標記可略過確認框"),t.createElement("br",null),t.createElement("h2",null,"一、移民署格式匯入（承辦作業專用）"),t.createElement("p",null,"1.已取得內政部移民署線上應用服務系統帳號，並有入出境資訊查詢權限者，可透過該系統查詢歷次出入境紀錄。"),t.createElement("p",null,"2.將該系統產出之歷次出入境紀錄，整批複製並貼上到183日試算系統欄位，即可運算是否符合最近一年居住國內超過183日之規定。"),t.createElement("br",null),t.createElement("h2",null,"二、手動輸入"),t.createElement("p",null,"1.點選「出境」或「入境」後，輸入對應之出境或入境日期，再點選「加入」。"),t.createElement("p",null,"2.日期格式範例：如為105年1月1日，則輸入「1050101」"),t.createElement("p",null,"3.將歷次出入境紀錄依序輸入完畢後，即可運算是否符合最近一年居住國內超過183日之規定。")),t.createElement("br",null),t.createElement("a",{href:"https://github.com/scars377/days183",style:{fontSize:"12px"},target:"_blank"},"https://github.com/scars377/days183"))}});e.exports=s,n.render(t.createElement(s,null),i("#wrapper")[0])}).call(t,r(2),r(3),r(4))},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t){e.exports=jQuery},function(e,t,r){var n=r(6);"string"==typeof n&&(n=[[e.id,n,""]]);r(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(7)(),t.push([e.id,"body{background-color:#333;color:#fff;font-family:Verdana,Microsoft JhengHei}.app{line-height:30px;text-align:center;padding:12px 0}h1{font-size:48px;font-weight:700;margin-bottom:48px;-webkit-filter:drop-shadow(2px 2px 1px #000);filter:drop-shadow(2px 2px 1px #000)}@media (max-width:768px){h1{font-size:20px;margin-bottom:20px}}h3{float:left;margin-left:255px}.title-info{text-align:left;width:60%;max-width:800px;min-width:290px;margin:0 auto;margin-bottom:20px}.title-info ol{list-style:decimal;margin-left:30px}@media (max-width:768px){.title-info{font-size:14px;line-height:20px}}a{color:#69f}.tips{width:auto;padding:8px 16px;display:inline-block;background-color:#444;text-align:left;line-height:14px;font-size:12px;color:#ccc}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),e.push(o))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],i=f[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(c(n.parts[a],t))}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(c(n.parts[a],t));f[n.id]={id:n.id,refs:1,parts:o}}}}function i(e){for(var t=[],r={},n=0;n<e.length;n++){var i=e[n],a=i[0],o=i[1],l=i[2],s=i[3],c={css:o,media:l,sourceMap:s};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function a(e,t){var r=g(),n=b[b.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var r,n,i;if(t.singleton){var a=v++;r=x||(x=l(t)),n=d.bind(null,r,a,!1),i=d.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(t),n=u.bind(null,r),i=function(){o(r),r.href&&URL.revokeObjectURL(r.href)}):(r=l(t),n=p.bind(null,r),i=function(){o(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function d(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function u(e,t){var r=t.css,n=(t.media,t.sourceMap);n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,v=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=i(e);return n(r,t),function(e){for(var a=[],o=0;o<r.length;o++){var l=r[o],s=f[l.id];s.refs--,a.push(s)}if(e){var c=i(e);n(c,t)}for(var o=0;o<a.length;o++){var s=a[o];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete f[s.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){e.exports=r.p+"index.html"},function(e,t,r){(function(t,n){r(11);var i=t.createClass({displayName:"Inputs",getInitialState:function(){return{dep:!1,input:"",enabled:!1}},getDateFromString:function(e){var t=e.match(/^(\d{2,3})(\d{2})(\d{2})$/);if(!t)return null;var r=new Date(parseInt(t[1],10)+1911+"-"+t[2]+"-"+t[3]);if(isNaN(r.getTime()))return null;var n=r.getFullYear();return 2e3>n||n>2063?null:r},getDateFromString2:function(e){var t=e.match(/^(\d{4})(\d{2})(\d{2})$/);if(!t)return null;var r=new Date(parseInt(t[1],10)+"/"+t[2]+"/"+t[3]);if(isNaN(r.getTime()))return null;var n=r.getFullYear();return 2e3>n||n>2063?null:r},setDep:function(e){return function(){this.setState({dep:e})}.bind(this)},inputChange:function(e){var t=e.target.value.replace(/\D/g,"").substr(0,7),r=null!=this.getDateFromString(t);this.setState({input:t,enabled:r})},inputDown:function(e){switch(e.keyCode){case 13:this.state.enabled&&this.addRecord();break;case 81:case 109:this.setState({dep:!0});break;case 87:case 107:this.setState({dep:!1});break;case 69:case 111:this.setState({dep:!this.state.dep})}},addRecord:function(){this.props.addRecord({date:this.getDateFromString(this.state.input),dep:this.state.dep}),this.setState({input:"",enabled:!1,dep:!this.state.dep})},importFromText:function(){var e=t.findDOMNode(this.refs["import"]).value,r=e.split("\n"),n=[],i=this;r.forEach(function(e){if(e){var t=e.split(/[ \t]+/);if("出境"==t[1]||"入境"==t[1]){var r=null;"出境"==t[1]?r=!0:"入境"==t[1]&&(r=!1),null!=r&&n.push({date:i.getDateFromString2(t[2]),dep:r})}}}),this.props.setRecords(n)},componentDidMount:function(){n.findDOMNode(this.refs.input).focus()},render:function(){return t.createElement("div",null,t.createElement("h2",null,"移民署格式匯入（承辦作業專用）"),t.createElement("textarea",{className:"paste-input",ref:"import",onChange:this.importFromText}),t.createElement("hr",null),t.createElement("h2",null,"手動輸入"),t.createElement("div",{className:"inputs"},t.createElement("button",{className:"dep "+(this.state.dep?"active":"deactive"),onClick:this.setDep(!0)},"出境"),t.createElement("button",{className:"arr "+(this.state.dep?"deactive":"active"),onClick:this.setDep(!1)},"入境"),t.createElement("input",{type:"text",ref:"input",placeholder:"輸入日期",value:this.state.input,onKeyDown:this.inputDown,onChange:this.inputChange}),t.createElement("button",{className:this.state.enabled?"enabled":"disabled",onClick:this.addRecord},"加入"),t.createElement("button",{className:"enabled",onClick:this.props.removeAllRecord},"清空紀錄")),t.createElement("hr",null))}});e.exports=i}).call(t,r(2),r(3))},function(e,t,r){var n=r(12);"string"==typeof n&&(n=[[e.id,n,""]]);r(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(7)(),t.push([e.id,".paste-input{width:60%;max-width:800px;min-width:290px;height:200px}input[type=text]{vertical-align:middle;padding:4px;font-size:18px;font-family:Verdana,Microsoft JhengHei;margin:0 12px 0 16px;width:150px}@media (max-width:768px){input[type=text]{font-size:14px;width:100px}}button{vertical-align:middle;padding:7px 16px;font-size:16px;font-family:Verdana,Microsoft JhengHei;border:none;cursor:pointer;border-radius:6px}@media (max-width:768px){button{font-size:12px}}button.dep{border-top-right-radius:0;border-bottom-right-radius:0;background-color:#f99}button.arr{border-top-left-radius:0;border-bottom-left-radius:0;background-color:#9f9}button.deactive{background-color:#666}button.enabled{background-color:#69c}button.disabled{pointer-events:none;color:#333;background-color:#666}",""])},function(e,t,r){(function(t){function n(e){return Object.keys(e).filter(function(t){return e[t]}).join(" ")}function i(e){return e?e.getFullYear()-1911+"-"+("0"+(e.getMonth()+1)).substr(-2)+"-"+("0"+e.getDate()).substr(-2):""}function a(e){return e.reduce(function(e,t){return t.dep?e+t.days:e},0)}function o(e,t){t=t.map(function(e){return{dep:e.dep,days:e.days}});for(var r=0,n=t.length-1;n>=0;n--){if(r+t[n].days>365){t[n].days=365-r,t.splice(0,n);break}r+=t[n].days}if(e.qualified=a(t)<183,e.rt=t,e.qualified!=e.dep)e.invertDate=null;else{var i={days:0,dep:e.dep};t.push(i);do t[0].days-=1,0==t[0].days&&t.shift(),i.days+=1;while(e.qualified==a(t)<183);var o=e.date.getTime()+864e5*i.days;e.invertDate=new Date(o)}}function l(e){if(0==e.length)return e;var t=!1,r=!e[0].dep;if(e.forEach(function(e){e.conflict=e.dep==r,e.conflict&&(t=!0),r=e.dep}),t)return e;for(var n=[],i=0;i<e.length-1;i++){var a=Math.round((e[i+1].date.getTime()-e[i].date.getTime())/864e5);n.push({dep:e[i].dep,days:a})}n.unshift({dep:!e[0].dep,days:365});for(var l=null,i=e.length-1;i>=0;i--){var s=e[i];o(s,n.slice(0,i+1)),s.invertDate&&l&&s.invertDate.getTime()>=l.getTime()&&(s.invertDate=null),l=s.date}}r(14);var s=t.createClass({displayName:"Record",toggleRecord:function(){this.props.toggleRecord(this.props.idx)},removeRecord:function(e){(e.ctrlKey||confirm("確定刪除這筆 "+i(this.props.record.date)+" 的資料?"))&&this.props.removeRecord(this.props.idx)},render:function(){var e=this.props.record,r=n({record:!0,dep:e.dep,arr:!e.dep,conflict:e.conflict}),a=n({dep:e.dep,arr:!e.dep}),o=n({status:!0,qualified:e.qualified,empty:this.props.redundant}),l=n({invert:!0,qualified:!e.qualified,empty:null==e.invertDate});return t.createElement("div",{className:r},t.createElement("span",{className:"close",onClick:this.removeRecord}),t.createElement("span",{className:"date"},i(e.date)),t.createElement("span",{className:a,onClick:this.toggleRecord}),t.createElement("div",{className:"qualify"},t.createElement("span",{className:o}),t.createElement("span",{className:l},i(e.invertDate))))}}),c=t.createClass({displayName:"Records",render:function(){var e=this.props.records;if(l(e),e.length>0){var r=!e[0].qualified,n=!1;if(e.length>0){var i=e[0].dep;n=e.some(function(e,t){return e.dep^i^t%2!=0})}}return t.createElement("div",{className:"records"},e.map(function(e,n){var i=e.qualified==r;return r=e.qualified,t.createElement(s,{idx:n,record:e,redundant:i,key:JSON.stringify(e),toggleRecord:this.props.toggleRecord,removeRecord:this.props.removeRecord})}.bind(this)),n?t.createElement("span",{className:"conflict"},"出入境記錄有衝突"):"")}});e.exports=c}).call(t,r(2))},function(e,t,r){var n=r(15);"string"==typeof n&&(n=[[e.id,n,""]]);r(8)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,r){t=e.exports=r(7)(),t.push([e.id,".records{position:relative;width:460px;border:3px solid #666;display:inline-block;margin:32px 0}@media (max-width:768px){.records{border-width:1px;width:316px}}.records .conflict{color:#f96}.record{font-size:18px;position:relative;width:100%;padding:4px 16px;box-sizing:border-box;text-align:left}@media (max-width:768px){.record{font-size:16px;padding:8px;line-height:22px;text-align:center}}.record.dep{background-color:#3a3333}.record.arr{background-color:#333a33}.record.conflict{background-color:#930}.record>span{display:inline-block;text-align:center;vertical-align:middle}.record .date{margin-right:12px}.record .arr,.record .dep{font-size:12px;width:32px;height:20px;line-height:20px;border-radius:4px;color:#000;cursor:pointer;margin-right:12px}@media (max-width:768px){.record .arr,.record .dep{width:30px;height:18px;line-height:18px}}.record .dep{background-color:#f99}.record .dep:before{content:'\\51FA\\5883'}.record .arr{background-color:#9f9}.record .arr:before{content:'\\5165\\5883'}.record.conflict>.close{border:1px solid #fff}.record .close{width:14px;height:14px;margin-right:16px;border:1px solid transparent;border-radius:50%;background-color:#c44;cursor:pointer;display:inline-block;position:relative;opacity:.3}.record .close:hover{opacity:1}@media (max-width:768px){.record .close{opacity:1;margin-right:8px}}.record .close:before{width:8px;height:2px;background-color:#fff;display:block;position:absolute;left:3px;top:6px;content:''}.record .qualify{display:inline-block;font-size:14px}@media (max-width:768px){.record .qualify{font-size:12px;display:block}}.record .qualify>span{display:inline-block;vertical-align:middle}.record .qualify .status:after{content:'\\4E0D\\7B26\\898F\\5B9A'}.record .qualify .status.qualified:after{content:'\\3000\\7B26\\5408\\898F\\5B9A'}.record .qualify .invert:before{content:', '}.record .qualify .invert:after{content:' \\5F8C\\4E0D\\7B26\\898F\\5B9A'}.record .qualify .invert.qualified:after{content:' \\5F8C\\7B26\\5408\\898F\\5B9A'}.record .qualify .invert.empty{display:none}",""])},function(e,t){e.exports={stringify:function(e){var t=e.reduce(function(e,t){var r=t.date,n=r.getFullYear()-2e3;return n=n<<4|r.getMonth(),n=n<<5|r.getDate(),n=n<<1|(t.dep?1:0),e+String.fromCharCode(n>>8&255)+String.fromCharCode(255&n)},"");return btoa(t)},parse:function(e){e=e.replace(/^#/,"");var t=[];try{for(var r=atob(e),n=0;n<r.length;n+=2){var i=r.charCodeAt(n)<<8|r.charCodeAt(n+1),a=(i>>10)+2e3,o=i>>6&15,l=i>>1&31,s=1==(1&i),c=new Date(a,o,l);t.push({date:c,dep:s})}}catch(d){}return t}}}]);