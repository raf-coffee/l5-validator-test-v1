##  Памятка по SSH

1. Проверка ключа: ssh -T git@github.com
2. Если доступ закрыт: ssh-keygen затем cat ~/.ssh/id_rsa.pub
3. Затем вставить ключ в гитхаб и повторить пункт 1.

[MDN JS](https://github.com/mdn/content/tree/main/files/en-us/web/javascript/reference/global_objects)

## Правила и регламент

- [Экзамен: правила, рекомендации и порядок проведения](https://hexly.notion.site/d9289c18871c44508bc7c7f05a51d94f)

## Задание

Ваша задача написать валидатор, в котором есть ряд методов и свойств и экспортировать его из файла *src/Validator.js*. Валидатор позволяет проверять аргументы на соответствие необходимым условиям, которые были заданы с помощью методов валидатора.

Пример использования:

```javascript
// создаем экземпляр валидатора
const v = new Validator();
// определяем метод для валидации чисел и связываем его с валидатором, обращаясь к нему через переменную.
const schema = v.number();

// проверяем данные на соответствие числовому типу, с помощью метода isValid()
schema.isValid('Hexlet'); // false
schema.isValid(''); // false
schema.isValid(null); // false
schema.isValid(123); // true
```

### Примечания

Вы можете самостоятельно протестировать работу валидатора. В каталоге *src* разрешено использовать любые файлы и создавать новые, если это делает вашу разработку более удобной. Вам не обязательно использовать все файлы, достаточно реализовать валидатор в Validator.js, остальные файлы созданы для вашего удобства.

Для тестирования валидатора, достаточно создать экземпляр валидатора, настроить валидацию с помощью методов и вызвать метод `validate()` с необходимым аргументом, после чего написать в терминале:

```bash
node index.js
```

## 1 задача

Вам необходимо создать валидатор, который способен принимать аргумент и проводить его проверку на соответствие определенным условиям. В данной задаче мы ограничиваемся валидацией только чисел. Для этого в вашем валидаторе должен быть метод `number()`, который создает экземпляр валидатора чисел. Этот экземпляр обладает методом `isValid()`, который принимает данные на вход и возвращает значение true или false в зависимости от того, являются ли входные данные числом или нет.

**Параметры и методы**

- аргумент, который мы валидируем (проверяем)
- метод валидатора `number()`, который создает экземпляр валидатора чисел
- метод экземпляра `isValid()`, который вызывается у экземпляра `number()`, он принимает данные на вход и валидирует

```javascript
const v = new Validator();
const schema = v.number();

schema.isValid(null); // false
schema.isValid(''); // false
schema.isValid(true); // false
schema.isValid(123); // true
schema.isValid(0); // true
```

После добавления методов `number()` и `isValid()`, экземпляр валидатора будет проверять является ли аргумент типом данных *Number*.

## 2 задача

Вам необходимо расширить функциональность экземпляра валидатора чисел, добавив к нему методы `even()` и `odd()`.
При вызове метода `even()`, он добавляет дополнительную проверку,
которая будет выполняться при вызове метода `isValid()` на то, является ли число четным. И наоборот, вызов метод `odd()`, проверяет является ли число нечетным.

**Методы**

- метод `even()`, который вызывается у экземпляра `number()`. Он добавляет проверку на четность
- метод `odd()`, который вызывается у экземпляра `number()`. Он добавляет проверку на нечетность

```javascript
const v = new Validator();

const schema1 = v.number();
schema1.isValid(11); // true;

const schema2 = v.number().even()
schema2.isValid(2); // true;
schema2.isValid(11); // false;

const schema3 = v.number().odd();
schema.isValid(22); // false;
schema.isValid(23); // true;
```

После добавления методов `even()` или `odd()`, экземпляр валидатора чисел будет проверять является ли аргумент четным или нечетным числом.

## 3 задача

Вам необходимо создать валидатор массивов, добавив к нему метод `array()`. Аналогично методу `number()`, метод `array()` создает экземпляр валидатора массивов. Для валидации массива у этого экземпляра также есть метод `isValid()`, который проверяет, является ли переданный аргумент массивом.

**Методы**

- метод валидатора `array()`, который создает экземпляр валидатора массивов
- метод `isValid()`, который вызывается у экземпляра `array()`. Он проверяет является ли аргумент массивом

```javascript
const v = new Validator();
const schema = v.array();

schema.isValid([]); // true
schema.isValid(123); // false
schema.isValid('Hexlet'); // false
```

После добавления метода `array()`, экземпляр валидатора сможет проверять переданные значения на соответствие экземпляру глобального объекта Array.

## 4 задача

Вам необходимо расширить функциональность экземпляра валидатора массивов. Кроме того, что он может валидировать, является ли аргумент массивом, он должен также иметь возможность проверять, соответствует ли массив указанной длине, если бы вызван метод `length()`, аргументом в котором является число, означающее необходимую длину массива.

**Методы**

- метод `length()`, который вызывается у экземпляра `array()`. Он проверяет соответствует ли длина массива заданному в `length()` аргументу

```javascript
const v = new Validator();
const schema1 = v.array();

schema1.isValid([1, 2]); // true

const schema2 = v.array().length(4);
schema2.isValid([1, 2]); // false
schema2.isValid([1, 2, 2, 1]); // true
```

После добавления метода `length()`, экземпляр валидатора массивов будет способен проверять, соответствует ли длина массива заданной в методе длине.

## 5 задача

Вам необходимо создать валидатор полей объекта, используя методы, представленные в предыдущих задачах. Для этого необходимо создать метод `object()`, который проверяет не сам объект, а данные внутри него на соответствием заданным валидаторам. Метод `Validator.object()` должен содержать метод `shape()`, позволяющий задать поля, подлежащие валидации, для объекта. Метод `shape()` принимает объект, в котором ключи представляют поля, которые требуется проверить, а значения - экземпляры валидаторов. Если количество полей в shape не совпадает с количеством полей в валидируемом объекте, то валидация не проходит.

**Методы**

- метод валидатора (экземпляр класса *Validator*) `object()`, который проверяет данные внутри объекта (поля объекта)
- метод `shape()`, который вызывается у экземпляра `object()`. Он позволяет задать поля валидации для объекта

```javascript
const v = new Validator();

// Позволяет описывать валидацию для свойств объекта
const schema = v.object().shape({
  id: v.number().odd(), // теперь, при валидации объекта с ключом id, значение этого ключа пройдет валидацию в соответствии с текущими методами
  basket: v.array().length(3),
});

schema.isValid({ id: 11, basket: ['potatos', 'tomatos', 'oranges'] }); // true
schema.isValid({ id: 12, basket: ['potatos', 'tomatos', 'oranges'] }); // false
schema.isValid({ id: 11, basket: [] }); // false
```

После добавления методов `object()` и `shape()`, экземпляр валидатора сможет проверять поля объекта на соответствие заданным валидаторам
