app.service("DiscosService", function($http) {  

    this.GetAllDiscos = function(){
        var ret = doAjax($http,'GET' ,'/disco/discos' ,'');
        return ret;
    };

    this.GetAllColecao = function(){
        var ret = doAjax($http,'GET' ,'/colecao' ,'');
        return ret;
    };

    this.AddNewDisco = function(disco){
        return doAjax($http,'POST' ,'/disco/create' ,JSON.stringify(disco));
    };

    this.EditDisco = function(disco){
        return doAjax($http,'PUT' ,'/disco/'+disco.id ,JSON.stringify(disco));
    };

    this.DeleteDisco = function(disco){
        var data = {"IdDisco" : disco.id}
        return doAjax($http,'DELETE' ,'/disco/'+disco.id ,data);
    };

    this.GetDiscoByName = function(nome){
        return doAjax($http,'GET' ,'/disco/'+nome ,'');
    };

    this.GetDiscoByColecaoId = function(colecaoId){
        return doAjax($http,'GET' ,'/disco/'+colecaoId ,'');
    }

});



function doAjax($http ,mehtod ,urlParam ,data){
  return  $http ({
        method: mehtod,
        url: 'http://localHost:8080' + urlParam,
        data: data,
        dataType: "json"  
    });
}