// En este modelo reducido, vamos a considerar las siguientes cosas que podrían ser interesantes para comprar: una heladera que vale 200000 pesos, una cama que sale 80000, una tira de asado que sale 3500 pesos, un paquete de fideos que sale 500 pesos, y una plancha que vale 12000 pesos. Por las dudas aclaramos: la cama no es un electrodoméstico, la plancha sí.

const plancha = {
  nombreProducto(){
    return "plancha"
  },
  precio(){
    return 12000
  },
  tipo(){
    return "electrodomestico"
  },
  moneda(){
    return "ARG"
  }
}

const cama = {
  nombreProducto(){
    return "cama"
  },
  precio(){
    return 80000
  },
  tipo(){
    return "mueble"
  },
  moneda(){
    return "ARG"
  }
}

const paqueteDeFideos = {
  nombreProducto(){
    return "paquete de fideos"
  },
  precio(){
    return 500
  },
  tipo(){
    return "comida"
  },
  moneda(){
    return "ARG"
  }
}

const tiraDeAsado = {
  nombreProducto(){
    return "tira de asado"
  },
  precio(){
    return 3500
  },
  tipo(){
    return "comida"
  },
  moneda(){
    return "ARG"
  }
}

let productos = [plancha,cama,paqueteDeFideos,tiraDeAsado]
// comprar(cosa): registra que se ha comprado una cosa.
// cantidadDeCosasCompradas(): indica ... eso.
// tieneComida(): indica si compró algo que es comida al menos una vez.
// vieneDeEquiparse(): indica si la última cosa que se compró es un electrodoméstico, o bien vale más de 50000 pesos.
// esDerrochona(): indica si el importe total de las cosas compradas es de 90000 pesos o más.
// compraMasCara(): retorna la cosa comprada de mayor valor.
// electrodomésticosComprados(): devuelve un objeto que contiene todas las cosas compradas que son electrodomésticos.
// malaEpoca(): indica si todas las cosas compradas son comida.
// queFaltaComprar(lista): recibe una lista de cosas y devuelve las cosas de esa lista que aún no se han comprado.
// Atención: es una pregunta. No se pide que se compren.
// faltaComida(): indica si se han comprado menos de 2 cosas que son comida.

let casaDePepeYJulian = {
  elementos : [],
  comprar(producto){
    this.elementos.push(producto)
    // console.log("se a comprado " + producto.nombreProducto())
  },
  cantidadDeCosasCompradas(){
    return this.elementos.length
  },
  tieneComida(){
    return this.elementos.some(e => e.tipo() == "comida")
  },
  vieneDeEquiparse(){
    if (this.elementos.length == 0){
      return undefined
    }
    
    let ultimaCompra = this.elementos[this.elementos.length-1]
    return (ultimaCompra.tipo() == "electrodomestico" || (ultimaCompra.precio() > 50000 && ultimaCompra.moneda() == "ARG")) ? true : false
  },
  esDerrochona(){
    return this.elementos.reduce((acc,p) => acc + p.precio(), 0)  > 90000
  },
  compraMasCara(){
    return this.elementos.reduce((a,b) => a.precio() > b.precio() ?  a : b)
  },
  electrodomesticosComprados(){
    return this.elementos.filter(a => a.tipo() == "electrodomestico")
  },
  malaEpoca(){
    return this.elementos.every(a => a.tipo() == "comida")
  },
  queFaltaComprar(lista){
    return lista.filter(a => !this.elementos.includes(a))
  },
  faltaComida(){
    return this.elementos.filter(a => a.tipo() == "comida").length < 2
  }
}

casaDePepeYJulian.comprar(tiraDeAsado)
casaDePepeYJulian.comprar(paqueteDeFideos)


// casaDePepeYJulian.cantidadDeCosasCompradas()
// casaDePepeYJulian.tieneComida()
// casaDePepeYJulian.vieneDeEquiparse()
// casaDePepeYJulian.esDerrochona()
// casaDePepeYJulian.compraMasCara()
// casaDePepeYJulian.malaEpoca()
// casaDePepeYJulian.queFaltaComprar(productos)
// casaDePepeYJulian.faltaComida()