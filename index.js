const students = [
	{
		name: "Martin",
		lastName: "Lant",
		marks: [9, 8, null, 7, 5],
	},

	{
		name: "Francesco",
		lastName: "Portus",
		marks: [5, 4, 2, 3, 2],
	},

	{
		name: "Bill",
		lastName: "Merdoc",
		marks: [10, null, null, null, 10],
	},

	{
		name: "John",
		lastName: "Entman",
		marks: [9, 8, 9, 7, 5],
	},
];

const cardsContainer = document.querySelector(".cards-container");
const returnVal = (obj) => {
	return Math.round(
		obj.reduce(function (previousValue, currentValue) {
			return previousValue + currentValue;
		}, 0) / obj.length
	);
};

students.map((item) =>
	cardsContainer.insertAdjacentHTML(
		"beforeend",
		`<div class=${
			returnVal(item.marks) < 5 ? "card red-border" : "card green-border"
		}>
<p class="name">Name: ${item.name}</p>
<p class="surname">Surname: ${item.lastName}</p>
<div class="lectures">Lectures: ${
			item.marks.filter((item) => item).length
		}</div>
<div class="ave-mark">Ave-mark: ${Math.round(
			item.marks.reduce(function (previousValue, currentValue) {
				return previousValue + currentValue;
			}, 0) / item.marks.length
		)}</div></div>`
	)
);

const cards = document.querySelectorAll(".card");

for (card of cards) {
    let counter = 0
	card.addEventListener("click", (e) => {
        counter++
		e.target.classList.toggle("gray-bg");
	});


}
