let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"]

amigos.indexOf("Pepe") // nos devuelve el índice 1.


amigos.indexOf("Juan") // devuelve la primera coincidencia, es decir, 0.

amigos.indexOf("Guille") // Devuelve -1 porque no hay un Guille en este arreglo.
amigos.indexOf("juan") // Devuelve -1 porque es "case sensitive"