"use strict";

const generator = {
	settings: {
		btnLink: document.querySelector(`.btnGen`),
		blockNum: document.querySelector(`.blockNum`),
		number: 0,
		numberArr: [],
	},
	init() {
		this.settings.btnLink.addEventListener(`click`, () => this.getRandomNumber());
	},
	/**
	 * получает значение введенные пользователем и генерирует число
	 */
	getRandomNumber() {
		const min = +(document.querySelector(`.inputNumOne`).value);
		const max = +(document.querySelector(`.inputNumTwo`).value);
		document.querySelector(`.inputNumOne`).disabled = true;
		document.querySelector(`.inputNumTwo`).disabled = true;
		let rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		this.settings.number = rand;
		this.checkNumber(this.settings.number, max, min);
	},
	/**
	 * отображает сгенерируемое число
	 */
	render() {
		this.settings.blockNum.textContent = `${this.settings.number}`;
	},
	/**
	 * проверяет если число в массиве, если нет добавляет
	 * @param number -сгенерированное число
	 * @param max - максимум интервала генерации
	 * @param min - минимум интервала генерации
	 */
	checkNumber(number, max, min) {
		if (this.settings.numberArr.length === (max - min + 1)) {
			this.gameover();
		}
		else if (this.settings.numberArr.includes(number)) {
			this.getRandomNumber();
		} else {
			this.settings.numberArr.push(number);
			console.log(this.settings.numberArr);
			this.render();
		}

	},
	/**
	 * заканчивает генерировать полсе исчерпания вариантов.
	 */
	gameover() {
		let gameover = document.querySelector(`.intro`);
		gameover.textContent = ``;
		gameover.innerHTML = `Вы исчерпали количество вариантов <br> ваш массив - ${this.settings.numberArr}`;
		this.settings.btnLink.removeEventListener(`click`, () => this.getRandomNumber());
	},
};
generator.init();
