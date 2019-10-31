

document.addEventListener('DOMContentLoaded', function () {


    
/* -------------------------------------------------
-------------------------------------------------
CHART1
------------------------------------------------- */


var myChart = Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 2, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }],
    exporting:{
        buttons:{
            contextButton:{
                enabled:false
            }
        }
    }
});

/* -------------------------------------------------
-------------------------------------------------
CHART2
------------------------------------------------- */

var myChart2 = Highcharts.chart('container2', {
chart: {
    type: 'column'
},
title: {
    text: 'Fruit Consumption'
},
xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges']
},
yAxis: {
    title: {
        text: 'Fruit eaten'
    }
},
series: [{
    name: 'Jane',
    data: [1, 3, 4]
}, {
    name: 'John',
    data: [5, 7, 3]
}],
exporting:{
    buttons:{
        contextButton:{
            enabled:false
        }
    }
}
});

/* -------------------------------------------------
-------------------------------------------------
CHART3
------------------------------------------------- */

var myChart3 = Highcharts.chart('container3', {
chart: {
    type: 'pie'
},
title: {
    text: 'Fruit Consumption'
},
xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges']
},
yAxis: {
    title: {
        text: 'Fruit eaten'
    }
},
series: [{
    name: 'Jane',
    data: [1, 3, 4]
}, {
    name: 'John',
    data: [5, 7, 3]
}],
exporting:{
    buttons:{
        contextButton:{
            enabled:false
        }
    }
}
});

/* -------------------------------------------------
-------------------------------------------------
CHART4
------------------------------------------------- */

var myChart4 = Highcharts.chart('container4', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
    exporting:{
        buttons:{
            contextButton:{
                enabled:false
            }
        }
    }

});




document.querySelector(".btn").addEventListener("click",function(e){
    console.log("clickeado Boton!!!!");

    let contenedor=document.querySelector("#container");
    let imgCanvas=document.querySelector(".imgCanvas");
    let imgContainer=document.querySelector("#imgContainer");
    let linkDescarga=document.querySelector("#imgContainer a");
    let descargaPDF=document.querySelector(".btnContainer");


/*     html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    }); */
    
/*     html2canvas(contenedor,{
        width:contenedor.getBoundingClientRect().width+20,
        height:contenedor.getBoundingClientRect().height,
        x:contenedor.getBoundingClientRect().x,
        y:0
    }).then(function(canvas) {
        let imgData=canvas.toDataURL();
        imgCanvas.src=imgData;

        canvas.width=contenedor.getBoundingClientRect().width;
        canvas.height=contenedor.getBoundingClientRect().height;
        document.body.appendChild(canvas);
    }); */

    html2canvas(contenedor,{
        width:contenedor.getBoundingClientRect().width - 10,
        height:contenedor.getBoundingClientRect().height +50,
        x:contenedor.getBoundingClientRect().x + 10,
        y:0,
        backgroundColor:null
    })
    .then(function(canvas) {

        let imgData=canvas.toDataURL();
        imgCanvas.src=imgData;
        linkDescarga.href=imgData;
        
        imgContainer.style.display="flex";
        descargaPDF.style.marginBottom="none";

        // console.log(contenedor.getBoundingClientRect().x,contenedor.getBoundingClientRect().width,contenedor.getBoundingClientRect().height)

 
        document.body.appendChild(canvas);
        var pdf = new jsPDF('a', 'mm', 'a4');

        let pagina = canvas.toDataURL('image/jpeg', 1.0);
   
           return {
               pdf:pdf,
               pagina:pagina
           }
          
    })
    .then(function(doc){

        console.log(doc)

        // docu.text('Hello world!', 1, 1);
        // doc.setFontSize(40)
        // doc.text(35, 25, 'Paranyan loves jsPDF')
        doc.pdf.addImage(doc.pagina, 'JPEG', 5, 5, 200, 0);
            
        doc.pdf.save("export.pdf");

        document.documentElement.scrollTop=1010;
        
    })
    
})



});

