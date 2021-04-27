interface work {
  thumb: string;
  name: string;
}
const works:work[] = [
  {
    thumb: 'https://img1.doubanio.com/dae/niffler/niffler/images/9ed11092-906a-11eb-a1e9-da8cb6702708.jpg',
    name: '迷途的苍穹——科幻世界漫游指南'
  },
  {
    thumb: 'https://m.douban.com/time/column/216?dt_time_source=douban-web_anonymous',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  },
  {
    thumb: './1.jpg',
    name: '2倍人生——戴锦华大师电影'
  }
]
document.querySelector('.time-list')
  .innerHTML=works.map(works=> `
  <li>
      <div class="img">
        <a href="">
        <img src="${works.thumb}" alt="">
        </a>
      </div>
      <div class="title">s
      <a href="">${works.name}</a>
      </div>
  </li> `).join('')