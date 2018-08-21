//CLASS WHICH CHECKS IF A TOPIC (STADT,LAND,FLUSS) IS PICKED ALREADY 3 TIMES
var OVERLOAD_BOOLEAN;
var LIMITED_INDEX;


function Control(array){
    this.array = array;
}



Control.prototype.getArray = function (){
    return this.array;
};


Control.prototype.checkIfArrayLimitReached = function (){
    OVERLOAD_BOOLEAN = false;
    LIMITED_INDEX = "";
    for(let i = 0; i < this.array.length; i++){
        if (this.array[i] === 3){
            OVERLOAD_BOOLEAN = true;
            LIMITED_INDEX += i;
        }

    }

    return LIMITED_INDEX;
};







