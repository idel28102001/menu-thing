import {createPages} from "./pages/page.js";
import {db} from "./db.js";

const selectCity = document.getElementById('select-city');
selectCity.innerHTML = '';
const firstPages = createPages(db.firstPage,document);
selectCity.append(firstPages.header, firstPages.mainPage)


// const selectMain = document.getElementById('select-main');
// selectMain.innerHTML = '';
// const firstPages = createPages(db.firstPage.elements[0].elements.elements[0].elements,document);
// selectMain.append(firstPages.header, firstPages.mainPage)

