'use strict';
const div = document.getElementById('regex');
const btn = document.getElementById('btn');

btn.onclick = () => {
    div.textContent = div.textContent.replace(/'/g, '"');
    div.textContent = div.textContent.replace(/\B'|'\B/g, '"');
}