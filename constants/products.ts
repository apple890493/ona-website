import type { Product } from '@/constants/types'

export const PRODUCTS: Product[] = [
  {
    id: 'milbon_shampoo',
    name: 'mILBon 洗髮精',
    type: 'shampoo',
    price: 1900,
    items: [
      {
        id: 'milbonS1',
        name: '淨緻洗髮精',
        options: [
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS2',
        name: '豐韌洗髮精',
        options: [
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS3',
        name: '順澤洗髮精',
        options: [
          {
            size: 200,
            price: 900,
          },
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS4',
        name: '潤活洗髮精',
        options: [
          {
            size: 200,
            price: 900,
          },
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS5',
        name: '水妍洗髮精',
        options: [
          {
            size: 200,
            price: 900,
          },
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS6',
        name: '絲柔洗髮精',
        options: [
          {
            size: 200,
            price: 900,
          },
          {
            size: 500,
            price: 1900,
          },
        ],
      },
      {
        id: 'milbonS7',
        name: '金澤洗髮精',
        options: [
          {
            size: 200,
            price: 900,
          },
          {
            size: 500,
            price: 1900,
          },
        ],
      },
    ],
    details: [
      [
        '<淨緻洗髮精> 凈緻系列只有500ml',
        '改善頭皮出油、消除異味',
        '去除含有脂肪酸的皮脂導向健康頭皮環境去除頭皮的「癢、皮屑 • 乾燥 • 油膩 • 氣味」5 大問題',
      ],
      ['<豐韌洗髮精> 豐韌系列只有500ml', '改善髮根扁塌問題導向髮根蓬鬆挺立的秀髮', '適合：蓬鬆、頭髮扁塌者'],
      [
        '<順澤洗髮精>',
        '利用膠原蛋白活性劑導入毛髮中，讓髮絲柔軟水潤，撫平自然卷的毛躁感給予柔軟洗髮質感',
        '適合：自然捲、頭髮毛躁者',
      ],
      ['<潤活洗髮精>', '適用反覆熱燙、熱工具受損將硬化高度受損髮透過洗髮修補毛髮，導向柔軟髮質', '適合：嚴重受損髮'],
      [
        '<金澤洗髮精>',
        '調理髮齡變化的毛髮，恢復充滿光澤與水潤的青春秀髮',
        '適合對象： 光澤不足、髮質枯燥的人',
        '推薦給在意抗齡重生、光澤不足、枯燥的人',
      ],
      [
        '<水妍洗髮精>',
        '適用乾燥丶染後粗硬髮，補補水保濕提升內部結構，導向水潤集中的秀髮',
        '滲透毛髮保持水分導向柔軟集中的秀髮使頭髮內部水分平均分佈，提升柔軟感撫平自然卷的毛躁',
        '適合：乾燥、經常染髮者 / 自然捲、頭髮毛躁者',
      ],
      [
        '<絲柔洗髮精>',
        '針對糾結、粗糙、硬的頭髮，以模擬毛鱗片包覆表面，導向至髮尾光澤滑順的秀髮，如搖曳在爽朗微風中香味四溢花朵的香味。豐厚的泡沫抑制糾結，給予滑順洗髮質感',
        '適合：想要增加保濕、解決糾結者',
      ],
    ],
  },
  {
    id: 'milbon_treatment',
    name: 'mILBon 護髮素',
    type: 'treatment',
    price: 1300,
    items: [
      {
        id: 'milbonT1',
        name: '潤活HEAT護髮素',
        options: [
          {
            size: 200,
            price: 1300,
          },
          {
            size: 500,
            price: 2200,
          },
        ],
      },
      {
        id: 'milbonT2',
        name: '潤活護髮素',
        options: [
          {
            size: 200,
            price: 1300,
          },
          {
            size: 500,
            price: 2200,
          },
        ],
      },
      {
        id: 'milbonT3',
        name: '水妍護髮素',
        options: [
          {
            size: 200,
            price: 1300,
          },
          {
            size: 500,
            price: 2200,
          },
        ],
      },
      {
        id: 'milbonT4',
        name: '金澤護髮素',
        options: [
          {
            size: 200,
            price: 1300,
          },
          {
            size: 500,
            price: 2200,
          },
        ],
      },
    ],
    details: [
      ['<潤活HEAT護髮素>', '修護染燙造成的損傷，高度受損髮也能導向強韌且柔順的秀髮', '適合：嚴重受損髮'],
      ['<潤活護髮素>', '修補燙染過後受損髮 強韌髮絲導向至柔順的秀髮', '適合：受損髮'],
      ['<水妍護髮素>', '添加保濕成分 導向至髮尾水潤集中的秀髮', '適合：乾燥、經常染髮者'],
      [
        '<金澤護髮素>',
        '調理髮齡變化的毛髮，恢復充滿光澤與水潤的青春秀髮',
        '推薦給在意-抗齡重生、光澤不足、枯燥的人',
        '適合：光澤不足、髮質枯燥的人',
      ],
    ],
  },
  {
    id: 'rica_opuntia_treatment',
    name: 'RICA 梨果仙人掌髮膜',
    type: 'treatment',
    price: 1600,
    items: [
      {
        id: 'ricaOpuntiaT1',
        name: '梨果仙人掌髮膜',
        options: [
          {
            size: 150,
            price: 1600,
          },
          {
            size: 1000,
            price: 4300,
          },
        ],
      },
    ],
    details: [['Rica 熱銷排行第一名護髮膜', '革命性護髮概念，獻給受損髮的進化髮膜', '適合：所有髮質']],
  },
  {
    id: 'yunaro_shampoo',
    name: '蘊洛洗髮精',
    type: 'shampoo',
    price: 1200,
    items: [
      {
        id: 'yunaroS1',
        name: '淨化蘊髮露洗髮精',
        options: [
          {
            size: 500,
            price: 1200,
          },
          {
            size: 2000,
            price: 3000,
          },
        ],
      },
      {
        id: 'yunaroS2',
        name: '平衡蘊髮露洗髮精',
        options: [
          {
            size: 500,
            price: 1200,
          },
          {
            size: 2000,
            price: 3000,
          },
        ],
      },
      {
        id: 'yunaroS3',
        name: '甦活蘊髮露洗髮精',
        options: [
          {
            size: 500,
            price: 1200,
          },
          {
            size: 2000,
            price: 3000,
          },
        ],
      },
      {
        id: 'yunaroS4',
        name: '青春蘊髮露洗髮精',
        options: [
          {
            size: 500,
            price: 1200,
          },
          {
            size: 2000,
            price: 3000,
          },
        ],
      },
    ],
    details: [
      ['<淨化蘊髮露洗髮精>', '去油淨化 補充水能量', '適合：油性、雄性禿'],
      ['<平衡蘊髮露洗髮精>', '益⽣菌養髮 補充水份 平衡頭皮油脂', '適合：汗濕、細弱髮、運動後、⽑囊炎'],
      ['<甦活蘊髮露洗髮精>', '專為敏感肌打造 溫和調裡 舒緩頭皮', '適合：敏感、乾性、壓⼒型落髮'],
      ['<青春蘊髮露洗髮精>', '活絡頭皮，提振活力', '適合：熟齡肌、糖化、老化'],
    ],
  },
  {
    id: 'milbon_black_treatment',
    name: 'mILBon 黑凜護髮素',
    type: 'treatment',
    price: 1600,
    items: [
      {
        id: 'milbonBlackT1',
        name: '漾澤護髮素',
        options: [
          {
            size: 200,
            price: 1600,
          },
          {
            size: 500,
            price: 2900,
          },
        ],
      },
      {
        id: 'milbonBlackT2',
        name: '喚彈護髮素',
        options: [
          {
            size: 200,
            price: 1600,
          },
          {
            size: 500,
            price: 2090,
          },
        ],
      },
      {
        id: 'milbonBlackT3',
        name: '柔曜護髮素',
        options: [
          {
            size: 200,
            price: 1600,
          },
          {
            size: 500,
            price: 2900,
          },
        ],
      },
    ],
    details: [
      [
        '<漾澤護髮素>',
        '以緊密包覆的乳霜提高保濕感，導向為集中秀髮',
        '經常染燙導致頭髮乾燥、毛躁糾結者',
        '適合：一般髮、粗硬髮',
      ],
      ['<喚彈護髮素>', '修護平衡毛髮內密度，從內部喚發出彈力', '極度受損髮、脆弱髮、染漂髮者', '適合：脆弱髮、漂髮'],
      ['<柔曜護髮素>', '以富含複合精華的乳霜，導向嚮往的光澤感', '自然捲糾結、頭髮缺乏光澤者'],
    ],
  },
  {
    id: 'rica_essence',
    name: 'RICA 活氧精華',
    type: 'scalp',
    price: 1480,
    items: [
      {
        id: 'ricaEssence1',
        name: '奇蹟活氧精華',
        options: [
          {
            size: 100,
            price: 1480,
          },
        ],
      },
      {
        id: 'ricaEssence2',
        name: '舒活調理精華',
        options: [
          {
            size: 100,
            price: 1480,
          },
        ],
      },
    ],
    details: [
      [
        '<奇蹟活氧精華>',
        '有效強韌頭髮並預防斷裂，增強每一根髮絲溫和活化treatment，為強健髮根專用',
        '獨家成分含有維他命A、B、C、F、PP、H，添加銀杏萃取能抑制5α還原酶發酵，並修復秀髮光澤，天然成分與薄荷、迷迭香、刺山柑、人蔘、水田芥等天然萃取精油，溫和促進treatment循環，強韌髮根，用最天然營養的方式還給替頭皮打造有氧運動使秀髮恢復飽滿的健康狀態',
        '使用方式：洗髮後將頭髮分線，噴抹於髮根，稍加按摩，無須沖洗，建議每天使用持續六周以上',
      ],
      [
        '<舒活調理精華>',
        '西西里島的多種天然活性複方草本植物，平衡頭皮狀態不良而生成的油屑，為油性皮屑肌與問題性頭皮設計 / 調理頭皮專用',
        '添加鼠尾草、麝香草與洋甘菊等植萃精油，天然淨化頭皮消除頭氣以及添加比羅克酮乙醇胺鹽能抑制頭皮屑的特殊成分，內也富含維他命F、B5與洋甘菊中的特殊成分能繼續維持髮絲保有輕盈滑順感',
        '使用方式：取適量均勻塗抹於頭皮髮根，輕柔按摩舒緩，無需沖洗，一週使用三次即可，狀況改善後就可停用',
      ],
    ],
  },
  {
    id: 'milbon_style_spray',
    name: 'mILBon 定型噴霧',
    type: 'styling',
    price: 950,
    items: [
      {
        id: 'milbonStlSpray1',
        name: '輕霧造型噴霧６號',
        options: [
          {
            size: 210,
            price: 950,
          },
        ],
      },
      {
        id: 'milbonStlSpray2',
        name: '極塑造型噴霧１０號',
        options: [
          {
            size: 210,
            price: 950,
          },
        ],
      },
    ],
    details: [
      [
        '<輕霧造型噴霧６號>',
        '創造柔軟輕盈質地、霧感的造型、乾鬆質感',
        '質感表現-霧感、定型力、蓬鬆感，梳得開 瀏海超適合',
        '使用方式：維持髮尾細節，距離髮尾20~30cm，抓起頭髮噴灑維持髮根豐盈，離髮根10~15cm的近距離處，抓捏一小撮一點一點噴灑',
      ],
      ['<極塑造型噴霧１０號>', '質感表現-定型力、速乾'],
    ],
  },
  {
    id: 'yunaro_care',
    name: '蘊洛濃密蘊萃精華',
    type: 'scalp',
    price: 1200,
    items: [
      {
        id: 'yunaroCare',
        name: '濃密蘊萃精華',
        options: [
          {
            size: 100,
            price: 1200,
          },
        ],
      },
    ],
    details: [['<濃密蘊萃精華>', '調節頭皮油脂分泌 活絡髮肌再生力', '適合：油性、雄性禿']],
  },
  {
    id: 'milbon_oil',
    name: 'mILBon 精華露',
    type: 'oil',
    price: 1450,
    items: [
      {
        id: 'milbonOil',
        name: '順澤精華露',
        options: [
          {
            size: 120,
            price: 1450,
          },
        ],
      },
    ],
    details: [
      [
        '<順澤精華露>',
        '乾濕兩用',
        '使頭髮內部柔軟水潤，有效撫平自然捲毛燥，防止頭髮受濕氣影響',
        '適合：自然捲、頭髮毛躁者',
      ],
    ],
  },
  {
    id: 'rica_opuntia_oil',
    name: 'RICA 梨果仙人掌油',
    type: 'oil',
    price: 1500,
    items: [
      {
        id: 'ricaOpuntiaOil',
        name: '梨果仙人掌油',
        options: [
          {
            size: 50,
            price: 1500,
          },
          {
            size: 120,
            price: 2000,
          },
        ],
      },
    ],
    details: [
      [
        '<梨果仙人掌油>',
        '體驗秀髮的有感保養，所有髮質適用',
        '採用嚴選自地中海種植的梨果仙人掌籽，以獨家冷壓技術每一公噸僅能萃取出1公斤的珍貴西西里梨果仙人掌油，高效抗氧化，除了能修復、防護秀髮， 其具有豐沛必須脂肪酸的特性， 是頭皮舒緩與潤澤的好選擇；亦能直接塗抹於肌膚按摩或加入身體乳液中潤澤肌膚，作為日常保養',
        '來自地中海珍稀的梨果仙人掌，無可匹敵的高營養價值',
      ],
    ],
  },
  {
    id: 'milbon_style_cream',
    name: 'mILBon 光亮造型霜８號',
    type: 'styling',
    price: 950,
    items: [
      {
        id: 'milbonStlCream',
        name: '光亮造型霜８號',
        options: [
          {
            size: 150,
            price: 950,
          },
        ],
      },
    ],
    details: [['<光亮造型霜８號>', '溼潤的束髮動感', '質感表現-塑型力、濕潤感、束感']],
  },
  {
    id: 'rica_sea _salt _spray',
    name: 'RICA 火山海鹽噴霧',
    type: 'styling',
    price: 900,
    items: [
      {
        id: 'ricaSeaSaltSpray',
        name: '火山海鹽噴霧',
        options: [
          {
            size: 250,
            price: 900,
          },
        ],
      },
    ],
    details: [
      [
        '<火山海鹽噴霧>',
        '打造海風感的自然髮型。來自西西里的海鹽賦予秀髮霧感與豐盈的效果，有如身在海邊享受著陽光和海水的洗禮',
        '使用方式：噴在頂區吹乾後即可蓬鬆',
      ],
    ],
  },
  {
    id: 'rica_modeling_paste',
    name: 'RICA 火山霧感蠟',
    type: 'styling',
    price: 880,
    items: [
      {
        id: 'ricaModelingPaste',
        name: '火山霧感蠟',
        options: [
          {
            size: 100,
            price: 880,
          },
        ],
      },
    ],
    details: [
      [
        '<火山霧感蠟>',
        '以絕佳彈力與中度支撐力，輕鬆塑型與修飾，並強化髮絲的天然彈性。不油不膩好清潔，無重量無光感，抗UV、抗空氣污染',
        '造型力：★★★☆☆',
      ],
    ],
  },
  {
    id: 'rica_unique_matt_clay',
    name: 'RICA 火山亮感蠟',
    type: 'styling',
    price: 880,
    items: [
      {
        id: 'ricaUniqueMattClay',
        name: '火山亮感蠟',
        options: [
          {
            size: 100,
            price: 880,
          },
        ],
      },
    ],
    details: [
      [
        '<火山亮感蠟>',
        '以絕佳彈力與中度支撐力，輕鬆塑型與修飾， 並強化髮絲的天然健康光澤。 不油不膩好清潔，並抗UV與空氣污染',
        '造型力：★★☆☆☆',
      ],
    ],
  },
  {
    id: 'wella_sculpt_force',
    name: '秒凍膠',
    type: 'styling',
    price: 700,
    items: [
      {
        id: 'wellaSculptForce',
        name: '秒凍膠',
        options: [
          {
            size: 125,
            price: 700,
          },
        ],
      },
    ],
    details: [['<秒凍膠>', '濕潤感造型 線條感極強']],
  },
  {
    id: 'qura',
    name: '雪球藍慕斯',
    type: 'styling',
    price: 900,
    items: [
      {
        id: 'qura',
        name: '雪球藍慕斯',
        options: [
          {
            size: 200,
            price: 900,
          },
        ],
      },
    ],
    details: [['<雪球藍慕斯>', '創造輕盈感的鮮明線條', '適合捲髮造型，完全不黏膩']],
  },
  {
    id: 'tokio_ie_shampoo',
    name: '京喚羽淨露洗髮精',
    type: 'shampoo',
    price: 2100,
    items: [
      {
        id: 'tokioIeS',
        name: '喚羽淨露',
        options: [
          {
            size: 400,
            price: 2100,
          },
        ],
      },
    ],
    details: [
      [
        '<喚羽淨露>',
        '透過專利技術「INKARAMI」結合護理，打造內外兼顧的效果，角蛋白滲透到髮絲深處，徹底修護',
        '獨家配方「喚羽精華」、「外部凝聚結合成分」可以有效將角蛋白滲透進毛髮內部結合，修護受損頭髮',
        '使用方式：取適量於掌心搓開後，溫和的洗淨頭皮後，在洗滌髮絲',
      ],
    ],
  },
  {
    id: 'tokio_ie_treatment',
    name: '京喚羽護髮',
    type: 'treatment',
    price: 2200,
    items: [
      {
        id: 'tokioIeT',
        name: '喚羽凝脂',
        options: [
          {
            size: 400,
            price: 2200,
          },
          {
            size: 700,
            price: 3100,
          },
        ],
      },
    ],
    details: [
      [
        '<喚羽凝脂>',
        '由多種角蛋白(修護劑)賦予頭髮韌性並帶來修護效果，利用健康頭髮擁有的脂質成分進行保濕，同時打造柔順飄逸的秀髮',
        '搭配【喚羽淨露】使用，反應型角蛋白會滲透到頭髮內部進行結合，發揮凝聚結合效果，促進受損頭髮的修護',
        '使用方式：使用喚羽淨露後，塗抹在髮絲上，簡單按壓後停留三分鐘，再沖掉即可',
      ],
    ],
  },
] as const

const TOP_PRODUCTS_ENUM = {
  TOP1: 'yunaro_care',
  TPO2: 'yunaro_shampoo',
  TPO3: 'rica_opuntia_treatment',
  TPO4: 'milbon_shampoo',
  TPO5: 'rica_opuntia_oil',
} as const

export const TOP_PRODUCTS = Object.values(TOP_PRODUCTS_ENUM).map((id) =>
  PRODUCTS.find((product) => product.id === id)
) as Product[]
