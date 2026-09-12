
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    const titleColor = document.getElementById('titleColor');
    const textColor = document.getElementById('textColor');
    const stepTextColor = document.getElementById('stepTextColor');
    const stepBgColor = document.getElementById('stepBgColor');
    const paperBgColor = document.getElementById('paperBgColor');
    const paperBgOn = document.getElementById('paperBgOn');
    const titleFontSize = document.getElementById('titleFontSize');
    const contentFontSize = document.getElementById('contentFontSize');
    const ratioSel = document.getElementById('ratioSel');
    const styleSelect = document.getElementById('styleSelect');
    const fontSelect = document.getElementById('fontSelect');
    const captureArea = document.getElementById('captureArea');
    const paperWrap = document.getElementById('paperWrap');
    const previewTitle = document.getElementById('previewTitle');
    const previewContent = document.getElementById('previewContent');
    const coilSide = document.getElementById('coilSide');

    // 每个模板的推荐字体与配色（切换模板时自动套用，之后仍可手动微调）
    const THEMES = {
        "style-coil":         {name:"线圈笔记本", font:"font-hand",  title:"#1e3a8a", text:"#111111", stepT:"#0b2447", stepB:"#ffec66"},
        "style-simple":       {name:"简约横线本", font:"font-sans",  title:"#1f2937", text:"#374151", stepT:"#ffffff", stepB:"#3b82f6"},
        "style-grid":         {name:"方格手账",   font:"font-hand",  title:"#e8590c", text:"#343a40", stepT:"#493003", stepB:"#ffe8cc"},
        "style-error":        {name:"错题笔记本", font:"font-song",  title:"#c92a2a", text:"#212529", stepT:"#ffffff", stepB:"#e03131"},
        "style-color-journal":{name:"彩边手账",   font:"font-round", title:"#0b7285", text:"#212529", stepT:"#ffffff", stepB:"#ff6b6b"},
        "style-macaron":      {name:"马卡龙便签", font:"font-round", title:"#d6336c", text:"#495057", stepT:"#ffffff", stepB:"#f783ac"},
        "style-vintage":      {name:"复古牛皮纸", font:"font-song",  title:"#7f4f24", text:"#432818", stepT:"#ffffff", stepB:"#a47148"},
        "style-scholar":      {name:"学霸双色笔记", font:"font-sans", title:"#1864ab", text:"#212529", stepT:"#ffffff", stepB:"#4dabf7"},
        "style-apple":        {name:"苹果备忘录", font:"font-sans",  title:"#1a1a1a", text:"#2b2b2b", stepT:"#5c4300", stepB:"#f5b932"},
        "style-insta":        {name:"Instagram渐变卡", font:"font-round", title:"#c13584", text:"#262626", stepT:"#ffffff", stepB:"#e1306c"},
        "style-byte":         {name:"字节范蓝色卡", font:"font-sans", title:"#1f2329", text:"#33383d", stepT:"#ffffff", stepB:"#3370ff"},
        "style-ali":          {name:"阿里橙活力卡", font:"font-sans", title:"#1a1a1a", text:"#333333", stepT:"#ffffff", stepB:"#f97316"},
        "style-business":     {name:"商务简报",   font:"font-sans",  title:"#16324f", text:"#2f3e4e", stepT:"#ffffff", stepB:"#1f4e79"},
        "style-xhs":          {name:"紫色小红书", font:"font-round", title:"#8b5cf6", text:"#333333", stepT:"#8b5cf6", stepB:"#f3eefa", accent:"#8b5cf6"},
        "style-pop":          {name:"波普艺术",   font:"font-round", title:"#111111", text:"#222222", stepT:"#ffd23f", stepB:"#111111"},
        "style-deco":         {name:"艺术装饰",   font:"font-song",  title:"#d4af37", text:"#e8e0cf", stepT:"#0e2a23", stepB:"#d4af37"},
        "style-glass":        {name:"玻璃拟态",   font:"font-round", title:"#4c1d95", text:"#312e81", stepT:"#ffffff", stepB:"#8b5cf6"},
        "style-dreamy":       {name:"梦幻渐变",   font:"font-round", title:"#6d28d9", text:"#4c1d95", stepT:"#ffffff", stepB:"#a78bfa"},
        "style-watercolor":   {name:"水彩艺术",   font:"font-song",  title:"#0b7285", text:"#37474f", stepT:"#ffffff", stepB:"#74c0fc"},
        "style-jp":           {name:"日本杂志",   font:"font-song",  title:"#1a1a1a", text:"#333333", stepT:"#ffffff", stepB:"#cf1322"},
        "style-chinese":      {name:"中国传统",   font:"font-song",  title:"#8c1f28", text:"#2b2b2b", stepT:"#fdf6e3", stepB:"#a52a2a"},
        "style-warm":         {name:"温暖柔和",   font:"font-song",  title:"#a05a2c", text:"#6d4c41", stepT:"#ffffff", stepB:"#e8a87c"},
        "style-gray":         {name:"简约高级灰", font:"font-sans",  title:"#27272a", text:"#52525b", stepT:"#fafafa", stepB:"#71717a"},
        "style-mono":         {name:"极简黑白",   font:"font-sans",  title:"#000000", text:"#1f1f1f", stepT:"#ffffff", stepB:"#000000"},
        "style-nature":       {name:"清新自然",   font:"font-hand",  title:"#2b8a3e", text:"#343a40", stepT:"#ffffff", stepB:"#40c057"},
        "style-fairytale":    {name:"儿童童话",   font:"font-round", title:"#d6336c", text:"#5c4a72", stepT:"#ffffff", stepB:"#ffa8a8"},
        "style-meadow":       {name:"青野晨光",   font:"font-hand",  title:"#2f6b4f", text:"#4a5240", stepT:"#ffffff", stepB:"#69db7c"},
        "style-typewriter":   {name:"复古打字机", font:"font-song",  title:"#3e2c1c", text:"#4a3b2a", stepT:"#f7f3e8", stepB:"#8c7853"},
        "style-dark":         {name:"暗黑科技",   font:"font-sans",  title:"#4dd0e1", text:"#c9d1d9", stepT:"#00252a", stepB:"#00e5ff"},
        "style-cyber":        {name:"赛博朋克",   font:"font-sans",  title:"#ff2e97", text:"#d8d8ff", stepT:"#0a0a12", stepB:"#00f0ff"},
        "style-travel":       {name:"旅行手帐",   font:"font-hand",  title:"#0277bd", text:"#37474f", stepT:"#ffffff", stepB:"#4fc3f7"},
        "style-aurora":       {name:"极光",       font:"font-sans",  title:"#e0fff9", text:"#cfe8e6", stepT:"#062a30", stepB:"#64ffda"},
        "style-sunset":       {name:"落日余晖",   font:"font-round", title:"#ad1457", text:"#4e342e", stepT:"#ffffff", stepB:"#ec407a"},
        "style-comic":        {name:"漫画分格",   font:"font-hand",  title:"#111111", text:"#222222", stepT:"#ffffff", stepB:"#ff5252"},
        "style-rose":         {name:"玫瑰情书",   font:"font-song",  title:"#c2255c", text:"#493240", stepT:"#ffffff", stepB:"#f06595"},
        "style-coffee":       {name:"咖啡物语",   font:"font-song",  title:"#6f4e37", text:"#4e342e", stepT:"#ffffff", stepB:"#a9714b"},
        "style-forest":       {name:"森林秘境",   font:"font-hand",  title:"#1b5e20", text:"#2e3b2e", stepT:"#ffffff", stepB:"#43a047"},
        "style-lemon":        {name:"柠檬汽水",   font:"font-round", title:"#f57f17", text:"#5d4037", stepT:"#ffffff", stepB:"#ffb300"},
        "style-mint":         {name:"薄荷苏打",   font:"font-round", title:"#00695c", text:"#37474f", stepT:"#ffffff", stepB:"#26a69a"},
        "style-lavender":     {name:"薰衣草",     font:"font-song",  title:"#6a4fa3", text:"#4a4458", stepT:"#ffffff", stepB:"#b39ddb"},
        "style-blueprint":    {name:"蓝图图纸",   font:"font-sans",  title:"#ffffff", text:"#dce9f5", stepT:"#0d2c4f", stepB:"#4da3ff"},
        "style-nightmoon":    {name:"星夜",       font:"font-song",  title:"#ffe082", text:"#cfd8ff", stepT:"#101b33", stepB:"#7986cb"},
    };

    function esc(s){
        return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function hexToRgba(hex, a){
        const h = hex.replace('#','');
        const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
        const r = parseInt(full.slice(0,2),16);
        const g = parseInt(full.slice(2,4),16);
        const b = parseInt(full.slice(4,6),16);
        return `rgba(${r},${g},${b},${a})`;
    }

    // 简易标记解析：# 大标题 / ## 小标题 / - 卡片列表 / > 重点框 / >> 总结区 / --- 分割线
    function parseContent(rawText, accent){
        accent = accent || stepBgColor.value;
        const lines = rawText.split('\n');
        let html = '';
        for(let i = 0; i < lines.length; i++){
            const t = lines[i].trim();
            if(!t){ html += '<div style="height:0.55em"></div>'; continue; }
            // 分割线 ---
            if(/^(-{3,}|\*{3,})$/.test(t)){
                html += `<div class="md-divider" style="color:${textColor.value};"><span>✦</span></div>`;
                continue;
            }
            // 总结区 >>
            if(/^>>/.test(t)){
                const text = t.replace(/^>>\s*/, '');
                if(text){
                    html += `<div class="md-summary" style="border-color:${titleColor.value};background:${hexToRgba(stepBgColor.value,.15)};"><span class="md-summary-tag" style="background:${titleColor.value};">📝 总结</span>${esc(text)}</div>`;
                }
                continue;
            }
            // 重点框 >
            if(/^>/.test(t)){
                const text = t.replace(/^>\s*/, '');
                if(text){
                    html += `<div class="md-quote" style="border-left-color:${stepBgColor.value};background:${hexToRgba(stepBgColor.value,.14)};">${esc(text)}</div>`;
                }
                continue;
            }
            // 卡片列表（连续 - 行聚合，带圆形数字序号徽章）
            if(/^-\s/.test(t) || t === '-'){
                let items = '';
                let no = 0;
                while(i < lines.length){
                    const lt = lines[i].trim();
                    if(!(/^-\s/.test(lt) || lt === '-')) break;
                    const text = lt.replace(/^-\s*/, '');
                    if(text){
                        no++;
                        items += `<li><span class="md-num" style="background:${titleColor.value};">${no}</span>${esc(text)}</li>`;
                    }
                    i++;
                }
                i--;
                html += `<ul class="md-cards">${items}</ul>`;
                continue;
            }
            // # 大标题 / ## 小标题
            const m = t.match(/^(#+)\s*(.+)$/);
            if(m){
                if(m[1].length === 1){
                    html += `<p class="md-h1" style="color:${titleColor.value};">${esc(m[2])}</p><div class="md-h1-rule" style="background:linear-gradient(90deg,${accent} 0 44px,rgba(127,127,127,.25) 44px);"></div>`;
                }else{
                    html += `<p style="margin:8px 0 4px;"><span class="step-subtitle" style="background:${stepBgColor.value};color:${stepTextColor.value};">${esc(m[2])}</span></p>`;
                }
                continue;
            }
            // ① 编号 / ▫ 项目符号：悬挂缩进
            if(/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳▫•]/.test(t)){
                html += `<p class="md-li" style="margin:2px 0;">${esc(t)}</p>`;
                continue;
            }
            html += `<p style="margin:2px 0;">${esc(t)}</p>`;
        }
        return html;
    }

    // 切换模板时自动套用该模板的推荐字体与配色
    function applyTheme(){
        const t = THEMES[styleSelect.value];
        if(!t) return;
        fontSelect.value = t.font;
        titleColor.value = t.title;
        textColor.value = t.text;
        stepTextColor.value = t.stepT;
        stepBgColor.value = t.stepB;
        paperBgOn.checked = false; // 新模板恢复默认纸张底色，需要时再勾选自定义
    }

    // 笔记背景色自定义：启用后覆盖模板纸张底色（渐变类模板自动 multiply 混合透色）
    function applyPaperBg(){
        if(paperBgOn.checked){
            paperWrap.style.backgroundColor = paperBgColor.value;
            paperWrap.style.backgroundBlendMode = 'multiply';
        }else{
            paperWrap.style.backgroundColor = '';
            paperWrap.style.backgroundBlendMode = '';
        }
    }
    paperBgColor.addEventListener('input', applyPaperBg);
    paperBgOn.addEventListener('change', applyPaperBg);

    function render(){
        // 切换模板（relative 不可省略：水印层依赖它定位）
        captureArea.className = "overflow-hidden rounded-lg shadow-lg relative " + styleSelect.value;

        // 线圈侧边只在线圈模板显示
        if(styleSelect.value === "style-coil"){
            coilSide.classList.remove("hidden");
        }else{
            coilSide.classList.add("hidden");
        }

        // 应用字体
        paperWrap.className = "note-paper " + fontSelect.value;

        // 纸张比例
        captureArea.style.aspectRatio = ratioSel.value;

        // 标题样式（底部强调色短下划线，参考卡片通用设计）
        const theme = THEMES[styleSelect.value] || {};
        const accent = theme.accent || stepBgColor.value;
        previewTitle.style.color = titleColor.value;
        previewTitle.style.fontSize = titleFontSize.value + "px";
        previewTitle.innerText = titleInput.value;
        previewTitle.style.display = "inline-block";
        previewTitle.style.paddingBottom = "4px";
        previewTitle.style.borderBottom = "4px solid " + accent;

        // 正文样式
        previewContent.style.color = textColor.value;
        previewContent.style.fontSize = contentFontSize.value + "px";
        previewContent.innerHTML = parseContent(contentInput.value, accent);

        // 同步模板库缩略图选中态
        galItems.forEach(it => it.classList.toggle('active', it.classList.contains(styleSelect.value)));

        // 笔记背景色
        applyPaperBg();

        // 水印
        renderWatermark();
    }

    // 所有参数实时预览
    [titleInput, contentInput, titleColor, textColor, stepTextColor, stepBgColor,
     titleFontSize, contentFontSize, ratioSel, fontSelect].forEach(el => {
        el.addEventListener('input', render);
    });

    // 切换模板：自动套用推荐配色后刷新
    styleSelect.addEventListener('change', () => { applyTheme(); render(); });

    // 光标处插入文本
    function insertAtCursor(text){
        const el = contentInput;
        const start = el.selectionStart ?? el.value.length;
        const end = el.selectionEnd ?? start;
        el.value = el.value.slice(0, start) + text + el.value.slice(end);
        el.selectionStart = el.selectionEnd = start + text.length;
        el.focus();
        render();
    }
    document.querySelectorAll('[data-insert]').forEach(btn => {
        btn.addEventListener('click', () => insertAtCursor(btn.dataset.insert));
    });
    document.querySelectorAll('[data-insert-block]').forEach(btn => {
        btn.addEventListener('click', () => insertAtCursor('\n' + btn.dataset.insertBlock + '\n'));
    });

    // ========== 水印功能 ==========
    const wmEnabled = document.getElementById('wmEnabled');
    const wmTypeSel = document.getElementById('wmType');
    const wmText = document.getElementById('wmText');
    const wmImage = document.getElementById('wmImage');
    const wmPosSel = document.getElementById('wmPos');
    const wmLayerSel = document.getElementById('wmLayerSel');
    const wmOpacity = document.getElementById('wmOpacity');
    const wmOpacityVal = document.getElementById('wmOpacityVal');
    const wmSize = document.getElementById('wmSize');
    const wmLayerEl = document.getElementById('wmLayer');
    let wmImageURL = null;

    function renderWatermark(){
        const on = wmEnabled.checked;
        wmLayerEl.classList.toggle('hidden', !on);
        if(!on) return;

        wmLayerEl.innerHTML = '';
        wmLayerEl.style.zIndex = (wmLayerSel.value === 'front') ? '5' : '1';
        wmLayerEl.style.fontFamily = getComputedStyle(paperWrap).fontFamily;

        const opacity = wmOpacity.value / 100;
        const size = parseInt(wmSize.value, 10);
        const w = captureArea.clientWidth;
        const h = captureArea.clientHeight;
        const isImg = wmTypeSel.value === 'image';

        // 生成单个水印元素
        const makeItem = () => {
            if(isImg){
                if(!wmImageURL) return null;
                const img = document.createElement('img');
                img.src = wmImageURL;
                img.style.width = (size * 4) + 'px';
                return img;
            }
            const span = document.createElement('span');
            span.textContent = wmText.value || '水印';
            span.style.color = `rgba(100,100,100,${opacity})`;
            span.style.fontSize = size + 'px';
            span.style.fontWeight = '700';
            span.style.whiteSpace = 'nowrap';
            return span;
        };

        // 放置一个水印元素
        const place = (el, style) => {
            el.style.position = 'absolute';
            Object.assign(el.style, style);
            if(isImg) el.style.opacity = opacity;
            wmLayerEl.appendChild(el);
        };

        if(wmPosSel.value === 'tile'){
            // 平铺：错行网格 + 旋转
            const stepX = Math.max(size * 7, 60);
            const stepY = Math.max(size * 3.4, 40);
            let row = 0;
            for(let y = -stepY; y < h + stepY; y += stepY, row++){
                for(let x = -stepX; x < w + stepX; x += stepX){
                    const el = makeItem();
                    if(!el) return;
                    place(el, {
                        left:(x + (row % 2 ? stepX / 2 : 0)) + 'px',
                        top:y + 'px',
                        transform:'rotate(-24deg)'
                    });
                }
            }
        }else if(wmPosSel.value === 'center'){
            const el = makeItem();
            if(!el) return;
            place(el, {left:'50%', top:'50%', transform:'translate(-50%,-50%) rotate(-18deg)'});
        }else{
            const el = makeItem();
            if(!el) return;
            place(el, {right:'20px', bottom:'20px', transform:'rotate(-12deg)'});
        }
    }

    wmEnabled.addEventListener('change', renderWatermark);
    wmTypeSel.addEventListener('change', () => {
        wmText.classList.toggle('hidden', wmTypeSel.value !== 'text');
        wmImage.classList.toggle('hidden', wmTypeSel.value !== 'image');
        renderWatermark();
    });
    wmText.addEventListener('input', renderWatermark);
    wmPosSel.addEventListener('change', renderWatermark);
    wmLayerSel.addEventListener('change', renderWatermark);
    wmOpacity.addEventListener('input', () => { wmOpacityVal.textContent = wmOpacity.value; renderWatermark(); });
    wmSize.addEventListener('input', renderWatermark);
    wmImage.addEventListener('change', () => {
        const file = wmImage.files[0];
        if(!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            wmImageURL = e.target.result;
            wmEnabled.checked = true;
            renderWatermark();
        };
        reader.readAsDataURL(file);
    });

    // ========== 预览区直接编辑 ==========
    const editInline = document.getElementById('editInline');

    // 预览 DOM → 还原为标记文本（同步回左侧正文输入框）
    function htmlToMarkdown(root){
        const lines = [];
        root.childNodes.forEach(node => {
            if(node.nodeType === Node.TEXT_NODE){
                const t = node.textContent.trim();
                if(t) lines.push(t);
                return;
            }
            if(node.nodeType !== Node.ELEMENT_NODE) return;
            const tag = node.tagName;
            const cls = node.classList;
            if(tag === 'DIV' && cls.contains('md-divider')){ lines.push('---'); return; }
            if(tag === 'DIV' && cls.contains('md-summary')){
                lines.push('>> ' + node.textContent.replace('📝 总结','').trim());
                return;
            }
            if(tag === 'DIV' && cls.contains('md-quote')){ lines.push('> ' + node.textContent.trim()); return; }
            if(tag === 'UL' && cls.contains('md-cards')){
                node.querySelectorAll('li').forEach(li => {
                    const clone = li.cloneNode(true);
                    const num = clone.querySelector('.md-num');
                    if(num) num.remove();
                    lines.push('- ' + clone.textContent.trim());
                });
                return;
            }
            if(tag === 'P'){
                if(cls.contains('md-h1')){ lines.push('# ' + node.textContent.trim()); return; }
                const chip = node.querySelector('.step-subtitle');
                if(chip){
                    const rest = node.textContent.replace(chip.textContent,'').trim();
                    lines.push('## ' + chip.textContent.trim() + (rest ? ' ' + rest : ''));
                    return;
                }
                const t = node.textContent.trim();
                if(t) lines.push(t);
                return;
            }
            const t = node.textContent.trim();
            lines.push(t); // 空行占位 div → 空字符串
        });
        return lines.join('\n');
    }

    function setInlineEdit(on){
        previewTitle.contentEditable = on ? 'true' : 'false';
        previewContent.contentEditable = on ? 'true' : 'false';
        previewTitle.classList.toggle('inline-editing', on);
        previewContent.classList.toggle('inline-editing', on);
        if(!on) render(); // 退出编辑时按源内容重新规范化
    }

    previewContent.addEventListener('input', () => {
        if(!editInline.checked) return;
        contentInput.value = htmlToMarkdown(previewContent);
    });
    previewTitle.addEventListener('input', () => {
        if(!editInline.checked) return;
        titleInput.value = previewTitle.innerText.replace(/\n/g,' ').trim();
    });
    // 粘贴一律转纯文本，避免外部样式破坏排版
    [previewTitle, previewContent].forEach(el => el.addEventListener('paste', e => {
        if(!editInline.checked) return;
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData).getData('text/plain');
        document.execCommand('insertText', false, text);
    }));
    editInline.addEventListener('change', () => setInlineEdit(editInline.checked));

    // 随机换模板
    document.getElementById('randomBtn').addEventListener('click', () => {
        const keys = Object.keys(THEMES).filter(k => k !== styleSelect.value);
        styleSelect.value = keys[Math.floor(Math.random() * keys.length)];
        applyTheme();
        render();
    });

    document.getElementById('downloadBtn').addEventListener('click', async () => {
        const canvas = await html2canvas(captureArea, {
            scale: 2,
            backgroundColor: null,
            useCORS: true
        });
        const link = document.createElement("a");
        link.download = THEMES[styleSelect.value].name + ".png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });

    // 生成模板风格库缩略图
    const galleryGrid = document.getElementById('galleryGrid');
    const galItems = [];
    Object.entries(THEMES).forEach(([key, t]) => {
        const item = document.createElement('div');
        item.className = 'gal-item ' + key;
        item.title = t.name;
        item.innerHTML = `<div class="note-paper ${t.font}">
                <div class="mini-title" style="color:${t.title}">${t.name}</div>
                <div class="mini-body" style="color:${t.text}">
                    <span class="step-subtitle" style="background:${t.stepB};color:${t.stepT};">小标题</span>
                    <p style="margin:3px 0 0;">这里是正文示例文字，展示排版效果。</p>
                </div>
            </div>`;
        item.addEventListener('click', () => {
            styleSelect.value = key;
            applyTheme();
            render();
            document.getElementById('editor').scrollIntoView({behavior:'smooth'});
        });
        galleryGrid.appendChild(item);
        galItems.push(item);
    });

    // 导航滚动高亮
    const navLinks = [...document.querySelectorAll('.nav-link')];
    window.addEventListener('scroll', () => {
        const y = window.scrollY + 90;
        let current = 'editor';
        navLinks.forEach(a => {
            const sec = document.querySelector(a.getAttribute('href'));
            if(sec && sec.offsetTop <= y) current = a.getAttribute('href').slice(1);
        });
        navLinks.forEach(a => a.classList.toggle('nav-active', a.getAttribute('href') === '#' + current));
    });

    // ========== 防盗版保护 ==========
    // 可编辑元素放行（输入框 / 下拉 / 预览区直接编辑）
    function isEditableEl(el){
        if(!el) return false;
        const tag = el.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
    }

    // 禁用右键菜单（可编辑区域除外，保证正常粘贴）
    document.addEventListener('contextmenu', e => {
        if(!isEditableEl(e.target)) e.preventDefault();
    });

    // 禁止拖拽内容出页面（文字 / 图片）
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('drop', e => e.preventDefault());

    // 屏蔽保存 / 查看源码 / 打印 / 开发者工具快捷键
    document.addEventListener('keydown', e => {
        const k = (e.key || '').toLowerCase();
        if((e.ctrlKey || e.metaKey) && ['s','u','p'].includes(k)){
            e.preventDefault();
            return;
        }
        if(e.key === 'F12' || ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i','j','c'].includes(k))){
            e.preventDefault();
        }
    });

    // 控制台版权提示
    try{
        console.log('%c© 2026 @电脑小百科（抖音/B站） 软件精选','color:#2563eb;font-size:14px;font-weight:bold;');
        console.warn('本站内容受版权保护，未经授权禁止复制、保存、镜像或二次分发。');
    }catch(err){}

    render();
