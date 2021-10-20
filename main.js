let loc = "";

const mainList = document.getElementById("mainList");
const code = document.getElementById("Code");
const site = document.getElementById("Site");
const contact = document.getElementById("Contact");

for (each in data) {
    let option = document.createElement("div");
    option.id = each;
    option.style.backgroundImage = `url(${each}/Logo.png)`;
    option.style.backgroundSize = "Cover";

    let title = document.createElement("h3");
    title.innerText = data[each].name;
    
    let viewCode = document.createElement("button");
    viewCode.id = `${each}`;
    viewCode.innerText = "View Code";
    viewCode.onclick = () => visualizeCode(viewCode.id);

    let viewSite = document.createElement("button");
    viewSite.id = each;
    viewSite.innerText = "View Site";
    viewSite.onclick = () => visualizeSite(viewSite.id);

    let info = document.createElement("span");
    info.innerText = data[each].info;

    option.appendChild(title);
    option.appendChild(viewCode);
    option.appendChild(viewSite);
    option.appendChild(info);

    mainList.appendChild(option);
}

function visualizeCode (item) {
    loc = `./${item}`;
    let files = document.getElementById("Files");
    files.innerHTML = "";
    if (data[item].files.length === 1 && !Array.isArray(data[item].files[0])) {
        files.hidden = true;
    } else {
        files.hidden = false;
    }
    for (each of data[item].files) {
        let file = document.createElement("button");
        if (Array.isArray(each)) {
            file.innerHTML = `<img src="./folder-grey.svg" /> ${each[0]}`;
            file.id = each[0];
            file.onclick = () => visualizeSubCode(file.id);
        } else {
            file.innerText = each;
            file.id = each;
            file.onclick = () => renderCode(file.id);
        }
        files.appendChild(file);
    }
    renderCode(data[item].files[0]);
}

//Currently only works with 1 level of file depth
function visualizeSubCode (item) {
    let val = loc.slice(2);
    let num = data[val].files.findIndex((val) => val[0] === item);
    let files = document.getElementById("Files");
    files.innerHTML = "";
    let back = document.createElement("button");
    back.innerText = "<<";
    back.id = "back";
    back.onclick = () => visualizeCode(val);
    files.appendChild(back);
    for (each of data[val].files[num]) {
        if (each === item) {
            continue;
        }
        let file = document.createElement("button");
        file.innerText = each;
        file.id = each;
        file.onclick = () => renderCode(file.id);
        files.appendChild(file);
    }
    loc = loc + `/${item}`;
    renderCode(data[val].files[num][0]);
}

function visualizeSite (item) {
    loc = `./${item}`;
    hideAll();
    site.hidden = false;
    site.innerHTML = `<iframe src="${loc}/index.html" title="Example Site"></iframe>`;
    
}

function renderCode (each) {
    hideAll();
    code.hidden = false;
    let progData = document.getElementById("ProgData");
    if (each.endsWith(".html")) {
        progData.innerHTML = `<iframe src="${loc}/${each.slice(0,-5)}.txt" title="Example Site" id="Data"></iframe>`
    } else if (each.endsWith(".css") || each.endsWith(".js") ) {
        progData.innerHTML = `<iframe src="${loc}/${each}" title="Example Site" id="Data"></iframe>`;
    } else if (each.endsWith(".png")) {
        progData.innerHTML = `<img src="${loc}/${each}" />`;
    } else if (each.endsWith(".wav")) {
        progData.innerHTML = `<audio controls>
        <source src="${loc}/${each}" type="audio/wav">
      Your browser does not support the audio element.
      </audio>`;
    }
}

function hideAll () {
    mainList.hidden = true;
    mainList.style.display = "none";
    code.hidden = true;
    site.hidden = true;
    contact.hidden = true;
}

document.getElementById("Home").onclick = () => {
    hideAll();
    mainList.hidden = false;
    mainList.style.display = "grid";
};

document.getElementById("ContInfo").onclick = () => {
    hideAll();
    contact.hidden = false;
};