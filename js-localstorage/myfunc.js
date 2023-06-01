
function storeData() {
    const key = document.getElementById('key').value
    const value = document.getElementById('value').value
    localStorage.setItem(key, value)
    alert('Data stored successfully!');
    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
}
function retrieveData() {
    const key = document.getElementById('key').value;
    const value = localStorage.getItem(key);
    if (value) {
        alert(`Value for key "${key}": ${value}`);
    } else {
        alert(`No value found for key "${key}"`);
    }
    document.getElementById('key').value = '';
}

function removeData() {
    const key = document.getElementById('key').value;
    localStorage.removeItem(key);
    alert(`Key "${key}" removed successfully!`);
    document.getElementById('key').value = '';
}

function clearData() {
    localStorage.clear();
    alert('All data cleared!');
}
