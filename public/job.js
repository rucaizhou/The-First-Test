//最佳工作序列问题解决

//结构体：工作
function_Job
{
    this.jobid; //工作序号
    this.cost,deadLine, profit; //工作的费时、最后完成的期限及价值
};
 
//结构体：工作时间打包
function_DisjointSet
{
    var parent;
 
    function DisjointSet(n)
    {
        //每一天及其之前的最晚空闲时间
        parent =  new[n+1];
 
        for (var i= 0; i<= n; i++)
            parent[i] = i;
    }
 
    //查找第s天对应的最晚空闲时间
    function find(s)
    {
        if (s == parent[s])
            return s;
        return parent[s] = find(parent[s]);
    }
 
    //更新第v天的最晚空闲时间
    function merge(u,v)
    {
        parent[v] = u;
    }
};
 
//单位利润排序标准
function cmp(a, b)
{
    if (a.profit/a.cost>b.profit/b.cost)
    {
        return a.profit/a.cost;
    }
}
 
//求出Deadline的最大值
function findMaxDeadline(arr,n)
{
    var ans = INT_MIN;
    for (var i = 0; i < n; i++)
        ans = max(ans, arr[i].deadLine);
    return ans;
}
 
 void function printJobScheduling(arr,n)
{
    //按单位时间工作利润对各项工作进行降序排列
    sort(arr, arr + n, cmp);
 
    //求出所有工作完成的最后期限
    var maxDeadline = findMaxDeadline(arr, n);
    ds(maxDeadline);

	//以总时长为长度创建数组存放工作序列
	char *workseries;
	workseries = new char[maxDeadline + 1];
 
    // Traverse through all the jobs
    for (var i = 0; i < n; i++)
    {
        //求出该工作的最晚完成时间
        var availableSlot = ds.find(arr[i].deadLine);
        if (availableSlot > 0)
        {
			//依次处理该工作所需要占用的时间
			for(var day = 0;day < arr[i].cost;day++)
			{
				//将该工作写入工作序列
				workseries[ds.find(availableSlot - day)] = arr[i].id;
				//对该工作占用的每一天进行打包
				for( var date = ds.find(availableSlot - day);date <= availableSlot;date++)
				{
					//将当前时间与前一天进行打包
					ds.merge(ds.find(date - 1),date);
				}
			}
        }
    }
	//输出工作序列
	for(var  k = 1;k <= maxDeadline;k++)
        {
			cout << workseries[k];
		}
}
//在result函数中进行函数的调用
function result()
{   
    var n = sizeof(arr) / sizeof(arr[0]);
    printJobScheduling(arr, n);
    system("pause");
    return 0;
}
