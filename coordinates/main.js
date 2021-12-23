'use strict';

const target = document.querySelector('#target');
const tag = document.querySelector('.tag');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

addEventListener('load', () => {
    // 성능 개선 추가 수정
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    const targetMove = window.addEventListener('mousemove', event => {
        const x = event.clientX;
        const y = event.clientY;
        
        console.log(x, y);
        
        // target.style.position =  "absolute";
        // target.style.left =  `${x}px`;
        // target.style.top = `${y}px`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;

        tag.innerHTML = `${x}px, ${y}`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        // tag.style.left =  `${x}px`;
        // tag.style.top = `${y}px`;

        // horizontal.style.top = `${y}px`;
        // vertical.style.left = `${x}px`;
        horizontal.style.transform = `translateY(${y}px)`;
        vertical.style.transform = `translateX(${x}px)`;
    });
});

