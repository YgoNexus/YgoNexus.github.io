const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 2,
	// 3是使用audio.lrc   1是JS  2是HTML
    audio: [
      {
        name: "敢归云间宿",
        artist: '三无',
        url: 'https://drive.google.com/uc?export=download&id=1u7dE6gzMjclBb0_B2uln50AMIdVEIuVe',
        cover: '/music/cover/敢归云间宿.jpg',
        lrc: '/music/lyrics/敢归云间宿.lrc',
      },
      {
        name: '哥哥爸爸真偉大',
        artist: '兒歌',
        url: '/music/飞鸟和蝉.mp3',
        cover: '/music/cover/哥哥爸爸真偉大.jpg',
        lrc: '/music/lyrics/哥哥爸爸真偉大.lrc'
      }
    ]
});


const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function(){
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function(){
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});