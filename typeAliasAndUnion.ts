// union: junção de mais de um tipo
function displayItem(uId: number | string, description: string){
    console.log(`id: ${uId} description: ${description}`)
}

displayItem(1, 'desc')
displayItem('2', 'desc')

// criando um type alias do union de number e string
type MyTypeAlias = number | string
type Platform = 'MacOS' | 'Windows' | 'Linux'

function renderPlatform(platform: Platform) {
    return platform
}

// renderPlatform('ios') aqui erro, pois não existe ios no type Platform
renderPlatform('Linux')