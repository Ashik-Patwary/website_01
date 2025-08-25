function openPopUp(id){
    const popup = document.getElementById(id).classList.remove('hidden');
    document.body.classList.add('overflow');
    return popup;
}


function closePopUp(id){
    const popup = document.getElementById(id).classList.add('hidden');
    document.body.classList.remove('overflow');
    return popup;
}


function getInputValue(id){
    const input = document.getElementById(id);
    const value = input.value;
    input.value = "";
    return value;
}

function getInnerTextValue(id){
    const innerText = document.getElementById(id);
    const getValue = innerText.innerText;
    const value = parseFloat(getValue);
    return value;
}