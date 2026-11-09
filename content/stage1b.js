/* Chặng I · Nền tảng (A1–A2) — phần 2: Unit 6 trở đi */
window.CONTENT = window.CONTENT || { lessons: [] };
window.CONTENT.lessons.push(
/* ===== Unit 6 · Nhà cửa ===== */
{
  id: "s1u6l1", stage: 1, unit: 6, n: 1, unitTitle: "Nhà cửa",
  title: "Các phòng trong nhà", titleEn: "Rooms",
  words: [
    ["room", "/ruːm/", "danh từ", "phòng", "My room is small but nice.", "Phòng tôi nhỏ nhưng đẹp."],
    ["bedroom", "/ˈbedruːm/", "danh từ", "phòng ngủ", "There are two bedrooms.", "Có hai phòng ngủ."],
    ["kitchen", "/ˈkɪtʃɪn/", "danh từ", "nhà bếp", "The kitchen is next to the living room.", "Bếp ở cạnh phòng khách."],
    ["bathroom", "/ˈbɑːθruːm/", "danh từ", "phòng tắm", "Is there a bathroom upstairs?", "Trên lầu có phòng tắm không?"],
    ["living room", "/ˈlɪvɪŋ ruːm/", "danh từ", "phòng khách", "We watch TV in the living room.", "Chúng tôi xem TV ở phòng khách."],
    ["garden", "/ˈɡɑːdn/", "danh từ", "khu vườn", "There is a small garden.", "Có một khu vườn nhỏ."],
    ["floor", "/flɔː(r)/", "danh từ", "tầng; sàn nhà", "My office is on the third floor.", "Văn phòng tôi ở tầng ba."],
    ["door", "/dɔː(r)/", "danh từ", "cửa ra vào", "Please close the door.", "Làm ơn đóng cửa lại."],
    ["window", "/ˈwɪndəʊ/", "danh từ", "cửa sổ", "There are big windows in the room.", "Phòng có cửa sổ lớn."],
    ["apartment", "/əˈpɑːtmənt/", "danh từ", "căn hộ", "We live in an apartment.", "Chúng tôi sống trong một căn hộ."]
  ],
  grammar: {
    name: "There is / There are", nameEn: "There is / There are",
    desc: "Dùng để nói “có” cái gì ở đâu đó. There is + danh từ số ít, There are + danh từ số nhiều. Khác với have (ai đó sở hữu cái gì).",
    formula: [["+", "<b>There is</b> a kitchen. · There’s a garden."], ["+", "<b>There are</b> two bedrooms."], ["−", "<b>There isn’t</b> a garden. · <b>There aren’t</b> any windows."]],
    examples: [["<b>There is</b> a small garden behind the house.", "Có một khu vườn nhỏ sau nhà."], ["<b>There are</b> three bedrooms in our apartment.", "Căn hộ của chúng tôi có ba phòng ngủ."]],
    mistake: ["In my house have three bedrooms.", "There are three bedrooms in my house.", "Tiếng Việt nói “nhà tôi có…”, tiếng Anh dùng There are… khi nói cái gì tồn tại ở đâu."]
  },
  dialogue: { title: "Giới thiệu nhà mới", lines: [
    ["A", "Is your new apartment big?", "Căn hộ mới của bạn có rộng không?"],
    ["B", "Not very big. There are two bedrooms.", "Không rộng lắm. Có hai phòng ngủ."],
    ["A", "Is there a balcony?", "Có ban công không?"],
    ["B", "Yes, there is. And the kitchen is very nice.", "Có. Và bếp rất đẹp."],
    ["A", "What floor is it on?", "Căn hộ ở tầng mấy?"],
    ["B", "It's on the fifth floor. Come and visit!", "Tầng năm. Đến chơi nhé!"]
  ] },
  drills: {
    fill: [
      ["There ___ a garden behind the house.", "is", ["is", "are", "has"], "a garden số ít: There is.", "Có một khu vườn sau nhà.", "Điền is / are"],
      ["There ___ two bathrooms.", "are", ["are", "is", "have"], "two bathrooms số nhiều: There are.", "Có hai phòng tắm.", "Điền is / are"],
      ["There ___ a lift in my building.", "isn't|is not", ["isn't", "aren't", "don't"], "Phủ định số ít: There isn’t.", "Tòa nhà của tôi không có thang máy.", "Chọn dạng phủ định"]
    ],
    error: [
      ["There is three bedrooms.", 1, "are", ["are", "have", "be"], "three bedrooms số nhiều: There are."],
      ["There have a big window.", 1, "is", ["is", "are", "has"], "Nói “có” tồn tại ở đâu: There is."]
    ]
  },
  pron: [["floor", "/flɔː(r)/", "tầng, sàn"], ["flower", "/ˈflaʊə(r)/", "bông hoa"], "floor: /ɔː/ tròn môi, một âm tiết. flower: /aʊ/ như “ao”, hai âm tiết.", "floor và flower"],
  writing: [
    ["Có hai phòng ngủ.", ["There are two bedrooms."], ["there are", "bedrooms"], ""],
    ["Có một nhà bếp nhỏ.", ["There is a small kitchen.", "There's a small kitchen."], ["there is", "small kitchen"], ""],
    ["Căn hộ của tôi ở tầng năm.", ["My apartment is on the fifth floor."], ["apartment", "fifth floor"], "Tầng: on the + số thứ tự + floor."]
  ]
},
{
  id: "s1u6l2", stage: 1, unit: 6, n: 2, unitTitle: "Nhà cửa",
  title: "Đồ đạc trong nhà", titleEn: "Furniture",
  words: [
    ["bed", "/bed/", "danh từ", "cái giường", "The bed is very comfortable.", "Cái giường rất êm."],
    ["sofa", "/ˈsəʊfə/", "danh từ", "ghế sofa", "There's a grey sofa in the living room.", "Phòng khách có một chiếc sofa màu xám."],
    ["lamp", "/læmp/", "danh từ", "đèn bàn, đèn ngủ", "Turn on the lamp, please.", "Bật đèn lên giúp tôi."],
    ["shelf", "/ʃelf/", "danh từ", "cái kệ", "The books are on the shelf.", "Sách ở trên kệ."],
    ["mirror", "/ˈmɪrə(r)/", "danh từ", "cái gương", "Is there a mirror in the bathroom?", "Phòng tắm có gương không?"],
    ["fridge", "/frɪdʒ/", "danh từ", "tủ lạnh", "There isn't any milk in the fridge.", "Trong tủ lạnh không còn sữa."],
    ["cupboard", "/ˈkʌbəd/", "danh từ", "tủ chén, tủ đựng đồ", "The cups are in the cupboard.", "Cốc ở trong tủ."],
    ["carpet", "/ˈkɑːpɪt/", "danh từ", "tấm thảm", "We have a big carpet.", "Chúng tôi có một tấm thảm lớn."],
    ["picture", "/ˈpɪktʃə(r)/", "danh từ", "bức tranh, ảnh", "There are some pictures on the wall.", "Có vài bức tranh trên tường."],
    ["desk", "/desk/", "danh từ", "bàn làm việc", "My desk is near the window.", "Bàn làm việc của tôi ở gần cửa sổ."]
  ],
  grammar: {
    name: "Is there…? / Are there any…?", nameEn: "Questions with there",
    desc: "Hỏi “có… không?” bằng cách đưa is / are lên đầu. Với danh từ số nhiều trong câu hỏi và câu phủ định dùng any; câu khẳng định dùng some.",
    formula: [["?", "<b>Is there</b> a mirror? — Yes, there <b>is</b>. / No, there <b>isn’t</b>."], ["?", "<b>Are there any</b> chairs? — Yes, there <b>are</b>."], ["+", "There are <b>some</b> pictures."], ["−", "There aren’t <b>any</b> pictures."]],
    examples: [["<b>Is there</b> a desk in your room?", "Phòng bạn có bàn làm việc không?"], ["<b>Are there any</b> books on the shelf? — Yes, there are <b>some</b>.", "Trên kệ có sách không? — Có vài quyển."]],
    mistake: ["Have a fridge in the kitchen?", "Is there a fridge in the kitchen?", "Hỏi “có… không” về đồ vật ở đâu đó dùng Is there…?"]
  },
  dialogue: { title: "Xem phòng cho thuê", lines: [
    ["A", "Is there a bed in the room?", "Trong phòng có giường không?"],
    ["B", "Yes, there is. And there's a desk too.", "Có. Và có cả bàn làm việc."],
    ["A", "Are there any cupboards?", "Có tủ đựng đồ không?"],
    ["B", "There's one big cupboard next to the door.", "Có một tủ lớn cạnh cửa."],
    ["A", "Is there a fridge in the kitchen?", "Bếp có tủ lạnh không?"],
    ["B", "Yes, and it's new.", "Có, và còn mới nữa."]
  ] },
  drills: {
    fill: [
      ["___ there a mirror in the bathroom?", "Is", ["Is", "Are", "Have"], "a mirror số ít: Is there…?", "Phòng tắm có gương không?", "Điền Is / Are"],
      ["Are there ___ chairs in the kitchen?", "any", ["any", "some", "a"], "Câu hỏi với danh từ số nhiều: any.", "Trong bếp có ghế không?", "Điền some / any"],
      ["There are ___ pictures on the wall.", "some", ["some", "any", "a"], "Câu khẳng định số nhiều: some.", "Trên tường có vài bức tranh.", "Điền some / any"]
    ],
    error: [
      ["Are there a lamp on the desk?", 0, "Is", ["Is", "Have", "Do"], "a lamp số ít: Is there…?"],
      ["There aren't some books here.", 2, "any", ["any", "a", "one"], "Câu phủ định dùng any."]
    ]
  },
  pron: [["shelf", "/ʃelf/", "cái kệ"], ["self", "/self/", "bản thân"], "shelf bắt đầu bằng /ʃ/ (chu môi). self bắt đầu bằng /s/ (môi dẹt).", "âm /ʃ/ và /s/"],
  writing: [
    ["Trong phòng có bàn làm việc không?", ["Is there a desk in the room?"], ["is there", "desk"], ""],
    ["Có vài bức tranh trên tường.", ["There are some pictures on the wall."], ["some", "pictures"], ""],
    ["Trong tủ lạnh không có sữa.", ["There isn't any milk in the fridge.", "There is no milk in the fridge.", "There's no milk in the fridge."], ["milk", "fridge"], "milk không đếm được: There isn’t any milk."]
  ]
},
{
  id: "s1u6l3", stage: 1, unit: 6, n: 3, unitTitle: "Nhà cửa",
  title: "Đồ vật ở đâu?", titleEn: "Where is it?",
  words: [
    ["next to", "/nekst tuː/", "giới từ", "bên cạnh", "The lamp is next to the bed.", "Đèn ở cạnh giường."],
    ["between", "/bɪˈtwiːn/", "giới từ", "ở giữa (hai vật)", "The table is between the two chairs.", "Cái bàn ở giữa hai cái ghế."],
    ["behind", "/bɪˈhaɪnd/", "giới từ", "phía sau", "The garden is behind the house.", "Khu vườn ở sau nhà."],
    ["in front of", "/ɪn ˈfrʌnt əv/", "giới từ", "phía trước", "There's a car in front of the door.", "Có một chiếc xe trước cửa."],
    ["under", "/ˈʌndə(r)/", "giới từ", "bên dưới", "The cat is under the table.", "Con mèo ở dưới bàn."],
    ["above", "/əˈbʌv/", "giới từ", "phía trên (không chạm)", "There's a clock above the door.", "Có một cái đồng hồ phía trên cửa."],
    ["opposite", "/ˈɒpəzɪt/", "giới từ", "đối diện", "The bank is opposite the school.", "Ngân hàng đối diện trường học."],
    ["corner", "/ˈkɔːnə(r)/", "danh từ", "góc", "The desk is in the corner.", "Bàn làm việc ở trong góc."],
    ["wall", "/wɔːl/", "danh từ", "bức tường", "There's a picture on the wall.", "Có một bức tranh trên tường."],
    ["near", "/nɪə(r)/", "giới từ", "gần", "Is there a market near here?", "Gần đây có chợ không?"]
  ],
  grammar: {
    name: "Giới từ chỉ nơi chốn", nameEn: "Prepositions of place",
    desc: "Dùng để nói đồ vật ở đâu. in (trong), on (trên, có chạm), under (dưới), next to (cạnh), between… and… (giữa), behind (sau), in front of (trước), opposite (đối diện).",
    formula: [["·", "<b>in</b> the box · <b>on</b> the table · <b>under</b> the bed"], ["·", "<b>next to</b> the door · <b>behind</b> the house"], ["·", "<b>between</b> A <b>and</b> B · <b>in front of</b> the TV"], ["?", "<b>Where is</b> my key? — It’s <b>on</b> the shelf."]],
    examples: [["The cat is <b>under</b> the table.", "Con mèo ở dưới bàn."], ["The sofa is <b>between</b> the lamp <b>and</b> the window.", "Ghế sofa ở giữa cái đèn và cửa sổ."]],
    mistake: ["The picture is in the wall.", "The picture is on the wall.", "Treo trên tường (có chạm vào tường) dùng on."]
  },
  dialogue: { title: "Tìm chìa khóa", lines: [
    ["A", "Where are my keys?", "Chìa khóa của anh đâu rồi?"],
    ["B", "Are they on the table?", "Có ở trên bàn không?"],
    ["A", "No, they aren't. I can't find them.", "Không có. Anh không tìm thấy."],
    ["B", "Look under the sofa!", "Tìm dưới ghế sofa xem!"],
    ["A", "Not there. Oh, they're next to the TV!", "Không có. À, nó ở cạnh cái TV!"],
    ["B", "Put them on the shelf near the door.", "Để nó lên kệ gần cửa đi."]
  ] },
  drills: {
    fill: [
      ["The cat is ___ the bed. (dưới)", "under", ["under", "on", "above"], "Ở dưới: under.", "Con mèo ở dưới giường.", "Chọn giới từ"],
      ["There's a picture ___ the wall.", "on", ["on", "in", "at"], "Treo trên tường: on the wall.", "Có một bức tranh trên tường.", "Chọn giới từ"],
      ["The bank is ___ the school. (đối diện)", "opposite", ["opposite", "behind", "between"], "Đối diện: opposite.", "Ngân hàng đối diện trường học.", "Chọn giới từ"]
    ],
    error: [
      ["The table is between the sofa or the TV.", 6, "and", ["and", "with", "to"], "Cấu trúc: between A and B."],
      ["My keys are in the table.", 3, "on", ["on", "at", "under"], "Trên mặt bàn: on the table."]
    ]
  },
  pron: [["wall", "/wɔːl/", "bức tường"], ["well", "/wel/", "tốt; cái giếng"], "wall: /ɔː/ tròn môi, kéo dài. well: /e/ ngắn, môi dẹt.", "âm /ɔː/ và /e/"],
  writing: [
    ["Con mèo ở dưới bàn.", ["The cat is under the table."], ["cat", "under"], ""],
    ["Đèn ở cạnh giường.", ["The lamp is next to the bed."], ["lamp", "next to"], ""],
    ["Gần đây có chợ không?", ["Is there a market near here?"], ["is there", "near here"], ""]
  ]
},
{
  id: "s1u6l4", stage: 1, unit: 6, n: 4, unitTitle: "Nhà cửa",
  title: "Thuê nhà", titleEn: "Renting a place",
  words: [
    ["rent", "/rent/", "danh từ, động từ", "tiền thuê; thuê", "The rent is five million a month.", "Tiền thuê là năm triệu một tháng."],
    ["bright", "/braɪt/", "tính từ", "sáng sủa", "The living room is very bright.", "Phòng khách rất sáng sủa."],
    ["dark", "/dɑːk/", "tính từ", "tối", "The bedroom is a bit dark.", "Phòng ngủ hơi tối."],
    ["modern", "/ˈmɒdn/", "tính từ", "hiện đại", "It's a modern apartment.", "Đó là một căn hộ hiện đại."],
    ["comfortable", "/ˈkʌmftəbl/", "tính từ", "thoải mái, tiện nghi", "The sofa is comfortable.", "Ghế sofa ngồi rất thoải mái."],
    ["clean", "/kliːn/", "tính từ", "sạch sẽ", "The kitchen is very clean.", "Bếp rất sạch sẽ."],
    ["noisy", "/ˈnɔɪzi/", "tính từ", "ồn ào", "The street is noisy at night.", "Con phố ồn ào vào ban đêm."],
    ["neighbor", "/ˈneɪbə(r)/", "danh từ", "hàng xóm", "My neighbors are friendly.", "Hàng xóm của tôi thân thiện."],
    ["balcony", "/ˈbælkəni/", "danh từ", "ban công", "There's a balcony with a nice view.", "Có ban công nhìn ra cảnh đẹp."],
    ["stairs", "/steəz/", "danh từ", "cầu thang", "The stairs are next to the lift.", "Cầu thang ở cạnh thang máy."]
  ],
  grammar: {
    name: "How many…? và tính từ miêu tả nhà", nameEn: "How many…are there?",
    desc: "Hỏi số lượng đồ vật đếm được: How many + danh từ số nhiều + are there? Miêu tả nhà dùng to be + tính từ, có thể thêm very, quite, a bit.",
    formula: [["?", "<b>How many</b> bedrooms <b>are there</b>?"], ["✓", "There are three. · There’s only one."], ["·", "It’s <b>very</b> bright. · It’s <b>a bit</b> noisy."]],
    examples: [["<b>How many</b> rooms <b>are there</b>? — <b>There are</b> four.", "Có mấy phòng? — Có bốn phòng."], ["The bedroom is <b>a bit</b> dark, but it’s quiet.", "Phòng ngủ hơi tối nhưng yên tĩnh."]],
    mistake: ["How many bedroom are there?", "How many bedrooms are there?", "Sau How many luôn là danh từ số nhiều."]
  },
  dialogue: { title: "Hỏi thuê căn hộ", lines: [
    ["A", "How many bedrooms are there?", "Căn hộ có mấy phòng ngủ?"],
    ["B", "There are two. Both are bright and clean.", "Có hai phòng. Cả hai đều sáng và sạch."],
    ["A", "Is the street noisy?", "Con phố có ồn không?"],
    ["B", "A bit, but the bedrooms are at the back.", "Hơi ồn, nhưng phòng ngủ ở phía sau."],
    ["A", "How much is the rent?", "Tiền thuê bao nhiêu?"],
    ["B", "It's seven million a month.", "Bảy triệu một tháng."]
  ] },
  drills: {
    fill: [
      ["How ___ bedrooms are there?", "many", ["many", "much", "old"], "Danh từ đếm được số nhiều: How many.", "Có mấy phòng ngủ?", "Chọn từ đúng"],
      ["How many rooms ___ there?", "are", ["are", "is", "have"], "How many + số nhiều + are there?", "Có bao nhiêu phòng?", "Điền is / are"],
      ["The street is ___ noisy at night.", "a bit", ["a bit", "a lot", "much"], "Hơi (mức độ nhẹ): a bit + tính từ.", "Con phố hơi ồn vào ban đêm.", "Chọn từ đúng"]
    ],
    error: [
      ["How many bedroom are there?", 2, "bedrooms", ["bedrooms", "bedroomes", "bedroom's"], "Sau How many dùng danh từ số nhiều."],
      ["How much rooms are there?", 1, "many", ["many", "lot", "more"], "rooms đếm được: How many."]
    ]
  },
  pron: [["rent", "/rent/", "tiền thuê"], ["rain", "/reɪn/", "mưa"], "rent: /e/ ngắn và có âm cuối /nt/. rain: /eɪ/ như “ây”, âm cuối /n/.", "rent và rain"],
  writing: [
    ["Có mấy phòng ngủ?", ["How many bedrooms are there?"], ["how many", "bedrooms"], ""],
    ["Phòng khách rất sáng sủa.", ["The living room is very bright."], ["living room", "bright"], ""],
    ["Tiền thuê là năm triệu một tháng.", ["The rent is five million a month.", "The rent is five million dong a month."], ["rent", "a month"], ""]
  ]
},
{
  id: "s1u6l5", stage: 1, unit: 6, n: 5, unitTitle: "Nhà cửa",
  title: "Căn hộ mới của tôi", titleEn: "My new apartment",
  words: [
    ["move", "/muːv/", "động từ", "chuyển (nhà)", "We move next month.", "Tháng sau chúng tôi chuyển nhà."],
    ["lift", "/lɪft/", "danh từ", "thang máy", "Is there a lift in the building?", "Tòa nhà có thang máy không?"],
    ["parking", "/ˈpɑːkɪŋ/", "danh từ", "chỗ đỗ xe", "There's free parking for residents.", "Có chỗ đỗ xe miễn phí cho cư dân."],
    ["area", "/ˈeəriə/", "danh từ", "khu vực", "It's a quiet area.", "Đó là một khu vực yên tĩnh."],
    ["convenient", "/kənˈviːniənt/", "tính từ", "thuận tiện", "The location is very convenient.", "Vị trí rất thuận tiện."],
    ["furniture", "/ˈfɜːnɪtʃə(r)/", "danh từ", "đồ nội thất", "The apartment has new furniture.", "Căn hộ có đồ nội thất mới."],
    ["plant", "/plɑːnt/", "danh từ", "cây (trồng)", "There are plants on the balcony.", "Có cây xanh ngoài ban công."],
    ["light", "/laɪt/", "danh từ", "ánh sáng; đèn", "The room gets a lot of light.", "Căn phòng có nhiều ánh sáng."],
    ["space", "/speɪs/", "danh từ", "không gian, chỗ trống", "There isn't much space in the kitchen.", "Bếp không có nhiều chỗ."],
    ["decorate", "/ˈdekəreɪt/", "động từ", "trang trí", "We decorate the room together.", "Chúng tôi cùng nhau trang trí phòng."]
  ],
  grammar: {
    name: "Ôn tập: nhà cửa", nameEn: "Review: there is / are, prepositions",
    desc: "Tổng hợp Unit 6: there is / there are, câu hỏi Is there / Are there any, some / any, How many, và giới từ nơi chốn.",
    formula: [["+", "<b>There is</b> a lift. · <b>There are</b> some plants."], ["?", "<b>Is there</b>…? · <b>Are there any</b>…? · <b>How many</b>…?"], ["·", "<b>next to</b> · <b>between</b> · <b>opposite</b> · <b>near</b>"]],
    examples: [["<b>There are some</b> plants <b>on</b> the balcony.", "Có vài cây xanh ngoài ban công."], ["The building is <b>near</b> a park and <b>opposite</b> a school.", "Tòa nhà gần công viên và đối diện trường học."]],
    mistake: ["There is many plants.", "There are many plants.", "many plants là số nhiều: There are."]
  },
  dialogue: { title: "Rủ bạn đến nhà mới", lines: [
    ["A", "I hear you have a new apartment!", "Nghe nói bạn có căn hộ mới!"],
    ["B", "Yes! We move in on Saturday.", "Đúng vậy! Thứ Bảy này chúng tôi dọn vào."],
    ["A", "Is it in a good area?", "Có ở khu tốt không?"],
    ["B", "Yes, it's near a park and very convenient.", "Có, gần công viên và rất thuận tiện."],
    ["A", "Do you need help with the furniture?", "Bạn có cần giúp chuyển đồ đạc không?"],
    ["B", "That would be great, thank you!", "Vậy thì tuyệt quá, cảm ơn bạn!"]
  ] },
  drills: {
    fill: [
      ["There ___ some plants on the balcony.", "are", ["are", "is", "has"], "some plants số nhiều: There are.", "Có vài cây xanh ngoài ban công.", "Điền is / are"],
      ["Is ___ a lift in the building?", "there", ["there", "it", "they"], "Câu hỏi có… không: Is there…?", "Tòa nhà có thang máy không?", "Chọn từ đúng"]
    ],
    error: [
      ["There is many plants.", 1, "are", ["are", "have", "be"], "many plants số nhiều: There are."]
    ]
  },
  reading: {
    title: "My new apartment",
    sentences: [
      ["Last month, my family moved to a new apartment in District 7.", "Tháng trước, gia đình tôi chuyển đến một căn hộ mới ở Quận 7."],
      ["It's on the tenth floor, so we use the lift every day.", "Căn hộ ở tầng mười nên ngày nào chúng tôi cũng đi thang máy."],
      ["There are three bedrooms, a big living room and a small kitchen.", "Có ba phòng ngủ, một phòng khách lớn và một bếp nhỏ."],
      ["The living room is bright because there are big windows.", "Phòng khách sáng sủa vì có cửa sổ lớn."],
      ["There is a balcony with a lot of plants. My wife loves it!", "Có một ban công với rất nhiều cây xanh. Vợ tôi rất thích!"],
      ["The area is quiet, and there is a supermarket opposite our building.", "Khu vực yên tĩnh, và có một siêu thị đối diện tòa nhà của chúng tôi."]
    ],
    tf: [["The apartment is on the fifth floor.", false], ["There are three bedrooms.", true], ["The kitchen is very big.", false]],
    mc: [["Why is the living room bright?", ["Because it has many lamps.", "Because there are big windows.", "Because it is on the balcony."], 1]],
    qa: [
      ["How many bedrooms are there?", "Có bao nhiêu phòng ngủ?", ["three|3"], "There are three bedrooms."],
      ["What is on the balcony?", "Ngoài ban công có gì?", ["plants|plant"], "There are a lot of plants on the balcony."],
      ["What is opposite the building?", "Đối diện tòa nhà có gì?", ["supermarket"], "There is a supermarket opposite the building."]
    ]
  },
  writing: [
    ["Tòa nhà có thang máy không?", ["Is there a lift in the building?", "Is there an elevator in the building?"], ["is there", "lift"], "Anh–Anh: lift; Anh–Mỹ: elevator."],
    ["Khu vực này rất yên tĩnh.", ["This area is very quiet.", "The area is very quiet."], ["area", "quiet"], ""],
    ["Có một siêu thị đối diện nhà tôi.", ["There is a supermarket opposite my house.", "There's a supermarket opposite my house."], ["supermarket", "opposite"], ""]
  ]
},
/* ===== Unit 7 · Thói quen ===== */
{
  id: "s1u7l1", stage: 1, unit: 7, n: 1, unitTitle: "Thói quen hằng ngày",
  title: "Buổi sáng của tôi", titleEn: "My morning",
  words: [
    ["get up", "/ɡet ʌp/", "cụm động từ", "thức dậy, ra khỏi giường", "I get up at six.", "Tôi dậy lúc sáu giờ."],
    ["wake up", "/weɪk ʌp/", "cụm động từ", "tỉnh giấc", "I wake up before my alarm.", "Tôi tỉnh giấc trước khi chuông báo thức reo."],
    ["shower", "/ˈʃaʊə(r)/", "danh từ", "vòi sen; tắm vòi sen", "I have a shower every morning.", "Sáng nào tôi cũng tắm."],
    ["brush", "/brʌʃ/", "động từ", "chải, đánh (răng)", "Brush your teeth, please.", "Con đánh răng đi."],
    ["teeth", "/tiːθ/", "danh từ", "răng (số nhiều)", "I brush my teeth twice a day.", "Tôi đánh răng hai lần một ngày."],
    ["breakfast", "/ˈbrekfəst/", "danh từ", "bữa sáng", "We have breakfast at seven.", "Chúng tôi ăn sáng lúc bảy giờ."],
    ["get dressed", "/ɡet drest/", "cụm động từ", "mặc quần áo", "Then I get dressed for work.", "Sau đó tôi thay đồ đi làm."],
    ["leave", "/liːv/", "động từ", "rời đi, ra khỏi", "I leave home at half past seven.", "Tôi ra khỏi nhà lúc bảy rưỡi."],
    ["bus", "/bʌs/", "danh từ", "xe buýt", "I go to work by bus.", "Tôi đi làm bằng xe buýt."],
    ["traffic", "/ˈtræfɪk/", "danh từ", "giao thông, xe cộ", "The traffic is bad in the morning.", "Buổi sáng giao thông rất tệ."]
  ],
  grammar: {
    name: "Kể trình tự: first, then, after that", nameEn: "Sequencing",
    desc: "Kể các việc làm theo thứ tự bằng thì hiện tại đơn và các từ nối: first (đầu tiên), then (sau đó), after that (sau đó nữa), finally (cuối cùng).",
    formula: [["1", "<b>First</b>, I get up at six."], ["2", "<b>Then</b> I have a shower."], ["3", "<b>After that</b>, I have breakfast."], ["4", "<b>Finally</b>, I leave home at seven."]],
    examples: [["<b>First</b>, I brush my teeth. <b>Then</b> I get dressed.", "Đầu tiên tôi đánh răng. Sau đó tôi thay đồ."], ["<b>After breakfast</b>, I go to work by bus.", "Sau bữa sáng, tôi đi làm bằng xe buýt."]],
    mistake: ["I go to work by the bus.", "I go to work by bus.", "Phương tiện đi lại: by + tên phương tiện, không có the."]
  },
  dialogue: { title: "Buổi sáng bận rộn", lines: [
    ["A", "What time do you get up?", "Bạn dậy lúc mấy giờ?"],
    ["B", "I get up at six. Then I have a shower.", "Tôi dậy lúc sáu giờ. Sau đó tôi tắm."],
    ["A", "Do you have breakfast at home?", "Bạn có ăn sáng ở nhà không?"],
    ["B", "Yes, I do. After that, I take my son to school.", "Có. Sau đó tôi đưa con trai đi học."],
    ["A", "How do you go to work?", "Bạn đi làm bằng gì?"],
    ["B", "By bus. The traffic is terrible!", "Bằng xe buýt. Giao thông kinh khủng lắm!"]
  ] },
  drills: {
    fill: [
      ["I ___ up at six every day.", "get", ["get", "gets", "wake"], "Chủ ngữ I: get up.", "Ngày nào tôi cũng dậy lúc sáu giờ.", "Chọn động từ"],
      ["She ___ her teeth after breakfast.", "brushes", ["brushes", "brushs", "brush"], "Tận cùng -sh thêm -es: brushes.", "Cô ấy đánh răng sau bữa sáng.", "Chia động từ (brush)"],
      ["I go to work ___ bus.", "by", ["by", "on the", "with"], "Phương tiện: by bus.", "Tôi đi làm bằng xe buýt.", "Điền giới từ"]
    ],
    error: [
      ["He leave home at seven.", 1, "leaves", ["leaves", "leaving", "left"], "Chủ ngữ he: leaves."],
      ["I go to school by the bus.", 5, "-", ["-", "a", "on"], "by + phương tiện, không có the."]
    ]
  },
  pron: [["leave", "/liːv/", "rời đi"], ["live", "/lɪv/", "sống"], "leave: /iː/ dài, miệng hơi cười. live: /ɪ/ ngắn, thả lỏng.", "âm /iː/ và /ɪ/"],
  writing: [
    ["Tôi dậy lúc sáu giờ.", ["I get up at six.", "I get up at six o'clock.", "I wake up at six."], ["get up", "at six"], ""],
    ["Sau đó tôi ăn sáng.", ["Then I have breakfast.", "After that, I have breakfast.", "Then I eat breakfast."], ["then", "breakfast"], "Ăn sáng: have breakfast."],
    ["Tôi đi làm bằng xe buýt.", ["I go to work by bus."], ["by bus"], ""]
  ]
},
{
  id: "s1u7l2", stage: 1, unit: 7, n: 2, unitTitle: "Thói quen hằng ngày",
  title: "Bao lâu một lần?", titleEn: "How often?",
  words: [
    ["always", "/ˈɔːlweɪz/", "trạng từ", "luôn luôn", "I always get up early.", "Tôi luôn dậy sớm."],
    ["usually", "/ˈjuːʒuəli/", "trạng từ", "thường thường", "She usually walks to work.", "Cô ấy thường đi bộ đi làm."],
    ["often", "/ˈɒfn/", "trạng từ", "thường, hay", "We often eat out on Fridays.", "Chúng tôi hay ăn ngoài vào thứ Sáu."],
    ["sometimes", "/ˈsʌmtaɪmz/", "trạng từ", "thỉnh thoảng", "I sometimes work at the weekend.", "Thỉnh thoảng tôi làm cả cuối tuần."],
    ["rarely", "/ˈreəli/", "trạng từ", "hiếm khi", "He rarely watches TV.", "Anh ấy hiếm khi xem TV."],
    ["never", "/ˈnevə(r)/", "trạng từ", "không bao giờ", "I never drink alcohol.", "Tôi không bao giờ uống rượu."],
    ["every day", "/ˈevri deɪ/", "cụm từ", "mỗi ngày", "I learn English every day.", "Tôi học tiếng Anh mỗi ngày."],
    ["once", "/wʌns/", "trạng từ", "một lần", "I call my mother once a week.", "Tôi gọi mẹ mỗi tuần một lần."],
    ["twice", "/twaɪs/", "trạng từ", "hai lần", "We go swimming twice a month.", "Chúng tôi đi bơi hai lần một tháng."],
    ["exercise", "/ˈeksəsaɪz/", "động từ, danh từ", "tập thể dục", "Do you exercise often?", "Bạn có hay tập thể dục không?"]
  ],
  grammar: {
    name: "Trạng từ tần suất", nameEn: "Adverbs of frequency",
    desc: "Nói mức độ thường xuyên: always (100%) → usually → often → sometimes → rarely → never (0%). Đứng TRƯỚC động từ thường, nhưng SAU to be.",
    formula: [["·", "always · usually · often · sometimes · rarely · never"], ["1", "I <b>always get</b> up early. (trước động từ thường)"], ["2", "He <b>is always</b> late. (sau to be)"], ["·", "<b>once / twice / three times</b> a week (cuối câu)"]],
    examples: [["She <b>usually walks</b> to work.", "Cô ấy thường đi bộ đi làm."], ["I’m <b>never</b> late for work.", "Tôi không bao giờ đi làm muộn."], ["I exercise <b>three times a week</b>.", "Tôi tập thể dục ba lần một tuần."]],
    mistake: ["I go always to the gym.", "I always go to the gym.", "Trạng từ tần suất đứng trước động từ thường (go)."]
  },
  dialogue: { title: "Thói quen tập luyện", lines: [
    ["A", "Do you exercise often?", "Bạn có hay tập thể dục không?"],
    ["B", "Yes, I usually go running in the morning.", "Có, tôi thường chạy bộ buổi sáng."],
    ["A", "Every day?", "Mỗi ngày à?"],
    ["B", "No, about four times a week. And you?", "Không, khoảng bốn lần một tuần. Còn bạn?"],
    ["A", "I rarely exercise. I'm always busy.", "Tôi hiếm khi tập. Tôi lúc nào cũng bận."],
    ["B", "Try ten minutes a day. It's easy!", "Thử mười phút mỗi ngày xem. Dễ mà!"]
  ] },
  drills: {
    fill: [
      ["I ___ late for work. (không bao giờ)", "am never|'m never", ["am never", "never am", "never"], "Với to be: am + never.", "Tôi không bao giờ đi làm muộn.", "Chọn vị trí đúng"],
      ["She ___ to work. (thường đi bộ)", "usually walks", ["usually walks", "walks usually", "usually walk"], "Trạng từ đứng trước động từ thường; she → walks.", "Cô ấy thường đi bộ đi làm.", "Chọn vị trí đúng"],
      ["I call my parents ___ a week. (hai lần)", "twice", ["twice", "two", "second"], "Hai lần: twice.", "Tôi gọi bố mẹ hai lần một tuần.", "Chọn từ đúng"]
    ],
    error: [
      ["I go out with friends one a month.", 5, "once", ["once", "one time", "first"], "Một lần: once (once a month = mỗi tháng một lần)."],
      ["I go to the gym three time a week.", 6, "times", ["times", "timer", "time's"], "Từ ba lần trở lên: three times."]
    ]
  },
  pron: [["often", "/ˈɒfn/", "thường"], ["offer", "/ˈɒfə(r)/", "đề nghị"], "often thường đọc không có /t/: “óp-phần”. offer kết thúc bằng /ə/ nhẹ.", "often và offer"],
  writing: [
    ["Tôi luôn dậy sớm.", ["I always get up early.", "I always wake up early."], ["always", "early"], "always đứng trước động từ thường."],
    ["Anh ấy thường đi muộn.", ["He is often late.", "He's often late.", "He is usually late.", "He's usually late."], ["often", "late"], "Với to be: is often."],
    ["Tôi tập thể dục ba lần một tuần.", ["I exercise three times a week.", "I work out three times a week."], ["three times", "a week"], ""]
  ]
},
{
  id: "s1u7l3", stage: 1, unit: 7, n: 3, unitTitle: "Thói quen hằng ngày",
  title: "Việc nhà", titleEn: "Housework",
  words: [
    ["housework", "/ˈhaʊswɜːk/", "danh từ", "việc nhà", "We share the housework.", "Chúng tôi chia việc nhà."],
    ["wash", "/wɒʃ/", "động từ", "rửa, giặt", "I wash the car on Sundays.", "Tôi rửa xe vào Chủ nhật."],
    ["dishes", "/ˈdɪʃɪz/", "danh từ", "bát đĩa", "Who washes the dishes?", "Ai rửa bát?"],
    ["laundry", "/ˈlɔːndri/", "danh từ", "quần áo cần giặt; việc giặt giũ", "She does the laundry twice a week.", "Cô ấy giặt đồ hai lần một tuần."],
    ["iron", "/ˈaɪən/", "động từ", "là, ủi (quần áo)", "I iron my shirts on Sunday evening.", "Tôi ủi áo vào tối Chủ nhật."],
    ["sweep", "/swiːp/", "động từ", "quét", "My son sweeps the floor.", "Con trai tôi quét nhà."],
    ["tidy", "/ˈtaɪdi/", "động từ, tính từ", "dọn dẹp; gọn gàng", "Please tidy your room.", "Con dọn phòng đi."],
    ["rubbish", "/ˈrʌbɪʃ/", "danh từ", "rác", "Can you take out the rubbish?", "Bạn đổ rác giúp được không?"],
    ["vacuum", "/ˈvækjuːm/", "động từ", "hút bụi", "I vacuum the carpet every week.", "Tuần nào tôi cũng hút bụi tấm thảm."],
    ["share", "/ʃeə(r)/", "động từ", "chia sẻ, chia nhau", "We share a room.", "Chúng tôi ở chung một phòng."]
  ],
  grammar: {
    name: "How often…? và do / make", nameEn: "How often…?",
    desc: "Hỏi tần suất: How often + do / does + chủ ngữ + V? Việc nhà thường đi với do: do the housework, do the laundry, do the dishes.",
    formula: [["?", "<b>How often do</b> you do the laundry?"], ["✓", "Twice a week. · Every day. · Never."], ["·", "<b>do</b> the housework · <b>do</b> the laundry · <b>do</b> the dishes"], ["·", "<b>make</b> the bed · <b>take out</b> the rubbish"]],
    examples: [["<b>How often does</b> your husband cook? — <b>Rarely</b>.", "Chồng bạn có hay nấu ăn không? — Hiếm khi."], ["I <b>do the laundry</b> on Saturdays.", "Tôi giặt đồ vào thứ Bảy."]],
    mistake: ["I make the housework.", "I do the housework.", "Việc nhà nói chung dùng do, không dùng make."]
  },
  dialogue: { title: "Chia việc nhà", lines: [
    ["A", "Who does the housework in your family?", "Nhà bạn ai làm việc nhà?"],
    ["B", "We share it. My husband washes the dishes.", "Chúng tôi chia nhau. Chồng tôi rửa bát."],
    ["A", "And who does the laundry?", "Còn ai giặt đồ?"],
    ["B", "I do. And the kids tidy their rooms.", "Tôi giặt. Còn bọn trẻ tự dọn phòng."],
    ["A", "How often do you clean the house?", "Bao lâu bạn dọn nhà một lần?"],
    ["B", "Twice a week, usually on weekends.", "Hai lần một tuần, thường vào cuối tuần."]
  ] },
  drills: {
    fill: [
      ["How ___ do you do the laundry?", "often", ["often", "many", "much"], "Hỏi tần suất: How often.", "Bao lâu bạn giặt đồ một lần?", "Chọn từ đúng"],
      ["I ___ the housework on Sundays.", "do", ["do", "make", "have"], "Việc nhà: do the housework.", "Tôi làm việc nhà vào Chủ nhật.", "Chọn động từ"],
      ["My son ___ the floor every evening.", "sweeps", ["sweeps", "sweep", "sweepes"], "Chủ ngữ my son: sweeps.", "Con trai tôi quét nhà mỗi tối.", "Chia động từ (sweep)"]
    ],
    error: [
      ["I make the laundry on Saturday.", 1, "do", ["do", "have", "take"], "Giặt giũ: do the laundry."],
      ["How often you wash the car?", 2, "do you", ["do you", "you do", "are you"], "Câu hỏi cần trợ động từ: How often do you…?"]
    ]
  },
  pron: [["wash", "/wɒʃ/", "rửa, giặt"], ["watch", "/wɒtʃ/", "xem"], "wash kết thúc bằng /ʃ/ nhẹ. watch kết thúc bằng /tʃ/ bật mạnh.", "âm cuối /ʃ/ và /tʃ/"],
  writing: [
    ["Chúng tôi chia nhau làm việc nhà.", ["We share the housework."], ["share", "housework"], ""],
    ["Ai rửa bát?", ["Who washes the dishes?", "Who does the dishes?"], ["who", "dishes"], "Who làm chủ ngữ: động từ chia ngôi ba (washes)."],
    ["Bạn đổ rác giúp được không?", ["Can you take out the rubbish?", "Can you take the rubbish out?", "Can you take out the trash?"], ["take out", "rubbish"], "Anh–Mỹ: trash."]
  ]
},
{
  id: "s1u7l4", stage: 1, unit: 7, n: 4, unitTitle: "Thói quen hằng ngày",
  title: "Buổi tối", titleEn: "Evenings",
  words: [
    ["television", "/ˈtelɪvɪʒn/", "danh từ", "ti vi", "We watch television after dinner.", "Chúng tôi xem ti vi sau bữa tối."],
    ["news", "/njuːz/", "danh từ", "tin tức", "My father watches the news at seven.", "Bố tôi xem thời sự lúc bảy giờ."],
    ["read", "/riːd/", "động từ", "đọc", "I read before bed.", "Tôi đọc sách trước khi ngủ."],
    ["music", "/ˈmjuːzɪk/", "danh từ", "âm nhạc", "She listens to music in the evening.", "Buổi tối cô ấy nghe nhạc."],
    ["listen", "/ˈlɪsn/", "động từ", "nghe", "Listen to this song!", "Nghe bài hát này đi!"],
    ["chat", "/tʃæt/", "động từ", "trò chuyện", "I chat with my friends online.", "Tôi trò chuyện với bạn bè trên mạng."],
    ["go out", "/ɡəʊ aʊt/", "cụm động từ", "ra ngoài, đi chơi", "We sometimes go out on Friday nights.", "Thỉnh thoảng tối thứ Sáu chúng tôi đi chơi."],
    ["stay up", "/steɪ ʌp/", "cụm động từ", "thức khuya", "Don't stay up too late.", "Đừng thức khuya quá."],
    ["walk", "/wɔːk/", "động từ", "đi bộ", "We walk in the park after dinner.", "Chúng tôi đi bộ trong công viên sau bữa tối."],
    ["evening", "/ˈiːvnɪŋ/", "danh từ", "buổi tối", "What do you do in the evening?", "Buổi tối bạn làm gì?"]
  ],
  grammar: {
    name: "before / after + danh từ", nameEn: "before / after",
    desc: "Nói việc xảy ra trước hoặc sau một việc khác: before (trước), after (sau) + danh từ hoặc V-ing. Dùng in the evening, at night để nói buổi.",
    formula: [["·", "<b>after</b> dinner · <b>after</b> work"], ["·", "<b>before</b> bed · <b>before</b> breakfast"], ["·", "<b>in</b> the evening · <b>at</b> night"], ["?", "What do you do <b>in the evening</b>?"]],
    examples: [["I read <b>before bed</b>.", "Tôi đọc sách trước khi ngủ."], ["We walk in the park <b>after dinner</b>.", "Chúng tôi đi dạo công viên sau bữa tối."]],
    mistake: ["I listen music every night.", "I listen to music every night.", "listen luôn cần to trước thứ được nghe."]
  },
  dialogue: { title: "Buổi tối thư giãn", lines: [
    ["A", "What do you usually do in the evening?", "Buổi tối bạn thường làm gì?"],
    ["B", "After dinner, I walk in the park with my wife.", "Sau bữa tối, tôi đi dạo công viên với vợ."],
    ["A", "Do you watch television?", "Bạn có xem ti vi không?"],
    ["B", "Only the news. I prefer reading.", "Chỉ xem thời sự. Tôi thích đọc sách hơn."],
    ["A", "Do you stay up late?", "Bạn có thức khuya không?"],
    ["B", "No, I go to bed at eleven.", "Không, tôi đi ngủ lúc mười một giờ."]
  ] },
  drills: {
    fill: [
      ["I read ___ bed.", "before", ["before", "after", "in"], "Trước khi ngủ: before bed.", "Tôi đọc sách trước khi ngủ.", "Chọn từ đúng"],
      ["She listens ___ music in the evening.", "to", ["to", "for", "at"], "listen to + thứ được nghe.", "Buổi tối cô ấy nghe nhạc.", "Chọn từ đúng"],
      ["We go for a walk ___ dinner.", "after", ["after", "before", "on"], "Sau bữa tối: after dinner.", "Chúng tôi đi dạo sau bữa tối.", "Chọn từ đúng"]
    ],
    error: [
      ["I listen music every night.", 1, "listen to", ["listen to", "listen at", "hear to"], "listen to music."],
      ["What do you do on the evening?", 4, "in", ["in", "at", "by"], "Buổi tối: in the evening."]
    ]
  },
  pron: [["walk", "/wɔːk/", "đi bộ"], ["work", "/wɜːk/", "làm việc"], "walk: /ɔː/ tròn môi, chữ l câm. work: /ɜː/ như “ơ” kéo dài.", "walk và work"],
  writing: [
    ["Buổi tối bạn thường làm gì?", ["What do you usually do in the evening?", "What do you usually do in the evenings?"], ["usually", "in the evening"], ""],
    ["Tôi nghe nhạc trước khi ngủ.", ["I listen to music before bed.", "I listen to music before I go to bed."], ["listen to", "before bed"], ""],
    ["Đừng thức khuya quá.", ["Don't stay up too late.", "Do not stay up too late."], ["stay up", "late"], ""]
  ]
},
{
  id: "s1u7l5", stage: 1, unit: 7, n: 5, unitTitle: "Thói quen hằng ngày",
  title: "Một ngày của tôi", titleEn: "A day in my life",
  words: [
    ["alarm", "/əˈlɑːm/", "danh từ", "chuông báo thức", "My alarm rings at six.", "Chuông báo thức của tôi reo lúc sáu giờ."],
    ["quickly", "/ˈkwɪkli/", "trạng từ", "nhanh chóng", "I eat breakfast quickly.", "Tôi ăn sáng nhanh."],
    ["slowly", "/ˈsləʊli/", "trạng từ", "chậm rãi", "Please speak slowly.", "Vui lòng nói chậm."],
    ["healthy", "/ˈhelθi/", "tính từ", "khỏe mạnh, tốt cho sức khỏe", "She has a healthy lifestyle.", "Cô ấy có lối sống lành mạnh."],
    ["habit", "/ˈhæbɪt/", "danh từ", "thói quen", "Reading is a good habit.", "Đọc sách là một thói quen tốt."],
    ["routine", "/ruːˈtiːn/", "danh từ", "nếp sinh hoạt hằng ngày", "My routine is very simple.", "Nếp sinh hoạt của tôi rất đơn giản."],
    ["jog", "/dʒɒɡ/", "động từ", "chạy bộ chậm", "I jog in the park every morning.", "Sáng nào tôi cũng chạy bộ trong công viên."],
    ["park", "/pɑːk/", "danh từ", "công viên", "There's a park near my house.", "Gần nhà tôi có một công viên."],
    ["energy", "/ˈenədʒi/", "danh từ", "năng lượng", "Exercise gives me energy.", "Tập thể dục cho tôi năng lượng."],
    ["bedtime", "/ˈbedtaɪm/", "danh từ", "giờ đi ngủ", "My bedtime is eleven o'clock.", "Giờ đi ngủ của tôi là mười một giờ."]
  ],
  grammar: {
    name: "Ôn tập: thói quen", nameEn: "Review: routines",
    desc: "Tổng hợp Unit 7: hiện tại đơn kể thói quen, trạng từ tần suất, How often…?, first / then / after that, before / after.",
    formula: [["·", "I <b>always</b> jog · She <b>is never</b> late"], ["?", "<b>How often</b> do you exercise? — <b>Three times a week</b>."], ["·", "<b>First</b>… <b>Then</b>… <b>After that</b>… <b>Finally</b>…"]],
    examples: [["I <b>usually</b> jog <b>before</b> breakfast.", "Tôi thường chạy bộ trước bữa sáng."], ["<b>After that</b>, I have a quick shower.", "Sau đó, tôi tắm nhanh."]],
    mistake: ["She go jogging every morning.", "She goes jogging every morning.", "Chủ ngữ she: goes."]
  },
  dialogue: { title: "Bí quyết khỏe mạnh", lines: [
    ["A", "You always look so healthy!", "Lúc nào trông bạn cũng khỏe mạnh!"],
    ["B", "Thanks! I have a good routine.", "Cảm ơn! Tôi có nếp sinh hoạt tốt."],
    ["A", "What time does your alarm ring?", "Chuông báo thức của bạn reo lúc mấy giờ?"],
    ["B", "At half past five. Then I jog in the park.", "Năm rưỡi. Sau đó tôi chạy bộ trong công viên."],
    ["A", "Wow, that's early! What's your bedtime?", "Ồ, sớm thật! Mấy giờ bạn đi ngủ?"],
    ["B", "Ten o'clock. Sleep is important.", "Mười giờ. Giấc ngủ rất quan trọng."]
  ] },
  drills: {
    fill: [
      ["She ___ jogging every morning.", "goes", ["goes", "go", "going"], "Chủ ngữ she: goes.", "Sáng nào cô ấy cũng đi chạy bộ.", "Chia động từ (go)"],
      ["Please speak ___.", "slowly", ["slowly", "slow", "slowing"], "Bổ nghĩa cho động từ speak: trạng từ slowly.", "Vui lòng nói chậm.", "Chọn từ đúng"]
    ],
    error: [
      ["I eat breakfast quick.", 3, "quickly", ["quickly", "quicker", "fastly"], "Bổ nghĩa cho động từ eat dùng trạng từ quickly."]
    ]
  },
  reading: {
    title: "A day in my life",
    sentences: [
      ["My name is Tuan, and I am a software engineer.", "Tôi tên là Tuấn, tôi là kỹ sư phần mềm."],
      ["My alarm rings at half past five every morning.", "Chuông báo thức của tôi reo lúc năm rưỡi mỗi sáng."],
      ["First, I jog in the park for thirty minutes. It gives me energy.", "Đầu tiên, tôi chạy bộ trong công viên ba mươi phút. Nó cho tôi năng lượng."],
      ["Then I have a shower and eat a healthy breakfast.", "Sau đó tôi tắm và ăn một bữa sáng lành mạnh."],
      ["I usually work from home, but I go to the office twice a week.", "Tôi thường làm việc ở nhà, nhưng một tuần đến văn phòng hai lần."],
      ["In the evening, I read for an hour. I never use my phone after ten.", "Buổi tối, tôi đọc sách một tiếng. Tôi không bao giờ dùng điện thoại sau mười giờ."]
    ],
    tf: [["Tuan jogs in the park every morning.", true], ["Tuan goes to the office every day.", false], ["Tuan often uses his phone at night.", false]],
    mc: [["What does Tuan do in the evening?", ["He watches TV.", "He reads for an hour.", "He goes out with friends."], 1]],
    qa: [
      ["What time does Tuan's alarm ring?", "Chuông báo thức của Tuấn reo lúc mấy giờ?", ["half past five|five thirty"], "It rings at half past five."],
      ["How often does Tuan go to the office?", "Tuấn đến văn phòng bao lâu một lần?", ["twice"], "He goes to the office twice a week."],
      ["What does jogging give him?", "Chạy bộ mang lại gì cho anh ấy?", ["energy"], "It gives him energy."]
    ]
  },
  writing: [
    ["Đọc sách là một thói quen tốt.", ["Reading is a good habit."], ["reading", "good habit"], "Danh động từ (V-ing) làm chủ ngữ: Reading."],
    ["Tôi thường làm việc ở nhà.", ["I usually work from home.", "I usually work at home.", "I often work from home.", "I often work at home."], ["usually", "work from home"], ""],
    ["Giờ đi ngủ của tôi là mười giờ.", ["My bedtime is ten o'clock.", "My bedtime is ten.", "My bedtime is at ten o'clock."], ["bedtime", "ten"], ""]
  ]
}
,
/* ===== Unit 8 · Ăn uống ===== */
{
  id: "s1u8l1", stage: 1, unit: 8, n: 1, unitTitle: "Ăn uống",
  title: "Món ăn hằng ngày", titleEn: "Everyday food",
  words: [
    ["rice", "/raɪs/", "danh từ", "cơm, gạo", "We eat rice every day.", "Ngày nào chúng tôi cũng ăn cơm."],
    ["noodles", "/ˈnuːdlz/", "danh từ", "mì, bún, phở", "I have noodles for breakfast.", "Tôi ăn mì vào bữa sáng."],
    ["meat", "/miːt/", "danh từ", "thịt", "She doesn't eat meat.", "Cô ấy không ăn thịt."],
    ["fish", "/fɪʃ/", "danh từ", "cá", "Fish is good for you.", "Cá tốt cho sức khỏe."],
    ["chicken", "/ˈtʃɪkɪn/", "danh từ", "thịt gà; con gà", "I'd like chicken and rice.", "Tôi muốn cơm gà."],
    ["vegetable", "/ˈvedʒtəbl/", "danh từ", "rau củ", "Eat more vegetables!", "Ăn nhiều rau hơn nhé!"],
    ["bread", "/bred/", "danh từ", "bánh mì", "There's some bread on the table.", "Có ít bánh mì trên bàn."],
    ["soup", "/suːp/", "danh từ", "canh, súp", "This soup is hot.", "Món súp này nóng."],
    ["cheese", "/tʃiːz/", "danh từ", "phô mai", "Do you like cheese?", "Bạn có thích phô mai không?"],
    ["beef", "/biːf/", "danh từ", "thịt bò", "I'll have the beef noodles.", "Tôi sẽ ăn phở bò."]
  ],
  grammar: {
    name: "Danh từ đếm được và không đếm được", nameEn: "Countable & uncountable nouns",
    desc: "Danh từ đếm được có số ít và số nhiều (an egg, two eggs). Danh từ không đếm được không dùng a / an và không thêm -s (rice, meat, bread, water). Dùng some cho cả hai loại trong câu khẳng định.",
    formula: [["·", "Đếm được: <b>a</b> vegetable · two vegetable<b>s</b>"], ["·", "Không đếm được: rice · meat · bread · cheese"], ["+", "<b>some</b> eggs · <b>some</b> rice"], ["!", "KHÔNG nói: a rice, breads, meats"]],
    examples: [["There’s <b>some</b> bread on the table.", "Có ít bánh mì trên bàn."], ["I eat <b>a lot of</b> vegetable<b>s</b>.", "Tôi ăn nhiều rau."], ["She doesn’t eat <b>meat</b>.", "Cô ấy không ăn thịt."]],
    mistake: ["I'd like a rice, please.", "I'd like some rice, please.", "rice không đếm được, không dùng a. Muốn một bát: a bowl of rice."]
  },
  dialogue: { title: "Ăn trưa gì?", lines: [
    ["A", "What do you want for lunch?", "Trưa nay bạn muốn ăn gì?"],
    ["B", "Something light. Maybe chicken soup.", "Món gì nhẹ thôi. Có lẽ súp gà."],
    ["A", "I want some rice and fish.", "Tôi muốn ăn cơm với cá."],
    ["B", "Do you eat meat?", "Bạn có ăn thịt không?"],
    ["A", "Yes, but not much. I love vegetables.", "Có, nhưng không nhiều. Tôi thích rau."],
    ["B", "Me too. Let's go to the restaurant downstairs.", "Tôi cũng vậy. Đi nhà hàng dưới lầu đi."]
  ] },
  drills: {
    fill: [
      ["I'd like ___ rice, please.", "some", ["some", "a", "an"], "rice không đếm được: dùng some.", "Cho tôi ít cơm.", "Chọn a / an / some"],
      ["There is ___ egg in the fridge.", "an", ["an", "a", "some"], "egg đếm được, số ít, bắt đầu nguyên âm: an.", "Trong tủ lạnh có một quả trứng.", "Chọn a / an / some"],
      ["We eat a lot of ___.", "vegetables", ["vegetables", "vegetable", "a vegetable"], "vegetable đếm được: số nhiều thêm -s.", "Chúng tôi ăn nhiều rau.", "Chọn dạng đúng"]
    ],
    error: [
      ["She doesn't eat meats.", 3, "meat.", ["meat.", "a meat.", "meates."], "meat không đếm được, không thêm -s."],
      ["Can I have a bread?", 3, "some", ["some", "an", "two"], "bread không đếm được: some bread."]
    ]
  },
  pron: [["beef", "/biːf/", "thịt bò"], ["beer", "/bɪə(r)/", "bia"], "beef: /iː/ dài, âm cuối /f/. beer: /ɪə/ như “ia”, không có âm cuối /f/.", "beef và beer"],
  writing: [
    ["Cho tôi ít cơm.", ["Some rice, please.", "I'd like some rice, please.", "Can I have some rice, please?"], ["some", "rice"], "rice không đếm được: some rice."],
    ["Cô ấy không ăn thịt.", ["She doesn't eat meat.", "She does not eat meat."], ["doesn't", "meat"], ""],
    ["Tôi ăn nhiều rau.", ["I eat a lot of vegetables.", "I eat lots of vegetables.", "I eat many vegetables."], ["a lot of", "vegetables"], ""]
  ]
},
{
  id: "s1u8l2", stage: 1, unit: 8, n: 2, unitTitle: "Ăn uống",
  title: "Đồ uống", titleEn: "Drinks",
  words: [
    ["water", "/ˈwɔːtə(r)/", "danh từ", "nước", "Can I have a glass of water?", "Cho tôi một cốc nước được không?"],
    ["milk", "/mɪlk/", "danh từ", "sữa", "There isn't any milk.", "Không còn sữa."],
    ["coffee", "/ˈkɒfi/", "danh từ", "cà phê", "I drink coffee every morning.", "Sáng nào tôi cũng uống cà phê."],
    ["tea", "/tiː/", "danh từ", "trà", "Would you like some tea?", "Bạn có muốn uống trà không?"],
    ["juice", "/dʒuːs/", "danh từ", "nước ép", "An orange juice, please.", "Cho tôi một ly nước cam."],
    ["beer", "/bɪə(r)/", "danh từ", "bia", "He drinks beer at the weekend.", "Anh ấy uống bia cuối tuần."],
    ["glass", "/ɡlɑːs/", "danh từ", "ly, cốc thủy tinh", "Two glasses of juice, please.", "Cho hai ly nước ép."],
    ["cup", "/kʌp/", "danh từ", "tách, chén", "A cup of tea, please.", "Cho một tách trà."],
    ["bottle", "/ˈbɒtl/", "danh từ", "chai", "I buy a bottle of water.", "Tôi mua một chai nước."],
    ["sugar", "/ˈʃʊɡə(r)/", "danh từ", "đường", "No sugar, please.", "Không đường nhé."]
  ],
  grammar: {
    name: "Đơn vị đo lường đồ uống", nameEn: "a cup of / a glass of / a bottle of",
    desc: "Danh từ không đếm được (water, coffee, milk) được đếm qua vật chứa: a cup of, a glass of, a bottle of. Vật chứa mới thêm -s: two cups of tea.",
    formula: [["·", "<b>a cup of</b> coffee · <b>a glass of</b> water"], ["·", "<b>a bottle of</b> water · <b>a can of</b> beer"], ["·", "two cup<b>s</b> of tea (KHÔNG: two teas of cup)"], ["?", "<b>Would you like</b> some tea? — Yes, please. / No, thanks."]],
    examples: [["<b>Can I have a glass of</b> water?", "Cho tôi một cốc nước được không?"], ["<b>Two cups of</b> coffee, please.", "Cho hai tách cà phê."]],
    mistake: ["Two coffees of cup, please.", "Two cups of coffee, please.", "Thêm -s vào vật chứa (cups), không thêm vào đồ uống."]
  },
  dialogue: { title: "Gọi đồ uống ở quán", lines: [
    ["A", "What would you like to drink?", "Anh chị muốn uống gì ạ?"],
    ["B", "A cup of coffee with milk, please.", "Cho tôi một ly cà phê sữa."],
    ["A", "Hot or iced?", "Nóng hay đá ạ?"],
    ["B", "Iced, please. And no sugar.", "Đá nhé. Và không đường."],
    ["A", "And for you, sir?", "Còn anh thì sao ạ?"],
    ["B", "Just a bottle of water, thanks.", "Chỉ một chai nước thôi, cảm ơn."]
  ] },
  drills: {
    fill: [
      ["Can I have a ___ of water?", "glass", ["glass", "piece", "kilo"], "Nước uống: a glass of water.", "Cho tôi một cốc nước được không?", "Chọn từ đúng"],
      ["Two ___ of tea, please.", "cups", ["cups", "cup", "teas"], "Vật chứa thêm -s: two cups.", "Cho hai tách trà.", "Chọn dạng đúng"],
      ["Would you ___ some coffee?", "like", ["like", "want to", "likes"], "Mời lịch sự: Would you like…?", "Bạn có muốn uống cà phê không?", "Chọn từ đúng"]
    ],
    error: [
      ["I'd like two cup of coffee.", 3, "cups", ["cups", "cupes", "cup's"], "Hai tách: two cups of coffee (thêm -s vào cup)."],
      ["Would you like a sugar?", 3, "some", ["some", "an", "many"], "sugar không đếm được: some sugar."]
    ]
  },
  pron: [["cup", "/kʌp/", "tách"], ["cap", "/kæp/", "mũ lưỡi trai"], "cup: /ʌ/ ngắn giống “ă”. cap: /æ/ miệng mở rộng, bè ngang.", "âm /ʌ/ và /æ/"],
  writing: [
    ["Cho tôi một ly cà phê sữa.", ["A cup of coffee with milk, please.", "A coffee with milk, please.", "I'd like a coffee with milk, please."], ["coffee", "with milk"], "Cà phê sữa: coffee with milk."],
    ["Bạn có muốn uống trà không?", ["Would you like some tea?", "Would you like a cup of tea?"], ["would you like", "tea"], ""],
    ["Không đường nhé.", ["No sugar, please."], ["no sugar"], ""]
  ]
},
{
  id: "s1u8l3", stage: 1, unit: 8, n: 3, unitTitle: "Ăn uống",
  title: "Nấu ăn ở nhà", titleEn: "Cooking at home",
  words: [
    ["salt", "/sɔːlt/", "danh từ", "muối", "Add a little salt.", "Thêm một chút muối."],
    ["oil", "/ɔɪl/", "danh từ", "dầu ăn", "Don't use too much oil.", "Đừng dùng quá nhiều dầu."],
    ["pepper", "/ˈpepə(r)/", "danh từ", "hạt tiêu", "Put some pepper on the meat.", "Rắc ít tiêu lên thịt."],
    ["onion", "/ˈʌnjən/", "danh từ", "củ hành", "Cut two onions.", "Cắt hai củ hành."],
    ["garlic", "/ˈɡɑːlɪk/", "danh từ", "tỏi", "Vietnamese food uses a lot of garlic.", "Món Việt dùng nhiều tỏi."],
    ["butter", "/ˈbʌtə(r)/", "danh từ", "bơ (động vật)", "There isn't much butter left.", "Không còn nhiều bơ."],
    ["recipe", "/ˈresəpi/", "danh từ", "công thức nấu ăn", "This is my mother's recipe.", "Đây là công thức của mẹ tôi."],
    ["cut", "/kʌt/", "động từ", "cắt", "Cut the vegetables into small pieces.", "Cắt rau thành miếng nhỏ."],
    ["fry", "/fraɪ/", "động từ", "chiên, rán", "Fry the fish for five minutes.", "Chiên cá trong năm phút."],
    ["boil", "/bɔɪl/", "động từ", "luộc, đun sôi", "Boil the water first.", "Đun sôi nước trước."]
  ],
  grammar: {
    name: "How much / How many · a lot of / a little / a few", nameEn: "Quantities",
    desc: "How many + danh từ đếm được số nhiều; How much + danh từ không đếm được. a few (vài) dùng cho đếm được; a little (một ít) cho không đếm được; a lot of dùng cho cả hai.",
    formula: [["?", "<b>How many</b> onions? · <b>How much</b> oil?"], ["·", "<b>a few</b> onions · <b>a little</b> salt"], ["·", "<b>a lot of</b> garlic · <b>a lot of</b> eggs"], ["−", "There isn’t <b>much</b> butter. · There aren’t <b>many</b> eggs."]],
    examples: [["<b>How much</b> salt do we need? — Just <b>a little</b>.", "Cần bao nhiêu muối? — Chỉ một chút."], ["Add <b>a few</b> onions and <b>a lot of</b> garlic.", "Thêm vài củ hành và nhiều tỏi."]],
    mistake: ["How many oil do we need?", "How much oil do we need?", "oil không đếm được nên dùng How much."]
  },
  dialogue: { title: "Nấu canh cùng mẹ", lines: [
    ["A", "Mom, how many onions do we need?", "Mẹ ơi, mình cần mấy củ hành?"],
    ["B", "Just two. And a little garlic.", "Hai củ thôi. Và một ít tỏi."],
    ["A", "How much salt should I add?", "Con nên cho bao nhiêu muối?"],
    ["B", "Only a little. Taste it first.", "Chỉ một chút thôi. Nếm thử trước đã."],
    ["A", "Do I fry the onions?", "Con có phải phi hành không?"],
    ["B", "Yes, in a little oil. Then boil the water.", "Có, phi với ít dầu. Rồi đun sôi nước."]
  ] },
  drills: {
    fill: [
      ["How ___ eggs do we need?", "many", ["many", "much", "lot"], "eggs đếm được: How many.", "Chúng ta cần bao nhiêu quả trứng?", "Chọn much / many"],
      ["How ___ oil is there?", "much", ["much", "many", "few"], "oil không đếm được: How much.", "Có bao nhiêu dầu?", "Chọn much / many"],
      ["Add a ___ salt.", "little", ["little", "few", "many"], "salt không đếm được: a little.", "Thêm một chút muối.", "Chọn a little / a few"]
    ],
    error: [
      ["How many butter do we have?", 1, "much", ["much", "lot", "few"], "butter không đếm được: How much."],
      ["Add a little onions.", 2, "few", ["few", "much", "lot"], "onions đếm được: a few."]
    ]
  },
  pron: [["salt", "/sɔːlt/", "muối"], ["salad", "/ˈsæləd/", "món rau trộn"], "salt: một âm tiết, /ɔː/ tròn môi, kết thúc /lt/. salad: hai âm tiết, /æ/ mở rộng.", "salt và salad"],
  writing: [
    ["Chúng ta cần bao nhiêu củ hành?", ["How many onions do we need?"], ["how many", "onions"], ""],
    ["Thêm một chút muối.", ["Add a little salt.", "Add some salt."], ["a little", "salt"], ""],
    ["Đây là công thức của mẹ tôi.", ["This is my mother's recipe.", "This is my mom's recipe."], ["mother's", "recipe"], ""]
  ]
},
{
  id: "s1u8l4", stage: 1, unit: 8, n: 4, unitTitle: "Ăn uống",
  title: "Ở nhà hàng", titleEn: "At a restaurant",
  words: [
    ["menu", "/ˈmenjuː/", "danh từ", "thực đơn", "Can I see the menu, please?", "Cho tôi xem thực đơn được không?"],
    ["order", "/ˈɔːdə(r)/", "động từ", "gọi món, đặt", "Are you ready to order?", "Anh chị gọi món chưa ạ?"],
    ["bill", "/bɪl/", "danh từ", "hóa đơn tính tiền", "Can we have the bill, please?", "Cho chúng tôi tính tiền."],
    ["delicious", "/dɪˈlɪʃəs/", "tính từ", "ngon", "This soup is delicious!", "Món súp này ngon quá!"],
    ["spicy", "/ˈspaɪsi/", "tính từ", "cay", "Is it spicy?", "Món này có cay không?"],
    ["sweet", "/swiːt/", "tính từ", "ngọt", "The dessert is too sweet.", "Món tráng miệng ngọt quá."],
    ["salty", "/ˈsɔːlti/", "tính từ", "mặn", "The fish is a bit salty.", "Cá hơi mặn."],
    ["dessert", "/dɪˈzɜːt/", "danh từ", "món tráng miệng", "Would you like dessert?", "Anh chị dùng tráng miệng không?"],
    ["hungry", "/ˈhʌŋɡri/", "tính từ", "đói", "I'm very hungry.", "Tôi đói lắm."],
    ["thirsty", "/ˈθɜːsti/", "tính từ", "khát", "Are you thirsty?", "Bạn có khát không?"]
  ],
  grammar: {
    name: "Gọi món: Would you like…? / I’ll have…", nameEn: "Ordering food",
    desc: "Phục vụ hỏi: Would you like…? / Are you ready to order? Khách gọi món: I’ll have… / I’d like… / Can I have…? Từ chối lịch sự: No, thank you.",
    formula: [["?", "<b>Are you ready to order?</b>"], ["✓", "<b>I’ll have</b> the beef noodles."], ["✓", "<b>I’d like</b> a glass of juice."], ["?", "<b>Can we have the bill</b>, please?"]],
    examples: [["<b>Would you like</b> dessert? — No, thank you.", "Anh chị dùng tráng miệng không? — Không, cảm ơn."], ["<b>I’ll have</b> the fish, please. Is it spicy?", "Cho tôi món cá. Món đó có cay không?"]],
    mistake: ["Give me the bill.", "Can we have the bill, please?", "Give me… nghe ra lệnh, thiếu lịch sự. Ở nhà hàng nên dùng Can we have…, please?"]
  },
  dialogue: { title: "Ăn tối ở nhà hàng", lines: [
    ["A", "Good evening. Are you ready to order?", "Chào buổi tối. Anh chị gọi món chưa ạ?"],
    ["B", "Yes. I'll have the beef noodles, please.", "Rồi. Cho tôi phở bò."],
    ["A", "Would you like anything to drink?", "Anh chị có muốn uống gì không ạ?"],
    ["B", "A glass of orange juice, please.", "Cho một ly nước cam."],
    ["A", "Is everything OK?", "Mọi thứ ổn chứ ạ?"],
    ["B", "Yes, it's delicious. Can we have the bill, please?", "Vâng, ngon lắm. Cho chúng tôi tính tiền nhé."]
  ] },
  drills: {
    fill: [
      ["Are you ready to ___?", "order", ["order", "orders", "ordering"], "be ready to + động từ nguyên mẫu.", "Anh chị gọi món chưa ạ?", "Chọn từ đúng"],
      ["I'll ___ the chicken soup, please.", "have", ["have", "has", "having"], "Gọi món: I’ll have…", "Cho tôi món súp gà.", "Chọn từ đúng"],
      ["Can we have the ___, please? (hóa đơn)", "bill", ["bill", "menu", "order"], "Tính tiền: the bill.", "Cho chúng tôi tính tiền.", "Chọn từ đúng"]
    ],
    error: [
      ["Would you like drink something?", 3, "to drink", ["to drink", "drinking", "drinks"], "Would you like + to + động từ: Would you like to drink something?"],
      ["The fish is a bit salt.", 5, "salty", ["salty", "salts", "salted"], "Cần tính từ salty (mặn); salt là danh từ (muối)."]
    ]
  },
  pron: [["dessert", "/dɪˈzɜːt/", "món tráng miệng"], ["desert", "/ˈdezət/", "sa mạc"], "dessert nhấn âm SAU, có /z/ và /ɜː/. desert nhấn âm ĐẦU, /e/ ngắn.", "trọng âm dessert và desert"],
  writing: [
    ["Cho tôi xem thực đơn được không?", ["Can I see the menu, please?", "Can I have the menu, please?", "Could I see the menu, please?"], ["menu"], ""],
    ["Món này có cay không?", ["Is it spicy?", "Is this spicy?", "Is this dish spicy?"], ["spicy"], ""],
    ["Cho chúng tôi tính tiền nhé.", ["Can we have the bill, please?", "Could we have the bill, please?", "The bill, please."], ["bill"], ""]
  ]
},
{
  id: "s1u8l5", stage: 1, unit: 8, n: 5, unitTitle: "Ăn uống",
  title: "Ẩm thực Việt Nam", titleEn: "Vietnamese food",
  words: [
    ["dish", "/dɪʃ/", "danh từ", "món ăn", "Pho is a famous dish.", "Phở là một món ăn nổi tiếng."],
    ["taste", "/teɪst/", "động từ, danh từ", "có vị; vị", "It tastes delicious.", "Nó có vị ngon."],
    ["street food", "/ˌstriːt ˈfuːd/", "danh từ", "đồ ăn đường phố", "I love Vietnamese street food.", "Tôi mê đồ ăn đường phố Việt Nam."],
    ["bowl", "/bəʊl/", "danh từ", "cái bát, tô", "A bowl of pho costs fifty thousand.", "Một tô phở giá năm mươi nghìn."],
    ["herbs", "/hɜːbz/", "danh từ", "rau thơm", "Pho comes with fresh herbs.", "Phở ăn kèm rau thơm tươi."],
    ["famous", "/ˈfeɪməs/", "tính từ", "nổi tiếng", "Hoi An is famous for its food.", "Hội An nổi tiếng về ẩm thực."],
    ["tourist", "/ˈtʊərɪst/", "danh từ", "khách du lịch", "Many tourists try banh mi.", "Nhiều du khách ăn thử bánh mì."],
    ["try", "/traɪ/", "động từ", "thử", "You should try this dish.", "Bạn nên thử món này."],
    ["favorite", "/ˈfeɪvərɪt/", "tính từ", "yêu thích nhất", "What's your favorite food?", "Món ăn yêu thích của bạn là gì?"],
    ["sauce", "/sɔːs/", "danh từ", "nước chấm, nước sốt", "Fish sauce is in many dishes.", "Nước mắm có trong nhiều món."]
  ],
  grammar: {
    name: "Ôn tập: ăn uống", nameEn: "Review: food & drink",
    desc: "Tổng hợp Unit 8: đếm được / không đếm được, a cup of / a bowl of, How much / How many, a few / a little / a lot of, gọi món lịch sự.",
    formula: [["·", "<b>a bowl of</b> pho · <b>a glass of</b> juice"], ["?", "<b>How much</b> is a bowl? · <b>How many</b> dishes?"], ["·", "<b>a few</b> herbs · <b>a little</b> sauce · <b>a lot of</b> tourists"], ["✓", "<b>I’ll have</b>… · <b>Would you like</b>…?"]],
    examples: [["<b>A bowl of</b> pho with <b>a lot of</b> herbs, please.", "Cho một tô phở nhiều rau thơm."], ["My <b>favorite</b> dish is bun cha.", "Món yêu thích của tôi là bún chả."]],
    mistake: ["It taste very good.", "It tastes very good.", "Chủ ngữ it: tastes."]
  },
  dialogue: { title: "Giới thiệu món ăn cho khách", lines: [
    ["A", "What's your favorite Vietnamese dish?", "Món Việt yêu thích của bạn là gì?"],
    ["B", "Bun cha! It's famous in Hanoi.", "Bún chả! Món này nổi tiếng ở Hà Nội."],
    ["A", "What does it taste like?", "Nó có vị thế nào?"],
    ["B", "It's sweet and a little salty. You eat it with herbs.", "Ngọt và hơi mặn. Ăn kèm rau thơm."],
    ["A", "Is it spicy?", "Có cay không?"],
    ["B", "Only if you add chili. You should try it!", "Chỉ cay nếu bạn thêm ớt. Bạn nên thử!"]
  ] },
  drills: {
    fill: [
      ["A ___ of pho, please.", "bowl", ["bowl", "glass", "bottle"], "Phở đựng trong tô: a bowl of.", "Cho một tô phở.", "Chọn từ đúng"],
      ["This dish ___ delicious.", "tastes", ["tastes", "taste", "tasting"], "Chủ ngữ this dish: tastes.", "Món này ngon.", "Chia động từ (taste)"]
    ],
    error: [
      ["Hoi An is famous of its food.", 3, "for", ["for", "with", "by"], "Nổi tiếng về: famous for."]
    ]
  },
  reading: {
    title: "Street food in Vietnam",
    sentences: [
      ["Vietnamese street food is famous all over the world.", "Đồ ăn đường phố Việt Nam nổi tiếng khắp thế giới."],
      ["In the morning, many people eat a bowl of pho or a banh mi.", "Buổi sáng, nhiều người ăn một tô phở hoặc một ổ bánh mì."],
      ["Pho comes with fresh herbs, lime and a little chili.", "Phở ăn kèm rau thơm tươi, chanh và một chút ớt."],
      ["For lunch, bun cha is a favorite dish in Hanoi.", "Bữa trưa, bún chả là món được yêu thích ở Hà Nội."],
      ["Most dishes use fish sauce, so they taste a little salty.", "Hầu hết các món dùng nước mắm nên có vị hơi mặn."],
      ["Street food is cheap and delicious. Tourists should try it!", "Đồ ăn đường phố rẻ và ngon. Du khách nên thử!"]
    ],
    tf: [["Pho comes with fresh herbs.", true], ["Bun cha is a breakfast dish in Hue.", false], ["Street food in Vietnam is expensive.", false]],
    mc: [["Why do many dishes taste a little salty?", ["Because of the herbs.", "Because they use fish sauce.", "Because of the lime."], 1]],
    qa: [
      ["What do people eat in the morning?", "Buổi sáng mọi người ăn gì?", ["pho|banh mi"], "They eat pho or banh mi."],
      ["What is a favorite lunch dish in Hanoi?", "Món trưa được yêu thích ở Hà Nội là gì?", ["bun cha"], "Bun cha is a favorite lunch dish in Hanoi."],
      ["Is street food cheap or expensive?", "Đồ ăn đường phố rẻ hay đắt?", ["cheap"], "It is cheap and delicious."]
    ]
  },
  writing: [
    ["Món ăn yêu thích của bạn là gì?", ["What's your favorite food?", "What is your favorite food?", "What's your favorite dish?", "What is your favorite dish?"], ["favorite"], ""],
    ["Bạn nên thử món này.", ["You should try this dish.", "You should try this."], ["should", "try"], "should + động từ nguyên mẫu: nên làm gì."],
    ["Một tô phở giá năm mươi nghìn.", ["A bowl of pho costs fifty thousand.", "A bowl of pho is fifty thousand.", "A bowl of pho costs fifty thousand dong."], ["a bowl of", "fifty thousand"], ""]
  ]
}

,
/* ===== Unit 9 · Thành phố và đường đi ===== */
{
  id: "s1u9l1", stage: 1, unit: 9, n: 1, unitTitle: "Thành phố và đường đi",
  title: "Địa điểm trong thành phố", titleEn: "Places in town",
  words: [
    ["street", "/striːt/", "danh từ", "đường phố", "The bank is on Le Loi Street.", "Ngân hàng ở đường Lê Lợi."],
    ["road", "/rəʊd/", "danh từ", "con đường", "This road is very busy.", "Con đường này rất đông xe."],
    ["station", "/ˈsteɪʃn/", "danh từ", "nhà ga, bến", "Where is the train station?", "Ga tàu ở đâu?"],
    ["post office", "/ˈpəʊst ɒfɪs/", "danh từ", "bưu điện", "The post office opens at seven.", "Bưu điện mở cửa lúc bảy giờ."],
    ["museum", "/mjuˈziːəm/", "danh từ", "bảo tàng", "Let's visit the museum.", "Mình đi thăm bảo tàng đi."],
    ["pharmacy", "/ˈfɑːməsi/", "danh từ", "hiệu thuốc", "Is there a pharmacy near here?", "Gần đây có hiệu thuốc không?"],
    ["bridge", "/brɪdʒ/", "danh từ", "cây cầu", "Cross the bridge and turn left.", "Qua cầu rồi rẽ trái."],
    ["square", "/skweə(r)/", "danh từ", "quảng trường", "There's a big square in the city centre.", "Có một quảng trường lớn ở trung tâm."],
    ["church", "/tʃɜːtʃ/", "danh từ", "nhà thờ", "The church is very old.", "Nhà thờ rất cổ."],
    ["airport", "/ˈeəpɔːt/", "danh từ", "sân bay", "How far is the airport?", "Sân bay cách bao xa?"]
  ],
  grammar: {
    name: "Hỏi vị trí: Where is…? / It’s on…", nameEn: "Asking where places are",
    desc: "Hỏi một địa điểm ở đâu: Excuse me, where is…? hoặc Is there a… near here? Trả lời: It’s on + tên đường, It’s next to / opposite / near…",
    formula: [["?", "Excuse me, <b>where is</b> the museum?"], ["?", "<b>Is there a</b> pharmacy <b>near here</b>?"], ["✓", "It’s <b>on</b> Tran Phu Street."], ["✓", "It’s <b>next to</b> the bank. · It’s <b>opposite</b> the church."]],
    examples: [["<b>Excuse me, where is</b> the post office? — It’s <b>on</b> Hai Ba Trung Street.", "Xin lỗi, bưu điện ở đâu? — Ở đường Hai Bà Trưng."], ["<b>Is there a</b> pharmacy <b>near here</b>? — Yes, <b>opposite</b> the station.", "Gần đây có hiệu thuốc không? — Có, đối diện nhà ga."]],
    mistake: ["The bank is in Le Loi Street.", "The bank is on Le Loi Street.", "Ở trên một con đường: on + tên đường."]
  },
  dialogue: { title: "Hỏi chỗ gửi thư", lines: [
    ["A", "Excuse me, is there a post office near here?", "Xin lỗi, gần đây có bưu điện không?"],
    ["B", "Yes. It's on Dong Khoi Street.", "Có. Ở đường Đồng Khởi."],
    ["A", "Is it far?", "Có xa không ạ?"],
    ["B", "No, it's next to the church. Five minutes on foot.", "Không, ngay cạnh nhà thờ. Đi bộ năm phút."],
    ["A", "Is there a pharmacy there too?", "Ở đó có hiệu thuốc không?"],
    ["B", "Yes, opposite the post office.", "Có, đối diện bưu điện."]
  ] },
  drills: {
    fill: [
      ["The museum is ___ Tran Phu Street.", "on", ["on", "in", "at"], "Trên một con đường: on.", "Bảo tàng ở đường Trần Phú.", "Điền giới từ"],
      ["Is there a pharmacy ___ here?", "near", ["near", "next", "opposite"], "Gần đây: near here.", "Gần đây có hiệu thuốc không?", "Chọn từ đúng"],
      ["Excuse me, ___ is the station?", "where", ["where", "what", "how"], "Hỏi vị trí: where.", "Xin lỗi, nhà ga ở đâu?", "Chọn từ để hỏi"]
    ],
    error: [
      ["The bank is in Le Loi Street.", 3, "on", ["on", "at", "to"], "Ở trên đường: on + tên đường."],
      ["Is there an pharmacy near here?", 2, "a", ["a", "the", "some"], "pharmacy bắt đầu bằng phụ âm /f/: a."]
    ]
  },
  pron: [["church", "/tʃɜːtʃ/", "nhà thờ"], ["chess", "/tʃes/", "cờ vua"], "church: /ɜː/ kéo dài, kết thúc /tʃ/. chess: /e/ ngắn, kết thúc /s/.", "church và chess"],
  writing: [
    ["Xin lỗi, nhà ga ở đâu?", ["Excuse me, where is the station?", "Excuse me, where's the station?", "Excuse me, where is the train station?"], ["excuse me", "station"], ""],
    ["Gần đây có hiệu thuốc không?", ["Is there a pharmacy near here?"], ["is there", "near here"], ""],
    ["Ngân hàng ở cạnh bưu điện.", ["The bank is next to the post office."], ["next to", "post office"], ""]
  ]
},
{
  id: "s1u9l2", stage: 1, unit: 9, n: 2, unitTitle: "Thành phố và đường đi",
  title: "Chỉ đường", titleEn: "Giving directions",
  words: [
    ["turn", "/tɜːn/", "động từ", "rẽ", "Turn left at the bank.", "Rẽ trái ở ngân hàng."],
    ["left", "/left/", "danh từ, trạng từ", "bên trái", "It's on your left.", "Nó ở bên trái bạn."],
    ["right", "/raɪt/", "danh từ, trạng từ", "bên phải", "Turn right at the corner.", "Rẽ phải ở góc đường."],
    ["straight on", "/streɪt ɒn/", "trạng từ", "đi thẳng", "Go straight on for two hundred metres.", "Đi thẳng khoảng hai trăm mét."],
    ["cross", "/krɒs/", "động từ", "băng qua", "Cross the road carefully.", "Băng qua đường cẩn thận."],
    ["traffic lights", "/ˈtræfɪk laɪts/", "danh từ", "đèn giao thông", "Turn left at the traffic lights.", "Rẽ trái ở đèn giao thông."],
    ["crossroads", "/ˈkrɒsrəʊdz/", "danh từ", "ngã tư", "Go straight at the crossroads.", "Đi thẳng qua ngã tư."],
    ["far", "/fɑː(r)/", "tính từ", "xa", "It isn't far from here.", "Không xa đây lắm."],
    ["map", "/mæp/", "danh từ", "bản đồ", "Can you show me on the map?", "Bạn chỉ giúp tôi trên bản đồ được không?"],
    ["way", "/weɪ/", "danh từ", "đường đi, lối", "Is this the way to the station?", "Đây có phải đường đến nhà ga không?"]
  ],
  grammar: {
    name: "Câu mệnh lệnh", nameEn: "Imperatives",
    desc: "Dùng để chỉ đường, hướng dẫn, ra lệnh: bắt đầu bằng động từ nguyên mẫu, không có chủ ngữ. Phủ định: Don’t + động từ. Thêm please để lịch sự hơn.",
    formula: [["+", "<b>Turn</b> left. · <b>Go</b> straight on. · <b>Cross</b> the road."], ["−", "<b>Don’t turn</b> right. · <b>Don’t cross</b> here."], ["·", "<b>Take</b> the second street on the left."], ["·", "Please <b>wait</b> here."]],
    examples: [["<b>Go</b> straight on and <b>turn</b> right at the traffic lights.", "Đi thẳng rồi rẽ phải ở đèn giao thông."], ["<b>Don’t cross</b> the road here. It’s dangerous.", "Đừng băng qua đường ở đây. Nguy hiểm lắm."]],
    mistake: ["You turn left at the bank.", "Turn left at the bank.", "Chỉ đường thường dùng câu mệnh lệnh, bắt đầu luôn bằng động từ."]
  },
  dialogue: { title: "Hỏi đường đến bảo tàng", lines: [
    ["A", "Excuse me, how do I get to the museum?", "Xin lỗi, đến bảo tàng đi đường nào ạ?"],
    ["B", "Go straight on to the traffic lights.", "Đi thẳng đến đèn giao thông."],
    ["A", "And then?", "Rồi sao nữa ạ?"],
    ["B", "Turn left and cross the bridge.", "Rẽ trái và qua cầu."],
    ["A", "Is it far from the bridge?", "Từ cầu đến đó có xa không?"],
    ["B", "No. It's on your right after the bridge.", "Không. Qua cầu là thấy ở bên phải."]
  ] },
  drills: {
    fill: [
      ["___ left at the traffic lights.", "Turn", ["Turn", "Turns", "Turning"], "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu.", "Rẽ trái ở đèn giao thông.", "Chọn dạng đúng"],
      ["___ cross the road here. (đừng)", "Don't", ["Don't", "Not", "No"], "Mệnh lệnh phủ định: Don’t + V.", "Đừng băng qua đường ở đây.", "Chọn từ đúng"],
      ["Go ___ on for one hundred metres.", "straight", ["straight", "right", "left"], "Đi thẳng: go straight on.", "Đi thẳng một trăm mét.", "Chọn từ đúng"]
    ],
    error: [
      ["Not turn right here.", 0, "Don't", ["Don't", "No", "Doesn't"], "Mệnh lệnh phủ định: Don’t + động từ."],
      ["Turning left at the bank.", 0, "Turn", ["Turn", "Turns", "To turn"], "Câu mệnh lệnh dùng động từ nguyên mẫu."]
    ]
  },
  pron: [["right", "/raɪt/", "bên phải"], ["light", "/laɪt/", "ánh sáng, đèn"], "right: /r/ cong lưỡi, không chạm vòm miệng. light: /l/ đầu lưỡi chạm nướu trên.", "âm /r/ và /l/"],
  writing: [
    ["Rẽ trái ở đèn giao thông.", ["Turn left at the traffic lights.", "Turn left at the traffic light."], ["turn left", "traffic lights"], ""],
    ["Đi thẳng rồi qua cầu.", ["Go straight on and cross the bridge.", "Go straight and cross the bridge.", "Go straight on, then cross the bridge."], ["straight", "cross"], ""],
    ["Đừng băng qua đường ở đây.", ["Don't cross the road here.", "Do not cross the road here.", "Don't cross the street here."], ["don't", "cross"], ""]
  ]
},
{
  id: "s1u9l3", stage: 1, unit: 9, n: 3, unitTitle: "Thành phố và đường đi",
  title: "Phương tiện đi lại", titleEn: "Getting around",
  words: [
    ["taxi", "/ˈtæksi/", "danh từ", "xe taxi", "Let's take a taxi.", "Mình đi taxi đi."],
    ["train", "/treɪn/", "danh từ", "tàu hỏa", "The train leaves at nine.", "Tàu chạy lúc chín giờ."],
    ["motorbike", "/ˈməʊtəbaɪk/", "danh từ", "xe máy", "Most people ride motorbikes.", "Hầu hết mọi người đi xe máy."],
    ["bicycle", "/ˈbaɪsɪkl/", "danh từ", "xe đạp", "I go to school by bicycle.", "Tôi đi học bằng xe đạp."],
    ["ride", "/raɪd/", "động từ", "đi, lái (xe hai bánh)", "Can you ride a motorbike?", "Bạn biết đi xe máy không?"],
    ["ticket", "/ˈtɪkɪt/", "danh từ", "vé", "Two tickets to Hue, please.", "Cho hai vé đi Huế."],
    ["stop", "/stɒp/", "danh từ, động từ", "trạm dừng; dừng lại", "Get off at the next stop.", "Xuống ở trạm kế tiếp."],
    ["get on", "/ɡet ɒn/", "cụm động từ", "lên (xe)", "Get on the bus here.", "Lên xe buýt ở đây."],
    ["get off", "/ɡet ɒf/", "cụm động từ", "xuống (xe)", "Where do I get off?", "Tôi xuống ở đâu?"],
    ["on foot", "/ɒn fʊt/", "cụm từ", "đi bộ", "It's ten minutes on foot.", "Đi bộ mất mười phút."]
  ],
  grammar: {
    name: "How do you get to…? / How long does it take?", nameEn: "Transport questions",
    desc: "Hỏi cách đi: How do you get to work? → By bus / by motorbike / on foot. Hỏi mất bao lâu: How long does it take? → It takes twenty minutes.",
    formula: [["?", "<b>How do you get to</b> work?"], ["✓", "<b>By</b> bus. · <b>By</b> motorbike. · <b>On</b> foot."], ["?", "<b>How long does it take</b>?"], ["✓", "<b>It takes</b> about twenty minutes."]],
    examples: [["<b>How do you get to</b> the office? — <b>By</b> motorbike.", "Bạn đến văn phòng bằng gì? — Bằng xe máy."], ["<b>How long does it take</b> by train? — <b>It takes</b> two hours.", "Đi tàu mất bao lâu? — Mất hai tiếng."]],
    mistake: ["I go to work by foot.", "I go to work on foot.", "Đi bộ: on foot (không dùng by foot)."]
  },
  dialogue: { title: "Đi lại trong thành phố", lines: [
    ["A", "How do you get to work?", "Bạn đi làm bằng gì?"],
    ["B", "Usually by motorbike. Sometimes by bus.", "Thường bằng xe máy. Thỉnh thoảng đi xe buýt."],
    ["A", "How long does it take?", "Mất bao lâu?"],
    ["B", "About twenty minutes by motorbike.", "Khoảng hai mươi phút bằng xe máy."],
    ["A", "And by bus?", "Còn đi xe buýt?"],
    ["B", "Forty minutes. I get off near the office.", "Bốn mươi phút. Tôi xuống gần văn phòng."]
  ] },
  drills: {
    fill: [
      ["I go to school ___ foot.", "on", ["on", "by", "with"], "Đi bộ: on foot.", "Tôi đi bộ đến trường.", "Điền giới từ"],
      ["How long does it ___?", "take", ["take", "takes", "taking"], "Sau does dùng động từ nguyên mẫu: take.", "Mất bao lâu?", "Chọn dạng đúng"],
      ["Where do I get ___ the bus?", "off", ["off", "out", "down"], "Xuống xe buýt: get off.", "Tôi xuống xe buýt ở đâu?", "Chọn từ đúng"]
    ],
    error: [
      ["I go to work by foot.", 4, "on", ["on", "with", "in"], "Đi bộ: on foot."],
      ["It take thirty minutes.", 1, "takes", ["takes", "taking", "took"], "Chủ ngữ it: takes."]
    ]
  },
  pron: [["ride", "/raɪd/", "đi xe"], ["write", "/raɪt/", "viết"], "ride kết thúc /d/ (rung cổ, nguyên âm hơi dài). write kết thúc /t/ (không rung, ngắn gọn).", "âm cuối /d/ và /t/"],
  writing: [
    ["Bạn đi làm bằng gì?", ["How do you get to work?", "How do you go to work?"], ["how", "get to work"], ""],
    ["Mất khoảng hai mươi phút.", ["It takes about twenty minutes.", "It takes around twenty minutes."], ["takes", "twenty minutes"], ""],
    ["Cho hai vé đi Huế.", ["Two tickets to Hue, please.", "Can I have two tickets to Hue, please?"], ["two tickets", "to Hue"], ""]
  ]
},
{
  id: "s1u9l4", stage: 1, unit: 9, n: 4, unitTitle: "Thành phố và đường đi",
  title: "Hỏi đường lịch sự", titleEn: "Asking politely",
  words: [
    ["lost", "/lɒst/", "tính từ", "bị lạc", "Sorry, I'm lost.", "Xin lỗi, tôi bị lạc."],
    ["sign", "/saɪn/", "danh từ", "biển báo", "Follow the signs to the airport.", "Đi theo biển chỉ dẫn đến sân bay."],
    ["entrance", "/ˈentrəns/", "danh từ", "lối vào", "The entrance is on the left.", "Lối vào ở bên trái."],
    ["exit", "/ˈeksɪt/", "danh từ", "lối ra", "Where is the exit?", "Lối ra ở đâu?"],
    ["along", "/əˈlɒŋ/", "giới từ", "dọc theo", "Walk along this street.", "Đi dọc theo con phố này."],
    ["until", "/ənˈtɪl/", "giới từ", "cho đến khi", "Go straight until the end of the road.", "Đi thẳng đến cuối đường."],
    ["end", "/end/", "danh từ", "điểm cuối", "It's at the end of the street.", "Nó ở cuối phố."],
    ["block", "/blɒk/", "danh từ", "dãy nhà, khu nhà", "It's two blocks from here.", "Cách đây hai dãy nhà."],
    ["side", "/saɪd/", "danh từ", "bên, phía", "It's on the other side of the road.", "Nó ở phía bên kia đường."],
    ["show", "/ʃəʊ/", "động từ", "chỉ, cho xem", "Could you show me the way?", "Bạn chỉ đường giúp tôi được không?"]
  ],
  grammar: {
    name: "Hỏi lịch sự: Could you…?", nameEn: "Polite questions",
    desc: "Hỏi người lạ nên lịch sự: Could you + động từ…? (lịch sự hơn Can you). Could you tell me how to get to…? Đáp lại: Sure. / Of course. / Sorry, I’m not from here.",
    formula: [["?", "<b>Could you tell me</b> how to get to the station?"], ["?", "<b>Could you show me</b> on the map?"], ["✓", "<b>Sure.</b> · <b>Of course.</b>"], ["✗", "<b>Sorry, I’m not from here.</b>"]],
    examples: [["Excuse me, <b>could you tell me</b> where the exit is?", "Xin lỗi, bạn có thể cho tôi biết lối ra ở đâu không?"], ["<b>Could you</b> speak more slowly, please?", "Bạn có thể nói chậm hơn được không?"]],
    mistake: ["Could you tell me where is the exit?", "Could you tell me where the exit is?", "Trong câu hỏi lồng (tell me where…), chủ ngữ đứng trước động từ: where the exit is."]
  },
  dialogue: { title: "Bị lạc", lines: [
    ["A", "Excuse me. Sorry, I'm lost.", "Xin lỗi. Tôi bị lạc."],
    ["B", "No problem. Where do you want to go?", "Không sao. Bạn muốn đi đâu?"],
    ["A", "Could you tell me the way to the square?", "Bạn chỉ giúp tôi đường đến quảng trường được không?"],
    ["B", "Sure. Walk along this street until the end.", "Được. Đi dọc phố này đến cuối đường."],
    ["A", "And then?", "Rồi sao nữa?"],
    ["B", "The square is on the other side of the road.", "Quảng trường ở phía bên kia đường."]
  ] },
  drills: {
    fill: [
      ["___ you show me on the map?", "Could", ["Could", "Do", "Are"], "Nhờ lịch sự: Could you…?", "Bạn chỉ giúp trên bản đồ được không?", "Chọn từ đúng"],
      ["Walk ___ this street.", "along", ["along", "until", "across"], "Đi dọc theo: along.", "Đi dọc theo con phố này.", "Chọn từ đúng"],
      ["It's at the ___ of the road.", "end", ["end", "side", "block"], "Cuối đường: at the end of the road.", "Nó ở cuối đường.", "Chọn từ đúng"]
    ],
    error: [
      ["Could you tell me where is the exit?", 5, "the", ["the", "it", "an"], "Câu hỏi lồng: where the exit is (chủ ngữ trước động từ)."],
      ["It's in the other side of the road.", 1, "on", ["on", "at", "to"], "Phía bên kia: on the other side."]
    ]
  },
  pron: [["lost", "/lɒst/", "bị lạc"], ["last", "/lɑːst/", "cuối cùng"], "lost: /ɒ/ ngắn, tròn môi. last: /ɑː/ dài, mở miệng rộng.", "lost và last"],
  writing: [
    ["Xin lỗi, tôi bị lạc.", ["Excuse me, I'm lost.", "Sorry, I'm lost.", "Excuse me, I am lost."], ["lost"], ""],
    ["Bạn chỉ đường giúp tôi được không?", ["Could you show me the way?", "Can you show me the way?"], ["could you", "show"], ""],
    ["Đi dọc phố này đến cuối đường.", ["Walk along this street until the end.", "Go along this street until the end.", "Walk along this street to the end."], ["along", "end"], ""]
  ]
},
{
  id: "s1u9l5", stage: 1, unit: 9, n: 5, unitTitle: "Thành phố và đường đi",
  title: "Một ngày ở Hà Nội", titleEn: "A day in Hanoi",
  words: [
    ["lake", "/leɪk/", "danh từ", "hồ", "We walk around the lake.", "Chúng tôi đi dạo quanh hồ."],
    ["temple", "/ˈtempl/", "danh từ", "đền, chùa", "The temple is very old.", "Ngôi đền rất cổ."],
    ["crowded", "/ˈkraʊdɪd/", "tính từ", "đông đúc", "The market is crowded.", "Khu chợ rất đông."],
    ["view", "/vjuː/", "danh từ", "quang cảnh", "The view from here is beautiful.", "Quang cảnh từ đây rất đẹp."],
    ["sightseeing", "/ˈsaɪtsiːɪŋ/", "danh từ", "việc tham quan", "We go sightseeing in the morning.", "Buổi sáng chúng tôi đi tham quan."],
    ["guide", "/ɡaɪd/", "danh từ", "hướng dẫn viên", "Our guide speaks good English.", "Hướng dẫn viên của chúng tôi nói tiếng Anh tốt."],
    ["local", "/ˈləʊkl/", "tính từ", "địa phương", "Try the local food.", "Hãy thử đồ ăn địa phương."],
    ["history", "/ˈhɪstri/", "danh từ", "lịch sử", "Hanoi has a long history.", "Hà Nội có lịch sử lâu đời."],
    ["souvenir", "/ˌsuːvəˈnɪə(r)/", "danh từ", "quà lưu niệm", "I buy souvenirs for my family.", "Tôi mua quà lưu niệm cho gia đình."],
    ["explore", "/ɪkˈsplɔː(r)/", "động từ", "khám phá", "Let's explore the old streets.", "Mình đi khám phá phố cổ nhé."]
  ],
  grammar: {
    name: "Ôn tập: thành phố và đường đi", nameEn: "Review: directions",
    desc: "Tổng hợp Unit 9: hỏi vị trí (Where is…? Is there…?), câu mệnh lệnh chỉ đường, phương tiện (by / on foot), How long does it take?, hỏi lịch sự Could you…?",
    formula: [["?", "<b>Where is</b>…? · <b>Is there a</b>… <b>near here</b>?"], ["·", "<b>Turn</b> left · <b>Go</b> straight on · <b>Don’t</b> cross here"], ["·", "<b>by</b> taxi · <b>on</b> foot · <b>It takes</b> ten minutes"], ["?", "<b>Could you</b> show me the way?"]],
    examples: [["<b>Walk along</b> the lake and <b>turn right</b> at the temple.", "Đi dọc hồ rồi rẽ phải ở đền."], ["<b>It takes</b> five minutes <b>on foot</b>.", "Đi bộ mất năm phút."]],
    mistake: ["The lake is very crowd.", "The lake is very crowded.", "Tính từ “đông đúc” là crowded (crowd là danh từ: đám đông)."]
  },
  dialogue: { title: "Hướng dẫn viên và du khách", lines: [
    ["A", "Welcome to Hanoi! Today we explore the Old Quarter.", "Chào mừng đến Hà Nội! Hôm nay chúng ta khám phá phố cổ."],
    ["B", "Great! How do we get there?", "Tuyệt! Mình đến đó bằng gì?"],
    ["A", "On foot. It's ten minutes from the hotel.", "Đi bộ. Cách khách sạn mười phút."],
    ["B", "Is it crowded?", "Ở đó có đông không?"],
    ["A", "Yes, very! Stay close to me.", "Có, rất đông! Đi sát tôi nhé."],
    ["B", "Can we buy souvenirs there?", "Mình mua quà lưu niệm ở đó được không?"]
  ] },
  drills: {
    fill: [
      ["The market is very ___.", "crowded", ["crowded", "crowd", "crowds"], "Tính từ: crowded (đông đúc).", "Khu chợ rất đông.", "Chọn từ đúng"],
      ["It takes ten minutes ___ foot.", "on", ["on", "by", "in"], "Đi bộ: on foot.", "Đi bộ mất mười phút.", "Điền giới từ"]
    ],
    error: [
      ["Walks along the lake.", 0, "Walk", ["Walk", "Walking", "To walk"], "Câu mệnh lệnh dùng động từ nguyên mẫu."]
    ]
  },
  reading: {
    title: "A day in Hanoi",
    sentences: [
      ["Hanoi is the capital of Vietnam, and it has a long history.", "Hà Nội là thủ đô của Việt Nam và có lịch sử lâu đời."],
      ["In the morning, walk around Hoan Kiem Lake. The view is beautiful.", "Buổi sáng, hãy đi dạo quanh hồ Hoàn Kiếm. Quang cảnh rất đẹp."],
      ["Then visit the small temple on the lake.", "Sau đó thăm ngôi đền nhỏ trên hồ."],
      ["After that, explore the Old Quarter on foot. The streets are crowded but interesting.", "Sau đó, đi bộ khám phá phố cổ. Đường phố đông nhưng thú vị."],
      ["Try the local food, like bun cha and egg coffee.", "Hãy thử đồ ăn địa phương như bún chả và cà phê trứng."],
      ["In the evening, buy some souvenirs at the night market.", "Buổi tối, mua vài món quà lưu niệm ở chợ đêm."]
    ],
    tf: [["Hanoi is the capital of Vietnam.", true], ["You should explore the Old Quarter by taxi.", false], ["The night market is a good place for souvenirs.", true]],
    mc: [["What can you do in the morning?", ["Go to the night market.", "Walk around Hoan Kiem Lake.", "Eat bun cha."], 1]],
    qa: [
      ["How should you explore the Old Quarter?", "Nên khám phá phố cổ bằng cách nào?", ["on foot|walk"], "You should explore it on foot."],
      ["What local food can you try?", "Có thể thử đồ ăn địa phương nào?", ["bun cha|egg coffee"], "You can try bun cha and egg coffee."],
      ["Where can you buy souvenirs?", "Mua quà lưu niệm ở đâu?", ["night market|market"], "At the night market."]
    ]
  },
  writing: [
    ["Hà Nội có lịch sử lâu đời.", ["Hanoi has a long history."], ["long history"], ""],
    ["Hãy thử đồ ăn địa phương.", ["Try the local food.", "Try some local food.", "Try local food."], ["try", "local food"], "Câu mệnh lệnh: bắt đầu bằng động từ."],
    ["Khu chợ rất đông.", ["The market is very crowded."], ["market", "crowded"], ""]
  ]
}
,
/* ===== Unit 10 · Thời tiết và mùa ===== */
{
  id: "s1u10l1", stage: 1, unit: 10, n: 1, unitTitle: "Thời tiết và mùa",
  title: "Hôm nay trời thế nào?", titleEn: "What's the weather like?",
  words: [
    ["weather", "/ˈweðə(r)/", "danh từ", "thời tiết", "The weather is nice today.", "Hôm nay thời tiết đẹp."],
    ["sunny", "/ˈsʌni/", "tính từ", "nắng", "It's sunny this morning.", "Sáng nay trời nắng."],
    ["rainy", "/ˈreɪni/", "tính từ", "có mưa", "It's a rainy day.", "Hôm nay là một ngày mưa."],
    ["cloudy", "/ˈklaʊdi/", "tính từ", "nhiều mây", "It's cloudy but not cold.", "Trời nhiều mây nhưng không lạnh."],
    ["windy", "/ˈwɪndi/", "tính từ", "nhiều gió", "It's very windy by the sea.", "Ở gần biển gió rất to."],
    ["hot", "/hɒt/", "tính từ", "nóng", "It's too hot to go out.", "Trời nóng quá không ra ngoài được."],
    ["cold", "/kəʊld/", "tính từ", "lạnh", "It's cold in the evening.", "Buổi tối trời lạnh."],
    ["warm", "/wɔːm/", "tính từ", "ấm", "It's warm and sunny.", "Trời ấm và nắng."],
    ["cool", "/kuːl/", "tính từ", "mát", "The mornings are cool.", "Buổi sáng trời mát."],
    ["temperature", "/ˈtemprətʃə(r)/", "danh từ", "nhiệt độ", "The temperature is thirty degrees.", "Nhiệt độ là ba mươi độ."]
  ],
  grammar: {
    name: "What’s the weather like? — It’s…", nameEn: "Talking about the weather",
    desc: "Hỏi thời tiết: What’s the weather like (today / in Hanoi)? Trả lời dùng It’s + tính từ: It’s sunny / hot / cloudy. Tiếng Anh luôn cần chủ ngữ “It”, không nói “Is sunny”.",
    formula: [["?", "<b>What’s the weather like</b> today?"], ["✓", "<b>It’s</b> sunny. · <b>It’s</b> hot and windy."], ["−", "<b>It isn’t</b> cold."], ["·", "<b>It’s</b> thirty degrees."]],
    examples: [["<b>What’s the weather like</b> in Da Lat? — <b>It’s</b> cool.", "Thời tiết ở Đà Lạt thế nào? — Trời mát."], ["<b>It’s</b> cloudy, but <b>it isn’t</b> cold.", "Trời nhiều mây nhưng không lạnh."]],
    mistake: ["Is very hot today.", "It's very hot today.", "Câu nói về thời tiết luôn có chủ ngữ It."]
  },
  dialogue: { title: "Gọi điện hỏi thăm", lines: [
    ["A", "What's the weather like in Hanoi today?", "Hôm nay thời tiết ở Hà Nội thế nào?"],
    ["B", "It's cold and cloudy. What about Saigon?", "Trời lạnh và nhiều mây. Còn Sài Gòn?"],
    ["A", "It's sunny and very hot here.", "Ở đây nắng và rất nóng."],
    ["B", "What's the temperature?", "Nhiệt độ bao nhiêu?"],
    ["A", "About thirty-four degrees.", "Khoảng ba mươi tư độ."],
    ["B", "Wow! It's only fifteen here.", "Chà! Ở đây chỉ mười lăm độ thôi."]
  ] },
  drills: {
    fill: [
      ["What's the weather ___ today?", "like", ["like", "is", "how"], "Hỏi thời tiết: What’s the weather like?", "Hôm nay thời tiết thế nào?", "Chọn từ đúng"],
      ["___ very windy today.", "It's", ["It's", "Is", "There"], "Câu thời tiết bắt đầu bằng It’s.", "Hôm nay gió rất to.", "Chọn từ đúng"],
      ["It's not hot. It's ___.", "cool", ["cool", "hot", "sunny"], "Không nóng → mát: cool.", "Không nóng. Trời mát.", "Chọn từ đúng"]
    ],
    error: [
      ["Is very cold this morning.", 0, "It's", ["It's", "There", "This"], "Câu thời tiết cần chủ ngữ It: It’s very cold."],
      ["It's sun and warm today.", 1, "sunny", ["sunny", "suns", "sunning"], "Sau It’s dùng tính từ: sunny (sun là danh từ)."]
    ]
  },
  pron: [["cold", "/kəʊld/", "lạnh"], ["called", "/kɔːld/", "đã gọi"], "cold: /əʊ/ trượt từ ơ sang u. called: /ɔː/ dài, tròn môi, không trượt.", "cold và called"],
  writing: [
    ["Hôm nay thời tiết thế nào?", ["What's the weather like today?", "What is the weather like today?", "How is the weather today?"], ["weather", "like"], ""],
    ["Trời nắng và rất nóng.", ["It's sunny and very hot.", "It is sunny and very hot."], ["sunny", "hot"], ""],
    ["Nhiệt độ là hai mươi độ.", ["The temperature is twenty degrees.", "It's twenty degrees.", "It is twenty degrees."], ["twenty", "degrees"], ""]
  ]
},
{
  id: "s1u10l2", stage: 1, unit: 10, n: 2, unitTitle: "Thời tiết và mùa",
  title: "Bốn mùa", titleEn: "The four seasons",
  words: [
    ["season", "/ˈsiːzn/", "danh từ", "mùa", "What's your favorite season?", "Bạn thích mùa nào nhất?"],
    ["spring", "/sprɪŋ/", "danh từ", "mùa xuân", "Flowers grow in spring.", "Hoa nở vào mùa xuân."],
    ["summer", "/ˈsʌmə(r)/", "danh từ", "mùa hè", "Summer is very hot here.", "Mùa hè ở đây rất nóng."],
    ["autumn", "/ˈɔːtəm/", "danh từ", "mùa thu", "Hanoi is beautiful in autumn.", "Hà Nội đẹp vào mùa thu."],
    ["winter", "/ˈwɪntə(r)/", "danh từ", "mùa đông", "It's cold in winter.", "Mùa đông trời lạnh."],
    ["snow", "/snəʊ/", "danh từ, động từ", "tuyết; tuyết rơi", "It snows in Sa Pa sometimes.", "Thỉnh thoảng Sa Pa có tuyết."],
    ["storm", "/stɔːm/", "danh từ", "cơn bão, giông", "There's a big storm tonight.", "Tối nay có cơn giông lớn."],
    ["wet", "/wet/", "tính từ", "ẩm ướt", "My shoes are wet.", "Giày của tôi bị ướt."],
    ["dry", "/draɪ/", "tính từ", "khô", "The air is dry in winter.", "Mùa đông không khí khô."],
    ["degree", "/dɪˈɡriː/", "danh từ", "độ", "It's ten degrees today.", "Hôm nay mười độ."]
  ],
  grammar: {
    name: "in + mùa / tháng", nameEn: "in spring, in July",
    desc: "Nói điều gì xảy ra vào mùa nào: in + mùa (in summer, in the winter). Đi với tháng cũng dùng in: in July. Ôn lại: on + thứ / ngày, at + giờ.",
    formula: [["·", "<b>in</b> spring · <b>in</b> summer · <b>in</b> (the) autumn · <b>in</b> winter"], ["·", "<b>in</b> July · <b>in</b> December"], ["·", "It’s hot <b>in</b> summer."], ["!", "<b>on</b> Monday · <b>at</b> 7 o’clock"]],
    examples: [["It often rains <b>in</b> summer.", "Mùa hè trời hay mưa."], ["My birthday is <b>in</b> autumn, <b>in</b> October.", "Sinh nhật tôi vào mùa thu, tháng Mười."]],
    mistake: ["It's cold on winter.", "It's cold in winter.", "Với mùa luôn dùng in."]
  },
  dialogue: { title: "Mùa yêu thích", lines: [
    ["A", "What's your favorite season?", "Bạn thích mùa nào nhất?"],
    ["B", "Autumn. It's cool and dry in Hanoi.", "Mùa thu. Ở Hà Nội trời mát và khô."],
    ["A", "I love summer. I can go to the sea.", "Mình thích mùa hè. Mình được đi biển."],
    ["B", "But summer is wet and stormy.", "Nhưng mùa hè ẩm ướt và hay bão."],
    ["A", "Does it snow in winter?", "Mùa đông có tuyết không?"],
    ["B", "Not in Hanoi. Only in the mountains.", "Hà Nội thì không. Chỉ ở vùng núi thôi."]
  ] },
  drills: {
    fill: [
      ["It's very hot ___ summer.", "in", ["in", "on", "at"], "Với mùa dùng in.", "Mùa hè rất nóng.", "Điền giới từ"],
      ["My shoes are ___. It's raining.", "wet", ["wet", "dry", "warm"], "Trời mưa → giày ướt: wet.", "Giày tôi ướt. Trời đang mưa.", "Chọn từ đúng"],
      ["It's ten ___ today.", "degrees", ["degrees", "degree", "seasons"], "Mười độ: số nhiều degrees.", "Hôm nay mười độ.", "Chọn dạng đúng"]
    ],
    error: [
      ["It often rains on summer.", 3, "in", ["in", "at", "by"], "Với mùa dùng in."],
      ["It's five degree in Sa Pa.", 2, "degrees", ["degrees", "degree's", "degreeses"], "Trên một độ dùng số nhiều: degrees."]
    ]
  },
  pron: [["wet", "/wet/", "ướt"], ["wait", "/weɪt/", "chờ"], "wet: /e/ ngắn, không trượt. wait: /eɪ/ trượt từ e sang i.", "wet và wait"],
  writing: [
    ["Bạn thích mùa nào nhất?", ["What's your favorite season?", "What is your favorite season?", "What's your favourite season?", "Which season do you like best?"], ["favorite", "season"], ""],
    ["Mùa đông ở Hà Nội lạnh.", ["It's cold in Hanoi in winter.", "Winter in Hanoi is cold.", "It is cold in Hanoi in winter.", "In winter, it's cold in Hanoi."], ["cold", "winter"], ""],
    ["Mùa hè trời hay mưa.", ["It often rains in summer.", "It rains a lot in summer.", "In summer it often rains."], ["rains", "summer"], ""]
  ]
},
{
  id: "s1u10l3", stage: 1, unit: 10, n: 3, unitTitle: "Thời tiết và mùa",
  title: "Hoạt động ngoài trời", titleEn: "Outdoor activities",
  words: [
    ["hate", "/heɪt/", "động từ", "ghét", "I hate waiting in the rain.", "Tôi ghét đứng chờ dưới mưa."],
    ["prefer", "/prɪˈfɜː(r)/", "động từ", "thích hơn", "I prefer summer to winter.", "Tôi thích mùa hè hơn mùa đông."],
    ["swimming", "/ˈswɪmɪŋ/", "danh từ", "bơi lội", "I go swimming on Sundays.", "Chủ nhật tôi đi bơi."],
    ["hiking", "/ˈhaɪkɪŋ/", "danh từ", "đi bộ đường dài", "Do you like hiking?", "Bạn có thích đi bộ đường dài không?"],
    ["camping", "/ˈkæmpɪŋ/", "danh từ", "cắm trại", "We go camping in the spring.", "Mùa xuân chúng tôi đi cắm trại."],
    ["fishing", "/ˈfɪʃɪŋ/", "danh từ", "câu cá", "My father loves fishing.", "Bố tôi rất thích câu cá."],
    ["beach", "/biːtʃ/", "danh từ", "bãi biển", "Let's go to the beach.", "Mình ra biển đi."],
    ["mountain", "/ˈmaʊntən/", "danh từ", "núi", "The mountains are cool in summer.", "Mùa hè trên núi mát mẻ."],
    ["picnic", "/ˈpɪknɪk/", "danh từ", "chuyến dã ngoại", "We have a picnic in the park.", "Chúng tôi đi dã ngoại ở công viên."],
    ["outdoors", "/ˌaʊtˈdɔːz/", "trạng từ", "ngoài trời", "I like being outdoors.", "Tôi thích ở ngoài trời."]
  ],
  grammar: {
    name: "like / love / hate + V-ing", nameEn: "Verbs + -ing",
    desc: "Nói sở thích một hoạt động: like, love, enjoy, hate, prefer + động từ thêm -ing. Đi chơi các hoạt động: go + V-ing (go swimming, go camping).",
    formula: [["+", "I <b>like</b> swim<b>ming</b>. · She <b>loves</b> cook<b>ing</b>."], ["−", "I <b>don’t like</b> run<b>ning</b>. · He <b>hates</b> wait<b>ing</b>."], ["?", "<b>Do you like</b> hik<b>ing</b>?"], ["·", "<b>go</b> swimming · <b>go</b> camping · <b>go</b> fishing"]],
    examples: [["I <b>love going</b> to the beach in summer.", "Tôi rất thích đi biển vào mùa hè."], ["We <b>go camping</b> in the mountains.", "Chúng tôi đi cắm trại trên núi."]],
    mistake: ["I like swim in the sea.", "I like swimming in the sea.", "Sau like dùng V-ing: swimming (nhân đôi m)."]
  },
  dialogue: { title: "Rủ đi chơi cuối tuần", lines: [
    ["A", "Do you like hiking?", "Bạn có thích đi bộ đường dài không?"],
    ["B", "Yes, I love walking in the mountains.", "Có, mình rất thích đi bộ trên núi."],
    ["A", "Let's go camping this weekend!", "Cuối tuần này đi cắm trại đi!"],
    ["B", "Hmm, I hate sleeping outdoors.", "Ừm, mình ghét ngủ ngoài trời."],
    ["A", "Then let's have a picnic by the lake.", "Vậy mình đi dã ngoại cạnh hồ nhé."],
    ["B", "Good idea. I prefer that.", "Ý hay. Mình thích thế hơn."]
  ] },
  drills: {
    fill: [
      ["I love ___ in the sea.", "swimming", ["swimming", "swim", "swims"], "Sau love dùng V-ing.", "Tôi rất thích bơi ở biển.", "Chọn dạng đúng"],
      ["We often go ___ in the mountains.", "hiking", ["hiking", "hike", "to hike"], "go + V-ing: go hiking.", "Chúng tôi hay đi bộ đường dài trên núi.", "Chọn dạng đúng"],
      ["He ___ waiting. He's not patient.", "hates", ["hates", "loves", "enjoys"], "Không kiên nhẫn → ghét chờ: hates.", "Anh ấy ghét chờ đợi.", "Chọn từ đúng"]
    ],
    error: [
      ["I like swim in the sea.", 2, "swimming", ["swimming", "swims", "swam"], "Sau like dùng V-ing."],
      ["Let's go to camping this weekend.", 2, "-", ["-", "for", "on"], "go + V-ing, không có to: go camping."]
    ]
  },
  pron: [["feel", "/fiːl/", "cảm thấy"], ["fill", "/fɪl/", "lấp đầy"], "feel: /iː/ dài, kéo môi sang hai bên. fill: /ɪ/ ngắn, thả lỏng miệng.", "/iː/ dài và /ɪ/ ngắn"],
  writing: [
    ["Tôi rất thích bơi.", ["I love swimming.", "I really like swimming.", "I like swimming very much."], ["swimming"], ""],
    ["Bạn có thích đi cắm trại không?", ["Do you like camping?", "Do you like going camping?"], ["do you like", "camping"], ""],
    ["Tôi ghét chờ đợi.", ["I hate waiting."], ["hate", "waiting"], ""]
  ]
},
{
  id: "s1u10l4", stage: 1, unit: 10, n: 4, unitTitle: "Thời tiết và mùa",
  title: "Dự báo thời tiết", titleEn: "The weather forecast",
  words: [
    ["forecast", "/ˈfɔːkɑːst/", "danh từ", "bản dự báo", "Check the weather forecast first.", "Xem dự báo thời tiết trước đã."],
    ["sky", "/skaɪ/", "danh từ", "bầu trời", "The sky is blue today.", "Hôm nay trời xanh."],
    ["rain", "/reɪn/", "danh từ, động từ", "mưa; trời mưa", "It rains a lot in September.", "Tháng Chín mưa nhiều."],
    ["wind", "/wɪnd/", "danh từ", "gió", "The wind is very strong.", "Gió rất mạnh."],
    ["sun", "/sʌn/", "danh từ", "mặt trời", "The sun is very strong at noon.", "Buổi trưa nắng rất gắt."],
    ["cloud", "/klaʊd/", "danh từ", "đám mây", "There are dark clouds in the sky.", "Trên trời có mây đen."],
    ["raincoat", "/ˈreɪnkəʊt/", "danh từ", "áo mưa", "Take your raincoat with you.", "Mang theo áo mưa nhé."],
    ["freezing", "/ˈfriːzɪŋ/", "tính từ", "rét buốt", "It's freezing outside!", "Bên ngoài rét buốt!"],
    ["humid", "/ˈhjuːmɪd/", "tính từ", "nồm, ẩm", "Saigon is hot and humid.", "Sài Gòn nóng và ẩm."],
    ["typhoon", "/taɪˈfuːn/", "danh từ", "bão lớn (bão nhiệt đới)", "A typhoon is coming tomorrow.", "Ngày mai có bão lớn."]
  ],
  grammar: {
    name: "Danh từ và tính từ thời tiết", nameEn: "rain → rainy",
    desc: "Nhiều từ thời tiết có cặp danh từ – tính từ: rain → rainy, sun → sunny, cloud → cloudy, wind → windy, storm → stormy. Sau It’s / very dùng tính từ; sau a lot of / the / there is dùng danh từ. Động từ: It rains / It snows.",
    formula: [["N", "rain · sun · cloud · wind · storm"], ["Adj", "rain<b>y</b> · sun<b>ny</b> · cloud<b>y</b> · wind<b>y</b> · storm<b>y</b>"], ["·", "It’s <b>rainy</b>. · There is a lot of <b>rain</b>."], ["V", "It <b>rains</b>. · It <b>snows</b>."]],
    examples: [["The <b>wind</b> is strong. It’s very <b>windy</b>.", "Gió mạnh. Trời rất nhiều gió."], ["There are dark <b>clouds</b>. It’s <b>cloudy</b>.", "Có mây đen. Trời nhiều mây."]],
    mistake: ["It's very wind today.", "It's very windy today.", "Sau very dùng tính từ: windy."]
  },
  dialogue: { title: "Nghe dự báo", lines: [
    ["A", "Did you see the forecast?", "Bạn xem dự báo chưa?"],
    ["B", "Yes. A typhoon is coming to the coast.", "Rồi. Có bão lớn sắp vào bờ."],
    ["A", "Oh no. Is there a lot of rain?", "Ôi. Có mưa nhiều không?"],
    ["B", "Yes, heavy rain and strong wind.", "Có, mưa to và gió mạnh."],
    ["A", "I'll take my raincoat then.", "Vậy mình mang áo mưa."],
    ["B", "Good idea. And stay home tonight.", "Ý hay. Và tối nay ở nhà nhé."]
  ] },
  drills: {
    fill: [
      ["It's very ___ today. Hold your hat!", "windy", ["windy", "wind", "winds"], "Sau very dùng tính từ: windy.", "Hôm nay gió to lắm. Giữ mũ nhé!", "Chọn dạng đúng"],
      ["There is a lot of ___ in September.", "rain", ["rain", "rainy", "rains"], "Sau a lot of dùng danh từ: rain.", "Tháng Chín có nhiều mưa.", "Chọn dạng đúng"],
      ["Take your ___. It's raining.", "raincoat", ["raincoat", "forecast", "sky"], "Trời mưa → mang áo mưa.", "Mang áo mưa đi. Trời đang mưa.", "Chọn từ đúng"]
    ],
    error: [
      ["It's very wind today.", 2, "windy", ["windy", "winds", "winding"], "Sau very dùng tính từ: windy."],
      ["Saigon is hot and humidity.", 4, "humid.", ["humid.", "humids.", "humidly."], "Sau and nối hai tính từ: hot and humid."]
    ]
  },
  pron: [["cloud", "/klaʊd/", "đám mây"], ["clothes", "/kləʊðz/", "quần áo"], "cloud: /aʊ/ như “ao”. clothes: /əʊ/ như “âu”, cuối /ðz/.", "/aʊ/ và /əʊ/"],
  writing: [
    ["Xem dự báo thời tiết trước đã.", ["Check the weather forecast first.", "Check the forecast first."], ["check", "forecast"], ""],
    ["Bên ngoài rét buốt.", ["It's freezing outside.", "It is freezing outside."], ["freezing", "outside"], ""],
    ["Có mây đen trên trời.", ["There are dark clouds in the sky."], ["dark clouds", "sky"], ""]
  ]
},
{
  id: "s1u10l5", stage: 1, unit: 10, n: 5, unitTitle: "Thời tiết và mùa",
  title: "Khí hậu Việt Nam", titleEn: "Seasons in Vietnam",
  words: [
    ["north", "/nɔːθ/", "danh từ", "miền Bắc, phía bắc", "Hanoi is in the north.", "Hà Nội ở miền Bắc."],
    ["south", "/saʊθ/", "danh từ", "miền Nam, phía nam", "The south is hot all year.", "Miền Nam nóng quanh năm."],
    ["heat", "/hiːt/", "danh từ", "cái nóng", "I can't stand the heat.", "Tôi không chịu nổi cái nóng."],
    ["mild", "/maɪld/", "tính từ", "ôn hoà, dễ chịu", "The weather is mild in spring.", "Mùa xuân thời tiết dễ chịu."],
    ["flood", "/flʌd/", "danh từ", "lũ lụt", "There are floods in the central region.", "Miền Trung có lũ."],
    ["fan", "/fæn/", "danh từ", "quạt", "Turn on the fan, please.", "Bật quạt lên giúp mình."],
    ["air conditioner", "/ˈeə kənˌdɪʃənə(r)/", "danh từ", "máy lạnh, điều hoà", "The air conditioner is too cold.", "Máy lạnh lạnh quá."],
    ["indoors", "/ˌɪnˈdɔːz/", "trạng từ", "trong nhà", "Stay indoors at noon.", "Buổi trưa nên ở trong nhà."],
    ["sunscreen", "/ˈsʌnskriːn/", "danh từ", "kem chống nắng", "Don't forget your sunscreen.", "Đừng quên kem chống nắng."],
    ["rainy season", "/ˈreɪni ˌsiːzn/", "danh từ", "mùa mưa", "The rainy season starts in May.", "Mùa mưa bắt đầu vào tháng Năm."]
  ],
  grammar: {
    name: "Ôn tập: thời tiết và mùa", nameEn: "Review: weather",
    desc: "Tổng hợp Unit 10: What’s the weather like? — It’s + tính từ; in + mùa / tháng; like / love / hate + V-ing, go + V-ing; danh từ và tính từ thời tiết (rain / rainy).",
    formula: [["?", "<b>What’s the weather like</b>? — <b>It’s</b> mild."], ["·", "<b>in</b> summer · <b>in</b> May"], ["·", "I <b>love</b> go<b>ing</b> to the beach. · <b>go</b> swimming"], ["·", "a lot of <b>rain</b> · very <b>rainy</b>"]],
    examples: [["<b>In</b> the south, <b>it’s</b> hot all year.", "Ở miền Nam, trời nóng quanh năm."], ["I <b>hate</b> go<b>ing</b> out <b>in</b> the heat.", "Tôi ghét ra ngoài trời nóng."]],
    mistake: ["The rainy season starts on May.", "The rainy season starts in May.", "Với tháng dùng in."]
  },
  dialogue: { title: "Khách nước ngoài hỏi thời tiết", lines: [
    ["A", "I'm visiting Vietnam in July. What's the weather like?", "Tôi sẽ đến Việt Nam vào tháng Bảy. Thời tiết thế nào?"],
    ["B", "It's hot everywhere. In the south it's the rainy season.", "Chỗ nào cũng nóng. Miền Nam đang mùa mưa."],
    ["A", "Does it rain all day?", "Mưa cả ngày à?"],
    ["B", "No, usually only in the afternoon.", "Không, thường chỉ buổi chiều."],
    ["A", "And in the north?", "Còn miền Bắc?"],
    ["B", "Hot and humid. Bring sunscreen!", "Nóng và ẩm. Mang kem chống nắng nhé!"]
  ] },
  drills: {
    fill: [
      ["The rainy season starts ___ May.", "in", ["in", "on", "at"], "Với tháng dùng in.", "Mùa mưa bắt đầu vào tháng Năm.", "Điền giới từ"],
      ["It's hot. Turn on the ___, please.", "fan", ["fan", "flood", "heat"], "Trời nóng → bật quạt.", "Nóng quá. Bật quạt giúp mình.", "Chọn từ đúng"]
    ],
    error: [
      ["Stay indoor at noon.", 1, "indoors", ["indoors", "inside of", "indoors of"], "Trạng từ “trong nhà”: indoors (có s)."]
    ]
  },
  reading: {
    title: "Seasons in Vietnam",
    sentences: [
      ["Vietnam is a long country, so the weather is different in the north and the south.", "Việt Nam là đất nước dài nên thời tiết miền Bắc và miền Nam khác nhau."],
      ["The north has four seasons. Winter is cold and dry, and summer is hot and humid.", "Miền Bắc có bốn mùa. Mùa đông lạnh và khô, mùa hè nóng và ẩm."],
      ["Spring and autumn are mild. Many people love autumn in Hanoi.", "Mùa xuân và mùa thu dễ chịu. Nhiều người yêu mùa thu Hà Nội."],
      ["The south has only two seasons: the dry season and the rainy season.", "Miền Nam chỉ có hai mùa: mùa khô và mùa mưa."],
      ["The rainy season is from May to November. It usually rains in the afternoon.", "Mùa mưa từ tháng Năm đến tháng Mười Một. Thường mưa vào buổi chiều."],
      ["In the central region, there are often storms and floods in autumn.", "Ở miền Trung, mùa thu thường có bão và lũ."]
    ],
    tf: [["The north of Vietnam has four seasons.", true], ["Winter in the north is warm and wet.", false], ["In the south, it usually rains in the morning.", false]],
    mc: [["When is the rainy season in the south?", ["From May to November.", "From December to April.", "Only in winter."], 0]],
    qa: [
      ["How many seasons does the south have?", "Miền Nam có mấy mùa?", ["two|2"], "It has two seasons."],
      ["What is winter like in the north?", "Mùa đông miền Bắc thế nào?", ["cold|dry"], "It's cold and dry."],
      ["What often happens in the central region in autumn?", "Mùa thu ở miền Trung thường có gì?", ["storm|flood"], "There are often storms and floods."]
    ]
  },
  writing: [
    ["Miền Nam nóng quanh năm.", ["The south is hot all year.", "It's hot all year in the south.", "The south is hot all year round."], ["south", "all year"], ""],
    ["Đừng quên kem chống nắng.", ["Don't forget your sunscreen.", "Don't forget sunscreen.", "Do not forget your sunscreen."], ["don't forget", "sunscreen"], ""],
    ["Tôi thích mùa thu ở Hà Nội.", ["I like autumn in Hanoi.", "I love autumn in Hanoi.", "I like the autumn in Hanoi."], ["autumn", "Hanoi"], ""]
  ]
}

);
