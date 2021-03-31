items = document.querySelectorAll(".web3")
items[0].style.display = "block";

index = 0
function next(){
    index++;
    if (index == items.length) index = 0

    changeItem()

}

function previous(){
    index--;
    if (index == -1) index = 2

    changeItem()
}

function changeItem(){
    for (i = 0; i < items.length; i++){
        items[i].style.display = "none";
        items[index].classList.remove("active");
    }

    items[index].style.display = "block";
    items[index].classList.add("active");
}


document.querySelector("#next").addEventListener("click", next)
document.querySelector("#previous").addEventListener("click", previous)
