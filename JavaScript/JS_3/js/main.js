
var siteName = document.getElementById("site_name");
var siteUrl = document.getElementById("site_url");
var siteList = [];
var submitBtn = document.getElementById("submitBtn");
var modal = document.getElementById("staticBackdrop");

if (localStorage.getItem("SiteList") !== null){
    siteList = JSON.parse(localStorage.getItem("SiteList"));
    displaySite();
}

function addSite() {
    if (validationName() && validationUrl()){
        var site = {
            Name : siteName.value,
            Url : siteUrl.value
        }
        siteList.push(site);
        localStorage.setItem("SiteList", JSON.stringify(siteList));
        displaySite ();
    }
    else {
        displayModal ();
        
    }
    clearForm();
}

function displayModal (){
    var submitBtn = document.querySelector("#submitBtn");
    
    submitBtn.setAttribute("data-bs-toggle", "modal");
    submitBtn.setAttribute("data-bs-target", "#staticBackdrop");
}
function displaySite (){
    var siteContainer = ``;
    for ( var i =0 ; i<siteList.length ; i++ ){
        siteContainer += ` <tr>
                        <td>${i + 1}</td>
                        <td>${siteList[i].Name}</td>
                        <td>
                            <button onclick = "window.location.href='${siteList[i].Url}';" class="btn btn-visit">
                                <i class="fa-solid fa-eye pe-2"></i>
                                <span>Visit</span>
                            </button>
                        </td>
                        <td>
                            <button onclick ="deleteSite(${i})" class="btn btn-delete">
                                <i class="fa-solid fa-trash-can"></i>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>`
    }
    document.getElementById("tableBody").innerHTML = siteContainer;
}

function validationName (){
    var rexeg = /^.{3,}$/;
    var siteNameValue = siteName.value;

    if (rexeg.test(siteNameValue)){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        return true ;
    }
    else {
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        return false;
    }
}
function validationUrl (){
    var rexeg = /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/ ;
    var siteUrlValue = siteUrl.value;

    if (rexeg.test(siteUrlValue)){
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
        return true ;
    }
    else {
        siteUrl.classList.add("is-invalid")
        siteUrl.classList.remove("is-valid")
        return false;
    }
}
function clearForm (){
    siteName.value = null;
    siteUrl.value = null;
    siteName.classList.remove("is-valid")
    siteUrl.classList.remove("is-valid")
}
function deleteSite(i){
    siteList.splice(i ,1);
    localStorage.setItem("SiteList", JSON.stringify(siteList));
    displaySite();
    
}
