import{r,c,o as u,a as p,b as x,d as t,t as f}from"./index-bc4393dd.js";const y={class:"mx-auto container my-5 px-9 py-5 justify-center"},g={class:"max-w-lg mx-auto rounded overflow-hidden shadow-sm px-3 py-5 my-16 bg-white"},b=["value"],v={class:"flex justify-center my-16"},w={__name:"HomeView",setup(h){const o=r(!1),a=r(""),l=c(()=>o.value?"已複製":"複製"),d=()=>{const e=new Uint8Array(16);window.crypto.getRandomValues(e);const i=String.fromCharCode.apply(null,e);return btoa(i).substring(0,16)},n=()=>{a.value=d()},m=async()=>{if(!navigator.clipboard){alert("您的瀏覽器不支援複製功能，請手動複製");return}try{await navigator.clipboard.writeText(a.value),o.value=!0,setTimeout(()=>{o.value=!1},3e3)}catch(s){console.error(s),alert("複製失敗，請手動複製")}};return u(()=>{n()}),(s,e)=>(p(),x("div",y,[t("div",g,[e[0]||(e[0]=t("h2",{class:"font-semibold text-slate-900 text-lg"}," 隨機密碼 ",-1)),e[1]||(e[1]=t("p",{class:"font-normal text-slate-900 text-sm"}," 這是一個隨機密碼產生器，點擊下方按鈕即可產生一組隨機密碼。 ",-1)),t("input",{class:"w-full my-5 rounded-full bg-slate-100 px-2 py-1 text-md font-semibold text-slate-700",type:"text",readonly:"",value:a.value},null,8,b)]),t("div",v,[t("button",{class:"flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-100 bg-emerald-700 hover:bg-emerald-600 md:py-4 md:text-lg md:px-10",onClick:n}," 生成 "),t("button",{class:"flex mx-3 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10",onClick:m},f(l.value),1)])]))}};export{w as default};