import{a as w,S as q,i as m}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const P="https://pixabay.com/api",$="43435649-9580751e4a32127232b1b0155";async function p(t,r,o){const i=new URLSearchParams({key:$,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:o,page:r});return(await w.get(`${P}/?${i}`)).data.hits}function y(t){return t.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:s,comments:a,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${i}"
            width="360"
          />
        </a>
        <div class="info">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${e}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${s}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${a}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${S}</p>
          </div>
        </div>
      </li>`).join("")}const u=document.querySelector(".form"),d=document.querySelector(".gallery"),g=document.querySelector(".loader"),l=document.querySelector("#next-btn"),v=new q(".gallery a",{captionsData:"alt",captionDelay:250});let n=1,h="",c=!1;u.addEventListener("submit",x);l.addEventListener("click",C);async function x(t){t.preventDefault();const r=u.querySelector("input").value.trim();if(!r){f("Please, fill in the search field");return}h!==r&&(n=1,h=r,d.innerHTML="");try{const o=await p(r,n,15);o.length===0?f("Sorry, there are no images matching your search query. Please try again!"):(d.innerHTML+=y(o),v.refresh(),o.length>=15?l.classList.remove("is-hidden"):l.classList.add("is-hidden"),b(),n++),u.querySelector("input").value=""}catch(o){L(o)}}async function C(){if(!c){c=!0,g.classList.remove("is-hidden");try{const t=await p(h,n);t.length===0?(l.classList.add("is-hidden"),m.show({theme:"light",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:5e3})):(d.innerHTML+=y(t),v.refresh(),n++,b())}catch(t){L(t)}finally{c=!1,g.classList.add("is-hidden")}}}function f(t){m.show({theme:"light",message:t,messageSize:"16px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:5e3})}function L(t){console.error(t),m.show({theme:"light",message:"Sorry, there is a problem with the connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:7e3})}function b(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
