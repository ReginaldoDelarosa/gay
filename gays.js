
const gays=[{
    id:0,
    nombre: 'Andres',
    gay_level:1
},
{
    id:1,
    nombre: 'Reginaldo',
    gay_level:0
}
,
{
    id:2,
    nombre: 'guillermo',
    gay_level:0
}
];


let reuniones = prompt('Ingrese el numero de reuniones que se tendran al mes: ' );

for (let i=0; i<reuniones; i++){
    let gay= prompt('Ingrese el nombre del integrante del grupo: ');
    if (gay == 'Andres'){
        gays[1].gay_level= gays[1].gay_level+1;
        gays[2].gay_level= gays[1].gay_level+1;
    }
    
    if(gay=='Reginaldo' && gays[1].gay_level>0){
        gays[2].gay_level= gays[1].gay_level+1;
        gays[0].gay_level= gays[1].gay_level+1;
    }
    
    if(gay=='guillermo' && gays[2].gay_level>0){
        gays[1].gay_level= gays[1].gay_level+1;
        gays[0].gay_level= gays[1].gay_level+1;
    }
}

for(let i=0; i<=3; i++){
    alert(`El nivel de gay de ${gays[i].nombre} es: ${gays[i].gay_level}` )
}



    
