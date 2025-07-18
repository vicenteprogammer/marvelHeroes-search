const modelWindow = document.getElementById('model-window')
function search() {
}

function openWindow(){
    modelWindow.classList.add('open');
}

function closeWindow(){
    modelWindow.classList.remove('open');
}


const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', closeWindow)
const searchBtn = document.getElementById('search')
searchBtn.addEventListener('click', openWindow)
