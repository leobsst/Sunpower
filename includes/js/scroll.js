window.addEventListener("scroll", function(event) {

    let y = this.scrollY;
    const SizeNavBar = document.getElementById("navbar");
    if (y >= 100) {
        SizeNavBar.classList.add("scrolled");
    }
    else {
        SizeNavBar.classList.remove("scrolled");
    }
  
}, false);



  