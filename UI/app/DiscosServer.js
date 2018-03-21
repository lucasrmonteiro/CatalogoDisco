app.service("DiscosService", function($http) {  

    this.GetAllDiscos = function(){
        return doAjax($http,'GET' ,'/disco/discos' ,'');
    };

    this.AddNewDisco = function(disco){
        return doAjax($http,'POST' ,'/disco/create' ,JSON.stringify(disco));
    };

    this.EditDisco = function(disco){
        return doAjax($http,'PUT' ,'/disco/'+disco.id ,JSON.stringify(disco));
    };

    this.DeleteDisco = function(disco){
        return doAjax($http,'DELETE' ,'/disco/'+disco.id ,JSON.stringify(disco));
    };

    this.GetDiscoByName = function(nome){
        return doAjax($http,'GET' ,'/disco/'+nome ,'');
    };

    this.GetDiscoByColecaoId = function(colecaoId){
        return doAjax($http,'GET' ,'/disco/'+colecaoId ,'');
    }

});



function doAjax($http ,mehtod ,urlParam ,data){
    $http ({
        method: mehtod,
        url: 'http://localHost:8080' + urlParam,
        data: data,
        dataType: "json"  
    })
    .success (function (data, status, headers, config) {
        // Atribui o retorno ao $scope
        return data;
    })
    .error (function (data, status, headers, config) {
        // Se tiver error
        console.log(status);
        toastr.error("Problemas na Aplicação Entre em Contato o Administrador do Sistema");
    });
}