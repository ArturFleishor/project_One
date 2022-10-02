// первый практический урок . 

/* Задание на урок:

1) Создать переменную numberOfFilms. 
В неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('Один из последних просмотренных филмов', ''), 
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просмотренных филмов', ''),
      d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Работа с условиями. (if, else if, else) , 
//                     (тернарные условия),
//                     (switch,case,break,default)

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Слишком много');
}else {
    console.log("ok!");
}

(num === 50) ? console.log('ok!') : console.log('Error'); // тернарный оператор

const number = 50;

switch (number) {
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('Верно!');
        break; 
    default:
        console.log('Не в этот раз');  
}

// Cycle ( циклы )

let numero = 50;

while (numero <= 55) {
    console.log(numero);
    numero++;
}

let numero1 = 50;

do {
    console.log(numero1);
    numero1++;
}
while (numero1 < 55);

let numero2 = 50;

for (let i = 1; i < 8; i++) {
    console.log(numero2);
    numero2++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
}





