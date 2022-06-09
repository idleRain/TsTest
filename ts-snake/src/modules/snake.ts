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
	set X(value) {
		// 如果新值和旧值相同，则直接返回
		if (this.X === value) return

		// 移动时让身体跟着动
		this.moveBody()

		// 判断蛇是否撞墙，是则抛出异常
		if (value < 0 || value > 290) throw new Error('GAME OVER!')

		this.head.style.left = value.toString() + 'px'
	}

	set Y(value) {
		// 如果新值和旧值相同，则直接返回
		if (this.Y === value) return

		// 判断蛇是否撞墙，是则抛出异常
		if (value < 0 || value > 290) throw new Error('GAME OVER!')

		// 移动时让身体跟着动
		this.moveBody()

		this.head.style.top = value.toString() + 'px'
	}

	// 增加蛇身
	addBody(): void {
		this.element.insertAdjacentHTML('beforeend', '<div></div>')
	}

	// 蛇身体移动的方法
	moveBody(): void {
		for (let i = this.bodies.length - 1; i > 0 ; i--) {
			let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
			let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

			// 把值设置到身体上
			;(this.bodies[i] as HTMLElement).style.left = X + 'px'
			;(this.bodies[i] as HTMLElement).style.top = Y + 'px'
		}
	}
}

export default Snake
