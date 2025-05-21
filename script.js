const element = (selector) => document.querySelector(selector)

element(".campBtn").onclick = () => {
    element(".campMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}

element(".skirmishBtn").onclick = () => {
    element(".skirmishMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}

element(".loadBtn").onclick = () => {
    element(".loadMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}

element(".saveBtn").onclick = () => {
    element(".saveMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}

element(".editorBtn").onclick = () => {
    element(".editorMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}

element(".optBtn").onclick = () => {
    element(".optMenu").style.display = "flex"
    element(".mainMenu").style.display = "none"
}
