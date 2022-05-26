// abstract class só podem ser extendidas de outras clases, mas nunca deixar instanciar um objeto dela
class UserAccount {
    // public é livro pra outras classes e fora dela
    // readonly é somente leitura, nao pode ser modificado
    // protected pode ser utilizado na classe e nas classes que a extendem
    // private só pode ser utilizado na propria classe
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    get getAge() {
        return this.age
    }

    set setAge(age: number) {
        this.age = age
    }

    logDetails():void {
        console.log(`The player ${this.name} and ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age)
        this.nickname = nickname
        this.level = level
    }
}

const lari = new UserAccount('larissa', 25)
lari.logDetails()

const john = new CharAccount('john', 39, 'john', 89)
john.logDetails()
