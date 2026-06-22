export const TARGET = {
  name: "中国科学院深圳先进技术研究院",
  shortName: "深圳先进院",
  address: "深圳市南山区学苑大道1068号",
  lat: 22.594256,
  lon: 113.990775,
};

const MAP_BOUNDS = {
  minLon: 113.725143,
  maxLon: 114.654776,
  minLat: 22.373073,
  maxLat: 22.885019,
};

const rawHousingSites = [
  {
    id: "dongming",
    name: "东明花园",
    area: "南山西丽",
    district: "南山区",
    address: "南山区留仙大道1298号附近",
    lat: 22.5877,
    lon: 113.9664,
    routeFactor: 1.22,
    transit: [18, 30],
    drive: [9, 18],
    metro: "西丽/大学城片区，公交和骑行都比较灵活",
    tags: ["近距离", "西丽优先"],
    note: "静态估算里属于最接近先进院的一组，适合优先实地核验门到门路线。",
  },
  {
    id: "guanming",
    name: "冠铭花园",
    area: "南山西丽",
    district: "南山区",
    address: "南山区西丽街道茶光路74号",
    lat: 22.5752,
    lon: 113.9569,
    routeFactor: 1.28,
    transit: [24, 38],
    drive: [12, 22],
    metro: "茶光路片区，换乘公交到西丽大学城更直接",
    tags: ["近距离", "生活配套"],
    note: "距离不远，但是否顺路取决于茶光路和留仙大道早晚高峰。",
  },
  {
    id: "shenkang",
    name: "深康村",
    area: "福田安托山",
    district: "福田区",
    address: "侨城东路与友邻路交汇处，近深康站",
    lat: 22.5474,
    lon: 113.9997,
    routeFactor: 1.34,
    transit: [34, 50],
    drive: [18, 32],
    metro: "2/8号线深康站，需换乘到西丽方向",
    tags: ["地铁近", "南山边界"],
    note: "地铁站近，但到先进院通常要换乘或接驳，雨天门到门时间会增加。",
  },
  {
    id: "longyue3",
    name: "龙悦居三期",
    area: "龙华北站",
    district: "龙华区",
    address: "龙华区玉龙路与白龙路一带",
    lat: 22.6085,
    lon: 114.0289,
    routeFactor: 1.48,
    transit: [32, 48],
    drive: [18, 34],
    metro: "深圳北站/民丰路片区，可接5号线到大学城方向",
    tags: ["北站片区", "地铁可达"],
    note: "离深圳北站近，公共交通稳定性优于纯公交接驳点。",
  },
  {
    id: "longyue4",
    name: "龙悦居四期",
    area: "龙华北站",
    district: "龙华区",
    address: "龙华区玉龙路与金龙路一带",
    lat: 22.6112,
    lon: 114.0312,
    routeFactor: 1.48,
    transit: [34, 50],
    drive: [19, 36],
    metro: "深圳北站/民丰路片区，可接5号线到大学城方向",
    tags: ["北站片区", "地铁可达"],
    note: "和三期通勤特征接近，实际差异主要来自楼栋到地铁口距离。",
  },
  {
    id: "bijiashan",
    name: "笔架山公馆",
    area: "福田梅林",
    district: "福田区",
    address: "福田区上梅林林园东路10号附近",
    lat: 22.5737,
    lon: 114.061,
    routeFactor: 1.45,
    transit: [44, 62],
    drive: [24, 42],
    metro: "梅林/银湖片区，通勤需跨福田北部",
    tags: ["福田北", "高峰敏感"],
    note: "驾车会受北环、梅林片区拥堵影响，公共交通通常需要换乘。",
  },
  {
    id: "shekou-apartment",
    name: "蛇口人才公寓",
    area: "蛇口",
    district: "南山区",
    address: "南山区蓝天路6号附近",
    lat: 22.4894,
    lon: 113.9384,
    routeFactor: 1.45,
    transit: [56, 76],
    drive: [34, 55],
    metro: "湾厦/东角头片区，去西丽一般需换乘",
    tags: ["蛇口生活", "通勤较长"],
    note: "居住氛围好，但到西丽先进院是跨南山南北向通勤。",
  },
  {
    id: "longhai",
    name: "龙海家园",
    area: "前海",
    district: "南山区",
    address: "南山区前海车辆段上盖，月亮湾大道/前海六路一带",
    lat: 22.536,
    lon: 113.902,
    routeFactor: 1.42,
    transit: [48, 68],
    drive: [30, 50],
    metro: "前海片区，常见路径为地铁换乘或月亮湾大道驾车",
    tags: ["前海", "换乘通勤"],
    note: "直线距离不算特别远，但路线绕行感较明显。",
  },
  {
    id: "longrui",
    name: "龙瑞佳园",
    area: "蛇口赤湾",
    district: "南山区",
    address: "南山区兴海大道1048号附近",
    lat: 22.489,
    lon: 113.9025,
    routeFactor: 1.55,
    transit: [68, 92],
    drive: [42, 66],
    metro: "赤湾/蛇口西南片区，离先进院较远",
    tags: ["南山西南", "通勤较长"],
    note: "南山内但南北跨度大，建议重点看工作日早高峰。",
  },
  {
    id: "mingluyuan",
    name: "安居鸣鹿苑",
    area: "光明长圳",
    district: "光明区",
    address: "光明区玉塘街道长松路166号/光侨路以南科裕路以西一带",
    lat: 22.7245,
    lon: 113.9298,
    routeFactor: 1.44,
    transit: [54, 78],
    drive: [36, 58],
    metro: "近6号线长圳站，需换乘到西丽",
    tags: ["光明", "地铁近"],
    note: "靠近6号线，公共交通相对清晰，但到西丽仍属于跨区通勤。",
  },
  {
    id: "mingluyuan-south",
    name: "安居鸣鹿苑（南区）",
    area: "光明长圳",
    district: "光明区",
    address: "光明区玉塘街道光侨路以南，科裕路以西",
    lat: 22.7188,
    lon: 113.9306,
    routeFactor: 1.42,
    transit: [52, 76],
    drive: [35, 56],
    metro: "近6号线长圳站，南区到站步行时间需看楼栋",
    tags: ["光明", "地铁近"],
    note: "和北区接近，页面单列是为了方便比较楼栋到站距离。",
    offset: [16, 12],
  },
  {
    id: "yinghui",
    name: "凤凰英荟城",
    area: "光明长圳",
    district: "光明区",
    address: "光明区凤凰街道科裕路和光侨路交汇处东北侧",
    lat: 22.7298,
    lon: 113.9334,
    routeFactor: 1.43,
    transit: [56, 82],
    drive: [38, 60],
    metro: "近6号线长圳站，社区体量大",
    tags: ["光明", "大型社区"],
    note: "社区大，出小区到站的步行时间可能显著影响总通勤。",
    offset: [-18, -8],
  },
  {
    id: "huafarongyu",
    name: "金融街华发融御花园",
    area: "光明凤凰城",
    district: "光明区",
    address: "光明区光明大道5号金融街华发融御华府一带",
    lat: 22.7453,
    lon: 113.9302,
    routeFactor: 1.45,
    transit: [62, 88],
    drive: [42, 66],
    metro: "凤凰城/光明大道片区，公共交通需看接驳",
    tags: ["光明北", "通勤较长"],
    note: "比长圳片区更北，通勤弹性主要来自是否能快速接入轨道交通。",
    offset: [18, -10],
  },
  {
    id: "xinghe",
    name: "星河华邸",
    area: "光明中心",
    district: "光明区",
    address: "光明区光明街道东周路东侧、河心路南侧附近",
    lat: 22.7505,
    lon: 113.94,
    routeFactor: 1.45,
    transit: [60, 86],
    drive: [42, 66],
    metro: "近光明大街站片区，需经6号线换乘",
    tags: ["光明中心", "轨道换乘"],
    note: "接近光明中心，生活配套较好，通勤仍应按跨区估算。",
    offset: [0, -22],
  },
  {
    id: "xinghe2",
    name: "星河华邸二期",
    area: "光明中心",
    district: "光明区",
    address: "按星河天地二期/光明大道片区近似估算",
    lat: 22.7475,
    lon: 113.936,
    routeFactor: 1.45,
    transit: [58, 84],
    drive: [41, 64],
    metro: "近光明大街站片区，需经6号线换乘",
    tags: ["光明中心", "轨道换乘"],
    note: "用户原文写“二期”，这里按星河天地二期附近单列，便于比较。",
    offset: [-20, 10],
  },
];

const routeTemplates = {
  "南山西丽": {
    transit: [
      "步行或骑行到留仙大道/茶光路周边公交站",
      "乘公交或短途接驳到大学城、深圳先进院周边站点",
      "下车后沿学苑大道步行到深圳先进院",
    ],
    drive: ["经留仙大道或茶光路进入西丽大学城片区", "到学苑大道后按园区入口落客"],
    cycle: ["沿留仙大道、学苑大道慢行系统骑行", "到园区周边按人行入口进入"],
  },
  "福田安托山": {
    transit: [
      "从深康/安托山片区进站或公交接驳",
      "经 2/8 号线、7 号线或 5 号线方向换乘到西丽/大学城片区",
      "出站后公交接驳或步行到学苑大道1068号",
    ],
    drive: ["经侨香路、北环大道或南坪快速往西丽方向", "转留仙大道/学苑大道到先进院"],
  },
  "龙华北站": {
    transit: [
      "步行或公交到深圳北站/民治片区轨道站",
      "乘 5 号线往大学城/西丽方向",
      "大学城或西丽站出站后接驳到深圳先进院",
    ],
    drive: ["经新区大道、留仙大道或南坪快速往西丽方向", "进入大学城片区后转学苑大道"],
  },
  "福田梅林": {
    transit: [
      "从梅林/银湖片区乘地铁或公交到 5 号线换乘点",
      "换乘到大学城/西丽方向",
      "出站后公交或步行到先进院",
    ],
    drive: ["经北环大道、南坪快速往西丽方向", "高峰期重点关注梅林关和北环拥堵"],
  },
  "蛇口": {
    transit: [
      "从蛇口片区乘 2/8 号线或公交接入南山轨道网络",
      "经后海/世界之窗/西丽等方向换乘到大学城片区",
      "最后一段公交接驳或步行到先进院",
    ],
    drive: ["经南海大道、滨海大道或沙河西路北上", "转留仙大道/学苑大道到先进院"],
  },
  "前海": {
    transit: [
      "从前海片区进站或公交接驳到 5 号线/11 号线换乘网络",
      "换乘到西丽、大学城或留仙洞方向",
      "出站后接驳到学苑大道1068号",
    ],
    drive: ["经月亮湾大道、南坪快速或留仙大道往西丽", "到大学城片区后转学苑大道"],
  },
  "蛇口赤湾": {
    transit: [
      "从赤湾/蛇口西南片区乘轨道或公交北上",
      "经南山中心区换乘到西丽、大学城方向",
      "最后一段公交或步行到先进院",
    ],
    drive: ["经兴海大道、月亮湾大道、南坪快速往西丽", "跨南山南北向通勤，高峰波动较大"],
  },
  "光明长圳": {
    transit: [
      "步行或公交到长圳站/凤凰城片区轨道站",
      "乘 6 号线南下，在深圳北站或相关换乘站接 5 号线",
      "到大学城/西丽片区后接驳至先进院",
    ],
    drive: ["经光侨路、龙大高速或南坪快速往南山西丽", "转留仙大道/学苑大道进入大学城片区"],
  },
  "光明凤凰城": {
    transit: [
      "从凤凰城/光明大道片区接入 6 号线或公交主干线",
      "经深圳北站方向换乘到西丽大学城",
      "到站后公交接驳或步行到先进院",
    ],
    drive: ["经光明大道、龙大高速或南坪快速南下", "高峰期留意光明到龙华段拥堵"],
  },
  "光明中心": {
    transit: [
      "从光明中心/光明大街片区接入 6 号线",
      "经深圳北站方向换乘 5 号线到大学城/西丽",
      "出站后接驳到学苑大道1068号",
    ],
    drive: ["经光明大道、龙大高速或南坪快速往南山", "进入西丽后转留仙大道/学苑大道"],
  },
};

const defaultProfile = {
  environment:
    "以公开地图、小区介绍和配租资料能确认的区位为主，具体楼栋、噪声、商业配套和步行路线建议实地复核。",
  reviews: ["公开信息以交通区位和保障房配套描述为主。", "第三方评价分散，页面只保留可交叉验证的概括。"],
  confidence: "近似到小区/片区，需现场核验",
};

function sourceLinks(site) {
  const query = encodeURIComponent(`${site.name} 深圳 外观 周边`);
  const reviewQuery = encodeURIComponent(`${site.name} 深圳 评价 配套`);
  return [
    {
      label: "外观图搜索",
      url: `https://www.bing.com/images/search?q=${query}`,
    },
    {
      label: "评价与周边搜索",
      url: `https://www.bing.com/search?q=${reviewQuery}`,
    },
  ];
}

function makeRoutes(site) {
  const template = routeTemplates[site.area];
  const routes = [
    {
      mode: "地铁/公交",
      time: formatMinutes(site.transit),
      bestFor: "时间相对稳定，适合工作日常规通勤",
      steps: template.transit,
      note: site.metro,
    },
    {
      mode: "驾车",
      time: formatMinutes(site.drive),
      bestFor: "适合雨天、携带物品或错峰出行",
      steps: template.drive,
      note: "静态路线只描述主要走廊，不包含实时拥堵。",
    },
  ];

  const stats = estimateCommute(site);
  if (stats.cycle) {
    routes.push({
      mode: "骑行",
      time: formatMinutes(stats.cycle),
      bestFor: "近距离房源可作为备选",
      steps: template.cycle ?? ["沿主干道慢行系统到西丽大学城", "到学苑大道后进入园区"],
      note: "雨天和夏季体感会明显影响可行性。",
    });
  }

  if (stats.walk) {
    routes.push({
      mode: "步行",
      time: formatMinutes(stats.walk),
      bestFor: "只建议试走确认真实门到门时间",
      steps: ["沿人行道向西丽大学城/学苑大道方向步行", "到深圳先进院园区入口"],
      note: "步行估算对红绿灯和园区入口位置很敏感。",
    });
  }

  return routes;
}

function makeProfile(site) {
  const areaProfiles = {
    "南山西丽": {
      summary: "靠近西丽大学城和留仙大道，是本清单里通勤先进院最直接的一组。",
      environment: "周边以高校、科研园区、老社区和城市更新片区混合为主，生活便利度取决于具体楼栋到商业街和公交站的距离。",
      reviews: ["通勤优势明显，适合把到岗稳定性放在第一位。", "老片区道路和停车条件可能不如新建大型社区。"],
      confidence: "精确到小区附近",
    },
    "龙华北站": {
      summary: "靠近深圳北站和 5 号线通勤走廊，公共交通可控性较好。",
      environment: "周边居住体量大，商业和交通枢纽资源丰富，但高峰人流密集。",
      reviews: ["轨道交通选择较清晰。", "早晚高峰进出站和接驳耗时需要预留。"],
      confidence: "精确到片区/小区附近",
    },
    "光明长圳": {
      summary: "光明区人才房集中片区，房源体量和新社区感较强，但属于跨区通勤。",
      environment: "新建社区较多，近长圳、凤凰城生活圈，商业成熟度与具体位置有关。",
      reviews: ["房源新、社区尺度大是优势。", "到南山西丽通勤时间较长，换乘和最后一公里影响明显。"],
      confidence: "精确到片区/小区附近",
    },
    "光明凤凰城": {
      summary: "光明北侧新城片区，通勤先进院距离更长。",
      environment: "城市界面较新，适合接受较长通勤换取较新居住环境的人。",
      reviews: ["新城规划和居住环境较规整。", "到西丽需要跨光明、龙华、南山，早高峰不确定性较高。"],
      confidence: "近似到片区",
    },
    "光明中心": {
      summary: "靠近光明中心生活圈，配套优于更偏的产业片区，但通勤仍偏长。",
      environment: "商业、公共服务和轨道资源相对集中，适合重视周末生活便利的人。",
      reviews: ["生活配套有优势。", "工作日跨区通勤成本较高。"],
      confidence: "近似到片区",
    },
    "福田安托山": {
      summary: "位于福田西北，城区配套强，但到先进院需要换乘或跨区驾车。",
      environment: "城市成熟度高，商业、学校、公园资源较丰富。",
      reviews: ["生活便利度通常优于远郊新城。", "轨道到西丽不是一步直达，门到门时间要实测。"],
      confidence: "精确到片区/小区附近",
    },
    "福田梅林": {
      summary: "福田北部成熟片区，驾车和公交都受高峰路况影响。",
      environment: "老城生活便利，靠近山体和梅林生活圈。",
      reviews: ["成熟片区配套完整。", "梅林、北环、南坪方向高峰拥堵敏感。"],
      confidence: "近似到片区",
    },
    "蛇口": {
      summary: "蛇口生活氛围好，但到西丽先进院是南山南北向通勤。",
      environment: "商业、海滨、国际化社区资源较强，居住舒适度高。",
      reviews: ["生活环境和休闲资源是优势。", "通勤时间长，轨道换乘或驾车绕行感明显。"],
      confidence: "近似到片区",
    },
    "前海": {
      summary: "前海片区城市界面新，但到西丽需要换乘或绕行。",
      environment: "靠近前海开发区和月亮湾大道，产业与居住混合。",
      reviews: ["片区发展快，城市界面较新。", "门到门路线受换乘和月亮湾大道通行影响。"],
      confidence: "近似到小区附近",
    },
    "蛇口赤湾": {
      summary: "南山西南角，离先进院较远，适合更重视蛇口/赤湾生活圈的人。",
      environment: "靠近港口、山海和蛇口西南片区，通勤方向偏长。",
      reviews: ["周边山海资源和蛇口生活圈有吸引力。", "到西丽跨越南山南北，公共交通耗时较长。"],
      confidence: "近似到小区附近",
    },
  };

  const profile = areaProfiles[site.area] ?? defaultProfile;
  return {
    ...defaultProfile,
    ...profile,
    photoLinks: sourceLinks(site),
  };
}

export const housingSites = rawHousingSites.map((site) => ({
  ...site,
  routes: makeRoutes(site),
  profile: makeProfile(site),
}));

export function haversineKm(a, b) {
  const earthRadiusKm = 6371;
  const toRadians = (degree) => (degree * Math.PI) / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const h =
    sinLat * sinLat +
    Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export function roundOne(value) {
  return Math.round(value * 10) / 10;
}

export function formatMinutes(range) {
  const [min, max] = range;
  if (max < 60) {
    return `${min}-${max} 分钟`;
  }
  return `${formatMinuteValue(min)}-${formatMinuteValue(max)}`;
}

function formatMinuteValue(value) {
  if (value < 60) {
    return `${value}分钟`;
  }

  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return minutes === 0 ? `${hours}小时` : `${hours}小时${minutes}分钟`;
}

export function classifyCommute(distanceKm) {
  if (distanceKm < 9) {
    return { label: "近", className: "near", summary: "门到门波动较小" };
  }
  if (distanceKm < 18) {
    return { label: "中", className: "middle", summary: "需要关注换乘和高峰" };
  }
  return { label: "远", className: "far", summary: "跨区通勤，建议实测早高峰" };
}

export function estimateCommute(site) {
  const directKm = roundOne(haversineKm(site, TARGET));
  const roadKm = roundOne(Math.max(directKm * site.routeFactor, directKm + 0.8));
  const drive = site.drive ?? estimateDrive(roadKm);
  const transit = site.transit ?? estimateTransit(roadKm);
  const cycle =
    roadKm <= 14
      ? [
          Math.round((roadKm / 17) * 60 + 4),
          Math.round((roadKm / 12) * 60 + 8),
        ]
      : null;
  const walk =
    roadKm <= 5.5
      ? [
          Math.round((roadKm / 5.2) * 60),
          Math.round((roadKm / 4.2) * 60 + 6),
        ]
      : null;

  return {
    directKm,
    roadKm,
    drive,
    transit,
    cycle,
    walk,
    level: classifyCommute(roadKm),
  };
}

function estimateDrive(roadKm) {
  return [
    Math.round((roadKm / 34) * 60 + 8),
    Math.round((roadKm / 22) * 60 + 16),
  ];
}

function estimateTransit(roadKm) {
  return [
    Math.round((roadKm / 24) * 60 + 22),
    Math.round((roadKm / 16) * 60 + 34),
  ];
}

export function projectPointToMap(point) {
  const x =
    ((point.lon - MAP_BOUNDS.minLon) /
      (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) *
    100;
  const y =
    ((MAP_BOUNDS.maxLat - point.lat) /
      (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat)) *
    100;

  return {
    x: Math.min(96, Math.max(5, roundOne(x))),
    y: Math.min(96, Math.max(12, roundOne(y))),
  };
}

export function computePinLayouts(sites, options = {}) {
  const baseLayouts = sites.map((site) => ({
    id: site.id,
    anchorX: projectPointToMap(site).x,
    anchorY: projectPointToMap(site).y,
    dx: 0,
    dy: 0,
  }));
  const avoidPoints = (options.avoidPoints ?? []).map(projectPointToMap);
  const minPinDistance = options.minPinDistance ?? 6.4;
  const minAvoidDistance = options.minAvoidDistance ?? 7.4;
  const iterations = options.iterations ?? 90;

  baseLayouts.forEach((layout) => {
    layout.visualX = layout.anchorX;
    layout.visualY = layout.anchorY;
  });

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    for (let i = 0; i < baseLayouts.length; i += 1) {
      for (let j = i + 1; j < baseLayouts.length; j += 1) {
        pushApart(baseLayouts[i], baseLayouts[j], minPinDistance, i + j);
      }
    }

    baseLayouts.forEach((layout, index) => {
      avoidPoints.forEach((point, avoidIndex) => {
        pushAwayFromPoint(layout, point, minAvoidDistance, index + avoidIndex);
      });
      layout.visualX = layout.anchorX + (layout.visualX - layout.anchorX) * 0.985;
      layout.visualY = layout.anchorY + (layout.visualY - layout.anchorY) * 0.985;
      clampLayout(layout);
    });
  }

  return baseLayouts.map((layout) => {
    const dx = Math.round((layout.visualX - layout.anchorX) * 10) / 10;
    const dy = Math.round((layout.visualY - layout.anchorY) * 10) / 10;
    return {
      id: layout.id,
      anchorX: layout.anchorX,
      anchorY: layout.anchorY,
      dx,
      dy,
      visualX: Math.round((layout.anchorX + dx) * 10) / 10,
      visualY: Math.round((layout.anchorY + dy) * 10) / 10,
    };
  });
}

function pushApart(a, b, minDistance, seed) {
  const vector = normalizedVector(a.visualX - b.visualX, a.visualY - b.visualY, seed);
  const distance = Math.hypot(a.visualX - b.visualX, a.visualY - b.visualY) || 0.01;
  if (distance >= minDistance) {
    return;
  }

  const push = (minDistance - distance) / 2 + 0.08;
  a.visualX += vector.x * push;
  a.visualY += vector.y * push;
  b.visualX -= vector.x * push;
  b.visualY -= vector.y * push;
  clampLayout(a);
  clampLayout(b);
}

function pushAwayFromPoint(layout, point, minDistance, seed) {
  const vector = normalizedVector(layout.visualX - point.x, layout.visualY - point.y, seed);
  const distance = Math.hypot(layout.visualX - point.x, layout.visualY - point.y) || 0.01;
  if (distance >= minDistance) {
    return;
  }

  const push = minDistance - distance + 0.18;
  layout.visualX += vector.x * push;
  layout.visualY += vector.y * push;
  clampLayout(layout);
}

function normalizedVector(x, y, seed) {
  const distance = Math.hypot(x, y);
  if (distance > 0.01) {
    return { x: x / distance, y: y / distance };
  }

  const angle = ((seed * 137.508) % 360) * (Math.PI / 180);
  return { x: Math.cos(angle), y: Math.sin(angle) };
}

function clampLayout(layout) {
  layout.visualX = Math.min(96, Math.max(5, layout.visualX));
  layout.visualY = Math.min(94, Math.max(12, layout.visualY));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function enrichedSites() {
  return housingSites.map((site) => ({ ...site, stats: estimateCommute(site) }));
}

function initApp() {
  const mapPins = document.querySelector("[data-map-pins]");
  const list = document.querySelector("[data-site-list]");
  const detail = document.querySelector("[data-detail]");
  const count = document.querySelector("[data-count]");
  const search = document.querySelector("[data-search]");
  const areaSelect = document.querySelector("[data-area]");
  const sortSelect = document.querySelector("[data-sort]");
  const routeLine = document.querySelector("[data-route-line]");
  const targetMarker = document.querySelector("[data-target-marker]");

  if (!mapPins || !list || !detail) {
    return;
  }

  const sites = enrichedSites();
  let selectedId = "dongming";
  let query = "";
  let area = "all";
  let sort = "distance";

  renderAreaOptions(sites, areaSelect);
  renderTarget(targetMarker);
  render();

  search?.addEventListener("input", (event) => {
    query = event.target.value.trim().toLowerCase();
    render();
  });

  areaSelect?.addEventListener("change", (event) => {
    area = event.target.value;
    render();
  });

  sortSelect?.addEventListener("change", (event) => {
    sort = event.target.value;
    render();
  });

  function selectSite(id) {
    selectedId = id;
    render();
    document.querySelector("[data-detail]")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
    });
  }

  function visibleSites() {
    const filtered = sites.filter((site) => {
      const haystack = [
        site.name,
        site.area,
        site.district,
        site.address,
        site.metro,
        ...site.tags,
      ]
        .join(" ")
        .toLowerCase();
      return (
        (area === "all" || site.area === area) &&
        (!query || haystack.includes(query))
      );
    });

    return filtered.sort((a, b) => {
      if (sort === "drive") {
        return a.stats.drive[0] - b.stats.drive[0];
      }
      if (sort === "transit") {
        return a.stats.transit[0] - b.stats.transit[0];
      }
      return a.stats.roadKm - b.stats.roadKm;
    });
  }

  function render() {
    const visible = visibleSites();
    if (!visible.some((site) => site.id === selectedId) && visible.length > 0) {
      selectedId = visible[0].id;
    }

    const selected = sites.find((site) => site.id === selectedId) ?? sites[0];
    count.textContent = `${visible.length} 个候选点`;
    renderPins(visible, selected);
    renderList(visible, selected);
    renderDetail(selected);
    renderRouteLine(selected);
  }

  function renderPins(visible, selected) {
    const layoutsById = Object.fromEntries(
      computePinLayouts(visible, { avoidPoints: [TARGET] }).map((layout) => [
        layout.id,
        layout,
      ]),
    );
    mapPins.innerHTML = visible
      .map((site, index) => {
        const layout = layoutsById[site.id];
        const isSelected = site.id === selected.id;
        const hasLeader =
          Math.hypot(layout.visualX - layout.anchorX, layout.visualY - layout.anchorY) > 0.8;
        const leaderLength = roundOne(
          Math.hypot(layout.visualX - layout.anchorX, layout.visualY - layout.anchorY),
        );
        const leaderAngle = Math.round(
          (Math.atan2(layout.visualY - layout.anchorY, layout.visualX - layout.anchorX) *
            180) /
            Math.PI,
        );
        return `
          ${
            hasLeader
              ? `<span class="pin-leader" style="left:${layout.anchorX}%; top:${layout.anchorY}%; --leader-length:${leaderLength}%; --leader-angle:${leaderAngle}deg"></span>`
              : ""
          }
          <button
            class="map-pin ${site.stats.level.className}${isSelected ? " is-selected" : ""}"
            type="button"
            style="left:${layout.visualX}%; top:${layout.visualY}%; --anchor-x:${layout.anchorX}%; --anchor-y:${layout.anchorY}%"
            data-pin-id="${escapeHtml(site.id)}"
            aria-label="${escapeHtml(site.name)}，${site.stats.level.label}距离，约${site.stats.roadKm}公里"
            title="${escapeHtml(site.name)}"
          >
            <span class="pin-index">${index + 1}</span>
            <span class="pin-label">${escapeHtml(site.stats.level.label)}</span>
          </button>
        `;
      })
      .join("");

    mapPins.querySelectorAll("[data-pin-id]").forEach((button) => {
      button.addEventListener("click", () => selectSite(button.dataset.pinId));
    });
  }

  function renderList(visible, selected) {
    list.innerHTML = visible
      .map((site, index) => {
        const isSelected = site.id === selected.id;
        return `
          <button
            class="site-row${isSelected ? " is-selected" : ""}"
            type="button"
            data-list-id="${escapeHtml(site.id)}"
            aria-pressed="${isSelected}"
          >
            <span class="row-rank">${index + 1}</span>
            <span class="row-main">
              <span class="row-title">${escapeHtml(site.name)}</span>
              <span class="row-meta">${escapeHtml(site.area)} · 约 ${site.stats.roadKm} km</span>
            </span>
            <span class="row-time">${formatMinutes(site.stats.transit)}</span>
          </button>
        `;
      })
      .join("");

    list.querySelectorAll("[data-list-id]").forEach((button) => {
      button.addEventListener("click", () => selectSite(button.dataset.listId));
    });
  }

  function renderDetail(site) {
    const rows = site.routes
      .map(
        (route) => `
          <article class="route-card">
            <div class="route-card-head">
              <span>${escapeHtml(route.mode)}</span>
              <strong>${escapeHtml(route.time)}</strong>
            </div>
            <p>${escapeHtml(route.bestFor)}</p>
            <ol>
              ${route.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
            </ol>
            <small>${escapeHtml(route.note)}</small>
          </article>
        `,
      )
      .join("");
    const reviewRows = site.profile.reviews
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const photoLinks = site.profile.photoLinks
      .map(
        (link) => `
          <a class="source-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">
            ${escapeHtml(link.label)}
          </a>
        `,
      )
      .join("");

    detail.innerHTML = `
      <div class="detail-heading">
        <p class="detail-kicker">${escapeHtml(site.area)} · ${escapeHtml(site.district)}</p>
        <h2>${escapeHtml(site.name)}</h2>
        <span class="level-badge ${site.stats.level.className}">
          ${escapeHtml(site.stats.level.label)} · ${escapeHtml(site.stats.level.summary)}
        </span>
      </div>

      <dl class="metric-grid">
        <div>
          <dt>估算路程</dt>
          <dd>${site.stats.roadKm} km</dd>
        </div>
        <div>
          <dt>直线距离</dt>
          <dd>${site.stats.directKm} km</dd>
        </div>
        <div>
          <dt>驾车</dt>
          <dd>${formatMinutes(site.stats.drive)}</dd>
        </div>
        <div>
          <dt>地铁/公交</dt>
          <dd>${formatMinutes(site.stats.transit)}</dd>
        </div>
      </dl>

      <div class="detail-block">
        <h3>地址与交通</h3>
        <p>${escapeHtml(site.address)}</p>
        <p>${escapeHtml(site.metro)}</p>
      </div>

      <div class="tag-line">
        ${site.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>

      <div class="detail-block">
        <h3>判断</h3>
        <p>${escapeHtml(site.note)}</p>
      </div>

      <div class="detail-block">
        <h3>房源与周边</h3>
        <p>${escapeHtml(site.profile.summary)}</p>
        <p>${escapeHtml(site.profile.environment)}</p>
        <p><strong>数据可信度：</strong>${escapeHtml(site.profile.confidence)}</p>
      </div>

      <div class="detail-block">
        <h3>可找到的评价摘要</h3>
        <ul class="review-list">${reviewRows}</ul>
      </div>

      <div class="source-grid" aria-label="${escapeHtml(site.name)}外观图和评价来源">
        ${photoLinks}
      </div>

      <div class="route-list" aria-label="${escapeHtml(site.name)}静态路线方案">
        <h3>静态路线方案</h3>
        ${rows}
      </div>
    `;
  }

  function renderRouteLine(site) {
    if (!routeLine) {
      return;
    }
    const target = projectPointToMap(TARGET);
    const selected = projectPointToMap(site);
    routeLine.setAttribute("x1", `${target.x}`);
    routeLine.setAttribute("y1", `${target.y}`);
    routeLine.setAttribute("x2", `${selected.x}`);
    routeLine.setAttribute("y2", `${selected.y}`);
  }
}

function renderAreaOptions(sites, areaSelect) {
  if (!areaSelect) {
    return;
  }
  const areas = [...new Set(sites.map((site) => site.area))];
  areaSelect.innerHTML = [
    `<option value="all">全部片区</option>`,
    ...areas.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`),
  ].join("");
}

function renderTarget(targetMarker) {
  if (!targetMarker) {
    return;
  }
  const point = projectPointToMap(TARGET);
  targetMarker.style.left = `${point.x}%`;
  targetMarker.style.top = `${point.y}%`;
  targetMarker.setAttribute("aria-label", `${TARGET.name}，${TARGET.address}`);
}

if (typeof document !== "undefined") {
  initApp();
}
