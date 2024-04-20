import{a as w,S as M,i as L}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $=15,E="https://pixabay.com/api",T="43435649-9580751e4a32127232b1b0155";async function b(e,r=1){try{return(await w.get(`${E}/?key=${T}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${$}&page=${r}`)).data.hits}catch(s){throw new Error(s.message)}}function u(e){return e.map(({webformatURL:r,largeImageURL:s,tags:c,likes:t,views:o,comments:i,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${c}"
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
            <p class="amount">${S}</p>
          </div>
        </div>
      </li>`).join("")}const g=document.querySelector(".form"),n=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=document.querySelector("#next-btn"),h=new M(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,captions:!0,captionSelector:"img",captionType:"attr"});let m=1,l="";g.addEventListener("submit",P);y.addEventListener("click",H);function P(e){if(e.preventDefault(),l=e.currentTarget.elements.input.value.trim(),!l){a("Search field can not be empty!");return}d.classList.remove("is-hidden"),m=1,n.innerHTML="",b(l,m).then(r=>{if(r.length===0){f(),a("Sorry, there are no images matching your search query. Please try again!");return}if(r.length<15){f(),a("We're sorry, but you've reached the end of search results."),n.innerHTML=u(r),h.refresh(),g.elements.input.value="",p();return}n.innerHTML=u(r),h.refresh(),g.elements.input.value="",k(),p()}).catch(v).finally(()=>d.classList.add("is-hidden"))}function H(){d.classList.remove("is-hidden"),m++,b(l,m).then(e=>{if(e.length===0){f(),a("We're sorry, but you've reached the end of search results.");return}if(e.length<15){f(),a("We're sorry, but you've reached the end of search results.");const s=u(e);n.insertAdjacentHTML("beforeend",s),h.refresh(),p();return}const r=u(e);n.insertAdjacentHTML("beforeend",r),h.refresh(),p()}).catch(v).finally(()=>d.classList.add("is-hidden"))}function a(e){L.show({theme:"light",message:e,messageSize:"20px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:7e3})}function v(e){console.error(e),n.innerHTML="",L.show({theme:"dark",message:"Sorry, there is a problem with connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:7e3})}function k(){y.classList.remove("is-hidden")}function f(){y.classList.add("is-hidden")}function p(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
