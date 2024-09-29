// En este modelo reducido, vamos a considerar las siguientes cosas que podrían ser interesantes para comprar: una heladera que vale 200000 pesos, una cama que sale 80000, una tira de asado que sale 3500 pesos, un paquete de fideos que sale 500 pesos, y una plancha que vale 12000 pesos. Por las dudas aclaramos: la cama no es un electrodoméstico, la plancha sí.

const dolar = {
  precioDeVenta(){
    return 1200
  }
}
const peso = {
  precioDeVenta(){
    return 1
  }
}

const plancha = {
  nombreProducto(){
    return "plancha"
  },
  precio(){
    return 12000 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "electrodomestico"
  },
  moneda(){
    return peso
  }
}

const cama = {
  nombreProducto(){
    return "cama"
  },
  precio(){
    return 80000 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "mueble"
  },
  moneda(){
    return peso
  }
}

const paqueteDeFideos = {
  nombreProducto(){
    return "paquete de fideos"
  },
  precio(){
    return 500 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "comida"
  },
  moneda(){
    return peso
  }
}

const tiraDeAsado = {
  nombreProducto(){
    return "tira de asado"
  },
  precio(){
    return 3500 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "comida"
  },
  moneda(){
    return peso
  }
}

// ## Más cosas
// Agregar las siguientes cosas que pueden comprarse:
// - un kilo de milanesas rebozadas: 2600 pesos.
// - una botella de salsa de tomates: 900 pesos.
// - un microondas: 42000 pesos.
// - un kilo de cebollas: 250 pesos.

const milanesas = {
  nombreProducto(){
    return "kilo de milanesas rebozadas"
  },
  precio(){
    return 2600 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "comida"
  },
  moneda(){
    return peso
  }
}
const salsaTomate = {
  nombreProducto(){
    return "botella de salsa de tomate"
  },
  precio(){
    return 900 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "aderezo"
  },
  moneda(){
    return peso
  }
}
const microondas = {
  nombreProducto(){
    return "microondas"
  },
  precio(){
    return 42000 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "electrodomestico"
  },
  moneda(){
    return peso
  }
}
const cebollas = {
  nombreProducto(){
    return "kilo de cebollas"
  },
  precio(){
    return 250 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "aderezo"
  },
  moneda(){
    return peso
  }
}
// - una compu: 500 dólares. Para saber el precio en pesos, multiplicar por la cotización del dólar. Agregar un objeto `dolar` al que se le pueda preguntar el `precioDeVenta()`, alcanza con que devuelva un valor fijo.
const compu = {
  nombreProducto(){
    return "compu"
  },
  precio(){
    return 500 * this.moneda().precioDeVenta()
  },
  tipo(){
    return "electrodomestico"
  },
  moneda(){
    return dolar
  }
}

// - un "pack comida" que incluye un plato (que puede ser tira de asado, fideos o milanesas) y un aderezo (que puede ser la botella de salsa de tomates o el kilo de cebollas. Precio: la suma del precio de sus componentes.

const packComida = {
  nombreProducto(){},
  precio(){},
  tipo(){},
  moneda(){}
}


let productos = [plancha,cama,paqueteDeFideos,tiraDeAsado,milanesas,cebollas,compu,microondas,salsaTomate]
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
  },
  cantidadDeCosasCompradas(){
    return this.elementos.length
  },
  tieneComida(){
    return this.elementos.some(e => e.tipo() == "comida")
  },
  vieneDeEquiparse(){
    if (this.elementos.length == 0) return false
    
    let ultimaCompra = this.elementos[this.elementos.length-1]
    return (ultimaCompra.tipo() == "electrodomestico" || (ultimaCompra.precio() > 50000)) ? true : false
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

// casaDePepeYJulian.comprar(compu)
// casaDePepeYJulian.cantidadDeCosasCompradas()
// casaDePepeYJulian.tieneComida()
// casaDePepeYJulian.vieneDeEquiparse()
// casaDePepeYJulian.esDerrochona()
// casaDePepeYJulian.compraMasCara()
// casaDePepeYJulian.malaEpoca()
// casaDePepeYJulian.queFaltaComprar(productos)
// casaDePepeYJulian.faltaComida()