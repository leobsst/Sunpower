window.addEventListener("scroll", function(event) {

    let y = this.scrollY;
    const SizeNavBar = document.getElementById("navbar");
    const TopBtn = this.document.getElementById("top_btn");
    const BannerTop = document.querySelector(".banner-top img");

    let pos = 5;
    let op = 1;
    let newPos = pos+y/4+"px";
    let newOp = op-y/280;

    BannerTop.style.marginTop = newPos;
    BannerTop.style.opacity = newOp;


    if (y >= 100) {
        SizeNavBar.classList.add("scrolled");
    }
    else {
        SizeNavBar.classList.remove("scrolled");
    }

    if (y >= 500) {
        TopBtn.style.opacity = "0.7";
        TopBtn.style.zIndex = "99";
    }
    else {
        TopBtn.style.opacity = "0";
        TopBtn.style.zIndex = "-1"
    }

    
  
}, false);


function ch_op_b(a) {
    a.style.opacity = "0.9";
}

function ch_op_a(a) {
    a.style.opacity = "0.7"
}

function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


  