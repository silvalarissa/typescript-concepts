// boolean (true / false)
let isOpen: Boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = 'hello'

// number (float, int, decimal, hex, binary)
let total: number 
total = 100

//array (arrayType[])
let myArray: number[]
myArray = [1,2,3]

//Generic
let items: Array<number>
items = [4,5,6]

// tuple [type, type, ... , type]
let tuple: [number, string, number[]]
tuple = [1,'2',[3]]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (melhor não usar)
let thing: any
thing = 'olá'
thing = 1
thing = true

// void
function logger(): void{
    console.log('olá')
}

// null || undefind
let username: string | undefined
username = 'larissa'

// never
function error(): never {
    throw new Error('error')
}

// object
let myObj: object
myObj = {
    username: 'larissa',
    age: 25
}


//type inference
let text = 'my text' //implicitamente é uma string
// let text: string = 'my text' é redundante