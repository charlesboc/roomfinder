var floorDisplay = 3;

var pts = [

// 2nd floor
{ floor: 2, ref: "R02,01", x: 110, y: 94 },
{ floor: 2, ref: "R02,02", x: 109, y: 132 },
{ floor: 2, ref: "R02,03", x: 108, y: 392 },
{ floor: 2, ref: "R02,12", x: 932, y: 154 },
{ floor: 2, ref: "R02,13", x: 968, y: 153 },
{ floor: 2, ref: "R02,15", x: 1040, y: 226 },
{ floor: 2, ref: "R02,17", x: 1088, y: 536 },
//R02,09?

{ floor: 2, ref: "", x: 138, y: 94 },
{ floor: 2, ref: "", x: 138, y: 132 },
{ floor: 2, ref: "", x: 138, y: 190 },
{ floor: 2, ref: "", x: 138, y: 232 },
{ floor: 2, ref: "", x: 138, y: 288 },
{ floor: 2, ref: "", x: 138, y: 330 },
{ floor: 2, ref: "", x: 138, y: 392 },
{ floor: 2, ref: "", x: 552, y: 190 },
{ floor: 2, ref: "", x: 552, y: 272 },
{ floor: 2, ref: "", x: 552, y: 330 },
{ floor: 2, ref: "", x: 552, y: 372 },
{ floor: 2, ref: "", x: 600, y: 372 },
{ floor: 2, ref: "", x: 600, y: 454 },
{ floor: 2, ref: "", x: 774, y: 454 },
{ floor: 2, ref: "", x: 1068, y: 454 },
{ floor: 2, ref: "", x: 774, y: 272 },
{ floor: 2, ref: "", x: 676, y: 272 },
{ floor: 2, ref: "", x: 600, y: 272 },
{ floor: 2, ref: "S02A", x: 676, y: 170 },
{ floor: 2, ref: "", x: 774, y: 378 },
{ floor: 2, ref: "", x: 816, y: 378 },
{ floor: 2, ref: "", x: 816, y: 328 },
{ floor: 2, ref: "S02B", x: 882, y: 328 },
{ floor: 2, ref: "", x: 774, y: 338 },
{ floor: 2, ref: "E", x: 726, y: 338 },
{ floor: 2, ref: "", x: 1068, y: 536 },
{ floor: 2, ref: "", x: 1068, y: 268 },
{ floor: 2, ref: "", x: 1020, y: 268 },
{ floor: 2, ref: "", x: 1020, y: 226 },
{ floor: 2, ref: "", x: 1020, y: 182 },
{ floor: 2, ref: "", x: 968, y: 182 },
{ floor: 2, ref: "", x: 932, y: 182 },
{ floor: 2, ref: "", x: 832, y: 182 },
{ floor: 2, ref: "", x: 832, y: 272 },
{ floor: 2, ref: "", x: 666, y: 454 },
{ floor: 2, ref: "", x: 666, y: 272 },

// 3rd floor
{ floor: 3, ref: "R03,01", x: 110, y: 94 },
{ floor: 3, ref: "R03,02", x: 109, y: 132 },
{ floor: 3, ref: "R03,03", x: 108, y: 392 },
{ floor: 3, ref: "R03,09", x: 724, y: 153 },
{ floor: 3, ref: "R03,10", x: 838, y: 154 },
{ floor: 3, ref: "R03,11", x: 966, y: 155 },
{ floor: 3, ref: "R03,13", x: 992, y: 210 },
{ floor: 3, ref: "R03,14", x: 1082, y: 472 },

{ floor: 3, ref: "", x: 138, y: 94 },
{ floor: 3, ref: "", x: 138, y: 132 },
{ floor: 3, ref: "", x: 138, y: 190 },
{ floor: 3, ref: "", x: 138, y: 336 },
{ floor: 3, ref: "", x: 138, y: 392 },
{ floor: 3, ref: "", x: 552, y: 190 },
{ floor: 3, ref: "", x: 552, y: 252 },
{ floor: 3, ref: "", x: 552, y: 336 },
{ floor: 3, ref: "", x: 552, y: 372 },
{ floor: 3, ref: "", x: 600, y: 372 },
{ floor: 3, ref: "", x: 600, y: 454 },
{ floor: 3, ref: "", x: 774, y: 454 },
{ floor: 3, ref: "", x: 1068, y: 454 },
{ floor: 3, ref: "", x: 1082, y: 454 },
{ floor: 3, ref: "", x: 1068, y: 180 },
{ floor: 3, ref: "", x: 992, y: 180 },
{ floor: 3, ref: "", x: 966, y: 180 },
{ floor: 3, ref: "", x: 838, y: 180 },
{ floor: 3, ref: "", x: 752, y: 180 },
{ floor: 3, ref: "", x: 724, y: 180 },
{ floor: 3, ref: "", x: 752, y: 272 },
{ floor: 3, ref: "", x: 774, y: 272 },
{ floor: 3, ref: "", x: 600, y: 286 },
{ floor: 3, ref: "", x: 676, y: 286 },
{ floor: 3, ref: "", x: 600, y: 252 },
{ floor: 3, ref: "S02A", x: 600, y: 172 },
{ floor: 3, ref: "S03A", x: 676, y: 170 },
{ floor: 3, ref: "", x: 774, y: 378 },
{ floor: 3, ref: "", x: 816, y: 378 },
{ floor: 3, ref: "", x: 816, y: 328 },
{ floor: 3, ref: "S03B", x: 882, y: 328 },
{ floor: 3, ref: "", x: 816, y: 406 },
{ floor: 3, ref: "S02B", x: 880, y: 406 },
{ floor: 3, ref: "", x: 774, y: 338 },
{ floor: 3, ref: "E", x: 726, y: 338 },

// 4th floor
{ floor: 4, ref: "R04,01", x: 108, y: 100 },
{ floor: 4, ref: "R04,02", x: 109, y: 136 },
{ floor: 4, ref: "R04,03", x: 107, y: 406 },
{ floor: 4, ref: "R04,09", x: 800, y: 258 },
{ floor: 4, ref: "R04,11", x: 1042, y: 242 },

{ floor: 4, ref: "", x: 142, y: 100 },
{ floor: 4, ref: "", x: 142, y: 136 },
{ floor: 4, ref: "", x: 142, y: 198 },
{ floor: 4, ref: "", x: 142, y: 406 },
{ floor: 4, ref: "", x: 142, y: 344 },
{ floor: 4, ref: "", x: 558, y: 198 },
{ floor: 4, ref: "", x: 558, y: 260 },
{ floor: 4, ref: "", x: 558, y: 344 },
{ floor: 4, ref: "", x: 558, y: 362 },
{ floor: 4, ref: "", x: 614, y: 362 },
{ floor: 4, ref: "", x: 614, y: 260 },
{ floor: 4, ref: "S03A", x: 614, y: 190 },
{ floor: 4, ref: "", x: 614, y: 468 },
{ floor: 4, ref: "", x: 800, y: 468 },
{ floor: 4, ref: "", x: 1096, y: 468 },
{ floor: 4, ref: "", x: 1096, y: 290 },
{ floor: 4, ref: "", x: 1022, y: 290 },
{ floor: 4, ref: "", x: 1022, y: 186 },
{ floor: 4, ref: "", x: 840, y: 186 },
{ floor: 4, ref: "", x: 840, y: 286 },
{ floor: 4, ref: "", x: 800, y: 286 },
{ floor: 4, ref: "", x: 800, y: 350 },
{ floor: 4, ref: "E", x: 748, y: 350 },
{ floor: 4, ref: "", x: 800, y: 396 },
{ floor: 4, ref: "", x: 842, y: 396 },
{ floor: 4, ref: "", x: 842, y: 338 },
{ floor: 4, ref: "", x: 842, y: 424 },
{ floor: 4, ref: "S03B", x: 914, y: 424 },
{ floor: 4, ref: "S05B", x: 913, y: 338 },
{ floor: 4, ref: "", x: 1022, y: 242 },

// 5th floor
{ floor: 5, ref: "R05??", x: 1464, y: 394 },
{ floor: 5, ref: "R05??", x: 1234, y: 366 },

{ floor: 5, ref: "E", x: 1028, y: 478 },
{ floor: 5, ref: "", x: 1092, y: 478 },
{ floor: 5, ref: "", x: 1092, y: 394 },
{ floor: 5, ref: "", x: 1234, y: 394 },
{ floor: 5, ref: "", x: 1092, y: 532 },
{ floor: 5, ref: "", x: 1154, y: 532 },
{ floor: 5, ref: "", x: 1154, y: 574 },
{ floor: 5, ref: "S05B", x: 1241, y: 574 }

]
var map = {};
var nodes = {};
for (var i = 0; i < pts.length; i++) {
	pts[i].key = pts[i].floor + '-' + (pts[i].ref ? pts[i].ref : '#' + i);
}
for (var i = 0; i < pts.length; i++) {
	var closestTop = { dist: Number.MAX_VALUE, index: null };
	var closestLeft = { dist: Number.MAX_VALUE, index: null };
	var closestRight = { dist: Number.MAX_VALUE, index: null };
	var closestBottom = { dist: Number.MAX_VALUE, index: null };
	var upDown = [];
	for (var j = 0; j < pts.length; j++) {
		if (i != j && pts[i].floor == pts[j].floor) {
			if (pts[i].x == pts[j].x && pts[i].y < pts[j].y) {
				var dy = (pts[j].y - pts[i].y);
				if (dy < closestBottom.dist) {
					closestBottom.dist = dy;
					closestBottom.index = j;
				}
			}
			if (pts[i].x == pts[j].x && pts[i].y > pts[j].y) {
				var dy = (pts[i].y - pts[j].y);
				if (dy < closestTop.dist) {
					closestTop.dist = dy;
					closestTop.index = j;
				}
			}
			if (pts[i].y == pts[j].y && pts[i].x < pts[j].x) {
				var dx = (pts[j].x - pts[i].x);
				if (dx < closestRight.dist) {
					closestRight.dist = dx;
					closestRight.index = j;
				}
			}
			if (pts[i].y == pts[j].y && pts[i].x > pts[j].x) {
				var dx = (pts[i].x - pts[j].x);
				if (dx < closestLeft.dist) {
					closestLeft.dist = dx;
					closestLeft.index = j;
				}
			}
		}
		if (pts[i].floor != pts[j].floor && pts[i].ref && pts[j].ref && pts[i].ref == pts[j].ref) {
			upDown.push({
				dist: 500, // default elevator/stairs cost
				index: j
			});
		}
	}
	//if (pts[i].key == '3-#51') debugger;
	map[pts[i].key] = {};
	nodes[pts[i].key] = {
		floor: pts[i].floor,
		x: pts[i].x,
		y: pts[i].y
	};
	if (closestBottom.index != null) {
		map[pts[i].key][pts[closestBottom.index].key] = closestBottom.dist;
		var line = document.createElement('div');
		line.className = 'line';
		line.style.top = pts[i].y + 'px';
		line.style.left = pts[i].x + 'px';
		line.style.height = (pts[closestBottom.index].y - pts[i].y + 1) + 'px';
		if (floorDisplay == pts[closestBottom.index].floor)
			document.getElementById('map').appendChild(line);
	}
	if (closestTop.index != null) {
		map[pts[i].key][pts[closestTop.index].key] = closestTop.dist;
		var line = document.createElement('div');
		line.className = 'line';
		line.style.top = pts[closestTop.index].y + 'px';
		line.style.left = pts[closestTop.index].x + 'px';
		line.style.height = (pts[i].y - pts[closestTop.index].y + 1) + 'px';
		if (floorDisplay == pts[closestTop.index].floor)
			document.getElementById('map').appendChild(line);
	}
	if (closestRight.index != null) {
		map[pts[i].key][pts[closestRight.index].key] = closestRight.dist;
		var line = document.createElement('div');
		line.className = 'line';
		line.style.top = pts[i].y + 'px';
		line.style.left = pts[i].x + 'px';
		line.style.width = (pts[closestRight.index].x - pts[i].x + 1) + 'px';
		if (floorDisplay == pts[closestRight.index].floor)
			document.getElementById('map').appendChild(line);
	}
	if (closestLeft.index != null) {
		map[pts[i].key][pts[closestLeft.index].key] = closestLeft.dist;
		var line = document.createElement('div');
		line.className = 'line';
		line.style.top = pts[closestLeft.index].y + 'px';
		line.style.left = pts[closestLeft.index].x + 'px';
		line.style.width = (pts[i].x - pts[closestLeft.index].x + 1) + 'px';
		if (floorDisplay == pts[closestLeft.index].floor)
			document.getElementById('map').appendChild(line);
	}
	for (var j = 0; j < upDown.length; j++) {
		map[pts[i].key][pts[upDown[j].index].key] = upDown[j].dist;
	}
	var spot = document.createElement('div');
	spot.className = 'spot';
	spot.style.top = (pts[i].y - 1) + 'px';
	spot.style.left = (pts[i].x - 1) + 'px';
	if (floorDisplay == pts[i].floor)
		document.getElementById('map').appendChild(spot);
}
console.log('var map = ' + JSON.stringify(map) + '; var nodes = ' + JSON.stringify(nodes) + ';');

