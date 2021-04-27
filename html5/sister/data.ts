//对象字面量
interface movie {
    id: number;
    thumb: string;
    name: string;
    star: number;
  }
  const movies:movie[] = [
    {
      id:1,
      thumb: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2637603645.webp',
      name: '第十一回',
      star: 7.5,
    },
    {
      id: 2,
      thumb: './1.jpg',
      name: '我的姐姐',
      star: 7.2
    }
  ]
  document.querySelector('.movie-list>ul')
  .innerHTML=movies.map(movies=> `
  <li>
      <div class="pic">
        <a href="">
        <img src="${movies.thumb}" alt="">
        </a>
      </div>
      <div class="title">
      <a href="">${movies.name}</a>
      </div>
      <a href="" class="btn-link btn-ticket">选座购票</a>
  </li> `).join('')
