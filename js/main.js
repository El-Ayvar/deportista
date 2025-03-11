let deportista = {
    nombre : 'tyson',
    energia : 100,
    experiencia : 10,
    entrenarHoras : function (horas){
        this.energia -= horas * 5,
        console.log(this.energia)
        this.experiencia += horas * 2
        console.log(this.experiencia)
    }
}
console.log("==Antes de comenzar entrenamiento==")
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("")
deportista.entrenarHoras(5)