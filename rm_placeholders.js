const OBSERVADOR = 1;
const NOMIO = 2;
const CRUNCHBASE = 3;
const FORBES = 4;


function rm_observador_premium_placeholders() {
    [].forEach.call(document.querySelectorAll(".premium-paywall"), function (elem) {
        if (elem != null) {
            elem.remove();
        }
    });

    [].forEach.call(document.querySelectorAll(".article-body-wrapper"), function (elem) {
        elem.classList.remove("block-article");
        elem.removeAttribute("style")
    });
}

function rm_nomio_premium_placeholders() {
    // remove premium placeholder
    document.querySelectorAll(".gatting_login")[0].parentElement.parentElement.remove();

    // open all "Read More" btns
    [].forEach.call(document.querySelectorAll(".lerMais a"), function (elem) {
        elem.click()
    });

    // give focus to body (to enable scrolling)
    document.querySelectorAll("body")[0].style.overflow = "visible";
    document.querySelectorAll("html")[0].style.overflow = "visible";
}

function rm_crunch_premium_placeholders() {
    [].forEach.call(document.querySelectorAll(".cdk-overlay-container"), function (elem) {
        if (elem != null) {
            elem.remove();
        }
    });

    // this is the thing preventing scroll
    document.querySelectorAll("html")[0].classList.remove("cdk-global-scrollblock")
}

function rm_forbes_adblock_placeholders() {
    /**
     * This function will not do the job 100% right. They use some lazy loadings on images and this
     * will not perform any action on those.
     * TODO: fix lazy loading
     */
    // remove adblock placeholder
    [].forEach.call(document.querySelectorAll("adblock-modal"), function (elem) {
        elem.remove()
    });

    // give focus to body (to enable scrolling)
    document.querySelectorAll(".article-fixed")[0].style.height = "100%";
    document.querySelectorAll(".article-fixed")[0].style.overflowY = "scroll";
}

console.log("Running");

let HOST = 0;

if (window.location.href.includes("observador.pt")) {
    HOST = OBSERVADOR
} else if (document.querySelectorAll(".gatting_login").length > 0) {
    HOST = NOMIO
} else if (window.location.href.includes("crunchbase.com")) {
    HOST = CRUNCHBASE
}else if (window.location.href.includes("forbes.com")) {
    HOST = FORBES
}

switch (HOST) {
    case OBSERVADOR:
        console.log("Removing Premium placeholders from observador.pt");
        rm_observador_premium_placeholders();
        break;
    case NOMIO:
        console.log("Removing Premium placeholders from Nómio Websites");
        rm_nomio_premium_placeholders();
        break;
    case CRUNCHBASE:
        console.log("Removing Premium placeholders from crunchbase.com");
        rm_crunch_premium_placeholders();
        break;
    case FORBES:
        console.log("Removing Premium placeholders from forbes.com");
        rm_forbes_adblock_placeholders();
        break;
    default:
        alert("Not implemented for " + window.location.href)
}
