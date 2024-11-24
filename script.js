// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js
<script src="./config.js"></script>
var config = {
  draggable: true,
  position: '7k/8/8/8/8/8/8/R6K',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)

var board1 = Chessboard('myBoard', 'start')

updateStatus()

//7k/8/8/8/8/8/8/R6K