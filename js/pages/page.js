const createPage = ({name, label, elements, document})=> {
    const pagesItem = document.createElement('li');
    const page = document.createElement('div');
    const pageInfo = document.createElement('span');
    const pageName = document.createElement('span');
    const arrow = document.createElement('span');

    pagesItem.classList.add('pages__item');
    page.classList.add('page');
    pageInfo.classList.add('page__info');
    pageName.classList.add('page__name');
    arrow.classList.add('arrow');
    pageName.textContent = name;


    pageInfo.append(pageName);
    if (label) {
        const pageBranches = document.createElement('span');
        pageBranches.classList.add('page__branches');
        pageBranches.textContent = label;
        pageInfo.append(pageBranches);
    }

    page.append(pageInfo, arrow);
    pagesItem.append(page);

    pagesItem.addEventListener('click', ()=>{
        if (elements.previousPage==='select-branch') {
            localStorage.setItem('place', JSON.stringify({name: name.split(',')[0], label}));
        }
        document.querySelectorAll('.previous-page').forEach(e=>{
            e.classList.remove('previous-page');
        });
        const currPage = document.getElementById(elements.currPage);
        const previousPage = document.getElementById(elements.previousPage);
        const curr = createPages(elements,document);
        currPage.append(curr.header, curr.mainPage);
        currPage.classList.add('current-page');
        previousPage.classList.remove('current-page');
        previousPage.classList.add('previous-page');
    });

    return pagesItem;
}

const selectHeader = (text) => {
    const header = document.createElement('div');
    header.classList.add('container', 'header');
    const h3 = document.createElement('h3');
    h3.classList.add('h3__title');
    header.classList.add('container', 'header');
    header.append(h3);
    h3.textContent = text;
    return header;
}

const selectedHeader = () => {
    const header = document.createElement('div');
    header.classList.add('container', 'header__main');
    const obj = JSON.parse(localStorage.getItem('place'));
    // const obj = {name: 'Салон красоты', label: 'Гринщевский переулок, 6'}
    const url = obj.url || './img/fashion.png';

    const info = document.createElement('span');
    const name = document.createElement('h1');
    const label = document.createElement('span');

    info.classList.add('header__info');
    name.classList.add('header__name');
    label.classList.add('header__label');

    name.textContent = obj.name;
    label.textContent = obj.label;

    info.append(name, label);

    const img = document.createElement('img');
    img.classList.add('header__img');
    img.src = url;
    header.append(img, info);
    console.log(obj)
    return header;
}

export const createPages = (object, document) => {
    let header;
    const mainPage = document.createElement('div');
    console.log(object.currPage)
    switch (object.currPage) {
        case 'select-city':
        case 'select-branch':
            header = selectHeader(object.label);
            break;
        case 'select-main':
            header = selectedHeader();
            mainPage.classList.add('main-page__main');
    }
    const pages = document.createElement('ul');
    mainPage.classList.add('main__page');
    pages.classList.add('pages');

    mainPage.append(pages);
    object.elements.forEach(e=>{
        const currItem = createPage({
            name: e.name,
            label: e.label,
            elements: e.elements,
            document});
        pages.append(currItem);
    });
    return {header, mainPage};
}

