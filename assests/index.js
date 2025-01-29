let time = document.getElementById('time');
function updateTime() {
    time.innerText = `Time: ${new Date().toUTCString()}`;
}
updateTime();
