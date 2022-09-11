import { renderSource, menuBox, renderNews, activeBTN, unvisible } from '../ts/view';

export interface Data {
    status: string, totalResults: number, articles: Array<{
        author: string, title: string, description: string, content: string, publishedAt: string, url: string, urlToImage: string,
        source: { name: string }
    }>
}
let data: Data; // обьект с новостями

// запрос на получение массива новостей ----------------------------------------------------------------------------------
export async function getNews(): Promise<void> {
    const apiKey = '418c2e2443aa40699febdfeb5115de86';
    const url = `https://nodenews.herokuapp.com/everything?q=technique&sortBy=popularity&apiKey=${apiKey}`;
    const res: Response = await fetch(url); // fetch запрос
    data = await res.json(); // обьект с ответом
    const sources: string[] = []; //массив источников новостей
    for (let i = 0; i < data.articles.length; i++) {
        sources.push(data.articles[i].source.name);
    }
    const set: string[] = sources.filter((item, pos) => sources.indexOf(item) === pos); // убирает повторяющиеся источники
    renderSource(set); // отрисовка источников
}

// нажатие на кнопку меню -----------------------------------------------------------------------------------------------
function onClickBTN(e: Event): void {
    if ((e.target as HTMLDivElement).classList.contains('sourceBTN')) {
        activeBTN(e.target as HTMLDivElement); // делает активной кнопку
        renderNews(data, (e.target as HTMLDivElement).textContent); // отрисовка новостей
        unvisible(); // скрывает бурегр меню
    }
}
menuBox.addEventListener('click', (e: Event): void => { onClickBTN(e) });

// -----------------------------------------------------------------------------------------------------------------------