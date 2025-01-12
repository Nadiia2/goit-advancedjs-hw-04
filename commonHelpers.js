import{a as $,S as E,i as f}from"./assets/vendor-6e0bf343.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const M=15,P="https://pixabay.com/api",T="43435649-9580751e4a32127232b1b0155";async function p(e,r=1){try{return(await $.get(`${P}/?key=${T}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${M}&page=${r}`)).data.hits}catch(s){throw new Error(s.message)}}function g(e){return e.map(({webformatURL:r,largeImageURL:s,tags:c,likes:t,views:o,comments:n,downloads:w})=>`<li class="gallery-item">
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
            <p class="amount">${n}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${w}</p>
          </div>
        </div>
      </li>`).join("")}const y=document.querySelector(".form"),d=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=document.querySelector("#next-btn"),b=new E(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,captions:!0,captionSelector:"img",captionType:"attr"});let h=1,l="";y.addEventListener("submit",q);m.addEventListener("click",k);function q(e){if(e.preventDefault(),l=e.currentTarget.elements.input.value.trim(),!l){i("Search field can not be empty!");return}a(),u.classList.remove("hidden-loader"),h=1,d.innerHTML="",p(l,h).then(r=>{if(r.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}r.length<15?(i("We're sorry, but you've reached the end of search results."),a()):L(),d.innerHTML=g(r),b.refresh(),y.elements.input.value="",S()}).catch(v).finally(()=>{u.classList.add("hidden-loader")})}function k(){a(),u.classList.remove("hidden-loader"),h++,p(l,h).then(e=>{if(e.length===0){a(),i("We're sorry, but you've reached the end of search results.");return}e.length<15?(a(),i("We're sorry, but you've reached the end of search results.")):L();const r=g(e);d.insertAdjacentHTML("beforeend",r),b.refresh(),S()}).catch(v).finally(()=>{u.classList.add("hidden-loader")})}function i(e){f.show({theme:"light",message:e,messageSize:"20px",messageColor:"#f80303",backgroundColor:"#ebe268",position:"topRight",timeout:7e3})}function v(e){console.error(e),d.innerHTML="",f.show({theme:"dark",message:"Sorry, there is a problem with connection to the server.",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:7e3})}function L(){m.classList.remove("is-hidden")}function a(){m.classList.add("is-hidden")}function S(){const e=document.querySelector(".gallery-item").offsetHeight;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
