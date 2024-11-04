class Heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        switch (this.tipo) {
            case "Guerreiro":
                ataque = "usando espada"
                break
            
            case "Mago":
                ataque = "usando magia"
                break
            
            case "Ninja":
                ataque = "usando shuriken"
                break

            case "Monge":
                ataque = "usando artes marciais"
                break

            default:
                ataque = "de forma desconhecida"
        }

        console.log(`O ${this.tipo} atacou ${ataque}`)
    }
}

const heroi1 = new Heroi ("Reinhart", 27, "Guerreiro")
heroi1.atacar()

const heroi2 = new Heroi ("Frieren", 1000, "Mago")
heroi2.atacar()

const heroi3 = new Heroi ("Sekiro", 45, "Ninja")
heroi3.atacar()

const heroi4 = new Heroi ("Miroku", 23, "Monge")
heroi4.atacar()