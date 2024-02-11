document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const spanEl = question.querySelector("span");
    
  
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Yay, see you on the 14th!";
      gif.src = "hamilton-jonathan-groff.gif";
      noBtn.style.display="none";
      yesBtn.style.display="none";
    });
  
    noBtn.addEventListener("mouseover", () => {
        spanEl.innerHTML = "Joker!";

      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
  
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      function handleNoBtnClick() {
        const screenWidth = window.innerWidth;
      
        if (screenWidth >= 768) {
          // Apply style only on desktop screens
          noBtn.style.width = "10%";
        }
      }
      
      handleNoBtnClick()

      noBtn.style.position="fixed";
     
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
    });
  });
  