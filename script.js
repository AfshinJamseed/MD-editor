import {marked} from "https://cdnjs.cloudflare.com/ajax/libs/marked/18.1.2/lib/marked.esm.js";
import dompurify from "https://unpkg.com/dompurify@3.4.17/dist/purify.es.mjs"

const mdInput = document.getElementById("md-input");
const previewCont = document.querySelector(".preview .content");

mdInput.addEventListener("input", (e) => {
    const rawMd = e.target.value;
    const rawHtml = marked.parse(rawMd);
    const cleanHtml = dompurify.sanitize(rawHtml);
    previewCont.innerHTML = cleanHtml;
    hljs.highlightAll();
});
mdInput.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        e.preventDefault();
        document.execCommand("insertText", false, "    ");
    }
});