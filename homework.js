// function getMonthName(month) {
//     const months = [
//         'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
//         'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
//     ];

//     if (month < 1 || month > 12) {
//         return 'Такого месяца нет';
//     }
//     return months[month - 1];
// }

// function getWeekdayName(day) {
//     const weekdays = [
//         'Понедельник', 'Вторник', 'Среда', 'Четверг', 
//         'Пятница', 'Суббота', 'Воскресенье'
//     ];

//     if (day < 1 || day > 7) {
//         return 'Такого дня недели нет';
//     }
//     return weekdays[day - 1];
// }

// function getFirstWords(text) {
//     const sentences = text.split(/[.!?]+/).map(s => s.trim());
//     const firstWords = sentences.map(sentence => {
//         const words = sentence.split(' ');
//         return words[0];
//     });
//     return firstWords.join(', ');
// }

// function greet(name) {
//     const hour = new Date().getHours();
//     let greeting;

//     if (hour < 6) {
//         greeting = 'Доброй ночи';
//     } else if (hour < 12) {
//         greeting = 'Доброе утро';
//     } else if (hour < 18) {
//         greeting = 'Добрый день';
//     } else {
//         greeting = 'Добрый вечер';
//     }

//     console.log(`${greeting}, ${name}`);
// }

// function ageCategories() {
//     for (let i = 1; i <= 100; i++) {
//         let category;
//         if (i < 18) {
//             category = 'ребёнок';
//         } else if (i < 31) {
//             category = 'молодой';
//         } else if (i < 56) {
//             category = 'зрелый';
//         } else {
//             category = 'старый';
//         }
//         console.log(`${i} - ${category}`);
//     }
// }

// function personInfo(name, age) {
//     let category;
//     if (age < 18) {
//         category = 'ребёнок';
//     } else if (age < 31) {
//         category = 'молодой';
//     } else if (age < 56) {
//         category = 'зрелый';
//     } else {
//         category = 'старый';
//     }

//     console.log(`${name} имеет возраст ${age} и он ${category}`);
//     ageCategories(); // вызов функции из предыдущего задания
// }

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// // Задание 0
// console.log(getMonthName(1));
// console.log(getMonthName(13));
// //

// // Задание 1
// console.log(getWeekdayName(1));
// console.log(getWeekdayName(8));
// //

// // Задание 2
// const text = "Это первое предложение. Вот второе. А это третье!";
// console.log(getFirstWords(text));

// // Задание 3
// greet('Иван');
// //

// // Задание 4
// ageCategories();
// //

// // Задание 5
// personInfo('Иван', 44);
// //

// // FizzBuzz
// fizzBuzz(15); // Выводит числа от 1 до 15 с условиями FizzBuzz
// 

const me = {
   name: "Natalia",
   age: 7,
   artSkill: 3,
   friends: 4,
   job: 0,
   diplom1: 0,
   diplom2: 0,
   salary: 0,
   itskill: 0,
   collegues: 0,
   weekend: ["summer", "autumn", "winter", "spring"],
   trip: ["france", "south korea", "spain", "america", "italy"]
}

const school = (obj) => {
   [...Array(11)].forEach(() => {
      obj.age++,
         obj.artSkill += 4;
   })
   return obj
}

const univer1 = (obj) => {
   [...Array(4)].forEach((_, i) => {
      obj.age++,
         obj.artSkill++;
      if (i === 4 && (Math.floor(Math.random() * 10)) > 4) {
         obj.friends += 2;
      }
   })
   obj.diplom1++;
   return obj
}

const univer2 = (obj) => {
   [...Array(2)].forEach((_, i) => {
      obj.age++,
         obj.artSkill += 2,
         obj.friends += 2;
      if (i === 1 && (Math.floor(Math.random() * 10)) > 2) {
         obj.job++;
      }
   })
   obj.diplom2 += 1;
   return obj
}
const job = (obj) => {
   [...Array(3)].forEach((_, i) => {
      obj.age++,
         obj.artSkill--,
         obj.friends--;
      if (i === 1 && (Math.floor(Math.random() * 10)) > 2) {
         obj.salary += 10000;
      }
   })
   obj.collegues += 2;
   obj.itskill += 1;
   return obj
}
const itdeveloper = (obj) => {
   [...Array(15)].forEach((_, i) => {
      obj.age++,
         obj.artSkill += 3,
         obj.itskill += 5,
         obj.salary += 100000;
      obj.weekend.slice(3);
      console.log(obj.weekend.slice(3));

      if (i === 4 || i === 7 || i === 10) {
         obj.trip.slice(Math.floor(Math.random() * (obj.trip.length), 1));
      }
      console.log(obj.trip.slice(Math.floor(Math.random() * (obj.trip.length), 1)));
   })
   return obj

}

console.log(itdeveloper(job(univer2(univer1(school(me))))));