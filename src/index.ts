import './styles/index.scss';

// верстка приложения ---------------------------------------------------------
const wrapper:HTMLDivElement = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const upperText:HTMLDivElement = document.createElement('div');
upperText.classList.add('upperText');
upperText.textContent = 'proj News';
wrapper.appendChild(upperText);

const section:HTMLDivElement = document.createElement('div');
section.classList.add('section');
wrapper.appendChild(section);

const menuBox:HTMLDivElement = document.createElement('div');
menuBox.classList.add('menuBox');
section.appendChild(menuBox);

const contentBox:HTMLDivElement = document.createElement('div');
contentBox.classList.add('contentBox');
section.appendChild(contentBox);

//----------------------------------------------------------------------------

// источники новостей---------------------------------------------------------
const source:HTMLDivElement = document.createElement('div');
source.classList.add('source');
source.textContent = 'source News';
menuBox.appendChild(source);

const source1:HTMLDivElement = document.createElement('div');
source1.classList.add('source');
source1.textContent = 'source News 1';
menuBox.appendChild(source1);

const source2:HTMLDivElement = document.createElement('div');
source2.classList.add('source');
source2.textContent = 'source News 2';
menuBox.appendChild(source2);

//-----------------------------------------------------------------------------

// блоки новостей -------------------------------------------------------------
const newsBox:HTMLDivElement = document.createElement('div');
newsBox.classList.add('newsBox');
newsBox.textContent = 'news Box';
contentBox.appendChild(newsBox);

const newsBox1:HTMLDivElement = document.createElement('div');
newsBox1.classList.add('newsBox');
newsBox1.textContent = 'news Box 1';
contentBox.appendChild(newsBox1);

const newsBox2:HTMLDivElement = document.createElement('div');
newsBox2.classList.add('newsBox');
newsBox2.textContent = 'news Box 2';
contentBox.appendChild(newsBox2);

//-----------------------------------------------------------------------------
