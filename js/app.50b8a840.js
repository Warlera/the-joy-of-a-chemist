(function(){"use strict";var t={300:function(t,e,r){var i=r(963),o=r(252),n=r(577);const a={class:"container"},l=(0,o._)("div",null,[(0,o._)("p",null,"- вставьте текст в желтое поле и переместите мышь в любом направлении в пределах поля"),(0,o._)("p",null,"- исправленный вариант появится в зеленом поле"),(0,o._)("p",null,"- кликните в любое меcто зеленого поля и исправленный вариант скопируется в буфер обмена"),(0,o._)("p",null,"- вставьте исправленный вариант (ctrl+V)"),(0,o._)("p",null,"- наслаждайтесь")],-1);function s(t,e,r,s,c,h){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",null,[(0,o.wy)((0,o._)("textarea",{onMousemove:e[0]||(e[0]=t=>h.printTextBySymbol(c.text)),"onUpdate:modelValue":e[1]||(e[1]=t=>c.text=t)},null,544),[[i.nr,c.text]])]),(0,o._)("div",{class:"copiBlock",onClick:e[2]||(e[2]=t=>h.copyToClipBoard())},(0,n.zw)(c.ForIteration),1),l])}var c={data(){return{text:"(E/Z)-3-(2-(4,8-dimethylnon-3-en-l-yl)-l,3-dioxolan-4-yl)-l- phenylpropan-l-one",FirstIteration:"",TwoIteration:"",TreeIteration:"",ForIteration:"",count:0,myText:"Текст для копирования"}},methods:{copyToClipBoard(){navigator.clipboard.writeText(this.ForIteration),this.text=""},printTextBySymbol(t){this.FirstIteration="",this.text=this.text.replace(/ /g,"").replace(/cvc/g,"cyc").replace(/fert/g,"tert").replace(/terf/g,"tert").replace(/ferf/g,"tert").replace(/imld/g,"imid").replace(/hvd/g,"hyd").replace(/aIdehyde/g,"aldehyde").replace(/aidehyde/g,"aldehyde").replace(/ainin/g,"amin").replace(/zoio/g,"zolo").replace(/zoIo/g,"zolo").replace(/iinidazo/g,"imidazo").replace(/rneth/g,"meth").replace(/iniid/g,"imid").replace(/suif/g,"sulf").replace(/l^/g,"1,5").replace(/—/g,"-").replace(/\/7/g,"H").replace(/\/V/g,"N").replace(/\/v/g,"N").replace(/\/\\\//g,"N");for(let r=0;r<t.length;r++)" "==t[r]?this.count=this.count+1:"i"!=t[r]&&"I"!=t[r]||!("y"==t[r-1]||"o"==t[r-1]&&"e"==t[r+1]||"c"==t[r-1]&&"y"==t[r-2]&&"c"==t[r-3]&&"o"==t[r+1]||"o"==t[r-1]&&"-"==t[r+1]||"o"==t[r-1]&&"‐"==t[r+1]||"o"==t[r-1]&&")"==t[r+1]||"o"==t[r-1]&&r==t.length-1||"f"==t[r-1]&&"u"==t[r+1]&&"o"==t[r+2]&&"r"==t[r+3]||"c"==t[r-2]&&"h"==t[r-1]&&"o"==t[r+1]&&"r"==t[r+2])?"l"!=t[r]||(0!=r||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1])&&("-"!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&("‐"!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&("("!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&("["!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&("{"!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&(","!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&(" "!=t[r-1]||"-"!=t[r+1]&&"‐"!=t[r+1]&&","!=t[r+1]&&"H"!=t[r+1]&&"R"!=t[r+1]&&"S"!=t[r+1]&&"E"!=t[r+1]&&"Z"!=t[r+1]&&"r"!=t[r+1]&&"s"!=t[r+1])&&"H"!=t[r+1]?"-"!=t[r]&&"‐"!=t[r]||")"!=t[r-1]&&"]"!=t[r-1]&&"}"!=t[r-1]||"("==t[r-3]||","==t[r-3]||!isNaN(t[r-3])||!isNaN(t[r+1])||"("==t[r+1]||"H"==t[r+2]||"R"==t[r+2]||"S"==t[r+2]||"E"==t[r+2]||"Z"==t[r+2]||"-"==t[r+2]||"‐"==t[r+2]||"{"==t[r+1]||"["==t[r+1]||"R"==t[r+1]||"S"==t[r+1]||"N"==t[r+1]||"O"==t[r+1]?"|"==t[r]&&"o"==t[r-1]?this.FirstIteration=this.FirstIteration+"[":"l"==t[r]&&"|"==t[r-1]?this.FirstIteration=this.FirstIteration+"1":"|"==t[r]&&"p"==t[r+1]||"J"==t[r]?this.FirstIteration=this.FirstIteration+"]":this.FirstIteration=this.FirstIteration+t[r]:this.FirstIteration=this.FirstIteration+"":this.FirstIteration=this.FirstIteration+"1":this.FirstIteration=this.FirstIteration+"l";this.TwoIteration=this.FirstIteration,this.TreeIteration="";for(let r=0;r<this.TwoIteration.length;r++)r==this.TwoIteration.length-1&&"e"==this.TwoIteration[r]&&"t"==this.TwoIteration[r-1]&&"a"==this.TwoIteration[r-2]?(this.TreeIteration=this.TreeIteration+this.TwoIteration[r],this.TreeIteration=this.TreeIteration.replace(/yl/,"yl ")):this.TreeIteration=this.TreeIteration+this.TwoIteration[r];this.ForIteration="";let e=this.TreeIteration.replace(/acid/g," acid").replace(/bromide/g," bromide").replace(/chloride/g," chloride").replace(/iodide/g," iodide").replace(/fluoride/g," fluoride").replace(/fhior/g,"fluor").replace(/aniin/g,"amin").replace(/amld/g,"amid").replace(/chior/g,"chlor").replace(/arnino/g,"amino").replace(/hydro chloride/g," hydrochloride").replace(/\)1/g,")-1");for(let r=0;r<e.length;r++)"N"==e[r]?this.ForIteration=this.ForIteration+"N":e[r]==e[r].toUpperCase()&&("H"!=e[r]&&"R"!=e[r]&&"S"!=e[r]&&"E"!=e[r]&&"Z"!=e[r]&&"N"!=e[r]||")"!=e[r+1]&&","!=e[r+1]&&"-"!=e[r+1]&&"‐"!=e[r+1]&&"/"!=e[r+1])?this.ForIteration=this.ForIteration+e[r].toLowerCase():this.ForIteration=this.ForIteration+e[r]}}},h=r(744);const p=(0,h.Z)(c,[["render",s]]);var u=p;(0,i.ri)(u).mount("#app")}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,n){if(!i){var a=1/0;for(h=0;h<t.length;h++){i=t[h][0],o=t[h][1],n=t[h][2];for(var l=!0,s=0;s<i.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[s])}))?i.splice(s--,1):(l=!1,n<a&&(a=n));if(l){t.splice(h--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var h=t.length;h>0&&t[h-1][2]>n;h--)t[h]=t[h-1];t[h]=[i,o,n]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,a=i[0],l=i[1],s=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var h=s(r)}for(e&&e(i);c<a.length;c++)n=a[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(h)},i=self["webpackChunkthe_joy_of_a_chemist"]=self["webpackChunkthe_joy_of_a_chemist"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(300)}));i=r.O(i)})();
//# sourceMappingURL=app.50b8a840.js.map