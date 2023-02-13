
                            //  navbar responsive
const toggleBtn = document.querySelector(".toggle_btn")
const toggleIcon = document.querySelector(".toggle_btn i")
const dropDown = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function () {
  dropDown.classList.toggle("open")
  const isOpen = dropDown.classList.contains("open")

  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

                        //  accordion
const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});


                    