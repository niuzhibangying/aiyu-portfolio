const workGroups = [
  {
    category: "创意短片",
    note: "以 AI 影像承载寓言、现实议题与东方志怪情绪。",
    works: [
      {
        title: "地球上最后一个诗人",
        tag: "后人类寓言",
        duration: "12:06",
        poster: "./assets/covers/last-poet-on-earth.jpg",
        video: "./assets/videos/last-poet-on-earth.mp4",
        description:
          "关于记忆、痛苦、存在与救赎的后人类寓言。在“飞升”成为普遍选择后，最后一个人类创造仿生人与机器人同伴，试图解答何为人类的终极困惑。",
      },
      {
        title: "山的那边是什么",
        tag: "现实诗性",
        duration: "02:01",
        poster: "./assets/covers/beyond-the-mountain.png",
        video: "./assets/videos/beyond-the-mountain.mp4",
        description:
          "一只流浪猫的独白，用爪尖的自由哲学反衬人类世界的爱与囚笼。诗意背后，是无法选择的伤痛、寒冷与饥饿。",
      },
      {
        title: "囍",
        tag: "聊斋短片",
        duration: "01:42",
        poster: "./assets/covers/xi.jpg",
        video: "./assets/videos/xi.mp4",
        description:
          "AI 挑战聊斋气质短片，以婚嫁意象、民俗阴影和东方惊悚氛围，进入古典志怪的情绪空间。",
      },
    ],
  },
  {
    category: "广告片",
    note: "用 AIGC 建立品牌叙事、产品想象与情绪记忆。",
    works: [
      {
        title: "比亚迪",
        tag: "汽车广告",
        duration: "01:55",
        poster: "./assets/covers/byd.jpg",
        video: "./assets/videos/byd.mp4",
        description:
          "一台能陪孩子一起长大的车，藏在日常里的温柔陪伴，也承载阖家出行时的安心与欢喜。",
      },
      {
        title: "方程豹",
        tag: "汽车广告",
        duration: "02:30",
        poster: "./assets/covers/fangchengbao.jpg",
        video: "./assets/videos/fangchengbao.mp4",
        description:
          "方程豹钛 3 以技术谱写向往，用全新的 AI 影像方式记录出行、探索与生活可能性。",
      },
      {
        title: "给自己的一封信【联想】",
        tag: "品牌叙事",
        duration: "02:28",
        poster: "./assets/covers/letter-to-myself.png",
        video: "./assets/videos/letter-to-myself.mp4",
        description:
          "从 1999 年的旧电脑到未来的全息数据海洋，两个时代的小雅隔空相望，完成一次关于选择、成长与自我接纳的时光回信。",
      },
    ],
  },
  {
    category: "漫剧",
    note: "围绕 IP、怪谈与类型叙事，探索 AI 影像的连续剧感。",
    works: [
      {
        title: "诡秘之主：我们拯救了廷根",
        tag: "IP 漫剧",
        duration: "01:23",
        poster: "./assets/covers/lord-of-mysteries-tinggen.png",
        video: "./assets/videos/lord-of-mysteries-tinggen.mp4",
        description:
          "“我们是守护者，也是一群时刻对抗危险和疯狂的可怜虫。”以克制而阴郁的视听进入廷根守护者的命运切面。",
      },
      {
        title: "我在怪谈论坛学斩鬼",
        tag: "怪谈漫剧",
        duration: "03:13",
        poster: "./assets/covers/ghost-forum-slayer.png",
        video: "./assets/videos/ghost-forum-slayer.mp4",
        description:
          "普通学生误入神秘怪谈论坛，论坛诡事逐渐照进现实。他在一次次危机中升级求生，进入规则怪谈的阴影深处。",
      },
      {
        title: "诸神愚戏",
        tag: "真人漫剧",
        duration: "02:05",
        poster: "./assets/covers/foolish-play-of-gods.png",
        video: "./assets/videos/foolish-play-of-gods.mp4",
        description:
          "恍如昨日，嗤笑今朝。真人版试炼开启，以强风格视觉进入规则、谎言与命运互相纠缠的叙事场。",
      },
    ],
  },
];

const worksGrid = document.querySelector("#worksGrid");

worksGrid.innerHTML = workGroups
  .map(
    (group) => `
      <section class="work-group" aria-labelledby="${group.category}">
        <div class="group-heading">
          <div>
            <p class="group-kicker">Category</p>
            <h3 id="${group.category}">${group.category}</h3>
          </div>
          <p>${group.note}</p>
        </div>
        <div class="category-grid">
          ${group.works
            .map(
              (work) => `
                <article class="work-card">
                  <div class="video-frame">
                    <video
                      controls
                      controlsList="nodownload noplaybackrate noremoteplayback"
                      disablepictureinpicture
                      disableremoteplayback
                      draggable="false"
                      oncontextmenu="return false"
                      preload="none"
                      poster="${work.poster}"
                      aria-label="播放《${work.title}》"
                    >
                      <source src="${work.video}" type="video/mp4">
                    </video>
                  </div>
                  <div class="work-body">
                    <div class="work-meta">
                      <span class="work-tag">${work.tag}</span>
                      <span class="work-duration">${work.duration}</span>
                    </div>
                    <h4>${work.title}</h4>
                    <p>${work.description}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `,
  )
  .join("");

document.querySelectorAll("video").forEach((video) => {
  video.controlsList?.add("nodownload");
  video.controlsList?.add("noplaybackrate");
  video.controlsList?.add("noremoteplayback");
  video.disablePictureInPicture = true;
  video.setAttribute("disablepictureinpicture", "");
  video.setAttribute("disableremoteplayback", "");
  video.setAttribute("draggable", "false");
  video.addEventListener("contextmenu", (event) => event.preventDefault());
  video.addEventListener("dragstart", (event) => event.preventDefault());
});

const copyButton = document.querySelector("[data-copy]");

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy;
  const originalText = copyButton.textContent;

  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "已复制：lzy57666";
  } catch {
    copyButton.textContent = "联系方式：lzy57666";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalText;
  }, 2200);
});
