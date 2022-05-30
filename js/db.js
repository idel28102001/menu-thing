const elements  = {currPage: 'select-main', previousPage: 'select-branch',
    elements: [{name:'Услуга'},{name:'Сотрудник'},{name:'Дата и время'}]}

export const db =  {firstPage: {elements: [{
  name: "Москва", elements: {
    label:'ВЫБЕРЕТЕ ФИЛИАЛ', elements:[{name: 'Салон красоты, Москва',
          label:'Гринщевский переулок, 6',  elements},{name: 'Салон красоты, Москва',
          label:'Композиторская улица, 21',  elements},{name: 'Салон красоты, Москва',
          label:'Композиторская улица, 21',  elements}], previousPage: 'select-city', currPage:'select-branch'},
      label: `3 филиала`}, {
  name: "Санкт-Петербург", elements: {
        label:'ВЫБЕРЕТЕ ФИЛИАЛ', elements:[{name: 'Салон красоты, Санкт-Петербург',
          label:'Лиговский проспект, 64',elements},{name: 'Салон красоты, Санкт-Петербург',
          label:'проспект Просвещения, 33', elements}], previousPage: 'select-city', currPage:'select-branch'}, label: `2 филиала`}, {
  name: "Сочи",
  elements: {
    label:'ВЫБЕРЕТЕ ФИЛИАЛ', elements:[{name: 'Салон красоты, Сочи',
      label:'Гагарина, 23а', elements},{name: 'Салон красоты, Сочи',
      label:'Воровского, 5', elements}],
      previousPage: 'select-city', currPage:'select-branch'}, label: `2 филиала`,
}], label: "ВЫБЕРЕТЕ ГОРОД", currPage: 'select-city', previousPage: 'select-city'}}