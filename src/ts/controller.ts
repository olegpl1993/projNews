import { renderNews, renderSource } from '../ts/view';

export interface Data {
    status: string, totalResults: number, articles: Array<{
        author: string, title: string, description: string, content: string, publishedAt: string, url: string, urlToImage: string, 
        source: { name: string }
    }>
}

export async function getNews(): Promise<void> {
    const apiKey = '418c2e2443aa40699febdfeb5115de86';
    const url = `https://newsapi.org/v2/everything?q=apple&from=2022-09-08&to=2022-09-08&sortBy=popularity&apiKey=${apiKey}`;
    const res: Response = await fetch(url); // fetch запрос
    const data: Data = await res.json(); // обьект с ответом
    renderSource(data); // отрисовка источников
    renderNews(data); // отрисовка новостей
}
