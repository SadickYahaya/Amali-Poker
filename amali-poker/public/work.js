const optionMenu = document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_text = document.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option =>{
    option.addEventListener("click", ()=>{
let selcetedOption = option.querySelector(".option").innerHTML;
sBtn_text.innerText = selcetedOption;
        console.log( selcetedOption)
    })

})