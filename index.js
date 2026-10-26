let balance = 1000

while (true) {
    let choice = prompt("Выберите действие:\n1 — Проверить баланс\n2 — Пополнить счет\n3 — Снять наличные\n0 — Выйти")

        if (choice === "0") {
            alert("«Спасибо за визит!»")
            break
        }

         if (choice === "1") {
            alert("Ваш баланс" + balance)
         }

        else  if (choice === "2") {
           let sumPop =  Number(prompt("Введите сумму пополнения: "))
           balance = sumPop + balance
           alert("Ваш баланс" + balance)
         }

         else if (choice === "3") {
            let sumSnat = Number(prompt("Введите сумму cнятия: "))
            if (sumSnat > balance) {
            alert("Недостаточно средств!")
         }

         else {
            alert(balance - sumSnat)
            alert("Вы сняли: " + sumSnat + "Остаток на счете: " + balance)
         }
         }

            else if (choice !== "0") {
                        alert("Неверная операция!")
            }
}
        
    