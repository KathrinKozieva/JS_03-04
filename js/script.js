var box = document.createElement('div');
box.classList.add('box');

var body = document.getElementsByTagName(body);
document.body.appendChild(box);

var heading = document.createElement('h2');
heading.classList.add('heading');
heading.innerHTML = "Тест по программированию:";

var box = document.querySelector('.box');
box.appendChild(heading);

var list = document.createElement('ol');
list.classList.add('list');

var box = document.querySelector('.box');
box.appendChild(list);

function createListItem(count1, count2) {
	for (i = 1; i <= count1; i++) {
		var listItem = document.createElement('li');
		listItem.classList.add('listItem');
		listItem.innerHTML = ("Вопрос №" + (i));

		var list = document.querySelector('.list');
		list.appendChild(listItem);
	}

	var listSecond = document.createElement('ul');
	listSecond.classList.add('listSecond');
	
	for (i = 1; i <= count2; i++) {
		var listItemSecond = document.createElement('li');
		listItemSecond.classList.add('listItemSecond');
		listItemSecond.innerHTML = '<input type="checkbox"/><label>Вариант ответа ' + [i] + '</label>';
		listSecond.appendChild(listItemSecond);
	}

	var listSecond2 = listSecond.cloneNode(true);
	var listSecond3 = listSecond.cloneNode(true);

	var li = document.querySelectorAll('.listItem');
		li[0].appendChild(listSecond);
		li[1].appendChild(listSecond2);
		li[2].appendChild(listSecond3);
}

createListItem(3, 3);


var submit = document.createElement('button');
submit.innerHTML = "Проверить мои результаты";
submit.classList.add('submit');

var box = document.querySelector('.box');
box.appendChild(submit);