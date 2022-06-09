
// 定义记分牌的类
class ScorePanel {
	// 分数
	score = 3
	// 等级
	level = 1
	// 分数和等级的元素
	scoreEle: HTMLElement
	levelEle: HTMLElement

	constructor() {
		this.scoreEle = document.querySelector('#score')!
		this.levelEle = document.querySelector('#level')!
	}

	// 设置一个加分的方法
	addScore(): void {
		this.score++
		this.scoreEle.innerHTML = this.score.toString()
		// 判断分数升级
		if (this.score % 5 === 0) this.levelUp()
	}

	// 设置一个升级的方法
	levelUp(): void {
		this.level++
		this.levelEle.innerHTML = this.level.toString()
	}
}

export default ScorePanel
