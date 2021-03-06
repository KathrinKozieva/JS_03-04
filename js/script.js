var myTest = {
	createBox: function () {
		var box = document.createElement('div');
		box.classList.add('box');
		var body = document.getElementsByTagName(body);
		document.body.appendChild(box);
	},

	createHeading: function () {
		var heading = document.createElement('h2');
		heading.classList.add('heading');
		heading.innerHTML = "Тест по программированию:";
		var box = document.querySelector('.box');
		box.appendChild(heading);
	},

	createList: function() {
		var list = document.createElement('ol');
		list.classList.add('list');
		var box = document.querySelector('.box');
		box.appendChild(list);
	}, 

	createListItem: function(count) {
		for (var i = 1; i <= count; i++) {
			var listItem = document.createElement('li');
			listItem.classList.add('listItem');
			listItem.innerHTML = ("Вопрос №" + (i));
			var list = document.querySelector('.list');
			list.appendChild(listItem);
		}

		var listItem = document.querySelectorAll('li');

		for (var i = 0; i < listItem.length; i++) {
			listItem[i].innerHTML += '<form class="form' + (i + 1) + '"><ul class="listSecond' + (i + 1) + '"></ul></form>'
		}
	},

	createListItemSecond1: function(count) {
		for (var i = 1; i <= count; i++) {
			var listItemSecond = document.createElement('li');
			listItemSecond.className = 'listItemSecond';
			listItemSecond.innerHTML = '<label><input type="checkbox" name="' + 1 + i +'"/>Вариант ответа ' + [i] + '</label>';
			var listSecond = document.querySelector('.listSecond1');
			listSecond.appendChild(listItemSecond);
		}
	},

	createListItemSecond2: function(count) {
		for (var i = 1; i <= count; i++) {
			var listItemSecond = document.createElement('li');
			listItemSecond.className = 'listItemSecond';
			listItemSecond.innerHTML = '<label><input type="checkbox" name="' + 2 + i +'"/>Вариант ответа ' + [i] + '</label>';
			var listSecond = document.querySelector('.listSecond2');
			listSecond.appendChild(listItemSecond);
		}
	},

	createListItemSecond3: function(count) {
		for (var i = 1; i <= count; i++) {
			var listItemSecond = document.createElement('li');
			listItemSecond.className = 'listItemSecond';
			listItemSecond.innerHTML = '<label><input type="checkbox" name="' + 3 + i +'"/>Вариант ответа ' + [i] + '</label>';
			var listSecond = document.querySelector('.listSecond3');
			listSecond.appendChild(listItemSecond);
		}
	},

	createButton: function() {	
		var submit = document.createElement('button');
		submit.innerHTML = "Проверить мои результаты";
		submit.classList.add('submit');
		var box = document.querySelector('.box');
		box.appendChild(submit);
	},
	
	create: function() {
		this.createBox()
		this.createHeading()
		this.createList()
		this.createListItem(3)
		this.createListItemSecond1(3)
		this.createListItemSecond2(3)
		this.createListItemSecond3(3)
		this.createButton()
	}
}

myTest.create();