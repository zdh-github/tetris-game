(function (global) {
    type shape = Array<Array<number>>;

    const I: Array<shape> = [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    ]
    const L: Array<shape> = [
        [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2]
        ],
        [
            [0, 0, 0],
            [2, 2, 2],
            [2, 0, 0]
        ],
        [
            [2, 2, 0],
            [0, 2, 0],
            [0, 2, 0]
        ],
        [
            [0, 0, 2],
            [2, 2, 2],
            [0, 0, 0]
        ]
    ]
    const J: Array<shape> = [
        [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0]
        ],
        [
            [3, 0, 0],
            [3, 3, 3],
            [0, 0, 0]
        ],
        [
            [0, 3, 3],
            [0, 3, 0],
            [0, 3, 0]
        ],
        [
            [0, 0, 0],
            [3, 3, 3],
            [0, 0, 3]
        ]
    ]
    const T: Array<shape> = [
        [
            [0, 0, 0],
            [4, 4, 4],
            [0, 4, 0]
        ],
        [
            [0, 4, 0],
            [4, 4, 0],
            [0, 4, 0]
        ],
        [
            [0, 4, 0],
            [4, 4, 4],
            [0, 0, 0]
        ],
        [
            [0, 4, 0],
            [0, 4, 4],
            [0, 4, 0]
        ]
    ]
    const S: Array<shape> = [
        [
            [0, 0, 0],
            [0, 5, 5],
            [5, 5, 0]
        ],
        [
            [5, 0, 0],
            [5, 5, 0],
            [0, 5, 0]
        ],
        [
            [0, 5, 5],
            [5, 5, 0],
            [0, 0, 0]
        ],
        [
            [0, 5, 0],
            [0, 5, 5],
            [0, 0, 5]
        ]
    ]
    const Z: Array<shape> = [
        [
            [0, 0, 0],
            [6, 6, 0],
            [0, 6, 6]
        ],
        [
            [0, 6, 0],
            [6, 6, 0],
            [6, 0, 0]
        ],
        [
            [6, 6, 0],
            [0, 6, 6],
            [0, 0, 0]
        ],
        [
            [0, 0, 6],
            [0, 6, 6],
            [0, 6, 0]
        ]
    ]
    const O: Array<shape> = [
        [
            [7, 7],
            [7, 7]
        ]
    ]

    class Scene {
        public device: string = "";
        public canvas: HTMLCanvasElement | null = null;
        protected core: CanvasRenderingContext2D | null = null;
        protected width: number = 0;
        protected height: number = 0;
        constructor(selector: string) {
            let canvas: HTMLCanvasElement | null = document.querySelector(selector);
            if (canvas && canvas.constructor === HTMLCanvasElement) {
                this.width = canvas.width = document.body.offsetWidth;
                this.height = canvas.height = document.body.offsetHeight;
                this.canvas = canvas;
                this.core = canvas.getContext("2d");
                // @ts-ignore
                this.device = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || global.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent || navigator.vendor || global.opera) ? "mobile" : "pc";
            } else {
                console.error(new Error(`${selector} is not a canvas element`));
            }
        }
    }

    interface Coord {
        x: number;
        y: number
    }

    class TetrisGame extends Scene {
        private matrix: Array<Array<number>> = [];
        private matrixColor: string = "#000";
        private playerShapes: Array<shape> = [];
        private playerShape: shape = [];
        private playerShapeIndex: number = 0;
        private playerScore: number = 0;
        private playerTop: number = 0;
        private playerLeft: number = 0;
        private playerColors: Array<string> = ["", "red", "orange", "yellow", "green", "cyan", "blue", "purple"];
        private createMatrix() {
            this.matrix = [];
            for (let y = 0; y < this.height; y++) {
                this.matrix.push([]);
                for (let x = 0; x < this.width; x++) {
                    this.matrix[y].push(0);
                }
            }
        }
        private drawMatrix() {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    let val: number = this.matrix[y][x];
                    if (val > 0) {
                        this.core.fillStyle = this.playerColors[val];
                        this.core.fillRect(x, y, 1, 1);
                    } else {
                        this.core.fillStyle = this.matrixColor;
                        this.core.fillRect(x, y, 1, 1);
                    }
                }
            }
        }
        private createPlayerShapes() {
            let allShapes: Array<Array<shape>> = [I, L, J, T, S, Z, O];
            this.playerShapes = allShapes[Math.floor(Math.random() * allShapes.length)];
            this.createPlayerShape();
        }
        private createPlayerShape() {
            this.playerShapeIndex = Math.floor(Math.random() * this.playerShapes.length);
            this.playerShape = this.playerShapes[this.playerShapeIndex];
            this.playerLeft = Math.floor((this.width - this.playerShape[0].length) / 2);
            this.playerTop = 0;
            this.writePlayerShape();
        }
        private writePlayerShape() {
            for (let y = 0; y < this.playerShape.length; y++) {
                let row = this.playerShape[y];
                for (let x = 0; x < row.length; x++) {
                    let val = row[x];
                    if (val > 0) {
                        this.matrix[y + this.playerTop][x + this.playerLeft] = val;
                    }
                }
            }
            this.drawMatrix();
        }
        private clearPlayerShape() {
            for (let y = 0; y < this.playerShape.length; y++) {
                let row = this.playerShape[y];
                for (let x = 0; x < row.length; x++) {
                    let val = row[x];
                    if (val > 0) {
                        this.matrix[y + this.playerTop][x + this.playerLeft] = 0;
                    }
                }
            }
        }
        private checkOffsetPlayerShape(nextPlayerShape: shape, nextPlayerLeft: number, nextPlayerTop: number) {
            for (let y = 0; y < nextPlayerShape.length; y++) {
                let row = nextPlayerShape[y];
                for (let x = 0; x < row.length; x++) {
                    let val = row[x];
                    if (val > 0) {
                        if (this.matrix[y + nextPlayerTop] === undefined || this.matrix[y + nextPlayerTop][x + nextPlayerLeft] !== 0) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        private offsetPlayerShape(nextPlayerShape: shape) {
            let n = -1;
            let offsetLeft = 0;
            let offsetRight = 0;
            for (let i = 0; i < nextPlayerShape.length; i++) {
                if (nextPlayerShape[i].every(item => item === 0)) {
                    if (n > -1) {
                        offsetRight += 1;
                    } else {
                        offsetLeft += 1;
                    }
                } else {
                    n = i;
                }
            }
            if (this.checkOffsetPlayerShape(nextPlayerShape, this.playerLeft - offsetRight, this.playerTop)) {
                this.playerLeft -= offsetRight;
                this.transformPlayerShape();
            }
            if (this.checkOffsetPlayerShape(nextPlayerShape, this.playerLeft + offsetLeft, this.playerTop)) {
                this.playerLeft += offsetLeft;
                this.transformPlayerShape();
            }
        }
        private checkTranformPlayerShape(nextPlayerShape: shape) {
            for (let y = 0; y < nextPlayerShape.length; y++) {
                let row = nextPlayerShape[y];
                for (let x = 0; x < row.length; x++) {
                    let val = row[x];
                    if (val > 0) {
                        if (this.matrix[y + this.playerTop] === undefined || this.matrix[y + this.playerTop][x + this.playerLeft] !== 0) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        public transformPlayerShape() {
            this.clearPlayerShape();
            let nextPlayerShapeIndex: number = this.playerShapeIndex + 1 === this.playerShapes.length ? 0 : this.playerShapeIndex + 1;
            let nextPlayerShape: shape = this.playerShapes[nextPlayerShapeIndex];
            if (this.checkTranformPlayerShape(nextPlayerShape)) {
                this.playerShape = nextPlayerShape;
                this.playerShapeIndex = nextPlayerShapeIndex;
                this.writePlayerShape();
            } else {
                this.offsetPlayerShape(nextPlayerShape);
            }
        }
        private checkMovePlayerShape(x: number, y: number) {
            let nextPlayerLeft: number = this.playerLeft + x;
            let nextPlayerTop: number = this.playerTop + y;
            for (let y = 0; y < this.playerShape.length; y++) {
                let row = this.playerShape[y];
                for (let x = 0; x < row.length; x++) {
                    let val = row[x];
                    if (val > 0) {
                        if (this.matrix[y + nextPlayerTop] === undefined || this.matrix[y + nextPlayerTop][x + nextPlayerLeft] !== 0) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        public movePlayerShape(x, y) {
            this.clearPlayerShape();
            if (this.checkMovePlayerShape(x, y)) {
                this.playerLeft += x;
                this.playerTop += y;
                this.writePlayerShape();
            } else if (y > 0) {
                this.writePlayerShape();
                if (this.matrix[0].some(item => item > 0)) {
                    this.reset();
                } else {
                    for (let y = 0; y < this.matrix.length; y++) {
                        if (this.matrix[y].every(item => item > 0)) {
                            this.playerScore += 1;
                            let score: HTMLHeadingElement = document.querySelector("h1");
                            if (score) score.innerText = `${this.playerScore}`;
                            this.matrix.splice(y, 1);
                            this.matrix.unshift(new Array<number>(this.width).fill(0));
                        }
                    }
                    this.createPlayerShapes();
                }
            }
        }
        private start() {
            this.createMatrix();
            this.createPlayerShapes();
        }
        private reset() {
            this.playerScore = 0;
            this.start();
        }
        constructor(selector: string) {
            super(selector);
            if (this.canvas) {
                this.width = this.canvas.width = 10;
                this.height = this.canvas.height = 20;
                this.start();
            }
        }
    }

    const tetrisGame = new TetrisGame("canvas");

    let interval: number = 30;
    let timestamp: number = 0;

    function animation() {
        timestamp += 1;
        if (timestamp > interval) {
            timestamp = 0;
            tetrisGame.movePlayerShape(0, 1);
        }
        requestAnimationFrame(animation);
    }

    global.addEventListener("load", function () {
        tetrisGame.canvas && animation();
        if (tetrisGame.device === "pc") {
            global.addEventListener("keydown", function (event: KeyboardEvent) {
                switch (event.key) {
                    case "ArrowUp":
                        tetrisGame.transformPlayerShape();
                        break;
                    case "ArrowDown":
                        tetrisGame.movePlayerShape(0, 1);
                        break;
                    case "ArrowLeft":
                        tetrisGame.movePlayerShape(-1, 0);
                        break;
                    case "ArrowRight":
                        tetrisGame.movePlayerShape(1, 0);
                        break;
                }
            });
        } else if (tetrisGame.device === "mobile") {
            let btnGroup = document.getElementById("btn_group");
            let up = document.getElementById("up");
            let left = document.getElementById("left");
            let right = document.getElementById("right");
            let down = document.getElementById("down");
            if (btnGroup && up && left && right && down) {
                btnGroup.style.display = "block";
                up.addEventListener("click", function () {
                    tetrisGame.transformPlayerShape();
                });
                left.addEventListener("click", function () {
                    tetrisGame.movePlayerShape(-1, 0);
                });
                right.addEventListener("click", function () {
                    tetrisGame.movePlayerShape(1, 0);
                });
                down.addEventListener("click", function () {
                    tetrisGame.movePlayerShape(0, 1);
                });
            }
        }
    });
})(globalThis)