const path = require('path');
const data = require('./src/contents/service_pages.json');
const textToSlug = (text) => {
    const textWithoutAccent = text.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    const joinedText = textWithoutAccent.split(' ').join('-').toLowerCase();
    return joinedText;
}
exports.createPages = ({actions}) => {
    const {createPage} = actions;
    
    const template = path.resolve('./src/templates/service.tsx')

    data.forEach(item =>{
        const path = textToSlug(item.title);
        createPage({
            path,
            component:template,
            context:item,
        })
    })
}