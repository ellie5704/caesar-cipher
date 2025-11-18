document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const keyInput = document.getElementById('key');
    const encodeRadio = document.getElementById('encode');
    const decodeRadio = document.getElementById('decode');
    const outputText = document.getElementById('outputText');

    inputText.addEventListener('input', runCipher); 
    keyInput.addEventListener('input', runCipher);
    encodeRadio.addEventListener('change', runCipher);
    decodeRadio.addEventListener('change', runCipher);

    function runCipher() {
        const text = inputText.value;
        const key = parseInt(keyInput.value) || 0;
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                let shift = (encodeRadio.checked ? key : -key);

                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
            }
        
            result += char;
        }

        outputText.value = result;
    }

    runCipher();
});