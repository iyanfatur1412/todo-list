const teks = document.getElementById("teks"),
      btn = document.getElementById("btn"),
      list = document.querySelector(".list");

let li = "";
let edit = false;
let i;

btn.addEventListener("click", function() {
    addList();
})

teks.addEventListener("keydown", function(e) {
    if(e.key == "Enter") {
        addList();
    }
})

function el(input) {
    return `<li>
    <p class="plan">${input}</p>
    <p>
        <span class="edit">edit</span>
        <span class="hapus">x</span>
    </p>
    </li>`
}



function addList() {
    if(teks.value == "") {
        alert("Fill your plan in the text field!");
    }
    else if(edit == true) {
        list.children[i].children[0].innerHTML = teks.value;
        li = list.innerHTML;
        teks.value = "";
        edit = false;
    }
    else {
        li += el(teks.value);
        list.innerHTML = li;
        const items = document.querySelectorAll(".list li");
        items[items.length - 1].style.animation = "slide .8s ease forwards";
        setTimeout(() => {
            items[items.length - 1].style.animation = "none";
        }, 1000)
        teks.value = "";
        deleted();
        edited();
    }
}


function deleted() {
    let hapus = Array.from(document.querySelectorAll(".hapus"));
    hapus.map( el => {
        el.addEventListener("click", function() {
            this.parentElement.parentElement.style.animation = "slideOut .4s ease-out forwards";
            setTimeout(() => {
                this.parentElement.parentElement.remove();
                li = list.innerHTML;
            }, 500)
        })
    })
}

function edited() {
    let elSpanEdit = Array.from(document.querySelectorAll(".edit"));
    elSpanEdit.map((item, index) => {
        item.addEventListener("click", function() {
            edit = true;
            teks.value = item.parentElement.previousElementSibling.innerHTML;
            i = index;
        })
    })
}