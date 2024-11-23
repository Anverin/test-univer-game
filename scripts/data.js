const data = {
    rating: [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		}
    ],
    friends: [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
}


const sortingKey = 'points';
let sortedDataRating = data.rating.sort((user1, user2) => parseInt(user1[sortingKey]) < parseInt(user2[sortingKey]) ? 1 : -1);

// const friendsInTable = data.friends.filter((obj1) => {
// 	return data.rating.find(obj2 => obj1.id === obj2.id)
// })

let table = document.createElement('table');
table.className = 'table';

let container = document.querySelector('.rating-popup-table');
container.append(table);

let row;
for (let i = 0; i < sortedDataRating.length; i++) {
	row = document.createElement('tr');
	row.innerHTML = `<td>${i+1}</td><td>${sortedDataRating[i].name} ${sortedDataRating[i].lastName}</td><td>${sortedDataRating[i].points}`;
	table.appendChild(row);

	let foundFriend = data.friends.find(item =>
		item.id === sortedDataRating[i].id);

	if (foundFriend !== undefined) {
		row.style.color = '#00819CFF';
		row.style.background = 'linear-gradient(0deg, rgb(1, 159, 203) 0%, rgb(187, 233, 243) 28%, rgb(187, 233, 243) 70%, rgb(1, 159, 203) 100%)';
	}

}



