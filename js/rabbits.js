function Rabbit(adjective){
this.adjective=adjective
this.species="rabbit"
}
var whiteRabbit=new Rabbit("white")
var blackRabbit=new Rabbit("black")
console.log(whiteRabbit)
console.log(Rabbit.prototype)
Rabbit.prototype.species="rabbit"
console.log(whiteRabbit)

whiteRabbit.species="human"
console.log(blackRabbit)
