import {marked} from "https://cdnjs.cloudflare.com/ajax/libs/marked/18.1.2/lib/marked.esm.js";

const mdInput = document.getElementById("md-input");
const previewCont = document.querySelector(".preview .content");

mdInput.addEventListener("input", (e) => {
    const rawMd = e.target.value;
    previewCont.innerHTML = marked.parse(rawMd);
});