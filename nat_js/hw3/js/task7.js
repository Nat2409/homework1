/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let id = 1;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.transactions.push({
      id: (id += 5),
      type: type,
      amount: amount,
    });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    this.createTransaction(amount, 'deposit');
    return `На ваш счет внесена сумма ${amount} гривен`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return 'Cнятие такой суммы не возможно, недостаточно средств';
    }

    this.balance -= amount;

    this.createTransaction(amount, 'withdraw');
    return `С вашего счета списана сумма ${amount}  гривен`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Текущий баланс: ${this.balance} гривен`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      // console.log('getTransactionDetails', transaction);
      // console.log(transaction.id);
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      // console.log('getTransactionTotal', transaction);
      // console.log('getTransactionTotal', transaction.type);
      if (transaction.type === type) {
        total += transaction.amount;
      }

      // if (type === 'withdrow') {
      //   total += transaction.amount;
      // }
    }
    return `Общая сумма по транзакции ${type} составляет ${total} гривен`;
  },
};

console.log(account.deposit(2500));
console.log(account.deposit(500));
console.log(account.deposit(1800));

console.log(account.withdraw(700));
console.log(account.withdraw(2800));
console.log(account.withdraw(1400));
console.log(account.transactions);

console.log(account.getTransactionDetails(11));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.balance);
console.log(account.getBalance());
