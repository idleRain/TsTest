import Snake from "./snake"
import Food from "./food"
import ScorePanel from "./score"
import * as assert from "assert";

class GameControl {
	// 蛇
	snake: Snake
	// 食物
	food: Food
	// 记分牌
	scorePanel: ScorePanel
	// 蛇移动的方向
	directions: string = ''
	// 控制游戏结束
	isLive: boolean = true

	constructor() {
		this.snake = new Snake()
		this.food = new Food()
		this.scorePanel = new ScorePanel()
		this.init()
	}

	// 游戏初始化，按下按键后游戏开始
	init() {
		document.addEventListener('keydown', this.keyDownHandler)
		console.log('%c%s', 'color:#ee3f4d;font-weight:900;font-size:50px;text-shadow:2px 2px 2px #aaa;font-family:"Chiller"', 'S T O P   Y O U R   B E H A V I O R !')
		this.run()
	}

	// 键盘按下的处理函数
	keyDownHandler = (e: KeyboardEvent): void => {
		const keyArr = ['a', 's', 'd', 'w']
		// 如果按其他的按键则直接返回
		if (!keyArr.includes(e.key)) return

		const d = this.directions
		const k: string = e.key
		if (d === '') this.directions = e.key

		// 修复蛇可以掉头的问题
		if (d === 'a' && k !== 'd') this.directions = k
		if (d === 's' && k !== 'w') this.directions = k
		if (d === 'd' && k !== 'a') this.directions = k
		if (d === 'w' && k !== 's') this.directions = k

		// this.run()
	}

	// 控制蛇移动
	run(): void {
		// 获取蛇当前的坐标
		let X = this.snake.X
		let Y = this.snake.Y

		// 检查是否吃到食物
		this.checkEat(X, Y)

		// 通过方向让蛇移动
		switch (this.directions) {
			case 'w':		// 上
				Y -= 10
				break
			case 'a':		// 左
				X -= 10
				break
			case 's':		// 下
				Y += 10
				break
			case 'd':		// 右
				X += 10
				break
		}

		// 修改蛇的坐标
		try {
			this.snake.X = X
			this.snake.Y = Y
		} catch (e: any) {
			// 捕获到异常后终止游戏
			this.isLive = false
			alert(e.message)
			// 刷新页面
			window.location.reload()
		}

		// 让蛇根据等级持续移动，等级越高速度越快
		if (this.isLive) setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 10)
	}

	// 定义一个检查蛇是否吃到食物的方法
	checkEat(X: number, Y: number) {
		if (X === this.food.X && Y === this.food.Y) {
			// 食物的位置重置
			this.food.change()
			// 分数增加
			this.scorePanel.addScore()
			// 增加一节蛇的身体
			this.snake.addBody()

			// console.log('吃到了')
		}
	}
}

export default GameControl
