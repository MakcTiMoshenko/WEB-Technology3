function show_text(name){
    if(confirm(`Точно ${name}`))
    alert(`Рад что ты ${name}`);
    else name = prompt("Тогда введи верное имя");
    alert(`Ну вот, тперь понятно что ты ${name}`);
}

let name = prompt("Как вас зовут?");
show_text(name);