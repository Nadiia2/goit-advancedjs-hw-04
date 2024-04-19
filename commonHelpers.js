import{a as w,S as M,i as y}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $=15,E="https://pixabay.com/api",T="43435649-9580751e4a32127232b1b0155";async function L(e,r=1){try{return(await w.get(`${E}/?key=${T}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${$}&page=${r}`)).data.hits}catch(s){throw new Error(s.message)}}function l(e){return e.map(({webformatURL:r,largeImageURL:s,tags:a,likes:t,views:o,comments:i,downloads:S})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${a}"
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
      </li>`).join("")}const f=document.querySelector(".form"),n=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=document.querySelector("#next-btn"),d=new M(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,captions:!0,captionSelector:"img",captionType:"attr"});let h=1,c="";f.addEventListener("submit",P);g.addEventListener("click",H);function P(e){if(e.preventDefault(),c=e.currentTarget.elements.input.value.trim(),!c){p("Search field can not be empty!");return}u.classList.remove("is-hidden"),h=1,n.innerHTML="",L(c,h).then(r=>{if(r.length===0||r.length<15){v(),p("Sorry, there are no images matching your search query. Please try again!"),n.innerHTML=l(r),d.refresh(),f.elements.input.value="",m();return}n.innerHTML=l(r),d.refresh(),f.elements.input.value="",k(),m()}).catch(b).finally(()=>u.classList.add("is-hidden"))}function H(){u.classList.remove("is-hidden"),h++,L(c,h).then(e=>{if(e.length===0||e.length<15){v(),p("We're sorry, but you've reached the end of search results.");const s=l(e);n.insertAdjacentHTML("beforeend",s),d.refresh(),m();return}const r=l(e);n.insertAdjacentHTML("beforeend",r),d.refresh(),m()}).catch(b).finally(()=>u.classList.add("is-hidden"))}function p(e){y.show({theme:"light",message:e,messageSize:"20px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:7e3})}function b(e){console.error(e),n.innerHTML="",y.show({theme:"dark",message:"Sorry, there is a problem with connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:7e3})}function k(){g.classList.remove("is-hidden")}function v(){g.classList.add("is-hidden")}function m(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
