function rm_observador_premium_placeholders() {
    [].forEach.call(document.querySelectorAll(".premium-paywall"), function(el) {
        if (el != null) {
            el.remove();
        }
    });

    [].forEach.call(document.querySelectorAll(".article-body-wrapper"), function(el) {
        el.classList.remove("block-article");
        el.removeAttribute("style")
    });

}



if (window.location.href.includes("observador.pt")) {
    rm_observador_premium_placeholders()
}
else {
    console.log("Not implemented for " + window.location.href)
}
