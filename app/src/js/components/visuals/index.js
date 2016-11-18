module.exports = function(component){
	component.visuals = {};

	require('./histogram.js')(component.visuals);
	require('./stockPrices.js')(component.visuals);
};