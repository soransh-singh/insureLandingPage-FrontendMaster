window.addEventListener("load",(e)=>{
  const btns = document.querySelectorAll(".btn");
  const nav = document.querySelector(".nav");
  btns.forEach(btn => {
    btn.addEventListener("click",(event)=>{
      nav.classList.toggle("nav--open")
    });
  });

  console.log(btns);
  console.log(nav);
});
