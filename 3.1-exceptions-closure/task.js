//task 1

function parseCount(data) {
  let parsedData = Number.parseInt(data);
  if (Number.isNaN(parsedData)) {
    throw (error = new Error('Невалидное значение'));
  }
  return parsedData;
}

function validateCount(data) {
  try {
    parseCount(data);
  } catch (error) {
    console.error(error);
  }
  return parseCount(data);
}

// task 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea(semiPerimeter) {
    semiPerimeter = this.getPerimeter() / 2;
    return +Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
