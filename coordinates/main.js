'use strict';

const target = document.querySelector('#target');
const tag = document.querySelector('.tag');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const targetMove = window.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
      
    console.log(x, y);
      
    target.style.position =  "absolute";
    target.style.left =  `${x}px`;
    target.style.top = `${y}px`;

    tag.innerHTML = `${x}px, ${y}`;
    tag.style.left =  `${x}px`;
    tag.style.top = `${y}px`;

    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
});

