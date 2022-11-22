


export const optionMenu = document.querySelector("select-menu"),
  selectBtn = optionMenu.querySelector("select-btn"),
  options = optionMenu.querySelector("options"),
  sBtn_text = options.querySelector("sBtn_text");
  
  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
  
   options.forEach(option => {
      
      option.addEventListener("click", () => {
          let selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
          
  
          optionMenu.classList.remove("active")
      })
  })
