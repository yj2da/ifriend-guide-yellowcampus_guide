/**
 * I-FRIEND 27th Yellow Campus Festival Booth Guide
 * Theme: 저승사자의 환생 심사소 (Reincarnation Screening Office)
 * Multilingual Data & Mobile-First Interactive Logic
 * Source: 관번부+기획부.md 공식 번역 가이드 기준
 */

const I18N_DATA = {
  ko: {
    nav: {
      brand: "I-FRIEND 27기",
      sub: "국립부경대학교 옐로우 캠퍼스",
      theme: "🎃 테마",
      flow: "🗺️ 순서",
      rules: "🎮 규칙",
      rewards: "🎁 리워드",
      photo: "📸 포토존"
    },
    hero: {
      guideBadge: "🇰🇷 [한국어] 참가자 안내 가이드",
      kicker: "저승사자의",
      megaTitle: "환생 심사소",
      subTheme: "🎃 테마 소개: 저승사자의 환생 심사소",
      desc: "조선의 저승 문이 열려 부경대학교에 출몰한 저승사자! 2개의 지옥 관문을 무사히 통과하고 이승으로 환생하세요!",
      btnFlow: "🗺️ 참여 순서",
      btnRules: "🎮 세부 게임 규칙",
      btnRewards: "🎁 리워드(보상) 안내",
      btnPhoto: "📸 포토존 안내",
      stat1Val: "2개 지옥 관문",
      stat1Lbl: "화탕 & 독사 (각 10초)",
      stat2Val: "ALL PASS 부적",
      stat2Lbl: "선착순 140명 한정",
      stat3Val: "추억의 종이 뽑기",
      stat3Lbl: "1~5등 즉시 수령"
    },
    flow: {
      tag: "PARTICIPATION FLOW",
      title: "🗺️ 참여 순서",
      subtitle: "부스 입장 ➔ 저승 통행증 수령 ➔ 제1관문(화탕지옥) ➔ 제2관문(독사지옥) ➔ 결과 확인 ➔ 기본 보상 ➔ 추억의 종이 뽑기 ➔ 퇴장",
      steps: [
        { num: "01", icon: "🚪", title: "부스 입장", desc: "대기선에 맞추어 부스에 입장합니다." },
        { num: "02", icon: "📜", title: "저승 통행증 수령", desc: "저승사자로부터 '저승 통행증'을 수령합니다." },
        { num: "03", icon: "🔥", title: "제1관문(화탕지옥)", desc: "10초 안에 바구니를 흔들어 중앙 구멍으로 탁구공 4개 이상을 떨어뜨리세요!" },
        { num: "04", icon: "🐍", title: "제2관문(독사지옥)", desc: "10초 안에 오직 촉감만으로 상자 속 '환생 열쇠'를 찾아 밖으로 꺼내세요!" },
        { num: "05", icon: "⚖️", title: "결과 확인", desc: "저승사자 심사관에게 통과 여부를 확인받습니다." },
        { num: "06", icon: "🎁", title: "기본 보상", desc: "ALL PASS 또는 FAIL 결과에 따른 기본 보상을 수령합니다." },
        { num: "07", icon: "🎟️", title: "추억의 종이 뽑기", desc: "뽑기판에서 종이 1개를 뽑아 1~5등 상품을 즉시 수령하세요!" },
        { num: "08", icon: "✨", title: "퇴장", desc: "이승으로 무사히 환생하여 축제를 계속 즐기세요!" }
      ]
    },
    stages: {
      tag: "HELL TRIALS RULE",
      title: "🎮 세부 게임 규칙",
      subtitle: "환생을 위해 반드시 돌파해야 하는 두 개의 지옥 관문 규칙입니다.",
      stage1: {
        badge: "[제1관문: 화탕지옥]",
        timeLimit: "⏱️ 제한시간: 10초",
        title: "사(死)개의 죄업을 떨어뜨려라!",
        ruleLabel: "규칙",
        ruleText: "바구니를 양손으로 잡고, 제한시간 10초 안에 바구니를 흔들어 중앙 구멍으로 탁구공 4개 이상을 떨어뜨리세요!",
        warning: "⚠️ 주의: 탁구공을 손으로 직접 만지거나 구멍에 넣으면 실격입니다."
      },
      stage2: {
        badge: "[제2관문: 독사지옥]",
        timeLimit: "⏱️ 제한시간: 10초",
        title: "촉각의 결계, 환생의 열쇠를 찾아라!",
        ruleLabel: "규칙",
        ruleText: "상자 안에 한쪽 손만 넣고, 제한시간 10초 안에 오직 촉감만으로 '환생 열쇠'를 찾아 밖으로 꺼내세요!",
        warning: "⚠️ 주의: 상자 내부를 훔쳐보거나 양손을 쓰면 안 됩니다."
      },
      practiceLabel: "10초 카운트다운 연습하기",
      btnPractice: "⏱️ 10초 타이머 테스트 연습하기"
    },
    rewards: {
      tag: "REWARDS & PRIZES",
      title: "🎁 리워드(보상) 안내",
      subtitle: "관문 통과 결과에 따른 보상과 추억의 종이 뽑기 안내입니다.",
      allPassTitle: "ALL PASS (2개 관문 모두 성공)",
      allPassItems: [
        "행운부적 스티커 + 코인 초콜릿 + 추억의 종이 뽑기 1회 (※ 스티커는 선착순 140명 한정)"
      ],
      failTitle: "FAIL (1개 이상 실패)",
      failItems: [
        "코인 초콜릿 + 추억의 종이 뽑기 1회"
      ],
      lotteryTitle: "추억의 종이 뽑기",
      lotteryItems: [
        "뽑기판에서 1개를 뽑아 1~5등 상품을 즉시 수령하세요!"
      ]
    },
    photo: {
      tag: "PHOTO ZONE",
      title: "📸 포토존 안내",
      subtitle: "부스 옆에 저승사자와 함께 기념사진을 남길 수 있는 포토존이 마련되어 있습니다! 축제의 잊지 못할 추억을 남겨보세요.",
      cardTitle: "📸 저승사자 기념 포토존",
      cardDesc: "부스 옆에 저승사자와 함께 기념사진을 남길 수 있는 포토존이 마련되어 있습니다! 축제의 잊지 못할 추억을 남겨보세요."
    }
  },

  en: {
    nav: {
      brand: "I-FRIEND 27th",
      sub: "PKNU Yellow Campus Festival",
      theme: "🎃 Theme",
      flow: "🗺️ Flow",
      rules: "🎮 Rules",
      rewards: "🎁 Rewards",
      photo: "📸 Photo"
    },
    hero: {
      guideBadge: "🇺🇸 [English] Participant Guide",
      kicker: "Grim Reaper's",
      megaTitle: "Reincarnation Screening Office",
      subTheme: "🎃 Theme: Grim Reaper's Reincarnation Screening Office",
      desc: "The gates of the underworld have opened at Pukyong National University! Pass through the two hellish trials and reincarnate back to the living world!",
      btnFlow: "🗺️ Participation Flow",
      btnRules: "🎮 Game Rules",
      btnRewards: "🎁 Reward Guide",
      btnPhoto: "📸 Photo Zone Guide",
      stat1Val: "2 Hellish Trials",
      stat1Lbl: "Boiling & Viper (10s each)",
      stat2Val: "Lucky Amulet Sticker",
      stat2Lbl: "First 140 participants only",
      stat3Val: "Paper Lottery Draw",
      stat3Lbl: "1st to 5th place prize"
    },
    flow: {
      tag: "PARTICIPATION FLOW",
      title: "🗺️ Participation Flow",
      subtitle: "Enter Booth ➔ Receive Pass ➔ Stage 1 (Boiling Hell) ➔ Stage 2 (Viper Hell) ➔ Check Results ➔ Basic Reward ➔ Paper Lottery Draw ➔ Exit",
      steps: [
        { num: "01", icon: "🚪", title: "Enter Booth", desc: "Wait in queue and enter the booth as guided." },
        { num: "02", icon: "📜", title: "Receive Pass", desc: "Receive your pass from the Grim Reaper." },
        { num: "03", icon: "🔥", title: "Stage 1 (Boiling Hell)", desc: "Hold the basket with both hands and shake it to drop at least 4 out of 5 ping pong balls within 10s!" },
        { num: "04", icon: "🐍", title: "Stage 2 (Viper Hell)", desc: "Find the 'Reincarnation Key' relying solely on touch within 10s!" },
        { num: "05", icon: "⚖️", title: "Check Results", desc: "Check trial results with the Grim Reaper." },
        { num: "06", icon: "🎁", title: "Basic Reward", desc: "Collect reward depending on ALL PASS or FAIL." },
        { num: "07", icon: "🎟️", title: "Paper Lottery Draw", desc: "Draw a paper slip and instantly receive your 1st to 5th place prize!" },
        { num: "08", icon: "✨", title: "Exit", desc: "Reincarnate safely back to campus life!" }
      ]
    },
    stages: {
      tag: "GAME RULES",
      title: "🎮 Game Rules",
      subtitle: "Pass through the two hellish trials to reincarnate back to the living world!",
      stage1: {
        badge: "[Stage 1: Boiling Hell]",
        timeLimit: "⏱️ Time Limit: 10s",
        title: "Drop the Balls of Sin!",
        ruleLabel: "Rule",
        ruleText: "Hold the basket with both hands and shake it to drop at least 4 out of 5 ping pong balls through the center hole within 10 seconds!",
        warning: "⚠️ Warning: Touching the balls directly with your hands or pushing them in is strictly prohibited."
      },
      stage2: {
        badge: "[Stage 2: Viper Hell]",
        timeLimit: "⏱️ Time Limit: 10s",
        title: "Tactile Barrier: Find the Reincarnation Key!",
        ruleLabel: "Rule",
        ruleText: "Put only one hand into the box and find the 'Reincarnation Key' relying solely on your sense of touch within 10 seconds!",
        warning: "⚠️ Warning: Peeking inside or using both hands is not allowed."
      },
      practiceLabel: "Practice 10-Second Countdown",
      btnPractice: "⏱️ Practice 10s Timer"
    },
    rewards: {
      tag: "REWARD GUIDE",
      title: "🎁 Reward Guide",
      subtitle: "Rewards according to trial results and the Paper Lottery Draw.",
      allPassTitle: "ALL PASS (Cleared both stages)",
      allPassItems: [
        "Lucky Amulet Sticker + Coin Chocolate + 1 Paper Lottery Draw (※ Stickers limited to the first 140 participants)"
      ],
      failTitle: "FAIL (Failed 1 or more)",
      failItems: [
        "Coin Chocolate + 1 Paper Lottery Draw"
      ],
      lotteryTitle: "Paper Lottery",
      lotteryItems: [
        "Draw a paper slip and instantly receive your 1st to 5th place prize!"
      ]
    },
    photo: {
      tag: "PHOTO ZONE",
      title: "📸 Photo Zone Guide",
      subtitle: "A photo zone is available next to the booth where you can take souvenir photos with the Grim Reaper! Capture unforgettable memories of the festival.",
      cardTitle: "📸 Grim Reaper Photo Zone",
      cardDesc: "A photo zone is available next to the booth where you can take souvenir photos with the Grim Reaper! Capture unforgettable memories of the festival."
    }
  },

  jp: {
    nav: {
      brand: "I-FRIEND 27期",
      sub: "釜慶大学校 イエローキャンパス",
      theme: "🎃 テーマ",
      flow: "🗺️ 流れ",
      rules: "🎮 ルール",
      rewards: "🎁 報酬",
      photo: "📸 フォト"
    },
    hero: {
      guideBadge: "🇯🇵 [日本語] 参加者向け案内ガイド",
      kicker: "死神の",
      megaTitle: "転生審査所",
      subTheme: "🎃 テーマ紹介：死神の転生審査所",
      desc: "朝鮮の冥界の扉が開き、釜慶大学校に死神が出現！2つの地獄の関門を無事に突破して現世に転生せよ！",
      btnFlow: "🗺️ 参加の流れ",
      btnRules: "🎮 詳細ゲームルール",
      btnRewards: "🎁 報酬（リワード）案内",
      btnPhoto: "📸 フォトゾーン案内",
      stat1Val: "2つの地獄の関門",
      stat1Lbl: "火湯 & 毒蛇 (各10秒)",
      stat2Val: "幸運のお札ステッカー",
      stat2Lbl: "先着140名限定",
      stat3Val: "思い出のくじ引き",
      stat3Lbl: "1等〜5等の景品をゲット"
    },
    flow: {
      tag: "PARTICIPATION FLOW",
      title: "🗺️ 参加の流れ",
      subtitle: "ブース入場 ➔ 通行証受取 ➔ 第1関門（火湯地獄） ➔ 第2関門（毒蛇地獄） ➔ 結果確認 ➔ 基本報酬 ➔ 思い出のくじ引き ➔ 退場",
      steps: [
        { num: "01", icon: "🚪", title: "ブース入場", desc: "待機列に沿ってブースに入場します。" },
        { num: "02", icon: "📜", title: "通行証受取", desc: "死神から「通行証」を受け取ります。" },
        { num: "03", icon: "🔥", title: "第1関門（火湯地獄）", desc: "制限時間10秒以内にカゴを揺らし、中央の穴にピンポン玉を4個以上落としてください！" },
        { num: "04", icon: "🐍", title: "第2関門（毒蛇地獄）", desc: "制限時間10秒以内に手の感覚だけで「転生のカギ」を見つけて外に出してください！" },
        { num: "05", icon: "⚖️", title: "結果確認", desc: "死神に関門の通過可否を確認してもらいます。" },
        { num: "06", icon: "🎁", title: "基本報酬", desc: "ALL PASSまたはFAILの結果に応じて基本報酬を受け取ります。" },
        { num: "07", icon: "🎟️", title: "思い出のくじ引き", desc: "くじを1枚引いて、1等〜5等の景品をその場でゲット！" },
        { num: "08", icon: "✨", title: "退場", desc: "無事現世へ転生してお祭りを楽しみましょう！" }
      ]
    },
    stages: {
      tag: "GAME RULES",
      title: "🎮 詳細ゲームルール",
      subtitle: "2つの地獄の関門を無事に突破して現世に転生せよ！",
      stage1: {
        badge: "[第1関門：火湯地獄]",
        timeLimit: "⏱️ 制限時間: 10秒",
        title: "罪業のピンポン玉を落とせ！",
        ruleLabel: "ルール",
        ruleText: "カゴを両手で持ち、制限時間10秒以内にカゴを揺らして、中央の穴にピンポン玉を4個以上落としてください！",
        warning: "⚠️ 注意: ピンポン玉を手で直接触ったり、穴に押し込んだりした場合失格です。"
      },
      stage2: {
        badge: "[第2関門：毒蛇地獄]",
        timeLimit: "⏱️ 制限時間: 10秒",
        title: "触覚の結界：転生の鍵を探せ！",
        ruleLabel: "ルール",
        ruleText: "箱の中に片手だけを入れ、制限時間10秒の間に手の感覚だけで「転生のカギ」を見つけて外に出してください！",
        warning: "⚠️ 注意: 箱の中を覗き見たり、両手を使ったりしてはいけません。"
      },
      practiceLabel: "10秒カウントダウン練習",
      btnPractice: "⏱️ 10秒タイマー練習"
    },
    rewards: {
      tag: "REWARDS",
      title: "🎁 報酬（リワード）案内",
      subtitle: "関門通過結果に応じた報酬と思い出のくじ引きのご案内です。",
      allPassTitle: "ALL PASS（2つの関門を両方成功）"
      ,
      allPassItems: [
        "幸運のお札ステッカー ＋ コインチョコレート ＋ 思い出のくじ引き1回 (※ステッカーは先着140名限定)"
      ],
      failTitle: "FAIL（1つ以上失敗）",
      failItems: [
        "コインチョコレート ＋ 思い出のくじ引き1回"
      ],
      lotteryTitle: "思い出のくじ引き",
      lotteryItems: [
        "くじを1枚引いて、1等〜5等の景品をその場でゲット！"
      ]
    },
    photo: {
      tag: "PHOTO ZONE",
      title: "📸 フォトゾーン案内",
      subtitle: "ブースの隣には、死神と一緒に記念撮影ができるフォトゾーンが用意されています！お祭りの忘れられない思い出を残しましょう。",
      cardTitle: "📸 死神 記念フォトゾーン",
      cardDesc: "ブースの隣には、死神と一緒に記念撮影ができるフォトゾーンが用意されています！お祭りの忘れられない思い出を残しましょう。"
    }
  },

  cn: {
    nav: {
      brand: "I-FRIEND 27期",
      sub: "国立釜庆大学 黄色校园",
      theme: "🎃 主题",
      flow: "🗺️ 流程",
      rules: "🎮 规则",
      rewards: "🎁 奖励",
      photo: "📸 拍照"
    },
    hero: {
      guideBadge: "🇨🇳 [简体中文] 参与者指南",
      kicker: "阴间使者的",
      megaTitle: "转生审查所",
      subTheme: "🎃 活动主题：阴间使者的转生审查所",
      desc: "朝鲜时代的阴间之门在釜庆大学开启！顺利通过两个地狱关卡，成功转生回到人间吧！",
      btnFlow: "🗺️ 参与流程",
      btnRules: "🎮 游戏详细规则",
      btnRewards: "🎁 奖励说明",
      btnPhoto: "📸 拍照区指南",
      stat1Val: "两个地狱关卡",
      stat1Lbl: "火汤 & 毒蛇 (各10秒)",
      stat2Val: "幸运护身符贴纸",
      stat2Lbl: "限量 140名 送完为止",
      stat3Val: "回忆纸签抽奖",
      stat3Lbl: "1～5等奖现场领取"
    },
    flow: {
      tag: "PARTICIPATION FLOW",
      title: "🗺️ 参与流程",
      subtitle: "进入摊位 ➔ 领取通行证 ➔ 第一关（火汤地狱）➔ 第二关（毒蛇地狱）➔ 确认结果 ➔ 基本奖励 ➔ 回忆纸签抽奖 ➔ 离场",
      steps: [
        { num: "01", icon: "🚪", title: "进入摊位", desc: "按照排队线有序进入摊位。" },
        { num: "02", icon: "📜", title: "领取通行证", desc: "从阴间使者处领取专属通行证。" },
        { num: "03", icon: "🔥", title: "第一关（火汤地狱）", desc: "双手握住篮子，10秒内晃动篮子，让4颗以上的乒乓球掉进中央洞口！" },
        { num: "04", icon: "🐍", title: "第二关（毒蛇地狱）", desc: "仅将单手伸入箱内，10秒内凭触觉找到「转生钥匙」并拿出箱外！" },
        { num: "05", icon: "⚖️", title: "确认结果", desc: "由阴间使者审查官确认通关结果。" },
        { num: "06", icon: "🎁", title: "基本奖励", desc: "根据 ALL PASS 或 FAIL 领取对应基本奖励。" },
        { num: "07", icon: "🎟️", title: "回忆纸签抽奖", desc: "从抽签板上抽出1张纸签，即可现场领取对应的 1～5等奖品！" },
        { num: "08", icon: "✨", title: "离场", desc: "顺利转生回到人间，继续享受庆典！" }
      ]
    },
    stages: {
      tag: "GAME RULES",
      title: "🎮 游戏详细规则",
      subtitle: "顺利通过两个地狱关卡，成功转生回到人间吧！",
      stage1: {
        badge: "【第一关：火汤地狱】",
        timeLimit: "⏱️ 限定时间: 10秒",
        title: "让死（四）大罪业坠落吧！",
        ruleLabel: "规则",
        ruleText: "双手握住篮子，在限定时间 10秒 内晃动篮子，让 4颗以上的乒乓球 掉进中央洞口！",
        warning: "⚠️ 注意: 严禁直接用手拿球或将球塞进洞内。"
      },
      stage2: {
        badge: "【第二关：毒蛇地狱】",
        timeLimit: "⏱️ 限定时间: 10秒",
        title: "触觉结界：寻找转世的钥匙！",
        ruleLabel: "规则",
        ruleText: "仅将单手伸入箱内，在限定时间 10秒 内凭触觉找到「转生钥匙」并拿出箱外！",
        warning: "⚠️ 注意: 严禁偷看箱内或使用双手。"
      },
      practiceLabel: "10秒倒计时练习",
      btnPractice: "⏱️ 10秒倒计时测试"
    },
    rewards: {
      tag: "REWARDS",
      title: "🎁 奖励说明",
      subtitle: "关卡通过奖励与回忆纸签抽奖说明。",
      allPassTitle: "ALL PASS（两个关卡全部成功）",
      allPassItems: [
        "幸运护身符贴纸 ＋ 金币巧克力 ＋ 回忆纸签抽奖1次 (※ 幸运护身符贴纸限量 140名，送完为止！)"
      ],
      failTitle: "FAIL（一个以上关卡失败）",
      failItems: [
        "金币巧克力 ＋ 回忆纸签抽奖1次"
      ],
      lotteryTitle: "回忆纸签抽奖",
      lotteryItems: [
        "从抽签板上抽出1张纸签，即可现场领取对应的 1～5等奖品！"
      ]
    },
    photo: {
      tag: "PHOTO ZONE",
      title: "📸 拍照区指南",
      subtitle: "摊位旁设有可以和阴间使者一起拍照的拍照区！快来留下属于你的难忘节庆回忆吧！"
      ,
      cardTitle: "📸 阴间使者拍照区",
      cardDesc: "摊位旁设有可以和阴间使者一起拍照的拍照区！快来留下属于你的难忘节庆回忆吧！"
    }
  },

  tw: {
    nav: {
      brand: "I-FRIEND 27期",
      sub: "國立釜慶大學 黃色校園",
      theme: "🎃 主題",
      flow: "🗺️ 流程",
      rules: "🎮 規則",
      rewards: "🎁 獎勵",
      photo: "📸 拍照"
    },
    hero: {
      guideBadge: "🇹🇼 [繁體中文] 參與者指南",
      kicker: "陰間使者的",
      megaTitle: "轉生審查所",
      subTheme: "🎃 活動主題：陰間使者的轉生審查所",
      desc: "朝鮮時代的陰間之門在釜慶大學開啓！順利通過兩個地獄關卡，成功轉生回到人間吧！",
      btnFlow: "🗺️ 參與流程",
      btnRules: "🎮 遊戲詳細規則",
      btnRewards: "🎁 獎勵說明",
      btnPhoto: "📸 拍照區指南",
      stat1Val: "兩個地獄關卡",
      stat1Lbl: "火湯 & 毒蛇 (各10秒)",
      stat2Val: "幸運護身符貼紙",
      stat2Lbl: "限量 140名 送完為止",
      stat3Val: "回憶紙簽抽獎",
      stat3Lbl: "1～5等獎現場領取"
    },
    flow: {
      tag: "PARTICIPATION FLOW",
      title: "🗺️ 參與流程",
      subtitle: "進入攤位 ➔ 領取通行證 ➔ 第一關（火湯地獄）➔ 第二關（毒蛇地獄）➔ 確認結果 ➔ 基本獎勵 ➔ 回憶紙簽抽獎 ➔ 離場",
      steps: [
        { num: "01", icon: "🚪", title: "進入攤位", desc: "按照排隊線有序進入攤位。" },
        { num: "02", icon: "📜", title: "領取通行證", desc: "從陰間使者處領取專屬通行證。" },
        { num: "03", icon: "🔥", title: "第一關（火湯地獄）", desc: "雙手握住籃子，10秒內晃動籃子，讓4顆以上的乒乓球掉進中央洞口！" },
        { num: "04", icon: "🐍", title: "第二關（毒蛇地獄）", desc: "僅將單手伸入箱內，10秒內憑觸覺找到「轉生鑰匙」並拿出箱外！" },
        { num: "05", icon: "⚖️", title: "確認結果", desc: "由陰間使者審查官確認通關結果。" },
        { num: "06", icon: "🎁", title: "基本獎勵", desc: "根據 ALL PASS 或 FAIL 領取對應基本獎勵。" },
        { num: "07", icon: "🎟️", title: "回憶紙簽抽獎", desc: "從抽籤板上抽出1張紙簽，即可現場領取對應的 1～5等獎品！" },
        { num: "08", icon: "✨", title: "離場", desc: "順利轉生回到人間，繼續享受慶典！" }
      ]
    },
    stages: {
      tag: "GAME RULES",
      title: "🎮 遊戲詳細規則",
      subtitle: "順利通過兩個地獄關卡，成功轉生回到人間吧！",
      stage1: {
        badge: "【第一關：火湯地獄】",
        timeLimit: "⏱️ 限定時間: 10秒",
        title: "讓死（四）大罪業墜落吧！",
        ruleLabel: "規則",
        ruleText: "雙手握住籃子，在限定時間 10秒 內晃動籃子，讓 4顆以上的乒乓球 掉進中央洞口！",
        warning: "⚠️ 注意: 嚴禁直接用手拿球或將球塞進洞內。"
      },
      stage2: {
        badge: "【第二關：毒蛇地獄】",
        timeLimit: "⏱️ 限定時間: 10秒",
        title: "觸覺結界：尋找轉世的鑰匙！",
        ruleLabel: "規則",
        ruleText: "僅將單手伸入箱內，在限定時間 10秒 內憑觸覺找到「轉生鑰匙」並拿出箱外！",
        warning: "⚠️ 注意: 嚴禁偷看箱內或使用雙手。"
      },
      practiceLabel: "10秒倒計時練習",
      btnPractice: "⏱️ 10秒倒計時測試"
    },
    rewards: {
      tag: "REWARDS",
      title: "🎁 獎勵說明",
      subtitle: "關卡通過獎勵與回憶紙簽抽獎說明。",
      allPassTitle: "ALL PASS（兩個關卡全部成功）",
      allPassItems: [
        "幸運護身符貼紙 ＋ 金幣巧克力 ＋ 回憶紙簽抽獎1次 (※ 幸運護身符貼紙限量 140名，送完為止！)"
      ],
      failTitle: "FAIL（一個以上關卡失敗）",
      failItems: [
        "金幣巧克力 ＋ 回憶紙簽抽獎1次"
      ],
      lotteryTitle: "回憶紙簽抽獎",
      lotteryItems: [
        "從抽籤板上抽出1張紙簽，即可現場領取對應的 1～5等獎品！"
      ]
    },
    photo: {
      tag: "PHOTO ZONE",
      title: "📸 拍照區指南",
      subtitle: "攤位旁設有可以和陰間使者一起拍照的拍照區！快來留下屬於你的難忘節慶回憶吧！",
      cardTitle: "📸 陰間使者拍照區",
      cardDesc: "攤位旁設有可以和陰間使者一起拍照的拍照區！快來留下屬於你的難忘節慶回憶吧！"
    }
  }
};

/* STATE */
let currentLang = 'ko';
let timerInterval = null;
let timerSeconds = 10;
let audioCtx = null;

/* INIT APP */
document.addEventListener('DOMContentLoaded', () => {
  renderLanguage(currentLang);
  setupEventListeners();
  setupScrollSpy();
});

/* RENDER LANGUAGE TEXT */
function renderLanguage(lang) {
  currentLang = lang;
  const data = I18N_DATA[lang] || I18N_DATA.ko;

  // Language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Navigation
  setText('nav-brand-text', data.nav.brand);
  setText('nav-brand-sub', data.nav.sub);
  setText('nav-link-theme', data.nav.theme);
  setText('nav-link-flow', data.nav.flow);
  setText('nav-link-rules', data.nav.rules);
  setText('nav-link-rewards', data.nav.rewards);
  setText('nav-link-photo', data.nav.photo);

  // Hero Section
  setText('guide-lang-badge', data.hero.guideBadge);
  setText('hero-kicker', data.hero.kicker);
  const megaElem = document.getElementById('hero-mega-title');
  if (megaElem) {
    megaElem.innerHTML = `<span class="title-drip-word">${data.hero.megaTitle}</span>`;
  }
  setText('hero-sub-theme', data.hero.subTheme);
  setText('hero-desc', data.hero.desc);

  setText('btn-flow-hero', data.hero.btnFlow);
  setText('btn-rules-hero', data.hero.btnRules);
  setText('btn-prizes-hero', data.hero.btnRewards);
  setText('btn-photo-hero', data.hero.btnPhoto);

  setText('stat1-val', data.hero.stat1Val);
  setText('stat1-lbl', data.hero.stat1Lbl);
  setText('stat2-val', data.hero.stat2Val);
  setText('stat2-lbl', data.hero.stat2Lbl);
  setText('stat3-val', data.hero.stat3Val);
  setText('stat3-lbl', data.hero.stat3Lbl);

  // Flow Section
  setText('flow-tag', data.flow.tag);
  setText('flow-title', data.flow.title);
  setText('flow-subtitle', data.flow.subtitle);
  renderFlowCards(data.flow.steps);

  // Stages Section
  setText('stages-tag', data.stages.tag);
  setText('stages-title', data.stages.title);
  setText('stages-subtitle', data.stages.subtitle);

  // Stage 1
  setText('s1-badge', data.stages.stage1.badge);
  setText('s1-time', data.stages.stage1.timeLimit);
  setText('s1-title', data.stages.stage1.title);
  setText('s1-rule-lbl', data.stages.stage1.ruleLabel);
  setText('s1-rule-txt', data.stages.stage1.ruleText);
  setText('s1-warn', data.stages.stage1.warning);
  setText('s1-prac-btn', data.stages.btnPractice);

  // Stage 2
  setText('s2-badge', data.stages.stage2.badge);
  setText('s2-time', data.stages.stage2.timeLimit);
  setText('s2-title', data.stages.stage2.title);
  setText('s2-rule-lbl', data.stages.stage2.ruleLabel);
  setText('s2-rule-txt', data.stages.stage2.ruleText);
  setText('s2-warn', data.stages.stage2.warning);
  setText('s2-prac-btn', data.stages.btnPractice);

  // Rewards Section
  setText('rewards-tag', data.rewards.tag);
  setText('rewards-title', data.rewards.title);
  setText('rewards-subtitle', data.rewards.subtitle);

  setText('allpass-title', data.rewards.allPassTitle);
  renderRewardList('allpass-items', data.rewards.allPassItems);

  setText('fail-title', data.rewards.failTitle);
  renderRewardList('fail-items', data.rewards.failItems);

  setText('lottery-title', data.rewards.lotteryTitle);
  renderRewardList('lottery-items', data.rewards.lotteryItems);

  // Photo Section
  setText('photo-tag', data.photo.tag);
  setText('photo-title', data.photo.title);
  setText('photo-subtitle', data.photo.subtitle);
  setText('photo-card-title', data.photo.cardTitle);
  setText('photo-card-desc', data.photo.cardDesc);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* FLOW & REWARDS RENDERING - MOBILE ROADMAP */
function renderFlowCards(steps) {
  const container = document.getElementById('flow-grid');
  if (!container) return;
  container.innerHTML = steps.map((step, idx) => `
    <div class="flow-step-item">
      <div class="flow-card ${idx === 2 || idx === 3 ? 'highlight' : ''} ${idx === 6 ? 'gold-highlight' : ''}">
        <div class="flow-card-head">
          <span class="flow-step-num">STEP ${step.num}</span>
          <span class="flow-icon">${step.icon}</span>
        </div>
        <div class="flow-card-content">
          <h3 class="flow-title">${step.title}</h3>
          <p class="flow-desc">${step.desc}</p>
        </div>
      </div>
      ${idx < steps.length - 1 ? '<div class="flow-step-divider"><span>↓</span></div>' : ''}
    </div>
  `).join('');
}

function renderRewardList(elemId, items) {
  const container = document.getElementById(elemId);
  if (!container) return;
  container.innerHTML = items.map(it => `
    <li class="reward-item">
      <span class="reward-item-icon">✦</span>
      <span>${it}</span>
    </li>
  `).join('');
}

/* TIMER COUNTDOWN MODAL */
function openTimerModal(stageNum) {
  const overlay = document.getElementById('timer-modal-overlay');
  if (overlay) overlay.classList.add('active');
  const title = document.getElementById('timer-stage-title');
  if (title) {
    title.textContent = stageNum === 1 
      ? '제1관문: 화탕지옥 10초 챌린지' 
      : '제2관문: 독사지옥 10초 챌린지';
  }
  resetTimer();
}

function closeTimerModal() {
  const overlay = document.getElementById('timer-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  if (timerInterval) clearInterval(timerInterval);
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerSeconds = 10;
  updateTimerDisplay();

  const display = document.getElementById('timer-countdown-display');
  if (display) display.classList.remove('urgent');

  playBeep(440, 0.1);

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    if (timerSeconds <= 3 && timerSeconds > 0) {
      if (display) display.classList.add('urgent');
      playBeep(700, 0.1);
    } else if (timerSeconds > 0) {
      playBeep(520, 0.05);
    }

    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      if (display) display.textContent = "TIME UP!";
      playBeep(260, 0.4);
      showToast("제한 시간 10초가 종료되었습니다!");
    }
  }, 1000);
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerSeconds = 10;
  updateTimerDisplay();
  const display = document.getElementById('timer-countdown-display');
  if (display) display.classList.remove('urgent');
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-countdown-display');
  if (display) {
    display.textContent = timerSeconds < 10 && timerSeconds >= 0 ? `0${timerSeconds}` : `${timerSeconds}`;
  }
}

/* AUDIO SYNTHESIZER & HELPERS */
function playBeep(freq, duration) {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio fallback
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function copyPhrase(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`복사되었습니다: "${text}"`);
    playBeep(650, 0.08);
  }).catch(() => {
    showToast("복사에 실패했습니다.");
  });
}

/* SETUP EVENT LISTENERS & SCROLL SPY */
function setupEventListeners() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderLanguage(btn.dataset.lang);
      showToast(`언어가 변경되었습니다: ${btn.textContent}`);
    });
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-tabs .tab-btn');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 220;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
        // Scroll active pill into view inside the horizontal pill container
        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        link.classList.remove('active');
      }
    });
  });
}