import { Data } from "./controller";

// шаблон страницы ----------------------------------------------------------
const wrapper: HTMLDivElement = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const upperText: HTMLDivElement = document.createElement('div');
upperText.classList.add('upperText');
upperText.textContent = 'Marker News';
wrapper.appendChild(upperText);

const section: HTMLDivElement = document.createElement('div');
section.classList.add('section');
wrapper.appendChild(section);

export const menuBox: HTMLDivElement = document.createElement('div');
menuBox.classList.add('menuBox');
section.appendChild(menuBox);

const contentBox: HTMLDivElement = document.createElement('div');
contentBox.classList.add('contentBox');
section.appendChild(contentBox);

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
    contentBox.innerHTML = ''; //очистка блока перез даполнением

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
            description.innerHTML = `${data.articles[i].description} <a href='${data.articles[i].url}'>more<a>`;
            textBox.appendChild(description);

            const lastRow: HTMLDivElement = document.createElement('div');
            lastRow.classList.add('lastRow');
            textBox.appendChild(lastRow);

            const date: HTMLDivElement = document.createElement('div');
            date.classList.add('date');
            date.textContent = `${data.articles[i].publishedAt}`;
            lastRow.appendChild(date);

            const author: HTMLDivElement = document.createElement('div');
            author.classList.add('author');
            author.textContent = `${data.articles[i].author}`;
            lastRow.appendChild(author);
        }
    }
}

//-----------------------------------------------------------------------------

