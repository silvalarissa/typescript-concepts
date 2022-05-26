type AccountInfo = {
    username: string
    email?: string
    id: number | string
}

type CharacterInfo = {
    nickname: string
    level: number
}

const myCharacter: CharacterInfo = {
    nickname: 'larissa',
    level: 100
}

const myAccount: AccountInfo = {
    username: 'larissa',
    id: '1'
}

//intersection
type PlayerInfo = AccountInfo & CharacterInfo

const myPlayer: PlayerInfo = {
    username: 'larissa',
    id: 1,
    nickname: 'larissa',
    level: 20,
    email: 'larissa@teste.com'
}