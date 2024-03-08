
const iterateFinding = async (phoneNumber) => {
    var phoneStart = '';
    var phoneEnd = '';
    var phonePart = '';
    var phoneWord = '';
    var phoneWordObj = { wordLists: [] };
    for (let i = 0; i < phoneNumber.length; i++) {
        phoneWordObj.wordLists.push([]);
        for (let j = 0; j < phoneNumber.length - i; j++) {
            phonePart = phoneNumber.slice(j, j + i + 1);
            phoneStart = phoneNumber.slice(0, j);
            phoneEnd = phoneNumber.slice(j + i + 1);
            phoneWord = await findWord(phonePart);
            if (phoneWord.length > 0) {
                phoneWordObj.wordLists[i].push([phoneStart, phoneWord, phoneEnd]);
            };
        }
    }
    let randomWord = '';
    let maxLength = 0;
    for (let i = 0; i < phoneWordObj.wordLists.length; i++) {
        if (i > maxLength && phoneWordObj.wordLists[i].length > 0) {
            maxLength = i;
        }
    }

    console.log(phoneWordObj);
    if (maxLength === 0) return phoneNumber;
    randomWord = phoneWordObj.wordLists[maxLength][Math.floor(Math.random() * phoneWordObj.wordLists[maxLength].length)];
    return randomWord[0] + randomWord[1][Math.floor(Math.random() * randomWord[1].length)] + randomWord[2];
};


const findWord = async (phoneNumber) => {
    const letterBox = {
        "1": [""],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    const phoneNumberArr = phoneNumber.split('');
    var phoneWordArr = [];
    const currentUrl = window.location.href;
    const localFile = `${currentUrl}wordsDB/${phoneNumber.length - 1}length.txt`;
    var wordArr = [];
    return fetch(localFile)
        .then(response => response.text())
        .then(text => {
            wordArr = text.split('\n');
            for (let i = 0; i < wordArr.length; i++) {
                let word = wordArr[i].slice(0, -1);
                if (word.length === phoneNumber.length) {
                    let match = true;
                    for (let j = 0; j < word.length; j++) {
                        if (!letterBox[phoneNumberArr[j]].includes(word[j])) {
                            match = false;
                            break;
                        }
                    }
                    if (match) {
                        phoneWordArr.push(word);
                    }
                }
            };
            return phoneWordArr;
        });
};
export { findWord, iterateFinding };