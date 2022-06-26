window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

var elements = document.getElementsByClassName('droppopup')
for (var i = 0; i < elements.length; i++){
    elements[i].style.display = 'none';
}
var elements = document.getElementsByClassName('listitem')
for (var i = 0; i < elements.length; i++){
    elements[i].style.cursor = 'pointer';
    elements[i].classList.add('hovereffect');
}
function openpopup(dropnumber) {
    const popup = document.querySelectorAll("[data-dpu='" + dropnumber + "']")[0]
    const listitem = document.querySelectorAll("[data-dn='" + dropnumber + "']")[0]
    popup.style.opacity = 0;
    popup.style.display = '';
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    popup.style.top = scrollTop + 'px';
    try {
        listitem.style.cursor = 'default';
        listitem.removeAttribute("onclick");
        listitem.classList.remove('hovereffect');
    } catch (error) {
        console.log("About button pushed...");
    }
    document.body.style.overflow = 'hidden';
    anime({
        targets: "[data-dpu='" + dropnumber + "']",
        duration: 250,
        easing: 'linear',
        opacity: 1
    });
}

function closepopup(dropnumber) {
    anime({
        targets: "[data-dpu='" + dropnumber + "']",
        duration: 250,
        easing: 'linear',
        opacity: 0,
        complete: function() {
            const popup = document.querySelectorAll("[data-dpu='" + dropnumber + "']")[0]
            const listitem = document.querySelectorAll("[data-dn='" + dropnumber + "']")[0]
            popup.style.display = 'none';
            try {
                listitem.style.cursor = 'pointer';
                listitem.setAttribute("onclick", "openpopup('" + dropnumber + "')");
                listitem.classList.add('hovereffect');
            } catch (error) {
                console.log("About page closed...");
            }
            document.body.style.overflow = '';
        }
    });
}