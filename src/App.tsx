import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import './App.module.css';

function App () {
    const [decode, setDecode] = useState('')
    const [encode, setEncode] = useState('')
    const decodeFunc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDecode(e.currentTarget.value)
    }
    const encodeFunc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEncode(e.currentTarget.value)
    }
    const encodeRes = []
    const decodeRes = []
    const russian = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
    const english = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$%^&*@_"
    const numbers = "1234567890"
    for (let i = 0; i < encode.length; i++) {
        if (encode[i] === '?' || encode[i] === ',' || encode[i] === '.' || encode[i] === ' '|| encode[i] === '(' || encode[i] === ')') {
            encodeRes.push(encode[i])
        }
        for (let b = 0; b < russian.length; b++) {
            if (encode[i].toLowerCase() === russian.toLowerCase()[b]) {
                encodeRes.push(english[b].toLowerCase())
            }
        }
        for (let c = 0; c < numbers.length; c++) {
            if (encode[i]=== numbers[c]) {
                encodeRes.push(encode[i])
            }
        }
    }
    for (let i = 0; i < decode.length; i++) {
        if (decode[i] === '?' || decode[i] === ',' || decode[i] === '.' || decode[i] === ' '|| decode[i] === '(' || decode[i] === ')') {
            decodeRes.push(decode[i])
        }
        for (let b = 0; b < english.length; b++) {
            if (decode[i].toLowerCase() === english.toLowerCase()[b]) {
                decodeRes.push(russian[b].toLowerCase())
            }
        }
        for (let c = 0; c < numbers.length; c++) {
            if (decode[i]=== numbers[c]) {
                decodeRes.push(decode[i])
            }
        }
    }

    return (
        <div className={s.App}>
            <div className={s.encodedText}>
                <textarea className={s.textarea} placeholder={'Закодировать'} onChange={(e) => encodeFunc(e)}></textarea>
                <p className={s.text}>{encodeRes}</p>
            </div>

            <div className={s.encodedText}>
                <textarea className={s.textarea} placeholder={'Раскодировать'} onChange={(e) => decodeFunc(e)}></textarea>
                <p className={s.text}>{decodeRes}</p>
            </div>

        </div>
    );
}

export default App;
