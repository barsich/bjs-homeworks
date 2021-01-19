//task 1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    if (this._state > 0 && this._state < 100) {
      this.state = this._state * 1.5;
    } else {
      this.state;
    }
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

//task 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findedBook = null;
    this.books.forEach(function find(book) {
      if (book[type] === value) {
        findedBook = book;
      }
    });
    return findedBook;
  }

  giveBookByName(bookName) {
    let givenBook = null;
    let libraryName = this; //иначе внутри форыча не будет this работать
    let bookIndex = this.books.findIndex((book) => book.name === bookName);
    this.books.forEach(function give(book) {
      if (book.name === bookName) {
        givenBook = book;
        libraryName.books.splice(bookIndex, 1);
      }
    });
    return givenBook;
  }
}

/* тестовые данные
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
givenBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
givenBook.state = 30;
console.log(givenBook.state);
givenBook.fix();
console.log(givenBook.state);
library.addBook(givenBook);
console.log(library.books);
*/

//task 3

class StudentLog {
  constructor(name) {
    this.studentName = name;
    this.data = {};
  }

  getName() {
    return this.studentName;
  }

  addGrade(grade, subject) { //todo
    if (grade > 0 && grade < 6 && Number.isInteger(grade)) {
      if (!this.data.hasOwnProperty(subject)) {
        this.data[subject] = [];
      }
      this.data[subject].push(grade);
      console.log(this.data[subject].length);
    } else {
      if (!this.data.hasOwnProperty(subject)) {
        this.data[subject] = [];
      }
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      console.log(this.data[subject].length);
    }
  }

  getAverageBySubject(subject) {
    let sum = 0;
    if (this.data.hasOwnProperty(subject)) {
      if (this.data[subject].length === 0) {
        return sum;
      } else {
        for (let i = 0; i < this.data[subject].length; i++) {
          sum += this.data[subject][i];
        }
      }
    } else {
      return sum;
    }
    return sum / this.data[subject].length;
  }

  getTotalAverage() {
    let sum;
    let average = 0;
    let averageForSubj = 0;
    let subjectsQuantity = 0;
    for (let subject in this.data) {
      if (this.data[subject].length !== 0) {
        sum = 0;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        sum = this.data[subject].reduce(reducer);
        averageForSubj += sum / this.data[subject].length;
        subjectsQuantity++;
      }
    }
    average = averageForSubj / subjectsQuantity;
    return average;
  }
}

/*тестовые данные
const log = new StudentLog('Олег Никифоров');
// log.addGrade(3, 'algebra');
// log.addGrade('отлично!', 'math');
// log.addGrade(5, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(25, 'geometry');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
// console.log(log.getAverageBySubject('geometry'));
// console.log(log.getAverageBySubject('algebra'));
// console.log(log.getAverageBySubject('math'));
console.log(log.getTotalAverage());
*/