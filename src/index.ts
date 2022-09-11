import './styles/index.scss';
import { getNews } from './ts/controller'

window.addEventListener('load',  getNews ); // запрос на получение массива новостей