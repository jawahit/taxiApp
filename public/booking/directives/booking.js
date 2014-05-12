'use strict';

angular
.module('taxiapp.booking', ['ui.bootstrap'])
	.directive('wizard',wizard);

function wizard() {
	return {
		restrict    : 'E',
		templateUrl : 'wizardTemplate.html',
		transclude	: true,
		replace     : true,
		scope       : { title : '@'	},
		link        : function(scope) {
			scope.currentStepIndex = 0;
			scope.steps[scope.currentStepIndex].currentStep = true;
		},
		controller	: 
			['$scope', '$element', '$attrs',
			function controller($scope, $element, $attrs) {
				$scope.steps = [];

				this.registerStep = function(step) {
					$scope.steps.push(step);
				};

				var toggleSteps = function(toStepIndex) {
					$scope.steps[$scope.currentStepIndex].currentStep = false;
					
					$scope.currentStepIndex = toStepIndex;
					
					$scope.steps[$scope.currentStepIndex].currentStep = true;
				};

				$scope.nextStep = function() {
					toggleSteps($scope.currentStepIndex + 1);
				};

				$scope.previousStep = function() {
					toggleSteps($scope.currentStepIndex - 1);
				};

				$scope.isFirstStep = function() {
					return $scope.currentStepIndex === 0;
				};
				
				$scope.isLastStep = function() {
					return $scope.currentStepIndex === ($scope.steps.length - 1);
				};
				
				$scope.submit = function(){
				  $scope.$parent.makeServiceCall();
				};
			}]
	};			
}

angular
.module('taxiapp.booking', ['ui.bootstrap']).directive('step',step);
	
	 function step() {
			return {
				require		: '^wizard',
				restrict	: 'E',
				scope     : { title : '@'	},
				template	: '<div ng-show="currentStep"> <h4 align="center">{{title}}</h4><div ng-transclude></div> </div>',
				transclude: true,
				replace		: true,
				link      : function(scope, element, attrs, wizardController) {
					wizardController.registerStep(scope);
				}
			};
		}
	 
	 angular
	 .module('taxiapp.booking').directive('clickOnce', function($timeout) {
		    return {
		        restrict: 'A',
		        link: function(scope, element, attrs) {
		            var replacementText = attrs.clickOnce;

		            element.bind('click', function() {
		                $timeout(function() {
		                    if (replacementText) {
		                        element.html(replacementText);
		                    }
		                    element.attr('disabled', true);
		                }, 0);
		            });
		        }
		    };
		});	
	 
	 angular
	 .module('taxiapp.booking').directive('scrollOnClick', function() {
		  return {
		    restrict: 'A',
		    link: function(scope, $elm, attrs) {
		      var idToScroll = attrs.href;
		      $elm.on('click', function() {
		        var $target;
		        if (idToScroll) {
		          $target = $(idToScroll);
		        } else {
		          $target = $elm;
		        }
		        $("body").animate({scrollTop: $target.offset().top}, "slow");
		      });
		    }
		  }
		});
	 
	 angular
	 .module('taxiapp.booking').directive('scrollToTop', function() {
		  return {
		    restrict: 'A',
		    link: function(scope, $elm, attrs) {
		      $elm.on('click', function() {
		        $("body").animate({scrollTop: 0}, "slow");
		      });
		    }
		  }
		});
	 
 

