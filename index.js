const nextEle = document.getElementById("load_next");
const prevEle = document.getElementById("load_prev");
const resultEle = document.getElementById("result");
let page = 1;
const unorderEle = document.getElementById("unordered");
function showData(){
    fetch("https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5")
    .then((res)=>res.json())
    .then(res => {
        // console.log(page);
        resultEle.innerHTML = JSON.stringify(res[page-1]);
    })
}
showData();

function updateData(){
    if(this.id == "load_next"){
        page = (page == 5)? 5: page+1;
    }
    else{
        page = (page == 1) ? 1 : page-1;
    }
    showData();
}
nextEle.addEventListener("click",updateData);
prevEle.addEventListener("click",updateData);

