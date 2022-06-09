// 定义食物类
class Food {
	// 定义一个属性表示食物所对应的元素
	element: HTMLElement

	constructor() {
		this.element = document.querySelector('#food')!
	}

	// 定义一个获取食物 X 轴坐标的方法
	get X(): number {
		return this.element.offsetLeft
	}

	// 定义一个获取食物 Y 轴坐标的方法
	get Y(): number {
		return this.element.offsetTop
	}

	// 修改食物位置
	change(): void {
		let left = Math.round(Math.random() * 29) * 10
		let top = Math.round(Math.random() * 29) * 10

		this.element.style.left = left + 'px'
		this.element.style.top = top + 'px'
	}
}

export default Food
