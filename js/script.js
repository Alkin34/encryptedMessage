let container = document.querySelector(".container");
let inputMsg = document.querySelector("#msg");
let inputKey = document.querySelector("#key");
let button = document.querySelector(".btn");

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

container = addEventListener('click', encrypt);

function encrypt(e) {
    if (e.target === button) {
        let inputMsgValue = inputMsg.value;
        let inputKeyValue = Number(inputKey.value);
        let encryptedArr = [];
        for (let i = 0; i < inputMsgValue.length; i++) {
            let symbolMsg = inputMsgValue[i];
            let indexSimbolArr_ru = arr_ru.indexOf(symbolMsg);
            let newIndexSimbol = indexSimbolArr_ru + inputKeyValue;
            let newSimbolArr = arr_ru[newIndexSimbol]
            encryptedArr.push(newSimbolArr);
        }
        let encryptedMsg = encryptedArr.join('');
        let encryptedTextPara = document.createElement('p');
        document.body.appendChild(encryptedTextPara);
        encryptedTextPara.textContent = encryptedMsg
    }


}