class Contador {
    static cuentaGlobal = 0
    constructor(responsable){
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }
    obtenerResponsable() {
        return this.responsable;
    }
    obetenerCuentaIndividual(){
        return this.cuentaIndividual;
    }
    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal;
    }
    sumarAhorro(){
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }
}