//console.log(document.head);
//console.log(document.body);

//console.log(document.documentElement);

//console.log(document.body.childNodes);

//console.log(document.body.firstChild); //firstElementChild
//console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentNode); // родительский узел, можно получать много родителей по иерархии parentElement

console.log(document.querySelector('[data-current = "3"]').nextSibling); //соседи след.
console.log(document.querySelector('[data-current = "3"]').previousSibling); //предыдущий сосед - текст узел 

console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // элементы рядом 

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}