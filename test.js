function pack(str) {
    if (str == null) {
        throw new TypeError('null или undefined!')
    }
    let outStr =  '';
    let count = 1;
    for (let i = 0; i < str.length; i++)
        if (isNaN(str[i])) {
            if (str[i] == str[i + 1]) {
                count++;
            } else {
                outStr += str[i] + (count > 1 ? count : '');
                count = 1;
            }
        } else {
            throw new TypeError('Строка содержит цифры!')
        }
    return outStr;
}

//Альтернативный вариант с использованием регулярного выражения
/*function pack(str) {
    if (str == null) {
        throw new TypeError('null или undefined!')
    }
    return str.replace(/(.)\1+/g, (s) => {
        if (isNaN(s)) {
            return s[0] + s.length
        } else {
            throw new TypeError('Строка содержит цифры!')
        }
    });
}*/
console.log('-----  Сжатие  -----');
try {
    console.log('строка: null, результат: ' , pack(null));
} catch (error) {
    console.log(error);
}

try {
    console.log('строка: undefined, результат: ' , pack(undefined));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: 'W11UUUOJKPPPPA', результат: ` , pack('W11UUUOJKPPPPA'));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: '', результат: ` , pack(''));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: 'WQUUUOJKPPPPA', результат: ` , pack('WQUUUOJKPPPPA'));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: 'aaaaaaaaaaaberrryyyyyyyyyy', результат: ` , pack('aaaaaaaaaaaberrryyyyyyyyyy'));
} catch (error) {
    console.log(error);
}

function unPack(str) {
    if (str == null) {
        throw new TypeError('null или undefined!')
    }
    if (str.length > 0 && !isNaN(parseInt(str[0]))) {
        throw new TypeError('Первый символ - число!')
    }
    let outStr =  '';
    let count = '';
    for (let i = str.length - 1; i >= 0 ; i--) {
        if (!isNaN(parseInt(str[i]))) {
            count = str[i] + count;
            continue;
        } else {
            outStr = str[i].repeat(count ? parseInt(count) : 1) + outStr;
            count = '';
        }
      }
    return outStr;
}

//Альтернативный вариант с использованием регулярного выражения
/*function unPack(str) {
    if (str == null) {
        throw new TypeError('null или undefined!')
    }
    if (str.length > 0 && !isNaN(parseInt(str[0]))) {
        throw new TypeError('Первый символ - число!')
    }
    return str.replace(/.\d+/g, (s) => s[0].repeat(s.slice(1)));
}*/

console.log('-----  Декомпрессия  -----');
try {
    console.log('строка: null, результат: ' , unPack(null));
} catch (error) {
    console.log(error);
}

try {
    console.log('строка: undefined, результат: ' , unPack(undefined));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: '1p3d', результат: ` , unPack('1p3d'));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: 'W11UUUO3JKP4A3', результат: ` , unPack('W11UUUO3JKP4A3'));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: '', результат: ` , unPack(''));
} catch (error) {
    console.log(error);
}

try {
    console.log(`строка: 'qwerty', результат: ` , unPack('qwerty'));
} catch (error) {
    console.log(error);
}
