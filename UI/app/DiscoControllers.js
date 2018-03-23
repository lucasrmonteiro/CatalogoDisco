app.controller("discoCntr", function($scope, DiscosService) {  

    $scope.discos = [];
    $scope.colecoes = [];

    GetDiscoList(DiscosService);
    GetColecaoList(DiscosService);

    $scope.AddDisco = function(disco){
        DiscosService.AddNewDisco(disco)
        .success (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.discos.push(data);
            $scope.colecoes.push(data.ColecaoDisco);
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
            toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
        });
    };

    $scope.DeleteDisco = function(disco ,index){
        DiscosService.DeleteDisco(disco)
        .success (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.discos.splice(index ,1);
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
            toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
        });
    };

    $scope.EditarDisco = function(disco ,index){
        DiscosService.EditDisco(disco)
        .success (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.discos[index].id = disco.id;
            $scope.discos[index].Titulo = disco.Titulo;
            $scope.discos[index].Artista = disco.Artista;
            $scope.discos[index].ColecaoDisco = disco.ColecaoDisco;
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
            toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
        });
    };
    
    function GetDiscoList(DiscosService){
        var data = DiscosService.GetAllDiscos()
        .success (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.discos = data;
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
            toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
        });
    }    

    function GetColecaoList(DiscosService){
        var data = DiscosService.GetAllColecao()
        .success (function (data, status, headers, config) {
            // Atribui o retorno ao $scope
            $scope.colecoes = data;
        })
        .error (function (data, status, headers, config) {
            // Se tiver error
            console.log(status);
            toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
        });
    }   

});


