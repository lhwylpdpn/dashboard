$(function () {

	$('#container9').highcharts({
	            
	    chart: {
	        polar: true,
	        type: 'line'
	    },
	    
	    title: {
	        text: '代码质量情况',
	        x: -80
	    },
	    
	    pane: {
	    	size: '90%'
	    },
	    
	    xAxis: {
	        categories: ['严重问题', '阻断问题', '技术债务', '复杂性总数', 
	                '注释率', '重复率'],
	        tickmarkPlacement: 'on',
	        lineWidth: 0
	    },
	        
	    yAxis: {
	        gridLineInterpolation: 'polygon',
	        lineWidth: 0,
	        min: 0
	    },
	    
	    tooltip: {
	    	shared: true,
	        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
	    },
	    
	    legend: {
	        align: 'right',
	        verticalAlign: 'top',
	        y: 70,
	        layout: 'vertical'
	    },
	    
	    series: [{
	        name: '14/7/12',
	        data: [344, 153, 153, 219, 172, 100],
	        pointPlacement: 'on'
	    }, {
	        name: '14/7/26',
	        data: [345, 156, 400, 399, 260, 140],
	        pointPlacement: 'on'
	    }]
	
	});
});
				