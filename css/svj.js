
var data1 = {
    size: 330,
    sectors: [
        {
            percentage: 0.43,
            label: 'Thing 1'
        },
        {
            percentage: 0.22,
            label: "Thing Two"
        },
        {
            percentage: 0.08,
            label: "Another Thing"
        },
        {
            percentage: 0.27,
            label: "Pineapple"
        }
    ]
}

function calculateSectors( data1 ) {
    var sectors = [];
    var colors = [
        "#61c0BF", "#DA507A", "#BB3D49", "#DB4547"
    ];

    var l = data1.size / 2
    var a = 0 // Angle
    var aRad = 0 // Angle in Rad
    var z = 0 // Size z
    var x = 0 // Side x
    var y = 0 // Side y
    var X = 0 // SVG X coordinate
    var Y = 0 // SVG Y coordinate
    var R = 0 // Rotation


    data1.sectors.map( function(item, key ) {
        a = 360 * item.percentage;
        aCalc = ( a > 180 ) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt( 2*l*l - ( 2*l*l*Math.cos(aRad) ) );
        if( aCalc <= 90 ) {
            x = l*Math.sin(aRad);
        }
        else {
            x = l*Math.sin((180 - aCalc) * Math.PI/180 );
        }

        y = Math.sqrt( z*z - x*x );
        Y = y;

        if( a <= 180 ) {
            X = l + x;
            arcSweep = 0;
        }
        else {
            X = l - x;
            arcSweep = 1;
        }

        sectors.push({
            percentage: item.percentage,
            label: item.label,
            color: colors[key],
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R
        });

        R = R + a;
    })


    return sectors
}

sectors = calculateSectors(data1);
var newSVG = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
newSVG.setAttributeNS(null, 'style', "width: "+data1.size+"px; height: " + data1.size+ "px");
newSVG.setAttributeNS(null, 'id', "pie-s-cma");
document.getElementsByTagName("body")[0].appendChild(newSVG)


sectors.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', sector.color);
    newSector.setAttributeNS(null, 'd', 'M' + sector.L + ',' + sector.L + ' L' + sector.L + ',0 A' + sector.L + ',' + sector.L + ' 0 ' + sector.arcSweep + ',1 ' + sector.X + ', ' + sector.Y + ' z');
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.L+', '+ sector.L+')');
    var svgc = document.getElementById("sc1");
    // newSVG.appendChild(newSector);
    svgc.appendChild(newSector);
})

var midCircle = document.createElementNS( "http://www.w3.org/2000/svg","circle" );
midCircle.setAttributeNS(null, 'cx', data1.size * 0.5 );
midCircle.setAttributeNS(null, 'cy', data1.size * 0.5);
midCircle.setAttributeNS(null, 'r', data1.size * 0.28 );
midCircle.setAttributeNS(null, 'fill', '#42495B' );

newSVG.appendChild(midCircle);



var data2 = {
    size: 330,
    sectors: [
        {
            percentage: 0.23,
            label: 'Thing 1'
        },
        {
            percentage: 0.22,
            label: "Thing Two"
        },
        {
            percentage: 0.18,
            label: "Another Thing"
        },
        {
            percentage: 0.37,
            label: "Pineapple"
        }
    ]
}

function calculateSectors( data2 ) {
    var sectors = [];
    var colors = [
        "#61c0BF", "#DA507A", "#BB3D49", "#DB4547"
    ];

    var l = data2.size / 2
    var a = 0 // Angle
    var aRad = 0 // Angle in Rad
    var z = 0 // Size z
    var x = 0 // Side x
    var y = 0 // Side y
    var X = 0 // SVG X coordinate
    var Y = 0 // SVG Y coordinate
    var R = 0 // Rotation


    data2.sectors.map( function(item, key ) {
        a = 360 * item.percentage;
        aCalc = ( a > 180 ) ? 360 - a : a;
        aRad = aCalc * Math.PI / 180;
        z = Math.sqrt( 2*l*l - ( 2*l*l*Math.cos(aRad) ) );
        if( aCalc <= 90 ) {
            x = l*Math.sin(aRad);
        }
        else {
            x = l*Math.sin((180 - aCalc) * Math.PI/180 );
        }

        y = Math.sqrt( z*z - x*x );
        Y = y;

        if( a <= 180 ) {
            X = l + x;
            arcSweep = 0;
        }
        else {
            X = l - x;
            arcSweep = 1;
        }

        sectors.push({
            percentage: item.percentage,
            label: item.label,
            color: colors[key],
            arcSweep: arcSweep,
            L: l,
            X: X,
            Y: Y,
            R: R
        });

        R = R + a;
    })


    return sectors
}

sectors = calculateSectors(data2);
var newSVG = document.createElementNS( "http://www.w3.org/2000/svg","svg" );
newSVG.setAttributeNS(null, 'style', "width: "+data2.size+"px; height: " + data2.size+ "px");
newSVG.setAttributeNS(null, 'id', "pie-s-cdb");
document.getElementsByTagName("body")[0].appendChild(newSVG)


sectors.map( function(sector) {

    var newSector = document.createElementNS( "http://www.w3.org/2000/svg","path" );
    newSector.setAttributeNS(null, 'fill', sector.color);
    newSector.setAttributeNS(null, 'd', 'M' + sector.L + ',' + sector.L + ' L' + sector.L + ',0 A' + sector.L + ',' + sector.L + ' 0 ' + sector.arcSweep + ',1 ' + sector.X + ', ' + sector.Y + ' z');
    newSector.setAttributeNS(null, 'transform', 'rotate(' + sector.R + ', '+ sector.L+', '+ sector.L+')');

    var svgc = document.getElementById("sc1");
    // newSVG.appendChild(newSector);
    svgc.appendChild(newSector);
})

var midCircle = document.createElementNS( "http://www.w3.org/2000/svg","circle" );
midCircle.setAttributeNS(null, 'cx', data2.size * 0.5 );
midCircle.setAttributeNS(null, 'cy', data2.size * 0.5);
midCircle.setAttributeNS(null, 'r', data2.size * 0.28 );
midCircle.setAttributeNS(null, 'fill', '#42495B' );

newSVG.appendChild(midCircle);
