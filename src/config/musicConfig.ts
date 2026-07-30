import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: false,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 是否显示右下角悬浮音乐播放器
	showFloatingPlayer: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	/*meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},*/

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "诀别",
				artist: "芳贺敬太(KATE)",
				cover: "assets/music/cover/parting.webp",
				url: "/assets/music/url/parting.webm",
			},
			{
				name: "ARIA",
				artist: "Kalafina",
				cover: "assets/music/cover/ARIA.webp",
				url: "assets/music/url/ARIA.mp3",
				lrc: "assets/music/lrc/ARIA.lrc",
			},
			{
				name: "fairytale",
				artist: "Kalafina",
				cover: "assets/music/cover/fairytale.webp",
				url: "assets/music/url/fairytale.mp3",
				lrc: "assets/music/lrc/fairytale.lrc",
			},
			{
				name: "oblivious",
				artist: "Kalafina",
				cover: "assets/music/cover/oblivious.webp",
				url: "assets/music/url/oblivious.mp3",
				lrc: "assets/music/lrc/oblivious.lrc",
			},
			{
				name: "アレルヤ(哈利路亚)",
				artist: "Kalafina",
				cover: "assets/music/cover/アレルヤ.webp",
				url: "assets/music/url/アレルヤ.mp3",
				lrc: "assets/music/lrc/アレルヤ.lrc",
			},
			{
				name: "恋ひ恋ふ縁",
				artist: "Famishin/KOTOKO",
				cover: "assets/music/cover/千恋万花.webp",
				url: "assets/music/url/FamishinKOTOKO-恋ひ恋ふ縁.mp3",
				lrc: "assets/music/lrc/恋ひ恋ふ縁.lrc",
			},
			{
				name: "キミのとなり(伴你身旁)",
				artist: "Famishin/籐子",
				cover: "assets/music/cover/千恋万花.webp",
				url: "assets/music/url/Famishin籐子-キミのとなり.mp3",
				lrc: "assets/music/lrc/キミのとなり.lrc",
			},
			{
				name: "茉子の日常",
				artist: "高森奈津美",
				cover: "assets/music/cover/千恋万花.webp",
				url: "assets/music/url/高森奈津美-茉子の日常.mp3",
				lrc: "assets/music/lrc/茉子の日常.lrc",
			},

			{
				name: "Mass Destruction",
				artist: "Lotus Juice / 川村ゆみ / アトラスサウンドチーム",
				cover: "assets/music/cover/Lotus Juice 川村ゆみ アトラスサウンドチーム - Mass Destruction.jpg",
				url: "assets/music/url/Lotus Juice 川村ゆみ アトラスサウンドチーム - Mass Destruction.mp3",
				lrc: "assets/music/lrc/Mass Destruction.lrc",
			},
			{
				name: "Rivers In the Desert",
				artist: "Lyn / アトラスサウンドチーム",
				cover: "assets/music/cover/Lyn   アトラスサウンドチーム - Rivers In the Desert.jpg",
				url: "assets/music/url/Lyn   アトラスサウンドチーム - Rivers In the Desert.mp3",
				lrc: "assets/music/lrc/Rivers In the Desert.lrc",
			},
			{
				name: "I believe",
				artist: "Lyn / アトラスサウンドチーム",
				cover: "assets/music/cover/Lyn アトラスサウンドチーム - I believe.jpg",
				url: "assets/music/url/Lyn アトラスサウンドチーム - I believe.mp3",
				lrc: "assets/music/lrc/I believe.lrc",
			},
			{
				name: "僕らの光",
				artist: "Lyn / アトラスサウンドチーム",
				cover: "assets/music/cover/Lyn アトラスサウンドチーム - 僕らの光.jpg",
				url: "assets/music/url/Lyn アトラスサウンドチーム - 僕らの光.mp3",
				lrc: "assets/music/lrc/僕らの光.lrc",
			},
			{
				name: "Gentle Madman",
				artist: "アトラスサウンドチーム",
				cover: "assets/music/cover/アトラスサウンドチーム - Gentle Madman.jpg",
				url: "assets/music/url/アトラスサウンドチーム - Gentle Madman.mp3",
			},
			{
				name: "specialist",
				artist: "アトラスサウンドチーム",
				cover: "assets/music/cover/アトラスサウンドチーム - specialist.jpg",
				url: "assets/music/url/アトラスサウンドチーム - specialist.mp3",
			},
			{
				name: "瞬間、シンフォニー。",
				artist: "40mP / 夏吉ゆうこ",
				cover: "assets/music/cover/40mP 夏吉ゆうこ - 瞬間、シンフォニー。.jpg",
				url: "assets/music/url/40mP 夏吉ゆうこ - 瞬間、シンフォニー。.mp3",
				lrc: "assets/music/lrc/40mP 夏吉ゆうこ - 瞬間、シンフォニー。.lrc",
			},
			{
				name: "Ex-Otogibanashi",
				artist: "ryo (supercell) / かぐや(cv.夏吉ゆうこ) / 早見沙織",
				cover: "assets/music/cover/ryo (supercell) かぐや(cv.夏吉ゆうこ) 早見沙織 - Ex-Otogibanashi.jpg",
				url: "assets/music/url/ryo (supercell) かぐや(cv.夏吉ゆうこ) 早見沙織 - Ex-Otogibanashi.mp3",
				lrc: "assets/music/lrc/ryo (supercell) かぐや(cv.夏吉ゆうこ) 早見沙織 - Ex-Otogibanashi.lrc",
			},
			{
				name: "ray (超かぐや姫！ Version)",
				artist: "かぐや(cv.夏吉ゆうこ) / 早見沙織",
				cover: "assets/music/cover/かぐや(cv.夏吉ゆうこ) 早見沙織 - ray (超かぐや姫！ Version).jpg",
				url: "assets/music/url/かぐや(cv.夏吉ゆうこ) 早見沙織 - ray (超かぐや姫！ Version).mp3",
				lrc: "assets/music/lrc/かぐや(cv.夏吉ゆうこ) 早見沙織 - ray (超かぐや姫！ Version).lrc",
			},
			{
				name: "不思議の国のアリス",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/上海アリス幻樂団 - 不思議の国のアリス.jpg",
				url: "assets/music/url/上海アリス幻樂団 - 不思議の国のアリス.mp3",
			},
			{
				name: "空中に沈む輝針城",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/上海アリス幻樂団 - 空中に沈む輝針城.jpg",
				url: "assets/music/url/上海アリス幻樂団 - 空中に沈む輝針城.mp3",
			},
			{
				name: "御伽の国の鬼が島 ～ Missing Power (Arrange Version あきやまうに)",
				artist: "黄昏フロンティア / 上海アリス幻樂団",
				cover: "assets/music/cover/黄昏フロンティア 上海アリス幻樂団 - 御伽の国の鬼が島 ～ Missing Power (Arrange Version   あきやまうに).jpg",
				url: "assets/music/url/黄昏フロンティア 上海アリス幻樂団 - 御伽の国の鬼が島 ～ Missing Power (Arrange Version   あきやまうに).mp3",
			},
			{
				name: "東方萃夢想 (Arrange Version あきやまうに)",
				artist: "黄昏フロンティア / 上海アリス幻樂団",
				cover: "assets/music/cover/黄昏フロンティア 上海アリス幻樂団 - 東方萃夢想 (Arrange Version   あきやまうに).jpg",
				url: "assets/music/url/黄昏フロンティア 上海アリス幻樂団 - 東方萃夢想 (Arrange Version   あきやまうに).mp3",
			},
			{
				name: "魔女達の舞踏会",
				artist: "黄昏フロンティア / 上海アリス幻樂団",
				cover: "assets/music/cover/黄昏フロンティア 上海アリス幻樂団 - 魔女達の舞踏会.jpg",
				url: "assets/music/url/黄昏フロンティア 上海アリス幻樂団 - 魔女達の舞踏会.mp3",
			},
			{
				name: "今宵は飄逸なエゴイスト ~ Egoistic Flowers",
				artist: "marasy(触手猴)",
				cover: "assets/music/cover/幻想游戏激3.webp",
				url: "assets/music/url/今宵.mp3",
			},
			{
				name: "東方緋想天(ArrangeVersion)",
				artist: "黄昏フロンティア/上海アリス幻樂団",
				cover: "assets/music/cover/东方绯想天.webp",
				url: "assets/music/url/黄昏フロンティア上海アリス幻樂団-東方緋想天(ArrangeVersion).mp3",
			},
			{
				name: "有頂天変 ~ WonderfulHeaven",
				artist: "黄昏フロンティア/上海アリス幻樂団",
				cover: "assets/music/cover/东方绯想天.webp",
				url: "assets/music/url/黄昏フロンティア上海アリス幻樂団-有頂天変.mp3",
			},
			{
				name: "東方緋想天",
				artist: "黄昏フロンティア/上海アリス幻樂団",
				cover: "assets/music/cover/东方绯想天.webp",
				url: "assets/music/url/黄昏フロンティア上海アリス幻樂団-東方緋想天あきやまうに.mp3",
			},
			{
				name: "大空魔術 ~ MagicalAstronomy",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/大空魔术.webp",
				url: "assets/music/url/上海アリス幻樂団-大空魔術MagicalAstronomy.mp3",
			},
			{
				name: "月面ツアーへようこそ(欢迎来到月面旅行团)",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/大空魔术.webp",
				url: "assets/music/url/上海アリス幻樂団-月面ツアーへようこそ.mp3",
			},
			{
				name: "ネクロファンタジア(死亡狂想曲)",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/大空魔术.webp",
				url: "assets/music/url/上海アリス幻樂団-ネクロファンタジア.mp3",
			},
			{
				name: "Demystify Feast",
				artist: "上海アリス幻樂団",
				cover: "assets/music/cover/大空魔术.webp",
				url: "assets/music/url/上海アリス幻樂団-DemystifyFeast.mp3",
			},
		],
	},
};
