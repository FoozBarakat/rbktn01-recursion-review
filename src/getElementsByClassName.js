var getElementsByClassName = function(className, element) {
  
	element = element || document.body;
    var results = [];
  
    if (element.classList && _.contains(element.classList, className)) {
      results.push(element);
    }
    _.each(element.childNodes, function(node, i) {
      results = results.concat(getElementsByClassName(className, node));
    });
  
    return results;
};
