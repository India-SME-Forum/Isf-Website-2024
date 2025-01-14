import{c as l,j as e}from"./index-BaO0z_fs.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t=l("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]),n=()=>{const r=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"];return e.jsxs("div",{className:"w-full overflow-hidden 2xl:px-40",children:[e.jsxs("div",{className:"flex items-baseline gap-2 w-full pl-5 text-start mt-4",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Partners"}),e.jsx(t,{className:"w-8 h-7"})]}),e.jsxs("div",{className:"relative overflow-hidden mx-5 py-8",children:[e.jsxs("div",{className:"flex animate-scroll",children:[r.map((a,s)=>e.jsx("div",{className:"flex-shrink-0 w-[200px] h-[200px] px-4",children:e.jsx("img",{src:`partners/${a}`,alt:`Partner ${s+1}`,className:"w-full h-full object-contain hover:scale-105 duration-300 transition-all cursor-pointer"})},`first-${s}`)),r.map((a,s)=>e.jsx("div",{className:"flex-shrink-0   w-[200px] h-[200px] px-4",children:e.jsx("img",{src:`partners/${a}`,alt:`Partner ${s+1}`,className:"w-full h-full object-contain hover:scale-105 duration-300 transition-all cursor-pointer"})},`second-${s}`))]}),e.jsx("style",{children:`
          .animate-scroll {
            animation: scroll 60s linear infinite;
            display: flex;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* Pause animation on hover */

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `})]})]})};export{n as default};
