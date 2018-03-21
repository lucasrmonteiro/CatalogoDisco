app.controller("discoCntr", function($scope, DiscosService) {  

    $scope.discos = [];

    GetDiscoList(DiscosService);
    
});


function GetDiscoList(DiscosService){
    DiscosService.GetAllDiscos();
}    
