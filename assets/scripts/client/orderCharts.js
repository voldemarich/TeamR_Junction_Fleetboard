window.addEvent('domready', function() {
	var sampleStr = [
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.51, 1007.23]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.287109375, 0.011962890625, -1.109619140625]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-62.52454212454212, 61.774847374847376, -285.1838827838828]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [7.2479248046875, -31.05926513671875, -0.54168701171875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 2.81},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.4375, 14.5]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.19]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [-0.053466796875, 0.15771484375, -0.941162109375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-83.06617826617827, 70.02148962148962, -276.6373626373626]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [-9.48333740234375, 8.17108154296875, 0.5035400390625]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 1.29},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.4375, 14.21875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.25]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.35107421875, 0.16357421875, -0.8671875]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-64.17387057387057, 59.825641025641026, -287.13308913308913]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [6.79779052734375, 13.38958740234375, -4.57000732421875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 1.37},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.1875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.18]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.14306640625, 0.052001953125, -0.8916015625]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-65.22344322344323, 64.77362637362637, -290.88156288156284]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [3.99017333984375, -14.5721435546875, -4.913330078125]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 1.37},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.09375]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.24]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.229248046875, 0.06005859375, -1.05615234375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-65.22344322344323, 61.624908424908426, -287.8827838827839]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [0.41961669921875, -17.55523681640625, -6.2103271484375]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 1.1300000000000001},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.25]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.49, 1007.25]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.20849609375, 0.06640625, -1.030029296875]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-63.42417582417582, 61.624908424908426, -287.43296703296704]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [10.39886474609375, 13.05389404296875, -6.317138671875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 1.04},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.1875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.22]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.138671875, -0.018798828125, -0.846923828125]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-60.57533577533577, 60.425396825396824, -296.42930402930403]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [6.08062744140625, 31.74591064453125, -7.01904296875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 3.62},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.28125]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.49, 1007.23]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.60498046875, 0.01806640625, -1.267333984375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-67.02271062271062, 62.97435897435897, -295.6796092796093]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [-1.922607421875, -15.7470703125, -7.3699951171875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.64},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.375]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.5, 1007.22]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.239990234375, -0.241943359375, -1.166748046875]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-61.774847374847376, 61.774847374847376, -308.574358974359]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [14.739990234375, 9.74273681640625, -45.63140869140625]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.56},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.0625]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.48, 1007.25]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.137939453125, -0.029052734375, -0.944091796875]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-80.66715506715506, 63.873992673992674, -295.5296703296703]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [5.0048828125, -8.79669189453125, -9.9334716796875]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.4},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 13.71875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.49, 1007.26]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.235595703125, -0.058349609375, -0.981689453125]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-75.26935286935287, 69.27179487179487, -303.4764346764347]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [5.57708740234375, -4.302978515625, -6.3323974609375]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.4},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 13.90625]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.48, 1007.23]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.255859375, -0.0615234375, -1.02197265625]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-75.26935286935287, 68.82197802197803, -304.8258852258852]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [4.98199462890625, -11.42120361328125, -4.8980712890625]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.32},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.1875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.48, 1007.27]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.143310546875, -0.0166015625, -0.9130859375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-76.16898656898657, 67.32258852258852, -303.3264957264957]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [7.13348388671875, 5.9814453125, -5.889892578125]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.4},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.0625]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.48, 1007.23]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.20654296875, 0.02490234375, -0.972900390625]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-75.56923076923077, 67.62246642246642, -306.0253968253968]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [2.593994140625, -12.115478515625, -5.65338134765625]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.32},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.65625]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.48, 1007.27]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.2724609375, 0.03662109375, -1.074462890625]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-76.61880341880341, 67.62246642246642, -304.37606837606836]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [6.47735595703125, -2.66265869140625, -4.89044189453125]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.4},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.46875]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.47, 1007.27]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.162109375, -0.025390625, -0.9609375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-75.26935286935287, 68.52210012210011, -304.22612942612943]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [3.0975341796875, -11.23809814453125, -1.2054443359375]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.56},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 13.9375]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.46, 1007.28]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.040771484375, 0.0458984375, -0.998046875]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-77.66837606837606, 64.02393162393162, -294.3301587301587]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [3.8299560546875, -0.67901611328125, -6.38580322265625]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.64},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.0625]},
{"sensorType": "BAROMETER", "valueLength": 2, "values": [19.47, 1007.27]},
{"sensorType": "ACCELEROMETER", "valueLength": 3, "values": [0.21484375, -0.0390625, -1.038818359375]},
{"sensorType": "MAGNETOMETER", "valueLength": 3, "values": [-71.97069597069597, 56.526984126984125, -301.2273504273504]},
{"sensorType": "GYROSCOPE", "valueLength": 3, "values": [3.2958984375, -12.55035400390625, -4.33349609375]},
{"sensorType": "LIGHT", "valueLength": 1, "values": 0.72},
{"sensorType": "BATTERY", "valueLength": 1, "values": 76},
{"sensorType": "TEMPERATURE", "valueLength": 2, "values": [19.40625, 14.09375]}]
	function canAccessToGoogleVisualion() {
		if (typeof google == "undefined" || typeof google.visualization == "undefined") {
			return false;
		}
		return true;
	}

	google.charts.load('current', {'packages':['corechart', 'line', 'controls']});
	google.charts.setOnLoadCallback(drawAllGraphs);

	function drawAllGraphs() {
		var allGraphs = document.getElement("#allGraphs");
		if (!allGraphs) { return; }
		var dashes = allGraphs.getElements('[data-dashboard]');
		dashes.each(function(dash) {
			drawGraph(dash);
		})
	}

	function drawGraph(dash) {
		var sensorType = dash.get('data-dashboard');
	    var data = new google.visualization.DataTable();
	    var title = "";
	    var container = "";
	    var str = "";
	    var dashboard = new google.visualization.Dashboard(dash);
		switch (sensorType) {
			case "temperature": {
				var tempData = setTemperatureLineFormat();
			    data.addColumn('number', 'Seconds');
			    data.addColumn('number', 'Temperature inside');
			    data.addColumn('number', 'Temperature outside');
			    data.addRows(tempData);
			    title = "Temperature inside and outside";
			    str = "temperature";
			}
			break;
			case "light": {
				var lightData = setLightLineFormat();
			    data.addColumn('number', 'Seconds');
			    data.addColumn('number', 'Light value');
			    data.addRows(lightData);
			    title = "Light level";
			    str = "light";
			}
			break;
		}
	    

	    // Set chart options
	    var options = {
	    	'title':title,
	        'width':800,
	        'height':400
	    };
		container = dash.getElement('[data-chart="'+str+'"]');
		var numfilt = dash.getElement('[data-filter="number"');
	    if (!container) { return; }
	    var chart = new google.visualization.ChartWrapper({
	    	'chartType': 'LineChart',
	    	'containerId': container,
	    	'options':  options
	    });
	    var filtContainer = dash.getElement('[data-filter="number"]');
	    var numberRangeSlider = new google.visualization.ControlWrapper({
		    'controlType': 'NumberRangeFilter',
		    'containerId': numfilt,
		    'options': {
		      'filterColumnIndex': 0
		    }
		  });
	    dashboard.bind(numberRangeSlider, chart);
	    dashboard.draw(data);
    }
    function setLightLineFormat() {
    	var light = sampleStr.filter(function(str) {
    		return str.sensorType == "LIGHT";
    	})
    	var time = new Date().getSeconds();
    	var lightData = [];
    	light.each(function(t) {
			lightData.push([time, t.values]);
			time++;
    	})
    	return lightData;
    }

    function setTemperatureLineFormat() {
    	var temperature = sampleStr.filter(function(str) {
    		return str.sensorType == "TEMPERATURE";
    	})
    	var time = new Date().getSeconds();
    	var tempData = [];
    	temperature.each(function(t) {
    		if (t.valueLength == 2) {
    			tempData.push([time, t.values[0], t.values[1]]);
    			time++;
    		}
    	})
    	return tempData;
    }
})