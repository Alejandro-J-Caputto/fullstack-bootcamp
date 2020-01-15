



//ejercicio 4//


let miembros = [{'nombre': "Adolfo", 'Edad': 30}, {'nombre': "Sergio", 'Edad': 31}, 
        {'nombre':"Diego", 'Edad': 44}, {'nombre':  "Laura", 'Edad': "Deconocida"},
         {'nombre':  "Ernesto", 'Edad':"36"}, {'nombre':  "Leonardo", 'Edad': "Desconocida"},
         {'nombre':  "Alex", 'Edad': 30} ,{'nombre':  "Samuel", 'Edad': 31}, {'nombre':  "Alejandro", 'Edad': 44}, 
         {'nombre':  "Miguel",'Edad':"Desconocida"}]
//se asigna la variable y la relacion con la varible posicion, posteriormente se ejecuta la impresión//
         
 let posicion = parseInt(prompt ("Numero: "))   


 let alumno = miembros[posicion]

 document.write (`La edad y nombre del alumno es ${alumno.nombre} y edad ${alumno.Edad}  `)

