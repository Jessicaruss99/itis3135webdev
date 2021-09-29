var shapeSides = getNumber();
var i = 0;
while (i == 0) {
    if (validateEntry(shapeSides)) 
    {
        var shape = getShape(shapeSides);
        alert(shape);
        i = 1;
    }
    else 
    {
        shapeSides = getError();
    }
}

function getNumber() 
{
    var polygonNumber = parseFloat(prompt("Jolly Reindeer Designs welcomes you! Type a number 0-10 and we will tell you the name of a polygon with that many sides!"));
    return polygonNumber;
}

function getError() 
{
    var polygonNumber = parseFloat(prompt("It looks like you typed in an invalid entry. Please type in a number 0 through 10."));
    return polygonNumber;
}


function getShape(sides) 
{
    sides = Math.round(Math.abs(sides));
    switch (sides) 
    {
        case 0:
            return "A polygon with this many sides does not exist :(";
            break;
        case 1:
            return "A polygon with 1 side is a Henagon";
            break;
        case 2:
            return "A polygon with 2 side is a Digon";
            break;
        case 3:
            return "A polygon with 3 side is a Trigon";
            break;
        case 4:
            return "A polygon with 4 side is a Tetragon";
            break;
        case 5:
            return "A polygon with 5 side is a Pentagon";
            break;
        case 6:
            return "A polygon with 6 side is a Hexagon";
            break;
        case 7:
            return "A polygon with 7 side is a Heptagon";
            break;
        case 8:
            return "A polygon with 8 side is a Octagon";
            break;
        case 9:
            return "A polygon with 9 side is a Nonagon";
            break;
        case 10:
            return "A polygon with 10 side is a Decagon";
            break;
    }
}

function validateEntry(sides) 
{
    if (typeof sides == 'number') 
    {
        if (sides >= -10 && sides <= 10) 
        {
            return (sides == sides);
        }
    }
}


