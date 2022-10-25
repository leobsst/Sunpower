window.addEventListener("scroll", function(event) {

    let y = this.scrollY;
    console.log(y);
    const SizeNavBar = document.getElementById("navbar");
    if (y >= 500) {
        SizeNavBar.classList.add("scrolled");
    }
    else {
        SizeNavBar.classList.remove("scrolled");
    }
  
}, false);



  