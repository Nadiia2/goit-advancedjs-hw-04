import{a as S,S as w,i as m}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $=15,E="https://pixabay.com/api",M="43435649-9580751e4a32127232b1b0155";async function f(e,r=1){try{return(await S.get(`${E}/?key=${M}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${$}&page=${r}`)).data.hits}catch(s){throw new Error(s.message)}}function p(e){return e.map(({webformatURL:r,largeImageURL:s,tags:n,likes:t,views:o,comments:i,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${n}"
            width="360"
          />
        </a>
        <div class="info">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${t}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${o}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${i}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${v}</p>
          </div>
        </div>
      </li>`).join("")}const g=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=document.querySelector("#next-btn"),y=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,captions:!0,captionSelector:"img",captionType:"attr"});let d=1,a="";g.addEventListener("submit",P);h.addEventListener("click",T);function P(e){if(e.preventDefault(),a=e.currentTarget.elements.input.value.trim(),!a){u("Search field can not be empty!");return}l.classList.remove("is-hidden"),d=1,c.innerHTML="",f(a,d).then(r=>{if(r.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}c.innerHTML=p(r),y.refresh(),g.elements.input.value="",q(),b()}).catch(L).finally(()=>l.classList.add("is-hidden"))}function T(){l.classList.remove("is-hidden"),d++,f(a,d).then(e=>{if(e.length===0||e.length<15){k(),u("We're sorry, but you've reached the end of search results.");return}const r=p(e);c.insertAdjacentHTML("beforeend",r),y.refresh(),b()}).catch(L).finally(()=>l.classList.add("is-hidden"))}function u(e){m.show({theme:"light",message:e,messageSize:"20px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:7e3})}function L(e){console.error(e),c.innerHTML="",m.show({theme:"dark",message:"Sorry, there is a problem with connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:7e3})}function q(){h.classList.remove("is-hidden")}function k(){h.classList.add("is-hidden")}function b(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
