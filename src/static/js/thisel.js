
  const elLoadingCSS = `:host{display:block}:host{position:fixed;padding:0;margin:0;top:0;left:0;font-size:2rem;width:100%;height:100%;visibility:hidden;background:var(--primary-color,#000);color:#ffff;-o-object-fit:cover;object-fit:cover;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:99999999;-webkit-transition:opacity ease-in .1s;-o-transition:opacity ease-in .1s;transition:opacity ease-in .1s;-webkit-animation-name:show;animation-name:show;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes show{0%{visibility:visible;opacity:1}90%{visibility:visible;opacity:1}100%{visibility:hidden;opacity:0;z-index:0}}@keyframes show{0%{visibility:visible;opacity:1}90%{visibility:visible;opacity:1}100%{visibility:hidden;opacity:0;z-index:0}}`;
  const elLoadingHTML = `<slot><slot name="loading"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:none"> <circle cx="50" cy="50" r="33.008" fill="none" stroke="var(--color-white, gray)" stroke-width="4"> <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur=".9" keySplines="0 0.2 0.8 1" begin="-0.45s" repeatCount="indefinite"/> <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur=".9" keySplines="0.2 0 0.8 1" begin="-0.45s" repeatCount="indefinite"/> </circle> <circle cx="50" cy="50" r="13.404" fill="none" stroke="var(--color-primary, white)" stroke-width="4"> <animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur=".9" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/> <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur=".9" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/> </circle> </svg></slot></slot>`;
  const elLoadingTemplate = document.createElement("template");
  elLoadingTemplate.innerHTML = `<style>`.concat(elLoadingCSS, `</style>`).concat(elLoadingHTML);
  // defines el-loading tag.
  customElements.define('el-loading',
      class elLoading extends HTMLElement {
          constructor() {
              super();
              let _thisElLoading = this;
              // open shadowRoot.
              const shadowRoot = _thisElLoading.attachShadow({
                  mode: "open"
              });
              // clone template. 
              shadowRoot.appendChild(elLoadingTemplate.content.cloneNode(!0));
              return _thisElLoading;
          }
          connectedCallback() {
              let elLoading = this;
              // inject css attributes.
              const _elLoadings = document.querySelectorAll('el-loading');
              _elLoadings.forEach(_elLoading => {
                  elLoading.hasAttribute("background") && (
                      elLoading.styleBackground = elLoading.getAttribute("background"),
                      elLoading.style.background = elLoading.styleBackground ? elLoading.styleBackground : null
                  )
                  elLoading.hasAttribute("color") && (
                      elLoading.styleColor = elLoading.getAttribute("color"),
                      elLoading.style.color = elLoading.styleColor ? elLoading.styleColor : null
                  )
                  elLoading.hasAttribute("duration") && (
                      elLoading.styleAnimationDuration = elLoading.getAttribute("duration") + "s",
                      elLoading.style.animationDuration = elLoading.styleAnimationDuration ? elLoading.styleAnimationDuration : null
                  );
              })
          }
      }
  );
  
  
  
  // create el-button template.
  const elButtonCSS = `:host{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden;top:0;left:0;border-radius:2px;min-width:150px;width:100%;max-width:300px;height:50px;font-family:var(--font-family-content);--color-active:#396afc;--color-active:-webkit-linear-gradient(to bottom, #2948ff, #396afc);--color-active:linear-gradient(to bottom, #2948ff, #396afc);--color-hover:#0080ff}:host(.auto){grid-column:1/-1;margin:auto;text-align:center;width:100%;height:100%}:host:before{content:'';position:absolute;display:block;background:var(--color-ripple,#fff);border-radius:50%;pointer-events:none;top:calc(var(--y) * 1px);left:calc(var(--x) * 1px);width:calc(var(--d) * 1px);height:calc(var(--d) * 1px);opacity:calc(var(--o,1) * var(--ripple-opacity,.6));-webkit-transition:calc(var(--t,0) * var(--ripple-duration,100ms)) var(--ripple-easing,linear);-webkit-transition:calc(var(--t,0) * var(--ripple-duration,400ms)) var(--ripple-easing,linear);-o-transition:calc(var(--t,0) * var(--ripple-duration,400ms)) var(--ripple-easing,linear);transition:calc(var(--t,0) * var(--ripple-duration,400ms)) var(--ripple-easing,linear);-webkit-transform:translate(-50%,-50%) scale(var(--s,1));-ms-transform:translate(-50%,-50%) scale(var(--s,1));transform:translate(-50%,-50%) scale(var(--s,1));-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center}::slotted(*){outline:0;padding:1rem;cursor:pointer;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;letter-spacing:normal;word-spacing:normal;text-rendering:auto;text-decoration:none;text-align:inherit;text-transform:uppercase!important;font-weight:700;font-size:1em;white-space:normal;cursor:pointer;-webkit-transition:ease-in-out .5s;-o-transition:ease-in-out .5s;transition:ease-in-out .5s background: #ecececaa;color:gray!important;border:1px solid #ecececaa}::slotted(:hover){background:#c8c8c8;color:var(--color-black,#000)!important;border:1px solid var(--color-black,#000)}::slotted(:active){background:#fff;color:var(--color-black,#000)!important;border:1px solid var(--color-black,#000)}::slotted(.el-btn){background:0 0;color:gray!important;border:1px solid gray}::slotted([class*=el-btn]:hover){color:var(--color-hover,#000)!important;border:1px solid var(--color-hover,#000)!important}::slotted([class*=el-btn]:active){background-image:var(--color-active,#000)!important;color:var(--color-white,#fff)!important}::slotted(.el-btn-1){background:var(--color-secondary,#000)!important;color:var(--color-white,#fff)!important;border:1px solid var(--color-secondary,#000)}::slotted(.el-btn-1:hover){background:var(--color-hover,#000);color:var(--color-primary,#fff)!important;border:1px solid var(--color-primary,#000)!important}::slotted(.el-btn-2){background:0 0;color:var(--color-secondary,#000)!important;border:1px solid var(--color-secondary,#000)}::slotted(.el-btn-2:hover){background:var(--color-hover,#000);color:var(--color-white,#fff)!important;border:1px solid var(--color-primary,#000)}::slotted(.el-btn-3){background:var(--color-tertiary,#000)!important;color:var(--color-primary,#000)!important;border:1px solid var(--color-primary,#000)!important}::slotted(.el-btn-3:hover){background:var(--color-hover,#000);color:var(--color-white,#fff)!important;border:1px solid var(--color-primary,#000)!important}::slotted(.el-btn-4){background:0 0;color:var(--color-tertiary,#000)!important;border:1px solid var(--color-tertiary,#000)!important}::slotted(.el-btn-4:hover){background:0 0;color:var(--color-tertiary,#000)!important;border:1px solid var(--color-tertiary,#000)!important}::slotted(.el-btn-4:active){color:var(--color-white,#000)!important}::slotted(.el-btn-5){background:var(--color-quaternary,#000)!important;color:var(--color-primary,#000)!important;border:1px solid var(--color-primary,#000)!important}::slotted(.el-btn-5:hover){color:var(--color-white,#fff)!important;border:1px solid var(--color-primary,#000)!important}::slotted(.el-btn-au){width:auto;min-width:auto;overflow:visible;height:auto}::slotted(.el-btn-sm){min-width:150px}::slotted(.el-btn-md){min-width:250px}::slotted(.el-btn-lg){min-width:300px}`;
  const elButtonHTML = `<slot name="button"></slot>`;
  const elButtonTemplate = document.createElement("template");
  elButtonTemplate.innerHTML = `<style>`.concat(elButtonCSS, `</style>`).concat(elButtonHTML);
  // define el-button tag.
  customElements.define('el-button',
      class elButton extends HTMLElement {
          constructor() {
              super();
              let _thisElButton = this;
              // open shadowRoot.
              const shadowRoot = _thisElButton.attachShadow({
                  mode: "open"
              });
              // clone template. 
              shadowRoot.appendChild(elButtonTemplate.content.cloneNode(!0));
              return _thisElButton;
          }
          connectedCallback() {
  
              const _elButtons = document.querySelectorAll('el-button');
              // inject ripple effect
              [].map.call(_elButtons, elButton => {
                  elButton.addEventListener('click', e => {
                      e = e.touches ? e.touches[0] : e;
                      const r = elButton.getBoundingClientRect(),
                          d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 1;
                      elButton.style.cssText = `--s: 0; --o: 1;`;
                      elButton.offsetTop;
                      elButton.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
                  })
              })
          }
      }
  );
  