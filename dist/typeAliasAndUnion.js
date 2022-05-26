"use strict";
// union: junção de mais de um tipo
function displayItem(uId, description) {
    console.log(`id: ${uId} description: ${description}`);
}
displayItem(1, 'desc');
displayItem('2', 'desc');
function renderPlatform(platform) {
    return platform;
}
// renderPlatform('ios') aqui erro, pois não existe ios no type Platform
renderPlatform('Linux');
