var movies = [
    {
        id: 1,
        thumb: 'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2637603645.webp',
        name: '第十一回',
        star: 7.5
    },
    {
        id: 2,
        thumb: './1.jpg',
        name: '我的姐姐',
        star: 7.2
    }
];
document.querySelector('.movie-list>ul')
    .innerHTML = movies.map(function (movies) { return "\n  <li>\n      <div class=\"pic\">\n        <a href=\"\">\n        <img src=\"" + movies.thumb + "\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"title\">\n      <a href=\"\">" + movies.name + "</a>\n      </div>\n      <a href=\"\" class=\"btn-link btn-ticket\">\u9009\u5EA7\u8D2D\u7968</a>\n  </li> "; }).join('');
