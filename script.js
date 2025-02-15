<<<<<<< HEAD
async function sendRequest(url, method, data) {
    url = `https://tg-api.tehnikum.school/tehnikum_course/minesweeper/${url}`;
    
=======
let themeToggleImg = document.getElementById('themeToggleImg');
let isDarkTheme = localStorage.getItem('isDarkTheme') === 'true'; // Загружаем тему из localStorage
let headerImg = document.querySelector('header img');

document.addEventListener('DOMContentLoaded', () => {
    updateTheme(); // Обновляем тему при загрузке страницы
    getRandomAvatar(); // Получаем случайный аватар
});

// Функция для переключения тем
function toggleTheme() {
    isDarkTheme = !isDarkTheme; // Переключаем тему
    localStorage.setItem('isDarkTheme', isDarkTheme); // Сохраняем в localStorage
    updateTheme(); // Обновляем стиль страницы
}

function updateTheme() {
    const body = document.body;
    const sidebar = document.querySelector('.sidebar'); // Получаем боковую панель
    const sidebarContentSpans = document.querySelectorAll('.sidebar-content span'); // Получаем все span внутри sidebar-content

    if (isDarkTheme) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        document.body.style.backgroundColor = '#101217';
        document.body.style.color = '#ffffff';
        document.querySelector('header').style.backgroundColor = '#1d1f25';
        headerImg.classList.remove('light');
        headerImg.classList.add('dark');

        document.body.style.setProperty('--checked-color', '#0DBBDD');

        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('light-label');
            label.classList.add('dark-label');
        });

        document.querySelector('.gridBlocks').style.backgroundColor = '#1d1f25';
        document.querySelector('.pointsBlocks').style.backgroundColor = '#1d1f25';

        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('light');
            cell.classList.add('dark');
        });

        sidebar.style.backgroundColor = '#101217'; // Устанавливаем цвет для темной темы

        // Обновляем стиль для span
        sidebarContentSpans.forEach(span => {
            span.style.background = '#1d1f25';
            span.style.color = '#fdfdfd';
            span.style.textShadow = '0 3px 5px rgba(0, 0, 0, 0.4)';
        });
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');

        document.body.style.backgroundColor = '#fafbff';
        document.body.style.color = '#1d1f25';
        document.querySelector('header').style.backgroundColor = '#ebe9f4';
        headerImg.classList.remove('dark');
        headerImg.classList.add('light');

        document.body.style.setProperty('--checked-color', '#2af599');

        document.querySelectorAll('label').forEach(label => {
            label.classList.remove('dark-label');
            label.classList.add('light-label');
        });

        document.querySelector('.gridBlocks').style.backgroundColor = '#ebe9f4';
        document.querySelector('.pointsBlocks').style.backgroundColor = '#ebe9f4';

        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('dark');
            cell.classList.add('light');
        });

        sidebar.style.backgroundColor = '#fff'; // Устанавливаем цвет для светлой темы

        // Обновляем стиль для span
        sidebarContentSpans.forEach(span => {
            span.style.background = '#ebe9f4';
            span.style.color = '#1d1f25';
            span.style.textShadow = 'none'; // Убираем текстовую тень для светлой темы
        });
    }
}


// Добавляем обработчик клика для переключения темы
themeToggleImg.addEventListener('click', toggleTheme);

// Обработчик клика для label
document.querySelectorAll('label').forEach(label => {
    label.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

// Функция отправки запросов
async function sendRequest(url, method, data) {
    url = `https://tg-api.tehnikum.school/tehnikum_course/minesweeper/${url}`;

>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0
    if (method === "POST") {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
<<<<<<< HEAD

        response = await response.json();
        return response;
=======
        return await response.json();
>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0
    } else if (method === "GET") {
        url = url + "?" + new URLSearchParams(data);
        let response = await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
<<<<<<< HEAD
        response = await response.json();
        return response;
=======
        return await response.json();
>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0
    }
}

let username;
let balance;
<<<<<<< HEAD
=======
checkUser();

let points = 1000;
>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0

let authorizationForm = document.getElementById("authorization");
authorizationForm.addEventListener("submit", authorization);

<<<<<<< HEAD
async function authorization(event) {
    event.preventDefault();

=======
// Обработчик авторизации
async function authorization(event) {
    event.preventDefault();
    
>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0
    const formData = new FormData(event.target);
    username = formData.get("username");

    let response = await sendRequest("user", "GET", { username });
    if (response.error) {
        let regResponse = await sendRequest("user", "POST", { username });
        if (regResponse.error) {  
            alert(regResponse.message);
        } else {
            balance = regResponse.balance;
            showUser();
        }
    } else {
        balance = response.balance;
        showUser();
    }
}

<<<<<<< HEAD
function showUser() {
    let popUpSection = document.querySelector("section");
    popUpSection.style.display = "none"; 
    let userInfo = document.querySelector("header span");
    userInfo.innerHTML = `[${username}, ${balance}]`;
}
=======
// Функция отображения информации о пользователе
async function showUser() {
    let popUpSection = document.querySelector("section");
    popUpSection.style.display = "none"; 

    // Обновляем информацию в HeaderUser
    let userInfo = document.querySelector(".HeaderUser .spanOne");
    userInfo.innerHTML = `${username}`;

    let userInfo2 = document.querySelector(".HeaderUser .spanTwo");
    userInfo2.innerHTML = `<img src="./img/point.png" class="pointImg">${balance}`;

    // Проверяем, есть ли сохраненный аватар в localStorage для данного пользователя
    let avatarImg = document.getElementById('userAvatar');
    let sidebarAvatarImg = document.getElementById('sidebarUserAvatar');
    let avatarSrc = localStorage.getItem(`avatar_${username}`);
    
    if (!avatarSrc) {
        avatarSrc = getRandomAvatar(); // Генерируем случайный аватар, если нет сохраненного
        localStorage.setItem(`avatar_${username}`, avatarSrc); // Сохраняем его с уникальным ключом
    }

    // Предварительная загрузка изображения
    const img = new Image();
    img.src = avatarSrc;

    img.onload = () => {
        avatarImg.src = avatarSrc; // Устанавливаем аватар
        avatarImg.style.display = 'inline'; // Показываем аватарку

        sidebarAvatarImg.src = avatarSrc; // Устанавливаем аватарку в боковом меню
        sidebarAvatarImg.style.display = 'inline'; // Показываем аватарку
    };

    // Обновляем информацию в sidebar
    let sidebarUserInfo = document.querySelector(".sidebar-content .spanOne");
    sidebarUserInfo.innerHTML = `${username}`;

    let sidebarUserInfo2 = document.querySelector(".sidebar-content .spanTwo");
    sidebarUserInfo2.innerHTML = `<img src="./img/point.png" class="pointImg">${balance}<img src="./img/point.png" class="pointImg">`;

    localStorage.setItem("username", username);

    if (localStorage.getItem("game_id")) {
        gameButton.setAttribute("data-game", "stop");
    } else {
        gameButton.setAttribute("data-game", "start");
    }
}






// Обработчик выхода
document.getElementById("exit").addEventListener("click", exit);
document.getElementById("exit2").addEventListener("click", exit);



function exit() {
    let popUpSection = document.querySelector("section");
    popUpSection.style.display = "flex"; 
    let userInfo = document.querySelector("header span");
    userInfo.innerHTML = `[]`;

    localStorage.removeItem("username");
}

// Проверка пользователя
async function checkUser() {
    if (localStorage.getItem("username")) {
        username = localStorage.getItem("username");
        let response = await sendRequest("user", "GET", { username });
        if (response.error) {
            alert(response.message);
        } else {
            balance = response.balance;
            showUser(); // Показываем пользователя и его данные
        }
    } else {
        let popUpSection = document.querySelector("section");
        popUpSection.style.display = "flex"; 
    }
}

// Обработчик для установки очков
let pointBtns = document.getElementsByName("point");
pointBtns.forEach((elem) => {
    elem.addEventListener("input", setPoints);
});

function setPoints() {
    let checkedBtn = document.querySelector("input:checked");
    points = +checkedBtn.value;
}

let gameButton = document.getElementById("gameButton");
gameButton.addEventListener("click", startOrStopGame);

function startOrStopGame() {
    let option = gameButton.getAttribute("data-game");
    if (option == "start") {
        if (points > 0) {
            startGame();
        }
    } else if (option == "stop") {
        // Логика остановки игры
    }
}

async function startGame() {
    let response = await sendRequest("new_game", "POST", { username, points });
    if (response.error) {
        alert(response.message);
    } else {
        console.log(response);
    }
}

// Добавляем обработчик клика для кнопки "Войти"
const registrationButton = document.getElementById('registrationButton');
const usernameInput = authorizationForm.querySelector('input[name="username"]');
const errorMessage = document.createElement('p');

errorMessage.style.color = 'red';
errorMessage.style.display = 'none'; // Скрываем сообщение по умолчанию
authorizationForm.appendChild(errorMessage);

registrationButton.addEventListener('click', () => {
    if (usernameInput.value.trim() === '') {
        errorMessage.textContent = 'Обязательное поле';
        errorMessage.style.display = 'block'; // Показываем сообщение
        usernameInput.classList.add('error'); // Добавляем класс ошибки
    } else {
        errorMessage.style.display = 'none'; // Скрываем сообщение, если поле заполнено
        usernameInput.classList.remove('error'); // Удаляем класс ошибки
        // Здесь добавьте код для авторизации
        authorizationForm.dispatchEvent(new Event('submit'));
    }
});
usernameInput.addEventListener('input', () => {
    if (usernameInput.value.length > 20) {
        usernameInput.value = usernameInput.value.slice(0, 20); // Обрезаем ввод до 20 символов
    }
});


const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const closeAutuExit = document.getElementById('exit2');

burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Закрыть меню
});

closeAutuExit.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Закрыть меню
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !burgerMenu.contains(event.target)) {
        sidebar.classList.remove('active'); // Закрыть меню
    }
});

// Обработка свайпов по всему экрану
let startX;

document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.addEventListener('touchmove', (event) => {
    const currentX = event.touches[0].clientX;
    // Проверяем, что свайп идет слева направо
    if (startX - currentX < 50) {
        sidebar.classList.remove('active'); // Закрыть меню
    }
});


function getRandomAvatar() {
    const avatarElements = document.querySelectorAll('#avatars img');
    const randomIndex = Math.floor(Math.random() * avatarElements.length);
    return avatarElements[randomIndex].src;
}
>>>>>>> 7b8447aa2056faaac1f5fbe22898dd13cabf37c0
