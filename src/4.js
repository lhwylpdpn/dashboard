var chart;
$(function() {
	$('#container4').highcharts({
		chart: {
			zoomType: 'xy'
		},
		title: {
			text: '未关闭缺陷情况'
		},
		xAxis: [{
			categories: ['1.2.0', '2.1.1', '2.1.2', '2.5.3', '3.0.0']
		}],
		yAxis: [{ // Primary yAxis
			labels: {
				formatter: function() {
					return this.value + '';
				},
				style: {
					color: '#89A54E'
				}
			},
			title: {
				text: '未关闭bugDI值',
				style: {
					color: '#89A54E'
				}
			}
		}, { // Secondary yAxis
			title: {
				text: '缺陷数',
				style: {
					color: '#4572A7'
				}
			},
			labels: {
				formatter: function() {
					return this.value + ' 个';
				},
				style: {
					color: '##FFA54F'
				}
			},
			opposite: true
		}],

		tooltip: {
			shared: true
		},

		series: [{
			name: '1级bug',
			color: '#4572A7',
			type: 'column',
			yAxis: 1,
			data: [4, 3, 1, 5, 4],
			tooltip: {
				pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.0f} </b> '
			}
		},{
			name: '2级bug',
			color: '#7cb5ec',
			type: 'column',
			yAxis: 1,
			data: [1, 7, 4, 3, 5],
			tooltip: {
				pointFormat: '<span style="font-weight: bold; color: {series.color}"> ，{series.name}</span>: <b>{point.y:.0f} </b> '
			}
		},  {
			name: '未关闭bugDI值',
			color: '#89A54E',
			type: 'spline',
			data: [31,12,13,17,15],
			tooltip: {
				pointFormat: '<span style="font-weight: bold; color: {series.color}"> ，{series.name}</span>: <b>{point.y:.1f}</b> '
			}
		
		}]
	});
});				