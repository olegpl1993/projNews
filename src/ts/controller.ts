import { renderSource, menuBox, renderNews } from '../ts/view';

export interface Data {
    status: string, totalResults: number, articles: Array<{
        author: string, title: string, description: string, content: string, publishedAt: string, url: string, urlToImage: string,
        source: { name: string }
    }>
}
let data: Data;

export async function getNews(): Promise<void> {
    const apiKey = '418c2e2443aa40699febdfeb5115de86';
    const url = `https://newsapi.org/v2/everything?q=apple&from=2022-09-08&to=2022-09-08&sortBy=popularity&apiKey=${apiKey}`;
    const res: Response = await fetch(url); // fetch запрос
    data = await res.json(); // обьект с ответом
    const sources: string[] = [];
    for (let i = 0; i < data.articles.length; i++) {
        sources.push(data.articles[i].source.name);
    }
    const set: string[] = sources.filter((item, pos) => sources.indexOf(item) == pos)
    renderSource(set); // отрисовка источников
}

menuBox.addEventListener('click', (e: Event): void => {
    if ((e.target as Element).classList.contains('sourceBTN')) {
        renderNews(data, (e.target as Element).textContent); // отрисовка новостей
    }
})