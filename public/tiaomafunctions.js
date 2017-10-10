
//跳马问题解决

//最终结果函数
function Result() {
    m=Number(document.getElementById("inputm").value); //行数
    n=Number(document.getElementById("inputn").value); //列数
    x=Number(document.getElementById("inputx").value); //起点X
    y=Number(document.getElementById("inputy").value); //起点Y
    function traverse_chess( x,y)
}
//判断方向
function next(x,y,dx,nextstop,dy,)
{
    var flag = 0;
	switch (nextStop) {
	case 1:
		if (x + 1<M - 1 && y + 2<N - 1 && !chess[x + 1][y + 2]) {
			x += 1;
			y += 2;
			flag = 1;
		}
		else if (x + 1 == dx && y + 2 == dy)
		{
			x += 1;
			y += 2;
			flag = 1;
		}
		break;
	case 2:
		if (x + 2<M - 1 && y + 1<N - 1 && !chess[x + 2][y + 1]) {
			x += 2;
			y += 1;
			flag = 1;
		}
		else if (x + 2 == dx && y + 1 == dy)
		{
			x += 1;
			y += 2;
			flag = 1;
		}
		break;
	case 3:
		if (x + 2<M - 1 && y - 1>0 && !chess[x + 2][y - 1]) {
			x += 2;
			y -= 1;
			flag = 1;
		}
		else if (x + 2 == dx && y - 1 == dy)
		{
			x += 2;
			y -= 1;
			flag = 1;
		}
		break;
	case 4:
		if (x + 1<M - 1 && y - 2>0 && !chess[x + 1][y - 2]) {
			x += 1;
			y -= 2;
			flag = 1;
		}
		else if (x + 1 == dx && y - 2 == dy)
		{
			x += 1;
			y -= 2;
			flag = 1;
		}
		break;
	case 5:
		if (x - 1>0 && y - 2>0 && !chess[x - 1][y - 2]) {
			x -= 1;
			y -= 2;
			flag = 1;
		}
		else if (x - 1 == dx && y - 2 == dy)
		{
			x -= 1;
			y -= 2;
			flag = 1;
		}
		break;
	case 6:
		if (x - 2>0 && y - 1>0 && !chess[x - 2][y - 1]) {
			x -= 2;
			y -= 1;
			flag = 1;
		}
		else if (x - 2 == dx && y - 1 == dy)
		{
			x -= 2;
			y -= 1;
			flag = 1;
		}
		break;
	case 7:
		if (x - 2>0 && y + 1<N - 1 && !chess[x - 2][y + 1]) {
			x -= 2;
			y += 1;
			flag = 1;
		}
		else if (x - 2 == dx && y + 1 == dy)
		{
			x -= 2;
			y += 1;
			flag = 1;
		}
		break;
	case 8:
		if (x - 1>0 && y + 2<N - 1 && !chess[x - 1][y + 2]) {
			x -= 1;
			y += 2;
			flag = 1;
		}
		else if (x - 1 == dx && y + 2 == dy)
		{
			x -= 1;
			y += 2;
			flag = 1;
		}
		break;
	default:break;
	}
	return flag;
}

//找路径
function traverse( sx, sy, dx, dy, count)
{
	chess[sx][sy] = 1;//确保初始点不会被再走一次
	var re = 0;
	var flag, result, i;
	var x1 = sx, y1 = sy;
	if (x1 == dx&&y1 == dy)
	{
		//当到达目标点位置，则返回。
		count += 1;
		re = 1;
	}
	for (i = 1; i <= 8; i++)
	{
		flag = next(x1, y1, i, dx, dy); //判断下一个位置是否可用  
		if (flag)
		{
			chess[x1][y1] = 1; //新找到的节点表示已经用过,  
			result = traverse(x1, y1, dx, dy, count); //以新节点为根据，再次递归下一个可用结点  
			if (result) //路径已经全部遍历完 
			{
				re = 1;
				chess[x1][y1] = 0;
				x1 = sx;
				y1 = sy;
			}
			else  //回溯 
			{
				chess[x1][y1] = 0;
				x1 = sx;
				y1 = sy;
			}
		}
	}
	return re;
}
//计算路线
function traverse_chess( sx, sy)
{
	var count = 0;
	for (var i = 0; i < N; i++) {
		traverse(sx, sy, 0, i, count);
		traverse(sx, sy, M - 1, i, count);
	}
	for (var i = 1; i < M - 1; i++) {
		traverse(sx, sy, i, N - 1, count);
		traverse(sx, sy, i, 0, count);
	}
	return count;
}
