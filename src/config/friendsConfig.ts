import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["个人博客"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["官方文档","使用手册"],
		weight: 9,
		enabled: true,
	},
	{
		title: "宁宁云",
		imgurl: "https://nnyunidc.com/themes/web/nnyun-web/assets/img/favicon.ico",
		desc: "一个小云服务商，质量还行，一分钱一分货",
		siteurl: "https://nnyunidc.com/",
		tags: ["IDC"],
		enabled: true,
		weight: 0
	},
	{
		title: "海参云",
		imgurl: "https://monesy.net/themes/web/yunyoo/assets/img/logo/LOGO.png",
		desc: "一个纯对接的云服务商，总感觉不太靠谱",
		siteurl: "https://monesy.net/",
		tags: ["IDC"],
		enabled: true,
		weight: 0
	},
	{
		title: "昆明湖的博客",
		imgurl: "https://congyu.de/assets/images/avatar.webp",
		desc: "一个柚子厨的博客站",
		siteurl: "https://congyu.de/",
		tags: ["个人博客"],
		enabled: true,
		weight: 1
	},
	{
		title: "ZYX-blog",
		imgurl: "https://zyx-blog.top/_astro/mmexport1754374724013.Cgj7ciy1_Z20JtsY.webp",
		desc: "一位Arch大佬及命令行爱好者的博客站",
		siteurl: "https://zyx-blog.top/",
		tags: ["个人博客"],
		enabled: true,
		weight: 1
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
