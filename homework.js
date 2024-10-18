function getMonthName(month) {
    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    
    if (month < 1 || month > 12) {
        return 'Такого месяца нет';
    }
    return months[month - 1];
}

function getWeekdayName(day) {
    const weekdays = [
        'Понедельник', 'Вторник', 'Среда', 'Четверг', 
        'Пятница', 'Суббота', 'Воскресенье'
    ];
    
    if (day < 1 || day > 7) {
        return 'Такого дня недели нет';
    }
    return weekdays[day - 1];
}

function getFirstWords(text) {
    const sentences = text.split(/[.!?]+/).map(s => s.trim());
    const firstWords = sentences.map(sentence => {
        const words = sentence.split(' ');
        return words[0];
    });
    return firstWords.join(', ');
}

function greet(name) {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 6) {
        greeting = 'Доброй ночи';
    } else if (hour < 12) {
        greeting = 'Доброе утро';
    } else if (hour < 18) {
        greeting = 'Добрый день';
    } else {
        greeting = 'Добрый вечер';
    }
    
    console.log(`${greeting}, ${name}`);
}

function ageCategories() {
    for (let i = 1; i <= 100; i++) {
        let category;
        if (i < 18) {
            category = 'ребёнок';
        } else if (i < 31) {
            category = 'молодой';
        } else if (i < 56) {
            category = 'зрелый';
        } else {
            category = 'старый';
        }
        console.log(`${i} - ${category}`);
    }
}

function personInfo(name, age) {
    let category;
    if (age < 18) {
        category = 'ребёнок';
    } else if (age < 31) {
        category = 'молодой';
    } else if (age < 56) {
        category = 'зрелый';
    } else {
        category = 'старый';
    }
    
    console.log(`${name} имеет возраст ${age} и он ${category}`);
    ageCategories(); // вызов функции из предыдущего задания
}

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// Задание 0
console.log(getMonthName(1));
console.log(getMonthName(13));
//

// Задание 1
console.log(getWeekdayName(1));
console.log(getWeekdayName(8));
//

// Задание 2
const text = "Это первое предложение. Вот второе. А это третье!";
console.log(getFirstWords(text));

// Задание 3
greet('Иван');
//

// Задание 4
ageCategories();
//

// Задание 5
personInfo('Иван', 44);
//

// FizzBuzz
fizzBuzz(15); // Выводит числа от 1 до 15 с условиями FizzBuzz
//