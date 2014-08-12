$(function () {
    $('#container10').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '测试密度&缺陷密度'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['1.1.0', '1.2.0', '1.3.0', '1.4.0', '1.5.0']
        },
        yAxis: [{
            title: {
                text: '测试密度',
               }
            ,
            min:0,
             tickInterval:5,
        	plotLines:[{
        		color:'#FF0000',
        		dashStyle:'ShortDot',
        		width:2,
        		value:25,
        	zIndex: 5}]
        	},{
        	 title: {
                text: '缺陷密度',
               }
            ,
             min:0,
             tickInterval:2.4,
        	plotLines:[{
        		color:'#FF0000',
        		dashStyle:'ShortDot',
        		width:2,
        		value:12,
        	zIndex: 5}],
        	opposite: true
        	}],
        tooltip: {
            enabled: false,
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+this.x +': '+ this.y +'°C';
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '测试密度',
            data: [7.0, 6.9, 9.5, 14.5, 18.4],
            yAxis:0
        }, {
            name: '缺陷密度',
            data: [3.9, 4.2, 5.7, 8.5, 11.9],
            yAxis:1
        }]
    });
});				