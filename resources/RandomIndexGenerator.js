//CLASS WHICH CREATES RANDOM NUMBERS WITH GIVEN START AND ENDINDEX

var realEndIndex,
    bufferIndex,
    ARRAY_FOR_INDEX2_LIMIT = [0,2],
    secondIndexRandom;

function RandomIndexGenerator(startIndex, endIndex){
    this.startIndex = startIndex;
    this.endIndex = endIndex;

}

//creates a random number including statIndex and endIndex
RandomIndexGenerator.prototype.generateRandomIndexBetween = function() {
    bufferIndex = this.endIndex - this.startIndex;
    realEndIndex = this.endIndex + 1;

    if (bufferIndex !== this.endIndex){
        return Math.floor(Math.random()*realEndIndex) + bufferIndex;
    }

    return Math.floor(Math.random() * realEndIndex);
}


RandomIndexGenerator.prototype.generateRandomIndexForOneLimitedIndex = function (limitedIndex){
    return Math.floor(Math.random() * 2)+1;
}

RandomIndexGenerator.prototype.generateRandomIndexForTwoLimitedIndex = function(limitedIndex){
    secondIndexRandom = Math.floor(Math.random() * limitedIndex);
    return ARRAY_FOR_INDEX2_LIMIT[secondIndexRandom];

}


RandomIndexGenerator.prototype.generateRandomIndexForThreeLimitedIndex = function (limitedIndex){
    return Math.floor(Math.random() * 2);
}



