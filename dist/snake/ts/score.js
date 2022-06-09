// 定义记分牌的类
class ScorePanel {
    constructor() {
        // 分数
        this.score = 3;
        // 等级
        this.level = 1;
        this.scoreEle = document.querySelector('#score');
        this.levelEle = document.querySelector('#level');
    }
    // 设置一个加分的方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score.toString();
        // 判断分数升级
        if (this.score % 5 === 0)
            this.levelUp();
    }
    // 设置一个升级的方法
    levelUp() {
        this.level++;
        this.levelEle.innerHTML = this.level.toString();
    }
}
export default ScorePanel;
//# sourceMappingURL=score.js.map