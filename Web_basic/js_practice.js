var Module = Module || {};

(function(_Module){

  var _name = "hskimim";

  _Module.getName = function(){
    return _name;
  };

  _Module.setName = function(name){
    _name = name;
  };

})(Module);

console.log(Module.getName());
console.log(Module._name);
