
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#4080ff',
          secondary: '#ff7d00',
          grayBg: '#f5f7fa'
        }
      }
    }
  }

;

// ======================模拟后端返回模板配置，不再硬编码Unsplash，后续对接后端接口替换此处======================
const backendTemplateConfig = [
  { id: 't1', name: '科技深蓝', url: '', localFallback:'', thumbnail:'' },
  { id: 't2', name: '城市夜景', url: '', localFallback:'', thumbnail:'' },
  { id: 't3', name: '美食暖调', url: '', localFallback:'', thumbnail:'' },
  { id: 't4', name: '自然风光', url: '', localFallback:'', thumbnail:'' },
  { id: 't5', name: '商务极简', url: '', localFallback:'', thumbnail:'' },
  { id: 't6', name: '运动热血', url: '', localFallback:'', thumbnail:'' },
  { id: 't7', name: '音乐氛围', url: '', localFallback:'', thumbnail:'' },
  { id: 't8', name: '粉色潮流', url: '', localFallback:'', thumbnail:'' },
  // —— 扩充模板：Unsplash 免费图库（Unsplash License 可免费商用），已下载到本地 images/ ——
  { id: 't9',  name: '代码编程', url: '', localFallback:'', thumbnail:'' },
  { id: 't10', name: '科技地球', url: '', localFallback:'', thumbnail:'' },
  { id: 't11', name: '团队协作', url: '', localFallback:'', thumbnail:'' },
  { id: 't12', name: '山湖风光', url: '', localFallback:'', thumbnail:'' }
];
// 本地模板背景图（images目录）；替换图片时直接覆盖同名文件即可，无需改代码
const demoTemplateImgs = [
  'images/t1.jpg',
  'images/t2.jpg',
  'images/t3.jpg',
  'images/t4.jpg',
  'images/t5.jpg',
  'images/t6.jpg',
  'images/t7.jpg',
  'images/t8.jpg',
  'images/t9.jpg',
  'images/t10.jpg',
  'images/t11.jpg',
  'images/t12.jpg'
];
// 纯色背景预设：按色系分组，深色系更衬白字亮色标题
const solidBgPresetGroups = [
  { name:'深色系', items:[
    { name:'墨黑',   c:'#111111' }, { name:'午夜',   c:'#020617' }, { name:'深夜蓝', c:'#0f172a' }, { name:'藏青',   c:'#1e1b4b' },
    { name:'科技蓝', c:'#1e3a8a' }, { name:'深空灰', c:'#1f2937' }, { name:'墨绿',   c:'#14532d' }, { name:'森绿',   c:'#065f46' },
    { name:'深紫',   c:'#5b21b6' }, { name:'酒红',   c:'#7f1d1d' }, { name:'暗红',   c:'#881337' }, { name:'深咖',   c:'#451a03' },
    { name:'曜石黑', c:'#0a0a0f' }, { name:'靛蓝',   c:'#312e81' }, { name:'深青',   c:'#134e4a' }, { name:'勃艮第', c:'#500724' }
  ]},
  { name:'亮色系', items:[
    { name:'宝蓝',   c:'#2563eb' }, { name:'天蓝',   c:'#38bdf8' }, { name:'青碧',   c:'#06b6d4' }, { name:'薄荷',   c:'#34d399' },
    { name:'草绿',   c:'#22c55e' }, { name:'柠檬黄', c:'#facc15' }, { name:'杏橙',   c:'#fdba74' }, { name:'落日橙', c:'#ea580c' },
    { name:'中国红', c:'#dc2626' }, { name:'樱花粉', c:'#ec4899' }, { name:'珊瑚',   c:'#fb7185' }, { name:'葡萄紫', c:'#7c3aed' },
    { name:'克莱因蓝', c:'#0a58ca' }, { name:'湖水蓝', c:'#0ea5e9' }, { name:'翡翠',   c:'#10b981' }, { name:'玫红',   c:'#e11d48' },
    { name:'薰衣草紫', c:'#a78bfa' }, { name:'蜜橙',   c:'#f59e0b' }
  ]},
  { name:'莫兰迪系', items:[
    { name:'雾灰粉', c:'#d9c7c0' }, { name:'雾灰蓝', c:'#8fa3b0' }, { name:'雾灰绿', c:'#a8b5a0' },
    { name:'雾灰紫', c:'#b0a3c2' }, { name:'雾沙黄', c:'#d4c5a9' }, { name:'雾咖',   c:'#b5a193' }
  ]},
  { name:'马卡龙系', items:[
    { name:'奶昔粉', c:'#fde2e4' }, { name:'香芋紫', c:'#e5d9f2' }, { name:'奶油蓝', c:'#dbe9f7' },
    { name:'抹茶绿', c:'#dcf0e4' }, { name:'柠檬黄', c:'#fdf5d9' }, { name:'蜜桃橙', c:'#ffe5d4' }
  ]},
  { name:'中性色', items:[
    { name:'雅灰',   c:'#6b7280' }, { name:'石板',   c:'#475569' }, { name:'银灰',   c:'#cbd5e1' }, { name:'浅灰白', c:'#f1f5f9' },
    { name:'米白',   c:'#fafaf9' }, { name:'纯白',   c:'#ffffff' }, { name:'碳灰',   c:'#3f3f46' }, { name:'暖灰',   c:'#78716c' }
  ]}
];
// 渐变背景预设：双色渐变，方向可在面板中调整（默认↘135°）
const gradientBgPresetGroups = [
  { name:'流行撞色', items:[
    { name:'蓝紫', c1:'#667eea', c2:'#764ba2' }, { name:'熔金',   c1:'#f7971e', c2:'#ffd200' },
    { name:'火焰', c1:'#ff512f', c2:'#dd2476' }, { name:'极光',   c1:'#43e97b', c2:'#38f9d7' },
    { name:'海蓝', c1:'#2193b0', c2:'#6dd5ed' }, { name:'蜜桃',   c1:'#ffd3a5', c2:'#fd6585' },
    { name:'电光紫', c1:'#8b5cf6', c2:'#d946ef' }, { name:'日落橙', c1:'#f97316', c2:'#db2777' },
    { name:'蓝青', c1:'#0ea5e9', c2:'#22d3ee' }, { name:'酒红玫', c1:'#9f1239', c2:'#e11d48' },
    { name:'梦幻紫粉', c1:'#a855f7', c2:'#ec4899' }, { name:'蓝紫星空', c1:'#6366f1', c2:'#a855f7' },
    { name:'青紫未来', c1:'#06b6d4', c2:'#8b5cf6' }, { name:'日落金橙', c1:'#f59e0b', c2:'#ef4444' },
    { name:'青柠活力', c1:'#84cc16', c2:'#0ea5e9' }
  ]},
  { name:'高级深色', items:[
    { name:'星空', c1:'#0f2027', c2:'#2c5364' }, { name:'深空',   c1:'#000428', c2:'#004e92' },
    { name:'暗夜', c1:'#232526', c2:'#414345' }, { name:'午夜蓝', c1:'#0f172a', c2:'#334155' },
    { name:'墨松', c1:'#0f766e', c2:'#164e63' }, { name:'深海',   c1:'#1e3a8a', c2:'#0e7490' },
    { name:'幽紫', c1:'#1e1b4b', c2:'#5b21b6' }, { name:'咖啡',   c1:'#451a03', c2:'#92400e' },
    { name:'石墨', c1:'#111827', c2:'#4b5563' }, { name:'靛夜',   c1:'#312e81', c2:'#6d28d9' },
    { name:'曜石',   c1:'#0a0a0f', c2:'#1f2937' }, { name:'烟紫',   c1:'#1e1b4b', c2:'#4c1d95' },
    { name:'暗夜红', c1:'#2d0a0a', c2:'#7f1d1d' }, { name:'墨玉',   c1:'#064e3b', c2:'#0f172a' },
    { name:'极夜蓝', c1:'#0f172a', c2:'#0ea5e9' }
  ]},
  { name:'清新浅色', items:[
    { name:'甜橙',   c1:'#f6d365', c2:'#fda085' }, { name:'暖沙', c1:'#ffecd2', c2:'#fcb69f' },
    { name:'冰蓝',   c1:'#e0f2fe', c2:'#7dd3fc' }, { name:'薰衣草', c1:'#e0c3fc', c2:'#8ec5fc' },
    { name:'奶油白', c1:'#fdfbfb', c2:'#ebedee' }, { name:'薄荷粉', c1:'#a8edea', c2:'#fed6e3' },
    { name:'晨光',   c1:'#fff1eb', c2:'#ace0f9' }, { name:'樱花', c1:'#fbc2eb', c2:'#a6c1ee' },
    { name:'香芋紫',   c1:'#f3e8ff', c2:'#d8b4fe' }, { name:'抹茶奶绿', c1:'#ecfccb', c2:'#86efac' },
    { name:'蜜桃茶',   c1:'#ffe4e6', c2:'#fecdd3' }, { name:'薄荷冰',   c1:'#ccfbf1', c2:'#99f6e4' },
    { name:'樱花粉',   c1:'#fce7f3', c2:'#fbcfe8' }, { name:'柠檬汽水', c1:'#fef9c3', c2:'#fde68a' }
  ]}
];
// 贴纸库：按用途分组，覆盖封面/海报常用场景
const stickerGroups = [
  { name: '热门', items: ['🔥','💥','⭐','✨','💯','❤️','⚡','🚀','💎','🎯','🎉','✅'] },
  { name: '表情', items: ['😂','🤩','😍','😎','🥳','🤗','😭','😱','🤔','😜','🥰','😅'] },
  { name: '手势', items: ['👍','👎','👏','🙌','🤝','👌','✌️','🤞','💪','🫶','👆','👉'] },
  { name: '标记', items: ['❗','❓','⚠️','❌','📌','📍','➡️','⬅️','⬆️','⬇️','🔴','🟢'] },
  { name: '影视', items: ['🎬','🎥','📺','🎙️','🎧','🎤','🎞️','📸','📷','🔔','▶️','⏸️'] },
  { name: '成就', items: ['🏆','🥇','🥈','🥉','👑','🎁','🎊','📈','💰','🌟','💫','🏅'] },
  { name: '知识', items: ['📚','✏️','📝','💡','🧠','⏰','🗓️','💻','📱','⚙️','🔧','🔍'] },
  { name: '生活', items: ['☕','🍔','🍕','🍰','🍺','🎮','🐱','🐶','🌸','🌙','🌈','🎵'] }
];
const decorTypes = [
  {type:'bgBar', label:'文字背景条', icon:'fa-square'},
  {type:'gradientBar', label:'渐变遮罩条', icon:'fa-paint-brush'},
  {type:'arrow', label:'箭头', icon:'fa-long-arrow-right'},
  {type:'tagCorner', label:'角标标签', icon:'fa-tag'}
];
// 文字样式预设：适合封面的 配色/描边/阴影 组合，一键套用到主/副/三级标题
// colors: [主标题, 副标题, 三级标题]；gradient 可选，仅作用于主标题（渐变填充）
const textStylePresets = [
  // —— 经典撞色（纯色 + 描边）——
  { name:'抖音黄',   colors:['#ffe14d','#ffffff','#ffffff'], stroke:'#000000', strokeSize:5, shadow:0,  shadowColor:'#000000' },
  { name:'白字黑边', colors:['#ffffff','#ffffff','#ffffff'], stroke:'#000000', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  { name:'热血红',   colors:['#ff3b30','#ffffff','#ffffff'], stroke:'#ffffff', strokeSize:4, shadow:3,  shadowColor:'#000000' },
  { name:'科技蓝',   colors:['#3d8bff','#ffffff','#ffffff'], stroke:'#ffffff', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'白字蓝边', colors:['#ffffff','#ffffff','#ffffff'], stroke:'#2563eb', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  { name:'黑字黄边', colors:['#222222','#222222','#222222'], stroke:'#ffe14d', strokeSize:3, shadow:0,  shadowColor:'#000000' },
  { name:'活力橙',   colors:['#ff9f43','#ffffff','#ffffff'], stroke:'#7a2e00', strokeSize:4, shadow:0,  shadowColor:'#000000' },
  { name:'柠檬绿',   colors:['#c6ff5e','#ffffff','#ffffff'], stroke:'#2e5a00', strokeSize:4, shadow:0,  shadowColor:'#000000' },
  { name:'蜜桃粉边', colors:['#ffffff','#ffffff','#ffffff'], stroke:'#ff7eb6', strokeSize:4, shadow:2,  shadowColor:'#ff4d94' },
  { name:'撞色红黄', colors:['#ffd400','#ffffff','#ffffff'], stroke:'#d40000', strokeSize:5, shadow:2,  shadowColor:'#000000' },
  { name:'中国红金', colors:['#ff3b30','#ffd54a','#ffffff'], stroke:'#ffffff', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'薄荷清新', colors:['#ffffff','#eafff5','#ffffff'], stroke:'#0f766e', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  // —— 发光霓虹 ——
  { name:'霓虹发光', colors:['#8ef6ff','#8ef6ff','#ffffff'], stroke:'#083b66', strokeSize:2, shadow:14, shadowColor:'#00c8ff' },
  { name:'粉色甜美', colors:['#ff7eb6','#ffffff','#ffffff'], stroke:'#ffffff', strokeSize:4, shadow:4,  shadowColor:'#ff4d94' },
  { name:'立体阴影', colors:['#ffffff','#ffe14d','#ffffff'], stroke:'#111111', strokeSize:2, shadow:10, shadowColor:'#000000' },
  { name:'金色发光', colors:['#ffe985','#ffffff','#ffffff'], stroke:'#8a6d00', strokeSize:2, shadow:16, shadowColor:'#ffb700' },
  { name:'红色霓虹', colors:['#ff8fa3','#ffffff','#ffffff'], stroke:'#5c0011', strokeSize:2, shadow:14, shadowColor:'#ff2d55' },
  { name:'白色泛光', colors:['#ffffff','#ffffff','#ffffff'], stroke:'#4b5563', strokeSize:2, shadow:16, shadowColor:'#ffffff' },
  // —— 渐变花字（主标题渐变填充）——
  { name:'熔金渐变', colors:['#fff3a0','#ffffff','#ffffff'], gradient:['#fff3a0','#ff9d2e'], stroke:'#7a3c00', strokeSize:3, shadow:4, shadowColor:'#000000' },
  { name:'紫夜渐变', colors:['#d8b4fe','#ffffff','#ffffff'], gradient:['#c084fc','#5b21b6'], stroke:'#ffffff', strokeSize:3, shadow:4, shadowColor:'#000000' },
  { name:'香槟金渐变', colors:['#f7e8b5','#ffffff','#ffffff'], gradient:['#f7e8b5','#c9a227'], stroke:'#5a4a00', strokeSize:3, shadow:4, shadowColor:'#000000' },
  { name:'蜜桃渐变', colors:['#ffd3a5','#ffffff','#ffffff'], gradient:['#ffd3a5','#fd6585'], stroke:'#ffffff', strokeSize:3, shadow:4, shadowColor:'#ff6f91' },
  { name:'青柠渐变', colors:['#d4fc79','#ffffff','#ffffff'], gradient:['#d4fc79','#96e6a1'], stroke:'#1d5c2e', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'蓝紫渐变', colors:['#a8d8ff','#ffffff','#ffffff'], gradient:['#89f7fe','#66a6ff'], stroke:'#0b3d78', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'火焰渐变', colors:['#ffe259','#ffffff','#ffffff'], gradient:['#ffe259','#ffa751'], stroke:'#7a1c00', strokeSize:4, shadow:4, shadowColor:'#000000' },
  { name:'樱花渐变', colors:['#ffdde1','#ffffff','#ffffff'], gradient:['#ffdde1','#ee9ca7'], stroke:'#a34a5e', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'极光渐变', colors:['#b8ffd9','#ffffff','#ffffff'], gradient:['#43e97b','#38f9d7'], stroke:'#0b4d3a', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'星空渐变', colors:['#c3e0ff','#ffffff','#ffffff'], gradient:['#8ec5fc','#e0c3fc'], stroke:'#3b2f7a', strokeSize:3, shadow:3, shadowColor:'#000000' },
  // —— 特殊质感 ——
  { name:'黑金质感', colors:['#ffd700','#e6c15c','#ffffff'], stroke:'#000000', strokeSize:3, shadow:6,  shadowColor:'#000000' },
  { name:'复古牛皮', colors:['#e8c39e','#ffffff','#ffffff'], stroke:'#5d4037', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'水墨黑',   colors:['#1a1a1a','#333333','#1a1a1a'], stroke:'#ffffff', strokeSize:3, shadow:0,  shadowColor:'#000000' },
  { name:'3D厚边',   colors:['#ffffff','#ffe14d','#ffffff'], stroke:'#000000', strokeSize:6, shadow:6,  shadowColor:'#000000' },
  // —— 多巴胺糖果 ——
  { name:'多巴胺绿', colors:['#c8ff3d','#ffffff','#ffffff'], stroke:'#111111', strokeSize:3, shadow:0,  shadowColor:'#000000' },
  { name:'西瓜撞色', colors:['#ff4757','#ffffff','#ffffff'], stroke:'#2ed573', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  { name:'蓝橙对撞', colors:['#3742fa','#ffffff','#ffffff'], stroke:'#ff9f43', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  { name:'青粉对撞', colors:['#00d2d3','#ffffff','#ffffff'], stroke:'#ff6b81', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  { name:'奶油甜心', colors:['#ffeaa7','#ffffff','#ffffff'], stroke:'#e17055', strokeSize:4, shadow:3,  shadowColor:'#000000' },
  // —— 国潮风 ——
  { name:'故宫红',   colors:['#e54d42','#ffd76e','#ffffff'], stroke:'#ffffff', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'青花蓝',   colors:['#3f6fbe','#ffffff','#ffffff'], stroke:'#e8f1ff', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'琉璃金',   colors:['#ffe08a','#ffffff','#ffffff'], gradient:['#ffe08a','#c98a2d'], stroke:'#4a2500', strokeSize:3, shadow:4, shadowColor:'#000000' },
  { name:'翠玉绿',   colors:['#2ecc71','#ffffff','#ffffff'], stroke:'#0e4429', strokeSize:3, shadow:0,  shadowColor:'#000000' },
  // —— 赛博机能 ——
  { name:'赛博紫',   colors:['#b026ff','#00f0ff','#ffffff'], stroke:'#12002e', strokeSize:2, shadow:10, shadowColor:'#b026ff' },
  { name:'荧光机能', colors:['#39ff14','#ffffff','#ffffff'], stroke:'#001a00', strokeSize:2, shadow:8,  shadowColor:'#39ff14' },
  { name:'霓虹粉紫', colors:['#ff2d95','#00e5ff','#ffffff'], stroke:'#1a0033', strokeSize:2, shadow:10, shadowColor:'#ff2d95' },
  { name:'海盐苏打', colors:['#9be7ff','#ffffff','#ffffff'], stroke:'#0277bd', strokeSize:4, shadow:2,  shadowColor:'#000000' },
  // —— 渐变花字·补充 ——
  { name:'蓝海渐变', colors:['#4facfe','#ffffff','#ffffff'], gradient:['#4facfe','#00f2fe'], stroke:'#0b3d78', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'玫瑰渐变', colors:['#f953c6','#ffffff','#ffffff'], gradient:['#f953c6','#b91d73'], stroke:'#ffffff', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'落日渐变', colors:['#ff9966','#ffffff','#ffffff'], gradient:['#ff9966','#ff5e62'], stroke:'#7a1c00', strokeSize:4, shadow:4, shadowColor:'#000000' },
  { name:'葡萄渐变', colors:['#a18cd1','#ffffff','#ffffff'], gradient:['#a18cd1','#fbc2eb'], stroke:'#5b2c6f', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'抹茶渐变', colors:['#a8e063','#ffffff','#ffffff'], gradient:['#a8e063','#56ab2f'], stroke:'#1d3d10', strokeSize:3, shadow:3, shadowColor:'#000000' },
  // —— 简约高级（无/细描边，适合深色或纯色背景封面）——
  { name:'极简纯白', colors:['#ffffff','#e8e8e8','#ffffff'], stroke:'#000000', strokeSize:0, shadow:0,  shadowColor:'#000000' },
  { name:'极简纯黑', colors:['#111111','#555555','#111111'], stroke:'#000000', strokeSize:0, shadow:0,  shadowColor:'#000000' },
  { name:'莫兰迪粉', colors:['#c9ada7','#f2e9e4','#ffffff'], stroke:'#5b4a44', strokeSize:3, shadow:2,  shadowColor:'#000000' },
  { name:'香芋紫',   colors:['#b388eb','#ffffff','#ffffff'], stroke:'#4a148c', strokeSize:3, shadow:2,  shadowColor:'#000000' },
  { name:'湖水绿',   colors:['#0fb9b1','#ffffff','#ffffff'], stroke:'#005f56', strokeSize:3, shadow:2,  shadowColor:'#000000' },
  { name:'番茄炒蛋', colors:['#ff6347','#ffd700','#ffffff'], stroke:'#ffffff', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'藏蓝鎏金', colors:['#d4af37','#e6c15c','#ffffff'], stroke:'#1b2a49', strokeSize:3, shadow:4,  shadowColor:'#000000' },
  { name:'森林晨雾', colors:['#2d6a4f','#ffffff','#ffffff'], stroke:'#d8f3dc', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  { name:'蜜桃乌龙', colors:['#f4a988','#ffffff','#ffffff'], stroke:'#8c4a2f', strokeSize:3, shadow:2,  shadowColor:'#000000' },
  { name:'雾霾蓝',   colors:['#7f9fc4','#ffffff','#ffffff'], stroke:'#1f3a5f', strokeSize:3, shadow:3,  shadowColor:'#000000' },
  // —— 古风雅致（横竖排通用，搭配"竖排"排版方向使用更佳）——
  { name:'古风白',   colors:['#ffffff','#ffd76e','#ffffff'], stroke:'#3a2b1e', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'水墨黑',   colors:['#1a1a1a','#444444','#ffffff'], stroke:'#ffffff', strokeSize:3, shadow:2, shadowColor:'#000000' },
  { name:'朱砂红',   colors:['#c23b22','#ffffff','#ffffff'], stroke:'#ffe9c9', strokeSize:3, shadow:3, shadowColor:'#000000' },
  { name:'宣纸鎏金', colors:['#f7e8b5','#ffffff','#ffffff'], gradient:['#f7e8b5','#c9a227'], stroke:'#4a2500', strokeSize:3, shadow:5, shadowColor:'#000000' }
];

const state = {
  size: '16:9',
  bgImage: demoTemplateImgs[0],
  bgMode: 'gradient',                                     // image / color / gradient
  bgColor: '#0f172a',
  bgGradient: { c1: '#e0c3fc', c2: '#8ec5fc', angle: 135 }, // 默认背景：薰衣草渐变
  mainTitle: '视频封面一键生成',
  subTitle: 'Ps.weget.site',
  mainFontFamily: 'font-cover-bold',
  subFontFamily: 'font-cover-sub',
  mainFontWeight: 'bold',
  subFontWeight: 'bold',
  thirdFontWeight: 'bold',
  mainLetterSpacing: 1,
  subLetterSpacing: 1,
  thirdLetterSpacing: 1,
  mainSize: 100,
  subSize: 54,
  mainColor: '#ffffff',
  mainGradient: null,   // 主标题渐变填充 ['#色1','#色2']，样式预设启用；手动改主标题颜色时清除
  subColor: '#ffdd44',
  strokeColor: '#000000',
  strokeSize: 2,
  shadowColor: '#000000',
  shadow: 5,
  mainAlign: 'middle',  // start / middle / end，配合九宫格快速对齐；默认水平居中
  subAlign: 'middle',
  mainVertical: false,  // 主标题竖排（配合"排版方向"下拉）
  subVertical: false,
  thirdVertical: false,
  mainRotate: 0,  // 文字旋转角度（0-360，顺时针）
  subRotate: 0,
  thirdRotate: 0,
  mainPos: { xPct: 50, yPct: 40 },
  subPos: { xPct: 50, yPct: 62 },
  hasThird: false,      // 三级标题：按需添加
  thirdTitle: '三级标题',
  thirdFontFamily: 'font-cover-sub',
  thirdSize: 30,
  thirdColor: '#ffffff',
  thirdAlign: 'middle',
  thirdPos: { xPct: 50, yPct: 74 },
  brightness: 100,
  contrast: 100,
  saturate: 100,
  blur: 0,
  filterPreset: 'none',
  filterEnabled: true,
  stickerList: [], // {id,emoji,xPct,yPct,scale,rotate,zIndex}
  decorList: []    // {id,type,xPct,yPct,scale,rotate,zIndex}
};

function getStageRect(){
  return document.getElementById('coverStage').getBoundingClientRect();
}

// #rrggbb → rgba(...)，供装饰条颜色/透明度计算
function hexToRgba(hex, alpha){
  const m = (hex || '#000000').replace('#','');
  const r = parseInt(m.substring(0,2),16) || 0;
  const g = parseInt(m.substring(2,4),16) || 0;
  const b = parseInt(m.substring(4,6),16) || 0;
  return `rgba(${r},${g},${b},${alpha})`;
}

// 简单HTML转义，防止标签文字破坏DOM结构
function escapeHtml(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===================== 画布尺寸 + 自适应缩放 =====================
// 封面尺寸预设（预览画布分辨率；导出走 CROP_DEFAULT_OUT 高清档）
const SIZE_DEFS = {
  '21:9': [1050, 450],
  '16:9': [960, 540],
  '4:3':  [960, 720],
  '3:2':  [960, 640],
  '1:1':  [640, 640],
  '3:4':  [720, 960],
  '2:3':  [640, 960],
  '9:16': [540, 960]
};
function applySize() {
  const stage = document.getElementById('coverStage');
  const svgCanvas = document.getElementById('textSvgCanvas');
  const def = SIZE_DEFS[state.size] || SIZE_DEFS['16:9'];
  const w = def[0], h = def[1];
  stage.style.width = w + 'px';
  stage.style.height = h + 'px';
  svgCanvas.setAttribute('viewBox',`0 0 ${w} ${h}`);
  document.getElementById('bgImage').src = state.bgImage;
  renderSvgText();
  renderDragItems();
  fitStage();
}

// 画布等比缩放：收起素材栏 / 切换尺寸 / 拖动窗口时都自动伸缩适配
function fitStage() {
  const area   = document.getElementById('stageArea');
  const scaler = document.getElementById('stageScaler');
  const stage  = document.getElementById('coverStage');
  const w = stage.offsetWidth, h = stage.offsetHeight;
  if (!w || !h) return;
  // 内边距在 stageArea 上（衬底内边距），用它算出真正可用的内容区
  const cs = getComputedStyle(area);
  const availW = area.clientWidth  - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
  const availH = area.clientHeight - parseFloat(cs.paddingTop)  - parseFloat(cs.paddingBottom);
  // 横屏（宽>高）：宽度铺满，左右可见间距约 20px，高度超出部分在预览区内滚动查看；
  // 方图/竖屏：高度优先完整显示（全貌可见比铺满宽度更重要），居中留白
  const k = (w > h)
    ? Math.min((availW - 28) / w, 2.5)
    : Math.min(availH / h, availW / w, 2.5);
  if (k <= 0 || !isFinite(k)) return;
  stage.style.transform = k !== 1 ? 'scale(' + k + ')' : 'none';
  scaler.style.width  = Math.floor(w * k) + 'px';
  scaler.style.height = Math.floor(h * k) + 'px';
}
window.addEventListener('resize', fitStage);

// ===================== 左侧素材栏 收起 / 展开 =====================
function setPanelCollapsed(collapsed) {
  const panel = document.getElementById('leftPanel');
  const toggle = document.getElementById('panelToggle');
  panel.classList.toggle('panel-collapsed', collapsed);
  toggle.innerHTML = collapsed
    ? '<i class="fa fa-bars mr-1"></i>展开素材栏'
    : '<i class="fa fa-bars mr-1"></i>收起素材栏';
  // 浮动收起/展开按钮：图标、位置与提示同步
  const fbtn = document.getElementById('panelFloatBtn');
  if (fbtn) {
    fbtn.classList.toggle('collapsed', collapsed);
    fbtn.title = collapsed ? '展开素材栏' : '收起素材栏';
    fbtn.setAttribute('aria-label', fbtn.title);
    fbtn.innerHTML = collapsed
      ? '<i class="fa fa-chevron-right"></i>'
      : '<i class="fa fa-chevron-left"></i>';
  }
  // 过程中与结束后各校正一次画布缩放
  setTimeout(fitStage, 60);
  setTimeout(fitStage, 300);
}

function renderTemplates() {
  const list = document.getElementById('templateList');
  list.innerHTML = '';
  backendTemplateConfig.forEach((t, idx) => {
    const card = document.createElement('div');
    card.className = 'template-card rounded-lg overflow-hidden border bg-white cursor-pointer ' +
      (idx === 0 ? 'border-primary active' : 'border-gray-200');
    const imgSrc = demoTemplateImgs[idx];
    card.innerHTML = `<img src="${imgSrc}" class="w-full h-20 object-cover" alt="${t.name}"/><div class="text-xs text-center py-1.5 text-gray-700">${t.name}</div>`;
    card.onclick = () => {
      state.bgImage = imgSrc;
      state.bgMode = 'image'; // 选模板即切回图片背景
      document.getElementById('bgImage').src = state.bgImage;
      syncBgModeUI(); applyBackground();
      document.querySelectorAll('.template-card').forEach(c => {
        c.classList.remove('active');
        c.classList.replace('border-primary', 'border-gray-200');
      });
      card.classList.add('active');
      card.classList.replace('border-gray-200', 'border-primary');
    };
    list.appendChild(card);
  });
}

function renderStickers() {
  const list = document.getElementById('stickerList');
  list.innerHTML = '';
  const total = stickerGroups.reduce((n, g) => n + g.items.length, 0);
  const countEl = document.getElementById('stickerCount');
  if (countEl) countEl.textContent = total;
  // 画布上方横向排布：分组标签内联，emoji小方块可换行，超高区域内部滚动
  stickerGroups.forEach(group => {
    const title = document.createElement('span');
    title.className = 'text-[10px] font-medium text-gray-400 px-1 shrink-0';
    title.textContent = group.name;
    list.appendChild(title);
    group.items.forEach(emoji => {
      const item = document.createElement('div');
      item.className = 'w-8 h-8 shrink-0 flex items-center justify-center text-xl cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-primary transition';
      item.textContent = emoji;
      item.title = '点击添加到画布';
      item.onclick = () => {
        state.stickerList.push({
          id: Date.now() + Math.random(),
          emoji, xPct:50,yPct:50, scale:1, rotate:0, zIndex:10
        });
        renderDragItems();
      };
      list.appendChild(item);
    });
  });
}

function renderDecorPanel(){
  const list = document.getElementById('decorList');
  list.innerHTML='';
  decorTypes.forEach(d=>{
    const btn = document.createElement('button');
    btn.className='tbtn';
    btn.innerHTML=`<i class="fa ${d.icon} mr-1 text-primary"></i>${d.label}`;
    btn.onclick=()=>{
      const item = { id:Date.now()+Math.random(), type:d.type, xPct:40,yPct:40, scale:1, rotate:0, zIndex:5 };
      // 默认尺寸按主标题100px字号设计：背景条/遮罩条可直接垫在标题下方
      if (d.type === 'bgBar') { item.color1 = '#000000'; item.opacity = 0.6; item.w = 360; item.h = 110; item.blend = 'normal'; item.belowText = false; }
      if (d.type === 'gradientBar') { item.color1 = '#ff4466'; item.color2 = '#ffaa22'; item.w = 420; item.h = 120; item.blend = 'normal'; item.belowText = false; }
      if (d.type === 'tagCorner') { item.label = '标签'; item.fontSize = 22; }
      state.decorList.push(item);
      renderDragItems();
    };
    list.appendChild(btn);
  })
}

// ===================== 文字样式预设 =====================
// 一键套用：主/副/三级标题颜色 + 描边颜色/大小 + 阴影颜色/强度，渐变仅作用于主标题
function applyTextStylePreset(p){
  state.mainColor = p.colors[0];
  state.subColor = p.colors[1];
  state.thirdColor = p.colors[2];
  state.mainGradient = p.gradient || null;
  state.strokeColor = p.stroke;
  state.strokeSize = p.strokeSize;
  state.shadowColor = p.shadowColor;
  state.shadow = p.shadow;
  // 工具栏控件与数值标签同步，避免显示残留旧值
  document.getElementById('mainColor').value = state.mainColor;
  document.getElementById('subColor').value = state.subColor;
  document.getElementById('thirdColor').value = state.thirdColor;
  document.getElementById('strokeColor').value = state.strokeColor;
  document.getElementById('strokeSize').value = state.strokeSize;
  document.getElementById('strokeSizeLabel').textContent = state.strokeSize;
  document.getElementById('shadowColor').value = state.shadowColor;
  document.getElementById('shadow').value = state.shadow;
  document.getElementById('shadowLabel').textContent = state.shadow;
  // 色点预览同步：主色（或渐变）+ 描边色圆环
  const dot = document.getElementById('presetDot');
  dot.style.background = p.gradient ? `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` : p.colors[0];
  dot.style.border = `2px solid ${p.stroke}`;
  renderSvgText();
}

function renderTextStylePresets(){
  const sel = document.getElementById('textStylePreset');
  sel.innerHTML = '<option value="">选择样式预设…</option>';
  textStylePresets.forEach((p, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = p.name;
    sel.appendChild(opt);
  });
  sel.onchange = () => {
    const p = textStylePresets[+sel.value];
    if (p) applyTextStylePreset(p);
  };
}

// SVG渲染文字：解决webkit‑text‑stroke导出不一致
function renderSvgText(){
  const svg = document.getElementById('textSvgCanvas');
  const stage = document.getElementById('coverStage');
  const w = parseFloat(stage.style.width);
  const h = parseFloat(stage.style.height);
  svg.innerHTML='';

  // 公共defs：阴影滤镜（阴影>0时）+ 主标题渐变填充（样式预设启用时）
  const defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
  // 阴影滤镜：仅在阴影>0时挂载；滤镜区域加大到 220%，避免光晕被裁剪出横/竖杂条
  if (state.shadow > 0) {
    const filter = document.createElementNS("http://www.w3.org/2000/svg","filter");
    filter.setAttribute("id","textShadowFilter");
    filter.setAttribute("x","-60%");
    filter.setAttribute("y","-60%");
    filter.setAttribute("width","220%");
    filter.setAttribute("height","220%");
    const dropShadow = document.createElementNS("http://www.w3.org/2000/svg","feDropShadow");
    dropShadow.setAttribute("dx",0);
    dropShadow.setAttribute("dy",0);
    dropShadow.setAttribute("stdDeviation", state.shadow);
    dropShadow.setAttribute("flood-color", state.shadowColor);
    filter.appendChild(dropShadow);
    defs.appendChild(filter);
  }
  // 主标题渐变填充：垂直双色渐变（熔金/紫夜等预设）
  if (state.mainGradient && state.mainGradient.length === 2) {
    const grad = document.createElementNS("http://www.w3.org/2000/svg","linearGradient");
    grad.setAttribute("id","mainTitleGrad");
    grad.setAttribute("x1","0");
    grad.setAttribute("y1","0");
    grad.setAttribute("x2","0");
    grad.setAttribute("y2","1");
    state.mainGradient.forEach((c, i) => {
      const stop = document.createElementNS("http://www.w3.org/2000/svg","stop");
      stop.setAttribute("offset", i === 0 ? "0%" : "100%");
      stop.setAttribute("stop-color", c);
      grad.appendChild(stop);
    });
    defs.appendChild(grad);
  }
  if (defs.firstChild) svg.appendChild(defs);

  function buildSvgText(txt, pos, fontSize, fill, fontFamilyCls, align, fontWeight, letterSpacing, vertical){
    const x = pos.xPct / 100 * w;
    const y = pos.yPct / 100 * h;
    const textEl = document.createElementNS("http://www.w3.org/2000/svg","text");
    textEl.setAttribute("x", x);
    textEl.setAttribute("y", y);
    textEl.setAttribute("font-size", fontSize);
    textEl.setAttribute("fill", fill);
    // 描边仅在>0时设置，且用 paint-order 垫到字面下方，避免笔画横穿文字形成杂线
    if (state.strokeSize > 0) {
      textEl.setAttribute("stroke", state.strokeColor);
      textEl.setAttribute("stroke-width", state.strokeSize);
      textEl.setAttribute("stroke-linejoin","round");
      textEl.setAttribute("stroke-linecap","round");
      textEl.setAttribute("paint-order","stroke");
    }
    textEl.setAttribute("font-weight", fontWeight);
    textEl.setAttribute("letter-spacing", letterSpacing);
    // 锚点跟随对齐方式，"居中/右对齐"才真正对齐，而不是写死百分比
    textEl.setAttribute("text-anchor", align || "start");
    if (state.shadow > 0) textEl.setAttribute("filter","url(#textShadowFilter)");
    textEl.textContent = txt;
    // 映射css字体类（带兜底，中英混排不缺字）
    const fontMap = {
      "font-cover-bold":"'Noto Sans SC'",
      "font-cover-sub":"'Noto Sans SC'",
      "font-cover-serif":"'Noto Serif SC'",
      "font-cover-cute":"'ZCOOL KuaiLe'",
      "font-cover-hand":"'Ma Shan Zheng'",
      "font-cover-brush":"'Long Cang'",
      "font-cover-title":"'Bebas Neue','Noto Sans SC'",
      "font-cover-butter":"'ZCOOL QingKe HuangYou'",
      "font-cover-xiaowei":"'ZCOOL XiaoWei','Noto Serif SC'",
      "font-cover-xingshu":"'Zhi Mang Xing'",
      "font-cover-maocao":"'Liu Jian Mao Cao'",
      "font-cover-anton":"'Anton','Noto Sans SC'",
      "font-cover-archivo":"'Archivo Black','Noto Sans SC'",
      "font-cover-slab":"'Alfa Slab One','Noto Serif SC'",
      "font-cover-bangers":"'Bangers','Noto Sans SC'",
      "font-cover-playfair":"'Playfair Display','Noto Serif SC'",
      "font-cover-smiley":"'Smiley Sans Oblique','Noto Sans SC'",
      "font-cover-jinbu":"'DingTalk JinBuTi','Noto Sans SC'",
      "font-cover-dongkai":"'Alimama DongFangDaKai','Noto Serif SC'",
      "font-cover-honglei":"'hongleixingshu','Ma Shan Zheng'",
      "font-cover-wenkai":"'LXGW WenKai Screen','Noto Serif SC'",
      "font-cover-zhuyuan":"'MaokenZhuyuanTi','ZCOOL KuaiLe'",
      "font-cover-yozai":"'Yozai','Ma Shan Zheng'"
    };
    textEl.setAttribute("font-family", fontMap[fontFamilyCls] || "'Noto Sans SC'");
    // 竖排：CSS 竖排书写模式（写在 inline style 上，SVG 序列化导出时同样生效）
    if (vertical) {
      textEl.style.writingMode = 'vertical-rl';
      textEl.style.textOrientation = 'upright'; // 字符直立，不旋转
    }
    return textEl;
  }
  // 主标题：有渐变预设时用渐变填充，否则用纯色
  const mainFill = (state.mainGradient && state.mainGradient.length === 2) ? 'url(#mainTitleGrad)' : state.mainColor;
  const mainEl = buildSvgText(state.mainTitle, state.mainPos, state.mainSize, mainFill, state.mainFontFamily, state.mainAlign, state.mainFontWeight, state.mainLetterSpacing, state.mainVertical);
  svg.appendChild(mainEl);
  const subEl = buildSvgText(state.subTitle, state.subPos, state.subSize, state.subColor, state.subFontFamily, state.subAlign, state.subFontWeight, state.subLetterSpacing, state.subVertical);
  svg.appendChild(subEl);
  svgTextEls = [mainEl, subEl];
  if (state.hasThird) {
    // 三级标题：字体/字号/颜色独立，描边与阴影跟随全局
    const thirdEl = buildSvgText(state.thirdTitle, state.thirdPos, state.thirdSize, state.thirdColor, state.thirdFontFamily, state.thirdAlign, state.thirdFontWeight, state.thirdLetterSpacing, state.thirdVertical);
    svg.appendChild(thirdEl);
    svgTextEls.push(thirdEl);
  }
  // 应用旋转：绕文字包围盒中心旋转（中心缓存供拖拽/旋转手柄复用）
  const rotKeys = ['mainRotate', 'subRotate', 'thirdRotate'];
  svgTextEls.forEach((el, i) => {
    const bb = getTextBBox(el);
    svgTextRotCenters[i] = { x: bb.x + bb.width / 2, y: bb.y + bb.height / 2 };
    const rot = state[rotKeys[i]] || 0;
    if (rot) el.setAttribute('transform', `rotate(${rot} ${svgTextRotCenters[i].x} ${svgTextRotCenters[i].y})`);
  });
  syncTextHits();
}

// 获取文字未旋转时的原始包围盒（临时移除 transform，避免 getBBox 受旋转影响而漂移）
function getTextBBox(el) {
  const t = el.getAttribute('transform');
  if (t) el.removeAttribute('transform');
  const bb = el.getBBox();
  if (t) el.setAttribute('transform', t);
  return bb;
}

// ===================== 文字拖拽支持 =====================
// 每个SVG文字对应一个透明命中框（位于画布坐标系）；拖拽时只更新
// x/y属性与命中框位置，不重建DOM，避免拖拽过程中指针捕获丢失
let svgTextEls = [];
let svgTextRotCenters = []; // 各文字旋转中心（画布坐标）

function syncTextHits(){
  const layer = document.getElementById('textHitLayer');
  const stage = document.getElementById('coverStage');
  const W = parseFloat(stage.style.width), H = parseFloat(stage.style.height);
  const positions = [state.mainPos, state.subPos, state.thirdPos];
  layer.innerHTML = '';
  svgTextEls.forEach((el, i) => {
    const box = el.getBBox();
    if (!isFinite(box.x) || (box.width === 0 && box.height === 0)) return; // 空文字不生成命中框
    const pos = positions[i];
    const meta = {
      pos,
      w: box.width,
      h: box.height,
      ox: box.x + box.width / 2 - pos.xPct / 100 * W,   // 锚点 → 包围盒中心 的固定偏移
      oy: box.y + box.height / 2 - pos.yPct / 100 * H
    };
    const hit = document.createElement('div');
    hit.className = 'text-hit drag-item';
    hit.style.left = (pos.xPct / 100 * W + meta.ox) + 'px';
    hit.style.top = (pos.yPct / 100 * H + meta.oy) + 'px';
    hit.style.width = (box.width + 10) + 'px';
    hit.style.height = (box.height + 10) + 'px';
    const rot = state[['mainRotate', 'subRotate', 'thirdRotate'][i]] || 0;
    hit.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
    addTextResizeHandle(hit, i, meta, el);
    addTextRotateHandle(hit, i, meta, el);
    makeTextDraggable(hit, i, meta);
    layer.appendChild(hit);
  });
}

// 点选画布文字 → 高亮上方对应设置组
function highlightTextGroup(idx){
  clearTextGroupHighlight();
  const el = document.getElementById(['group-main', 'group-sub', 'group-third'][idx]);
  if (el) el.classList.add('selected');
}
function clearTextGroupHighlight(){
  document.querySelectorAll('.tgroup.selected').forEach(g => g.classList.remove('selected'));
}

function makeTextDraggable(hit, idx, meta) {
  hit.addEventListener('pointerdown', e => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.drag-item.active').forEach(x => x.classList.remove('active'));
    hit.classList.add('active');
    highlightTextGroup(idx);
    hit.setPointerCapture(e.pointerId);
  });
  hit.addEventListener('pointermove', e => {
    if (!hit.hasPointerCapture(e.pointerId)) return;
    const stage = document.getElementById('coverStage');
    const W = parseFloat(stage.style.width), H = parseFloat(stage.style.height);
    const rect = getStageRect();
    const pos = meta.pos;
    const px = pos.xPct / 100 * W, py = pos.yPct / 100 * H;
    pos.xPct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100 - meta.ox / W * 100));
    pos.yPct = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100 - meta.oy / H * 100));
    const el = svgTextEls[idx];
    if (el) {
      el.setAttribute('x', pos.xPct / 100 * W);
      el.setAttribute('y', pos.yPct / 100 * H);
      // 平移量同步到旋转中心，旋转时不会"绕着旧点转"
      const c = svgTextRotCenters[idx];
      if (c) {
        c.x += pos.xPct / 100 * W - px;
        c.y += pos.yPct / 100 * H - py;
        const rot = state[['mainRotate', 'subRotate', 'thirdRotate'][idx]] || 0;
        if (rot) el.setAttribute('transform', `rotate(${rot} ${c.x} ${c.y})`);
      }
    }
    hit.style.left = (pos.xPct / 100 * W + meta.ox) + 'px';
    hit.style.top = (pos.yPct / 100 * H + meta.oy) + 'px';
  });
  hit.addEventListener('pointerup', e => {
    if (hit.hasPointerCapture(e.pointerId)) hit.releasePointerCapture(e.pointerId);
  });
}

// 文字右下角手柄：拖拽等比拉伸字号（按指针到文字中心距离的比例换算，吸附到字号档位）
function addTextResizeHandle(hit, idx, meta, textEl){
  const handle = document.createElement('div');
  handle.className = 'resize-handle';
  handle.title = '拖拽调整文字大小';
  hit.appendChild(handle);
  const key = ['mainSize', 'subSize', 'thirdSize'][idx];
  const select = document.getElementById(key);
  handle.addEventListener('pointerdown', e => {
    e.preventDefault();
    e.stopPropagation();
    highlightTextGroup(idx);
    hit.classList.add('active'); // 拖拽过程中保持手柄可见
    handle.setPointerCapture(e.pointerId);
    const stage = document.getElementById('coverStage');
    const rect = getStageRect();
    const W = parseFloat(stage.style.width), H = parseFloat(stage.style.height);
    // 屏幕像素 → 画布逻辑像素（画布可能被 fitStage 缩放）
    const toStage = (cx, cy) => ({ x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) });
    const c = { x: meta.pos.xPct / 100 * W + meta.ox, y: meta.pos.yPct / 100 * H + meta.oy };
    const p0 = toStage(e.clientX, e.clientY);
    const d0 = Math.max(8, Math.hypot(p0.x - c.x, p0.y - c.y));
    const size0 = state[key];
    const opts = [...select.options].map(o => +o.value);
    const snap = v => opts.reduce((a, b) => Math.abs(b - v) < Math.abs(a - v) ? b : a);
    let cur = size0;
    const onMove = ev => {
      const p = toStage(ev.clientX, ev.clientY);
      const f = Math.hypot(p.x - c.x, p.y - c.y) / d0;
      const ns = Math.max(opts[0], Math.min(opts[opts.length - 1], snap(size0 * f)));
      if (ns !== state[key]) {
        state[key] = ns;
        select.value = ns;
        cur = ns;
        if (textEl) textEl.setAttribute('font-size', ns);
        const k = ns / size0;
        hit.style.width = (meta.w * k + 10) + 'px';
        hit.style.height = (meta.h * k + 10) + 'px';
      }
    };
    const onUp = () => {
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', onUp);
      handle.removeEventListener('pointercancel', onUp);
      renderSvgText(); // 重新精确同步命中框与手柄位置
    };
    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', onUp);
    handle.addEventListener('pointercancel', onUp);
  });
}

// 文字上方旋转手柄：绕文字中心拖拽旋转，同步 SVG transform 与命中框
function addTextRotateHandle(hit, idx, meta, textEl){
  const handle = document.createElement('div');
  handle.className = 'rotate-handle';
  handle.title = '拖拽旋转文字';
  hit.appendChild(handle);
  const rotKey = ['mainRotate', 'subRotate', 'thirdRotate'][idx];
  handle.addEventListener('pointerdown', e => {
    e.preventDefault();
    e.stopPropagation();
    highlightTextGroup(idx);
    hit.classList.add('active'); // 拖拽过程中保持手柄可见
    handle.setPointerCapture(e.pointerId);
    const stage = document.getElementById('coverStage');
    const rect = getStageRect();
    const W = parseFloat(stage.style.width), H = parseFloat(stage.style.height);
    const toStage = (cx, cy) => ({ x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) });
    const c = svgTextRotCenters[idx] || { x: meta.pos.xPct / 100 * W + meta.ox, y: meta.pos.yPct / 100 * H + meta.oy };
    const onMove = ev => {
      const p = toStage(ev.clientX, ev.clientY);
      // 手柄位于正上方：顶部方位角 -90° 对应 0°，顺时针为正
      let deg = Math.atan2(p.y - c.y, p.x - c.x) * 180 / Math.PI + 90;
      deg = ((Math.round(deg) % 360) + 360) % 360;
      state[rotKey] = deg;
      if (textEl) textEl.setAttribute('transform', `rotate(${deg} ${c.x} ${c.y})`);
      hit.style.transform = `translate(-50%,-50%) rotate(${deg}deg)`;
      const inp = document.getElementById(rotKey);
      if (inp) inp.value = deg;
    };
    const onUp = ev => {
      handle.releasePointerCapture(ev.pointerId);
      handle.removeEventListener('pointermove', onMove);
      handle.removeEventListener('pointerup', onUp);
      handle.removeEventListener('pointercancel', onUp);
    };
    handle.addEventListener('pointermove', onMove);
    handle.addEventListener('pointerup', onUp);
    handle.addEventListener('pointercancel', onUp);
  });
}

// 渲染贴纸、装饰组件，支持缩放旋转层级删除
function renderDragItems(){
  const container = document.getElementById('dragContainer');
  const belowLayer = document.getElementById('decorLayerBelow');
  container.innerHTML='';
  belowLayer.innerHTML='';
  // 渲染贴纸（emoji 或上传图片），操作按钮默认隐藏，悬停/选中显示
  state.stickerList.forEach(s=>{
    const el = document.createElement('div');
    el.className='sticker drag-item';
    el.style.left = s.xPct+'%';
    el.style.top = s.yPct+'%';
    el.style.zIndex = s.zIndex;
    // 以中心点定位：元素视觉中心始终落在拖拽坐标上，不再"跟手错位"
    el.style.transform = `translate(-50%,-50%) scale(${s.scale}) rotate(${s.rotate}deg)`;
    // 上传图片贴纸（PNG透明底最佳），emoji贴纸保持64px字号
    const visual = s.img
      ? `<img src="${s.img}" draggable="false" style="max-width:140px;max-height:140px;display:block;" alt="贴纸"/>`
      : `<span style="font-size:64px;">${s.emoji}</span>`;
    el.innerHTML = `
      <div class="relative">
        <div class="sticker-ctrl absolute -top-6 left-0 flex gap-1" data-html2canvas-ignore>
          <button class="control-btn-xs border bg-white rounded up">↑</button>
          <button class="control-btn-xs border bg-white rounded down">↓</button>
          <button class="control-btn-xs border bg-white rounded del">×</button>
        </div>
        <div class="sticker-ctrl absolute -bottom-6 left-0 flex gap-1" data-html2canvas-ignore>
          <input class="scaleInput w-10 h-5 text-[10px] border bg-white px-0.5" type="number" step="0.1" min="0.2" max="3" value="${s.scale}" title="缩放">
          <input class="rotateInput w-10 h-5 text-[10px] border bg-white px-0.5" type="number" step="1" min="0" max="360" value="${s.rotate}" title="旋转角度">
        </div>
        ${visual}
      </div>
    `;
    makeDraggableByPct(el, s);
    // 右下角手柄：拖拽等比缩放贴纸（emoji与上传图片通用），按指针到贴纸中心距离比例换算
    const handle = document.createElement('div');
    handle.className = 'resize-handle';
    handle.title = '拖拽调整贴纸大小';
    el.appendChild(handle);
    handle.addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.add('active'); // 拖拽过程中保持控件可见
      handle.setPointerCapture(e.pointerId);
      const stage = document.getElementById('coverStage');
      const rect = getStageRect();
      const W = parseFloat(stage.style.width) || rect.width;
      const H = parseFloat(stage.style.height) || rect.height;
      // 屏幕像素 → 画布逻辑像素（画布可能被 fitStage 缩放）
      const toStage = (cx, cy) => ({ x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) });
      const c = { x: s.xPct / 100 * W, y: s.yPct / 100 * H };
      const p0 = toStage(e.clientX, e.clientY);
      const d0 = Math.max(8, Math.hypot(p0.x - c.x, p0.y - c.y));
      const s0 = s.scale || 1;
      const onMove = ev => {
        const p = toStage(ev.clientX, ev.clientY);
        const f = Math.hypot(p.x - c.x, p.y - c.y) / d0;
        const ns = Math.min(3, Math.max(0.2, Math.round(s0 * f * 100) / 100));
        if (ns !== s.scale) {
          s.scale = ns;
          el.style.transform = `translate(-50%,-50%) scale(${s.scale}) rotate(${s.rotate}deg)`;
          const inp = el.querySelector('.scaleInput');
          if (inp) inp.value = s.scale;
        }
      };
      const onUp = () => {
        handle.removeEventListener('pointermove', onMove);
        handle.removeEventListener('pointerup', onUp);
        handle.removeEventListener('pointercancel', onUp);
      };
      handle.addEventListener('pointermove', onMove);
      handle.addEventListener('pointerup', onUp);
      handle.addEventListener('pointercancel', onUp);
    });
    //绑定控件
    el.querySelector('.up').onclick=(e)=>{e.stopPropagation(); s.zIndex+=1; renderDragItems();};
    el.querySelector('.down').onclick=(e)=>{e.stopPropagation(); s.zIndex-=1; renderDragItems();};
    el.querySelector('.del').onclick=(e)=>{e.stopPropagation(); state.stickerList = state.stickerList.filter(i=>i.id!==s.id); renderDragItems();};
    const syncSticker = ()=>{ el.style.transform = `translate(-50%,-50%) scale(${s.scale}) rotate(${s.rotate}deg)`; };
    el.querySelector('.scaleInput').oninput=(e)=>{s.scale = parseFloat(e.target.value)||1; syncSticker();};
    el.querySelector('.rotateInput').oninput=(e)=>{s.rotate = parseFloat(e.target.value)||0; syncSticker();};
    // 贴纸旋转手柄：绕贴纸中心拖拽旋转
    const rotHandle = document.createElement('div');
    rotHandle.className = 'rotate-handle';
    rotHandle.title = '拖拽旋转贴纸';
    el.appendChild(rotHandle);
    rotHandle.addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.add('active'); // 拖拽过程中保持控件可见
      rotHandle.setPointerCapture(e.pointerId);
      const stage = document.getElementById('coverStage');
      const rect = getStageRect();
      const W = parseFloat(stage.style.width) || rect.width;
      const H = parseFloat(stage.style.height) || rect.height;
      const toStage = (cx, cy) => ({ x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) });
      const c = { x: s.xPct / 100 * W, y: s.yPct / 100 * H };
      const onMove = ev => {
        const p = toStage(ev.clientX, ev.clientY);
        let deg = Math.atan2(p.y - c.y, p.x - c.x) * 180 / Math.PI + 90;
        deg = ((Math.round(deg) % 360) + 360) % 360;
        s.rotate = deg;
        el.style.transform = `translate(-50%,-50%) scale(${s.scale}) rotate(${s.rotate}deg)`;
        const inp = el.querySelector('.rotateInput');
        if (inp) inp.value = s.rotate;
      };
      const onUp = ev => {
        rotHandle.releasePointerCapture(ev.pointerId);
        rotHandle.removeEventListener('pointermove', onMove);
        rotHandle.removeEventListener('pointerup', onUp);
        rotHandle.removeEventListener('pointercancel', onUp);
      };
      rotHandle.addEventListener('pointermove', onMove);
      rotHandle.addEventListener('pointerup', onUp);
      rotHandle.addEventListener('pointercancel', onUp);
    });
    container.appendChild(el);
  });
  //渲染装饰组件
  state.decorList.forEach(d=>{
    const el = document.createElement('div');
    el.className='decor-item drag-item';
    el.style.left = d.xPct+'%';
    el.style.top = d.yPct+'%';
    let innerHtml='';
    switch(d.type){
      case 'bgBar':
        d.w = d.w || 360; d.h = d.h || 110;
        innerHtml=`<div class="decor-shape" style="position:relative;width:${d.w}px;height:${d.h}px;background:${hexToRgba(d.color1 || '#000000', d.opacity == null ? 0.6 : d.opacity)};border-radius:4px;"><div class="resize-handle" data-html2canvas-ignore title="拖拽调整大小"></div></div>`; break;
      case 'gradientBar':
        d.w = d.w || 420; d.h = d.h || 120;
        innerHtml=`<div class="decor-shape" style="position:relative;width:${d.w}px;height:${d.h}px;background:linear-gradient(90deg, ${d.color1 || '#ff4466'}, ${d.color2 || '#ffaa22'});border-radius:4px;"><div class="resize-handle" data-html2canvas-ignore title="拖拽调整大小"></div></div>`; break;
      case 'arrow':
        innerHtml=`<div style="font-size:110px;color:#ff4444;">➤</div>`; break;
      case 'tagCorner':
        d.label = d.label || '标签'; d.fontSize = d.fontSize || 22;
        innerHtml=`<div class="decor-shape" style="position:relative;display:inline-block;background:#ff3333;color:white;padding:0.3em 0.7em;font-size:${d.fontSize}px;border-radius:2px;white-space:nowrap;"><span class="tag-label">${escapeHtml(d.label)}</span><div class="resize-handle" data-html2canvas-ignore title="拖拽调整大小"></div></div>`; break;
    }
    // 文字背景条 / 渐变遮罩条：颜色自定义控件（取色器 + 背景条不透明度）
    let colorControls='';
    if (d.type === 'bgBar') {
      colorControls = `<input class="color1Input" type="color" value="${d.color1 || '#000000'}" title="背景颜色" style="width:24px;height:20px;padding:1px;">
                       <input class="opacityInput" type="number" min="0" max="100" step="5" value="${Math.round((d.opacity == null ? 0.6 : d.opacity) * 100)}" title="不透明度%" style="width:36px;">`;
    } else if (d.type === 'gradientBar') {
      colorControls = `<input class="color1Input" type="color" value="${d.color1 || '#ff4466'}" title="渐变起始色" style="width:24px;height:20px;padding:1px;">
                       <input class="color2Input" type="color" value="${d.color2 || '#ffaa22'}" title="渐变结束色" style="width:24px;height:20px;padding:1px;">`;
    }
    // 角标标签：标签文字输入
    let labelControls = '';
    if (d.type === 'tagCorner') {
      labelControls = `<input class="labelInput w-14 h-5 text-[10px] border bg-white px-0.5" type="text" value="${escapeHtml(d.label || '标签')}" title="标签文字">`;
    }
    // 背景条/遮罩条：文字上层 ⇄ 文字下层 切换按钮
    const layerBtnHtml = (d.type === 'bgBar' || d.type === 'gradientBar')
      ? `<button class="control-btn-xs border bg-white rounded layBtn" title="切换该装饰在文字的上层或下层">${d.belowText ? '置文字上' : '置文字下'}</button>`
      : '';
    el.innerHTML = `
      <div class="shape-wrap">${innerHtml}</div>
      <div class="ctrl-top" data-html2canvas-ignore>
        <button class="control-btn-xs border bg-white rounded up">↑</button>
        <button class="control-btn-xs border bg-white rounded down">↓</button>
        <button class="control-btn-xs border bg-white rounded del">×</button>
        ${layerBtnHtml}
      </div>
      <div class="ctrl-bottom" data-html2canvas-ignore>
        <input class="scaleInput w-10 h-5 text-[10px] border bg-white px-0.5" type="number" step="0.1" min="0.2" max="3" value="${d.scale}" title="缩放">
        <input class="rotateInput w-10 h-5 text-[10px] border bg-white px-0.5" type="number" step="1" min="0" max="360" value="${d.rotate}" title="旋转角度">
        <label class="blend-label" title="正片叠底：与背景图混合压暗">
          <input class="blendToggle" type="checkbox" ${d.blend === 'multiply' ? 'checked' : ''}>叠底
        </label>
        ${labelControls}
        ${colorControls}
      </div>
    `;
    makeDraggableByPct(el, d);
    const wrapEl = el.querySelector('.shape-wrap');
    const syncDecor = ()=>{
      wrapEl.style.transform = `translate(-50%,-50%) scale(${d.scale}) rotate(${d.rotate}deg)`;
      wrapEl.classList.toggle('blend-multiply', d.blend === 'multiply');
      layoutDecorControls(el, d, el.querySelector('.decor-shape'));
    };
    // 装饰旋转手柄：绕图形中心（锚点）拖拽旋转
    const rotHandle = document.createElement('div');
    rotHandle.className = 'rotate-handle';
    rotHandle.title = '拖拽旋转装饰';
    wrapEl.appendChild(rotHandle);
    rotHandle.addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.drag-item.active, .decor-item.active').forEach(x => x.classList.remove('active'));
      el.classList.add('active'); // 拖拽过程中保持控件可见
      rotHandle.setPointerCapture(e.pointerId);
      const stage = document.getElementById('coverStage');
      const rect = getStageRect();
      const W = parseFloat(stage.style.width) || rect.width;
      const H = parseFloat(stage.style.height) || rect.height;
      const toStage = (cx, cy) => ({ x: (cx - rect.left) * (W / rect.width), y: (cy - rect.top) * (H / rect.height) });
      const c = { x: d.xPct / 100 * W, y: d.yPct / 100 * H };
      const onMove = ev => {
        const p = toStage(ev.clientX, ev.clientY);
        let deg = Math.atan2(p.y - c.y, p.x - c.x) * 180 / Math.PI + 90;
        deg = ((Math.round(deg) % 360) + 360) % 360;
        d.rotate = deg;
        syncDecor();
        const inp = el.querySelector('.rotateInput');
        if (inp) inp.value = d.rotate;
      };
      const onUp = ev => {
        rotHandle.releasePointerCapture(ev.pointerId);
        rotHandle.removeEventListener('pointermove', onMove);
        rotHandle.removeEventListener('pointerup', onUp);
        rotHandle.removeEventListener('pointercancel', onUp);
      };
      rotHandle.addEventListener('pointermove', onMove);
      rotHandle.addEventListener('pointerup', onUp);
      rotHandle.addEventListener('pointercancel', onUp);
    });
    // 层级改用state顺序调整（z-index会产生层叠隔离，导致叠底混合失效）
    el.querySelector('.up').onclick=(e)=>{e.stopPropagation();
      const i = state.decorList.indexOf(d);
      if (i < state.decorList.length - 1) { [state.decorList[i], state.decorList[i+1]] = [state.decorList[i+1], state.decorList[i]]; renderDragItems(); }
    };
    el.querySelector('.down').onclick=(e)=>{e.stopPropagation();
      const i = state.decorList.indexOf(d);
      if (i > 0) { [state.decorList[i], state.decorList[i-1]] = [state.decorList[i-1], state.decorList[i]]; renderDragItems(); }
    };
    el.querySelector('.del').onclick=(e)=>{e.stopPropagation(); state.decorList = state.decorList.filter(i=>i.id!==d.id); renderDragItems();};
    el.querySelector('.scaleInput').oninput=(e)=>{d.scale = parseFloat(e.target.value)||1; syncDecor();};
    el.querySelector('.rotateInput').oninput=(e)=>{d.rotate = parseFloat(e.target.value)||0; syncDecor();};
    // 颜色自定义：直接改形状样式，不重建DOM，取色器弹窗不中断
    const shapeEl = el.querySelector('.decor-shape');
    if (shapeEl) {
      const applyDecorColor = () => {
        if (d.type === 'bgBar') shapeEl.style.background = hexToRgba(d.color1 || '#000000', d.opacity == null ? 0.6 : d.opacity);
        else if (d.type === 'gradientBar') shapeEl.style.background = `linear-gradient(90deg, ${d.color1 || '#ff4466'}, ${d.color2 || '#ffaa22'})`;
      };
      const c1 = el.querySelector('.color1Input');
      if (c1) c1.oninput = e => { d.color1 = e.target.value; applyDecorColor(); };
      const c2 = el.querySelector('.color2Input');
      if (c2) c2.oninput = e => { d.color2 = e.target.value; applyDecorColor(); };
      const op = el.querySelector('.opacityInput');
      if (op) op.oninput = e => { d.opacity = (parseFloat(e.target.value) || 0) / 100; applyDecorColor(); };
      const bt = el.querySelector('.blendToggle');
      if (bt) bt.onchange = e => { d.blend = e.target.checked ? 'multiply' : 'normal'; syncDecor(); };
      const lb = el.querySelector('.labelInput');
      if (lb) lb.oninput = e => { d.label = e.target.value; const tl = shapeEl.querySelector('.tag-label'); if (tl) tl.textContent = d.label; };
    }
    // 右下角手柄拖拽调整大小：按画布缩放与元素自身缩放换算，1:1跟手
    const handleEl = el.querySelector('.resize-handle');
    if (handleEl) {
      handleEl.addEventListener('pointerdown', e => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.drag-item.active, .decor-item.active').forEach(x => x.classList.remove('active'));
        el.classList.add('active'); // 拖拽过程中保持控件可见
        handleEl.setPointerCapture(e.pointerId);
        const startX = e.clientX, startY = e.clientY;
        const isTag = d.type === 'tagCorner';
        const startW = d.w, startH = d.h, startFS = d.fontSize || 22;
        const onMove = ev => {
          const rect = getStageRect();
          const stageW = parseFloat(document.getElementById('coverStage').style.width) || rect.width;
          const k = (rect.width / stageW) * (d.scale || 1);
          if (isTag) {
            // 角标标签：拖拽调整字号，芯片随文字自适应宽高
            const delta = ((ev.clientX - startX) + (ev.clientY - startY)) / k;
            d.fontSize = Math.min(72, Math.max(8, Math.round(startFS + delta / 2)));
            shapeEl.style.fontSize = d.fontSize + 'px';
          } else {
            d.w = Math.max(40, Math.round(startW + (ev.clientX - startX) / k));
            d.h = Math.max(16, Math.round(startH + (ev.clientY - startY) / k));
            shapeEl.style.width = d.w + 'px';
            shapeEl.style.height = d.h + 'px';
          }
          layoutDecorControls(el, d, shapeEl);
        };
        const onUp = () => {
          handleEl.removeEventListener('pointermove', onMove);
          handleEl.removeEventListener('pointerup', onUp);
          handleEl.removeEventListener('pointercancel', onUp);
        };
        handleEl.addEventListener('pointermove', onMove);
        handleEl.addEventListener('pointerup', onUp);
        handleEl.addEventListener('pointercancel', onUp);
      });
    }
    const layBtn = el.querySelector('.layBtn');
    if (layBtn) layBtn.onclick = (e) => { e.stopPropagation(); d.belowText = !d.belowText; renderDragItems(); };
    // 先挂载再布局：控件行夹紧定位依赖真实测量的宽高（未挂载时 offsetWidth 为 0）
    (d.belowText ? belowLayer : container).appendChild(el);
    syncDecor();
  });
}

// 装饰编辑控件跟随图形尺寸定位：
// 两行控件紧凑堆叠在图形同一侧（图形在画布上半→控件放下方，下半→放上方），
// 只遮挡一侧，另一侧完全让给标题等主要元素；控件行水平夹紧在画布内，不会被边缘裁剪
function layoutDecorControls(el, d, shapeEl){
  const wrapEl = el.querySelector('.shape-wrap');
  const shape = shapeEl || (wrapEl && wrapEl.firstElementChild);
  const s = d.scale || 1;
  const wpx = (shape ? shape.offsetWidth : 120) * s;
  const hpx = (shape ? shape.offsetHeight : 40) * s;
  const actions = el.querySelector('.ctrl-top');   // ↑↓× / 层级切换
  const props = el.querySelector('.ctrl-bottom');  // 缩放/旋转/颜色等属性行
  if (!actions || !props) return;
  const stage = document.getElementById('coverStage');
  const W = parseFloat(stage.style.width) || 960;
  const H = parseFloat(stage.style.height) || 540;
  const cx = d.xPct / 100 * W;
  const cy = d.yPct / 100 * H;
  // 控件朝画布中心一侧展开：既不被 stage 的 overflow:hidden 裁剪，也少压住画面主体
  const below = cy <= H / 2;
  const ah = actions.offsetHeight || 20, ph = props.offsetHeight || 20;
  let aTop, pTop;
  if (below) {
    aTop = hpx / 2 + 10;      // 操作行贴图形下缘（右下角手柄 z-index 更高，不受影响）
    pTop = aTop + ah + 2;     // 属性行紧贴堆叠在其外侧
  } else {
    aTop = -(hpx / 2 + 10 + ah);
    pTop = aTop - 2 - ph;
  }
  // 水平夹紧：控件行不超出画布左右边界
  const clampLeft = (row, base) => Math.max(-cx, Math.min(W - cx - row.offsetWidth, base));
  actions.style.left = clampLeft(actions, -wpx / 2) + 'px';
  props.style.left = clampLeft(props, -wpx / 2) + 'px';
  actions.style.top = aTop + 'px';
  props.style.top = pTop + 'px';
}

// 拖拽：Pointer事件（兼容触屏）+ 指针捕获，不往document上挂监听，避免渲染后监听泄漏
function makeDraggableByPct(el, pos) {
  el.addEventListener('pointerdown', e => {
    if (e.target.closest('button, input')) return; // 控件点击不触发拖拽
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.drag-item.active').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    clearTextGroupHighlight();
    el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', e => {
    if (!el.hasPointerCapture(e.pointerId)) return;
    const rect = getStageRect();
    pos.xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    pos.yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    el.style.left = pos.xPct + '%';
    el.style.top = pos.yPct + '%';
  });
  el.addEventListener('pointerup', e => {
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    // 装饰项拖拽结束后重算控件行位置：翻转展开侧并夹紧回画布内
    if (el.classList.contains('decor-item')) layoutDecorControls(el, pos, el.querySelector('.decor-shape'));
  });
}

// 点击画布空白处取消选中
document.getElementById('coverStage').addEventListener('pointerdown', e => {
  if (!e.target.closest('.drag-item')) {
    document.querySelectorAll('.drag-item.active').forEach(x => x.classList.remove('active'));
    clearTextGroupHighlight();
  }
});

// ===================== 背景模式：纯色 / 渐变 / 图片 =====================
// 应用当前背景到底层：图片模式显示bgImage，纯色/渐变显示bgColorLayer
function applyBackground(){
  const layer = document.getElementById('bgColorLayer');
  const img = document.getElementById('bgImage');
  if (state.bgMode === 'color') {
    layer.style.background = state.bgColor;
    layer.classList.remove('hidden');
    img.classList.add('hidden');
  } else if (state.bgMode === 'gradient') {
    const g = state.bgGradient;
    layer.style.background = `linear-gradient(${g.angle}deg, ${g.c1}, ${g.c2})`;
    layer.classList.remove('hidden');
    img.classList.add('hidden');
  } else {
    layer.classList.add('hidden');
    img.classList.remove('hidden');
  }
  applyFilter(); // 滤镜对纯色/渐变底同样生效，导出所见即所得
}

// 三模式按钮与对应面板显隐同步
function syncBgModeUI(){
  document.querySelectorAll('[data-bg-mode]').forEach(b => {
    b.classList.toggle('active', b.dataset.bgMode === state.bgMode);
  });
  document.getElementById('bgColorPanel').classList.toggle('hidden', state.bgMode !== 'color');
  document.getElementById('bgGradientPanel').classList.toggle('hidden', state.bgMode !== 'gradient');
  document.getElementById('bgImagePanel').classList.toggle('hidden', state.bgMode !== 'image');
}

// 渲染纯色/渐变预设色板：按色系分组展示，点击即切换背景类型并应用
function renderBgPresets(){
  const solidList = document.getElementById('solidPresetList');
  solidList.innerHTML = '';
  solidBgPresetGroups.forEach(group => {
    const title = document.createElement('div');
    title.className = 'col-span-6 pt-1 text-[10px] font-medium text-gray-400';
    title.textContent = group.name;
    solidList.appendChild(title);
    group.items.forEach(p => {
      const el = document.createElement('div');
      el.className = 'bg-swatch';
      el.style.background = p.c;
      el.title = p.name;
      el.onclick = () => {
        state.bgMode = 'color';
        state.bgColor = p.c;
        document.getElementById('bgSolidColor').value = p.c;
        syncBgModeUI();
        applyBackground();
      };
      solidList.appendChild(el);
    });
  });
  const gradList = document.getElementById('gradientPresetList');
  gradList.innerHTML = '';
  gradientBgPresetGroups.forEach(group => {
    const title = document.createElement('div');
    title.className = 'col-span-4 pt-1 text-[10px] font-medium text-gray-400';
    title.textContent = group.name;
    gradList.appendChild(title);
    group.items.forEach(p => {
      const el = document.createElement('div');
      el.className = 'bg-swatch';
      el.style.background = `linear-gradient(135deg, ${p.c1}, ${p.c2})`;
      el.title = p.name;
      el.onclick = () => {
        state.bgMode = 'gradient';
        state.bgGradient = { c1: p.c1, c2: p.c2, angle: state.bgGradient.angle };
        document.getElementById('bgGradColor1').value = p.c1;
        document.getElementById('bgGradColor2').value = p.c2;
        syncBgModeUI();
        applyBackground();
      };
      gradList.appendChild(el);
    });
  });
}

function applyFilter() {
  const img = document.getElementById('bgImage');
  const layer = document.getElementById('filterLayer');
  const bgLayer = document.getElementById('bgColorLayer'); // 纯色/渐变底层同样吃滤镜
  let filter = `brightness(${state.brightness}%) contrast(${state.contrast}%) saturate(${state.saturate}%) blur(${state.blur}px)`;
  img.style.filter = filter;
  if (bgLayer) bgLayer.style.filter = filter;
  if (state.filterEnabled && state.filterPreset !== 'none') {
    layer.classList.remove('hidden');
    const presets = {
      warm: 'linear-gradient(135deg, rgba(255,140,60,.25), rgba(255,200,120,.15))',
      cool: 'linear-gradient(135deg, rgba(60,120,255,.25), rgba(120,200,255,.15))',
      vintage: 'linear-gradient(135deg, rgba(180,140,90,.3), rgba(220,200,160,.15))',
      bw: 'grayscale(100%)',
      film: 'linear-gradient(135deg, rgba(20,20,40,.25), rgba(255,220,180,.12))'
    };
    if (state.filterPreset === 'bw') {
      img.style.filter += ' grayscale(100%)';
      if (bgLayer) bgLayer.style.filter += ' grayscale(100%)';
      layer.classList.add('hidden');
    } else {
      layer.style.background = presets[state.filterPreset] || '';
    }
  } else {
    layer.classList.add('hidden');
  }
}

function syncFilterToggle() {
  const btn = document.getElementById('filterToggle');
  btn.textContent = state.filterEnabled ? '滤镜：开' : '滤镜：关';
  btn.classList.toggle('text-gray-400', !state.filterEnabled);
  btn.classList.toggle('text-primary', state.filterEnabled);
}

// 九宫格快速对齐：左/中/右用SVG锚点真实对齐，副标题跟在主标题下方
function alignText(type) {
  const stage = document.getElementById('coverStage');
  const h = parseFloat(stage.style.height) || 540;
  const anchor = type[1] === 'l' ? 'start' : type[1] === 'c' ? 'middle' : 'end';
  const xPct = type[1] === 'l' ? 6 : type[1] === 'c' ? 50 : 94;
  const mainY = type[0] === 't' ? 16 : type[0] === 'm' ? 46 : 78;
  // 副标题与主标题的间距按字号折算成画布高度百分比，换尺寸后依然协调
  const gapPct = Math.min(20, ((state.mainSize * 0.4 + 10) / h) * 100);
  const subY = Math.min(92, mainY + gapPct);
  const gap2Pct = Math.min(14, ((state.subSize * 0.4 + 8) / h) * 100);
  state.mainAlign = anchor;
  state.subAlign = anchor;
  state.thirdAlign = anchor;
  state.mainPos = { xPct, yPct: mainY };
  state.subPos = { xPct, yPct: subY };
  state.thirdPos = { xPct, yPct: Math.min(96, subY + gap2Pct) };
  renderSvgText();
}

// 三级标题 UI 显隐同步
function syncThirdUI() {
  const on = state.hasThird;
  document.getElementById('thirdAddRow').classList.toggle('hidden', on);
  document.getElementById('thirdEditRow').classList.toggle('hidden', !on);
}

function bindEvents() {
  document.getElementById('panelToggle').addEventListener('click', () => {
    const panel = document.getElementById('leftPanel');
    setPanelCollapsed(!panel.classList.contains('panel-collapsed'));
  });
  // 左侧浮动收起/展开按钮
  document.getElementById('panelFloatBtn').addEventListener('click', () => {
    const panel = document.getElementById('leftPanel');
    setPanelCollapsed(!panel.classList.contains('panel-collapsed'));
  });
  // 贴纸库展开 / 收起
  document.getElementById('stickerToggle').addEventListener('click', () => {
    const list = document.getElementById('stickerList');
    const chevron = document.getElementById('stickerChevron');
    const collapsed = list.classList.toggle('hidden');
    chevron.classList.toggle('rotate-180', !collapsed);
  });
  // 上传贴纸图片：插入画布中心，可继续拖拽/缩放/旋转
  document.getElementById('stickerUpload').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      state.stickerList.push({
        id: Date.now() + Math.random(),
        img: ev.target.result,   // DataURL，导出无跨域问题
        xPct: 50, yPct: 50, scale: 1, rotate: 0, zIndex: 10
      });
      renderDragItems();
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // 清空以便重复上传同一文件
  });
  document.getElementById('sizeSelect').addEventListener('change', e => {
    state.size = e.target.value;
    applySize();
  });
  // 背景类型切换与参数调整
  document.querySelectorAll('[data-bg-mode]').forEach(btn => btn.addEventListener('click', () => {
    state.bgMode = btn.dataset.bgMode;
    syncBgModeUI();
    applyBackground();
  }));
  document.getElementById('bgSolidColor').addEventListener('input', e => { state.bgColor = e.target.value; applyBackground(); });
  document.getElementById('bgGradColor1').addEventListener('input', e => { state.bgGradient.c1 = e.target.value; applyBackground(); });
  document.getElementById('bgGradColor2').addEventListener('input', e => { state.bgGradient.c2 = e.target.value; applyBackground(); });
  document.getElementById('bgGradAngle').addEventListener('change', e => { state.bgGradient.angle = +e.target.value; applyBackground(); });
  document.getElementById('customBgInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      state.bgImage = ev.target.result;
      state.bgMode = 'image'; // 上传即切回图片背景
      document.getElementById('bgImage').src = ev.target.result;
      syncBgModeUI(); applyBackground();
      document.querySelectorAll('.template-card').forEach(c => {
        c.classList.remove('active');
        c.classList.replace('border-primary', 'border-gray-200');
      });
      // 上传后自动打开裁剪弹窗，方便立刻按尺寸/比例裁剪
      setTimeout(openCropModal, 80);
    };
    reader.readAsDataURL(file);
  });
  document.getElementById('mainTitle').addEventListener('input', e => { state.mainTitle = e.target.value; renderSvgText(); });
  document.getElementById('subTitle').addEventListener('input', e => { state.subTitle = e.target.value; renderSvgText(); });
  document.getElementById('addThirdBtn').addEventListener('click', () => {
    state.hasThird = true;
    if (!state.thirdTitle) state.thirdTitle = '三级标题';
    document.getElementById('thirdTitle').value = state.thirdTitle;
    syncThirdUI(); renderSvgText();
    highlightTextGroup(2);
  });
  document.getElementById('removeThirdBtn').addEventListener('click', () => {
    state.hasThird = false; state.thirdTitle = '';
    syncThirdUI(); renderSvgText(); clearTextGroupHighlight();
  });
  document.getElementById('thirdTitle').addEventListener('input', e => { state.thirdTitle = e.target.value; renderSvgText(); });
  document.getElementById('thirdSize').addEventListener('change', e => { state.thirdSize = +e.target.value; renderSvgText(); });
  document.getElementById('thirdColor').addEventListener('input', e => { state.thirdColor = e.target.value; renderSvgText(); });
  document.getElementById('thirdFontFamily').addEventListener('change', e => { state.thirdFontFamily = e.target.value; renderSvgText(); });
  document.getElementById('mainFontFamily').addEventListener('change', e => { state.mainFontFamily = e.target.value; renderSvgText(); });
  document.getElementById('mainDirection').addEventListener('change', e => { state.mainVertical = e.target.value === 'vertical'; renderSvgText(); });
  document.getElementById('subDirection').addEventListener('change', e => { state.subVertical = e.target.value === 'vertical'; renderSvgText(); });
  document.getElementById('thirdDirection').addEventListener('change', e => { state.thirdVertical = e.target.value === 'vertical'; renderSvgText(); });
  document.getElementById('subFontFamily').addEventListener('change', e => { state.subFontFamily = e.target.value; renderSvgText(); });
  document.getElementById('mainFontWeight').addEventListener('change', e => { state.mainFontWeight = e.target.value; renderSvgText(); });
  document.getElementById('subFontWeight').addEventListener('change', e => { state.subFontWeight = e.target.value; renderSvgText(); });
  document.getElementById('thirdFontWeight').addEventListener('change', e => { state.thirdFontWeight = e.target.value; renderSvgText(); });
  document.getElementById('mainLetterSpacing').addEventListener('input', e => { state.mainLetterSpacing = parseFloat(e.target.value) || 0; renderSvgText(); });
  document.getElementById('subLetterSpacing').addEventListener('input', e => { state.subLetterSpacing = parseFloat(e.target.value) || 0; renderSvgText(); });
  document.getElementById('thirdLetterSpacing').addEventListener('input', e => { state.thirdLetterSpacing = parseFloat(e.target.value) || 0; renderSvgText(); });
  // 文字旋转角度：输入框（字段名与 input id 同名）
  ['mainRotate', 'subRotate', 'thirdRotate'].forEach(id => {
    document.getElementById(id).addEventListener('input', e => {
      state[id] = Math.min(360, Math.max(0, parseFloat(e.target.value) || 0));
      renderSvgText();
    });
  });
  // 文字旋转快捷按钮：左转90° / 右转90° / 归零
  document.querySelectorAll('.rot-btn').forEach(btn => btn.addEventListener('click', () => {
    const inp = document.getElementById(btn.dataset.rotFor);
    const cur = parseFloat(inp.value) || 0;
    const delta = +btn.dataset.rotDelta;
    const next = delta === 0 ? 0 : (((cur + delta) % 360) + 360) % 360;
    inp.value = next;
    state[btn.dataset.rotFor] = next;
    renderSvgText();
  }));
  document.getElementById('mainSize').addEventListener('change', e => { state.mainSize = +e.target.value; renderSvgText(); });
  document.getElementById('subSize').addEventListener('change', e => { state.subSize = +e.target.value; renderSvgText(); });
  document.getElementById('mainColor').addEventListener('input', e => { state.mainColor = e.target.value; state.mainGradient = null; renderSvgText(); });
  document.getElementById('subColor').addEventListener('input', e => { state.subColor = e.target.value; renderSvgText(); });
  document.getElementById('strokeColor').addEventListener('input', e => { state.strokeColor = e.target.value; renderSvgText(); });
  document.getElementById('strokeSize').addEventListener('input', e => { state.strokeSize = +e.target.value; document.getElementById('strokeSizeLabel').textContent = e.target.value; renderSvgText(); });
  document.getElementById('shadowColor').addEventListener('input', e => { state.shadowColor = e.target.value; renderSvgText(); });
  document.getElementById('shadow').addEventListener('input', e => { state.shadow = +e.target.value; document.getElementById('shadowLabel').textContent = e.target.value; renderSvgText(); });
  document.querySelectorAll('[data-align]').forEach(btn => btn.addEventListener('click', () => alignText(btn.dataset.align)));
  document.getElementById('brightness').addEventListener('input', e => { state.brightness = +e.target.value; document.getElementById('brightLabel').textContent = e.target.value; applyFilter(); });
  document.getElementById('contrast').addEventListener('input', e => { state.contrast = +e.target.value; document.getElementById('contrastLabel').textContent = e.target.value; applyFilter(); });
  document.getElementById('saturate').addEventListener('input', e => { state.saturate = +e.target.value; document.getElementById('saturateLabel').textContent = e.target.value; applyFilter(); });
  document.getElementById('blur').addEventListener('input', e => { state.blur = +e.target.value; document.getElementById('blurLabel').textContent = e.target.value; applyFilter(); });
  document.getElementById('filterPreset').addEventListener('change', e => { state.filterPreset = e.target.value; applyFilter(); });
  document.getElementById('filterToggle').addEventListener('click', () => { state.filterEnabled = !state.filterEnabled; syncFilterToggle(); applyFilter(); });
  document.getElementById('resetBtn').addEventListener('click', () => {
    state.mainTitle = '视频封面一键生成'; state.subTitle = 'diy.ee.cd';
    state.mainFontFamily = 'font-cover-bold'; state.subFontFamily = 'font-cover-sub'; state.thirdFontFamily = 'font-cover-sub';
    state.mainFontWeight = 'bold'; state.subFontWeight = 'bold'; state.thirdFontWeight = 'bold';
    state.mainLetterSpacing = 1; state.subLetterSpacing = 1; state.thirdLetterSpacing = 1;
    state.mainSize = 100; state.subSize = 54; state.mainColor = '#ffffff'; state.subColor = '#ffdd44';
    state.strokeColor = '#000000'; state.strokeSize = 2; state.mainGradient = null;
    state.shadowColor = '#000000'; state.shadow = 5;
    state.mainAlign = 'middle'; state.subAlign = 'middle';
    state.brightness = 100; state.contrast = 100; state.saturate = 100; state.blur = 0;
    state.filterPreset = 'none'; state.stickerList = []; state.decorList=[];
    state.bgMode = 'image'; state.bgColor = '#0f172a';
    state.bgGradient = { c1:'#667eea', c2:'#764ba2', angle:135 };
    state.mainPos = { xPct: 50, yPct: 40 }; state.subPos = { xPct: 50, yPct: 62 };
    state.mainRotate = 0; state.subRotate = 0; state.thirdRotate = 0;
    state.hasThird = false; state.thirdTitle = ''; state.thirdSize = 30; state.thirdColor = '#ffffff';
    state.thirdAlign = 'middle'; state.thirdPos = { xPct: 50, yPct: 74 };
    document.getElementById('mainTitle').value = state.mainTitle; document.getElementById('subTitle').value = state.subTitle;
    document.getElementById('mainFontFamily').value = state.mainFontFamily; document.getElementById('subFontFamily').value = state.subFontFamily;
    document.getElementById('thirdFontFamily').value = state.thirdFontFamily;
    clearTextGroupHighlight();
    document.getElementById('mainFontWeight').value = state.mainFontWeight;
    document.getElementById('subFontWeight').value = state.subFontWeight;
    document.getElementById('thirdFontWeight').value = state.thirdFontWeight;
    document.getElementById('mainLetterSpacing').value = state.mainLetterSpacing;
    document.getElementById('subLetterSpacing').value = state.subLetterSpacing;
    document.getElementById('thirdLetterSpacing').value = state.thirdLetterSpacing;
    document.getElementById('mainSize').value = state.mainSize; document.getElementById('subSize').value = state.subSize;
    document.getElementById('mainColor').value = state.mainColor; document.getElementById('subColor').value = state.subColor;
    document.getElementById('strokeColor').value = state.strokeColor; document.getElementById('strokeSize').value = state.strokeSize;
    document.getElementById('shadowColor').value = state.shadowColor; document.getElementById('shadow').value = state.shadow;
    document.getElementById('brightness').value = state.brightness; document.getElementById('contrast').value = state.contrast;
    document.getElementById('saturate').value = state.saturate; document.getElementById('blur').value = state.blur;
    document.getElementById('filterPreset').value = state.filterPreset;
    // 同步所有数值标签，避免重置后显示残留旧值
    document.getElementById('strokeSizeLabel').textContent = state.strokeSize;
    document.getElementById('shadowLabel').textContent = state.shadow;
    document.getElementById('brightLabel').textContent = state.brightness;
    document.getElementById('contrastLabel').textContent = state.contrast;
    document.getElementById('saturateLabel').textContent = state.saturate;
    document.getElementById('blurLabel').textContent = state.blur;
    document.getElementById('thirdTitle').value = '';
    document.getElementById('thirdSize').value = state.thirdSize;
    document.getElementById('thirdColor').value = state.thirdColor;
    // 旋转角度归零
    document.getElementById('mainRotate').value = 0;
    document.getElementById('subRotate').value = 0;
    document.getElementById('thirdRotate').value = 0;
    // 排版方向恢复横排
    state.mainVertical = false; state.subVertical = false; state.thirdVertical = false;
    document.getElementById('mainDirection').value = 'horizontal';
    document.getElementById('subDirection').value = 'horizontal';
    document.getElementById('thirdDirection').value = 'horizontal';
    // 样式预设下拉与色点恢复默认（白字黑边）
    document.getElementById('textStylePreset').value = '';
    const presetDot = document.getElementById('presetDot');
    presetDot.style.background = '#ffffff';
    presetDot.style.border = '2px solid #000000';
    // 背景恢复图片模式并同步面板控件
    document.getElementById('bgSolidColor').value = state.bgColor;
    document.getElementById('bgGradColor1').value = state.bgGradient.c1;
    document.getElementById('bgGradColor2').value = state.bgGradient.c2;
    document.getElementById('bgGradAngle').value = state.bgGradient.angle;
    syncBgModeUI();
    syncThirdUI();
    renderSvgText(); renderDragItems(); applyBackground();
  });
  document.getElementById('exportBtn').addEventListener('click', async () => {
    const stage  = document.getElementById('coverStage');
    const scaler = document.getElementById('stageScaler');
    const btn = document.getElementById('exportBtn');
    const activeItem = document.querySelector('.drag-item.active');
    const prev = { t: stage.style.transform, w: scaler.style.width, h: scaler.style.height };

    btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> 生成中...';
    if (activeItem) activeItem.classList.remove('active'); // 选中框不入图
    stage.style.transform = 'none';                        // 按原始尺寸导出，不受缩放影响
    scaler.style.width  = stage.offsetWidth + 'px';
    scaler.style.height = stage.offsetHeight + 'px';
    try {
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      const canvas = await html2canvas(stage, { scale: 2, useCORS: true, backgroundColor: null, logging: false });
      const link = document.createElement('a');
      link.download = 'video-cover-svg-' + Date.now() + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) { alert('导出失败：' + err.message); }
    finally {
      stage.style.transform = prev.t;
      scaler.style.width = prev.w;
      scaler.style.height = prev.h;
      if (activeItem) activeItem.classList.add('active');
      btn.innerHTML = '<i class="fa fa-download"></i> 导出封面';
      fitStage();
    }
  });
}

// ===================== 在线裁剪背景图（输入尺寸 / 选择比例） =====================
const CROP_RATIOS = [
  { label: '自由', r: 0 },
  { label: '1:1', r: 1 },
  { label: '4:3', r: 4 / 3 },
  { label: '3:4', r: 3 / 4 },
  { label: '16:9', r: 16 / 9 },
  { label: '9:16', r: 9 / 16 },
  { label: '3:2', r: 3 / 2 },
  { label: '2:3', r: 2 / 3 },
  { label: '4:5', r: 4 / 5 },
  { label: '21:9', r: 21 / 9 }
];
// 各比例默认输出分辨率（px）；"自由"模式按裁剪区域原像素输出
const CROP_DEFAULT_OUT = {
  '1:1': [1080, 1080], '4:3': [1600, 1200], '3:4': [1200, 1600],
  '16:9': [1920, 1080], '9:16': [1080, 1920], '3:2': [1800, 1200],
  '2:3': [1200, 1800], '4:5': [1280, 1600], '21:9': [2100, 900]
};
const cropState = {
  mode: 'image',        // 'image' 图片背景单独裁剪 / 'canvas' 画布合成整体裁剪
  snapshot: null,       // 画布模式快照 dataURL
  ratio: 0,            // 当前锁定比例（0 = 自由）
  ratioLabel: null,    // 当前比例标签（查默认输出档位）
  outW: 0, outH: 0,    // 自定义输出尺寸（0 = 未自定义）
  imgW: 0, imgH: 0,    // 原图自然尺寸
  disp: null,          // 图片在 stage 内的渲染区域 {x,y,w,h}
  box: { x: 0, y: 0, w: 0, h: 0 }
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// 切换裁剪模式：image = 单独裁剪背景图；canvas = 画布（背景+文字+贴纸+装饰）整体裁剪
function switchCropMode(mode) {
  cropState.mode = mode;
  document.querySelectorAll('.crop-mode-tab').forEach(t => t.classList.toggle('active', t.dataset.cropMode === mode));
  const applyBtn = document.getElementById('cropApplyBtn');
  const exportBtn = document.getElementById('cropExportBtn');
  const img = document.getElementById('cropPreviewImg');
  if (mode === 'image') {
    applyBtn.innerHTML = '<i class="fa fa-check mr-1"></i>应用裁剪';
    exportBtn.classList.remove('hidden');   // 图片背景模式支持导出裁剪结果
    img.src = state.bgImage;
  } else {
    applyBtn.innerHTML = '<i class="fa fa-download mr-1"></i>裁剪并下载';
    exportBtn.classList.add('hidden');      // 画布模式应用即下载，无需单独导出
    loadCanvasSnapshot();
  }
}

// 画布合成模式：用 html2canvas 渲染当前画布为快照作为裁剪源
async function loadCanvasSnapshot() {
  const stage = document.getElementById('coverStage');
  const scaler = document.getElementById('stageScaler');
  const img = document.getElementById('cropPreviewImg');
  const applyBtn = document.getElementById('cropApplyBtn');
  const prev = { t: stage.style.transform, w: scaler.style.width, h: scaler.style.height };
  const active = document.querySelector('.drag-item.active');
  if (active) active.classList.remove('active'); // 选中框不入快照
  stage.style.transform = 'none';                // 按原始尺寸导出
  scaler.style.width = stage.offsetWidth + 'px';
  scaler.style.height = stage.offsetHeight + 'px';
  applyBtn.disabled = true;
  try {
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const canvas = await html2canvas(stage, { scale: 2, useCORS: true, backgroundColor: null, logging: false });
    cropState.snapshot = canvas.toDataURL('image/jpeg', 0.95);
    img.src = cropState.snapshot;
    if (img.complete && img.naturalWidth) initCropBox();
  } catch (err) {
    alert('画布合成失败：' + err.message);
  } finally {
    stage.style.transform = prev.t;
    scaler.style.width = prev.w;
    scaler.style.height = prev.h;
    if (active) active.classList.add('active');
    applyBtn.disabled = false;
    fitStage();
  }
}

function openCropModal() {
  const modal = document.getElementById('cropModal');
  const img = document.getElementById('cropPreviewImg');
  cropState.ratio = 0; cropState.ratioLabel = null;
  cropState.outW = 0; cropState.outH = 0;
  document.getElementById('cropWInput').value = '';
  document.getElementById('cropHInput').value = '';
  document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.toggle('active', +b.dataset.ratio === 0));
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  switchCropMode('image'); // 每次打开默认图片背景模式
  // 图片已缓存时 load 不会触发，需手动初始化
  if (img.complete && img.naturalWidth) initCropBox();
}

function closeCropModal() {
  const modal = document.getElementById('cropModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initCropBox() {
  const img = document.getElementById('cropPreviewImg');
  const stage = document.getElementById('cropStage');
  cropState.imgW = img.naturalWidth || 1;
  cropState.imgH = img.naturalHeight || 1;
  // 图片 contain 后在 stage 内的实际渲染区域
  const sw = stage.clientWidth, sh = stage.clientHeight;
  const ir = cropState.imgW / cropState.imgH;
  let dispW, dispH, offX, offY;
  if (ir > sw / sh) { dispW = sw; dispH = dispW / ir; offX = 0; offY = (sh - dispH) / 2; }
  else { dispH = sh; dispW = dispH * ir; offY = 0; offX = (sw - dispW) / 2; }
  cropState.disp = { x: offX, y: offY, w: dispW, h: dispH };
  // 初始比例：跟随当前画布尺寸；裁剪框占显示区 92% 居中
  const map = { '16:9': 16 / 9, '4:3': 4 / 3, '3:2': 3 / 2, '1:1': 1, '21:9': 21 / 9, '3:4': 3 / 4, '2:3': 2 / 3, '9:16': 9 / 16 };
  const r0 = map[state.size] || 16 / 9;
  let bw = dispW * 0.92, bh = bw / r0;
  if (bh > dispH * 0.92) { bh = dispH * 0.92; bw = bh * r0; }
  cropState.box = { x: offX + (dispW - bw) / 2, y: offY + (dispH - bh) / 2, w: bw, h: bh };
  selectCropRatio({ label: state.size, r: r0 }, true);
  applyCropBox();
}

function applyCropBox() {
  const b = cropState.box, box = document.getElementById('cropBox');
  box.style.left = b.x + 'px';
  box.style.top = b.y + 'px';
  box.style.width = b.w + 'px';
  box.style.height = b.h + 'px';
  updateCropInfo();
}

// 计算输出尺寸：自定义 > 比例默认档（不超采样2倍）> 自由（区域原像素）
function getCropOutput() {
  const d = cropState.disp, b = cropState.box;
  const srcW = Math.max(1, Math.round(b.w / d.w * cropState.imgW));
  const srcH = Math.max(1, Math.round(b.h / d.h * cropState.imgH));
  let outW = srcW, outH = srcH;
  if (cropState.outW > 0 && cropState.outH > 0) {
    outW = cropState.outW; outH = cropState.outH;
  } else if (cropState.ratioLabel && CROP_DEFAULT_OUT[cropState.ratioLabel]) {
    let ow = CROP_DEFAULT_OUT[cropState.ratioLabel][0];
    let oh = CROP_DEFAULT_OUT[cropState.ratioLabel][1];
    // 区域像素过小时最多放大 2 倍，避免过度插值变糊；单边上限 4096
    const maxW = Math.min(4096, srcW * 2), maxH = Math.min(4096, srcH * 2);
    if (ow > maxW || oh > maxH) {
      const k = Math.min(maxW / ow, maxH / oh);
      ow = Math.max(1, Math.round(ow * k)); oh = Math.max(1, Math.round(oh * k));
    }
    outW = ow; outH = oh;
  }
  return { srcW, srcH, outW, outH };
}

function updateCropInfo() {
  const { srcW, srcH, outW, outH } = getCropOutput();
  const info = document.getElementById('cropInfo');
  info.innerHTML = '裁剪区域 <b>' + srcW + ' × ' + srcH + '</b> px → 输出 <b>' + outW + ' × ' + outH + '</b> px';
}

// 选择比例预设；initOnly 时不重排裁剪框（初始框已按画布比例生成）
function selectCropRatio(r, initOnly) {
  cropState.ratio = r.r;
  cropState.ratioLabel = r.r > 0 ? r.label : null;
  cropState.outW = 0; cropState.outH = 0;
  document.getElementById('cropWInput').value = '';
  document.getElementById('cropHInput').value = '';
  document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.toggle('active', +b.dataset.ratio === r.r));
  if (!initOnly && r.r > 0) fitBoxToRatio(r.r);
  updateCropInfo();
}

// 保持中心不变，按新比例重排裁剪框
function fitBoxToRatio(ratio) {
  const d = cropState.disp;
  if (!d) return;
  let w = cropState.box.w, h = cropState.box.h;
  if (w / h > ratio) h = w / ratio; else w = h * ratio;
  if (w > d.w) { w = d.w; h = w / ratio; }
  if (h > d.h) { h = d.h; w = h * ratio; }
  const cx = cropState.box.x + cropState.box.w / 2;
  const cy = cropState.box.y + cropState.box.h / 2;
  cropState.box = {
    x: clamp(cx - w / 2, d.x, d.x + d.w - w),
    y: clamp(cy - h / 2, d.y, d.y + d.h - h),
    w, h
  };
  applyCropBox();
}

// 手柄缩放：锚点固定 + 比例锁定（角/边通用）
function resizeCropBox(sb, dir, dx, dy, ratio) {
  const d = cropState.disp;
  if (!d) return;
  const minS = 40;
  const ax = dir.includes('w') ? sb.x + sb.w : dir.includes('e') ? sb.x : null;
  const ay = dir.includes('n') ? sb.y + sb.h : dir.includes('s') ? sb.y : null;
  const px = dir.includes('w') ? sb.x + dx : dir.includes('e') ? sb.x + sb.w + dx : null;
  const py = dir.includes('n') ? sb.y + dy : dir.includes('s') ? sb.y + sb.h + dy : null;
  let x, y, w, h;
  if (ratio > 0) {
    if (ax != null && ay != null) { // 角：以对角为锚点，指针方向扩展
      let nw = Math.abs(px - ax), nh = Math.abs(py - ay);
      if (nw / nh > ratio) nw = nh * ratio; else nh = nw / ratio;
      const sx = px > ax ? 1 : -1, sy = py > ay ? 1 : -1;
      w = nw; h = nh;
      x = sx > 0 ? ax : ax - w;
      y = sy > 0 ? ay : ay - h;
    } else if (ax != null) { // 左右边
      const sx = px > ax ? 1 : -1;
      w = Math.abs(px - ax); h = w / ratio;
      x = sx > 0 ? ax : ax - w;
      y = sb.y;
    } else { // 上下边
      const sy = py > ay ? 1 : -1;
      h = Math.abs(py - ay); w = h * ratio;
      y = sy > 0 ? ay : ay - h;
      x = sb.x;
    }
  } else {
    w = px != null ? Math.abs(px - ax) : sb.w;
    h = py != null ? Math.abs(py - ay) : sb.h;
    x = ax != null ? Math.min(ax, px) : sb.x;
    y = ay != null ? Math.min(ay, py) : sb.y;
  }
  if (ratio > 0) {
    if (w < minS) { w = minS; h = w / ratio; }
    if (h < minS) { h = minS; w = h * ratio; }
  } else {
    if (w < minS) w = minS;
    if (h < minS) h = minS;
  }
  // 边界夹紧（贴边时比例可能略失，可接受）
  if (x < d.x) { w -= d.x - x; x = d.x; }
  if (y < d.y) { h -= d.y - y; y = d.y; }
  if (x + w > d.x + d.w) w = d.x + d.w - x;
  if (y + h > d.y + d.h) h = d.y + d.h - y;
  if (w <= 0 || h <= 0) return;
  cropState.box = { x, y, w, h };
  applyCropBox();
}

// 按当前裁剪框把图片裁出来（共用：应用 / 导出）
function cropImageToCanvas() {
  const d = cropState.disp, b = cropState.box;
  if (!d || !b.w) return null;
  const { outW, outH } = getCropOutput();
  const canvas = document.createElement('canvas');
  canvas.width = outW; canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';           // 透明区域填白底
  ctx.fillRect(0, 0, outW, outH);
  const sx = (b.x - d.x) / d.w * cropState.imgW;
  const sy = (b.y - d.y) / d.h * cropState.imgH;
  const sw = b.w / d.w * cropState.imgW;
  const sh = b.h / d.h * cropState.imgH;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(document.getElementById('cropPreviewImg'), sx, sy, sw, sh, 0, 0, outW, outH);
  return canvas;
}

// 导出裁剪结果：图片背景模式单独导出裁剪后的 PNG 下载
function exportCrop() {
  const canvas = cropImageToCanvas();
  if (!canvas) return;
  const a = document.createElement('a');
  a.download = 'bg-cropped-' + Date.now() + '.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

// 应用裁剪：image 模式替换背景图；canvas 模式导出裁剪后的合成图（PNG 下载）
function applyCrop() {
  const canvas = cropImageToCanvas();
  if (!canvas) return;
  if (cropState.mode === 'canvas') {
    // 画布合成整体裁剪：输出 PNG 下载
    const a = document.createElement('a');
    a.download = 'cover-cropped-' + Date.now() + '.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
  } else {
    // 图片背景单独裁剪：替换背景图
    state.bgImage = canvas.toDataURL('image/jpeg', 0.92);
    state.bgMode = 'image';
    document.getElementById('bgImage').src = state.bgImage;
    syncBgModeUI(); applyBackground();
    document.querySelectorAll('.template-card').forEach(c => {
      c.classList.remove('active');
      c.classList.replace('border-primary', 'border-gray-200');
    });
  }
  closeCropModal();
}

function bindCropEvents() {
  const modal = document.getElementById('cropModal');
  const stage = document.getElementById('cropStage');
  const box = document.getElementById('cropBox');
  const img = document.getElementById('cropPreviewImg');

  document.getElementById('cropBtn').addEventListener('click', openCropModal);
  modal.querySelectorAll('[data-crop-close]').forEach(el => el.addEventListener('click', closeCropModal));
  document.getElementById('cropApplyBtn').addEventListener('click', applyCrop);
  document.getElementById('cropExportBtn').addEventListener('click', exportCrop);
  // 模式切换：图片背景 / 画布合成
  modal.querySelectorAll('.crop-mode-tab').forEach(t => t.addEventListener('click', () => switchCropMode(t.dataset.cropMode)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeCropModal();
  });
  modal.addEventListener('wheel', e => e.stopPropagation(), { passive: true });

  // 比例按钮
  const ratioList = document.getElementById('cropRatioList');
  ratioList.innerHTML = '';
  CROP_RATIOS.forEach(r => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'crop-ratio-btn' + (r.r === 0 ? ' active' : '');
    btn.textContent = r.label;
    btn.dataset.ratio = r.r;
    btn.addEventListener('click', () => selectCropRatio(r));
    ratioList.appendChild(btn);
  });

  // 图片加载完成（首次打开且图片未缓存时）
  img.addEventListener('load', () => {
    if (modal.classList.contains('open')) initCropBox();
  });

  // 拖动裁剪框整体
  box.addEventListener('pointerdown', e => {
    if (e.target.closest('.crop-handle')) return;
    e.preventDefault(); e.stopPropagation();
    box.setPointerCapture(e.pointerId);
    const startX = e.clientX, startY = e.clientY;
    const sb = { x: cropState.box.x, y: cropState.box.y };
    const onMove = ev => {
      const d = cropState.disp;
      if (!d) return;
      cropState.box.x = clamp(sb.x + ev.clientX - startX, d.x, d.x + d.w - cropState.box.w);
      cropState.box.y = clamp(sb.y + ev.clientY - startY, d.y, d.y + d.h - cropState.box.h);
      applyCropBox();
    };
    const onUp = ev => {
      box.releasePointerCapture(ev.pointerId);
      box.removeEventListener('pointermove', onMove);
      box.removeEventListener('pointerup', onUp);
    };
    box.addEventListener('pointermove', onMove);
    box.addEventListener('pointerup', onUp);
  });

  // 8 方向手柄缩放
  stage.querySelectorAll('.crop-handle').forEach(h => {
    h.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      h.setPointerCapture(e.pointerId);
      const dir = h.dataset.h;
      const startX = e.clientX, startY = e.clientY;
      const sb = { x: cropState.box.x, y: cropState.box.y, w: cropState.box.w, h: cropState.box.h };
      const ratio = cropState.ratio;
      const onMove = ev => resizeCropBox(sb, dir, ev.clientX - startX, ev.clientY - startY, ratio);
      const onUp = ev => {
        h.releasePointerCapture(ev.pointerId);
        h.removeEventListener('pointermove', onMove);
        h.removeEventListener('pointerup', onUp);
      };
      h.addEventListener('pointermove', onMove);
      h.addEventListener('pointerup', onUp);
    });
  });

  // 自定义尺寸输入：宽高联动（都填 → 锁定比例重排；填一项 → 按当前比例补全）
  const wInp = document.getElementById('cropWInput'), hInp = document.getElementById('cropHInput');
  const onSizeInput = which => () => {
    const w = parseInt(wInp.value) || 0, h = parseInt(hInp.value) || 0;
    if (w > 0 && h > 0) {
      cropState.ratio = w / h;
      cropState.ratioLabel = null;
      cropState.outW = w; cropState.outH = h;
      document.querySelectorAll('.crop-ratio-btn').forEach(b => b.classList.remove('active'));
      fitBoxToRatio(w / h);
    } else if ((w > 0 || h > 0) && cropState.ratio > 0) {
      if (which === 'w') { cropState.outW = w; cropState.outH = Math.round(w / cropState.ratio); hInp.value = cropState.outH; }
      else { cropState.outH = h; cropState.outW = Math.round(h * cropState.ratio); wInp.value = cropState.outW; }
    } else {
      cropState.outW = 0; cropState.outH = 0;
    }
    updateCropInfo();
  };
  wInp.addEventListener('input', onSizeInput('w'));
  hInp.addEventListener('input', onSizeInput('h'));
}

// ===================== 改尺寸（resize）：整体缩放背景图到指定尺寸 =====================
const resizeState = { ow: 0, oh: 0, ratio: 1 };

function openResizeModal() {
  const modal = document.getElementById('resizeModal');
  const wInp = document.getElementById('resizeWInput');
  const hInp = document.getElementById('resizeHInput');
  // 读取当前背景图自然尺寸
  const nat = new Image();
  nat.onload = () => {
    resizeState.ow = nat.naturalWidth || 960;
    resizeState.oh = nat.naturalHeight || 540;
    resizeState.ratio = resizeState.ow / resizeState.oh;
    wInp.value = resizeState.ow;
    hInp.value = resizeState.oh;
    updateResizeInfo();
  };
  nat.src = state.bgImage;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeResizeModal() {
  const modal = document.getElementById('resizeModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function updateResizeInfo() {
  const wInp = document.getElementById('resizeWInput'), hInp = document.getElementById('resizeHInput');
  const w = parseInt(wInp.value) || 0, h = parseInt(hInp.value) || 0;
  const info = document.getElementById('resizeInfo');
  if (!resizeState.ow || !w || !h) {
    info.innerHTML = '<span style="color:#f59e0b;">请填写目标宽和高</span>';
    return;
  }
  info.innerHTML = '<b>' + resizeState.ow + ' × ' + resizeState.oh + '</b> → 输出 <b>' + w + ' × ' + h + '</b> px';
}

function onResizeInput(which) {
  const wInp = document.getElementById('resizeWInput'), hInp = document.getElementById('resizeHInput');
  let w = parseInt(wInp.value) || 0, h = parseInt(hInp.value) || 0;
  // 锁定比例：修改宽或高时按原比例自动补全另一项
  if (resizeState.ow && document.getElementById('resizeKeepRatio').checked) {
    if (which === 'w' && w > 0) { h = Math.max(1, Math.round(w / resizeState.ratio)); hInp.value = h; }
    else if (which === 'h' && h > 0) { w = Math.max(1, Math.round(h * resizeState.ratio)); wInp.value = w; }
  }
  updateResizeInfo();
}

function applyResize() {
  const wInp = document.getElementById('resizeWInput'), hInp = document.getElementById('resizeHInput');
  const w = Math.min(4096, Math.max(1, parseInt(wInp.value) || 0));
  const h = Math.min(4096, Math.max(1, parseInt(hInp.value) || 0));
  if (!resizeState.ow || !resizeState.oh || !w || !h) return;
  const img = document.getElementById('bgImage');
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);
  state.bgImage = canvas.toDataURL('image/jpeg', 0.92);
  state.bgMode = 'image';
  img.src = state.bgImage;
  syncBgModeUI(); applyBackground();
  document.querySelectorAll('.template-card').forEach(c => {
    c.classList.remove('active');
    c.classList.replace('border-primary', 'border-gray-200');
  });
  closeResizeModal();
}

function bindResizeEvents() {
  const modal = document.getElementById('resizeModal');
  document.getElementById('resizeBtn').addEventListener('click', openResizeModal);
  modal.querySelectorAll('[data-resize-close]').forEach(el => el.addEventListener('click', closeResizeModal));
  document.getElementById('resizeApplyBtn').addEventListener('click', applyResize);
  document.getElementById('resizeWInput').addEventListener('input', () => onResizeInput('w'));
  document.getElementById('resizeHInput').addEventListener('input', () => onResizeInput('h'));
  document.getElementById('resizeKeepRatio').addEventListener('change', () => {
    const act = document.activeElement;
    onResizeInput(act === document.getElementById('resizeWInput') ? 'w' : 'h');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeResizeModal();
  });
  modal.addEventListener('wheel', e => e.stopPropagation(), { passive: true });
}

function init() {
  applySize(); renderTemplates(); renderStickers(); renderDecorPanel(); renderTextStylePresets(); renderBgPresets(); renderSvgText(); renderDragItems(); applyBackground(); syncFilterToggle(); syncThirdUI(); bindEvents(); bindCropEvents(); bindResizeEvents();
  // 小屏默认收起素材栏，画布优先；大屏保持展开
  if (window.innerWidth < 1024) setPanelCollapsed(true);
  // 字体加载完成后文字实际宽度会变，重算文字命中框
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => renderSvgText());
  // 字体 / 图片加载完成后布局可能变化，再校正一次缩放
  window.addEventListener('load', fitStage);
}
init();
