function isMuted() {
    let tooltips = document.querySelectorAll('div[role="tooltip"]')

    return Array.from(tooltips)
        .filter(x => typeof x !== 'undefined')
        .filter(x => x.textContent === "Turn on microphone (ctrl + d)")
        .length > 0;
}

function enableMutedIndicator() {
    document.querySelector('c-wiz').style.backgroundColor = 'red';
}

function disableMutedIndicator() {
    document.querySelector('c-wiz').style.backgroundColor = '';
}

function main() {
    if (isMuted()) {
        enableMutedIndicator();
    } else {
        disableMutedIndicator();
    }
}
setInterval(main, 100);
