
var a = "ahmad" // global scope
var b = "miftah"
var c = "syakir"
var d = "mas miftah"
var saya = "ahmad mifath syakir"
var gw = "syakir ramadhan"

function alert() {
    console.log(a, b, c)
}
alert()

function print(param) {
    console.log(param)
}
print(c)

//pembatas//

function alert() {
    console.log(d)
}
alert()

function print(param){
console.log(param)
}
print(d)

//pembatas//

const cetak1 = function () {
    console.log(saya)
}
const cetak5 = function () {
    console.log(gw)
}
var saya = "ganteng abiss"
const cetak2 = function () {
    console.log(saya)
}
var saya = "Biasa aja -_-"
const cetak3 = function () {
    console.log(saya)
}
var gw = "Beuhhh demage nya >///<"
const cetak6 = function() {
    console.log(gw)
}

//pembatas//

const hello = new String("hallo")
hello.nama = "ngab"
hello.print = function(){
    console.log(this+ " " + this.nama)
}

const yellow = new String("miftah")
yellow.name = " pinter bgt njirr"
yellow.print = function() {
    console.log(this + " asli" + this.name + this.nama)
}
yellow.print()
hello.print()
cetak1()
cetak2()
cetak3()
cetak5()
cetak6()

//pembatas//
function tampil(){
    form =  prompt("Siapa Nama Antum : ","");
    document.write("SUp" +form+ ",guys");
    }

    //pembatas//
    let a = 2
    const kuadrat = function(num) {
        let retult = num * num
        return result
    }
    let resultA = kuadrat(a)


    comsole.log(a)

const a = 'hello'
const b = 'iya'
const c = 'iya'
const d = 'iya'
const e = 'iya'
const s = 'iya'
const r = 'iya'
console.log('${a} ${b}')

console.log(a + '' + b)