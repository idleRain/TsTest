class Snake {
    constructor() {
        this.element = document.querySelector('#snake');
        this.head = document.querySelector('#snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取 X
    get X() {
        return this.head.offsetLeft;
    }
    // 获取 Y
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头的坐标
    set X(value) {
        this.head.style.left = value.toString();
    }
    set Y(value) {
        this.head.style.top = value.toString();
    }
    // 增加蛇身
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }
}
export default Snake;
//# sourceMappingURL=snake.js.map