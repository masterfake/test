window.onload = function() {
	var containerbox1 = document.getElementById("containerbox1");
	var containerbox1 = echarts.init(containerbox1);
	var app = {};
	option = null;
	option = {
		title: {

		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {

			left: 'left',
			data: ['直接访问', '邮件营销', '联盟广告']
		},
		color:["#b6a2de","#5ab1ef","#2ec7c9"],
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
				value: 335,
				name: '直接访问'
			}, {
				value: 310,
				name: '邮件营销'
			}, {
				value: 234,
				name: '联盟广告'
			}],

		}]
	};
	//containerbox2	
	var options = {
		title: {},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
		},
		color:["#b6a2de","#5ab1ef","#2ec7c9"],
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周二', '周三', '周四', '周五', '周六']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '邮件营销',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
		}, {
			name: '联盟广告',
			type: 'line',
			stack: '总量',
			data: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210]
		}, {
			name: '视频广告',
			type: 'line',
			stack: '总量',
			data: [150, 232, 201, 154, 190, 330, 1000, 101, 134, 90, 230, 210]
		}]
	};
	var containerbox2 = document.getElementById("containerbox2");
	var containerbox2 = echarts.init(containerbox2);
	//知识库使用
	var containerbox3 = document.getElementById("containerbox3");
	var containerbox3 = echarts.init(containerbox3);
	var app = {};
	option3 = null;
	option3 = {
		title: {

		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		color:["#b6a2de","#5ab1ef","#2ec7c9"],
		legend: {

			left: 'left',
			data: ['直接访问', '邮件营销', '联盟广告']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
				value: 335,
				name: '直接访问'
			}, {
				value: 310,
				name: '邮件营销'
			}, {
				value: 234,
				name: '联盟广告'
			}],

		}]
	};
	//containerbox4
	var option4 = {
		title: {},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
        color:["#b6a2de","#5ab1ef","#2ec7c9"],
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周二', '周三', '周四', '周五', '周六']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			name: '邮件营销',
			type: 'line',
			stack: '总量',
			data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
		}, {
			name: '联盟广告',
			type: 'line',
			stack: '总量',
			data: [220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210]
		}, {
			name: '视频广告',
			type: 'line',
			stack: '总量',
			data: [150, 232, 201, 154, 190, 330, 1000, 101, 134, 90, 230, 210]
		}]
	};
	var containerbox4 = document.getElementById("containerbox4");
	var containerbox4 = echarts.init(containerbox4);

	if(option && typeof option === "object") {
		containerbox1.setOption(option, true);
		containerbox2.setOption(options, true);
	}
	if(option && typeof option === "object") {
		containerbox3.setOption(option3, true);
		containerbox4.setOption(option4, true);
	}
}