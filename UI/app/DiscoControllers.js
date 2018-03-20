app.controller("discoCntr", function($scope, DiscosService) {  

    $scope.discos = [];

    GetDiscoList(DiscosService);
    
});


function GetDiscoList(DiscosService){
    DiscosService.GetAllDiscos()
        .success(function(data){
            $scope.discos = data;
        }).error(function() {  
            toastr.error('Problemas na requisição');
        });  
}    
