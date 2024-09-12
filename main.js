// En este modelo reducido, vamos a considerar las siguientes cosas que podrían ser interesantes para comprar: una heladera que vale 200000 pesos, una cama que sale 80000, una tira de asado que sale 3500 pesos, un paquete de fideos que sale 500 pesos, y una plancha que vale 12000 pesos. Por las dudas aclaramos: la cama no es un electrodoméstico, la plancha sí.
let tienda2 = {
  tira_de_asado : {
    precio: 3500,
    moneda: "ARG",
    tipo: "comida"
  },
  paquete_de_fideos : {
    precio: 500,
    moneda: "ARG",
    tipo: "comida"
  },
  cama : {
    precio: 80000,
    moneda: "ARG",
    tipo: "mueble"
  },
  plancha : {
    precio: 12000,
    moneda: "ARG",
    tipo: "electrodomestico"
  },
  heladera : {
    precio:  200000,
    moenda: "ARG",
    tipo: "electrodomestico"
  },
  obtener : function(nombre){
    let keyFormat = nombre.replaceAll(" ","_")
    if (this[keyFormat]) return Object.assign({producto: nombre}, this[keyFormat])
    return false
  }
}

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
  valorTotal: 0,
  elementos : {
    electrodomestico : [],
    mueble : [],
    comida : []
  },
  comprar : function (cosa){
    let producto = tienda2.obtener(cosa)
    if (producto){
      this.elementos[producto.tipo].push(producto)
      this.valorTotal += producto.precio

      console.log("compra realizada!!")
      console.log(this.elementos)
    } else {
      console.log("no se encuentra ese producto")
    }
  },
  cantidadDeCosasCompradas : 1,
  tieneComida : 1,
  vieneDeEquiparse : 1,
  esDerrochona : 1,
  compraMasCara : 1,
  electrodomesticosComprados : 1,
  malaEpoca : 1,
  queFaltaComprar : 1,
  faltaComida : 1
}

casaDePepeYJulian.comprar("tira de asado")