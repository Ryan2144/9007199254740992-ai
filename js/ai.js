function AI(grid) {
	this.grid = grid;
	this.lastMove = 0;
	this.moves = [0, 1, 2, 3];
}

// Return an int:
// 0: up, 1: right, 2: down, 3: left
AI.prototype.getBest = function () {
	bestScore = 0;
	bestMove = -1;
	for(var direction in this.moves) {
		var newGrid = this.grid.clone();
		if(newGrid.move(direction)) {
			if (newGrid.scoreGrid() > bestScore) {
				bestScore = newGrid.scoreGrid();
				bestMove = direction;
			}
		}
	}
	return bestMove;
}