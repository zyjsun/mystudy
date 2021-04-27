var works = [
    {
        thumb: 'https://img1.doubanio.com/dae/niffler/niffler/images/9ed11092-906a-11eb-a1e9-da8cb6702708.jpg',
        name: '迷途的苍穹——科幻世界漫游指南'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/f90e218a-b8aa-11e7-9cc5-0242ac110021.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    },
    {
        thumb: 'https://img3.doubanio.com/dae/niffler/niffler/images/bd70700a-c5a5-11ea-8a59-f23c99dd97de.jpg',
        name: '2倍人生——戴锦华大师电影'
    }
];
document.querySelector('.time-list')
    .innerHTML = works.map(function (works) { return "\n  <li>\n      <div class=\"img\">\n        <a href=\"\">\n        <img src=\"" + works.thumb + "\" alt=\"\">\n        </a>\n      </div>\n      <div class=\"title\">s\n      <a href=\"\">" + works.name + "</a>\n      </div>\n  </li> "; }).join('');
