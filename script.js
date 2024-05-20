function appendCharacter(character) {
    var display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        var result = eval(display.value);
        addHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function addHistory(entry) {
    var historyList = document.getElementById('history-list');
    var listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}
