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

	constructor() {
		this.snake = new Snake()
		this.food = new Food()
		this.scorePanel = new ScorePanel()
		this.init()
	}

	// 游戏初始化，按下按键后游戏开始
	init() {
		document.addEventListener('keydown',this.keyDownHandler)
	}

	// 键盘按下的处理函数
	keyDownHandler(e: KeyboardEvent) {
		console.log(e.key)
	}
}

export default GameControl
