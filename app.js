const product = [{
    name: "uPhone x10",
    price:1000,
    avмileble: 4,
    image:"194749.png"
},
   {
    name: "uPhone x11",
    price:4000,
    availeble: 1,
    image:"194749.png"
   },
   {
    name: "uPhone x12",
    price:2000,
    availeble: 2,
    image:"194749.png"
   },
{
    name: "uPhone x13",
    price:3000,
    availeble: 6,
    image: "194749.png"
}

]

function add(i) { 
    let userInput = prompt("Сколько вы бы хотели заказать?");
    let requiredAmount = parseInt(userInput);

    // Проверка корректности ввода
    if (!userInput || isNaN(requiredAmount) || requiredAmount <= 0) {
        alert("❌ Введите корректное количество!");
        return;
    }

    // Проверяем, есть ли введённое число среди доступных количеств
    let availableAmounts = product.map(p => p.availeble); // Получаем список доступных количеств
    if (availableAmounts.includes(requiredAmount)) {
        alert(`✅ Отлично! Количество ${requiredAmount} доступно.`);
    } else {
        alert(`❌ Количество ${requiredAmount} недоступно. Доступные варианты: ${availableAmounts.join(", ")}`);
    }
}

function render() {
    catalogDiv.innerHTML = ""; // Очищаем содержимое перед добавлением новых элементов
    
    for (let i = 0; i < product.length; i++) {
        let availabilityText = `<span>${product[i].availeble}</span>`; 
        
        // Если доступное количество товара меньше или равно 3, делаем текст красным и подчеркнутым
        if (product[i].availeble <= 0) {
            availabilityText = `<span style="text-decoration: underline; color: red;">${product[i].availeble}</span>`;
        }else
        if (product[i].availeble === 1 || product[i].availeble === 2) {
            availabilityText = `<span style="text-decoration: underline; color: darksalmon;">${product[i].availeble}</span>`;
        }else
        if (product[i].availeble <=6) {
            availabilityText = `<span style="text-decoration: underline; color: green;">${product[i].availeble}</span>`;
        }

        catalogDiv.innerHTML += `
        <div>
            <h2>${product[i].name}</h2>
            <p>Доступно: ${availabilityText}</p>
             <img src="images/${product[i].image}" alt="${product[i].name}" width="520px">
             <br>
             <button onclick="add(${i})">ADD</button>
        </div>
        `;
    }
}