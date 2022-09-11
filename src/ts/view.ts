import { Data } from "./controller";

// шаблон страницы ----------------------------------------------------------
const wrapper: HTMLDivElement = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const section: HTMLDivElement = document.createElement('div');
section.classList.add('section');
wrapper.appendChild(section);

export const menuBox: HTMLDivElement = document.createElement('div');
menuBox.classList.add('menuBox');
menuBox.classList.add('visible');
section.appendChild(menuBox);

const bodyBox: HTMLDivElement = document.createElement('div');
bodyBox.classList.add('bodyBox');
section.appendChild(bodyBox);

const upperLine: HTMLDivElement = document.createElement('div');
upperLine.classList.add('upperLine');
bodyBox.appendChild(upperLine);

const burgerBTN: HTMLButtonElement = document.createElement('button');
burgerBTN.classList.add('burgerBTN');
upperLine.appendChild(burgerBTN);

const burgerLine1: HTMLDivElement = document.createElement('div');
burgerLine1.classList.add('burgerLine');
burgerBTN.appendChild(burgerLine1);

const burgerLine2: HTMLDivElement = document.createElement('div');
burgerLine2.classList.add('burgerLine');
burgerBTN.appendChild(burgerLine2);

const burgerLine3: HTMLDivElement = document.createElement('div');
burgerLine3.classList.add('burgerLine');
burgerBTN.appendChild(burgerLine3);

const upperText: HTMLDivElement = document.createElement('div');
upperText.classList.add('upperText');
upperText.textContent = 'Marker News';
upperLine.appendChild(upperText);

const contentBox: HTMLDivElement = document.createElement('div');
contentBox.classList.add('contentBox');
contentBox.innerHTML = 'Select news source';
bodyBox.appendChild(contentBox);

// источники новостей ---------------------------------------------------------
export function renderSource(set: string[]): void {
    for (let i = 0; i < set.length; i++) {
        const source: HTMLButtonElement = document.createElement('button');
        source.classList.add('sourceBTN');
        source.textContent = `${set[i]}`;
        menuBox.appendChild(source);
    }
}

// блоки новостей -------------------------------------------------------------
export function renderNews(data: Data, target: string | null): void {
    contentBox.innerHTML = ''; //очистка блока перез заполнением

    for (let i = 0; i < data.articles.length; i++) {
        if (data.articles[i].source.name === target) {
            const newsBox: HTMLDivElement = document.createElement('div');
            newsBox.classList.add('newsBox');
            contentBox.appendChild(newsBox);

            const imgBox: HTMLDivElement = document.createElement('div');
            imgBox.classList.add('imgBox');
            imgBox.style.backgroundImage = `url('${data.articles[i].urlToImage}')`;
            newsBox.appendChild(imgBox);

            const textBox: HTMLDivElement = document.createElement('div');
            textBox.classList.add('textBox');
            newsBox.appendChild(textBox);

            const title: HTMLDivElement = document.createElement('div');
            title.classList.add('title');
            title.textContent = `${data.articles[i].title}`;
            textBox.appendChild(title);

            const description: HTMLDivElement = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = `${data.articles[i].description} <a target="_blank" href='${data.articles[i].url}'>read more<a>`;
            textBox.appendChild(description);

            const lastRow: HTMLDivElement = document.createElement('div');
            lastRow.classList.add('lastRow');
            textBox.appendChild(lastRow);

            const date: HTMLDivElement = document.createElement('div');
            date.classList.add('date');
            const dateStr = `${(data.articles[i].publishedAt).slice(11, 16)} ${(data.articles[i].publishedAt).slice(0, 10)}`;
            date.textContent = dateStr;
            lastRow.appendChild(date);

            const author: HTMLDivElement = document.createElement('div');
            author.classList.add('author');
            if (data.articles[i].author !== null) {
                author.textContent = `${data.articles[i].author}`;
            }
            lastRow.appendChild(author);
        }
    }
}

// делает активной кнопку ---------------------------------------------------------
export function activeBTN(btn: HTMLDivElement): void {
    menuBox.childNodes.forEach((node) => {
        (node as HTMLDivElement).classList.remove('active'); // убирает активный класс со всех элементов
    })
    btn.classList.add('active'); // добавляет активный класс нажатой кнопке
}

// бургер меню ----------------------------------------------------------
function onClickBurger() {
    menuBox.classList.toggle('visible');
}
burgerBTN.addEventListener('click', onClickBurger); // нажатие на бургер

export function unvisible() { //скрывает бурегр меню
    if (menuBox.classList.contains('visible')) {
        menuBox.classList.remove('visible');
    }
}
// -----------------------------------------------------------------------------
