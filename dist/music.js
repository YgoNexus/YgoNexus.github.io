const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all', // one /none
    order: 'list',	// random
    preload: 'auto',
    volume: 0.6,
    mutex: true,
    listFolded: false,
    listMaxHeight: '300px',
    lrcType: 1,
	// 3是使用audio.lrc   1是JS  2是HTML
    audio: [
      {
        name: "敢归云间宿",
        artist: '三无',
        url: 'https://drive.google.com/uc?export=download&id=1u7dE6gzMjclBb0_B2uln50AMIdVEIuVe',
        cover: '/music/cover/敢归云间宿.png',
        // lrc: '/music/lyrics/敢归云间宿.lrc',
      },
      {
        name: '老教室',
        artist: '831',
        url: '/music/老教室.flac',
        cover: '/music/cover/831_大逃杀.jpg',
        // lrc: '/music/lyrics/老教室.lrc',
      },
      {
        name: "敢归云间宿",
        artist: '三无',
        url: 'https://drive.google.com/uc?export=download&id=1u7dE6gzMjclBb0_B2uln50AMIdVEIuVe',
        cover: '/music/cover/敢归云间宿.png',
        // lrc: '/music/lyrics/敢归云间宿.lrc',
      },
    ]
});

// const colorThief = new ColorThief();
// const image = new Image();
// const xhr = new XMLHttpRequest();
// const setTheme = (index) => {
    // if (!ap.list.audios[index].theme) {
        // xhr.onload = function(){
            // let coverUrl = URL.createObjectURL(this.response);
            // image.onload = function(){
                // let color = colorThief.getColor(image);
				// window.alert(color);
                // ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                // URL.revokeObjectURL(coverUrl)
            // };
            // image.src = coverUrl;
        // }
        // xhr.open('GET', ap.list.audios[index].cover, true);
        // xhr.responseType = 'blob';
        // xhr.send();
    // }
// };
// setTheme(ap.list.index);
// ap.on('listswitch', (index) => {
    // setTheme(index);
// });