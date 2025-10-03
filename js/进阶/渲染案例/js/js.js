const cardData = [
  {
    id: 1,
    name: "遇楼兰",
    frontImage: "./img/img1a.webp",
    backImage: "./img/img1b.webp",
    description: "别的货物实在是没有了，<br>不过……你愿意带走我吗？"
  },
  {
    id: 2,
    name: "光年无距",
    frontImage: "./img/img2a.webp",
    backImage: "./img/img2b.webp",
    description: "要不要比赛？",
    extraClass: "state1" // 特殊样式类
  },
  {
    id: 3,
    name: "灯火此身",
    frontImage: "./img/img3a.webp",
    backImage: "./img/img3b.webp",
    description: "这次醒来时，<br>我真的看见你了。"
  },
  {
    id: 4,
    name: "铸心",
    frontImage: "./img/img4a.webp",
    backImage: "./img/img4b.webp",
    description: "我的猎物不能被其他任何物种抓，<br>仅此而已。"
  },
  {
    id: 5,
    name: "终极解析",
    frontImage: "./img/img5a.webp",
    backImage: "./img/img5b.webp",
    description: "我不需要你了，<br>我会独自完成一切。"
  },
  {
    id: 6,
    name: "春神低语",
    frontImage: "./img/img6a.webp",
    backImage: "./img/img6b.webp",
    description: "你听见了吗？<br>这风声里的低语。"
  }
];

//声明一个字符串变量，用于存储生成的HTML内容
let str = ''
//遍历数据数组，生成HTML结构
cardData.forEach(item => {
  //对象解构
  const { frontImage, backImage, name, description, extraClass } = item;
  str += `
  <div class="box">
            <div class="imgf">
                <img src="${frontImage}" alt="">
                <div class="name">
                    <p>${name}</p>
                </div>
            </div>
            <div class="imgb">
                <img src="${backImage}" alt=""></img>
                <div class="state ${extraClass ? extraClass : ''}">
                    <p>${description}</p>
                </div>
            </div>
        </div>
  `;
});
//将生成的HTML内容插入到页面中
document.querySelector('.w').innerHTML = str;