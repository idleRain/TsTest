class Snake {
	// 蛇头
	head: HTMLElement
	// 身体
	bodies: HTMLCollection
	// 蛇的容器
	element: HTMLElement

	constructor() {
		this.element = document.querySelector('#snake')!
		this.head = document.querySelector('#snake > div') as HTMLElement
		this.bodies = this.element.getElementsByTagName('div')
	}

	// 获取 X
	get X(): number {
		return this.head.offsetLeft
	}
	// 获取 Y
	get Y(): number {
		return this.head.offsetTop
	}

	// 设置蛇头的坐标
	set X(value)  {
		this.head.style.left = value.toString() + 'px'
	}
	set Y(value) {
		this.head.style.top = value.toString() + 'px'
	}

	// 增加蛇身
	addBody() {
		this.element.insertAdjacentHTML('beforeend','<div></div>')
	}
}

export default Snake
