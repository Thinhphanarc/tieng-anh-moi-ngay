/* Chặng I · Nền tảng (A1–A2) — nội dung bài học */
window.CONTENT = window.CONTENT || { lessons: [] };
window.CONTENT.lessons.push(

/* ===== Unit 1 · Chào hỏi & làm quen ===== */
{
  id: "s1u1l1", stage: 1, unit: 1, n: 1, unitTitle: "Chào hỏi và làm quen",
  title: "Chào hỏi", titleEn: "Greetings",
  words: [
    ["hello", "/həˈləʊ/", "thán từ", "xin chào", "Hello, I'm Lan.", "Xin chào, tôi là Lan."],
    ["good morning", "/ˌɡʊd ˈmɔːnɪŋ/", "cụm từ", "chào buổi sáng", "Good morning, Mr Nam.", "Chào buổi sáng, anh Nam."],
    ["good afternoon", "/ˌɡʊd ˌɑːftəˈnuːn/", "cụm từ", "chào buổi chiều", "Good afternoon, everyone.", "Chào buổi chiều mọi người."],
    ["good evening", "/ˌɡʊd ˈiːvnɪŋ/", "cụm từ", "chào buổi tối", "Good evening. How are you?", "Chào buổi tối. Bạn khỏe không?"],
    ["goodbye", "/ˌɡʊdˈbaɪ/", "thán từ", "tạm biệt", "Goodbye! See you tomorrow.", "Tạm biệt! Hẹn gặp lại ngày mai."],
    ["name", "/neɪm/", "danh từ", "tên", "My name is Minh.", "Tên tôi là Minh."],
    ["nice", "/naɪs/", "tính từ", "vui, dễ chịu, tốt", "Nice to meet you.", "Rất vui được gặp bạn."],
    ["meet", "/miːt/", "động từ", "gặp", "Nice to meet you too.", "Tôi cũng rất vui được gặp bạn."],
    ["fine", "/faɪn/", "tính từ", "khỏe, ổn", "I'm fine, thank you.", "Tôi khỏe, cảm ơn bạn."],
    ["thank you", "/ˈθæŋk juː/", "cụm từ", "cảm ơn", "Thank you very much.", "Cảm ơn bạn rất nhiều."]
  ],
  grammar: {
    name: "Động từ to be: am / is / are", nameEn: "The verb “to be”",
    desc: "To be nghĩa là “là, thì, ở”. Dùng để giới thiệu tên, nói về trạng thái, cảm xúc. Mỗi chủ ngữ đi với một dạng riêng.",
    formula: [["+", "I <b>am</b> · rút gọn: I’m"], ["+", "He / She / It <b>is</b> · he’s, she’s, it’s"], ["+", "You / We / They <b>are</b> · you’re, we’re"]],
    examples: [["I <b>am</b> Lan. Nice to meet you.", "Tôi là Lan. Rất vui được gặp bạn."], ["She <b>is</b> my friend.", "Cô ấy là bạn của tôi."], ["We <b>are</b> fine, thank you.", "Chúng tôi khỏe, cảm ơn bạn."]],
    mistake: ["I fine, thank you.", "I'm fine, thank you.", "Tiếng Việt nói “tôi khỏe”, nhưng tiếng Anh bắt buộc có am."]
  },
  dialogue: { title: "Gặp nhau buổi sáng", lines: [
    ["A", "Good morning! I'm Anna.", "Chào buổi sáng! Tôi là Anna."],
    ["B", "Good morning, Anna. My name is Minh.", "Chào buổi sáng Anna. Tên tôi là Minh."],
    ["A", "Nice to meet you, Minh.", "Rất vui được gặp anh, Minh."],
    ["B", "Nice to meet you too. How are you?", "Tôi cũng rất vui được gặp chị. Chị khỏe không?"],
    ["A", "I'm fine, thank you. And you?", "Tôi khỏe, cảm ơn. Còn anh?"],
    ["B", "I am very well, thanks.", "Tôi rất khỏe, cảm ơn."]
  ] },
  drills: {
    fill: [
      ["I ___ Minh. Nice to meet you.", "am", ["am", "is", "are"], "Chủ ngữ I luôn đi với am.", "Tôi là Minh. Rất vui được gặp bạn.", "Điền am / is / are"],
      ["She ___ my teacher.", "is", ["am", "is", "are"], "She là ngôi thứ ba số ít nên dùng is.", "Cô ấy là giáo viên của tôi.", "Điền am / is / are"],
      ["You ___ very kind.", "are", ["am", "is", "are"], "You luôn đi với are.", "Bạn thật tốt bụng.", "Điền am / is / are"]
    ],
    error: [
      ["My name are Lan.", 2, "is", ["is", "am", "be"], "“My name” là số ít nên dùng is."],
      ["I is fine, thank you.", 1, "am", ["am", "are", "be"], "Chủ ngữ I đi với am."]
    ]
  },
  pron: [["thank", "/θæŋk/", "cảm ơn"], ["tank", "/tæŋk/", "bể chứa"], "/θ/: đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi ra. /t/: đầu lưỡi chạm nướu trên rồi bật hơi.", "âm /θ/ và /t/"],
  writing: [
    ["Chào buổi sáng. Tên tôi là Minh.", ["Good morning. My name is Minh.", "Good morning. My name's Minh.", "Good morning. I am Minh.", "Good morning. I'm Minh."], ["good morning", "name"], "Có thể nói “My name is Minh” hoặc “I’m Minh”."],
    ["Rất vui được gặp bạn.", ["Nice to meet you."], ["nice", "meet"], ""],
    ["Tôi khỏe, cảm ơn bạn.", ["I'm fine, thank you.", "I am fine, thank you.", "I'm fine, thanks.", "I am fine, thanks."], ["fine", "thank you"], "Đừng quên am: I’m fine."]
  ]
},
{
  id: "s1u1l2", stage: 1, unit: 1, n: 2, unitTitle: "Chào hỏi và làm quen",
  title: "Giới thiệu bản thân", titleEn: "About me",
  words: [
    ["from", "/frɒm/", "giới từ", "từ (đâu đến)", "I'm from Hanoi.", "Tôi đến từ Hà Nội."],
    ["live", "/lɪv/", "động từ", "sống", "I live in Da Nang.", "Tôi sống ở Đà Nẵng."],
    ["city", "/ˈsɪti/", "danh từ", "thành phố", "Hanoi is a big city.", "Hà Nội là một thành phố lớn."],
    ["student", "/ˈstjuːdnt/", "danh từ", "sinh viên, học sinh", "I am a student.", "Tôi là sinh viên."],
    ["work", "/wɜːk/", "động từ", "làm việc", "I work in an office.", "Tôi làm việc trong văn phòng."],
    ["job", "/dʒɒb/", "danh từ", "công việc, nghề", "I like my job.", "Tôi thích công việc của mình."],
    ["friend", "/frend/", "danh từ", "bạn, bạn bè", "Lan is my friend.", "Lan là bạn của tôi."],
    ["where", "/weə(r)/", "trạng từ", "ở đâu", "Where are you from?", "Bạn từ đâu đến?"],
    ["what", "/wɒt/", "đại từ", "cái gì, gì", "What is your name?", "Bạn tên là gì?"],
    ["this", "/ðɪs/", "đại từ", "đây, cái này", "This is my friend, Nam.", "Đây là bạn tôi, Nam."]
  ],
  grammar: {
    name: "Câu hỏi với to be", nameEn: "Questions with “to be”",
    desc: "Muốn hỏi, đưa am / is / are lên trước chủ ngữ. Thêm từ để hỏi như What (gì), Where (ở đâu) ở đầu câu.",
    formula: [["?", "<b>Are</b> you a student?"], ["?", "<b>Is</b> he from Hue?"], ["?", "<b>Where are</b> you from?"], ["✓", "Yes, I <b>am</b>. / No, I’m <b>not</b>."]],
    examples: [["<b>Where are</b> you from? — I’m from Hanoi.", "Bạn từ đâu đến? — Tôi đến từ Hà Nội."], ["<b>Is</b> she a student? — Yes, she <b>is</b>.", "Cô ấy là sinh viên à? — Đúng vậy."], ["<b>What is</b> your job?", "Bạn làm nghề gì?"]],
    mistake: ["Where you are from?", "Where are you from?", "Trong câu hỏi, are phải đứng trước you."]
  },
  dialogue: { title: "Làm quen ở quán cà phê", lines: [
    ["A", "Hi, I'm Tom. What's your name?", "Chào, tôi là Tom. Bạn tên gì?"],
    ["B", "Hi Tom. I'm Linh.", "Chào Tom. Tôi là Linh."],
    ["A", "Where are you from, Linh?", "Bạn từ đâu đến, Linh?"],
    ["B", "I'm from Da Nang. And you?", "Tôi đến từ Đà Nẵng. Còn bạn?"],
    ["A", "I'm from London. Are you a student?", "Tôi đến từ London. Bạn là sinh viên à?"],
    ["B", "No, I'm not. I work in an office.", "Không. Tôi làm việc ở văn phòng."]
  ] },
  drills: {
    fill: [
      ["___ are you from? — I'm from Hue.", "Where", ["Where", "What", "Who"], "Hỏi nơi chốn dùng Where.", "Bạn từ đâu đến? — Tôi đến từ Huế.", "Chọn từ để hỏi"],
      ["___ you a student? — Yes, I am.", "Are", ["Are", "Is", "Am"], "Chủ ngữ you nên dùng Are.", "Bạn là sinh viên à? — Đúng.", "Điền Am / Is / Are"],
      ["What ___ your name?", "is", ["is", "are", "am"], "“your name” là số ít nên dùng is.", "Bạn tên là gì?", "Điền am / is / are"]
    ],
    error: [
      ["Is you from Hanoi?", 0, "Are", ["Are", "Am", "Be"], "Chủ ngữ you đi với Are."],
      ["I live on Da Nang.", 2, "in", ["in", "at", "to"], "Sống ở một thành phố: live in."]
    ]
  },
  pron: [["live", "/lɪv/", "sống"], ["leave", "/liːv/", "rời đi"], "/ɪ/ ngắn, miệng thả lỏng. /iː/ dài, miệng hơi cười như đang nói “i” kéo dài.", "âm /ɪ/ và /iː/"],
  writing: [
    ["Bạn từ đâu đến?", ["Where are you from?"], ["where", "from"], ""],
    ["Tôi sống ở Đà Nẵng.", ["I live in Da Nang."], ["live", "in"], "Sống ở thành phố: live in + tên thành phố."],
    ["Tôi không phải là sinh viên. Tôi làm việc ở văn phòng.", ["I'm not a student. I work in an office.", "I am not a student. I work in an office."], ["student", "work", "office"], "Phủ định của to be: I’m not. Trước office (bắt đầu bằng nguyên âm) dùng an."]
  ]
},
{
  id: "s1u1l3", stage: 1, unit: 1, n: 3, unitTitle: "Chào hỏi và làm quen",
  title: "Quốc gia và quốc tịch", titleEn: "Countries & nationalities",
  words: [
    ["country", "/ˈkʌntri/", "danh từ", "đất nước", "Vietnam is a beautiful country.", "Việt Nam là một đất nước xinh đẹp."],
    ["Vietnamese", "/ˌvjetnəˈmiːz/", "tính từ", "(người, tiếng) Việt Nam", "I am Vietnamese.", "Tôi là người Việt Nam."],
    ["Japanese", "/ˌdʒæpəˈniːz/", "tính từ", "(người, tiếng) Nhật", "Yuki is Japanese.", "Yuki là người Nhật."],
    ["Korean", "/kəˈriːən/", "tính từ", "(người, tiếng) Hàn Quốc", "My colleague is Korean.", "Đồng nghiệp của tôi là người Hàn."],
    ["Chinese", "/ˌtʃaɪˈniːz/", "tính từ", "(người, tiếng) Trung Quốc", "Is he Chinese?", "Anh ấy là người Trung Quốc à?"],
    ["English", "/ˈɪŋɡlɪʃ/", "tính từ, danh từ", "(người) Anh; tiếng Anh", "She speaks English.", "Cô ấy nói tiếng Anh."],
    ["American", "/əˈmerɪkən/", "tính từ", "(người) Mỹ", "They aren't American.", "Họ không phải người Mỹ."],
    ["Australian", "/ɒˈstreɪliən/", "tính từ", "(người) Úc", "My teacher is Australian.", "Giáo viên của tôi là người Úc."],
    ["language", "/ˈlæŋɡwɪdʒ/", "danh từ", "ngôn ngữ", "English is an international language.", "Tiếng Anh là một ngôn ngữ quốc tế."],
    ["speak", "/spiːk/", "động từ", "nói (một ngôn ngữ)", "I speak a little English.", "Tôi nói được một chút tiếng Anh."]
  ],
  grammar: {
    name: "To be phủ định", nameEn: "Negative “to be”",
    desc: "Thêm not ngay sau am / is / are để nói “không phải”. Khi nói hằng ngày thường dùng dạng rút gọn: isn’t, aren’t, I’m not.",
    formula: [["−", "I <b>am not</b> · I’m not"], ["−", "He / She / It <b>is not</b> · isn’t"], ["−", "You / We / They <b>are not</b> · aren’t"]],
    examples: [["I’m Vietnamese. I’m <b>not</b> Chinese.", "Tôi là người Việt. Tôi không phải người Trung Quốc."], ["They <b>aren’t</b> American. They’re Australian.", "Họ không phải người Mỹ. Họ là người Úc."], ["She <b>isn’t</b> Korean.", "Cô ấy không phải người Hàn."]],
    mistake: ["He not is Korean.", "He isn't Korean.", "not đứng sau is, không đứng trước."]
  },
  dialogue: { title: "Trò chuyện với đối tác", lines: [
    ["A", "Are you Japanese?", "Bạn là người Nhật à?"],
    ["B", "No, I'm not. I'm Vietnamese.", "Không. Tôi là người Việt Nam."],
    ["A", "Oh, your English is very good!", "Ồ, tiếng Anh của bạn rất tốt!"],
    ["B", "Thank you. Where are you from?", "Cảm ơn bạn. Bạn từ đâu đến?"],
    ["A", "I'm from Seoul. I'm Korean.", "Tôi đến từ Seoul. Tôi là người Hàn."],
    ["B", "Is Korean a difficult language?", "Tiếng Hàn có khó không?"],
    ["A", "No, it isn't very difficult.", "Không, nó không khó lắm."]
  ] },
  drills: {
    fill: [
      ["I'm Vietnamese. I ___ Chinese.", "am not", ["am not", "is not", "are not"], "Chủ ngữ I: am not (I’m not).", "Tôi là người Việt. Tôi không phải người Trung Quốc.", "Điền dạng phủ định"],
      ["She ___ American. She's English.", "isn't|is not", ["isn't", "aren't", "am not"], "Chủ ngữ she: isn’t.", "Cô ấy không phải người Mỹ. Cô ấy là người Anh.", "Điền dạng phủ định"],
      ["We ___ students. We work in a bank.", "aren't|are not", ["aren't", "isn't", "am not"], "Chủ ngữ we: aren’t.", "Chúng tôi không phải sinh viên. Chúng tôi làm ở ngân hàng.", "Điền dạng phủ định"]
    ],
    error: [
      ["They isn't Korean.", 1, "aren't", ["aren't", "isn't", "not"], "Chủ ngữ they đi với aren’t."],
      ["I am Vietnam.", 2, "Vietnamese", ["Vietnamese", "Vietnams", "Viet"], "Nói quốc tịch dùng Vietnamese; Vietnam là tên nước."]
    ]
  },
  pron: [["she", "/ʃiː/", "cô ấy"], ["see", "/siː/", "nhìn thấy"], "/ʃ/: chu môi tròn, thổi hơi như khi nói “suỵt”. /s/: môi dẹt, hơi thoát qua kẽ răng.", "âm /ʃ/ và /s/"],
  writing: [
    ["Tôi không phải người Nhật. Tôi là người Việt.", ["I'm not Japanese. I'm Vietnamese.", "I am not Japanese. I am Vietnamese."], ["not", "Vietnamese"], "Quốc tịch luôn viết hoa chữ cái đầu."],
    ["Cô ấy nói tiếng Anh.", ["She speaks English."], ["speak", "English"], "Chủ ngữ she: speak thêm -s thành speaks (học kỹ ở Unit 3)."],
    ["Họ không phải người Mỹ.", ["They aren't American.", "They are not American.", "They're not American."], ["not", "American"], ""]
  ]
},
{
  id: "s1u1l4", stage: 1, unit: 1, n: 4, unitTitle: "Chào hỏi và làm quen",
  title: "Tuổi và thông tin liên lạc", titleEn: "Age & contact details",
  words: [
    ["number", "/ˈnʌmbə(r)/", "danh từ", "số", "What's your phone number?", "Số điện thoại của bạn là gì?"],
    ["phone", "/fəʊn/", "danh từ", "điện thoại", "My phone is new.", "Điện thoại của tôi mới."],
    ["old", "/əʊld/", "tính từ", "già, cũ; (bao nhiêu) tuổi", "How old are you?", "Bạn bao nhiêu tuổi?"],
    ["year", "/jɪə(r)/", "danh từ", "năm", "I'm thirty years old.", "Tôi ba mươi tuổi."],
    ["thirteen", "/ˌθɜːˈtiːn/", "số", "mười ba", "My son is thirteen.", "Con trai tôi mười ba tuổi."],
    ["thirty", "/ˈθɜːti/", "số", "ba mươi", "She is thirty years old.", "Cô ấy ba mươi tuổi."],
    ["twenty", "/ˈtwenti/", "số", "hai mươi", "My sister is twenty.", "Em gái tôi hai mươi tuổi."],
    ["hundred", "/ˈhʌndrəd/", "số", "trăm", "It's one hundred thousand dong.", "Nó giá một trăm nghìn đồng."],
    ["address", "/əˈdres/", "danh từ", "địa chỉ", "What's your address?", "Địa chỉ của bạn là gì?"],
    ["email", "/ˈiːmeɪl/", "danh từ", "thư điện tử, email", "What's your email address?", "Địa chỉ email của bạn là gì?"]
  ],
  grammar: {
    name: "Hỏi tuổi và thông tin", nameEn: "How old…? · What’s your…?",
    desc: "Hỏi tuổi: How old + am / is / are + chủ ngữ? Trả lời bằng to be + số (+ years old). Hỏi thông tin: What’s your + danh từ?",
    formula: [["?", "<b>How old are</b> you?"], ["✓", "I’m <b>thirty</b> (years old)."], ["?", "<b>What’s</b> your phone number?"], ["✓", "<b>It’s</b> 0912 345 678."]],
    examples: [["<b>How old is</b> your son? — He’s <b>thirteen</b>.", "Con trai bạn bao nhiêu tuổi? — Cháu mười ba tuổi."], ["<b>What’s</b> your email address?", "Địa chỉ email của bạn là gì?"]],
    mistake: ["I have thirty years old.", "I'm thirty years old.", "Tiếng Việt nói “tôi có ba mươi tuổi”, nhưng tiếng Anh dùng to be, không dùng have."]
  },
  dialogue: { title: "Đăng ký phòng tập", lines: [
    ["A", "Good afternoon. What's your name, please?", "Chào anh. Anh tên là gì ạ?"],
    ["B", "My name is Hoang Nam.", "Tên tôi là Hoàng Nam."],
    ["A", "How old are you?", "Anh bao nhiêu tuổi?"],
    ["B", "I'm thirty-two years old.", "Tôi ba mươi hai tuổi."],
    ["A", "And what's your phone number?", "Còn số điện thoại của anh là gì?"],
    ["B", "It's 0905 123 456.", "Là 0905 123 456."],
    ["A", "Thank you. What's your email address?", "Cảm ơn anh. Địa chỉ email của anh là gì?"],
    ["B", "It's nam@email.com.", "Là nam@email.com."]
  ] },
  drills: {
    fill: [
      ["How ___ are you? — I'm twenty.", "old", ["old", "many", "age"], "Hỏi tuổi: How old…?", "Bạn bao nhiêu tuổi? — Tôi hai mươi tuổi.", "Chọn từ đúng"],
      ["___ your phone number?", "What's|What is", ["What's", "How's", "Where's"], "Hỏi thông tin cá nhân: What’s your…?", "Số điện thoại của bạn là gì?", "Chọn từ để hỏi"],
      ["My son ___ thirteen years old.", "is", ["is", "has", "are"], "Nói tuổi dùng to be, không dùng have.", "Con trai tôi mười ba tuổi.", "Điền động từ"]
    ],
    error: [
      ["I have thirty years old.", 1, "am", ["am", "is", "has"], "Nói tuổi dùng to be: I am thirty years old."],
      ["What is you email address?", 2, "your", ["your", "you're", "yours"], "Trước danh từ dùng tính từ sở hữu your (của bạn)."]
    ]
  },
  pron: [["thirteen", "/ˌθɜːˈtiːn/", "13"], ["thirty", "/ˈθɜːti/", "30"], "Số đuôi -teen nhấn vào âm cuối và kéo dài “teen”. Số đuôi -ty nhấn âm đầu, “ty” đọc nhẹ và ngắn.", "trọng âm 13 và 30"],
  writing: [
    ["Bạn bao nhiêu tuổi?", ["How old are you?"], ["how old"], ""],
    ["Tôi ba mươi tuổi.", ["I'm thirty years old.", "I am thirty years old.", "I'm thirty.", "I am thirty."], ["thirty", "years old"], "Dùng to be (am), không dùng have."],
    ["Địa chỉ email của bạn là gì?", ["What's your email address?", "What is your email address?"], ["email", "address"], ""]
  ]
},
{
  id: "s1u1l5", stage: 1, unit: 1, n: 5, unitTitle: "Chào hỏi và làm quen",
  title: "Đồng nghiệp mới", titleEn: "Meet the new colleague",
  words: [
    ["colleague", "/ˈkɒliːɡ/", "danh từ", "đồng nghiệp", "This is my new colleague.", "Đây là đồng nghiệp mới của tôi."],
    ["new", "/njuː/", "tính từ", "mới", "Is this your new phone?", "Đây là điện thoại mới của bạn à?"],
    ["team", "/tiːm/", "danh từ", "nhóm, đội", "Welcome to our team!", "Chào mừng bạn đến với nhóm của chúng tôi!"],
    ["company", "/ˈkʌmpəni/", "danh từ", "công ty", "I work for a big company.", "Tôi làm cho một công ty lớn."],
    ["office", "/ˈɒfɪs/", "danh từ", "văn phòng", "Our office is in District 1.", "Văn phòng của chúng tôi ở Quận 1."],
    ["married", "/ˈmærid/", "tính từ", "đã kết hôn", "Are you married?", "Bạn đã kết hôn chưa?"],
    ["single", "/ˈsɪŋɡl/", "tính từ", "độc thân", "No, I'm single.", "Chưa, tôi độc thân."],
    ["friendly", "/ˈfrendli/", "tính từ", "thân thiện", "She is very friendly.", "Cô ấy rất thân thiện."],
    ["welcome", "/ˈwelkəm/", "thán từ, động từ", "chào mừng", "Welcome to Vietnam!", "Chào mừng đến Việt Nam!"],
    ["everyone", "/ˈevriwʌn/", "đại từ", "mọi người", "Hello, everyone!", "Xin chào mọi người!"]
  ],
  grammar: {
    name: "Ôn tập: to be", nameEn: "Review: am / is / are",
    desc: "Tổng hợp ba dạng của to be: khẳng định, phủ định và câu hỏi. Đây là nền tảng cho hầu hết các câu giới thiệu.",
    formula: [["+", "She <b>is</b> friendly."], ["−", "She <b>isn’t</b> married."], ["?", "<b>Is</b> she new? — Yes, she <b>is</b>."]],
    examples: [["This <b>is</b> Mai. She <b>is</b> our new colleague.", "Đây là Mai. Cô ấy là đồng nghiệp mới của chúng ta."], ["<b>Are</b> you married? — No, I’m <b>not</b>. I’m single.", "Bạn kết hôn chưa? — Chưa, tôi độc thân."]],
    mistake: ["She is single?", "Is she single?", "Câu hỏi phải đưa is lên trước she."]
  },
  dialogue: { title: "Giới thiệu đồng nghiệp mới", lines: [
    ["A", "Hello, everyone. This is Mai, our new colleague.", "Chào mọi người. Đây là Mai, đồng nghiệp mới của chúng ta."],
    ["B", "Hi! Nice to meet you all.", "Chào mọi người! Rất vui được gặp mọi người."],
    ["A", "Welcome to the team, Mai. Where are you from?", "Chào mừng Mai đến với nhóm. Em từ đâu đến?"],
    ["B", "I'm from Hue, but I live in Ho Chi Minh City now.", "Em đến từ Huế, nhưng giờ em sống ở TP. Hồ Chí Minh."],
    ["A", "Great. Is this your first job?", "Tuyệt. Đây là công việc đầu tiên của em à?"],
    ["B", "No, it isn't. This is my second company.", "Không ạ. Đây là công ty thứ hai của em."]
  ] },
  drills: {
    fill: [
      ["___ she married? — No, she isn't.", "Is", ["Is", "Are", "Am"], "Chủ ngữ she nên dùng Is.", "Cô ấy kết hôn chưa? — Chưa.", "Điền Am / Is / Are"],
      ["We ___ in the same team.", "are", ["are", "is", "am"], "Chủ ngữ we đi với are.", "Chúng tôi ở cùng một nhóm.", "Điền am / is / are"]
    ],
    error: [
      ["She are very friendly.", 1, "is", ["is", "am", "be"], "Chủ ngữ she đi với is."]
    ]
  },
  reading: {
    title: "Meet our new colleague",
    sentences: [
      ["This is Mai Tran, our new colleague.", "Đây là Trần Mai, đồng nghiệp mới của chúng ta."],
      ["She is twenty-eight years old, and she is from Hue.", "Cô ấy 28 tuổi và đến từ Huế."],
      ["Mai lives in Ho Chi Minh City now.", "Hiện Mai sống ở TP. Hồ Chí Minh."],
      ["She is not married. She is single.", "Cô ấy chưa kết hôn. Cô ấy độc thân."],
      ["Mai speaks English and a little Japanese.", "Mai nói tiếng Anh và một chút tiếng Nhật."],
      ["She is very friendly, so please say hello to her!", "Cô ấy rất thân thiện, vì vậy hãy chào cô ấy nhé!"]
    ],
    tf: [["Mai is from Hue.", true], ["Mai is married.", false], ["Mai speaks Korean.", false]],
    mc: [["How old is Mai?", ["She is eighteen.", "She is twenty-eight.", "She is thirty-eight."], 1]],
    qa: [
      ["Where does Mai live now?", "Mai hiện sống ở đâu?", ["Ho Chi Minh City|Saigon"], "She lives in Ho Chi Minh City."],
      ["What languages does Mai speak?", "Mai nói những ngôn ngữ nào?", ["English", "Japanese"], "She speaks English and a little Japanese."],
      ["Is Mai married?", "Mai đã kết hôn chưa?", ["no|not|single"], "No, she isn't. She is single."]
    ]
  },
  writing: [
    ["Chào mừng bạn đến với nhóm!", ["Welcome to the team!", "Welcome to our team!"], ["welcome", "team"], ""],
    ["Cô ấy rất thân thiện.", ["She is very friendly.", "She's very friendly."], ["very", "friendly"], ""],
    ["Bạn đã kết hôn chưa?", ["Are you married?"], ["married"], "Tiếng Anh hỏi “Are you married?” cho nghĩa “Bạn kết hôn chưa?”."]
  ]
}
,
/* ===== Unit 2 · Gia đình ===== */
{
  id: "s1u2l1", stage: 1, unit: 2, n: 1, unitTitle: "Gia đình",
  title: "Thành viên gia đình", titleEn: "Family members",
  words: [
    ["family", "/ˈfæməli/", "danh từ", "gia đình", "I love my family.", "Tôi yêu gia đình mình."],
    ["father", "/ˈfɑːðə(r)/", "danh từ", "bố, cha", "My father is a doctor.", "Bố tôi là bác sĩ."],
    ["mother", "/ˈmʌðə(r)/", "danh từ", "mẹ", "Her mother is very kind.", "Mẹ cô ấy rất tốt bụng."],
    ["parents", "/ˈpeərənts/", "danh từ", "bố mẹ", "Their parents live in Hue.", "Bố mẹ họ sống ở Huế."],
    ["brother", "/ˈbrʌðə(r)/", "danh từ", "anh trai, em trai", "His brother is a student.", "Em trai anh ấy là sinh viên."],
    ["sister", "/ˈsɪstə(r)/", "danh từ", "chị gái, em gái", "Is this your sister?", "Đây là chị gái bạn à?"],
    ["son", "/sʌn/", "danh từ", "con trai", "Our son is five years old.", "Con trai chúng tôi năm tuổi."],
    ["daughter", "/ˈdɔːtə(r)/", "danh từ", "con gái", "My daughter is a nurse.", "Con gái tôi là y tá."],
    ["husband", "/ˈhʌzbənd/", "danh từ", "chồng", "Her husband is Japanese.", "Chồng cô ấy là người Nhật."],
    ["wife", "/waɪf/", "danh từ", "vợ", "This is my wife, Lan.", "Đây là vợ tôi, Lan."]
  ],
  grammar: {
    name: "Tính từ sở hữu", nameEn: "Possessive adjectives",
    desc: "Dùng để nói “của tôi, của bạn, của anh ấy…”. Tính từ sở hữu luôn đứng TRƯỚC danh từ, ngược với tiếng Việt (“vợ tôi” → my wife).",
    formula: [["·", "I → <b>my</b> · you → <b>your</b>"], ["·", "he → <b>his</b> · she → <b>her</b> · it → <b>its</b>"], ["·", "we → <b>our</b> · they → <b>their</b>"], ["!", "Đứng trước danh từ: <b>my</b> father"]],
    examples: [["<b>My</b> father is a doctor.", "Bố tôi là bác sĩ."], ["<b>Her</b> husband is Japanese.", "Chồng cô ấy là người Nhật."], ["<b>Their</b> parents live in Hue.", "Bố mẹ họ sống ở Huế."]],
    mistake: ["Lan is my sister. His name is Lan.", "Lan is my sister. Her name is Lan.", "Nói về phụ nữ dùng her, đàn ông dùng his. Người Việt hay nhầm vì tiếng Việt chỉ nói “tên của bạn ấy”."]
  },
  dialogue: { title: "Xem ảnh gia đình", lines: [
    ["A", "Is this a photo of your family?", "Đây là ảnh gia đình bạn à?"],
    ["B", "Yes, it is. This is my father, and this is my mother.", "Đúng vậy. Đây là bố tôi, còn đây là mẹ tôi."],
    ["A", "Who is this young man?", "Chàng trai trẻ này là ai?"],
    ["B", "That's my brother, Hung. He's a student.", "Đó là em trai tôi, Hùng. Cậu ấy là sinh viên."],
    ["A", "And who is this woman?", "Còn người phụ nữ này là ai?"],
    ["B", "That's his wife, Mai. She's a nurse.", "Đó là vợ cậu ấy, Mai. Cô ấy là y tá."]
  ] },
  drills: {
    fill: [
      ["This is ___ wife, Lan.", "my", ["my", "me", "I"], "Trước danh từ dùng tính từ sở hữu my (của tôi).", "Đây là vợ tôi, Lan.", "Chọn tính từ sở hữu"],
      ["Tom is my friend. ___ sister is a doctor.", "His", ["His", "Her", "He"], "Tom là nam nên dùng his.", "Tom là bạn tôi. Chị gái anh ấy là bác sĩ.", "Chọn tính từ sở hữu"],
      ["They are my neighbors. ___ son is ten.", "Their", ["Their", "There", "They"], "They → their (của họ). Đừng nhầm với there (ở đó).", "Họ là hàng xóm của tôi. Con trai họ mười tuổi.", "Chọn tính từ sở hữu"]
    ],
    error: [
      ["Lan is my colleague. His husband is Korean.", 4, "Her", ["Her", "She", "His"], "Lan là nữ nên dùng her: her husband."],
      ["This is me brother, Nam.", 2, "my", ["my", "I", "mine"], "Trước danh từ dùng my, không dùng me."]
    ]
  },
  pron: [["wife", "/waɪf/", "vợ"], ["why", "/waɪ/", "tại sao"], "Đọc rõ âm cuối /f/: răng trên chạm nhẹ môi dưới rồi thổi hơi. Người Việt hay bỏ mất âm cuối.", "âm cuối /f/"],
  writing: [
    ["Đây là vợ tôi.", ["This is my wife."], ["this", "my wife"], ""],
    ["Chồng cô ấy là người Hàn Quốc.", ["Her husband is Korean."], ["her", "husband"], "“Chồng cô ấy” → her husband: her đứng trước danh từ."],
    ["Bố mẹ họ sống ở Huế.", ["Their parents live in Hue."], ["their", "parents"], "their (của họ) khác there (ở đó)."]
  ]
},
{
  id: "s1u2l2", stage: 1, unit: 2, n: 2, unitTitle: "Gia đình",
  title: "Ông bà và họ hàng", titleEn: "Relatives",
  words: [
    ["grandfather", "/ˈɡrænfɑːðə(r)/", "danh từ", "ông", "My grandfather is eighty.", "Ông tôi tám mươi tuổi."],
    ["grandmother", "/ˈɡrænmʌðə(r)/", "danh từ", "bà", "Her grandmother has a small garden.", "Bà cô ấy có một khu vườn nhỏ."],
    ["uncle", "/ˈʌŋkl/", "danh từ", "chú, bác, cậu", "My uncle has two sons.", "Chú tôi có hai con trai."],
    ["aunt", "/ɑːnt/", "danh từ", "cô, dì, bác gái", "Our aunt lives in Hanoi.", "Cô của chúng tôi sống ở Hà Nội."],
    ["cousin", "/ˈkʌzn/", "danh từ", "anh chị em họ", "I have three cousins.", "Tôi có ba người anh chị em họ."],
    ["child", "/tʃaɪld/", "danh từ", "đứa con, đứa trẻ", "They have one child.", "Họ có một đứa con."],
    ["children", "/ˈtʃɪldrən/", "danh từ", "con cái, trẻ em (số nhiều)", "We have two children.", "Chúng tôi có hai đứa con."],
    ["baby", "/ˈbeɪbi/", "danh từ", "em bé", "My sister has a new baby.", "Chị tôi mới sinh em bé."],
    ["twin", "/twɪn/", "danh từ", "anh chị em sinh đôi", "Nam has a twin brother.", "Nam có một người anh em sinh đôi."],
    ["relative", "/ˈrelətɪv/", "danh từ", "họ hàng", "All my relatives live in Nam Dinh.", "Tất cả họ hàng tôi sống ở Nam Định."]
  ],
  grammar: {
    name: "Động từ have / has", nameEn: "have / has",
    desc: "Have nghĩa là “có”. Chủ ngữ ngôi thứ ba số ít (he, she, it, my uncle…) dùng has, các chủ ngữ còn lại dùng have.",
    formula: [["+", "I / You / We / They <b>have</b>"], ["+", "He / She / It <b>has</b>"], ["−", "I <b>don’t have</b> · She <b>doesn’t have</b>"]],
    examples: [["I <b>have</b> two brothers.", "Tôi có hai anh trai."], ["My uncle <b>has</b> a big family.", "Chú tôi có một gia đình lớn."], ["She <b>doesn’t have</b> any cousins.", "Cô ấy không có anh chị em họ nào."]],
    mistake: ["My sister have a baby.", "My sister has a baby.", "Chủ ngữ ngôi thứ ba số ít (my sister) dùng has."]
  },
  dialogue: { title: "Gia đình đông người", lines: [
    ["A", "Do you have a big family?", "Gia đình bạn có đông người không?"],
    ["B", "Yes, I do. I have two brothers and a sister.", "Có. Tôi có hai anh trai và một chị gái."],
    ["A", "Wow! Do you have any cousins?", "Ồ! Bạn có anh chị em họ không?"],
    ["B", "Many! My uncle has four children.", "Nhiều lắm! Chú tôi có bốn đứa con."],
    ["A", "And what about your grandparents?", "Còn ông bà bạn thì sao?"],
    ["B", "My grandmother is ninety. She lives with my aunt.", "Bà tôi chín mươi tuổi. Bà sống với cô tôi."]
  ] },
  drills: {
    fill: [
      ["I ___ two cousins in Hanoi.", "have", ["have", "has", "am"], "Chủ ngữ I dùng have.", "Tôi có hai người anh chị em họ ở Hà Nội.", "Điền have / has"],
      ["My aunt ___ a new baby.", "has", ["has", "have", "is"], "My aunt là ngôi thứ ba số ít nên dùng has.", "Dì tôi vừa có em bé.", "Điền have / has"],
      ["We ___ three children.", "have", ["have", "has", "are"], "Chủ ngữ we dùng have.", "Chúng tôi có ba đứa con.", "Điền have / has"]
    ],
    error: [
      ["My uncle have two sons.", 2, "has", ["has", "is", "having"], "My uncle là ngôi thứ ba số ít: has."],
      ["They has one child.", 1, "have", ["have", "are", "is"], "Chủ ngữ they dùng have."]
    ]
  },
  pron: [["cousin", "/ˈkʌzn/", "một người anh chị em họ"], ["cousins", "/ˈkʌznz/", "nhiều người anh chị em họ"], "Danh từ số nhiều phải đọc rõ âm cuối -s. Sau âm hữu thanh như /n/, -s đọc là /z/ (rung cổ).", "âm cuối -s"],
  writing: [
    ["Tôi có hai anh trai.", ["I have two brothers."], ["have", "brothers"], "Số nhiều thêm -s: brothers."],
    ["Chú tôi có bốn đứa con.", ["My uncle has four children."], ["uncle", "has", "children"], "child → children là số nhiều bất quy tắc."],
    ["Họ có một em bé.", ["They have a baby.", "They have one baby."], ["have", "baby"], ""]
  ]
},
{
  id: "s1u2l3", stage: 1, unit: 2, n: 3, unitTitle: "Gia đình",
  title: "Miêu tả người thân", titleEn: "Describing people",
  words: [
    ["tall", "/tɔːl/", "tính từ", "cao", "My brother is very tall.", "Anh trai tôi rất cao."],
    ["short", "/ʃɔːt/", "tính từ", "thấp, ngắn", "She has short hair.", "Cô ấy có mái tóc ngắn."],
    ["young", "/jʌŋ/", "tính từ", "trẻ", "Your mother looks young.", "Mẹ bạn trông trẻ."],
    ["kind", "/kaɪnd/", "tính từ", "tốt bụng", "My grandmother is very kind.", "Bà tôi rất tốt bụng."],
    ["funny", "/ˈfʌni/", "tính từ", "vui tính, hài hước", "Her husband is funny.", "Chồng cô ấy vui tính."],
    ["quiet", "/ˈkwaɪət/", "tính từ", "trầm tính, yên lặng", "Their son is quiet.", "Con trai họ trầm tính."],
    ["beautiful", "/ˈbjuːtɪfl/", "tính từ", "đẹp", "What a beautiful baby!", "Em bé đáng yêu quá!"],
    ["handsome", "/ˈhænsəm/", "tính từ", "đẹp trai", "He is tall and handsome.", "Anh ấy cao và đẹp trai."],
    ["hair", "/heə(r)/", "danh từ", "tóc", "My sister has long hair.", "Chị tôi có mái tóc dài."],
    ["eyes", "/aɪz/", "danh từ", "đôi mắt", "The baby has big brown eyes.", "Em bé có đôi mắt nâu to."]
  ],
  grammar: {
    name: "Tính từ miêu tả", nameEn: "Adjectives",
    desc: "Tính từ đứng sau to be (He is tall), hoặc đứng TRƯỚC danh từ (a tall man) — ngược với tiếng Việt. Tính từ không bao giờ thêm -s.",
    formula: [["1", "He <b>is tall</b>."], ["2", "a <b>tall</b> man · <b>long</b> hair"], ["+", "<b>very</b> / <b>quite</b> + tính từ: very kind"]],
    examples: [["My father <b>is tall</b> and <b>quiet</b>.", "Bố tôi cao và trầm tính."], ["She has <b>long black</b> hair.", "Cô ấy có mái tóc dài màu đen."], ["They are <b>kind</b> people.", "Họ là những người tốt bụng."]],
    mistake: ["She has hair long.", "She has long hair.", "Tiếng Việt nói “tóc dài”, còn tiếng Anh đặt tính từ trước danh từ: long hair."]
  },
  dialogue: { title: "Tả anh trai", lines: [
    ["A", "What is your brother like?", "Anh trai bạn là người thế nào?"],
    ["B", "He's tall and very funny.", "Anh ấy cao và rất vui tính."],
    ["A", "Is he handsome?", "Anh ấy có đẹp trai không?"],
    ["B", "Yes, he is! He has short black hair and big eyes.", "Có chứ! Anh ấy có tóc đen ngắn và mắt to."],
    ["A", "Is he married?", "Anh ấy kết hôn chưa?"],
    ["B", "No, he is single. Why do you ask?", "Chưa, anh ấy độc thân. Sao bạn hỏi vậy?"]
  ] },
  drills: {
    fill: [
      ["My mother has ___.", "long hair", ["long hair", "hair long", "longs hair"], "Tính từ đứng trước danh từ: long hair.", "Mẹ tôi có mái tóc dài.", "Chọn cụm từ đúng"],
      ["Their son ___ very quiet.", "is", ["is", "has", "are"], "Miêu tả tính cách: to be + tính từ.", "Con trai họ rất trầm tính.", "Điền động từ"],
      ["They are ___ people.", "kind", ["kind", "kinds", "kindly"], "Tính từ không thêm -s dù danh từ số nhiều.", "Họ là những người tốt bụng.", "Chọn tính từ"]
    ],
    error: [
      ["They are kinds people.", 2, "kind", ["kind", "kindly", "kindness"], "Tính từ không thêm -s, kể cả khi danh từ số nhiều."],
      ["My grandmother very kind.", 2, "is very", ["is very", "very is", "has very"], "Thiếu to be: My grandmother is very kind."]
    ]
  },
  pron: [["short", "/ʃɔːt/", "thấp, ngắn"], ["shirt", "/ʃɜːt/", "áo sơ mi"], "/ɔː/: tròn môi, giống “o” kéo dài. /ɜː/: môi thả lỏng, giống “ơ” kéo dài.", "âm /ɔː/ và /ɜː/"],
  writing: [
    ["Anh trai tôi cao và vui tính.", ["My brother is tall and funny.", "My brother is tall and very funny."], ["tall", "funny"], ""],
    ["Cô ấy có mái tóc ngắn.", ["She has short hair."], ["short hair"], "Tính từ đứng trước danh từ."],
    ["Bà tôi rất tốt bụng.", ["My grandmother is very kind."], ["very", "kind"], ""]
  ]
},
{
  id: "s1u2l4", stage: 1, unit: 2, n: 4, unitTitle: "Gia đình",
  title: "Đồ vật của ai?", titleEn: "Whose is it?",
  words: [
    ["house", "/haʊs/", "danh từ", "ngôi nhà", "This is my parents' house.", "Đây là nhà của bố mẹ tôi."],
    ["car", "/kɑː(r)/", "danh từ", "xe hơi, ô tô", "Is this Nam's car?", "Đây là xe của Nam à?"],
    ["dog", "/dɒɡ/", "danh từ", "con chó", "My son's dog is very small.", "Con chó của con trai tôi rất nhỏ."],
    ["cat", "/kæt/", "danh từ", "con mèo", "Their cat is black.", "Con mèo của họ màu đen."],
    ["pet", "/pet/", "danh từ", "thú cưng", "We have two pets.", "Chúng tôi có hai con thú cưng."],
    ["birthday", "/ˈbɜːθdeɪ/", "danh từ", "sinh nhật", "Today is my wife's birthday.", "Hôm nay là sinh nhật vợ tôi."],
    ["photo", "/ˈfəʊtəʊ/", "danh từ", "bức ảnh", "This is a photo of my family.", "Đây là ảnh gia đình tôi."],
    ["wedding", "/ˈwedɪŋ/", "danh từ", "đám cưới", "Tomorrow is my sister's wedding.", "Ngày mai là đám cưới của chị tôi."],
    ["gift", "/ɡɪft/", "danh từ", "món quà", "This gift is for your daughter.", "Món quà này dành cho con gái bạn."],
    ["whose", "/huːz/", "từ để hỏi", "của ai", "Whose car is this?", "Chiếc xe này của ai?"]
  ],
  grammar: {
    name: "Sở hữu cách ’s", nameEn: "Possessive ’s",
    desc: "Muốn nói “của ai”, thêm ’s vào sau người sở hữu: Nam’s car (xe của Nam). Danh từ số nhiều đã có -s thì chỉ thêm dấu ’. Hỏi “của ai” dùng Whose.",
    formula: [["1", "Nam<b>’s</b> car = xe của Nam"], ["2", "my sister<b>’s</b> wedding"], ["3", "my parents<b>’</b> house"], ["?", "<b>Whose</b> car is this? — It’s Lan<b>’s</b>."]],
    examples: [["Today is my wife<b>’s</b> birthday.", "Hôm nay là sinh nhật vợ tôi."], ["<b>Whose</b> dog is this? — It’s Tom<b>’s</b>.", "Con chó này của ai? — Của Tom."]],
    mistake: ["the car of Nam", "Nam's car", "Tiếng Việt nói “xe của Nam”; tiếng Anh tự nhiên hơn khi dùng Nam’s car."]
  },
  dialogue: { title: "Tiệc sinh nhật", lines: [
    ["A", "Whose birthday is it today?", "Hôm nay là sinh nhật của ai vậy?"],
    ["B", "It's my daughter's birthday. She's six.", "Sinh nhật con gái tôi. Cháu sáu tuổi."],
    ["A", "Happy birthday! Is this gift for her?", "Chúc mừng sinh nhật! Món quà này cho cháu à?"],
    ["B", "Yes, it's from my brother's family.", "Đúng rồi, quà của gia đình em trai tôi."],
    ["A", "And whose dog is that?", "Còn con chó kia của ai thế?"],
    ["B", "That's my neighbor's dog. It's very friendly.", "Đó là chó nhà hàng xóm. Nó rất thân thiện."]
  ] },
  drills: {
    fill: [
      ["This is ___ car.", "Nam's", ["Nam's", "Nams", "Nam"], "Sở hữu cách: Nam + ’s.", "Đây là xe của Nam.", "Chọn dạng đúng"],
      ["___ phone is this? — It's Lan's.", "Whose", ["Whose", "Who", "Who's"], "Hỏi “của ai” dùng Whose.", "Điện thoại này của ai? — Của Lan.", "Chọn từ để hỏi"],
      ["Today is my ___ birthday.", "mother's", ["mother's", "mothers", "mother"], "Sở hữu cách: mother + ’s.", "Hôm nay là sinh nhật mẹ tôi.", "Chọn dạng đúng"]
    ],
    error: [
      ["Who car is this?", 0, "Whose", ["Whose", "Who's", "What"], "Hỏi “của ai” dùng Whose."],
      ["It is Lans gift.", 2, "Lan's", ["Lan's", "Lan", "Lans'"], "Sở hữu cách: Lan + ’s."]
    ]
  },
  pron: [["cat", "/kæt/", "con mèo"], ["cut", "/kʌt/", "cắt"], "/æ/: miệng mở rộng và bè ngang, giữa “a” và “e”. /ʌ/: miệng mở vừa, âm ngắn giống “ă”.", "âm /æ/ và /ʌ/"],
  writing: [
    ["Hôm nay là sinh nhật vợ tôi.", ["Today is my wife's birthday.", "It's my wife's birthday today.", "It is my wife's birthday today."], ["wife", "birthday"], "Dùng sở hữu cách: my wife’s birthday."],
    ["Chiếc xe này của ai?", ["Whose car is this?", "Whose is this car?"], ["whose", "car"], ""],
    ["Đây là nhà của bố mẹ tôi.", ["This is my parents' house.", "This is my parents house."], ["parents", "house"], "parents đã có -s nên chỉ thêm dấu ’: my parents’ house."]
  ]
},
{
  id: "s1u2l5", stage: 1, unit: 2, n: 5, unitTitle: "Gia đình",
  title: "Gia đình tôi", titleEn: "My family",
  words: [
    ["big", "/bɪɡ/", "tính từ", "to, lớn", "I have a big family.", "Tôi có một gia đình lớn."],
    ["small", "/smɔːl/", "tính từ", "nhỏ", "Our house is small.", "Nhà chúng tôi nhỏ."],
    ["together", "/təˈɡeðə(r)/", "trạng từ", "cùng nhau", "We have lunch together on Sundays.", "Chủ nhật chúng tôi ăn trưa cùng nhau."],
    ["weekend", "/ˌwiːkˈend/", "danh từ", "cuối tuần", "We visit our parents at the weekend.", "Cuối tuần chúng tôi về thăm bố mẹ."],
    ["visit", "/ˈvɪzɪt/", "động từ", "thăm", "I visit my grandmother every week.", "Tuần nào tôi cũng thăm bà."],
    ["countryside", "/ˈkʌntrisaɪd/", "danh từ", "nông thôn, quê", "My parents live in the countryside.", "Bố mẹ tôi sống ở quê."],
    ["love", "/lʌv/", "động từ", "yêu, rất thích", "I love my children.", "Tôi yêu các con tôi."],
    ["happy", "/ˈhæpi/", "tính từ", "hạnh phúc, vui", "They are a happy family.", "Họ là một gia đình hạnh phúc."],
    ["nurse", "/nɜːs/", "danh từ", "y tá", "My younger sister is a nurse.", "Em gái tôi là y tá."],
    ["hotel", "/həʊˈtel/", "danh từ", "khách sạn", "My wife works at a hotel.", "Vợ tôi làm ở khách sạn."]
  ],
  grammar: {
    name: "Ôn tập: sở hữu và have / has", nameEn: "Review: my, have / has, ’s",
    desc: "Tổng hợp Unit 2: tính từ sở hữu đứng trước danh từ, have / has để nói “có”, và ’s để nói “của ai”.",
    formula: [["·", "<b>my / your / his / her / our / their</b> + danh từ"], ["·", "I / you / we / they <b>have</b> · he / she <b>has</b>"], ["·", "Nam<b>’s</b> wife · my parents<b>’</b> house"]],
    examples: [["<b>My</b> wife <b>has</b> a small shop.", "Vợ tôi có một cửa hàng nhỏ."], ["We visit <b>my parents’</b> house every weekend.", "Cuối tuần nào chúng tôi cũng về nhà bố mẹ tôi."]],
    mistake: ["My sister is nurse.", "My sister is a nurse.", "Nói nghề nghiệp của một người phải có a / an trước danh từ."]
  },
  dialogue: { title: "Kế hoạch cuối tuần", lines: [
    ["A", "What do you do at the weekend?", "Cuối tuần bạn thường làm gì?"],
    ["B", "I visit my parents in the countryside.", "Tôi về quê thăm bố mẹ."],
    ["A", "That's nice. Do you go with your family?", "Hay quá. Bạn đi cùng gia đình à?"],
    ["B", "Yes, my wife and children come with me.", "Ừ, vợ và các con tôi đi cùng."],
    ["A", "Your parents are very lucky.", "Bố mẹ bạn thật may mắn."],
    ["B", "We are happy to be together.", "Cả nhà vui vì được ở bên nhau."]
  ] },
  drills: {
    fill: [
      ["We visit our grandparents every ___.", "weekend", ["weekend", "weekends", "week end"], "every + danh từ số ít: every weekend.", "Cuối tuần nào chúng tôi cũng thăm ông bà.", "Chọn từ đúng"],
      ["My sister ___ a small house.", "has", ["has", "have", "is"], "My sister là ngôi thứ ba số ít: has.", "Chị tôi có một căn nhà nhỏ.", "Điền have / has"]
    ],
    error: [
      ["My brother is nurse.", 3, "a nurse", ["a nurse", "an nurse", "the nurses"], "Nói nghề nghiệp cần a / an: a nurse."]
    ]
  },
  reading: {
    title: "My family",
    sentences: [
      ["I live in Da Nang with my wife and our two children.", "Tôi sống ở Đà Nẵng với vợ và hai con."],
      ["My wife works at a hotel, and I work for a construction company.", "Vợ tôi làm ở khách sạn, còn tôi làm cho một công ty xây dựng."],
      ["Our son is ten, and our daughter is six.", "Con trai chúng tôi mười tuổi, con gái sáu tuổi."],
      ["My parents live in the countryside. We visit them every weekend.", "Bố mẹ tôi sống ở quê. Cuối tuần nào chúng tôi cũng về thăm."],
      ["My younger sister is a nurse. She is not married yet.", "Em gái tôi là y tá. Cô ấy chưa kết hôn."],
      ["On Sundays, the whole family has lunch together.", "Chủ nhật, cả nhà ăn trưa cùng nhau."]
    ],
    tf: [["The writer's parents live in Da Nang.", false], ["The writer's wife works at a hotel.", true], ["The writer's sister is married.", false]],
    mc: [["How old is the writer's daughter?", ["She is six.", "She is ten.", "She is sixteen."], 0]],
    qa: [
      ["Where do the writer's parents live?", "Bố mẹ tác giả sống ở đâu?", ["countryside"], "They live in the countryside."],
      ["How often does the family visit them?", "Gia đình về thăm họ bao lâu một lần?", ["every weekend|weekends|every week"], "They visit them every weekend."],
      ["What does the writer's sister do?", "Em gái tác giả làm nghề gì?", ["nurse"], "She is a nurse."]
    ]
  },
  writing: [
    ["Chúng tôi là một gia đình hạnh phúc.", ["We are a happy family."], ["happy", "family"], ""],
    ["Bố mẹ tôi sống ở quê.", ["My parents live in the countryside."], ["parents", "countryside"], "Ở quê: in the countryside."],
    ["Cuối tuần nào chúng tôi cũng về thăm họ.", ["We visit them every weekend.", "Every weekend we visit them.", "We visit them at the weekend."], ["visit", "every weekend"], "Thói quen lặp lại: every weekend (mỗi cuối tuần)."]
  ]
}
,
/* ===== Unit 3 · Nghề nghiệp ===== */
{
  id: "s1u3l1", stage: 1, unit: 3, n: 1, unitTitle: "Nghề nghiệp",
  title: "Các nghề nghiệp", titleEn: "Jobs",
  words: [
    ["doctor", "/ˈdɒktə(r)/", "danh từ", "bác sĩ", "She is a doctor.", "Cô ấy là bác sĩ."],
    ["teacher", "/ˈtiːtʃə(r)/", "danh từ", "giáo viên", "My mother is a teacher.", "Mẹ tôi là giáo viên."],
    ["engineer", "/ˌendʒɪˈnɪə(r)/", "danh từ", "kỹ sư", "He is an engineer.", "Anh ấy là kỹ sư."],
    ["architect", "/ˈɑːkɪtekt/", "danh từ", "kiến trúc sư", "I am an architect.", "Tôi là kiến trúc sư."],
    ["accountant", "/əˈkaʊntənt/", "danh từ", "kế toán", "Is your wife an accountant?", "Vợ bạn là kế toán à?"],
    ["driver", "/ˈdraɪvə(r)/", "danh từ", "tài xế", "My uncle is a taxi driver.", "Chú tôi là tài xế taxi."],
    ["farmer", "/ˈfɑːmə(r)/", "danh từ", "nông dân", "My grandfather is a farmer.", "Ông tôi là nông dân."],
    ["chef", "/ʃef/", "danh từ", "đầu bếp", "He is a chef in a hotel.", "Anh ấy là đầu bếp ở khách sạn."],
    ["waiter", "/ˈweɪtə(r)/", "danh từ", "người phục vụ (nam)", "The waiter is very friendly.", "Anh phục vụ rất thân thiện."],
    ["designer", "/dɪˈzaɪnə(r)/", "danh từ", "nhà thiết kế", "She is an interior designer.", "Cô ấy là nhà thiết kế nội thất."]
  ],
  grammar: {
    name: "Mạo từ a / an", nameEn: "Articles a / an",
    desc: "Nói nghề nghiệp của một người phải có a hoặc an. Dùng an trước từ bắt đầu bằng NGUYÊN ÂM (a, e, i, o, u), dùng a trước phụ âm. Quan trọng là âm đọc, không phải chữ viết.",
    formula: [["a", "<b>a</b> doctor · <b>a</b> teacher · <b>a</b> driver"], ["an", "<b>an</b> engineer · <b>an</b> architect · <b>an</b> accountant"], ["!", "<b>an</b> hour (h câm) · <b>a</b> university (/juː/)"]],
    examples: [["He is <b>an</b> engineer.", "Anh ấy là kỹ sư."], ["My mother is <b>a</b> teacher.", "Mẹ tôi là giáo viên."], ["She is <b>an</b> interior designer.", "Cô ấy là nhà thiết kế nội thất."]],
    mistake: ["I am architect.", "I am an architect.", "Tiếng Việt nói “tôi là kiến trúc sư”, nhưng tiếng Anh bắt buộc có an trước nghề nghiệp."]
  },
  dialogue: { title: "Hỏi nghề nghiệp", lines: [
    ["A", "What's your job, Nam?", "Nam làm nghề gì vậy?"],
    ["B", "I'm an architect. And you?", "Tôi là kiến trúc sư. Còn bạn?"],
    ["A", "I'm a teacher. I teach English.", "Tôi là giáo viên. Tôi dạy tiếng Anh."],
    ["B", "Oh, nice! Is your husband a teacher too?", "Ồ, hay quá! Chồng bạn cũng là giáo viên à?"],
    ["A", "No, he isn't. He's an engineer.", "Không. Anh ấy là kỹ sư."],
    ["B", "My brother is an engineer too!", "Anh trai tôi cũng là kỹ sư!"]
  ] },
  drills: {
    fill: [
      ["He is ___ engineer.", "an", ["a", "an", "the"], "engineer bắt đầu bằng nguyên âm /e/ nên dùng an.", "Anh ấy là kỹ sư.", "Điền a / an"],
      ["My father is ___ doctor.", "a", ["a", "an", "the"], "doctor bắt đầu bằng phụ âm /d/ nên dùng a.", "Bố tôi là bác sĩ.", "Điền a / an"],
      ["She is ___ accountant in a bank.", "an", ["a", "an", "the"], "accountant bắt đầu bằng nguyên âm /ə/ nên dùng an.", "Cô ấy là kế toán ở một ngân hàng.", "Điền a / an"]
    ],
    error: [
      ["I am a architect.", 2, "an", ["an", "the", "one"], "architect bắt đầu bằng nguyên âm nên dùng an."],
      ["My uncle is driver.", 3, "a driver", ["a driver", "an driver", "drivers"], "Nói nghề nghiệp cần a: a driver."]
    ]
  },
  pron: [["chef", "/ʃef/", "đầu bếp"], ["chief", "/tʃiːf/", "người đứng đầu"], "chef đọc /ʃ/ như “suỵt”, không bật hơi. chief đọc /tʃ/ như “ch” bật mạnh.", "âm /ʃ/ và /tʃ/"],
  writing: [
    ["Tôi là kiến trúc sư.", ["I am an architect.", "I'm an architect."], ["an", "architect"], "architect bắt đầu bằng nguyên âm nên dùng an."],
    ["Mẹ tôi là giáo viên.", ["My mother is a teacher."], ["mother", "a teacher"], ""],
    ["Chồng cô ấy là kỹ sư.", ["Her husband is an engineer."], ["her husband", "an engineer"], ""]
  ]
},
{
  id: "s1u3l2", stage: 1, unit: 3, n: 2, unitTitle: "Nghề nghiệp",
  title: "Nơi làm việc", titleEn: "Workplaces",
  words: [
    ["hospital", "/ˈhɒspɪtl/", "danh từ", "bệnh viện", "My sister works in a hospital.", "Chị tôi làm việc ở bệnh viện."],
    ["school", "/skuːl/", "danh từ", "trường học", "He teaches at a school in Hue.", "Anh ấy dạy ở một trường học tại Huế."],
    ["factory", "/ˈfæktri/", "danh từ", "nhà máy", "My father works in a factory.", "Bố tôi làm việc trong nhà máy."],
    ["restaurant", "/ˈrestrɒnt/", "danh từ", "nhà hàng", "She works in a restaurant.", "Cô ấy làm ở một nhà hàng."],
    ["bank", "/bæŋk/", "danh từ", "ngân hàng", "My wife works at a bank.", "Vợ tôi làm ở ngân hàng."],
    ["shop", "/ʃɒp/", "danh từ", "cửa hàng", "They have a small shop.", "Họ có một cửa hàng nhỏ."],
    ["farm", "/fɑːm/", "danh từ", "trang trại", "My grandfather works on a farm.", "Ông tôi làm việc ở trang trại."],
    ["building", "/ˈbɪldɪŋ/", "danh từ", "tòa nhà", "Our office is in a tall building.", "Văn phòng chúng tôi ở trong một tòa nhà cao."],
    ["customer", "/ˈkʌstəmə(r)/", "danh từ", "khách hàng", "She talks to customers every day.", "Cô ấy nói chuyện với khách hàng mỗi ngày."],
    ["patient", "/ˈpeɪʃnt/", "danh từ", "bệnh nhân", "The doctor sees many patients.", "Bác sĩ khám nhiều bệnh nhân."]
  ],
  grammar: {
    name: "Hiện tại đơn: he / she + V-s", nameEn: "Present simple (he / she / it)",
    desc: "Thì hiện tại đơn nói về công việc, thói quen, sự thật. Chủ ngữ he / she / it (hoặc một người) thì động từ thêm -s hoặc -es.",
    formula: [["+", "I / You / We / They <b>work</b>"], ["+", "He / She / It <b>works</b>"], ["!", "teach → teach<b>es</b> · go → go<b>es</b> · do → do<b>es</b>"], ["!", "study → stud<b>ies</b> · have → <b>has</b>"]],
    examples: [["My sister <b>works</b> in a hospital.", "Chị tôi làm việc ở bệnh viện."], ["He <b>teaches</b> at a school in Hue.", "Anh ấy dạy ở một trường học tại Huế."], ["They <b>work</b> in a factory.", "Họ làm việc trong nhà máy."]],
    mistake: ["She work in a bank.", "She works in a bank.", "Chủ ngữ she: động từ phải thêm -s. Đây là lỗi người Việt mắc nhiều nhất."]
  },
  dialogue: { title: "Nói về người thân", lines: [
    ["A", "Where does your sister work?", "Chị gái bạn làm ở đâu?"],
    ["B", "She works in a hospital. She's a nurse.", "Chị ấy làm ở bệnh viện. Chị ấy là y tá."],
    ["A", "And your brother?", "Còn anh trai bạn?"],
    ["B", "He teaches at a school near our house.", "Anh ấy dạy ở một trường gần nhà tôi."],
    ["A", "What about your parents?", "Còn bố mẹ bạn thì sao?"],
    ["B", "They have a small shop in the city.", "Bố mẹ tôi có một cửa hàng nhỏ trong thành phố."]
  ] },
  drills: {
    fill: [
      ["My sister ___ in a hospital.", "works", ["works", "work", "working"], "Chủ ngữ my sister (she): work + s.", "Chị tôi làm ở bệnh viện.", "Chia động từ (work)"],
      ["He ___ English at a school.", "teaches", ["teaches", "teachs", "teach"], "Động từ tận cùng -ch thêm -es: teaches.", "Anh ấy dạy tiếng Anh ở một trường học.", "Chia động từ (teach)"],
      ["We ___ in the same building.", "work", ["work", "works", "worked"], "Chủ ngữ we: giữ nguyên động từ.", "Chúng tôi làm việc trong cùng một tòa nhà.", "Chia động từ (work)"]
    ],
    error: [
      ["She work in a bank.", 1, "works", ["works", "working", "is work"], "Chủ ngữ she: work phải thêm -s."],
      ["My father haves a farm.", 2, "has", ["has", "have", "is"], "have đi với he / she thành has (bất quy tắc)."]
    ]
  },
  pron: [["works", "/wɜːks/", "làm việc (ngôi 3)"], ["work", "/wɜːk/", "làm việc"], "Đọc rõ âm cuối -s. Sau âm vô thanh như /k/, -s đọc là /s/ nhẹ, không rung cổ.", "âm cuối -s"],
  writing: [
    ["Chị tôi làm việc ở bệnh viện.", ["My sister works in a hospital.", "My sister works at a hospital."], ["works", "hospital"], "Chủ ngữ ngôi ba: works."],
    ["Anh ấy dạy ở một trường học.", ["He teaches at a school.", "He teaches in a school."], ["teaches", "school"], "teach → teaches."],
    ["Bố mẹ tôi có một cửa hàng nhỏ.", ["My parents have a small shop."], ["have", "small shop"], "Chủ ngữ số nhiều (my parents) dùng have."]
  ]
},
{
  id: "s1u3l3", stage: 1, unit: 3, n: 3, unitTitle: "Nghề nghiệp",
  title: "Việc làm hằng ngày", titleEn: "What people do",
  words: [
    ["start", "/stɑːt/", "động từ", "bắt đầu", "I start work at eight.", "Tôi bắt đầu làm việc lúc tám giờ."],
    ["finish", "/ˈfɪnɪʃ/", "động từ", "kết thúc, làm xong", "She finishes work at five.", "Cô ấy tan làm lúc năm giờ."],
    ["help", "/help/", "động từ", "giúp đỡ", "Nurses help doctors.", "Y tá giúp đỡ bác sĩ."],
    ["sell", "/sel/", "động từ", "bán", "They sell phones.", "Họ bán điện thoại."],
    ["build", "/bɪld/", "động từ", "xây dựng", "Engineers build bridges.", "Kỹ sư xây cầu."],
    ["cook", "/kʊk/", "động từ", "nấu ăn", "My husband doesn't cook.", "Chồng tôi không nấu ăn."],
    ["teach", "/tiːtʃ/", "động từ", "dạy", "She teaches math.", "Cô ấy dạy toán."],
    ["drive", "/draɪv/", "động từ", "lái xe", "I don't drive to work.", "Tôi không lái xe đi làm."],
    ["design", "/dɪˈzaɪn/", "động từ", "thiết kế", "He designs houses.", "Anh ấy thiết kế nhà."],
    ["meeting", "/ˈmiːtɪŋ/", "danh từ", "cuộc họp", "We have a meeting on Monday.", "Thứ hai chúng tôi có một cuộc họp."]
  ],
  grammar: {
    name: "Hiện tại đơn: phủ định", nameEn: "Present simple negative",
    desc: "Phủ định dùng don’t (do not) hoặc doesn’t (does not) + động từ NGUYÊN MẪU. Khi đã có doesn’t thì động từ KHÔNG thêm -s nữa.",
    formula: [["−", "I / You / We / They <b>don’t</b> + V"], ["−", "He / She / It <b>doesn’t</b> + V"], ["!", "She <b>doesn’t work</b> (không phải doesn’t works)"]],
    examples: [["I <b>don’t drive</b> to work.", "Tôi không lái xe đi làm."], ["My husband <b>doesn’t cook</b>.", "Chồng tôi không nấu ăn."], ["They <b>don’t sell</b> food.", "Họ không bán đồ ăn."]],
    mistake: ["He doesn't works on Sunday.", "He doesn't work on Sunday.", "Sau doesn’t, động từ giữ nguyên mẫu, không thêm -s."]
  },
  dialogue: { title: "Công việc của vợ chồng", lines: [
    ["A", "Do you and your wife work together?", "Bạn và vợ có làm cùng chỗ không?"],
    ["B", "No, we don't. She's a chef. She cooks in a restaurant.", "Không. Cô ấy là đầu bếp, nấu ăn ở nhà hàng."],
    ["A", "And you design houses, right?", "Còn bạn thiết kế nhà, đúng không?"],
    ["B", "Yes. I start at eight and finish at six.", "Đúng. Tôi bắt đầu lúc tám giờ và xong lúc sáu giờ."],
    ["A", "Does your wife cook at home too?", "Vợ bạn có nấu ăn ở nhà không?"],
    ["B", "No, she doesn't. I cook at home!", "Không. Ở nhà tôi nấu!"]
  ] },
  drills: {
    fill: [
      ["I ___ drive to work. I take the bus.", "don't|do not", ["don't", "doesn't", "not"], "Chủ ngữ I: don’t + động từ.", "Tôi không lái xe đi làm. Tôi đi xe buýt.", "Điền don't / doesn't"],
      ["She ___ cook at home.", "doesn't|does not", ["doesn't", "don't", "isn't"], "Chủ ngữ she: doesn’t + động từ.", "Cô ấy không nấu ăn ở nhà.", "Điền don't / doesn't"],
      ["He doesn't ___ on Sundays.", "work", ["work", "works", "working"], "Sau doesn’t dùng động từ nguyên mẫu.", "Anh ấy không làm việc vào Chủ nhật.", "Chọn dạng động từ"]
    ],
    error: [
      ["He doesn't works on Sunday.", 2, "work", ["work", "working", "worked"], "Sau doesn’t, động từ giữ nguyên mẫu."],
      ["They doesn't sell food.", 1, "don't", ["don't", "isn't", "not"], "Chủ ngữ they dùng don’t."]
    ]
  },
  pron: [["cook", "/kʊk/", "nấu ăn"], ["cool", "/kuːl/", "mát"], "/ʊ/ ngắn, môi hơi tròn, thả lỏng. /uː/ dài, môi tròn và chu ra.", "âm /ʊ/ và /uː/"],
  writing: [
    ["Tôi không lái xe đi làm.", ["I don't drive to work.", "I do not drive to work."], ["don't", "drive"], ""],
    ["Chồng tôi không nấu ăn.", ["My husband doesn't cook.", "My husband does not cook."], ["doesn't", "cook"], "Sau doesn’t dùng động từ nguyên mẫu."],
    ["Anh ấy thiết kế nhà.", ["He designs houses."], ["designs", "houses"], "Chủ ngữ he: designs."]
  ]
},
{
  id: "s1u3l4", stage: 1, unit: 3, n: 4, unitTitle: "Nghề nghiệp",
  title: "Hỏi về công việc", titleEn: "Talking about work",
  words: [
    ["busy", "/ˈbɪzi/", "tính từ", "bận rộn", "Are you busy today?", "Hôm nay bạn có bận không?"],
    ["easy", "/ˈiːzi/", "tính từ", "dễ", "My job isn't easy.", "Công việc của tôi không dễ."],
    ["difficult", "/ˈdɪfɪkəlt/", "tính từ", "khó", "Is your job difficult?", "Công việc của bạn có khó không?"],
    ["boss", "/bɒs/", "danh từ", "sếp", "My boss is very kind.", "Sếp tôi rất tốt bụng."],
    ["manager", "/ˈmænɪdʒə(r)/", "danh từ", "quản lý, trưởng phòng", "She is a sales manager.", "Cô ấy là trưởng phòng kinh doanh."],
    ["part-time", "/ˌpɑːt ˈtaɪm/", "tính từ", "bán thời gian", "Do you work part-time?", "Bạn làm bán thời gian à?"],
    ["full-time", "/ˌfʊl ˈtaɪm/", "tính từ", "toàn thời gian", "I have a full-time job.", "Tôi có công việc toàn thời gian."],
    ["interesting", "/ˈɪntrəstɪŋ/", "tính từ", "thú vị", "Your job is very interesting.", "Công việc của bạn rất thú vị."],
    ["earn", "/ɜːn/", "động từ", "kiếm (tiền)", "Does he earn a lot?", "Anh ấy có kiếm nhiều tiền không?"],
    ["uniform", "/ˈjuːnɪfɔːm/", "danh từ", "đồng phục", "Nurses wear a uniform.", "Y tá mặc đồng phục."]
  ],
  grammar: {
    name: "Hiện tại đơn: câu hỏi", nameEn: "Present simple questions",
    desc: "Câu hỏi dùng Do hoặc Does đứng đầu, động từ chính giữ nguyên mẫu. Hỏi nghề nghiệp: What do you do? Trả lời ngắn: Yes, I do / No, she doesn’t.",
    formula: [["?", "<b>Do</b> you / they + V …?"], ["?", "<b>Does</b> he / she + V …?"], ["?", "<b>What do</b> you <b>do</b>? = Bạn làm nghề gì?"], ["✓", "Yes, I <b>do</b>. · No, she <b>doesn’t</b>."]],
    examples: [["<b>Do</b> you <b>work</b> part-time? — No, I <b>don’t</b>.", "Bạn làm bán thời gian à? — Không."], ["<b>Does</b> your wife <b>like</b> her job? — Yes, she <b>does</b>.", "Vợ bạn có thích công việc không? — Có."], ["<b>What does</b> your brother <b>do</b>?", "Anh trai bạn làm nghề gì?"]],
    mistake: ["Does she works in a bank?", "Does she work in a bank?", "Câu hỏi đã có Does thì động từ không thêm -s."]
  },
  dialogue: { title: "Gặp bạn cũ", lines: [
    ["A", "What do you do now, Linh?", "Giờ cậu làm nghề gì, Linh?"],
    ["B", "I'm a manager at a bank.", "Tớ là quản lý ở một ngân hàng."],
    ["A", "Wow! Is it a difficult job?", "Ồ! Công việc có khó không?"],
    ["B", "Yes, it is. I'm very busy, but it's interesting.", "Có. Tớ rất bận nhưng công việc thú vị."],
    ["A", "Do you work on Saturdays?", "Cậu có làm thứ bảy không?"],
    ["B", "No, I don't. What about you?", "Không. Còn cậu thì sao?"]
  ] },
  drills: {
    fill: [
      ["___ you work full-time? — Yes, I do.", "Do", ["Do", "Does", "Are"], "Chủ ngữ you: Do.", "Bạn làm toàn thời gian à? — Đúng.", "Điền Do / Does"],
      ["___ your boss speak English?", "Does", ["Does", "Do", "Is"], "Chủ ngữ your boss (he/she): Does.", "Sếp của bạn có nói tiếng Anh không?", "Điền Do / Does"],
      ["What ___ your sister do?", "does", ["does", "do", "is"], "your sister là ngôi ba số ít: does.", "Chị bạn làm nghề gì?", "Điền do / does"]
    ],
    error: [
      ["Does she works in a bank?", 2, "work", ["work", "working", "is work"], "Câu hỏi đã có Does: động từ giữ nguyên mẫu."],
      ["What do your brother do?", 1, "does", ["does", "is", "are"], "your brother là ngôi ba số ít: does."]
    ]
  },
  writing: [
    ["Bạn làm nghề gì?", ["What do you do?", "What's your job?", "What is your job?"], ["what", "do"], "Câu hỏi nghề nghiệp phổ biến nhất: What do you do?"],
    ["Công việc của bạn có khó không?", ["Is your job difficult?"], ["job", "difficult"], "Câu có tính từ dùng to be: Is your job…?"],
    ["Vợ bạn có làm việc thứ bảy không?", ["Does your wife work on Saturdays?", "Does your wife work on Saturday?"], ["does", "work", "Saturdays"], ""]
  ]
},
{
  id: "s1u3l5", stage: 1, unit: 3, n: 5, unitTitle: "Nghề nghiệp",
  title: "Một ngày làm việc", titleEn: "A day at work",
  words: [
    ["early", "/ˈɜːli/", "trạng từ", "sớm", "I get up early.", "Tôi dậy sớm."],
    ["late", "/leɪt/", "tính từ, trạng từ", "muộn", "Don't be late!", "Đừng đến muộn nhé!"],
    ["project", "/ˈprɒdʒekt/", "danh từ", "dự án", "We have a new project.", "Chúng tôi có một dự án mới."],
    ["client", "/ˈklaɪənt/", "danh từ", "khách hàng (dịch vụ)", "I meet clients every week.", "Tuần nào tôi cũng gặp khách hàng."],
    ["plan", "/plæn/", "danh từ", "bản vẽ, kế hoạch", "The architect draws the plan.", "Kiến trúc sư vẽ bản vẽ."],
    ["computer", "/kəmˈpjuːtə(r)/", "danh từ", "máy tính", "I work on my computer all day.", "Tôi làm việc trên máy tính cả ngày."],
    ["lunch", "/lʌntʃ/", "danh từ", "bữa trưa", "We have lunch at twelve.", "Chúng tôi ăn trưa lúc mười hai giờ."],
    ["tired", "/ˈtaɪəd/", "tính từ", "mệt", "I'm tired after work.", "Tôi mệt sau giờ làm."],
    ["enjoy", "/ɪnˈdʒɔɪ/", "động từ", "thích, tận hưởng", "She enjoys her job.", "Cô ấy thích công việc của mình."],
    ["home", "/həʊm/", "danh từ, trạng từ", "nhà; về nhà", "I go home at six.", "Tôi về nhà lúc sáu giờ."]
  ],
  grammar: {
    name: "Ôn tập: hiện tại đơn", nameEn: "Review: present simple",
    desc: "Tổng hợp thì hiện tại đơn: khẳng định (thêm -s với ngôi ba), phủ định (don’t / doesn’t + V) và câu hỏi (Do / Does + chủ ngữ + V).",
    formula: [["+", "He <b>works</b> · They <b>work</b>"], ["−", "He <b>doesn’t work</b> · They <b>don’t work</b>"], ["?", "<b>Does</b> he <b>work</b>? · <b>Do</b> they <b>work</b>?"]],
    examples: [["Nam <b>starts</b> work at eight.", "Nam bắt đầu làm việc lúc tám giờ."], ["He <b>doesn’t have</b> lunch at home.", "Anh ấy không ăn trưa ở nhà."], ["<b>Does</b> he <b>enjoy</b> his job? — Yes, he <b>does</b>.", "Anh ấy có thích công việc không? — Có."]],
    mistake: ["He go home at six.", "He goes home at six.", "go với ngôi ba thêm -es: goes."]
  },
  dialogue: { title: "Hỏi thăm sau giờ làm", lines: [
    ["A", "You look tired. Do you have a busy day?", "Trông bạn mệt quá. Hôm nay bận lắm à?"],
    ["B", "Yes. I have two meetings and a new project.", "Ừ. Tôi có hai cuộc họp và một dự án mới."],
    ["A", "Do you have lunch at the office?", "Bạn có ăn trưa ở văn phòng không?"],
    ["B", "Yes, I eat lunch with my team.", "Có, tôi ăn trưa cùng nhóm."],
    ["A", "What time do you go home?", "Mấy giờ bạn về nhà?"],
    ["B", "I usually go home at six.", "Tôi thường về nhà lúc sáu giờ."]
  ] },
  drills: {
    fill: [
      ["Nam ___ home at six.", "goes", ["goes", "go", "gos"], "go với ngôi ba thêm -es: goes.", "Nam về nhà lúc sáu giờ.", "Chia động từ (go)"],
      ["He ___ his job very much.", "enjoys", ["enjoys", "enjoy", "enjoies"], "Tận cùng nguyên âm + y: chỉ thêm -s (enjoys).", "Anh ấy rất thích công việc của mình.", "Chia động từ (enjoy)"]
    ],
    error: [
      ["She don't have lunch at home.", 1, "doesn't", ["doesn't", "isn't", "not"], "Chủ ngữ she dùng doesn’t."]
    ]
  },
  reading: {
    title: "A day at work",
    sentences: [
      ["Nam is an architect at a design company in Ho Chi Minh City.", "Nam là kiến trúc sư ở một công ty thiết kế tại TP. Hồ Chí Minh."],
      ["He gets up early and starts work at eight o'clock.", "Anh ấy dậy sớm và bắt đầu làm việc lúc tám giờ."],
      ["In the morning, he draws plans on his computer.", "Buổi sáng, anh ấy vẽ bản vẽ trên máy tính."],
      ["He has lunch with his team at twelve.", "Anh ấy ăn trưa với nhóm lúc mười hai giờ."],
      ["In the afternoon, he meets clients and talks about their new houses.", "Buổi chiều, anh ấy gặp khách hàng và nói về ngôi nhà mới của họ."],
      ["Nam finishes work at six. He is often tired, but he enjoys his job.", "Nam tan làm lúc sáu giờ. Anh ấy thường mệt nhưng rất thích công việc."]
    ],
    tf: [["Nam starts work at nine o'clock.", false], ["Nam has lunch with his team.", true], ["Nam doesn't enjoy his job.", false]],
    mc: [["What does Nam do in the afternoon?", ["He draws plans.", "He meets clients.", "He goes home."], 1]],
    qa: [
      ["What is Nam's job?", "Nam làm nghề gì?", ["architect"], "He is an architect."],
      ["What time does Nam finish work?", "Mấy giờ Nam tan làm?", ["six|6"], "He finishes work at six."],
      ["Who does Nam have lunch with?", "Nam ăn trưa với ai?", ["team"], "He has lunch with his team."]
    ]
  },
  writing: [
    ["Anh ấy bắt đầu làm việc lúc tám giờ.", ["He starts work at eight.", "He starts work at eight o'clock.", "He starts working at eight."], ["starts", "at eight"], "Ngôi ba: starts. Giờ: at + giờ."],
    ["Tôi thường mệt sau giờ làm.", ["I am often tired after work.", "I'm often tired after work.", "I'm usually tired after work.", "I am usually tired after work."], ["often", "tired"], "often / usually đứng sau to be."],
    ["Cô ấy thích công việc của mình.", ["She enjoys her job.", "She likes her job."], ["enjoys", "her job"], ""]
  ]
}
,
/* ===== Unit 4 · Mua sắm ===== */
{
  id: "s1u4l1", stage: 1, unit: 4, n: 1, unitTitle: "Số, giá cả và mua sắm",
  title: "Đồ vật quanh ta", titleEn: "Things around us",
  words: [
    ["bag", "/bæɡ/", "danh từ", "cái túi, cặp", "This bag is new.", "Cái túi này mới."],
    ["key", "/kiː/", "danh từ", "chìa khóa", "Are these your keys?", "Đây có phải chìa khóa của bạn không?"],
    ["wallet", "/ˈwɒlɪt/", "danh từ", "ví (tiền)", "That is my wallet.", "Kia là ví của tôi."],
    ["umbrella", "/ʌmˈbrelə/", "danh từ", "cái ô, dù", "Is this umbrella yours?", "Cái ô này của bạn à?"],
    ["watch", "/wɒtʃ/", "danh từ", "đồng hồ đeo tay", "I like that watch.", "Tôi thích cái đồng hồ kia."],
    ["glasses", "/ˈɡlɑːsɪz/", "danh từ", "kính mắt", "Those are my glasses.", "Kia là kính của tôi."],
    ["book", "/bʊk/", "danh từ", "quyển sách", "These books are for you.", "Những quyển sách này dành cho bạn."],
    ["pen", "/pen/", "danh từ", "cây bút", "Can I use this pen?", "Tôi dùng cây bút này được không?"],
    ["table", "/ˈteɪbl/", "danh từ", "cái bàn", "Put it on the table.", "Đặt nó lên bàn."],
    ["chair", "/tʃeə(r)/", "danh từ", "cái ghế", "That chair is very old.", "Cái ghế kia rất cũ."]
  ],
  grammar: {
    name: "This / that / these / those", nameEn: "Demonstratives",
    desc: "Dùng để chỉ đồ vật. This (này) và these (những… này) cho vật ở gần. That (kia) và those (những… kia) cho vật ở xa. These và those đi với danh từ số nhiều.",
    formula: [["·", "Gần · số ít: <b>this</b> bag"], ["·", "Gần · số nhiều: <b>these</b> bags"], ["·", "Xa · số ít: <b>that</b> chair"], ["·", "Xa · số nhiều: <b>those</b> chairs"]],
    examples: [["<b>This</b> is my wallet.", "Đây là ví của tôi."], ["<b>These</b> keys are on the table.", "Những chiếc chìa khóa này ở trên bàn."], ["Are <b>those</b> your glasses?", "Kia có phải kính của bạn không?"]],
    mistake: ["This books are new.", "These books are new.", "books là số nhiều nên dùng these, không dùng this."]
  },
  dialogue: { title: "Tìm đồ thất lạc", lines: [
    ["A", "Excuse me, is this your bag?", "Xin lỗi, đây có phải túi của bạn không?"],
    ["B", "No, it isn't. My bag is black.", "Không phải. Túi của tôi màu đen."],
    ["A", "What about that black bag on the chair?", "Thế cái túi đen trên ghế kia thì sao?"],
    ["B", "Yes, that's my bag! Thank you.", "Đúng rồi, đó là túi của tôi! Cảm ơn bạn."],
    ["A", "And are these your keys?", "Còn đây có phải chìa khóa của bạn không?"],
    ["B", "Yes, they are. You are very kind.", "Đúng rồi. Bạn thật tốt bụng."]
  ] },
  drills: {
    fill: [
      ["___ is my wallet. (ở gần)", "This", ["This", "These", "Those"], "Gần, số ít: this.", "Đây là ví của tôi.", "Chọn this / that / these / those"],
      ["Are ___ your glasses? (ở xa)", "those", ["those", "that", "this"], "Xa, số nhiều (glasses): those.", "Kia có phải kính của bạn không?", "Chọn this / that / these / those"],
      ["___ books are for you. (ở gần)", "These", ["These", "This", "That"], "Gần, số nhiều: these.", "Những quyển sách này dành cho bạn.", "Chọn this / that / these / those"]
    ],
    error: [
      ["This books are new.", 0, "These", ["These", "That", "Those"], "books số nhiều, ở gần: these."],
      ["Those chair is very old.", 0, "That", ["That", "These", "This"], "chair số ít, ở xa: that."]
    ]
  },
  pron: [["this", "/ðɪs/", "cái này"], ["these", "/ðiːz/", "những cái này"], "this: /ɪ/ ngắn, âm cuối /s/ nhẹ. these: /iː/ dài, âm cuối /z/ rung cổ.", "this và these"],
  writing: [
    ["Đây là chìa khóa của tôi.", ["These are my keys.", "This is my key."], ["my keys"], "Nhiều chìa khóa: These are my keys."],
    ["Cái túi kia là của bạn à?", ["Is that bag yours?", "Is that your bag?"], ["that", "bag"], "Ở xa, số ít: that."],
    ["Những quyển sách này dành cho bạn.", ["These books are for you."], ["these", "books"], ""]
  ]
},
{
  id: "s1u4l2", stage: 1, unit: 4, n: 2, unitTitle: "Số, giá cả và mua sắm",
  title: "Giá cả", titleEn: "Prices",
  words: [
    ["price", "/praɪs/", "danh từ", "giá", "What's the price of this watch?", "Cái đồng hồ này giá bao nhiêu?"],
    ["cheap", "/tʃiːp/", "tính từ", "rẻ", "These shoes are cheap.", "Đôi giày này rẻ."],
    ["expensive", "/ɪkˈspensɪv/", "tính từ", "đắt", "That car is very expensive.", "Chiếc xe kia rất đắt."],
    ["money", "/ˈmʌni/", "danh từ", "tiền", "I don't have much money.", "Tôi không có nhiều tiền."],
    ["pay", "/peɪ/", "động từ", "trả tiền", "Can I pay by card?", "Tôi trả bằng thẻ được không?"],
    ["cost", "/kɒst/", "động từ", "có giá, tốn", "How much does it cost?", "Cái này giá bao nhiêu?"],
    ["dollar", "/ˈdɒlə(r)/", "danh từ", "đô la", "It's ten dollars.", "Nó giá mười đô la."],
    ["thousand", "/ˈθaʊznd/", "số", "nghìn", "It's fifty thousand dong.", "Nó giá năm mươi nghìn đồng."],
    ["million", "/ˈmɪljən/", "số", "triệu", "This phone costs ten million dong.", "Điện thoại này giá mười triệu đồng."],
    ["cash", "/kæʃ/", "danh từ", "tiền mặt", "Do you have cash?", "Bạn có tiền mặt không?"]
  ],
  grammar: {
    name: "Hỏi giá: How much…?", nameEn: "How much is / are…?",
    desc: "Hỏi giá dùng How much. Một món: How much is it? Nhiều món: How much are they? Hoặc dùng động từ cost: How much does it cost?",
    formula: [["?", "<b>How much is</b> this bag?"], ["?", "<b>How much are</b> these glasses?"], ["?", "<b>How much does</b> it <b>cost</b>?"], ["✓", "<b>It’s</b> 200,000 dong. · <b>They’re</b> 10 dollars."]],
    examples: [["<b>How much is</b> this watch? — <b>It’s</b> fifty dollars.", "Cái đồng hồ này giá bao nhiêu? — Năm mươi đô."], ["<b>How much are</b> these books? — <b>They’re</b> cheap.", "Mấy quyển sách này giá bao nhiêu? — Rẻ thôi."]],
    mistake: ["How many is this bag?", "How much is this bag?", "Hỏi giá luôn dùng How much, không dùng How many."]
  },
  dialogue: { title: "Hỏi giá ở cửa hàng", lines: [
    ["A", "Excuse me. How much is this watch?", "Xin lỗi. Cái đồng hồ này giá bao nhiêu?"],
    ["B", "It's two million dong.", "Hai triệu đồng ạ."],
    ["A", "That's expensive. What about that one?", "Đắt quá. Còn cái kia thì sao?"],
    ["B", "That one is cheap. It's five hundred thousand.", "Cái đó rẻ. Năm trăm nghìn ạ."],
    ["A", "OK, I'll take it. Can I pay by card?", "Được, tôi lấy cái đó. Tôi trả bằng thẻ được không?"],
    ["B", "Sorry, we only take cash.", "Xin lỗi, chúng tôi chỉ nhận tiền mặt."]
  ] },
  drills: {
    fill: [
      ["How ___ is this bag?", "much", ["much", "many", "old"], "Hỏi giá: How much.", "Cái túi này giá bao nhiêu?", "Chọn từ đúng"],
      ["How much ___ these glasses?", "are", ["are", "is", "am"], "glasses số nhiều: are.", "Cặp kính này giá bao nhiêu?", "Điền is / are"],
      ["How much does it ___?", "cost", ["cost", "costs", "price"], "Sau does dùng động từ nguyên mẫu: cost.", "Nó giá bao nhiêu?", "Chọn từ đúng"]
    ],
    error: [
      ["How many is this watch?", 1, "much", ["much", "old", "long"], "Hỏi giá dùng How much."],
      ["How much is these books?", 2, "are", ["are", "am", "be"], "these books số nhiều: are."]
    ]
  },
  pron: [["cheap", "/tʃiːp/", "rẻ"], ["chip", "/tʃɪp/", "con chip"], "cheap: /iː/ dài. chip: /ɪ/ ngắn. Kéo dài nguyên âm sẽ đổi nghĩa từ.", "âm /iː/ và /ɪ/"],
  writing: [
    ["Cái đồng hồ này giá bao nhiêu?", ["How much is this watch?", "How much does this watch cost?"], ["how much", "watch"], ""],
    ["Đắt quá!", ["That's expensive!", "It's expensive!", "That's very expensive!", "It's too expensive!", "That's too expensive!"], ["expensive"], ""],
    ["Tôi trả bằng tiền mặt được không?", ["Can I pay in cash?", "Can I pay by cash?", "Can I pay with cash?"], ["pay", "cash"], "Nói chuẩn nhất: pay in cash; trả bằng thẻ: pay by card."]
  ]
},
{
  id: "s1u4l3", stage: 1, unit: 4, n: 3, unitTitle: "Số, giá cả và mua sắm",
  title: "Đi chợ", titleEn: "At the market",
  words: [
    ["market", "/ˈmɑːkɪt/", "danh từ", "chợ", "I go to the market every morning.", "Sáng nào tôi cũng đi chợ."],
    ["fruit", "/fruːt/", "danh từ", "trái cây", "This fruit is very sweet.", "Loại trái cây này rất ngọt."],
    ["apple", "/ˈæpl/", "danh từ", "quả táo", "I want two apples.", "Tôi muốn hai quả táo."],
    ["banana", "/bəˈnɑːnə/", "danh từ", "quả chuối", "How much are the bananas?", "Chuối giá bao nhiêu?"],
    ["orange", "/ˈɒrɪndʒ/", "danh từ", "quả cam", "These oranges are fresh.", "Những quả cam này tươi."],
    ["egg", "/eɡ/", "danh từ", "quả trứng", "I need ten eggs.", "Tôi cần mười quả trứng."],
    ["tomato", "/təˈmɑːtəʊ/", "danh từ", "quả cà chua", "One kilo of tomatoes, please.", "Cho tôi một ký cà chua."],
    ["potato", "/pəˈteɪtəʊ/", "danh từ", "củ khoai tây", "Potatoes are cheap today.", "Hôm nay khoai tây rẻ."],
    ["kilo", "/ˈkiːləʊ/", "danh từ", "ký, kilôgam", "Two kilos of apples, please.", "Cho tôi hai ký táo."],
    ["fresh", "/freʃ/", "tính từ", "tươi", "Is the fruit fresh?", "Trái cây có tươi không?"]
  ],
  grammar: {
    name: "Danh từ số nhiều", nameEn: "Plural nouns",
    desc: "Hầu hết danh từ thêm -s khi số nhiều. Tận cùng -s, -sh, -ch, -x, -o thêm -es. Phụ âm + y đổi thành -ies. Một số từ bất quy tắc phải học thuộc.",
    formula: [["+s", "apple → apple<b>s</b> · egg → egg<b>s</b>"], ["+es", "tomato → tomato<b>es</b> · watch → watch<b>es</b>"], ["ies", "baby → bab<b>ies</b> · city → cit<b>ies</b>"], ["!", "child → <b>children</b> · man → <b>men</b> · woman → <b>women</b>"]],
    examples: [["I want two <b>apples</b> and three <b>bananas</b>.", "Tôi muốn hai quả táo và ba quả chuối."], ["One kilo of <b>tomatoes</b>, please.", "Cho tôi một ký cà chua."]],
    mistake: ["I want three apple.", "I want three apples.", "Tiếng Việt không đổi danh từ khi đếm, nhưng tiếng Anh phải thêm -s khi nhiều hơn một."]
  },
  dialogue: { title: "Mua trái cây", lines: [
    ["A", "Good morning! Are these oranges fresh?", "Chào chị! Cam này có tươi không?"],
    ["B", "Yes, they are. They're from Vinh Long.", "Tươi lắm. Cam Vĩnh Long đấy."],
    ["A", "How much are they?", "Bao nhiêu tiền vậy chị?"],
    ["B", "Forty thousand a kilo.", "Bốn mươi nghìn một ký."],
    ["A", "Two kilos, please. And six eggs.", "Cho em hai ký. Và sáu quả trứng."],
    ["B", "Here you are. That's one hundred thousand.", "Của em đây. Tổng cộng một trăm nghìn."]
  ] },
  drills: {
    fill: [
      ["I want three ___. (apple)", "apples", ["apples", "apple", "applees"], "Số nhiều thêm -s: apples.", "Tôi muốn ba quả táo.", "Viết dạng số nhiều"],
      ["One kilo of ___, please. (tomato)", "tomatoes", ["tomatoes", "tomatos", "tomato"], "Tận cùng -o thêm -es: tomatoes.", "Cho tôi một ký cà chua.", "Viết dạng số nhiều"],
      ["Two ___ are playing in the park. (child)", "children", ["children", "childs", "childrens"], "child → children (bất quy tắc).", "Hai đứa trẻ đang chơi trong công viên.", "Viết dạng số nhiều"]
    ],
    error: [
      ["I need ten egg.", 3, "eggs", ["eggs", "egges", "egg's"], "Nhiều hơn một: eggs."],
      ["These potatos are cheap.", 1, "potatoes", ["potatoes", "potato", "potatoies"], "Tận cùng -o thêm -es: potatoes."]
    ]
  },
  pron: [["fresh", "/freʃ/", "tươi"], ["French", "/frentʃ/", "tiếng Pháp"], "fresh kết thúc bằng /ʃ/ nhẹ như “suỵt”. French có thêm /n/ và kết thúc bằng /tʃ/ bật mạnh.", "âm cuối /ʃ/ và /ntʃ/"],
  writing: [
    ["Cho tôi hai ký táo.", ["Two kilos of apples, please.", "Can I have two kilos of apples, please?", "I'd like two kilos of apples, please."], ["two kilos", "apples"], "kilo và apple đều số nhiều: two kilos of apples."],
    ["Cam này có tươi không?", ["Are these oranges fresh?", "Are the oranges fresh?"], ["oranges", "fresh"], ""],
    ["Tôi cần mười quả trứng.", ["I need ten eggs."], ["need", "eggs"], ""]
  ]
},
{
  id: "s1u4l4", stage: 1, unit: 4, n: 4, unitTitle: "Số, giá cả và mua sắm",
  title: "Ở cửa hàng quần áo", titleEn: "In a clothes shop",
  words: [
    ["buy", "/baɪ/", "động từ", "mua", "I want to buy a new shirt.", "Tôi muốn mua một chiếc áo sơ mi mới."],
    ["size", "/saɪz/", "danh từ", "cỡ, kích thước", "What size are you?", "Bạn mặc cỡ nào?"],
    ["color", "/ˈkʌlə(r)/", "danh từ", "màu sắc", "Do you have it in another color?", "Bạn có màu khác không?"],
    ["try on", "/traɪ ɒn/", "cụm động từ", "mặc thử", "Can I try it on?", "Tôi mặc thử được không?"],
    ["receipt", "/rɪˈsiːt/", "danh từ", "hóa đơn, biên lai", "Here is your receipt.", "Đây là hóa đơn của bạn."],
    ["card", "/kɑːd/", "danh từ", "thẻ", "I'll pay by card.", "Tôi sẽ trả bằng thẻ."],
    ["discount", "/ˈdɪskaʊnt/", "danh từ", "giảm giá", "Is there a discount?", "Có giảm giá không?"],
    ["sale", "/seɪl/", "danh từ", "đợt khuyến mãi", "These jeans are on sale.", "Quần jean này đang khuyến mãi."],
    ["change", "/tʃeɪndʒ/", "danh từ", "tiền thừa", "Here's your change.", "Đây là tiền thừa của bạn."],
    ["shopping", "/ˈʃɒpɪŋ/", "danh từ", "việc mua sắm", "I go shopping on Saturdays.", "Tôi đi mua sắm vào thứ bảy."]
  ],
  grammar: {
    name: "Đề nghị lịch sự: I’d like / Can I…?", nameEn: "Polite requests",
    desc: "Khi mua hàng, dùng I’d like (tôi muốn) thay cho I want để lịch sự hơn. Xin phép làm gì: Can I + động từ? Nhờ người khác: Can you + động từ?",
    formula: [["·", "<b>I’d like</b> this shirt, please."], ["?", "<b>Can I</b> try it on?"], ["?", "<b>Can you</b> give me a bag?"], ["✓", "<b>Sure.</b> · <b>Of course.</b> · <b>Sorry, …</b>"]],
    examples: [["<b>I’d like</b> a size M, please.", "Tôi muốn cỡ M."], ["<b>Can I</b> pay by card? — <b>Of course.</b>", "Tôi trả bằng thẻ được không? — Tất nhiên."]],
    mistake: ["I want try it on.", "Can I try it on?", "Xin phép lịch sự dùng Can I…? Và want luôn cần to trước động từ: want to try."]
  },
  dialogue: { title: "Mua áo", lines: [
    ["A", "Hello. Can I help you?", "Xin chào. Tôi giúp gì được cho anh?"],
    ["B", "Yes, I'd like this shirt in blue.", "Vâng, tôi muốn chiếc áo này màu xanh."],
    ["A", "Sure. What size are you?", "Dạ. Anh mặc cỡ nào ạ?"],
    ["B", "Medium, I think. Can I try it on?", "Chắc là cỡ vừa. Tôi mặc thử được không?"],
    ["A", "Of course. It's on sale today.", "Tất nhiên. Hôm nay áo đang giảm giá."],
    ["B", "Great! I'll take it. Can I pay by card?", "Tuyệt! Tôi lấy nó. Tôi trả bằng thẻ được không?"]
  ] },
  drills: {
    fill: [
      ["I'd ___ this shirt, please.", "like", ["like", "want", "likes"], "Cụm lịch sự: I’d like.", "Tôi muốn chiếc áo này.", "Chọn từ đúng"],
      ["___ I try it on?", "Can", ["Can", "Do", "Am"], "Xin phép: Can I…?", "Tôi mặc thử được không?", "Chọn từ đúng"],
      ["Here's your ___. (tiền thừa)", "change", ["change", "money back", "cash"], "Tiền thừa: change.", "Đây là tiền thừa của bạn.", "Chọn từ đúng"]
    ],
    error: [
      ["Can I paying by card?", 2, "pay", ["pay", "pays", "to pay"], "Sau Can dùng động từ nguyên mẫu."],
      ["I'd likes a size M.", 1, "like", ["like", "liking", "to like"], "I’d like: like giữ nguyên."]
    ]
  },
  pron: [["shirt", "/ʃɜːt/", "áo sơ mi"], ["skirt", "/skɜːt/", "chân váy"], "shirt bắt đầu bằng /ʃ/ (suỵt). skirt bắt đầu bằng cụm /sk/: đọc rõ /s/ rồi /k/.", "âm /ʃ/ và /sk/"],
  writing: [
    ["Tôi mặc thử được không?", ["Can I try it on?", "Can I try this on?", "May I try it on?"], ["can", "try on"], "Đại từ it đứng giữa: try it on."],
    ["Tôi muốn chiếc áo này màu đen.", ["I'd like this shirt in black.", "I would like this shirt in black."], ["I'd like", "in black"], "“Màu đen” khi nói về món hàng: in black."],
    ["Có giảm giá không?", ["Is there a discount?", "Do you have a discount?"], ["discount"], ""]
  ]
},
{
  id: "s1u4l5", stage: 1, unit: 4, n: 5, unitTitle: "Số, giá cả và mua sắm",
  title: "Đi siêu thị", titleEn: "Shopping day",
  words: [
    ["supermarket", "/ˈsuːpəmɑːkɪt/", "danh từ", "siêu thị", "The supermarket is near my house.", "Siêu thị ở gần nhà tôi."],
    ["list", "/lɪst/", "danh từ", "danh sách", "Here is my shopping list.", "Đây là danh sách đồ cần mua của tôi."],
    ["basket", "/ˈbɑːskɪt/", "danh từ", "cái giỏ", "Put the eggs in the basket.", "Bỏ trứng vào giỏ."],
    ["need", "/niːd/", "động từ", "cần", "We need some fruit.", "Chúng ta cần ít trái cây."],
    ["want", "/wɒnt/", "động từ", "muốn", "The children want ice cream.", "Bọn trẻ muốn ăn kem."],
    ["open", "/ˈəʊpən/", "tính từ, động từ", "mở cửa; mở", "The shop is open until ten.", "Cửa hàng mở cửa đến mười giờ."],
    ["close", "/kləʊz/", "động từ", "đóng cửa", "The market closes at noon.", "Chợ đóng cửa lúc trưa."],
    ["queue", "/kjuː/", "danh từ", "hàng (người xếp hàng)", "The queue is very long.", "Hàng người rất dài."],
    ["seller", "/ˈselə(r)/", "danh từ", "người bán", "The seller is very friendly.", "Người bán rất thân thiện."],
    ["bargain", "/ˈbɑːɡən/", "động từ", "mặc cả", "People bargain at the market.", "Người ta mặc cả ở chợ."]
  ],
  grammar: {
    name: "Ôn tập: mua sắm", nameEn: "Review: shopping",
    desc: "Tổng hợp Unit 4: this / that / these / those, hỏi giá với How much, danh từ số nhiều, và cách đề nghị lịch sự I’d like / Can I…?",
    formula: [["·", "<b>These</b> apples · <b>that</b> bag"], ["?", "<b>How much are</b> they?"], ["·", "two kilo<b>s</b> of tomato<b>es</b>"], ["·", "<b>I’d like</b>… · <b>Can I</b>…?"]],
    examples: [["<b>How much are those</b> bananas?", "Chuối kia giá bao nhiêu?"], ["<b>I’d like</b> two kilo<b>s</b> of orange<b>s</b>, please.", "Cho tôi hai ký cam."]],
    mistake: ["I need buy some eggs.", "I need to buy some eggs.", "need và want + to + động từ: need to buy."]
  },
  dialogue: { title: "Lên danh sách đi chợ", lines: [
    ["A", "Do you have the shopping list?", "Em có danh sách đồ cần mua không?"],
    ["B", "Yes. We need eggs, fruit and rice.", "Có. Mình cần trứng, trái cây và gạo."],
    ["A", "The supermarket closes at ten tonight.", "Siêu thị đóng cửa lúc mười giờ tối nay."],
    ["B", "Let's go now. The queue is long on Sundays.", "Đi ngay thôi. Chủ nhật hàng người dài lắm."],
    ["A", "The children want ice cream too.", "Bọn trẻ cũng muốn ăn kem."],
    ["B", "OK, but only one each!", "Được, nhưng mỗi đứa một cây thôi!"]
  ] },
  drills: {
    fill: [
      ["We need ___ buy some fruit.", "to", ["to", "for", "of"], "need + to + động từ.", "Chúng ta cần mua ít trái cây.", "Chọn từ đúng"],
      ["The market ___ at noon.", "closes", ["closes", "close", "closing"], "The market là ngôi ba số ít: closes.", "Chợ đóng cửa lúc trưa.", "Chia động từ (close)"]
    ],
    error: [
      ["The children wants ice cream.", 2, "want", ["want", "wanting", "is want"], "children là số nhiều nên dùng want."]
    ]
  },
  reading: {
    title: "Shopping on Sunday",
    sentences: [
      ["Every Sunday, Lan goes shopping with her husband.", "Chủ nhật nào Lan cũng đi mua sắm với chồng."],
      ["First, they go to the market near their house.", "Đầu tiên, họ đến khu chợ gần nhà."],
      ["The fruit there is fresh and cheap, and Lan likes to bargain with the sellers.", "Trái cây ở đó tươi và rẻ, và Lan thích mặc cả với người bán."],
      ["Then they go to the supermarket for eggs, milk and rice.", "Sau đó họ đến siêu thị mua trứng, sữa và gạo."],
      ["The supermarket is more expensive, but they can pay by card.", "Siêu thị đắt hơn, nhưng họ có thể trả bằng thẻ."],
      ["They always take a shopping list, so they don't buy things they don't need.", "Họ luôn mang theo danh sách, nên không mua những thứ không cần."]
    ],
    tf: [["Lan goes shopping on Saturdays.", false], ["The fruit at the market is cheap.", true], ["They can't pay by card at the supermarket.", false]],
    mc: [["What do they buy at the supermarket?", ["Fruit and vegetables.", "Eggs, milk and rice.", "Clothes and shoes."], 1]],
    qa: [
      ["Who does Lan go shopping with?", "Lan đi mua sắm với ai?", ["husband"], "She goes shopping with her husband."],
      ["Why does Lan like the market?", "Vì sao Lan thích chợ?", ["fresh|cheap|bargain"], "Because the fruit is fresh and cheap, and she can bargain."],
      ["What do they always take?", "Họ luôn mang theo cái gì?", ["list"], "They always take a shopping list."]
    ]
  },
  writing: [
    ["Chúng ta cần mua ít trứng.", ["We need to buy some eggs.", "We need some eggs."], ["need to", "eggs"], "need + to + động từ."],
    ["Siêu thị đóng cửa lúc mười giờ.", ["The supermarket closes at ten.", "The supermarket closes at ten o'clock."], ["supermarket", "closes"], ""],
    ["Hàng người rất dài.", ["The queue is very long.", "The line is very long."], ["queue", "long"], "Anh–Anh: queue; Anh–Mỹ: line."]
  ]
}

,
/* ===== Unit 5 · Thời gian ===== */
{
  id: "s1u5l1", stage: 1, unit: 5, n: 1, unitTitle: "Thời gian và ngày tháng",
  title: "Hỏi giờ", titleEn: "Telling the time",
  words: [
    ["time", "/taɪm/", "danh từ", "thời gian, giờ", "What time is it?", "Mấy giờ rồi?"],
    ["o'clock", "/əˈklɒk/", "trạng từ", "giờ đúng", "It's seven o'clock.", "Bây giờ là bảy giờ đúng."],
    ["half", "/hɑːf/", "danh từ", "một nửa, rưỡi", "It's half past eight.", "Bây giờ là tám giờ rưỡi."],
    ["quarter", "/ˈkwɔːtə(r)/", "danh từ", "mười lăm phút, một phần tư", "It's a quarter past nine.", "Bây giờ là chín giờ mười lăm."],
    ["past", "/pɑːst/", "giới từ", "hơn, quá (giờ)", "It's ten past six.", "Bây giờ là sáu giờ mười."],
    ["minute", "/ˈmɪnɪt/", "danh từ", "phút", "Wait a minute, please.", "Vui lòng đợi một phút."],
    ["hour", "/ˈaʊə(r)/", "danh từ", "giờ, tiếng đồng hồ", "I work eight hours a day.", "Tôi làm việc tám tiếng một ngày."],
    ["noon", "/nuːn/", "danh từ", "buổi trưa (12 giờ)", "We have lunch at noon.", "Chúng tôi ăn trưa lúc mười hai giờ trưa."],
    ["midnight", "/ˈmɪdnaɪt/", "danh từ", "nửa đêm", "I go to bed at midnight.", "Tôi đi ngủ lúc nửa đêm."],
    ["clock", "/klɒk/", "danh từ", "đồng hồ (treo tường)", "The clock on the wall is slow.", "Đồng hồ trên tường bị chậm."]
  ],
  grammar: {
    name: "Nói giờ", nameEn: "Telling the time",
    desc: "Hỏi giờ: What time is it? Trả lời bắt đầu bằng It’s. Giờ đúng dùng o’clock. Phút hơn dùng past, phút kém dùng to. Cách đơn giản: đọc giờ rồi đọc phút (seven thirty).",
    formula: [["?", "<b>What time is it?</b>"], ["·", "7:00 → It’s seven <b>o’clock</b>"], ["·", "7:30 → It’s <b>half past</b> seven · seven thirty"], ["·", "7:15 → <b>a quarter past</b> seven · 7:45 → <b>a quarter to</b> eight"]],
    examples: [["<b>What time is it?</b> — <b>It’s half past</b> eight.", "Mấy giờ rồi? — Tám giờ rưỡi."], ["The meeting starts <b>at</b> ten <b>o’clock</b>.", "Cuộc họp bắt đầu lúc mười giờ."]],
    mistake: ["It's eight hours.", "It's eight o'clock.", "Nói giờ đúng dùng o’clock; hours nghĩa là “số tiếng đồng hồ”."]
  },
  dialogue: { title: "Sắp trễ giờ", lines: [
    ["A", "Excuse me, what time is it?", "Xin lỗi, mấy giờ rồi ạ?"],
    ["B", "It's a quarter past eight.", "Tám giờ mười lăm."],
    ["A", "Oh no! My class starts at half past eight.", "Ôi không! Lớp tôi bắt đầu lúc tám rưỡi."],
    ["B", "Don't worry. You have fifteen minutes.", "Đừng lo. Bạn còn mười lăm phút."],
    ["A", "Is the school far from here?", "Trường có xa đây không?"],
    ["B", "No, it's only five minutes on foot.", "Không, đi bộ chỉ năm phút."]
  ] },
  drills: {
    fill: [
      ["What ___ is it?", "time", ["time", "hour", "clock"], "Hỏi giờ: What time is it?", "Mấy giờ rồi?", "Chọn từ đúng"],
      ["It's seven ___. (7:00)", "o'clock", ["o'clock", "hours", "clock"], "Giờ đúng dùng o’clock.", "Bây giờ là bảy giờ.", "Chọn từ đúng"],
      ["It's half ___ nine. (9:30)", "past", ["past", "to", "of"], "Giờ rưỡi: half past.", "Bây giờ là chín giờ rưỡi.", "Chọn từ đúng"]
    ],
    error: [
      ["It's eight hours now.", 2, "o'clock", ["o'clock", "hour", "time"], "Giờ đúng dùng o’clock."],
      ["What hour is it?", 1, "time", ["time", "clock", "minute"], "Hỏi giờ dùng What time."]
    ]
  },
  pron: [["thirteen", "/ˌθɜːˈtiːn/", "13"], ["thirty", "/ˈθɜːti/", "30"], "Nghe giờ rất hay nhầm 13 và 30. -teen nhấn âm cuối, kéo dài; -ty nhấn âm đầu, đọc nhẹ.", "trọng âm 13 và 30"],
  writing: [
    ["Mấy giờ rồi?", ["What time is it?", "What's the time?"], ["what time"], ""],
    ["Bây giờ là tám giờ rưỡi.", ["It's half past eight.", "It is half past eight.", "It's eight thirty."], ["half past", "eight"], ""],
    ["Tôi làm việc tám tiếng một ngày.", ["I work eight hours a day.", "I work eight hours every day."], ["eight hours", "a day"], "“Một ngày” khi nói tần suất: a day."]
  ]
},
{
  id: "s1u5l2", stage: 1, unit: 5, n: 2, unitTitle: "Thời gian và ngày tháng",
  title: "Các ngày trong tuần", titleEn: "Days of the week",
  words: [
    ["Monday", "/ˈmʌndeɪ/", "danh từ", "thứ Hai", "I have a meeting on Monday.", "Tôi có cuộc họp vào thứ Hai."],
    ["Tuesday", "/ˈtjuːzdeɪ/", "danh từ", "thứ Ba", "The shop is closed on Tuesday.", "Cửa hàng đóng cửa vào thứ Ba."],
    ["Wednesday", "/ˈwenzdeɪ/", "danh từ", "thứ Tư", "See you on Wednesday!", "Hẹn gặp bạn thứ Tư!"],
    ["Thursday", "/ˈθɜːzdeɪ/", "danh từ", "thứ Năm", "My English class is on Thursday.", "Lớp tiếng Anh của tôi vào thứ Năm."],
    ["Friday", "/ˈfraɪdeɪ/", "danh từ", "thứ Sáu", "I love Fridays!", "Tôi thích ngày thứ Sáu!"],
    ["Saturday", "/ˈsætədeɪ/", "danh từ", "thứ Bảy", "We don't work on Saturday.", "Chúng tôi không làm việc thứ Bảy."],
    ["Sunday", "/ˈsʌndeɪ/", "danh từ", "Chủ nhật", "On Sunday, I stay at home.", "Chủ nhật tôi ở nhà."],
    ["today", "/təˈdeɪ/", "trạng từ", "hôm nay", "What day is it today?", "Hôm nay là thứ mấy?"],
    ["tomorrow", "/təˈmɒrəʊ/", "trạng từ", "ngày mai", "See you tomorrow!", "Hẹn gặp lại ngày mai!"],
    ["week", "/wiːk/", "danh từ", "tuần", "I go to the gym three times a week.", "Tôi đi tập thể dục ba lần một tuần."]
  ],
  grammar: {
    name: "Giới từ on + ngày", nameEn: "on + days",
    desc: "Trước các ngày trong tuần dùng on. Tên thứ luôn viết hoa. Thêm -s (on Mondays) để nói việc lặp lại mỗi tuần.",
    formula: [["on", "<b>on</b> Monday · <b>on</b> Friday morning"], ["on", "<b>on</b> Saturdays = thứ Bảy nào cũng"], ["?", "<b>What day is it today?</b> — It’s Tuesday."], ["!", "today / tomorrow KHÔNG dùng on"]],
    examples: [["I have a meeting <b>on</b> Monday.", "Tôi có cuộc họp vào thứ Hai."], ["We don’t work <b>on Saturdays</b>.", "Thứ Bảy nào chúng tôi cũng nghỉ."], ["<b>What day is it today?</b> — It’s Wednesday.", "Hôm nay thứ mấy? — Thứ Tư."]],
    mistake: ["See you on tomorrow.", "See you tomorrow.", "today, tomorrow không đi với giới từ."]
  },
  dialogue: { title: "Hẹn lịch học", lines: [
    ["A", "What day is it today?", "Hôm nay thứ mấy nhỉ?"],
    ["B", "It's Thursday. Why?", "Thứ Năm. Sao thế?"],
    ["A", "We have an English class tomorrow.", "Ngày mai mình có lớp tiếng Anh."],
    ["B", "No, our class is on Saturday.", "Không, lớp mình vào thứ Bảy mà."],
    ["A", "Oh, you're right! Do we have class on Sunday?", "Ồ, đúng rồi! Chủ nhật mình có học không?"],
    ["B", "No, we don't. Sunday is our day off.", "Không. Chủ nhật là ngày nghỉ."]
  ] },
  drills: {
    fill: [
      ["I have a meeting ___ Monday.", "on", ["on", "in", "at"], "Trước thứ trong tuần dùng on.", "Tôi có cuộc họp vào thứ Hai.", "Điền giới từ"],
      ["See you ___!", "tomorrow", ["tomorrow", "on tomorrow", "at tomorrow"], "tomorrow không đi với giới từ.", "Hẹn gặp lại ngày mai!", "Chọn cụm đúng"],
      ["What ___ is it today? — It's Friday.", "day", ["day", "date", "time"], "Hỏi thứ: What day…?", "Hôm nay thứ mấy? — Thứ Sáu.", "Chọn từ đúng"]
    ],
    error: [
      ["My class is in Thursday.", 3, "on", ["on", "at", "by"], "Trước thứ trong tuần dùng on."],
      ["See you on tomorrow.", 2, "-", ["-", "in", "at"], "tomorrow không cần giới từ: See you tomorrow."]
    ]
  },
  pron: [["Tuesday", "/ˈtjuːzdeɪ/", "thứ Ba"], ["Thursday", "/ˈθɜːzdeɪ/", "thứ Năm"], "Tuesday bắt đầu bằng /tj/, âm /uː/. Thursday bắt đầu bằng /θ/ (lưỡi giữa răng), âm /ɜː/.", "Tuesday và Thursday"],
  writing: [
    ["Hôm nay là thứ mấy?", ["What day is it today?", "What day is today?"], ["what day", "today"], ""],
    ["Tôi có lớp tiếng Anh vào thứ Năm.", ["I have an English class on Thursday.", "I have English class on Thursday.", "My English class is on Thursday."], ["English class", "on Thursday"], "an English class: English bắt đầu bằng nguyên âm."],
    ["Hẹn gặp lại ngày mai!", ["See you tomorrow!"], ["see you", "tomorrow"], ""]
  ]
},
{
  id: "s1u5l3", stage: 1, unit: 5, n: 3, unitTitle: "Thời gian và ngày tháng",
  title: "Tháng và ngày lễ", titleEn: "Months & holidays",
  words: [
    ["month", "/mʌnθ/", "danh từ", "tháng", "There are twelve months in a year.", "Một năm có mười hai tháng."],
    ["January", "/ˈdʒænjuəri/", "danh từ", "tháng Một", "My birthday is in January.", "Sinh nhật tôi vào tháng Một."],
    ["March", "/mɑːtʃ/", "danh từ", "tháng Ba", "The project starts in March.", "Dự án bắt đầu vào tháng Ba."],
    ["May", "/meɪ/", "danh từ", "tháng Năm", "It's very hot in May.", "Tháng Năm trời rất nóng."],
    ["July", "/dʒuˈlaɪ/", "danh từ", "tháng Bảy", "We travel in July.", "Chúng tôi đi du lịch vào tháng Bảy."],
    ["September", "/sepˈtembə(r)/", "danh từ", "tháng Chín", "School starts in September.", "Năm học bắt đầu vào tháng Chín."],
    ["December", "/dɪˈsembə(r)/", "danh từ", "tháng Mười Hai", "Christmas is in December.", "Giáng sinh vào tháng Mười Hai."],
    ["date", "/deɪt/", "danh từ", "ngày (tháng)", "What's the date today?", "Hôm nay là ngày bao nhiêu?"],
    ["holiday", "/ˈhɒlədeɪ/", "danh từ", "kỳ nghỉ, ngày lễ", "Tet is a big holiday in Vietnam.", "Tết là một dịp lễ lớn ở Việt Nam."],
    ["calendar", "/ˈkæləndə(r)/", "danh từ", "lịch", "Check the calendar, please.", "Bạn xem lịch giúp nhé."]
  ],
  grammar: {
    name: "Giới từ in + tháng, năm; ngày tháng", nameEn: "in + months · dates",
    desc: "Trước tháng, năm, mùa dùng in. Ngày cụ thể dùng on. Ngày tháng đọc bằng số thứ tự: the first, the second, the third…",
    formula: [["in", "<b>in</b> May · <b>in</b> 2026 · <b>in</b> summer"], ["on", "<b>on</b> the 5th of May · <b>on</b> May 5th"], ["·", "1st first · 2nd second · 3rd third · 4th fourth"], ["?", "<b>What’s the date today?</b> — It’s the tenth of July."]],
    examples: [["My birthday is <b>in</b> January.", "Sinh nhật tôi vào tháng Một."], ["The wedding is <b>on</b> the second of September.", "Đám cưới vào ngày hai tháng Chín."]],
    mistake: ["My birthday is on March.", "My birthday is in March.", "Chỉ có tháng (không có ngày) thì dùng in."]
  },
  dialogue: { title: "Sinh nhật khi nào?", lines: [
    ["A", "When is your birthday, Mai?", "Sinh nhật bạn khi nào vậy Mai?"],
    ["B", "It's in March. On the fifth of March.", "Vào tháng Ba. Ngày năm tháng Ba."],
    ["A", "Really? Mine is in March too!", "Thật à? Sinh nhật mình cũng tháng Ba!"],
    ["B", "What's the date of your birthday?", "Sinh nhật bạn ngày bao nhiêu?"],
    ["A", "The twentieth. Let's have a party together!", "Ngày hai mươi. Mình tổ chức tiệc chung đi!"],
    ["B", "Great idea! Let's check the calendar.", "Ý hay đấy! Xem lịch đã nào."]
  ] },
  drills: {
    fill: [
      ["My birthday is ___ January.", "in", ["in", "on", "at"], "Trước tháng dùng in.", "Sinh nhật tôi vào tháng Một.", "Điền giới từ"],
      ["The wedding is ___ the second of May.", "on", ["on", "in", "at"], "Ngày cụ thể dùng on.", "Đám cưới vào ngày hai tháng Năm.", "Điền giới từ"],
      ["What's the ___ today? — It's the tenth.", "date", ["date", "day", "time"], "Hỏi ngày tháng: What’s the date?", "Hôm nay ngày bao nhiêu? — Ngày mười.", "Chọn từ đúng"]
    ],
    error: [
      ["School starts on September.", 2, "in", ["in", "at", "by"], "Chỉ có tháng: in September."],
      ["Christmas is in the twenty-fifth of December.", 2, "on", ["on", "at", "by"], "Ngày cụ thể: on."]
    ]
  },
  pron: [["March", "/mɑːtʃ/", "tháng Ba"], ["much", "/mʌtʃ/", "nhiều"], "March: /ɑː/ dài, mở miệng rộng. much: /ʌ/ ngắn giống “ă”.", "âm /ɑː/ và /ʌ/"],
  writing: [
    ["Sinh nhật tôi vào tháng Bảy.", ["My birthday is in July."], ["birthday", "in July"], "Tháng luôn viết hoa."],
    ["Hôm nay là ngày bao nhiêu?", ["What's the date today?", "What is the date today?", "What's today's date?"], ["date", "today"], ""],
    ["Tết là một dịp lễ lớn ở Việt Nam.", ["Tet is a big holiday in Vietnam."], ["big holiday", "Vietnam"], ""]
  ]
},
{
  id: "s1u5l4", stage: 1, unit: 5, n: 4, unitTitle: "Thời gian và ngày tháng",
  title: "Đặt lịch hẹn", titleEn: "Making appointments",
  words: [
    ["appointment", "/əˈpɔɪntmənt/", "danh từ", "cuộc hẹn", "I have an appointment at three.", "Tôi có một cuộc hẹn lúc ba giờ."],
    ["free", "/friː/", "tính từ", "rảnh; miễn phí", "Are you free on Friday?", "Thứ Sáu bạn có rảnh không?"],
    ["available", "/əˈveɪləbl/", "tính từ", "có thể gặp, còn trống", "Is the doctor available today?", "Hôm nay bác sĩ có thể khám không?"],
    ["schedule", "/ˈʃedjuːl/", "danh từ", "lịch trình", "My schedule is full this week.", "Lịch của tôi tuần này kín rồi."],
    ["soon", "/suːn/", "trạng từ", "sớm, chẳng bao lâu nữa", "See you soon!", "Sớm gặp lại nhé!"],
    ["later", "/ˈleɪtə(r)/", "trạng từ", "sau, lát nữa", "Call me later.", "Gọi cho tôi sau nhé."],
    ["tonight", "/təˈnaɪt/", "trạng từ", "tối nay", "Are you busy tonight?", "Tối nay bạn có bận không?"],
    ["next", "/nekst/", "tính từ", "tiếp theo, tới", "Let's meet next week.", "Tuần tới mình gặp nhau nhé."],
    ["arrive", "/əˈraɪv/", "động từ", "đến nơi", "Please arrive at nine.", "Vui lòng đến lúc chín giờ."],
    ["wait", "/weɪt/", "động từ", "chờ, đợi", "Please wait for me.", "Hãy đợi tôi nhé."]
  ],
  grammar: {
    name: "Giới từ chỉ thời gian: at / on / in", nameEn: "at · on · in",
    desc: "Ba giới từ thời gian quan trọng nhất. at cho giờ chính xác, on cho ngày, in cho khoảng thời gian dài (tháng, năm, buổi trong ngày).",
    formula: [["at", "<b>at</b> 3 o’clock · <b>at</b> noon · <b>at</b> night · <b>at</b> the weekend"], ["on", "<b>on</b> Friday · <b>on</b> May 5th · <b>on</b> my birthday"], ["in", "<b>in</b> the morning · <b>in</b> July · <b>in</b> 2026"], ["!", "next week · tonight · tomorrow: không có giới từ"]],
    examples: [["I have an appointment <b>at</b> three <b>on</b> Friday.", "Tôi có hẹn lúc ba giờ thứ Sáu."], ["Let’s meet <b>in</b> the afternoon.", "Mình gặp nhau buổi chiều nhé."], ["See you <b>next week</b>.", "Hẹn gặp tuần sau."]],
    mistake: ["See you in next week.", "See you next week.", "Có next, this, last thì bỏ giới từ."]
  },
  dialogue: { title: "Hẹn gặp khách hàng", lines: [
    ["A", "Hello, Mr Brown. Are you free next week?", "Chào ông Brown. Tuần tới ông có rảnh không?"],
    ["B", "Let me check my schedule. Yes, on Tuesday.", "Để tôi xem lịch. Có, thứ Ba."],
    ["A", "Is ten o'clock OK for you?", "Mười giờ có tiện cho ông không?"],
    ["B", "Sorry, I have a meeting in the morning.", "Xin lỗi, tôi có cuộc họp buổi sáng."],
    ["A", "What about two in the afternoon?", "Thế hai giờ chiều thì sao ạ?"],
    ["B", "Perfect. See you on Tuesday at two.", "Hoàn hảo. Hẹn gặp thứ Ba lúc hai giờ."]
  ] },
  drills: {
    fill: [
      ["I have an appointment ___ three o'clock.", "at", ["at", "on", "in"], "Giờ chính xác: at.", "Tôi có hẹn lúc ba giờ.", "Điền at / on / in"],
      ["Let's meet ___ the afternoon.", "in", ["in", "at", "on"], "Buổi trong ngày: in the afternoon.", "Mình gặp nhau buổi chiều nhé.", "Điền at / on / in"],
      ["Are you free ___ Friday?", "on", ["on", "in", "at"], "Ngày trong tuần: on.", "Thứ Sáu bạn có rảnh không?", "Điền at / on / in"]
    ],
    error: [
      ["See you in next week.", 2, "-", ["-", "on", "at"], "Có next thì bỏ giới từ: See you next week."],
      ["Please arrive on nine o'clock.", 2, "at", ["at", "in", "by"], "Giờ chính xác dùng at."]
    ]
  },
  pron: [["later", "/ˈleɪtə(r)/", "sau, lát nữa"], ["letter", "/ˈletə(r)/", "lá thư"], "later: /eɪ/ như “ây”. letter: /e/ ngắn như “e”.", "âm /eɪ/ và /e/"],
  writing: [
    ["Thứ Sáu bạn có rảnh không?", ["Are you free on Friday?"], ["free", "on Friday"], ""],
    ["Tôi có cuộc hẹn lúc ba giờ chiều.", ["I have an appointment at three in the afternoon.", "I have an appointment at three o'clock in the afternoon.", "I have an appointment at 3 p.m."], ["appointment", "at three"], "Giờ: at; buổi: in the afternoon."],
    ["Hẹn gặp tuần sau.", ["See you next week."], ["see you", "next week"], "next week không có giới từ."]
  ]
},
{
  id: "s1u5l5", stage: 1, unit: 5, n: 5, unitTitle: "Thời gian và ngày tháng",
  title: "Một tuần bận rộn", titleEn: "My busy week",
  words: [
    ["gym", "/dʒɪm/", "danh từ", "phòng tập thể dục", "I go to the gym after work.", "Tôi đi tập gym sau giờ làm."],
    ["class", "/klɑːs/", "danh từ", "lớp học", "My yoga class is at seven.", "Lớp yoga của tôi lúc bảy giờ."],
    ["cinema", "/ˈsɪnəmə/", "danh từ", "rạp chiếu phim", "Let's go to the cinema tonight.", "Tối nay mình đi xem phim nhé."],
    ["party", "/ˈpɑːti/", "danh từ", "bữa tiệc", "There's a party on Saturday.", "Thứ Bảy có một bữa tiệc."],
    ["dinner", "/ˈdɪnə(r)/", "danh từ", "bữa tối", "We have dinner at seven.", "Chúng tôi ăn tối lúc bảy giờ."],
    ["concert", "/ˈkɒnsət/", "danh từ", "buổi hòa nhạc", "The concert starts at eight.", "Buổi hòa nhạc bắt đầu lúc tám giờ."],
    ["swim", "/swɪm/", "động từ", "bơi", "I swim on Sunday mornings.", "Tôi bơi vào sáng Chủ nhật."],
    ["relax", "/rɪˈlæks/", "động từ", "thư giãn", "I relax at the weekend.", "Tôi thư giãn vào cuối tuần."],
    ["sleep", "/sliːp/", "động từ", "ngủ", "I sleep seven hours a night.", "Mỗi đêm tôi ngủ bảy tiếng."],
    ["game", "/ɡeɪm/", "danh từ", "trận đấu, trò chơi", "The football game is on Sunday.", "Trận bóng đá vào Chủ nhật."]
  ],
  grammar: {
    name: "Ôn tập: thời gian", nameEn: "Review: time",
    desc: "Tổng hợp Unit 5: hỏi và nói giờ, thứ, ngày tháng, và cách dùng at / on / in.",
    formula: [["at", "<b>at</b> seven · <b>at</b> noon · <b>at</b> the weekend"], ["on", "<b>on</b> Monday · <b>on</b> the fifth of May"], ["in", "<b>in</b> the evening · <b>in</b> March"], ["?", "What time…? · What day…? · What’s the date…?"]],
    examples: [["I go to the gym <b>at</b> six <b>on</b> Mondays.", "Tôi đi tập lúc sáu giờ mỗi thứ Hai."], ["We relax <b>at</b> the weekend.", "Chúng tôi thư giãn vào cuối tuần."]],
    mistake: ["I swim in Sunday morning.", "I swim on Sunday morning.", "Buổi của một ngày cụ thể (Sunday morning) dùng on."]
  },
  dialogue: { title: "Rủ đi xem phim", lines: [
    ["A", "Are you free on Friday evening?", "Tối thứ Sáu bạn rảnh không?"],
    ["B", "Sorry, I have a yoga class at seven.", "Xin lỗi, mình có lớp yoga lúc bảy giờ."],
    ["A", "What about Saturday? Let's go to the cinema.", "Thế thứ Bảy thì sao? Đi xem phim đi."],
    ["B", "Saturday is good. What time?", "Thứ Bảy được đấy. Mấy giờ?"],
    ["A", "The film starts at half past eight.", "Phim bắt đầu lúc tám rưỡi."],
    ["B", "OK. Let's have dinner first!", "Được. Mình ăn tối trước nhé!"]
  ] },
  drills: {
    fill: [
      ["I swim ___ Sunday mornings.", "on", ["on", "in", "at"], "Buổi của ngày cụ thể: on Sunday mornings.", "Tôi bơi vào sáng Chủ nhật.", "Điền at / on / in"],
      ["We relax ___ the weekend.", "at", ["at", "in", "on"], "Anh–Anh: at the weekend (Anh–Mỹ: on the weekend).", "Chúng tôi thư giãn vào cuối tuần.", "Điền at / on / in"]
    ],
    error: [
      ["The concert starts in eight o'clock.", 3, "at", ["at", "on", "by"], "Giờ chính xác dùng at."]
    ]
  },
  reading: {
    title: "My busy week",
    sentences: [
      ["My name is Hoa, and I work at a bank in Hanoi.", "Tôi tên là Hoa, tôi làm việc ở một ngân hàng tại Hà Nội."],
      ["From Monday to Friday, I work from eight in the morning to five in the afternoon.", "Từ thứ Hai đến thứ Sáu, tôi làm việc từ tám giờ sáng đến năm giờ chiều."],
      ["On Mondays and Wednesdays, I go to the gym after work.", "Thứ Hai và thứ Tư, tôi đi tập gym sau giờ làm."],
      ["I have an English class on Thursday evenings at seven.", "Tôi có lớp tiếng Anh vào tối thứ Năm lúc bảy giờ."],
      ["On Saturday, I usually go to the cinema with my friends.", "Thứ Bảy, tôi thường đi xem phim với bạn bè."],
      ["On Sunday, I sleep late and relax at home. It's my favorite day!", "Chủ nhật, tôi ngủ muộn và thư giãn ở nhà. Đó là ngày tôi thích nhất!"]
    ],
    tf: [["Hoa works at a hospital.", false], ["Hoa goes to the gym on Mondays.", true], ["Hoa has an English class on Tuesday.", false]],
    mc: [["What time does Hoa finish work?", ["At five in the afternoon.", "At eight in the morning.", "At seven in the evening."], 0]],
    qa: [
      ["Where does Hoa work?", "Hoa làm việc ở đâu?", ["bank"], "She works at a bank in Hanoi."],
      ["What does Hoa do on Saturday?", "Hoa làm gì vào thứ Bảy?", ["cinema|movies|film"], "She goes to the cinema with her friends."],
      ["What is Hoa's favorite day?", "Hoa thích ngày nào nhất?", ["Sunday"], "Her favorite day is Sunday."]
    ]
  },
  writing: [
    ["Tôi đi tập gym sau giờ làm.", ["I go to the gym after work."], ["gym", "after work"], ""],
    ["Phim bắt đầu lúc tám giờ rưỡi.", ["The film starts at half past eight.", "The movie starts at half past eight.", "The film starts at eight thirty.", "The movie starts at eight thirty."], ["starts", "half past"], ""],
    ["Chủ nhật tôi thư giãn ở nhà.", ["On Sunday, I relax at home.", "On Sundays, I relax at home.", "I relax at home on Sunday.", "I relax at home on Sundays."], ["relax", "at home"], ""]
  ]
}

);
