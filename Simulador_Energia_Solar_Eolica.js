({
    aaa : function(component, event, helper) {
        var result = helper.getResults(component, 'aaa');
        helper.setResults(component, result);
        
        //Function - usado para definir uma função dentro de um componente
        //Var - Variavel usada para os calculos
        //getResults - é usado para obter o resultado ou apenas pegar o resultado
        //SetResults - è usado para fazer uma ação
    },
    
    bbb : function(component, event, helper) {
        var result = helper.getResults(component, 'bbb');
        helper.setResults(component, result);
    },
    
    ccc : function(component, event, helper) {
        var result = helper.getResults(component, 'ccc');
        helper.setResults(component, result);
    },
    
    ddd : function(component, event, helper) {
        var result = helper.getResults(component, 'ddd');
        helper.setResults(component, result);
    },
    
    clear : function(component, event, helper) {
        var result = helper.getResults(component, 'clear');
        helper.setResults(component, result);
    }
})
