import Snake from "./snake"
import Food from "./food"
import ScorePanel from "./score"

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
		document.addEventListener('keydown',this.keyDownHandler)
		this.run()
	}

	// 键盘按下的处理函数
	keyDownHandler = (e: KeyboardEvent): void => {
		this.directions = e.key
		// this.run()
	}

	// 控制蛇移动
	run(): void {
		// 获取蛇当前的坐标
		let X = this.snake.X
		let Y = this.snake.Y
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
		this.snake.X = X
		this.snake.Y = Y

		// 让蛇根据等级持续移动，等级越高速度越快
		if (this.isLive) setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 10)
	}
}

export default GameControl
