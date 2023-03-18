// Code your solution here


function findMatching(array, string){
    return array.filter(function(element){
        let allcaps = element.toUpperCase();
        if (allcaps == string.toUpperCase()){
            return element;
        }
    });
}

function fuzzyMatch(array, string){
    return array.filter(function(element){
        return (element.startsWith(string));
    });
}

function matchName(array, string){
    return array.filter(function(element){
        return element.name == string;
    })
}