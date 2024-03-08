import React, { useEffect, useState } from 'react';
import { iterateFinding } from './phoneFunc/getWord';



export default function PhoneComponent() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [word, setWord] = useState('');
    const parsePhone = (e) => {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,10})/);
        let mask = '(___) ___-____';
        for (var i = 0; i < x[0].length; i++) {
            mask = mask.replace('_', x[0][i]);
        }
        e.target.value = mask;
        let lastNumber = mask.search(/(\d)(?!.*\d)/) == -1 ? 1 : mask.search(/(\d)(?!.*\d)/) + 1;
        setPhoneNumber(mask);
        e.target.focus();
        e.target.setSelectionRange(lastNumber, lastNumber);
    };

    useEffect(() => {
        if (phoneNumber.length === 0) return setWordParser('');
        let onlyPhoneNumber = phoneNumber.replace(/\D/g, "");
        let resultPhoneWord = iterateFinding(onlyPhoneNumber);
        setWordParser(resultPhoneWord);
        // iterateFinding(onlyPhoneNumber).then(res => {
        //     console.log(res);
        //     setWordParser(res + onlyPhoneNumber.slice(res.length));
        // });
    }, [phoneNumber]);

    const setWordParser = (wordObj) => {
        let wordStriped = wordObj.replaceAll(/-/g, '');
        let regex = new RegExp(/[a-z]+/g);
        let match = regex.exec(wordStriped);
        let input = wordStriped;
        if (match) {
            let start = match.index;
            let end = start + match[0].length;
            input = wordStriped.slice(0, start)
                + (start === 0 ? '' : '-')
                + wordStriped.slice(start, end)
                + (end === wordStriped.length ? '' : '-')
                + wordStriped.slice(end);

        }
        setWord(input);
    };

    return (
        <div className="container">
            <h1>Phone Beautifier</h1>
            <input type="tel" id="phoneNumber" placeholder="(123) 456 78-90" value={phoneNumber} onChange={e => parsePhone(e)} />
            <p id>{word}</p>
        </div>
    );
};