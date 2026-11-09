window.CONTENT = window.CONTENT || { lessons: [] };
window.CONTENT.lessons.push(
/* ===== Chặng III · Unit 11 · Quản lý dự án & tiến độ ===== */
{
  id: "s3u11l1", stage: 3, unit: 11, n: 1, unitTitle: "Quản lý dự án & tiến độ",
  title: "Báo cáo tiến độ", titleEn: "Progress reports",
  words: [
    ["progress report", "/ˈprəʊɡres rɪpɔːt/", "danh từ", "báo cáo tiến độ", "I send a progress report every Friday.", "Thứ Sáu nào tôi cũng gửi báo cáo tiến độ."],
    ["status update", "/ˈsteɪtəs ʌpdeɪt/", "danh từ", "cập nhật tình hình", "Can you give me a quick status update?", "Anh cập nhật nhanh tình hình được không?"],
    ["weekly report", "/ˌwiːkli rɪˈpɔːt/", "danh từ", "báo cáo tuần", "The weekly report is attached.", "Báo cáo tuần được gửi kèm."],
    ["so far", "/ˌsəʊ ˈfɑː(r)/", "cụm từ", "cho đến nay", "So far, everything is going well.", "Cho đến nay mọi thứ đều ổn."],
    ["already", "/ɔːlˈredi/", "trạng từ", "đã (rồi)", "We've already finished the kitchen.", "Chúng tôi đã xong bếp rồi."],
    ["yet", "/jet/", "trạng từ", "chưa (phủ định); chưa…? (câu hỏi)", "The tiles haven't arrived yet.", "Gạch vẫn chưa về."],
    ["to date", "/tə ˈdeɪt/", "cụm từ", "tính đến nay", "To date, we've spent 60% of the budget.", "Tính đến nay đã chi 60% ngân sách."],
    ["as of", "/ˈæz əv/", "giới từ", "tính tại thời điểm", "As of today, the work is 70% complete.", "Tính đến hôm nay, công việc xong 70%."],
    ["completed", "/kəmˈpliːtɪd/", "tính từ", "đã hoàn thành", "Completed tasks are marked in green.", "Việc đã hoàn thành được đánh dấu xanh."],
    ["pending", "/ˈpendɪŋ/", "tính từ", "đang chờ (xử lý)", "Two items are still pending.", "Hai hạng mục vẫn đang chờ."]
  ],
  grammar: {
    name: "HTHT để cập nhật tiến độ", nameEn: "Present perfect for updates",
    desc: "have / has + V3 cho việc đã xong đến thời điểm báo cáo (không nói thời điểm cụ thể). already (đã rồi) đứng giữa have và V3. yet (chưa) cuối câu phủ định / câu hỏi. so far / to date: cho đến nay. Có mốc quá khứ cụ thể (yesterday, last week) → quá khứ đơn.",
    formula: [["+", "We<b>’ve already finished</b> the electrical work."], ["−", "The tiles <b>haven’t arrived yet</b>."], ["?", "<b>Have</b> you <b>installed</b> the cabinets <b>yet</b>?"], ["·", "<b>So far</b>, we<b>’ve completed</b> 70% of the work."]],
    examples: [["The painters <b>have just started</b> on the second floor.", "Thợ sơn vừa bắt đầu tầng hai."], ["We <b>finished</b> the ceiling <b>last week</b>. (mốc cụ thể → quá khứ đơn)", "Tuần trước chúng tôi xong trần."]],
    mistake: ["We have finished the ceiling last week.", "We finished the ceiling last week.", "Có mốc quá khứ cụ thể: quá khứ đơn."]
  },
  dialogue: { title: "Sếp hỏi tình hình", lines: [
    ["A", "Can you give me a quick status update?", "Cập nhật nhanh tình hình giúp tôi?"],
    ["B", "Sure. We've already finished the electrical work.", "Vâng. Chúng em đã xong phần điện."],
    ["A", "Have the tiles arrived yet?", "Gạch về chưa?"],
    ["B", "Not yet. They're coming on Thursday.", "Chưa ạ. Thứ Năm sẽ về."],
    ["A", "How much of the work is done so far?", "Đến giờ xong được bao nhiêu?"],
    ["B", "About 70%. Two items are still pending.", "Khoảng 70%. Còn hai hạng mục đang chờ."]
  ] },
  drills: {
    fill: [
      ["The tiles haven't arrived ___.", "yet", ["yet", "already", "still"], "Phủ định HTHT: yet cuối câu.", "Gạch vẫn chưa về.", "Chọn từ đúng"],
      ["We've ___ finished the kitchen.", "already", ["already", "yet", "ago"], "Đã rồi: already (giữa have và V3).", "Chúng tôi đã xong bếp rồi.", "Chọn từ đúng"],
      ["We ___ the ceiling last week.", "finished", ["finished", "have finished", "finish"], "Mốc quá khứ: quá khứ đơn.", "Tuần trước chúng tôi xong trần.", "Chọn dạng đúng"]
    ],
    error: [
      ["We have finished the ceiling last week.", 1, "-", ["-", "had", "are"], "Có last week: quá khứ đơn (bỏ have)."],
      ["Have you installed the cabinets already yet?", 5, "-", ["-", "still", "ever"], "Câu hỏi dùng yet (bỏ already)."]
    ]
  },
  pron: [["already", "/ɔːlˈredi/", "đã rồi"], ["ready", "/ˈredi/", "sẵn sàng"], "already nhấn âm thứ hai: ol-RÉ-đi; ready nhấn âm đầu.", "Trọng âm"],
  writing: [
    ["Gạch vẫn chưa về.", ["The tiles haven't arrived yet.", "The tiles have not arrived yet."], ["haven't arrived", "yet"], ""],
    ["Cho đến nay mọi thứ đều ổn.", ["So far, everything is going well.", "So far everything is going well.", "So far, everything is fine."], ["so far"], ""],
    ["Hai hạng mục vẫn đang chờ.", ["Two items are still pending."], ["pending"], ""]
  ]
},
{
  id: "s3u11l2", stage: 3, unit: 11, n: 2, unitTitle: "Quản lý dự án & tiến độ",
  title: "Trên công trường", titleEn: "On site",
  words: [
    ["site manager", "/ˈsaɪt mænɪdʒə(r)/", "danh từ", "chỉ huy trưởng công trường", "Talk to the site manager first.", "Trao đổi với chỉ huy trưởng trước."],
    ["foreman", "/ˈfɔːmən/", "danh từ", "cai thợ, tổ trưởng", "The foreman checks the work every day.", "Tổ trưởng kiểm tra việc mỗi ngày."],
    ["crew", "/kruː/", "danh từ", "tổ thợ, đội", "The tiling crew starts tomorrow.", "Tổ thợ ốp lát bắt đầu ngày mai."],
    ["site diary", "/ˈsaɪt daɪəri/", "danh từ", "nhật ký công trường", "Write it in the site diary.", "Ghi vào nhật ký công trường."],
    ["site meeting", "/ˈsaɪt miːtɪŋ/", "danh từ", "họp giao ban công trường", "The site meeting is at 7.30.", "Họp giao ban lúc 7 giờ 30."],
    ["scaffolding", "/ˈskæfəldɪŋ/", "danh từ", "giàn giáo", "The scaffolding comes down next week.", "Tuần sau tháo giàn giáo."],
    ["concrete", "/ˈkɒŋkriːt/", "danh từ", "bê tông", "The concrete needs a week to dry.", "Bê tông cần một tuần để khô."],
    ["plaster", "/ˈplɑːstə(r)/", "danh từ", "lớp trát, vữa trát", "The plaster is still wet.", "Lớp trát vẫn còn ướt."],
    ["tiling", "/ˈtaɪlɪŋ/", "danh từ", "việc ốp lát gạch", "Tiling takes about four days.", "Ốp lát mất khoảng bốn ngày."],
    ["wiring", "/ˈwaɪərɪŋ/", "danh từ", "hệ dây điện", "The wiring has been checked.", "Hệ dây điện đã được kiểm tra."]
  ],
  grammar: {
    name: "Đang làm & đã làm", nameEn: "Present continuous vs present perfect on site",
    desc: "Hiện tại tiếp diễn: việc đang diễn ra lúc này / tuần này (The crew is tiling the bathroom). HTHT: việc đã xong, có kết quả (They’ve finished the kitchen). HTHT tiếp diễn: việc kéo dài đến giờ, chưa xong (They’ve been plastering since Monday).",
    formula: [["đang", "The crew <b>is tiling</b> the bathroom now."], ["xong", "They<b>’ve finished</b> the kitchen walls."], ["kéo dài", "They<b>’ve been plastering</b> since Monday."], ["?", "What <b>are</b> they <b>working</b> on today?"]],
    examples: [["The electricians <b>have finished</b> the wiring, so the plasterers <b>are starting</b> today.", "Thợ điện đã xong dây, nên thợ trát bắt đầu hôm nay."], ["We<b>’ve been waiting</b> for the concrete to dry for five days.", "Chúng tôi chờ bê tông khô năm ngày rồi."]],
    mistake: ["The crew tiles the bathroom right now.", "The crew is tiling the bathroom right now.", "Đang diễn ra lúc nói: hiện tại tiếp diễn."]
  },
  dialogue: { title: "Giao ban sáng", lines: [
    ["A", "What's the tiling crew doing today?", "Hôm nay tổ ốp lát làm gì?"],
    ["B", "They're tiling the master bathroom.", "Họ đang ốp phòng tắm chính."],
    ["A", "Have the electricians finished the wiring?", "Thợ điện xong dây chưa?"],
    ["B", "Yes, they finished yesterday.", "Rồi, hôm qua xong."],
    ["A", "And the plaster on the second floor?", "Còn lớp trát tầng hai?"],
    ["B", "It's still wet. I've noted it in the site diary.", "Vẫn còn ướt. Tôi đã ghi vào nhật ký."]
  ] },
  drills: {
    fill: [
      ["The crew ___ tiling the bathroom now.", "is", ["is", "has", "does"], "Đang làm: is + V-ing.", "Tổ thợ đang ốp phòng tắm.", "Chọn từ đúng"],
      ["They've been ___ since Monday.", "plastering", ["plastering", "plastered", "plaster"], "HTHT tiếp diễn: been + V-ing.", "Họ trát từ thứ Hai.", "Chọn dạng đúng"],
      ["The ___ comes down next week.", "scaffolding", ["scaffolding", "concrete", "wiring"], "Giàn giáo: scaffolding.", "Tuần sau tháo giàn giáo.", "Chọn từ đúng"]
    ],
    error: [
      ["The crew tiles the bathroom right now.", 2, "is tiling", ["is tiling", "tiled", "has tile"], "Đang diễn ra: is tiling."],
      ["They have been plaster since Monday.", 3, "plastering", ["plastering", "plastered", "plasters"], "have been + V-ing."]
    ]
  },
  pron: [["crew", "/kruː/", "tổ thợ"], ["screw", "/skruː/", "con vít"], "Cùng vần /ruː/; screw có thêm /s/ ở đầu.", "Cụm phụ âm đầu"],
  writing: [
    ["Ghi vào nhật ký công trường.", ["Write it in the site diary.", "Put it in the site diary.", "Note it in the site diary."], ["site diary"], ""],
    ["Họp giao ban lúc 7 giờ 30.", ["The site meeting is at 7.30.", "The site meeting is at 7:30.", "The site meeting is at half past seven."], ["site meeting"], ""],
    ["Tổ thợ đang ốp phòng tắm.", ["The crew is tiling the bathroom.", "The crew are tiling the bathroom.", "The tiling crew is working on the bathroom."], ["tiling", "bathroom"], ""]
  ]
},
{
  id: "s3u11l3", stage: 3, unit: 11, n: 3, unitTitle: "Quản lý dự án & tiến độ",
  title: "Khi bị chậm tiến độ", titleEn: "When things fall behind",
  words: [
    ["bottleneck", "/ˈbɒtlnek/", "danh từ", "điểm nghẽn", "The main bottleneck is the cabinet delivery.", "Điểm nghẽn chính là giao tủ."],
    ["critical path", "/ˌkrɪtɪkl ˈpɑːθ/", "danh từ", "đường găng (việc quyết định tiến độ)", "Tiling is on the critical path.", "Ốp lát nằm trên đường găng."],
    ["dependency", "/dɪˈpendənsi/", "danh từ", "sự phụ thuộc (giữa các việc)", "Painting has a dependency on plastering.", "Sơn phụ thuộc vào trát."],
    ["resource", "/rɪˈsɔːs/", "danh từ", "nguồn lực", "We need more resources on site.", "Chúng ta cần thêm nguồn lực ở công trường."],
    ["manpower", "/ˈmænpaʊə(r)/", "danh từ", "nhân lực", "We're short of manpower this week.", "Tuần này thiếu nhân lực."],
    ["equipment", "/ɪˈkwɪpmənt/", "danh từ", "thiết bị", "The equipment arrived late.", "Thiết bị về trễ."],
    ["machinery", "/məˈʃiːnəri/", "danh từ", "máy móc", "Heavy machinery isn't allowed after 6 p.m.", "Máy móc nặng không được chạy sau 6 giờ tối."],
    ["still", "/stɪl/", "trạng từ", "vẫn (còn)", "We're still waiting for the glass.", "Chúng tôi vẫn đang chờ kính."],
    ["in progress", "/ɪn ˈprəʊɡres/", "cụm từ", "đang tiến hành", "The painting is in progress.", "Việc sơn đang tiến hành."],
    ["outstanding", "/aʊtˈstændɪŋ/", "tính từ", "còn tồn, chưa xong", "There are three outstanding tasks.", "Còn ba việc chưa xong."]
  ],
  grammar: {
    name: "still / yet / HTHT tiếp diễn", nameEn: "Explaining delays",
    desc: "still: vẫn (đang / chưa), đứng trước động từ chính hoặc sau be: We’re still waiting. / It still hasn’t arrived. yet: chưa (cuối câu phủ định). HTHT tiếp diễn nhấn mạnh thời gian chờ: We’ve been waiting for two weeks. Nguyên nhân: due to / because of + danh từ.",
    formula: [["·", "We<b>’re still waiting</b> for the glass."], ["·", "The glass <b>still hasn’t arrived</b>."], ["·", "We<b>’ve been waiting</b> for two weeks."], ["·", "The delay is <b>due to</b> a shortage of manpower."]],
    examples: [["The cabinets <b>haven’t been delivered yet</b>, so tiling is on hold.", "Tủ vẫn chưa giao, nên việc ốp lát phải tạm dừng."], ["We<b>’re behind</b> by four days <b>because of</b> the rain.", "Chúng tôi chậm bốn ngày vì mưa."]],
    mistake: ["The glass hasn't still arrived.", "The glass still hasn't arrived.", "still đứng trước hasn't."]
  },
  dialogue: { title: "Báo chậm tiến độ", lines: [
    ["A", "Are we still on schedule?", "Mình vẫn đúng tiến độ chứ?"],
    ["B", "I'm afraid we're four days behind.", "E là chúng ta chậm bốn ngày."],
    ["A", "What's the bottleneck?", "Điểm nghẽn là gì?"],
    ["B", "The glass still hasn't arrived.", "Kính vẫn chưa về."],
    ["B", "We've been waiting for two weeks.", "Chúng ta chờ hai tuần rồi."],
    ["A", "Let's add more manpower to catch up.", "Thêm nhân lực để bắt kịp nhé."]
  ] },
  drills: {
    fill: [
      ["We're ___ waiting for the glass.", "still", ["still", "yet", "already"], "Vẫn đang: still.", "Chúng tôi vẫn đang chờ kính.", "Chọn từ đúng"],
      ["We've ___ waiting for two weeks.", "been", ["been", "being", "be"], "HTHT tiếp diễn: have been + V-ing.", "Chúng tôi chờ hai tuần rồi.", "Chọn từ đúng"],
      ["The delay is ___ to a shortage of manpower.", "due", ["due", "because", "since"], "due to + danh từ.", "Chậm do thiếu nhân lực.", "Chọn từ đúng"]
    ],
    error: [
      ["The glass hasn't still arrived.", 3, "-", ["-", "yet", "ever"], "still không đứng sau hasn't; bỏ still (hoặc nói: still hasn't arrived)."],
      ["The delay is because the rain.", 3, "due to", ["due to", "so", "since"], "Trước danh từ: due to / because of."]
    ]
  },
  pron: [["equipment", "/ɪˈkwɪpmənt/", "thiết bị"], ["equivalent", "/ɪˈkwɪvələnt/", "tương đương"], "Cả hai nhấn âm thứ hai /ˈkwɪ/ (i-QUÍP / i-QUÍ-vơ-lần).", "/kw/"],
  writing: [
    ["Chúng tôi vẫn đang chờ kính.", ["We're still waiting for the glass.", "We are still waiting for the glass."], ["still waiting"], ""],
    ["Tuần này thiếu nhân lực.", ["We're short of manpower this week.", "We are short of manpower this week.", "We don't have enough manpower this week."], ["manpower"], ""],
    ["Còn ba việc chưa xong.", ["There are three outstanding tasks.", "Three tasks are still outstanding."], ["outstanding"], ""]
  ]
},
{
  id: "s3u11l4", stage: 3, unit: 11, n: 4, unitTitle: "Quản lý dự án & tiến độ",
  title: "Danh sách lỗi & nghiệm thu", titleEn: "Snag lists and sign-off",
  words: [
    ["snag", "/snæɡ/", "danh từ", "lỗi nhỏ (cần sửa)", "We found a few snags in the kitchen.", "Chúng tôi thấy vài lỗi nhỏ ở bếp."],
    ["snag list", "/ˈsnæɡ lɪst/", "danh từ", "danh sách lỗi cần sửa", "Here's the snag list from the walkthrough.", "Đây là danh sách lỗi sau buổi đi xem."],
    ["punch list", "/ˈpʌntʃ lɪst/", "danh từ", "danh sách việc tồn trước bàn giao", "All items on the punch list are done.", "Mọi hạng mục tồn đã làm xong."],
    ["rework", "/ˈriːwɜːk/", "danh từ", "việc làm lại", "Rework costs time and money.", "Làm lại tốn thời gian và tiền bạc."],
    ["quality check", "/ˈkwɒləti tʃek/", "danh từ", "kiểm tra chất lượng", "Every room gets a quality check.", "Phòng nào cũng được kiểm tra chất lượng."],
    ["sign-off", "/ˈsaɪn ɒf/", "danh từ", "sự ký duyệt", "We need the client's sign-off.", "Cần khách ký duyệt."],
    ["checklist", "/ˈtʃeklɪst/", "danh từ", "bảng kiểm", "Use the checklist for each room.", "Dùng bảng kiểm cho từng phòng."],
    ["partition", "/pɑːˈtɪʃn/", "danh từ", "vách ngăn", "The partition is not straight.", "Vách ngăn bị lệch."],
    ["drywall", "/ˈdraɪwɔːl/", "danh từ", "tường thạch cao", "There's a crack in the drywall.", "Tường thạch cao bị nứt."],
    ["painting", "/ˈpeɪntɪŋ/", "danh từ", "việc sơn", "The painting needs a second coat.", "Lớp sơn cần sơn lớp thứ hai."]
  ],
  grammar: {
    name: "Bị động HTHT", nameEn: "Present perfect passive",
    desc: "has / have been + V3: việc ĐÃ ĐƯỢC làm (không quan trọng ai làm), rất hay dùng khi rà danh sách lỗi. Phủ định: hasn’t been + V3 + yet. Câu hỏi: Has… been + V3 yet?",
    formula: [["+", "The crack <b>has been repaired</b>."], ["−", "The partition <b>hasn’t been fixed yet</b>."], ["?", "<b>Have</b> all the snags <b>been fixed</b>?"], ["·", "Eight items <b>have been completed</b> so far."]],
    examples: [["The second coat of paint <b>has been applied</b>.", "Lớp sơn thứ hai đã được sơn."], ["Nothing <b>has been signed off</b> yet.", "Chưa có gì được ký duyệt."]],
    mistake: ["The crack has repaired.", "The crack has been repaired.", "Bị động HTHT: has been + V3."]
  },
  dialogue: { title: "Rà danh sách lỗi", lines: [
    ["A", "Have all the snags been fixed?", "Mọi lỗi nhỏ đã được sửa hết chưa?"],
    ["B", "Most of them. The crack has been repaired.", "Phần lớn rồi. Vết nứt đã được sửa."],
    ["A", "What about the partition?", "Còn vách ngăn?"],
    ["B", "It hasn't been fixed yet.", "Vẫn chưa được sửa."],
    ["A", "We need the client's sign-off on Friday.", "Thứ Sáu cần khách ký duyệt."],
    ["B", "Don't worry. It'll be done by Thursday.", "Đừng lo. Thứ Năm sẽ xong."]
  ] },
  drills: {
    fill: [
      ["The crack has ___ repaired.", "been", ["been", "be", "being"], "has been + V3.", "Vết nứt đã được sửa.", "Chọn từ đúng"],
      ["The partition hasn't been ___ yet.", "fixed", ["fixed", "fix", "fixing"], "hasn't been + V3.", "Vách ngăn chưa được sửa.", "Chọn dạng đúng"],
      ["We need the client's ___.", "sign-off", ["sign-off", "snag", "rework"], "Ký duyệt: sign-off.", "Cần khách ký duyệt.", "Chọn từ đúng"]
    ],
    error: [
      ["The crack has repaired.", 3, "been repaired.", ["been repaired.", "repairing.", "repairs."], "has been + V3."],
      ["Have all the snags be fixed?", 4, "been", ["been", "being", "are"], "Have… been + V3?"]
    ]
  },
  pron: [["snag", "/snæɡ/", "lỗi nhỏ"], ["snack", "/snæk/", "đồ ăn vặt"], "snag kết thúc /ɡ/ (rung); snack kết thúc /k/ (không rung).", "/ɡ/ và /k/"],
  writing: [
    ["Vết nứt đã được sửa.", ["The crack has been repaired.", "The crack has been fixed."], ["has been"], ""],
    ["Cần khách ký duyệt.", ["We need the client's sign-off.", "We need the client to sign off."], ["sign"], ""],
    ["Dùng bảng kiểm cho từng phòng.", ["Use the checklist for each room.", "Use a checklist for each room.", "Use the checklist for every room."], ["checklist"], ""]
  ]
},
{
  id: "s3u11l5", stage: 3, unit: 11, n: 5, unitTitle: "Quản lý dự án & tiến độ",
  title: "Báo cáo tuần gửi khách", titleEn: "A weekly report to the client",
  words: [
    ["task list", "/ˈtɑːsk lɪst/", "danh từ", "danh sách công việc", "Update the task list every evening.", "Cập nhật danh sách công việc mỗi tối."],
    ["worker", "/ˈwɜːkə(r)/", "danh từ", "công nhân", "There are twelve workers on site.", "Có mười hai công nhân ở công trường."],
    ["percentage complete", "/pəˌsentɪdʒ kəmˈpliːt/", "cụm từ", "tỉ lệ hoàn thành", "The percentage complete is 75%.", "Tỉ lệ hoàn thành là 75%."],
    ["ahead of schedule", "/əˌhed əv ˈʃedjuːl/", "cụm từ", "vượt tiến độ", "The kitchen is two days ahead of schedule.", "Bếp vượt tiến độ hai ngày."],
    ["plumbing", "/ˈplʌmɪŋ/", "danh từ", "hệ thống ống nước", "The plumbing has been tested.", "Hệ thống nước đã được thử."],
    ["first fix", "/ˌfɜːst ˈfɪks/", "danh từ", "giai đoạn thi công ngầm (điện nước trước khi trát)", "First fix electrics are done.", "Đã xong phần điện ngầm."],
    ["second fix", "/ˌsekənd ˈfɪks/", "danh từ", "giai đoạn lắp hoàn thiện (ổ cắm, thiết bị)", "Second fix starts after painting.", "Lắp hoàn thiện bắt đầu sau khi sơn."],
    ["finishing", "/ˈfɪnɪʃɪŋ/", "danh từ", "công tác hoàn thiện", "Finishing takes the most care.", "Hoàn thiện cần cẩn thận nhất."],
    ["formwork", "/ˈfɔːmwɜːk/", "danh từ", "cốp pha", "The formwork was removed yesterday.", "Hôm qua đã tháo cốp pha."],
    ["cure", "/kjʊə(r)/", "động từ", "bảo dưỡng (bê tông cho đủ cứng)", "Concrete needs time to cure.", "Bê tông cần thời gian bảo dưỡng."]
  ],
  grammar: {
    name: "Ôn tập Unit 11", nameEn: "Review: project updates",
    desc: "HTHT (already / yet / so far): việc đã xong đến nay · Quá khứ đơn: có mốc cụ thể · Hiện tại tiếp diễn: đang làm · HTHT tiếp diễn: chờ / làm kéo dài · Bị động HTHT: has been fixed · still / due to · ahead of / behind schedule.",
    formula: [["·", "This week we <b>have completed</b> the first fix plumbing."], ["·", "The tiling crew <b>is currently working</b> on the bathrooms."], ["·", "The cabinets <b>still haven’t been delivered</b>."], ["·", "Overall, we<b>’re</b> one day <b>ahead of schedule</b>."]],
    examples: [["The formwork <b>was removed</b> on Tuesday, and the concrete <b>is curing</b>.", "Cốp pha được tháo hôm thứ Ba và bê tông đang được bảo dưỡng."], ["<b>So far</b>, no major snags <b>have been found</b>.", "Cho đến nay chưa phát hiện lỗi lớn nào."]],
    mistake: ["The formwork has been removed on Tuesday.", "The formwork was removed on Tuesday.", "Có mốc cụ thể (on Tuesday): quá khứ đơn bị động."]
  },
  dialogue: { title: "Gọi điện báo khách", lines: [
    ["A", "Good news, Mr Khoa. We're ahead of schedule.", "Tin vui anh Khoa. Chúng tôi đang vượt tiến độ."],
    ["B", "Great! What has been done this week?", "Tuyệt! Tuần này đã làm được gì?"],
    ["A", "The first fix plumbing has been completed.", "Đã xong phần nước ngầm."],
    ["B", "And the kitchen cabinets?", "Còn tủ bếp?"],
    ["A", "They're arriving on Monday.", "Thứ Hai sẽ về."],
    ["B", "Perfect. Please send me the weekly report.", "Tốt. Gửi tôi báo cáo tuần nhé."]
  ] },
  drills: {
    fill: [
      ["The formwork ___ removed on Tuesday.", "was", ["was", "has been", "is"], "Mốc cụ thể: quá khứ đơn bị động.", "Cốp pha được tháo hôm thứ Ba.", "Chọn từ đúng"],
      ["Concrete needs time to ___.", "cure", ["cure", "finish", "fix"], "Bảo dưỡng bê tông: cure.", "Bê tông cần thời gian bảo dưỡng.", "Chọn từ đúng"]
    ],
    error: [
      ["The formwork were removed on Tuesday.", 2, "was", ["was", "is", "had"], "Chủ ngữ số ít: was removed."]
    ]
  },
  reading: {
    title: "Weekly report – Week 6, Townhouse District 3",
    sentences: [
      ["Dear Mr Khoa, here is our weekly report for Week 6. As of Friday, the project is 65% complete and one day ahead of schedule.", "Kính gửi anh Khoa, đây là báo cáo tuần 6. Tính đến thứ Sáu, dự án hoàn thành 65% và vượt tiến độ một ngày."],
      ["This week, the first fix plumbing and electrics have been completed and tested on all three floors.", "Tuần này, phần điện nước ngầm đã hoàn thành và được thử ở cả ba tầng."],
      ["The plasterers have been working on the second floor since Tuesday, and the tiling crew is currently working on the bathrooms.", "Thợ trát làm tầng hai từ thứ Ba, và tổ ốp lát hiện đang làm các phòng tắm."],
      ["Unfortunately, the kitchen cabinets still haven't been delivered; the supplier says they will arrive on Monday.", "Tiếc là tủ bếp vẫn chưa được giao; nhà cung cấp nói thứ Hai sẽ về."],
      ["So far, no major snags have been found, and twelve workers are on site every day.", "Cho đến nay chưa phát hiện lỗi lớn, và mỗi ngày có mười hai công nhân ở công trường."],
      ["Next week, we will start painting, and second fix work will begin once the painting is finished.", "Tuần sau chúng tôi bắt đầu sơn, và phần lắp hoàn thiện sẽ bắt đầu khi sơn xong."]
    ],
    tf: [["The project is behind schedule.", false], ["The first fix plumbing has been completed.", true], ["The kitchen cabinets have arrived.", false]],
    mc: [["What is the tiling crew doing now?", ["Working on the kitchen", "Working on the bathrooms", "Painting the second floor"], 1]],
    qa: [
      ["How much of the project is complete?", "Dự án hoàn thành bao nhiêu?", ["65"], "65%."],
      ["When will the cabinets arrive?", "Khi nào tủ về?", ["monday"], "On Monday."],
      ["What will start next week?", "Tuần sau bắt đầu việc gì?", ["painting|paint"], "Painting."]
    ]
  },
  writing: [
    ["Bếp vượt tiến độ hai ngày.", ["The kitchen is two days ahead of schedule."], ["ahead of schedule"], ""],
    ["Có mười hai công nhân ở công trường.", ["There are twelve workers on site.", "There are 12 workers on site.", "Twelve workers are on site."], ["workers", "on site"], ""],
    ["Bê tông cần thời gian bảo dưỡng.", ["Concrete needs time to cure.", "The concrete needs time to cure."], ["cure"], ""]
  ]
}
,
/* ===== Chặng III · Unit 12 · Sự cố & khiếu nại ===== */
{
  id: "s3u12l1", stage: 3, unit: 12, n: 1, unitTitle: "Sự cố & khiếu nại",
  title: "Tiếp nhận khiếu nại", titleEn: "Handling a complaint",
  words: [
    ["unacceptable", "/ˌʌnəkˈseptəbl/", "tính từ", "không thể chấp nhận", "This delay is unacceptable.", "Sự chậm trễ này không thể chấp nhận."],
    ["frustrating", "/frʌˈstreɪtɪŋ/", "tính từ", "gây bực bội", "I understand how frustrating this is.", "Tôi hiểu việc này khó chịu thế nào."],
    ["sincere", "/sɪnˈsɪə(r)/", "tính từ", "chân thành", "Please accept our sincere apologies.", "Xin nhận lời xin lỗi chân thành của chúng tôi."],
    ["look into", "/ˌlʊk ˈɪntuː/", "cụm động từ", "xem xét, tìm hiểu", "I'll look into it right away.", "Tôi sẽ xem xét ngay."],
    ["investigate", "/ɪnˈvestɪɡeɪt/", "động từ", "điều tra, kiểm tra kỹ", "We'll investigate the cause.", "Chúng tôi sẽ kiểm tra kỹ nguyên nhân."],
    ["explanation", "/ˌekspləˈneɪʃn/", "danh từ", "lời giải thích", "I owe you an explanation.", "Tôi nợ anh một lời giải thích."],
    ["understandable", "/ˌʌndəˈstændəbl/", "tính từ", "dễ hiểu, có thể thông cảm", "Your reaction is completely understandable.", "Phản ứng của anh hoàn toàn dễ hiểu."],
    ["empathise", "/ˈempəθaɪz/", "động từ", "đồng cảm", "Always empathise with the client first.", "Luôn đồng cảm với khách trước."],
    ["satisfaction", "/ˌsætɪsˈfækʃn/", "danh từ", "sự hài lòng", "Your satisfaction is our priority.", "Sự hài lòng của anh là ưu tiên của chúng tôi."],
    ["follow-up call", "/ˈfɒləʊ ʌp kɔːl/", "danh từ", "cuộc gọi hỏi lại sau", "I'll give you a follow-up call tomorrow.", "Mai tôi sẽ gọi lại hỏi thăm anh."]
  ],
  grammar: {
    name: "Đáp lại khiếu nại", nameEn: "Responding to complaints",
    desc: "4 bước: (1) Đồng cảm: I’m sorry to hear that. / I understand how frustrating this must be. (2) Hỏi rõ: Could you tell me exactly what happened? (3) Nhận xử lý: I’ll look into it right away. (4) Hẹn: I’ll call you back by… must be dùng để đoán cảm xúc người khác.",
    formula: [["1", "<b>I’m sorry to hear that.</b>"], ["1", "<b>I understand how frustrating this must be.</b>"], ["2", "<b>Could you tell me exactly what happened?</b>"], ["3", "<b>I’ll look into it</b> and call you back <b>by</b> 3 p.m."]],
    examples: [["<b>Thank you for letting us know.</b> We take this very seriously.", "Cảm ơn anh đã báo. Chúng tôi rất coi trọng việc này."], ["<b>That must be</b> very inconvenient for your family.", "Chắc hẳn rất bất tiện cho gia đình anh."]],
    mistake: ["I'm sorry to hear about that it happened.", "I'm sorry to hear that.", "I'm sorry to hear that / I'm sorry to hear about + danh từ."]
  },
  dialogue: { title: "Khách gọi phàn nàn", lines: [
    ["A", "The kitchen cabinet door has fallen off!", "Cửa tủ bếp bị rơi ra rồi!"],
    ["B", "I'm so sorry to hear that.", "Tôi rất tiếc khi nghe vậy."],
    ["B", "Could you tell me exactly what happened?", "Anh kể rõ chuyện gì xảy ra được không?"],
    ["A", "It just fell when my wife opened it.", "Vợ tôi vừa mở là nó rơi."],
    ["B", "I understand how frustrating this must be.", "Tôi hiểu việc này khó chịu thế nào."],
    ["B", "I'll look into it and call you back by three.", "Tôi sẽ xem xét và gọi lại anh trước ba giờ."]
  ] },
  drills: {
    fill: [
      ["I'm sorry to ___ that.", "hear", ["hear", "listen", "know"], "I'm sorry to hear that.", "Tôi rất tiếc khi nghe vậy.", "Chọn từ đúng"],
      ["I'll look ___ it right away.", "into", ["into", "at", "for"], "look into: xem xét.", "Tôi sẽ xem xét ngay.", "Chọn từ đúng"],
      ["I understand how frustrating this ___ be.", "must", ["must", "should", "can't"], "Đoán cảm xúc: must be.", "Tôi hiểu việc này hẳn khó chịu thế nào.", "Chọn từ đúng"]
    ],
    error: [
      ["I'm sorry to listen that.", 3, "hear", ["hear", "say", "know"], "I'm sorry to hear that."],
      ["I'll look at into it right away.", 2, "-", ["-", "for", "up"], "look into (bỏ at)."]
    ]
  },
  pron: [["sincere", "/sɪnˈsɪə(r)/", "chân thành"], ["since", "/sɪns/", "từ khi"], "sincere nhấn âm sau, kết thúc /ɪə/; since chỉ một âm tiết.", "Âm tiết"],
  writing: [
    ["Tôi rất tiếc khi nghe vậy.", ["I'm sorry to hear that.", "I am sorry to hear that.", "I'm so sorry to hear that."], ["sorry to hear"], ""],
    ["Tôi sẽ xem xét ngay.", ["I'll look into it right away.", "I will look into it right away.", "I'll look into it immediately."], ["look into"], ""],
    ["Xin nhận lời xin lỗi chân thành của chúng tôi.", ["Please accept our sincere apologies.", "Please accept our sincere apology."], ["sincere apolog"], ""]
  ]
},
{
  id: "s3u12l2", stage: 3, unit: 12, n: 2, unitTitle: "Sự cố & khiếu nại",
  title: "Mô tả lỗi", titleEn: "Describing defects",
  words: [
    ["stain", "/steɪn/", "danh từ", "vết ố, vết bẩn", "There's a stain on the ceiling.", "Có vết ố trên trần."],
    ["mould", "/məʊld/", "danh từ", "nấm mốc", "Mould is growing in the bathroom.", "Nấm mốc đang mọc trong phòng tắm."],
    ["damp", "/dæmp/", "tính từ", "ẩm ướt", "The wall feels damp.", "Bức tường bị ẩm."],
    ["uneven", "/ʌnˈiːvn/", "tính từ", "không phẳng, lồi lõm", "The floor is uneven.", "Sàn không phẳng."],
    ["warped", "/wɔːpt/", "tính từ", "bị cong vênh", "The wooden door is warped.", "Cửa gỗ bị cong vênh."],
    ["peeling", "/ˈpiːlɪŋ/", "tính từ", "bị bong tróc", "The paint is peeling.", "Sơn bị bong tróc."],
    ["misaligned", "/ˌmɪsəˈlaɪnd/", "tính từ", "bị lệch", "The cabinet doors are misaligned.", "Cửa tủ bị lệch."],
    ["hairline crack", "/ˌheəlaɪn ˈkræk/", "danh từ", "vết nứt chân chim", "There's a hairline crack near the window.", "Có vết nứt chân chim gần cửa sổ."],
    ["seepage", "/ˈsiːpɪdʒ/", "danh từ", "sự thấm nước", "We found water seepage under the sink.", "Có thấm nước dưới bồn rửa."],
    ["water damage", "/ˈwɔːtə dæmɪdʒ/", "danh từ", "hư hại do nước", "The water damage is quite serious.", "Hư hại do nước khá nghiêm trọng."]
  ],
  grammar: {
    name: "Kể lại sự cố", nameEn: "Past continuous + past simple; present perfect for results",
    desc: "Quá khứ tiếp diễn (đang…) + quá khứ đơn (thì…): I was cooking when the door fell off. HTHT cho tình trạng mới xuất hiện đến giờ: A stain has appeared on the ceiling. / The paint has started to peel.",
    formula: [["·", "I <b>was cooking</b> when the door <b>fell</b> off."], ["·", "Water <b>was leaking</b> while we <b>were sleeping</b>."], ["·", "A stain <b>has appeared</b> on the ceiling."], ["·", "The paint <b>has started</b> to peel."]],
    examples: [["When we <b>came</b> back from holiday, mould <b>had</b> already <b>grown</b> on the wall.", "Khi đi nghỉ về, mốc đã mọc trên tường."], ["Since last week, the floor <b>has become</b> uneven.", "Từ tuần trước, sàn bắt đầu không phẳng."]],
    mistake: ["I cooked when the door was falling off.", "I was cooking when the door fell off.", "Việc đang diễn ra: quá khứ tiếp diễn; việc chen vào: quá khứ đơn."]
  },
  dialogue: { title: "Khách mô tả sự cố", lines: [
    ["A", "There's a big stain on the bedroom ceiling.", "Trần phòng ngủ có vết ố lớn."],
    ["B", "When did you first notice it?", "Anh thấy lần đầu khi nào?"],
    ["A", "Last night. It was raining heavily.", "Tối qua. Trời mưa to."],
    ["B", "Is the wall damp too?", "Tường có bị ẩm không?"],
    ["A", "Yes, and the paint has started to peel.", "Có, và sơn bắt đầu bong."],
    ["B", "It sounds like water seepage. We'll come today.", "Có vẻ là thấm nước. Hôm nay chúng tôi tới."]
  ] },
  drills: {
    fill: [
      ["I was cooking when the door ___ off.", "fell", ["fell", "was falling", "falls"], "Việc chen vào: quá khứ đơn.", "Tôi đang nấu thì cửa rơi ra.", "Chọn dạng đúng"],
      ["A stain has ___ on the ceiling.", "appeared", ["appeared", "appear", "appearing"], "HTHT: has + V3.", "Một vết ố đã xuất hiện trên trần.", "Chọn dạng đúng"],
      ["The paint is ___.", "peeling", ["peeling", "warped", "uneven"], "Bong tróc: peeling.", "Sơn bị bong tróc.", "Chọn từ đúng"]
    ],
    error: [
      ["I was cook when the door fell off.", 2, "cooking", ["cooking", "cooked", "cooks"], "Quá khứ tiếp diễn: was + V-ing."],
      ["A stain has appear on the ceiling.", 3, "appeared", ["appeared", "appearing", "appears"], "HTHT: has + V3."]
    ]
  },
  pron: [["mould", "/məʊld/", "nấm mốc"], ["mild", "/maɪld/", "nhẹ"], "mould có /əʊ/ như “âu”; mild có /aɪ/ như “ai”.", "/əʊ/ và /aɪ/"],
  writing: [
    ["Có vết ố trên trần.", ["There's a stain on the ceiling.", "There is a stain on the ceiling."], ["stain", "ceiling"], ""],
    ["Cửa gỗ bị cong vênh.", ["The wooden door is warped.", "The wood door is warped."], ["warped"], ""],
    ["Tôi đang nấu thì cửa rơi ra.", ["I was cooking when the door fell off.", "I was cooking when the door came off."], ["was cooking", "fell"], ""]
  ]
},
{
  id: "s3u12l3", stage: 3, unit: 12, n: 3, unitTitle: "Sự cố & khiếu nại",
  title: "Giải thích nguyên nhân", titleEn: "Explaining the cause",
  words: [
    ["root cause", "/ˌruːt ˈkɔːz/", "danh từ", "nguyên nhân gốc", "We found the root cause of the leak.", "Chúng tôi đã tìm ra nguyên nhân gốc của chỗ rò."],
    ["reason", "/ˈriːzn/", "danh từ", "lý do", "The reason for the delay was the rain.", "Lý do chậm là trời mưa."],
    ["error", "/ˈerə(r)/", "danh từ", "sai sót", "There was an error in the measurements.", "Có sai sót trong số đo."],
    ["oversight", "/ˈəʊvəsaɪt/", "danh từ", "sơ suất", "It was an oversight on our part.", "Đó là sơ suất của chúng tôi."],
    ["miscommunication", "/ˌmɪskəmjuːnɪˈkeɪʃn/", "danh từ", "sự hiểu sai, truyền đạt sai", "There was a miscommunication with the supplier.", "Có hiểu sai với nhà cung cấp."],
    ["humidity", "/hjuːˈmɪdəti/", "danh từ", "độ ẩm", "High humidity causes mould.", "Độ ẩm cao gây nấm mốc."],
    ["shrinkage", "/ˈʃrɪŋkɪdʒ/", "danh từ", "sự co ngót", "The crack is caused by shrinkage.", "Vết nứt do co ngót."],
    ["grout", "/ɡraʊt/", "danh từ", "keo chà ron", "The grout between the tiles has cracked.", "Ron giữa các viên gạch bị nứt."],
    ["sealant", "/ˈsiːlənt/", "danh từ", "chất trám kín", "The sealant around the shower was missing.", "Thiếu chất trám quanh khu tắm."],
    ["workmanship", "/ˈwɜːkmənʃɪp/", "danh từ", "tay nghề thi công", "We guarantee our workmanship.", "Chúng tôi bảo đảm tay nghề thi công."]
  ],
  grammar: {
    name: "Quá khứ hoàn thành để giải thích", nameEn: "Past perfect for causes",
    desc: "had + V3: việc xảy ra TRƯỚC một việc khác trong quá khứ, dùng để giải thích nguyên nhân: The wall cracked because the plaster hadn’t dried. Bị động: had (not) been + V3: The shower hadn’t been sealed properly. Nhận lỗi: It was an oversight on our part.",
    formula: [["·", "The wall cracked because the plaster <b>hadn’t dried</b>."], ["·", "The shower <b>hadn’t been sealed</b> properly."], ["·", "The supplier <b>had sent</b> the wrong tiles."], ["·", "<b>It was an oversight on our part.</b>"]],
    examples: [["We found that the worker <b>had forgotten</b> to apply the sealant.", "Chúng tôi phát hiện thợ đã quên trám keo."], ["The leak happened because the pipe <b>had been damaged</b> during installation.", "Rò rỉ xảy ra vì ống đã bị hỏng trong lúc lắp."]],
    mistake: ["The shower hadn't sealed properly.", "The shower hadn't been sealed properly.", "Bị động QKHT: hadn't been + V3."]
  },
  dialogue: { title: "Báo nguyên nhân cho khách", lines: [
    ["A", "Have you found the cause of the leak?", "Đã tìm ra nguyên nhân rò chưa?"],
    ["B", "Yes. The shower hadn't been sealed properly.", "Rồi. Khu tắm đã không được trám kín đúng cách."],
    ["A", "How did that happen?", "Sao lại thế?"],
    ["B", "Honestly, it was an oversight on our part.", "Thành thật mà nói, đó là sơ suất của chúng tôi."],
    ["A", "And the mould?", "Còn nấm mốc?"],
    ["B", "It's from the high humidity and the leak.", "Do độ ẩm cao và chỗ rò."]
  ] },
  drills: {
    fill: [
      ["The wall cracked because the plaster ___ dried.", "hadn't", ["hadn't", "didn't", "isn't"], "Việc trước việc khác: QKHT.", "Tường nứt vì lớp trát chưa khô.", "Chọn từ đúng"],
      ["The shower hadn't ___ sealed properly.", "been", ["been", "be", "being"], "hadn't been + V3.", "Khu tắm đã không được trám kín.", "Chọn từ đúng"],
      ["It was an ___ on our part.", "oversight", ["oversight", "humidity", "grout"], "Sơ suất: oversight.", "Đó là sơ suất của chúng tôi.", "Chọn từ đúng"]
    ],
    error: [
      ["The shower hadn't sealed properly.", 2, "hadn't been", ["hadn't been", "didn't", "isn't"], "Bị động QKHT: hadn't been sealed."],
      ["The supplier had send the wrong tiles.", 3, "sent", ["sent", "sending", "sends"], "QKHT: had + V3."]
    ]
  },
  pron: [["grout", "/ɡraʊt/", "keo chà ron"], ["great", "/ɡreɪt/", "tuyệt vời"], "grout có /aʊ/ như “ao”; great có /eɪ/ như “ây”.", "/aʊ/ và /eɪ/"],
  writing: [
    ["Đó là sơ suất của chúng tôi.", ["It was an oversight on our part.", "That was an oversight on our part."], ["oversight"], ""],
    ["Độ ẩm cao gây nấm mốc.", ["High humidity causes mould.", "High humidity causes mold."], ["humidity"], ""],
    ["Chúng tôi bảo đảm tay nghề thi công.", ["We guarantee our workmanship.", "We guarantee the workmanship."], ["workmanship"], ""]
  ]
},
{
  id: "s3u12l4", stage: 3, unit: 12, n: 4, unitTitle: "Sự cố & khiếu nại",
  title: "Khắc phục & cam kết", titleEn: "Fixing it and promising",
  words: [
    ["remedy", "/ˈremədi/", "danh từ", "biện pháp khắc phục", "What's the best remedy for this?", "Cách khắc phục tốt nhất là gì?"],
    ["rectify", "/ˈrektɪfaɪ/", "động từ", "sửa chữa, khắc phục (trang trọng)", "We'll rectify the problem this week.", "Chúng tôi sẽ khắc phục trong tuần."],
    ["put right", "/ˌpʊt ˈraɪt/", "cụm động từ", "sửa cho đúng", "We'll put it right at no cost.", "Chúng tôi sẽ sửa lại miễn phí."],
    ["touch up", "/ˌtʌtʃ ˈʌp/", "cụm động từ", "dặm lại (sơn)", "The painter will touch up the wall.", "Thợ sơn sẽ dặm lại tường."],
    ["temporary fix", "/ˌtemprəri ˈfɪks/", "danh từ", "cách sửa tạm", "This is only a temporary fix.", "Đây chỉ là cách sửa tạm."],
    ["permanent fix", "/ˌpɜːmənənt ˈfɪks/", "danh từ", "cách sửa triệt để", "We'll do a permanent fix next week.", "Tuần sau chúng tôi sửa triệt để."],
    ["assure", "/əˈʃʊə(r)/", "động từ", "cam đoan (với ai)", "I can assure you it won't happen again.", "Tôi cam đoan sẽ không tái diễn."],
    ["ensure", "/ɪnˈʃʊə(r)/", "động từ", "đảm bảo (việc gì)", "We'll ensure the shower is fully sealed.", "Chúng tôi sẽ đảm bảo khu tắm được trám kín."],
    ["prevent", "/prɪˈvent/", "động từ", "ngăn ngừa", "This will prevent mould from coming back.", "Việc này sẽ ngăn nấm mốc quay lại."],
    ["as a matter of urgency", "/əz ə ˌmætər əv ˈɜːdʒənsi/", "cụm từ", "một cách khẩn cấp", "We'll deal with it as a matter of urgency.", "Chúng tôi sẽ xử lý khẩn cấp."]
  ],
  grammar: {
    name: "Cam kết khắc phục", nameEn: "Promises: will / I'll make sure / to prevent",
    desc: "Hứa: We’ll + V / I’ll make sure (that) + mệnh đề hiện tại đơn / We’ll ensure (that)… · Cam đoan với người: I can assure you (that)… (assure + người) · Ngăn ngừa: to prevent sth from + V-ing / so that it doesn’t happen again.",
    formula: [["·", "We<b>’ll rectify</b> the problem by Friday."], ["·", "<b>I’ll make sure</b> the painter <b>comes</b> tomorrow."], ["·", "<b>I can assure you</b> it won’t happen again."], ["·", "This will <b>prevent</b> water <b>from getting</b> in."]],
    examples: [["We’ll replace the sealant <b>so that</b> it <b>doesn’t</b> leak again.", "Chúng tôi sẽ thay keo trám để không bị rò nữa."], ["<b>We’ll ensure that</b> every room is checked before handover.", "Chúng tôi sẽ đảm bảo mọi phòng được kiểm tra trước bàn giao."]],
    mistake: ["I'll make sure the painter will come tomorrow.", "I'll make sure the painter comes tomorrow.", "Sau make sure: hiện tại đơn (không dùng will)."]
  },
  dialogue: { title: "Đề xuất cách sửa", lines: [
    ["A", "So what will you do?", "Vậy bên anh sẽ làm gì?"],
    ["B", "Today we'll do a temporary fix.", "Hôm nay chúng tôi sửa tạm."],
    ["B", "Next week we'll replace the sealant completely.", "Tuần sau thay toàn bộ keo trám."],
    ["A", "And the stain on the ceiling?", "Còn vết ố trên trần?"],
    ["B", "The painter will touch it up once it's dry.", "Khi khô thợ sơn sẽ dặm lại."],
    ["B", "I can assure you it won't happen again.", "Tôi cam đoan sẽ không tái diễn."]
  ] },
  drills: {
    fill: [
      ["I'll make sure the painter ___ tomorrow.", "comes", ["comes", "will come", "coming"], "Sau make sure: hiện tại đơn.", "Tôi sẽ đảm bảo mai thợ sơn đến.", "Chọn dạng đúng"],
      ["This will prevent water ___ getting in.", "from", ["from", "to", "of"], "prevent sth from + V-ing.", "Việc này sẽ ngăn nước lọt vào.", "Chọn từ đúng"],
      ["I can ___ you it won't happen again.", "assure", ["assure", "ensure", "insure"], "assure + người.", "Tôi cam đoan với anh sẽ không tái diễn.", "Chọn từ đúng"]
    ],
    error: [
      ["I'll make sure the painter come tomorrow.", 5, "comes", ["comes", "coming", "to come"], "Sau make sure: hiện tại đơn; chủ ngữ số ít → comes."],
      ["This will prevent water from get in.", 5, "getting", ["getting", "got", "gets"], "prevent sth from + V-ing."]
    ]
  },
  pron: [["assure", "/əˈʃʊə(r)/", "cam đoan"], ["ensure", "/ɪnˈʃʊə(r)/", "đảm bảo"], "Cùng vần /ˈʃʊə/; assure bắt đầu /ə/, ensure bắt đầu /ɪn/.", "assure và ensure"],
  writing: [
    ["Chúng tôi sẽ sửa lại miễn phí.", ["We'll put it right at no cost.", "We will put it right at no cost.", "We'll put it right free of charge."], ["put it right"], ""],
    ["Đây chỉ là cách sửa tạm.", ["This is only a temporary fix.", "This is just a temporary fix.", "It's only a temporary fix."], ["temporary fix"], ""],
    ["Tôi cam đoan sẽ không tái diễn.", ["I can assure you it won't happen again.", "I assure you it won't happen again.", "I can assure you that it won't happen again."], ["assure", "happen again"], ""]
  ]
},
{
  id: "s3u12l5", stage: 3, unit: 12, n: 5, unitTitle: "Sự cố & khiếu nại",
  title: "Thư xin lỗi khách hàng", titleEn: "A letter of apology",
  words: [
    ["take responsibility", "/ˌteɪk rɪˌspɒnsəˈbɪləti/", "cụm động từ", "nhận trách nhiệm", "We take full responsibility for the mistake.", "Chúng tôi nhận hoàn toàn trách nhiệm."],
    ["accountable", "/əˈkaʊntəbl/", "tính từ", "chịu trách nhiệm giải trình", "Each team leader is accountable for quality.", "Mỗi trưởng nhóm chịu trách nhiệm về chất lượng."],
    ["on our part", "/ɒn ˈaʊə pɑːt/", "cụm từ", "về phía chúng tôi", "It was a mistake on our part.", "Đó là lỗi về phía chúng tôi."],
    ["make up for", "/ˌmeɪk ˈʌp fə(r)/", "cụm động từ", "bù đắp cho", "How can we make up for this?", "Chúng tôi có thể bù đắp thế nào?"],
    ["compensate", "/ˈkɒmpenseɪt/", "động từ", "bồi thường", "We'll compensate you for the damage.", "Chúng tôi sẽ bồi thường thiệt hại cho anh."],
    ["goodwill gesture", "/ˌɡʊdwɪl ˈdʒestʃə(r)/", "danh từ", "cử chỉ thiện chí", "As a goodwill gesture, we'll clean the whole flat.", "Để thể hiện thiện chí, chúng tôi sẽ vệ sinh cả căn hộ."],
    ["aftercare", "/ˈɑːftəkeə(r)/", "danh từ", "dịch vụ hậu mãi", "Our aftercare service lasts two years.", "Dịch vụ hậu mãi kéo dài hai năm."],
    ["callback", "/ˈkɔːlbæk/", "danh từ", "lần quay lại sửa (bảo hành)", "We had three callbacks this month.", "Tháng này có ba lần quay lại sửa."],
    ["defective", "/dɪˈfektɪv/", "tính từ", "bị lỗi (sản phẩm)", "The hinges were defective.", "Bản lề bị lỗi."],
    ["substandard", "/ˌsʌbˈstændəd/", "tính từ", "dưới tiêu chuẩn", "Substandard work will be redone.", "Phần làm dưới tiêu chuẩn sẽ được làm lại."]
  ],
  grammar: {
    name: "Ôn tập Unit 12", nameEn: "Review: complaints",
    desc: "Đồng cảm: I’m sorry to hear that / must be frustrating · Kể sự cố: was + V-ing… when + quá khứ đơn · Nguyên nhân: had (not) been + V3 / due to · Nhận lỗi: We take full responsibility / It was an oversight on our part · Hứa: We’ll… / I’ll make sure… / to prevent… from + V-ing.",
    formula: [["·", "<b>Please accept our sincere apologies for</b> the inconvenience."], ["·", "The hinges <b>had been installed</b> incorrectly."], ["·", "<b>We take full responsibility</b> for this."], ["·", "<b>To make up for</b> it, we<b>’ll</b> extend your warranty."]],
    examples: [["<b>We have already replaced</b> the defective hinges.", "Chúng tôi đã thay các bản lề bị lỗi."], ["<b>I will personally make sure</b> that this <b>does not</b> happen again.", "Tôi sẽ đích thân đảm bảo việc này không tái diễn."]],
    mistake: ["Please accept our sincere apologies of the inconvenience.", "Please accept our sincere apologies for the inconvenience.", "apologies for + danh từ."]
  },
  dialogue: { title: "Quản lý gọi xin lỗi", lines: [
    ["A", "Mr Khoa, I'm calling to apologise personally.", "Anh Khoa, tôi gọi để đích thân xin lỗi."],
    ["B", "Thank you. It was really stressful.", "Cảm ơn. Thật sự rất căng thẳng."],
    ["A", "We take full responsibility for it.", "Chúng tôi nhận hoàn toàn trách nhiệm."],
    ["A", "The hinges were defective. We've replaced them.", "Bản lề bị lỗi. Chúng tôi đã thay."],
    ["A", "As a goodwill gesture, we'll extend your warranty.", "Để thể hiện thiện chí, chúng tôi gia hạn bảo hành."],
    ["B", "I appreciate that. Thank you.", "Tôi rất cảm kích. Cảm ơn anh."]
  ] },
  drills: {
    fill: [
      ["Please accept our sincere apologies ___ the inconvenience.", "for", ["for", "of", "about"], "apologies for.", "Xin nhận lời xin lỗi vì sự bất tiện.", "Chọn từ đúng"],
      ["We take full ___ for the mistake.", "responsibility", ["responsibility", "responsible", "accountable"], "take responsibility.", "Chúng tôi nhận hoàn toàn trách nhiệm.", "Chọn dạng đúng"]
    ],
    error: [
      ["How can we make up of this?", 5, "for", ["for", "to", "with"], "make up for."]
    ]
  },
  reading: {
    title: "Letter of apology – Apartment 12A",
    sentences: [
      ["Dear Mr and Mrs Khoa, please accept our sincere apologies for the problems in your kitchen and bathroom last week.", "Kính gửi anh chị Khoa, xin nhận lời xin lỗi chân thành về các sự cố ở bếp và phòng tắm tuần trước."],
      ["After investigating, we found that the cabinet hinges were defective and that the shower had not been sealed properly.", "Sau khi kiểm tra, chúng tôi phát hiện bản lề tủ bị lỗi và khu tắm đã không được trám kín đúng cách."],
      ["This was an oversight on our part, and we take full responsibility for it.", "Đây là sơ suất về phía chúng tôi, và chúng tôi nhận hoàn toàn trách nhiệm."],
      ["We have already replaced all the hinges, and next Tuesday we will reseal the shower and touch up the stained ceiling.", "Chúng tôi đã thay toàn bộ bản lề, và thứ Ba tới sẽ trám lại khu tắm và dặm lại trần bị ố."],
      ["As a goodwill gesture, we will extend your warranty by one year and clean the whole apartment free of charge.", "Để thể hiện thiện chí, chúng tôi gia hạn bảo hành thêm một năm và vệ sinh toàn bộ căn hộ miễn phí."],
      ["I will personally make sure that every item is checked, and I will give you a follow-up call next Friday.", "Tôi sẽ đích thân đảm bảo mọi hạng mục được kiểm tra, và sẽ gọi lại hỏi thăm anh chị vào thứ Sáu tới."]
    ],
    tf: [["The hinges were defective.", true], ["The company blamed the client.", false], ["The warranty will be extended by one year.", true]],
    mc: [["What will happen next Tuesday?", ["The hinges will be replaced", "The shower will be resealed and the ceiling touched up", "The apartment will be handed over"], 1]],
    qa: [
      ["What was wrong with the shower?", "Khu tắm bị vấn đề gì?", ["sealed|seal"], "It had not been sealed properly."],
      ["What goodwill gesture does the company offer?", "Công ty đưa ra cử chỉ thiện chí gì?", ["warranty|clean"], "A one-year warranty extension and free cleaning."],
      ["When is the follow-up call?", "Cuộc gọi hỏi thăm khi nào?", ["friday"], "Next Friday."]
    ]
  },
  writing: [
    ["Chúng tôi nhận hoàn toàn trách nhiệm.", ["We take full responsibility.", "We take full responsibility for it.", "We take full responsibility for this."], ["full responsibility"], ""],
    ["Chúng tôi sẽ bồi thường thiệt hại cho anh.", ["We'll compensate you for the damage.", "We will compensate you for the damage."], ["compensate"], ""],
    ["Bản lề bị lỗi.", ["The hinges were defective.", "The hinges are defective."], ["defective"], ""]
  ]
}
,
/* ===== Chặng III · Unit 13 · Làm việc nhóm & giao việc ===== */
{
  id: "s3u13l1", stage: 3, unit: 13, n: 1, unitTitle: "Làm việc nhóm & giao việc",
  title: "Giao việc cho nhóm", titleEn: "Delegating tasks",
  words: [
    ["delegate", "/ˈdelɪɡeɪt/", "động từ", "giao bớt việc, uỷ quyền", "A good leader knows how to delegate.", "Người lãnh đạo giỏi biết giao bớt việc."],
    ["allocate", "/ˈæləkeɪt/", "động từ", "phân bổ", "I'll allocate two people to the kitchen.", "Tôi sẽ phân hai người cho phần bếp."],
    ["assignment", "/əˈsaɪnmənt/", "danh từ", "nhiệm vụ được giao", "Your first assignment is the floor plan.", "Nhiệm vụ đầu tiên của bạn là mặt bằng."],
    ["instruction", "/ɪnˈstrʌkʃn/", "danh từ", "chỉ dẫn", "Please follow the instructions carefully.", "Vui lòng làm đúng chỉ dẫn."],
    ["guidance", "/ˈɡaɪdns/", "danh từ", "sự hướng dẫn", "Ask Lan if you need guidance.", "Cần hướng dẫn thì hỏi Lan."],
    ["team member", "/ˈtiːm membə(r)/", "danh từ", "thành viên nhóm", "Every team member has a clear role.", "Mỗi thành viên có vai trò rõ ràng."],
    ["intern", "/ˈɪntɜːn/", "danh từ", "thực tập sinh", "The intern is helping with the drawings.", "Thực tập sinh đang phụ vẽ."],
    ["trainee", "/ˌtreɪˈniː/", "danh từ", "nhân viên tập sự", "We have two new trainees this month.", "Tháng này có hai nhân viên tập sự mới."],
    ["draughtsman", "/ˈdrɑːftsmən/", "danh từ", "hoạ viên, người vẽ kỹ thuật", "The draughtsman updated the drawings.", "Hoạ viên đã cập nhật bản vẽ."],
    ["quantity surveyor", "/ˌkwɒntəti səˈveɪə(r)/", "danh từ", "kỹ sư dự toán, bóc khối lượng", "The quantity surveyor checked the costs.", "Kỹ sư dự toán đã kiểm tra chi phí."]
  ],
  grammar: {
    name: "Thể sai khiến chủ động", nameEn: "have sb do / get sb to do",
    desc: "have + người + V nguyên mẫu: giao / bảo ai làm (thường là việc của họ): I’ll have Minh check the drawings. get + người + to V: nhờ / thuyết phục ai làm: I’ll get Lan to call the client. ask + người + to V: nhờ lịch sự.",
    formula: [["·", "I’ll <b>have Minh check</b> the drawings."], ["·", "Can you <b>get Lan to call</b> the client?"], ["·", "I<b>’ll ask</b> the intern <b>to print</b> the plans."], ["✗", "have Minh to check · get Lan call"]],
    examples: [["The manager <b>had the draughtsman redraw</b> the kitchen.", "Quản lý bảo hoạ viên vẽ lại bếp."], ["I finally <b>got the supplier to deliver</b> on Monday.", "Cuối cùng tôi cũng nhờ được nhà cung cấp giao vào thứ Hai."]],
    mistake: ["I'll have Minh to check the drawings.", "I'll have Minh check the drawings.", "have sb + V nguyên mẫu (không to)."]
  },
  dialogue: { title: "Phân việc đầu tuần", lines: [
    ["A", "We have a lot to do this week.", "Tuần này nhiều việc lắm."],
    ["A", "I'll have Minh finish the floor plan.", "Tôi sẽ để Minh hoàn thành mặt bằng."],
    ["B", "And the cost estimate?", "Còn dự toán chi phí?"],
    ["A", "I'll get the quantity surveyor to check it.", "Tôi sẽ nhờ kỹ sư dự toán kiểm tra."],
    ["B", "What should the intern do?", "Thực tập sinh làm gì?"],
    ["A", "He can help Lan with the mood boards.", "Cậu ấy phụ Lan làm bảng ảnh cảm hứng."]
  ] },
  drills: {
    fill: [
      ["I'll have Minh ___ the drawings.", "check", ["check", "to check", "checking"], "have sb + V.", "Tôi sẽ để Minh kiểm tra bản vẽ.", "Chọn dạng đúng"],
      ["Can you get Lan ___ the client?", "to call", ["to call", "call", "calling"], "get sb + to V.", "Bạn nhờ Lan gọi khách được không?", "Chọn dạng đúng"],
      ["A good leader knows how to ___.", "delegate", ["delegate", "allocate", "instruction"], "Giao bớt việc: delegate.", "Người lãnh đạo giỏi biết giao bớt việc.", "Chọn từ đúng"]
    ],
    error: [
      ["I'll have Minh to check the drawings.", 3, "-", ["-", "for", "will"], "have sb + V (bỏ to)."],
      ["Can you get Lan call the client?", 4, "to call", ["to call", "calling", "called"], "get sb + to V."]
    ]
  },
  pron: [["intern", "/ˈɪntɜːn/", "thực tập sinh"], ["internal", "/ɪnˈtɜːnl/", "nội bộ"], "intern nhấn âm đầu (IN-tơn); internal nhấn âm thứ hai (in-TƠ-nồ).", "Trọng âm"],
  writing: [
    ["Tôi sẽ để Minh kiểm tra bản vẽ.", ["I'll have Minh check the drawings.", "I will have Minh check the drawings.", "I'll get Minh to check the drawings."], ["minh", "check the drawings"], ""],
    ["Cần hướng dẫn thì hỏi Lan.", ["Ask Lan if you need guidance.", "If you need guidance, ask Lan."], ["guidance"], ""],
    ["Vui lòng làm đúng chỉ dẫn.", ["Please follow the instructions carefully.", "Please follow the instructions."], ["follow the instructions"], ""]
  ]
},
{
  id: "s3u13l2", stage: 3, unit: 13, n: 2, unitTitle: "Làm việc nhóm & giao việc",
  title: "Thuê ngoài & bàn giao việc", titleEn: "Getting things done",
  words: [
    ["3D render", "/ˌθriː diː ˈrendə(r)/", "danh từ", "ảnh phối cảnh 3D", "The client loved the 3D render.", "Khách rất thích ảnh phối cảnh 3D."],
    ["renderer", "/ˈrendərə(r)/", "danh từ", "người dựng phối cảnh", "Our renderer works from home.", "Người dựng phối cảnh của chúng tôi làm ở nhà."],
    ["site engineer", "/ˈsaɪt endʒɪnɪə(r)/", "danh từ", "kỹ sư công trường", "The site engineer checked the beams.", "Kỹ sư công trường đã kiểm tra dầm."],
    ["line manager", "/ˈlaɪn mænɪdʒə(r)/", "danh từ", "quản lý trực tiếp", "Ask your line manager for approval.", "Xin quản lý trực tiếp phê duyệt."],
    ["department head", "/dɪˈpɑːtmənt hed/", "danh từ", "trưởng phòng", "The department head signed the request.", "Trưởng phòng đã ký đề xuất."],
    ["hand over", "/ˌhænd ˈəʊvə(r)/", "cụm động từ", "bàn giao (việc)", "Please hand over your tasks before your leave.", "Vui lòng bàn giao việc trước khi nghỉ phép."],
    ["take over", "/ˌteɪk ˈəʊvə(r)/", "cụm động từ", "tiếp quản", "Lan will take over the project.", "Lan sẽ tiếp quản dự án."],
    ["cover for", "/ˈkʌvə fə(r)/", "cụm động từ", "làm thay (ai)", "Can you cover for me tomorrow?", "Mai bạn làm thay mình được không?"],
    ["step in", "/ˌstep ˈɪn/", "cụm động từ", "vào cuộc giúp", "The manager stepped in to help.", "Quản lý đã vào cuộc giúp."],
    ["help out", "/ˌhelp ˈaʊt/", "cụm động từ", "phụ giúp", "Can you help out on site this week?", "Tuần này bạn phụ ở công trường được không?"]
  ],
  grammar: {
    name: "Thể sai khiến bị động", nameEn: "have sth done / get sth done",
    desc: "have / get + vật + V3: nhờ / thuê người khác làm gì (không nói ai làm). We had the drawings printed. / I need to get the render done by Friday. Khác với: We printed the drawings (tự mình làm).",
    formula: [["·", "We <b>had the drawings printed</b> yesterday."], ["·", "I need to <b>get the render done</b> by Friday."], ["·", "The client <b>is having the kitchen redesigned</b>."], ["?", "Where did you <b>get the samples made</b>?"]],
    examples: [["We <b>had the 3D render made</b> by a freelancer.", "Chúng tôi thuê người làm tự do dựng phối cảnh 3D."], ["You should <b>get the wiring checked</b> before painting.", "Nên cho kiểm tra hệ dây điện trước khi sơn."]],
    mistake: ["We had printed the drawings by a shop.", "We had the drawings printed by a shop.", "have + vật + V3."]
  },
  dialogue: { title: "Trước kỳ nghỉ phép", lines: [
    ["A", "I'm on leave next week.", "Tuần sau tôi nghỉ phép."],
    ["B", "Who will take over the Sun Tower project?", "Ai tiếp quản dự án Sun Tower?"],
    ["A", "Lan can cover for me. I'll hand over today.", "Lan làm thay tôi. Hôm nay tôi bàn giao."],
    ["B", "Is the 3D render ready?", "Phối cảnh 3D xong chưa?"],
    ["A", "Not yet. I'll get it done by Friday.", "Chưa. Tôi sẽ cho làm xong trước thứ Sáu."],
    ["B", "Good. Let me know if I can help out.", "Tốt. Cần gì mình phụ thì báo nhé."]
  ] },
  drills: {
    fill: [
      ["We had the drawings ___ yesterday.", "printed", ["printed", "print", "printing"], "have sth + V3.", "Hôm qua chúng tôi cho in bản vẽ.", "Chọn dạng đúng"],
      ["I need to get the render ___ by Friday.", "done", ["done", "do", "to do"], "get sth + V3.", "Tôi cần cho làm xong phối cảnh trước thứ Sáu.", "Chọn dạng đúng"],
      ["Lan will take ___ the project.", "over", ["over", "up", "in"], "take over: tiếp quản.", "Lan sẽ tiếp quản dự án.", "Chọn từ đúng"]
    ],
    error: [
      ["We had the drawings print yesterday.", 4, "printed", ["printed", "printing", "prints"], "have sth + V3."],
      ["You should get the wiring check before painting.", 5, "checked", ["checked", "checking", "checks"], "get sth + V3."]
    ]
  },
  pron: [["render", "/ˈrendə(r)/", "dựng hình"], ["reminder", "/rɪˈmaɪndə(r)/", "lời nhắc"], "render nhấn âm đầu (REN-đơ); reminder nhấn âm giữa (ri-MAI-đơ).", "Trọng âm"],
  writing: [
    ["Hôm qua chúng tôi cho in bản vẽ.", ["We had the drawings printed yesterday.", "We got the drawings printed yesterday."], ["drawings printed"], ""],
    ["Mai bạn làm thay mình được không?", ["Can you cover for me tomorrow?", "Could you cover for me tomorrow?"], ["cover for me"], ""],
    ["Lan sẽ tiếp quản dự án.", ["Lan will take over the project.", "Lan is going to take over the project."], ["take over"], ""]
  ]
},
{
  id: "s3u13l3", stage: 3, unit: 13, n: 3, unitTitle: "Làm việc nhóm & giao việc",
  title: "Phối hợp trong nhóm", titleEn: "Working together",
  words: [
    ["collaborate", "/kəˈlæbəreɪt/", "động từ", "cộng tác", "Designers and engineers collaborate closely.", "Thiết kế và kỹ sư cộng tác chặt chẽ."],
    ["collaboration", "/kəˌlæbəˈreɪʃn/", "danh từ", "sự cộng tác", "Thanks for the great collaboration.", "Cảm ơn sự cộng tác tuyệt vời."],
    ["cooperate", "/kəʊˈɒpəreɪt/", "động từ", "hợp tác, phối hợp", "Please cooperate with the site team.", "Vui lòng phối hợp với đội công trường."],
    ["team player", "/ˌtiːm ˈpleɪə(r)/", "danh từ", "người có tinh thần đồng đội", "She's a real team player.", "Cô ấy rất có tinh thần đồng đội."],
    ["team spirit", "/ˌtiːm ˈspɪrɪt/", "danh từ", "tinh thần tập thể", "Team spirit is high this month.", "Tinh thần tập thể tháng này rất cao."],
    ["communication", "/kəˌmjuːnɪˈkeɪʃn/", "danh từ", "sự giao tiếp, trao đổi", "Good communication saves time.", "Trao đổi tốt tiết kiệm thời gian."],
    ["stand-up meeting", "/ˈstænd ʌp miːtɪŋ/", "danh từ", "họp đứng ngắn đầu ngày", "We have a ten-minute stand-up meeting.", "Chúng tôi họp đứng mười phút."],
    ["huddle", "/ˈhʌdl/", "danh từ", "cuộc chụm đầu bàn nhanh", "Let's have a quick huddle.", "Chụm lại bàn nhanh nhé."],
    ["co-worker", "/ˈkəʊ wɜːkə(r)/", "danh từ", "người cùng làm", "My co-workers are very helpful.", "Đồng sự của tôi rất nhiệt tình."],
    ["divide", "/dɪˈvaɪd/", "động từ", "chia", "Let's divide the work into three parts.", "Chia việc làm ba phần nhé."]
  ],
  grammar: {
    name: "make / let / help + người + V", nameEn: "make, let, help",
    desc: "make + người + V (bắt ai làm): The deadline made us work late. let + người + V (cho phép): The boss let us leave early. help + người + (to) V (giúp): Lan helped me (to) finish the plan. Sau make / let KHÔNG dùng to.",
    formula: [["·", "The deadline <b>made us work</b> late."], ["·", "Our manager <b>let us leave</b> early on Friday."], ["·", "Lan <b>helped me finish</b> the plan."], ["✗", "made us to work · let us to leave"]],
    examples: [["The stand-up meeting <b>helps everyone stay</b> on the same page.", "Buổi họp đứng giúp mọi người nắm cùng thông tin."], ["Please <b>let me know</b> if you need anything.", "Cần gì cứ cho tôi biết."]],
    mistake: ["The deadline made us to work late.", "The deadline made us work late.", "make sb + V (không to)."]
  },
  dialogue: { title: "Họp đứng đầu ngày", lines: [
    ["A", "Morning, everyone. Quick stand-up meeting.", "Chào buổi sáng. Họp đứng nhanh nhé."],
    ["A", "Let's divide today's work.", "Chia việc hôm nay nào."],
    ["B", "I can help Hoa finish the bathroom drawings.", "Tôi có thể giúp Hoa xong bản vẽ phòng tắm."],
    ["C", "Thanks. That'll let me visit the site.", "Cảm ơn. Vậy tôi sẽ đi công trường được."],
    ["A", "Great teamwork. Please keep communication clear.", "Phối hợp tốt. Nhớ trao đổi rõ ràng nhé."],
    ["B", "Sure. We'll post updates in the group chat.", "Vâng. Sẽ cập nhật lên nhóm chat."]
  ] },
  drills: {
    fill: [
      ["The deadline made us ___ late.", "work", ["work", "to work", "working"], "make sb + V.", "Hạn chót bắt chúng tôi làm khuya.", "Chọn dạng đúng"],
      ["Our manager let us ___ early.", "leave", ["leave", "to leave", "leaving"], "let sb + V.", "Quản lý cho chúng tôi về sớm.", "Chọn dạng đúng"],
      ["She's a real team ___.", "player", ["player", "spirit", "huddle"], "team player.", "Cô ấy rất có tinh thần đồng đội.", "Chọn từ đúng"]
    ],
    error: [
      ["The deadline made us to work late.", 4, "-", ["-", "for", "and"], "make sb + V (bỏ to)."],
      ["Please let me knowing if you need anything.", 3, "know", ["know", "to know", "known"], "let sb + V nguyên mẫu."]
    ]
  },
  pron: [["cooperate", "/kəʊˈɒpəreɪt/", "phối hợp"], ["corporate", "/ˈkɔːpərət/", "thuộc doanh nghiệp"], "cooperate có hai âm /əʊ-ɒ/ tách nhau, nhấn âm hai; corporate nhấn âm đầu /ˈkɔː/.", "Dễ nhầm"],
  writing: [
    ["Hạn chót bắt chúng tôi làm khuya.", ["The deadline made us work late."], ["made us work"], ""],
    ["Cần gì cứ cho tôi biết.", ["Let me know if you need anything.", "Please let me know if you need anything."], ["let me know"], ""],
    ["Chia việc làm ba phần nhé.", ["Let's divide the work into three parts.", "Let's split the work into three parts."], ["three parts"], ""]
  ]
},
{
  id: "s3u13l4", stage: 3, unit: 13, n: 4, unitTitle: "Làm việc nhóm & giao việc",
  title: "Động viên & góp ý", titleEn: "Motivating and giving feedback",
  words: [
    ["motivate", "/ˈməʊtɪveɪt/", "động từ", "tạo động lực", "Good leaders motivate their teams.", "Lãnh đạo giỏi tạo động lực cho đội."],
    ["motivated", "/ˈməʊtɪveɪtɪd/", "tính từ", "có động lực", "The new trainees are very motivated.", "Các bạn tập sự mới rất có động lực."],
    ["recognition", "/ˌrekəɡˈnɪʃn/", "danh từ", "sự ghi nhận", "Hard work deserves recognition.", "Làm việc chăm chỉ xứng đáng được ghi nhận."],
    ["credit", "/ˈkredɪt/", "danh từ", "công lao", "Minh deserves the credit for this design.", "Công lao thiết kế này thuộc về Minh."],
    ["well done", "/ˌwel ˈdʌn/", "cụm từ", "làm tốt lắm", "Well done on the presentation!", "Thuyết trình tốt lắm!"],
    ["constructive", "/kənˈstrʌktɪv/", "tính từ", "mang tính xây dựng", "Thanks for the constructive comments.", "Cảm ơn những góp ý mang tính xây dựng."],
    ["appraisal", "/əˈpreɪzl/", "danh từ", "buổi đánh giá năng lực", "My annual appraisal is next week.", "Tuần sau tôi đánh giá năng lực năm."],
    ["KPI", "/ˌkeɪ piː ˈaɪ/", "viết tắt", "chỉ số hiệu suất", "Our KPI is client satisfaction.", "Chỉ số hiệu suất của chúng tôi là sự hài lòng của khách."],
    ["morale", "/məˈrɑːl/", "danh từ", "tinh thần (làm việc)", "Morale is low after the long project.", "Tinh thần đi xuống sau dự án dài."],
    ["tension", "/ˈtenʃn/", "danh từ", "căng thẳng (giữa người)", "There's some tension between the teams.", "Có chút căng thẳng giữa các đội."]
  ],
  grammar: {
    name: "Khen & góp ý khéo", nameEn: "Praise and constructive feedback",
    desc: "Khen cụ thể: Well done on + danh từ / You did a great job with… Góp ý nhẹ: It might be better if you + quá khứ đơn… / Have you thought about + V-ing? / Next time, could you…? Mong muốn: I’d like you to + V.",
    formula: [["+", "<b>Well done on</b> the presentation!"], ["~", "<b>It might be better if you added</b> more photos."], ["~", "<b>Have you thought about using</b> lighter colours?"], ["·", "<b>I’d like you to lead</b> the next client meeting."]],
    examples: [["You <b>did a great job with</b> the client yesterday.", "Hôm qua em làm việc với khách rất tốt."], ["<b>Next time, could you</b> send the drawings a day earlier?", "Lần sau em gửi bản vẽ sớm một ngày được không?"]],
    mistake: ["I'd like you lead the next meeting.", "I'd like you to lead the next meeting.", "would like sb + to V."]
  },
  dialogue: { title: "Buổi đánh giá năng lực", lines: [
    ["A", "Well done on the Sun Tower project.", "Dự án Sun Tower làm tốt lắm."],
    ["B", "Thank you. The whole team helped.", "Cảm ơn anh. Cả đội đã giúp."],
    ["A", "You deserve a lot of the credit.", "Em xứng đáng được ghi công nhiều."],
    ["A", "One thing: it might be better if you delegated more.", "Một điều: có lẽ em nên giao bớt việc hơn."],
    ["B", "That's fair. I try to do everything myself.", "Hợp lý. Em hay tự làm hết."],
    ["A", "I'd like you to lead the next project.", "Anh muốn em dẫn dắt dự án tới."]
  ] },
  drills: {
    fill: [
      ["Well done ___ the presentation!", "on", ["on", "for", "at"], "Well done on + danh từ.", "Thuyết trình tốt lắm!", "Chọn từ đúng"],
      ["It might be better if you ___ more photos.", "added", ["added", "add", "will add"], "It might be better if + quá khứ đơn.", "Có lẽ nên thêm ảnh thì tốt hơn.", "Chọn dạng đúng"],
      ["I'd like you ___ the next meeting.", "to lead", ["to lead", "lead", "leading"], "would like sb + to V.", "Tôi muốn bạn dẫn dắt cuộc họp tới.", "Chọn dạng đúng"]
    ],
    error: [
      ["I'd like you lead the next meeting.", 3, "to lead", ["to lead", "leading", "led"], "would like sb + to V."],
      ["Have you thought about use lighter colours?", 4, "using", ["using", "to use", "used"], "think about + V-ing."]
    ]
  },
  pron: [["morale", "/məˈrɑːl/", "tinh thần"], ["moral", "/ˈmɒrəl/", "đạo đức"], "morale nhấn âm sau (mơ-RAL); moral nhấn âm đầu (MO-rồ).", "Trọng âm"],
  writing: [
    ["Thuyết trình tốt lắm!", ["Well done on the presentation!", "Well done on your presentation!", "Great job on the presentation!"], ["presentation"], ""],
    ["Cảm ơn những góp ý mang tính xây dựng.", ["Thanks for the constructive comments.", "Thank you for the constructive comments.", "Thanks for the constructive feedback."], ["constructive"], ""],
    ["Tôi muốn bạn dẫn dắt dự án tới.", ["I'd like you to lead the next project.", "I would like you to lead the next project."], ["like you to lead"], ""]
  ]
},
{
  id: "s3u13l5", stage: 3, unit: 13, n: 5, unitTitle: "Làm việc nhóm & giao việc",
  title: "Một nhóm làm việc hiệu quả", titleEn: "An effective team",
  words: [
    ["initiative", "/ɪˈnɪʃətɪv/", "danh từ", "sự chủ động, sáng kiến", "She showed great initiative.", "Cô ấy rất chủ động."],
    ["proactive", "/ˌprəʊˈæktɪv/", "tính từ", "chủ động (đi trước)", "Be proactive: tell clients about delays early.", "Hãy chủ động: báo khách về chậm trễ sớm."],
    ["dependable", "/dɪˈpendəbl/", "tính từ", "có thể trông cậy", "Minh is our most dependable engineer.", "Minh là kỹ sư đáng trông cậy nhất."],
    ["follow through", "/ˌfɒləʊ ˈθruː/", "cụm động từ", "làm đến nơi đến chốn", "Always follow through on your promises.", "Luôn làm đến nơi những gì đã hứa."],
    ["one-to-one", "/ˌwʌn tə ˈwʌn/", "danh từ", "buổi gặp riêng một–một", "I have a one-to-one with my manager.", "Tôi có buổi gặp riêng với quản lý."],
    ["self-starter", "/ˌself ˈstɑːtə(r)/", "danh từ", "người tự giác", "We're looking for a self-starter.", "Chúng tôi tìm người tự giác."],
    ["workflow", "/ˈwɜːkfləʊ/", "danh từ", "quy trình làm việc", "The new workflow saves us hours.", "Quy trình mới tiết kiệm nhiều giờ."],
    ["shared drive", "/ˌʃeəd ˈdraɪv/", "danh từ", "ổ dữ liệu dùng chung", "Save the drawings on the shared drive.", "Lưu bản vẽ lên ổ dùng chung."],
    ["task board", "/ˈtɑːsk bɔːd/", "danh từ", "bảng theo dõi công việc", "Move the card on the task board when you finish.", "Xong thì chuyển thẻ trên bảng công việc."],
    ["on the same page", "/ɒn ðə ˌseɪm ˈpeɪdʒ/", "cụm từ", "cùng hiểu, thống nhất", "Let's make sure we're on the same page.", "Hãy chắc rằng chúng ta hiểu giống nhau."]
  ],
  grammar: {
    name: "Ôn tập Unit 13", nameEn: "Review: teamwork language",
    desc: "Sai khiến chủ động: have sb do / get sb to do / ask sb to do · Sai khiến bị động: have / get sth done · make / let / help sb do · Khen & góp ý: Well done on… / It might be better if… / I’d like you to…",
    formula: [["·", "The manager <b>had each designer present</b> one idea."], ["·", "We <b>got the renders done</b> in two days."], ["·", "The task board <b>lets everyone see</b> who is doing what."], ["·", "<b>I’d like everyone to save</b> files on the shared drive."]],
    examples: [["Weekly one-to-ones <b>help people feel</b> heard.", "Gặp riêng hằng tuần giúp mọi người thấy được lắng nghe."], ["She <b>got the supplier to send</b> samples the same day.", "Cô ấy nhờ được nhà cung cấp gửi mẫu ngay trong ngày."]],
    mistake: ["The task board lets everyone to see the tasks.", "The task board lets everyone see the tasks.", "let sb + V (không to)."]
  },
  dialogue: { title: "Trưởng nhóm mới", lines: [
    ["A", "How's your first month as team leader?", "Tháng đầu làm trưởng nhóm thế nào?"],
    ["B", "Busy, but the team is great.", "Bận, nhưng đội rất tốt."],
    ["A", "What changes have you made?", "Bạn đã thay đổi những gì?"],
    ["B", "We use a task board and a shared drive now.", "Giờ dùng bảng công việc và ổ dùng chung."],
    ["B", "And I have a one-to-one with everyone weekly.", "Và gặp riêng từng người mỗi tuần."],
    ["A", "Smart. It keeps everyone on the same page.", "Hay đấy. Giúp mọi người hiểu giống nhau."]
  ] },
  drills: {
    fill: [
      ["The task board lets everyone ___ the tasks.", "see", ["see", "to see", "seeing"], "let sb + V.", "Bảng công việc cho mọi người thấy các việc.", "Chọn dạng đúng"],
      ["We got the renders ___ in two days.", "done", ["done", "do", "doing"], "get sth + V3.", "Chúng tôi cho làm xong phối cảnh trong hai ngày.", "Chọn dạng đúng"]
    ],
    error: [
      ["The task board lets everyone to see the tasks.", 5, "-", ["-", "can", "for"], "let sb + V (bỏ to)."]
    ]
  },
  reading: {
    title: "What makes a great design team?",
    sentences: [
      ["At Nova Interiors, the design team has grown from three to twelve people in two years, and the workflow has had to change.", "Ở Nova Interiors, đội thiết kế tăng từ ba lên mười hai người trong hai năm, và quy trình phải thay đổi."],
      ["Every morning, the team has a ten-minute stand-up meeting so that everyone is on the same page.", "Mỗi sáng đội họp đứng mười phút để mọi người nắm cùng thông tin."],
      ["Tasks are shown on a task board, and all drawings and renders are saved on a shared drive.", "Công việc được hiển thị trên bảng, và mọi bản vẽ, phối cảnh đều lưu trên ổ dùng chung."],
      ["Team leaders have junior designers prepare mood boards, while senior designers meet clients and get the 3D renders done by a freelance renderer.", "Trưởng nhóm để thiết kế viên mới chuẩn bị bảng cảm hứng, còn thiết kế viên chính gặp khách và thuê người làm tự do dựng phối cảnh 3D."],
      ["Each person has a monthly one-to-one with their line manager, where they get praise and constructive feedback.", "Mỗi người có buổi gặp riêng hằng tháng với quản lý trực tiếp, nhận lời khen và góp ý xây dựng."],
      ["The manager says the most important quality is not talent but being dependable: people who show initiative and always follow through.", "Quản lý nói phẩm chất quan trọng nhất không phải tài năng mà là sự đáng tin cậy: người chủ động và luôn làm đến nơi đến chốn."]
    ],
    tf: [["The design team now has twelve people.", true], ["The team meets for one hour every morning.", false], ["The 3D renders are made by a freelance renderer.", true]],
    mc: [["According to the manager, what is the most important quality?", ["Talent", "Being dependable", "Speaking English"], 1]],
    qa: [
      ["How long is the stand-up meeting?", "Họp đứng kéo dài bao lâu?", ["ten|10"], "Ten minutes."],
      ["Where are the drawings saved?", "Bản vẽ được lưu ở đâu?", ["shared drive|drive"], "On a shared drive."],
      ["What do junior designers prepare?", "Thiết kế viên mới chuẩn bị gì?", ["mood board"], "Mood boards."]
    ]
  },
  writing: [
    ["Lưu bản vẽ lên ổ dùng chung.", ["Save the drawings on the shared drive.", "Save the drawings to the shared drive."], ["shared drive"], ""],
    ["Cô ấy rất chủ động.", ["She showed great initiative.", "She shows great initiative.", "She is very proactive."], ["initiative"], ""],
    ["Hãy chắc rằng chúng ta hiểu giống nhau.", ["Let's make sure we're on the same page.", "Let's make sure we are on the same page."], ["same page"], ""]
  ]
}
,
/* ===== Chặng III · Unit 14 · Thiết kế & vật liệu ===== */
{
  id: "s3u14l1", stage: 3, unit: 14, n: 1, unitTitle: "Thiết kế & vật liệu",
  title: "Gỗ và ván", titleEn: "Wood and boards",
  words: [
    ["oak", "/əʊk/", "danh từ", "gỗ sồi", "The floor is made of oak.", "Sàn làm bằng gỗ sồi."],
    ["walnut", "/ˈwɔːlnʌt/", "danh từ", "gỗ óc chó", "Walnut gives a warm, dark look.", "Gỗ óc chó cho vẻ ấm và sẫm màu."],
    ["teak", "/tiːk/", "danh từ", "gỗ tếch", "Teak is great for bathrooms.", "Gỗ tếch rất hợp phòng tắm."],
    ["plywood", "/ˈplaɪwʊd/", "danh từ", "gỗ dán", "The cabinet body is plywood.", "Thùng tủ làm bằng gỗ dán."],
    ["MDF", "/ˌem diː ˈef/", "viết tắt", "ván ép sợi MDF", "MDF is cheaper than solid wood.", "Ván MDF rẻ hơn gỗ tự nhiên."],
    ["veneer", "/vəˈnɪə(r)/", "danh từ", "lớp gỗ lạng (dán mặt)", "It's MDF with an oak veneer.", "Đó là MDF dán gỗ sồi lạng."],
    ["laminate", "/ˈlæmɪnət/", "danh từ", "tấm phủ laminate", "Laminate is easy to clean.", "Laminate dễ lau chùi."],
    ["melamine", "/ˈmeləmiːn/", "danh từ", "bề mặt melamine", "The shelves are white melamine.", "Kệ phủ melamine trắng."],
    ["grain", "/ɡreɪn/", "danh từ", "vân gỗ", "I love the grain of this wood.", "Tôi thích vân của loại gỗ này."],
    ["solid", "/ˈsɒlɪd/", "tính từ", "đặc, nguyên khối", "The table is solid walnut.", "Bàn bằng gỗ óc chó nguyên khối."]
  ],
  grammar: {
    name: "made of / made from / made with", nameEn: "Talking about materials",
    desc: "made of + vật liệu vẫn nhận ra được (The table is made of oak). made from + nguyên liệu đã biến đổi (Paper is made from wood; MDF is made from wood fibres). made with + một thành phần trong nhiều thứ. Danh từ chỉ vật liệu có thể đứng trước danh từ như tính từ: an oak table, a plywood cabinet.",
    formula: [["·", "The table is <b>made of</b> solid oak."], ["·", "MDF is <b>made from</b> wood fibres."], ["·", "The cabinet is <b>made of</b> plywood <b>with</b> a walnut veneer."], ["·", "<b>an oak floor</b> / <b>a teak bench</b>"]],
    examples: [["The doors are <b>made of</b> MDF and painted white.", "Cánh cửa làm bằng MDF sơn trắng."], ["What <b>is</b> this countertop <b>made of</b>?", "Mặt bàn này làm bằng gì?"]],
    mistake: ["The table is made by oak.", "The table is made of oak.", "Chất liệu: made of (made by + người làm)."]
  },
  dialogue: { title: "Khách hỏi về gỗ", lines: [
    ["A", "What's the wardrobe made of?", "Tủ quần áo làm bằng gì?"],
    ["B", "Plywood with an oak veneer.", "Gỗ dán phủ gỗ sồi lạng."],
    ["A", "Why not solid oak?", "Sao không dùng sồi nguyên khối?"],
    ["B", "Solid wood can warp in humid weather.", "Gỗ nguyên khối dễ cong khi trời ẩm."],
    ["A", "And the dining table?", "Còn bàn ăn?"],
    ["B", "That's solid walnut. Look at the grain.", "Cái đó là óc chó nguyên khối. Anh xem vân gỗ."]
  ] },
  drills: {
    fill: [
      ["The table is made ___ solid oak.", "of", ["of", "by", "with"], "Chất liệu: made of.", "Bàn làm bằng gỗ sồi nguyên khối.", "Chọn từ đúng"],
      ["MDF is made ___ wood fibres.", "from", ["from", "of", "by"], "Nguyên liệu biến đổi: made from.", "MDF làm từ sợi gỗ.", "Chọn từ đúng"],
      ["It's MDF with an oak ___.", "veneer", ["veneer", "grain", "laminate"], "Gỗ lạng: veneer.", "Đó là MDF dán gỗ sồi lạng.", "Chọn từ đúng"]
    ],
    error: [
      ["The table is made by oak.", 4, "of", ["of", "from", "with"], "Chất liệu: made of."],
      ["What is this countertop make of?", 4, "made", ["made", "making", "makes"], "be made of."]
    ]
  },
  pron: [["oak", "/əʊk/", "gỗ sồi"], ["walk", "/wɔːk/", "đi bộ"], "oak có /əʊ/ như “âu”; walk có /ɔː/ như “o” dài (chữ l câm).", "/əʊ/ và /ɔː/"],
  writing: [
    ["Sàn làm bằng gỗ sồi.", ["The floor is made of oak.", "The floor is oak."], ["oak"], ""],
    ["Bàn làm bằng gì?", ["What is the table made of?", "What's the table made of?"], ["made of"], ""],
    ["Laminate dễ lau chùi.", ["Laminate is easy to clean."], ["laminate", "easy to clean"], ""]
  ]
},
{
  id: "s3u14l2", stage: 3, unit: 14, n: 2, unitTitle: "Thiết kế & vật liệu",
  title: "Đá, kính & kim loại", titleEn: "Stone, glass and metal",
  words: [
    ["granite", "/ˈɡrænɪt/", "danh từ", "đá granite (đá hoa cương)", "Granite is very hard.", "Đá granite rất cứng."],
    ["quartz", "/kwɔːts/", "danh từ", "đá thạch anh nhân tạo", "We recommend a quartz countertop.", "Chúng tôi khuyên dùng mặt bàn thạch anh."],
    ["terrazzo", "/təˈrætsəʊ/", "danh từ", "đá mài terrazzo", "Terrazzo floors are back in fashion.", "Sàn đá mài đang thịnh hành trở lại."],
    ["porcelain", "/ˈpɔːsəlɪn/", "danh từ", "gạch / sứ porcelain", "Porcelain tiles absorb very little water.", "Gạch porcelain hút rất ít nước."],
    ["tempered glass", "/ˌtempəd ˈɡlɑːs/", "danh từ", "kính cường lực", "The shower screen is tempered glass.", "Vách tắm bằng kính cường lực."],
    ["stainless steel", "/ˌsteɪnləs ˈstiːl/", "danh từ", "thép không gỉ, inox", "The sink is stainless steel.", "Bồn rửa bằng inox."],
    ["brass", "/brɑːs/", "danh từ", "đồng thau", "We chose brass handles.", "Chúng tôi chọn tay nắm đồng thau."],
    ["copper", "/ˈkɒpə(r)/", "danh từ", "đồng đỏ", "The pendant lights are copper.", "Đèn thả bằng đồng đỏ."],
    ["aluminium", "/ˌæljəˈmɪniəm/", "danh từ", "nhôm", "The window frames are aluminium.", "Khung cửa sổ bằng nhôm."],
    ["brushed", "/brʌʃt/", "tính từ", "xước mờ (bề mặt kim loại)", "I prefer brushed brass to shiny brass.", "Tôi thích đồng xước mờ hơn đồng bóng."]
  ],
  grammar: {
    name: "Danh từ vật liệu làm tính từ", nameEn: "Material nouns before nouns",
    desc: "Đặt danh từ vật liệu trước danh từ: a granite countertop, brass handles, an aluminium frame (không thêm -en hay -y). Một số có tính từ riêng: wood → wooden, gold → golden, wool → woollen. Vật liệu luôn đứng NGAY TRƯỚC danh từ: a black granite countertop.",
    formula: [["·", "<b>a quartz countertop</b> / <b>brass handles</b>"], ["·", "<b>a wooden door</b> (= a wood door)"], ["·", "<b>a black granite</b> countertop (màu trước, vật liệu sau)"], ["✗", "a countertop granite · a granite black countertop"]],
    examples: [["We installed <b>stainless steel</b> appliances and <b>brushed brass</b> taps.", "Chúng tôi lắp thiết bị inox và vòi đồng xước mờ."], ["The client wants <b>a white quartz</b> island.", "Khách muốn đảo bếp thạch anh trắng."]],
    mistake: ["We chose a granite black countertop.", "We chose a black granite countertop.", "Màu đứng trước vật liệu."]
  },
  dialogue: { title: "Chọn vật liệu bếp", lines: [
    ["A", "Which countertop do you recommend?", "Anh khuyên dùng mặt bàn nào?"],
    ["B", "A white quartz countertop. It's easy to clean.", "Mặt bàn thạch anh trắng. Dễ lau chùi."],
    ["A", "Is it more expensive than granite?", "Đắt hơn granite không?"],
    ["B", "A little, but it doesn't stain.", "Hơi đắt hơn, nhưng không bị ố."],
    ["A", "And the handles?", "Còn tay nắm?"],
    ["B", "Brushed brass would look great with it.", "Đồng xước mờ sẽ rất hợp."]
  ] },
  drills: {
    fill: [
      ["We chose a black ___ countertop.", "granite", ["granite", "granites", "granitic"], "Danh từ vật liệu đứng trước danh từ.", "Chúng tôi chọn mặt bàn granite đen.", "Chọn dạng đúng"],
      ["The door is ___.", "wooden", ["wooden", "wood's", "woody"], "Tính từ của wood: wooden.", "Cửa bằng gỗ.", "Chọn dạng đúng"],
      ["The shower screen is ___ glass.", "tempered", ["tempered", "brushed", "solid"], "Kính cường lực: tempered glass.", "Vách tắm bằng kính cường lực.", "Chọn từ đúng"]
    ],
    error: [
      ["We chose a black granites countertop.", 4, "granite", ["granite", "granite's", "granitic"], "Danh từ vật liệu đứng trước danh từ ở dạng số ít: a black granite countertop."],
      ["The window frames are aluminiums.", 4, "aluminium.", ["aluminium.", "aluminum's.", "aluminiumed."], "Danh từ vật liệu không đếm được: aluminium."]
    ]
  },
  pron: [["quartz", "/kwɔːts/", "thạch anh"], ["quarter", "/ˈkwɔːtə(r)/", "một phần tư"], "Cùng mở đầu /kwɔː/; quartz kết thúc /ts/, quarter có hai âm tiết.", "/kwɔː/"],
  writing: [
    ["Bồn rửa bằng inox.", ["The sink is stainless steel.", "The sink is made of stainless steel."], ["stainless steel"], ""],
    ["Chúng tôi chọn tay nắm đồng thau.", ["We chose brass handles.", "We have chosen brass handles."], ["brass handles"], ""],
    ["Khách muốn đảo bếp thạch anh trắng.", ["The client wants a white quartz island.", "The client wants a white quartz kitchen island."], ["white quartz"], ""]
  ]
},
{
  id: "s3u14l3", stage: 3, unit: 14, n: 3, unitTitle: "Thiết kế & vật liệu",
  title: "Kích thước", titleEn: "Dimensions",
  words: [
    ["width", "/wɪdθ/", "danh từ", "chiều rộng", "What's the width of the window?", "Cửa sổ rộng bao nhiêu?"],
    ["height", "/haɪt/", "danh từ", "chiều cao", "The height of the cabinet is 2.4 metres.", "Tủ cao 2,4 mét."],
    ["depth", "/depθ/", "danh từ", "chiều sâu", "Kitchen counters have a depth of 60 cm.", "Mặt bếp sâu 60 cm."],
    ["length", "/leŋθ/", "danh từ", "chiều dài", "The sofa is 2.2 metres in length.", "Ghế sofa dài 2,2 mét."],
    ["thickness", "/ˈθɪknəs/", "danh từ", "độ dày", "The glass has a thickness of 10 mm.", "Kính dày 10 mm."],
    ["thick", "/θɪk/", "tính từ", "dày", "The walls are 20 centimetres thick.", "Tường dày 20 cm."],
    ["millimetre", "/ˈmɪlimiːtə(r)/", "danh từ", "mi-li-mét", "The gap is only 3 millimetres.", "Khe hở chỉ 3 mi-li-mét."],
    ["centimetre", "/ˈsentɪmiːtə(r)/", "danh từ", "xăng-ti-mét", "Move it 5 centimetres to the left.", "Dời sang trái 5 cm."],
    ["scale", "/skeɪl/", "danh từ", "tỉ lệ (bản vẽ)", "The drawing is at a scale of 1:50.", "Bản vẽ tỉ lệ 1:50."],
    ["compact", "/kəmˈpækt/", "tính từ", "gọn, nhỏ gọn", "We need a compact desk for this corner.", "Góc này cần bàn nhỏ gọn."]
  ],
  grammar: {
    name: "Tính từ ghép chỉ kích thước", nameEn: "Compound adjectives: a 3-metre-wide window",
    desc: "Hai cách: (1) It’s 3 metres wide / 60 cm deep / 2.4 m high (danh từ số nhiều + tính từ). (2) a 3-metre-wide window (tính từ ghép trước danh từ: dùng gạch nối và danh từ đơn vị ở SỐ ÍT — không có -s). Hỏi: How wide / deep / high is it? What’s the width…?",
    formula: [["·", "The window is <b>3 metres wide</b>."], ["·", "It’s <b>a 3-metre-wide</b> window."], ["·", "<b>a 60-centimetre-deep</b> cabinet"], ["?", "<b>How deep</b> is the counter?"]],
    examples: [["We need <b>a 2.4-metre-high</b> wardrobe.", "Chúng tôi cần tủ cao 2,4 mét."], ["The island is <b>90 centimetres wide</b> and <b>1.8 metres long</b>.", "Đảo bếp rộng 90 cm và dài 1,8 m."]],
    mistake: ["It's a 3-metres-wide window.", "It's a 3-metre-wide window.", "Tính từ ghép: danh từ đơn vị số ít (metre)."]
  },
  dialogue: { title: "Đo cửa sổ", lines: [
    ["A", "How wide is the window?", "Cửa sổ rộng bao nhiêu?"],
    ["B", "It's three metres wide.", "Rộng ba mét."],
    ["A", "So we need a three-metre-wide curtain.", "Vậy cần rèm rộng ba mét."],
    ["B", "And the height is 2.6 metres.", "Còn chiều cao là 2,6 mét."],
    ["A", "Is the wall thick enough for a shelf?", "Tường đủ dày để gắn kệ không?"],
    ["B", "Yes, it's twenty centimetres thick.", "Được, dày hai mươi xăng-ti-mét."]
  ] },
  drills: {
    fill: [
      ["It's a 3-___-wide window.", "metre", ["metre", "metres", "metre's"], "Tính từ ghép: đơn vị số ít.", "Đó là cửa sổ rộng 3 mét.", "Chọn dạng đúng"],
      ["The window is 3 ___ wide.", "metres", ["metres", "metre", "metre's"], "Sau số: danh từ số nhiều.", "Cửa sổ rộng 3 mét.", "Chọn dạng đúng"],
      ["How ___ is the counter? — 60 cm.", "deep", ["deep", "depth", "thick"], "How deep…?", "Mặt bếp sâu bao nhiêu? — 60 cm.", "Chọn từ đúng"]
    ],
    error: [
      ["It's a 3-metres-wide window.", 2, "3-metre-wide", ["3-metre-wide", "3-metres-wides", "3-metre-wides"], "Tính từ ghép: metre số ít."],
      ["The walls are 20 centimetres thickness.", 5, "thick.", ["thick.", "thicker.", "thickly."], "Số đo + tính từ: 20 cm thick."]
    ]
  },
  pron: [["width", "/wɪdθ/", "chiều rộng"], ["with", "/wɪð/", "với"], "width kết thúc /dθ/ (chạm lưỡi rồi thổi hơi); with kết thúc /ð/.", "Âm cuối /dθ/"],
  writing: [
    ["Cửa sổ rộng ba mét.", ["The window is three metres wide.", "The window is 3 metres wide.", "The window is three meters wide."], ["wide"], ""],
    ["Chúng tôi cần tủ cao 2,4 mét.", ["We need a 2.4-metre-high wardrobe.", "We need a wardrobe that is 2.4 metres high.", "We need a 2.4-meter-high wardrobe."], ["wardrobe"], ""],
    ["Bản vẽ tỉ lệ 1:50.", ["The drawing is at a scale of 1:50.", "The drawing is at 1:50 scale.", "The drawing's scale is 1:50."], ["scale", "1:50"], ""]
  ]
},
{
  id: "s3u14l4", stage: 3, unit: 14, n: 4, unitTitle: "Thiết kế & vật liệu",
  title: "Bề mặt & màu sắc", titleEn: "Finishes and colours",
  words: [
    ["matte", "/mæt/", "tính từ", "mờ (không bóng)", "We used matte black paint.", "Chúng tôi dùng sơn đen mờ."],
    ["glossy", "/ˈɡlɒsi/", "tính từ", "bóng loáng", "Glossy cabinets show fingerprints.", "Tủ bóng dễ lộ dấu tay."],
    ["satin finish", "/ˌsætɪn ˈfɪnɪʃ/", "danh từ", "bề mặt bóng nhẹ (satin)", "A satin finish is easy to clean.", "Bề mặt satin dễ lau chùi."],
    ["polished", "/ˈpɒlɪʃt/", "tính từ", "được đánh bóng", "The polished concrete floor looks modern.", "Sàn bê tông đánh bóng trông hiện đại."],
    ["smooth", "/smuːð/", "tính từ", "nhẵn mịn", "The surface is very smooth.", "Bề mặt rất nhẵn."],
    ["rough", "/rʌf/", "tính từ", "nhám, thô ráp", "Stone tiles feel a bit rough.", "Gạch đá sờ hơi nhám."],
    ["beige", "/beɪʒ/", "tính từ", "màu be", "The sofa is light beige.", "Ghế sofa màu be nhạt."],
    ["charcoal", "/ˈtʃɑːkəʊl/", "tính từ", "màu xám than", "We painted one wall charcoal.", "Chúng tôi sơn một bức tường màu xám than."],
    ["ivory", "/ˈaɪvəri/", "tính từ", "màu trắng ngà", "Ivory walls make the room warmer.", "Tường trắng ngà làm phòng ấm hơn."],
    ["terracotta", "/ˌterəˈkɒtə/", "tính từ", "màu đất nung", "Terracotta tiles suit a tropical style.", "Gạch màu đất nung hợp phong cách nhiệt đới."]
  ],
  grammar: {
    name: "Thứ tự tính từ", nameEn: "Adjective order",
    desc: "Khi có nhiều tính từ trước danh từ: Ý kiến → Kích thước → Tuổi → Hình dạng → Màu → Xuất xứ → Chất liệu → Mục đích + DANH TỪ. Ví dụ: a beautiful large old round brown Italian oak dining table. Thực tế thường chỉ dùng 2–3 tính từ.",
    formula: [["·", "a <b>beautiful</b> (ý kiến) <b>large</b> (kích thước) table"], ["·", "a <b>small round white</b> mirror"], ["·", "a <b>modern black leather</b> sofa"], ["·", "an <b>elegant ivory marble</b> countertop"]],
    examples: [["We chose <b>a large matte charcoal</b> kitchen island.", "Chúng tôi chọn đảo bếp lớn màu xám than mờ."], ["She bought <b>a lovely small Japanese ceramic</b> vase.", "Cô ấy mua một bình gốm Nhật nhỏ xinh."]],
    mistake: ["We bought a leather black modern sofa.", "We bought a modern black leather sofa.", "Ý kiến → màu → chất liệu."]
  },
  dialogue: { title: "Chọn sơn và vật liệu hoàn thiện", lines: [
    ["A", "Matte or glossy for the cabinets?", "Tủ làm mờ hay bóng?"],
    ["B", "Matte. Glossy shows fingerprints.", "Mờ. Bóng dễ lộ dấu tay."],
    ["A", "What colour are you thinking?", "Anh nghĩ màu gì?"],
    ["B", "Charcoal, with ivory walls.", "Xám than, tường trắng ngà."],
    ["A", "That sounds elegant.", "Nghe thanh lịch đấy."],
    ["B", "And maybe terracotta tiles on the balcony.", "Và có lẽ gạch đất nung ngoài ban công."]
  ] },
  drills: {
    fill: [
      ["We bought a modern black ___ sofa.", "leather", ["leather", "large", "beautiful"], "Chất liệu đứng ngay trước danh từ.", "Chúng tôi mua ghế sofa da đen hiện đại.", "Chọn từ đúng"],
      ["Glossy cabinets show ___.", "fingerprints", ["fingerprints", "grain", "scale"], "Dấu tay: fingerprints.", "Tủ bóng dễ lộ dấu tay.", "Chọn từ đúng"],
      ["Stone tiles feel a bit ___.", "rough", ["rough", "smooth", "glossy"], "Nhám: rough.", "Gạch đá sờ hơi nhám.", "Chọn từ đúng"]
    ],
    error: [
      ["We bought an modern black leather sofa.", 2, "a", ["a", "the", "some"], "modern bắt đầu bằng phụ âm: a modern black leather sofa."],
      ["The surface is very smoothly.", 4, "smooth.", ["smooth.", "smoothness.", "smoothed."], "Sau be: tính từ."]
    ]
  },
  pron: [["rough", "/rʌf/", "nhám"], ["roof", "/ruːf/", "mái nhà"], "rough có /ʌ/ như “ắp”; roof có /uː/ dài.", "/ʌ/ và /uː/"],
  writing: [
    ["Chúng tôi dùng sơn đen mờ.", ["We used matte black paint.", "We used black matte paint."], ["matte black"], ""],
    ["Bề mặt rất nhẵn.", ["The surface is very smooth."], ["smooth"], ""],
    ["Ghế sofa màu be nhạt.", ["The sofa is light beige.", "The sofa is pale beige."], ["beige"], ""]
  ]
},
{
  id: "s3u14l5", stage: 3, unit: 14, n: 5, unitTitle: "Thiết kế & vật liệu",
  title: "Bảng vật liệu cho khách", titleEn: "A material board",
  words: [
    ["rattan", "/ræˈtæn/", "danh từ", "mây (song mây)", "The chairs are made of rattan.", "Ghế làm bằng mây."],
    ["linen", "/ˈlɪnɪn/", "danh từ", "vải lanh", "Linen curtains feel light and fresh.", "Rèm vải lanh nhẹ và thoáng."],
    ["velvet", "/ˈvelvɪt/", "danh từ", "vải nhung", "A velvet sofa looks luxurious.", "Sofa nhung trông sang trọng."],
    ["fabric", "/ˈfæbrɪk/", "danh từ", "vải (bọc)", "Choose a fabric for the cushions.", "Chọn vải cho gối tựa."],
    ["scratch-resistant", "/ˈskrætʃ rɪzɪstənt/", "tính từ", "chống trầy", "This floor is scratch-resistant.", "Sàn này chống trầy."],
    ["water-resistant", "/ˈwɔːtə rɪzɪstənt/", "tính từ", "chống nước", "Use water-resistant boards in the kitchen.", "Dùng ván chống nước trong bếp."],
    ["fire-resistant", "/ˈfaɪə rɪzɪstənt/", "tính từ", "chống cháy", "The panels are fire-resistant.", "Các tấm ốp chống cháy."],
    ["recycled", "/ˌriːˈsaɪkld/", "tính từ", "tái chế", "The tiles contain recycled glass.", "Gạch có thành phần kính tái chế."],
    ["curved", "/kɜːvd/", "tính từ", "cong", "A curved sofa softens the room.", "Sofa cong làm căn phòng mềm mại hơn."],
    ["sleek", "/sliːk/", "tính từ", "thanh thoát, gọn đẹp", "The kitchen has a sleek, modern look.", "Bếp có vẻ ngoài thanh thoát, hiện đại."]
  ],
  grammar: {
    name: "Ôn tập Unit 14", nameEn: "Review: describing designs",
    desc: "Chất liệu: made of / made from; danh từ vật liệu trước danh từ (a quartz countertop) · Kích thước: 3 metres wide / a 3-metre-wide… · Thứ tự tính từ: ý kiến → kích thước → màu → chất liệu + danh từ · Tính từ ghép với -resistant: scratch-resistant, water-resistant.",
    formula: [["·", "The island has <b>a white quartz</b> top."], ["·", "We chose <b>a 2.2-metre-long curved velvet</b> sofa."], ["·", "The kitchen boards are <b>water-resistant</b>."], ["·", "The curtains are <b>made of</b> linen."]],
    examples: [["The floor is <b>scratch-resistant</b>, so it’s perfect for pets.", "Sàn chống trầy nên rất hợp nhà có thú cưng."], ["We used <b>sleek black aluminium</b> frames.", "Chúng tôi dùng khung nhôm đen thanh mảnh."]],
    mistake: ["The curtains are made by linen.", "The curtains are made of linen.", "Chất liệu: made of."]
  },
  dialogue: { title: "Trình bày bảng vật liệu", lines: [
    ["A", "Here's the material board for your living room.", "Đây là bảng vật liệu phòng khách của anh chị."],
    ["A", "The sofa is a curved velvet sofa in beige.", "Sofa là loại cong bọc nhung màu be."],
    ["B", "Is velvet easy to clean?", "Nhung có dễ lau không?"],
    ["A", "This fabric is water-resistant.", "Loại vải này chống nước."],
    ["B", "And the floor? We have a dog.", "Còn sàn? Nhà tôi có chó."],
    ["A", "It's scratch-resistant oak laminate.", "Đó là sàn laminate vân sồi chống trầy."]
  ] },
  drills: {
    fill: [
      ["The curtains are made ___ linen.", "of", ["of", "by", "from"], "Chất liệu: made of.", "Rèm làm bằng vải lanh.", "Chọn từ đúng"],
      ["This floor is scratch-___.", "resistant", ["resistant", "resist", "resisting"], "Tính từ ghép: scratch-resistant.", "Sàn này chống trầy.", "Chọn dạng đúng"]
    ],
    error: [
      ["The curtains are made by linen.", 4, "of", ["of", "with", "to"], "Chất liệu: made of."]
    ]
  },
  reading: {
    title: "Material board – Living room, Apartment 12A",
    sentences: [
      ["For your living room, we have chosen a warm, natural palette that is also practical for a family with children and a dog.", "Cho phòng khách, chúng tôi chọn bảng màu ấm, tự nhiên và cũng thực tế cho gia đình có con nhỏ và chó."],
      ["The floor is a scratch-resistant oak laminate, which is cheaper than solid oak and much easier to maintain.", "Sàn là laminate vân sồi chống trầy, rẻ hơn gỗ sồi nguyên khối và dễ bảo dưỡng hơn nhiều."],
      ["The main piece is a 2.4-metre-long curved sofa in a beige, water-resistant fabric.", "Món chính là chiếc sofa cong dài 2,4 m bọc vải màu be chống nước."],
      ["Next to it, two rattan armchairs and a round walnut coffee table add texture and warmth.", "Bên cạnh, hai ghế bành mây và bàn trà tròn gỗ óc chó tạo thêm chất liệu và sự ấm áp."],
      ["The TV wall is painted matte charcoal, while the other walls are ivory, and the curtains are made of light linen.", "Tường TV sơn xám than mờ, các tường còn lại màu trắng ngà, và rèm làm từ vải lanh nhẹ."],
      ["Finally, the shelves are made of plywood with a walnut veneer, and all handles are brushed brass.", "Cuối cùng, kệ làm bằng gỗ dán phủ gỗ óc chó lạng, và mọi tay nắm là đồng xước mờ."]
    ],
    tf: [["The floor is made of solid oak.", false], ["The sofa fabric is water-resistant.", true], ["All the walls are painted charcoal.", false]],
    mc: [["What are the armchairs made of?", ["Velvet", "Rattan", "Walnut"], 1]],
    qa: [
      ["How long is the sofa?", "Sofa dài bao nhiêu?", ["2.4|two point four"], "2.4 metres."],
      ["Why did they choose laminate?", "Vì sao chọn laminate?", ["cheaper|easier|maintain"], "It's cheaper than solid oak and easier to maintain."],
      ["What are the handles made of?", "Tay nắm làm bằng gì?", ["brass"], "Brushed brass."]
    ]
  },
  writing: [
    ["Rèm làm bằng vải lanh.", ["The curtains are made of linen.", "The curtains are linen."], ["linen"], ""],
    ["Sàn này chống trầy.", ["This floor is scratch-resistant.", "The floor is scratch-resistant."], ["scratch-resistant"], ""],
    ["Sofa nhung trông sang trọng.", ["A velvet sofa looks luxurious.", "The velvet sofa looks luxurious."], ["velvet", "luxurious"], ""]
  ]
}
,
/* ===== Chặng III · Unit 15 · Phỏng vấn & phát triển sự nghiệp ===== */
{
  id: "s3u15l1", stage: 3, unit: 15, n: 1, unitTitle: "Phỏng vấn & sự nghiệp",
  title: "Hồ sơ ứng tuyển", titleEn: "Applying for a job",
  words: [
    ["candidate", "/ˈkændɪdət/", "danh từ", "ứng viên", "We interviewed five candidates.", "Chúng tôi phỏng vấn năm ứng viên."],
    ["applicant", "/ˈæplɪkənt/", "danh từ", "người nộp đơn", "There were over 100 applicants.", "Có hơn 100 người nộp đơn."],
    ["application", "/ˌæplɪˈkeɪʃn/", "danh từ", "đơn ứng tuyển", "I sent my application last week.", "Tôi gửi đơn tuần trước."],
    ["CV", "/ˌsiː ˈviː/", "viết tắt", "sơ yếu lý lịch", "Please attach your CV.", "Vui lòng đính kèm sơ yếu lý lịch."],
    ["cover letter", "/ˈkʌvə letə(r)/", "danh từ", "thư xin việc", "Write a short cover letter.", "Viết thư xin việc ngắn gọn."],
    ["job advert", "/ˈdʒɒb ædvɜːt/", "danh từ", "tin tuyển dụng", "I saw the job advert online.", "Tôi thấy tin tuyển dụng trên mạng."],
    ["shortlisted", "/ˈʃɔːtlɪstɪd/", "tính từ", "lọt vào danh sách rút gọn", "You've been shortlisted for an interview.", "Bạn đã lọt vào vòng phỏng vấn."],
    ["recruiter", "/rɪˈkruːtə(r)/", "danh từ", "chuyên viên tuyển dụng", "A recruiter called me yesterday.", "Hôm qua một chuyên viên tuyển dụng gọi tôi."],
    ["qualification", "/ˌkwɒlɪfɪˈkeɪʃn/", "danh từ", "bằng cấp, trình độ", "What qualifications do you have?", "Bạn có những bằng cấp gì?"],
    ["reference", "/ˈrefrəns/", "danh từ", "thư giới thiệu, người xác nhận", "My former boss can give a reference.", "Sếp cũ có thể xác nhận cho tôi."]
  ],
  grammar: {
    name: "Nói về quá trình làm việc", nameEn: "Past simple vs present perfect in a CV",
    desc: "Quá khứ đơn cho công việc ĐÃ KẾT THÚC, có thời gian cụ thể: I worked at A12 from 2018 to 2023. HTHT cho công việc HIỆN TẠI / kinh nghiệm đến nay: I’ve worked as a designer for eight years. / I’ve handled over 100 projects. Ứng tuyển: I’m applying for the position of… / I saw your job advert on…",
    formula: [["QKĐ", "I <b>worked</b> at Vina Build <b>from</b> 2018 <b>to</b> 2023."], ["HTHT", "I<b>’ve worked</b> as a designer <b>for</b> eight years."], ["HTHT", "I<b>’ve managed</b> more than 100 projects."], ["·", "<b>I’m applying for</b> the position of senior designer."]],
    examples: [["I <b>graduated</b> in civil engineering <b>in</b> 2014.", "Tôi tốt nghiệp ngành xây dựng năm 2014."], ["<b>Since</b> 2023, I<b>’ve been</b> responsible for client communication.", "Từ năm 2023, tôi phụ trách giao tiếp với khách."]],
    mistake: ["I have worked at Vina Build from 2018 to 2023.", "I worked at Vina Build from 2018 to 2023.", "Việc đã kết thúc, có mốc: quá khứ đơn."]
  },
  dialogue: { title: "Gọi mời phỏng vấn", lines: [
    ["A", "Hello, is that Phan? This is Mai, a recruiter.", "Alo, anh Phan phải không? Tôi là Mai, chuyên viên tuyển dụng."],
    ["B", "Yes, speaking.", "Vâng, tôi đây."],
    ["A", "You've been shortlisted for the designer role.", "Anh đã lọt vào vòng trong vị trí thiết kế."],
    ["B", "That's great news. Thank you!", "Tin vui quá. Cảm ơn chị!"],
    ["A", "Can you bring your portfolio and two references?", "Anh mang hồ sơ năng lực và hai người xác nhận nhé?"],
    ["B", "Of course. When is the interview?", "Tất nhiên. Phỏng vấn khi nào ạ?"]
  ] },
  drills: {
    fill: [
      ["I ___ at Vina Build from 2018 to 2023.", "worked", ["worked", "have worked", "work"], "Việc đã kết thúc: quá khứ đơn.", "Tôi làm ở Vina Build từ 2018 đến 2023.", "Chọn dạng đúng"],
      ["I've worked as a designer ___ eight years.", "for", ["for", "since", "during"], "Khoảng thời gian: for.", "Tôi làm thiết kế tám năm rồi.", "Chọn từ đúng"],
      ["Please attach your ___.", "CV", ["CV", "recruiter", "candidate"], "Sơ yếu lý lịch: CV.", "Vui lòng đính kèm sơ yếu lý lịch.", "Chọn từ đúng"]
    ],
    error: [
      ["I have worked at Vina Build from 2018 to 2023.", 1, "-", ["-", "had", "was"], "Việc đã kết thúc: quá khứ đơn (bỏ have)."],
      ["I'm applying to the position of senior designer.", 2, "for", ["for", "at", "with"], "apply for a position."]
    ]
  },
  pron: [["applicant", "/ˈæplɪkənt/", "người nộp đơn"], ["application", "/ˌæplɪˈkeɪʃn/", "đơn ứng tuyển"], "applicant nhấn âm đầu (ÁP-li-cần); application nhấn âm thứ ba (áp-li-CÂY-sần).", "Trọng âm"],
  writing: [
    ["Tôi làm thiết kế tám năm rồi.", ["I've worked as a designer for eight years.", "I have worked as a designer for eight years.", "I've been a designer for eight years."], ["designer", "eight years"], ""],
    ["Vui lòng đính kèm sơ yếu lý lịch.", ["Please attach your CV.", "Please attach your resume."], ["attach"], ""],
    ["Tôi thấy tin tuyển dụng trên mạng.", ["I saw the job advert online.", "I saw the job ad online.", "I saw your job advert online."], ["job advert"], ""]
  ]
},
{
  id: "s3u15l2", stage: 3, unit: 15, n: 2, unitTitle: "Phỏng vấn & sự nghiệp",
  title: "Thế mạnh & điểm yếu", titleEn: "Strengths and weaknesses",
  words: [
    ["strength", "/streŋθ/", "danh từ", "thế mạnh", "What's your greatest strength?", "Thế mạnh lớn nhất của bạn là gì?"],
    ["weakness", "/ˈwiːknəs/", "danh từ", "điểm yếu", "Tell me about a weakness.", "Kể tôi nghe một điểm yếu."],
    ["skill set", "/ˈskɪl set/", "danh từ", "bộ kỹ năng", "Your skill set matches the job.", "Bộ kỹ năng của bạn hợp công việc."],
    ["soft skills", "/ˈsɒft skɪlz/", "danh từ", "kỹ năng mềm", "Soft skills are as important as technical ones.", "Kỹ năng mềm quan trọng không kém kỹ năng chuyên môn."],
    ["hard skills", "/ˈhɑːd skɪlz/", "danh từ", "kỹ năng chuyên môn", "AutoCAD and 3D rendering are hard skills.", "AutoCAD và dựng 3D là kỹ năng chuyên môn."],
    ["detail-oriented", "/ˈdiːteɪl ɔːrientɪd/", "tính từ", "tỉ mỉ, chú trọng chi tiết", "Designers need to be detail-oriented.", "Nhà thiết kế cần tỉ mỉ."],
    ["adaptable", "/əˈdæptəbl/", "tính từ", "thích nghi tốt", "I'm adaptable and learn quickly.", "Tôi thích nghi tốt và học nhanh."],
    ["problem-solving", "/ˈprɒbləm sɒlvɪŋ/", "danh từ", "giải quyết vấn đề", "Site work requires good problem-solving.", "Việc công trường cần kỹ năng giải quyết vấn đề tốt."],
    ["creativity", "/ˌkriːeɪˈtɪvəti/", "danh từ", "sự sáng tạo", "This job needs creativity.", "Công việc này cần sự sáng tạo."],
    ["leadership", "/ˈliːdəʃɪp/", "danh từ", "khả năng lãnh đạo", "She has strong leadership skills.", "Cô ấy có khả năng lãnh đạo tốt."]
  ],
  grammar: {
    name: "Nói về thế mạnh", nameEn: "Talking about strengths",
    desc: "One of my strengths is + danh từ / V-ing. I’m good at + V-ing / danh từ. I’m (very) + tính từ. Luôn kèm ví dụ: For example, … Nói điểm yếu tích cực: I used to…, but now I… / I’m working on + V-ing.",
    formula: [["·", "<b>One of my strengths is</b> problem-solving."], ["·", "I<b>’m good at explaining</b> designs to clients."], ["·", "I<b>’m</b> very detail-oriented. <b>For example</b>, I always…"], ["·", "My weakness is public speaking, but <b>I’m working on</b> it."]],
    examples: [["<b>One of my greatest strengths is</b> communicating with clients.", "Một trong những thế mạnh lớn nhất của tôi là giao tiếp với khách."], ["I <b>used to</b> take on too much work, but now I delegate more.", "Trước đây tôi ôm quá nhiều việc, giờ tôi giao bớt nhiều hơn."]],
    mistake: ["I'm good at explain designs to clients.", "I'm good at explaining designs to clients.", "good at + V-ing."]
  },
  dialogue: { title: "Câu hỏi về thế mạnh", lines: [
    ["A", "What would you say is your greatest strength?", "Anh cho rằng thế mạnh lớn nhất của mình là gì?"],
    ["B", "I'm good at explaining designs to clients.", "Tôi giỏi giải thích thiết kế cho khách."],
    ["A", "Can you give me an example?", "Anh cho tôi một ví dụ?"],
    ["B", "I helped a client choose between three layouts.", "Tôi giúp một khách chọn giữa ba bố cục."],
    ["A", "And a weakness?", "Còn điểm yếu?"],
    ["B", "Public speaking. But I'm working on it.", "Nói trước đám đông. Nhưng tôi đang cải thiện."]
  ] },
  drills: {
    fill: [
      ["I'm good at ___ designs to clients.", "explaining", ["explaining", "explain", "to explain"], "good at + V-ing.", "Tôi giỏi giải thích thiết kế cho khách.", "Chọn dạng đúng"],
      ["One of my ___ is problem-solving.", "strengths", ["strengths", "strength", "strong"], "One of my + danh từ số nhiều.", "Một trong những thế mạnh của tôi là giải quyết vấn đề.", "Chọn dạng đúng"],
      ["Designers need to be detail-___.", "oriented", ["oriented", "orient", "orienting"], "detail-oriented.", "Nhà thiết kế cần tỉ mỉ.", "Chọn dạng đúng"]
    ],
    error: [
      ["I'm good at explain designs to clients.", 3, "explaining", ["explaining", "explained", "explains"], "good at + V-ing."],
      ["One of my strength is creativity.", 3, "strengths", ["strengths", "strong", "strongly"], "One of my + danh từ số nhiều."]
    ]
  },
  pron: [["strength", "/streŋθ/", "thế mạnh"], ["string", "/strɪŋ/", "sợi dây"], "strength có /e/ và kết thúc /ŋθ/; string có /ɪ/ và kết thúc /ŋ/.", "Âm cuối /ŋθ/"],
  writing: [
    ["Tôi giỏi giải thích thiết kế cho khách.", ["I'm good at explaining designs to clients.", "I am good at explaining designs to clients."], ["good at explaining"], ""],
    ["Tôi thích nghi tốt và học nhanh.", ["I'm adaptable and learn quickly.", "I am adaptable and learn quickly.", "I'm adaptable and I learn quickly."], ["adaptable"], ""],
    ["Công việc này cần sự sáng tạo.", ["This job needs creativity.", "This job requires creativity."], ["creativity"], ""]
  ]
},
{
  id: "s3u15l3", stage: 3, unit: 15, n: 3, unitTitle: "Phỏng vấn & sự nghiệp",
  title: "Kể kinh nghiệm", titleEn: "Describing your experience",
  words: [
    ["accomplishment", "/əˈkʌmplɪʃmənt/", "danh từ", "thành tựu", "Tell me about your biggest accomplishment.", "Kể về thành tựu lớn nhất của bạn."],
    ["track record", "/ˈtræk rekɔːd/", "danh từ", "thành tích đã có", "She has a strong track record in sales.", "Cô ấy có thành tích tốt trong kinh doanh."],
    ["proven", "/ˈpruːvn/", "tính từ", "đã được chứng minh", "He has proven experience in project management.", "Anh ấy có kinh nghiệm quản lý dự án đã được chứng minh."],
    ["hands-on", "/ˌhændz ˈɒn/", "tính từ", "thực tế, trực tiếp làm", "I have hands-on site experience.", "Tôi có kinh nghiệm thực tế ở công trường."],
    ["handle pressure", "/ˌhændl ˈpreʃə(r)/", "cụm động từ", "chịu được áp lực", "How do you handle pressure?", "Bạn chịu áp lực thế nào?"],
    ["critical thinking", "/ˌkrɪtɪkl ˈθɪŋkɪŋ/", "danh từ", "tư duy phản biện", "Critical thinking helps you spot problems early.", "Tư duy phản biện giúp phát hiện vấn đề sớm."],
    ["learning curve", "/ˈlɜːnɪŋ kɜːv/", "danh từ", "giai đoạn học hỏi", "The first year was a steep learning curve.", "Năm đầu là giai đoạn học hỏi rất vất vả."],
    ["passionate", "/ˈpæʃənət/", "tính từ", "đam mê", "I'm passionate about interior design.", "Tôi đam mê thiết kế nội thất."],
    ["goal-oriented", "/ˈɡəʊl ɔːrientɪd/", "tính từ", "định hướng mục tiêu", "She's very goal-oriented.", "Cô ấy rất định hướng mục tiêu."],
    ["career path", "/kəˈrɪə pɑːθ/", "danh từ", "con đường sự nghiệp", "Tell me about your career path.", "Kể về con đường sự nghiệp của bạn."]
  ],
  grammar: {
    name: "Quá khứ hoàn thành khi kể chuyện", nameEn: "Past perfect in your story",
    desc: "had + V3: việc xảy ra TRƯỚC một mốc / việc khác trong quá khứ. By the time I left the company, I had managed 50 projects. Before I joined A12, I had worked as a site engineer. Dùng để làm nổi bật thành tích ở giai đoạn trước.",
    formula: [["·", "<b>By the time</b> I left, I <b>had managed</b> 50 projects."], ["·", "<b>Before</b> I joined the firm, I <b>had worked</b> on site for two years."], ["·", "When I became team leader, I <b>had</b> already <b>trained</b> three juniors."], ["≠", "I managed 50 projects. (không cần mốc: quá khứ đơn)"]],
    examples: [["<b>By 2020</b>, I <b>had completed</b> my first villa project.", "Đến năm 2020, tôi đã hoàn thành dự án biệt thự đầu tiên."], ["I <b>had</b> never <b>met</b> a foreign client before that project.", "Trước dự án đó tôi chưa từng gặp khách nước ngoài."]],
    mistake: ["By the time I left, I have managed 50 projects.", "By the time I left, I had managed 50 projects.", "Trước một mốc quá khứ: had + V3."]
  },
  dialogue: { title: "Kể con đường sự nghiệp", lines: [
    ["A", "Tell me about your career path.", "Kể tôi nghe về con đường sự nghiệp của anh."],
    ["B", "I studied civil engineering in Hanoi.", "Tôi học xây dựng ở Hà Nội."],
    ["B", "Before I joined A12, I had worked on site.", "Trước khi vào A12, tôi làm ở công trường."],
    ["A", "So you have hands-on experience.", "Vậy anh có kinh nghiệm thực tế."],
    ["B", "Yes. It was a steep learning curve.", "Vâng. Đó là giai đoạn học hỏi rất vất vả."],
    ["A", "What's your biggest accomplishment?", "Thành tựu lớn nhất của anh là gì?"]
  ] },
  drills: {
    fill: [
      ["By the time I left, I ___ managed 50 projects.", "had", ["had", "have", "was"], "Trước mốc quá khứ: had + V3.", "Đến lúc nghỉ, tôi đã quản lý 50 dự án.", "Chọn từ đúng"],
      ["Before I joined A12, I had ___ on site.", "worked", ["worked", "work", "working"], "had + V3.", "Trước khi vào A12, tôi đã làm ở công trường.", "Chọn dạng đúng"],
      ["I'm passionate ___ interior design.", "about", ["about", "for", "with"], "passionate about.", "Tôi đam mê thiết kế nội thất.", "Chọn từ đúng"]
    ],
    error: [
      ["By the time I left, I have managed 50 projects.", 6, "had", ["had", "was", "am"], "Trước mốc quá khứ: had managed."],
      ["I'm passionate for interior design.", 2, "about", ["about", "with", "on"], "passionate about."]
    ]
  },
  pron: [["passionate", "/ˈpæʃənət/", "đam mê"], ["patient", "/ˈpeɪʃnt/", "kiên nhẫn"], "passionate có /æ/ (miệng mở rộng); patient có /eɪ/.", "/æ/ và /eɪ/"],
  writing: [
    ["Tôi đam mê thiết kế nội thất.", ["I'm passionate about interior design.", "I am passionate about interior design."], ["passionate about"], ""],
    ["Đến lúc nghỉ, tôi đã quản lý 50 dự án.", ["By the time I left, I had managed 50 projects.", "By the time I left, I had managed fifty projects."], ["had managed"], ""],
    ["Tôi có kinh nghiệm thực tế ở công trường.", ["I have hands-on site experience.", "I have hands-on experience on site."], ["hands-on"], ""]
  ]
},
{
  id: "s3u15l4", stage: 3, unit: 15, n: 4, unitTitle: "Phỏng vấn & sự nghiệp",
  title: "Lương & điều kiện", titleEn: "Salary and conditions",
  words: [
    ["salary expectation", "/ˈsæləri ekspekteɪʃn/", "danh từ", "mức lương mong muốn", "What are your salary expectations?", "Mức lương mong muốn của bạn là bao nhiêu?"],
    ["benefits", "/ˈbenɪfɪts/", "danh từ", "phúc lợi", "The benefits include health insurance.", "Phúc lợi gồm bảo hiểm sức khoẻ."],
    ["package", "/ˈpækɪdʒ/", "danh từ", "gói đãi ngộ", "The whole package is attractive.", "Cả gói đãi ngộ rất hấp dẫn."],
    ["negotiable", "/nɪˈɡəʊʃiəbl/", "tính từ", "có thể thương lượng", "The salary is negotiable.", "Lương có thể thương lượng."],
    ["probation period", "/prəˈbeɪʃn pɪəriəd/", "danh từ", "thời gian thử việc", "The probation period is two months.", "Thời gian thử việc là hai tháng."],
    ["onboarding", "/ˈɒnbɔːdɪŋ/", "danh từ", "giai đoạn hội nhập nhân viên mới", "Onboarding takes about a week.", "Hội nhập nhân viên mới mất khoảng một tuần."],
    ["hybrid", "/ˈhaɪbrɪd/", "tính từ", "kết hợp (làm văn phòng và tại nhà)", "It's a hybrid role: three days in the office.", "Đây là vị trí kết hợp: ba ngày ở văn phòng."],
    ["resignation", "/ˌrezɪɡˈneɪʃn/", "danh từ", "sự xin nghỉ việc", "I handed in my resignation yesterday.", "Hôm qua tôi nộp đơn nghỉ việc."],
    ["recruitment", "/rɪˈkruːtmənt/", "danh từ", "việc tuyển dụng", "The recruitment process has three rounds.", "Quy trình tuyển dụng có ba vòng."],
    ["self-employed", "/ˌself ɪmˈplɔɪd/", "tính từ", "tự kinh doanh, làm chủ", "He has been self-employed for five years.", "Anh ấy tự kinh doanh năm năm nay."]
  ],
  grammar: {
    name: "Hỏi về lương & điều kiện lịch sự", nameEn: "Polite questions about pay and conditions",
    desc: "Hỏi gián tiếp lịch sự: Could you tell me what the package includes? / Would it be possible to + V? Nói mức mong muốn: I’d be looking for around… / I would expect a salary in the range of… Trì hoãn khéo: I’d like to learn more about the role before discussing salary.",
    formula: [["·", "<b>Could you tell me what</b> the package <b>includes</b>?"], ["·", "<b>I’d be looking for</b> around 25 million a month."], ["·", "<b>Would it be possible to</b> work from home on Fridays?"], ["·", "<b>Is the salary negotiable?</b>"]],
    examples: [["<b>Based on my experience, I would expect</b> a salary in the range of 25–30 million.", "Dựa trên kinh nghiệm, tôi mong mức lương khoảng 25–30 triệu."], ["<b>Could you tell me how long</b> the probation period <b>is</b>?", "Anh cho biết thời gian thử việc bao lâu?"]],
    mistake: ["Could you tell me what does the package include?", "Could you tell me what the package includes?", "Câu hỏi gián tiếp: không dùng does."]
  },
  dialogue: { title: "Hỏi về đãi ngộ", lines: [
    ["A", "What are your salary expectations?", "Mức lương mong muốn của anh là bao nhiêu?"],
    ["B", "I'd be looking for around 25 million a month.", "Tôi mong khoảng 25 triệu một tháng."],
    ["B", "Could you tell me what the package includes?", "Chị cho biết gói đãi ngộ gồm những gì?"],
    ["A", "Health insurance and a yearly bonus.", "Bảo hiểm sức khoẻ và thưởng năm."],
    ["B", "Is it possible to work from home sometimes?", "Thỉnh thoảng làm tại nhà được không?"],
    ["A", "Yes, it's a hybrid role.", "Được, đây là vị trí làm kết hợp."]
  ] },
  drills: {
    fill: [
      ["Could you tell me what the package ___?", "includes", ["includes", "does include", "include"], "Câu gián tiếp: chủ ngữ + động từ.", "Anh cho biết gói đãi ngộ gồm những gì?", "Chọn dạng đúng"],
      ["I'd be looking ___ around 25 million a month.", "for", ["for", "at", "after"], "be looking for.", "Tôi mong khoảng 25 triệu một tháng.", "Chọn từ đúng"],
      ["The salary is ___.", "negotiable", ["negotiable", "negotiate", "negotiation"], "Có thể thương lượng: negotiable.", "Lương có thể thương lượng.", "Chọn dạng đúng"]
    ],
    error: [
      ["Could you tell me what the package include?", 7, "includes?", ["includes?", "including?", "included?"], "Câu gián tiếp: chủ ngữ số ít + động từ có -s (the package includes)."],
      ["I handed in my resign yesterday.", 4, "resignation", ["resignation", "resigned", "resigning"], "Danh từ: resignation."]
    ]
  },
  pron: [["package", "/ˈpækɪdʒ/", "gói đãi ngộ"], ["passage", "/ˈpæsɪdʒ/", "đoạn văn"], "Cùng vần /ˈpæ-ɪdʒ/; package có /k/, passage có /s/.", "/k/ và /s/"],
  writing: [
    ["Mức lương mong muốn của bạn là bao nhiêu?", ["What are your salary expectations?", "What is your salary expectation?", "What's your expected salary?"], ["salary"], ""],
    ["Thời gian thử việc là hai tháng.", ["The probation period is two months.", "The probation period is 2 months."], ["probation"], ""],
    ["Lương có thể thương lượng.", ["The salary is negotiable."], ["negotiable"], ""]
  ]
},
{
  id: "s3u15l5", stage: 3, unit: 15, n: 5, unitTitle: "Phỏng vấn & sự nghiệp",
  title: "Phát triển sự nghiệp", titleEn: "Career development",
  words: [
    ["career goal", "/kəˈrɪə ɡəʊl/", "danh từ", "mục tiêu nghề nghiệp", "My career goal is to lead a design team.", "Mục tiêu nghề nghiệp của tôi là dẫn dắt đội thiết kế."],
    ["professional development", "/prəˌfeʃənl dɪˈveləpmənt/", "danh từ", "phát triển chuyên môn", "The company pays for professional development.", "Công ty chi trả cho việc phát triển chuyên môn."],
    ["upskill", "/ˈʌpskɪl/", "động từ", "nâng cao kỹ năng", "I want to upskill in 3D rendering.", "Tôi muốn nâng cao kỹ năng dựng 3D."],
    ["certification", "/ˌsɜːtɪfɪˈkeɪʃn/", "danh từ", "chứng chỉ (nghề)", "She got a project management certification.", "Cô ấy có chứng chỉ quản lý dự án."],
    ["conference", "/ˈkɒnfərəns/", "danh từ", "hội nghị", "I'm attending a design conference in Singapore.", "Tôi dự hội nghị thiết kế ở Singapore."],
    ["seminar", "/ˈsemɪnɑː(r)/", "danh từ", "buổi chuyên đề", "There's a seminar on sustainable materials.", "Có buổi chuyên đề về vật liệu bền vững."],
    ["networking", "/ˈnetwɜːkɪŋ/", "danh từ", "việc mở rộng quan hệ", "Networking events help you find clients.", "Sự kiện kết nối giúp tìm khách hàng."],
    ["LinkedIn", "/ˈlɪŋktɪn/", "danh từ", "mạng LinkedIn", "Update your LinkedIn profile.", "Cập nhật hồ sơ LinkedIn của bạn."],
    ["entrepreneur", "/ˌɒntrəprəˈnɜː(r)/", "danh từ", "doanh nhân khởi nghiệp", "One day I'd like to be an entrepreneur.", "Một ngày nào đó tôi muốn khởi nghiệp."],
    ["passion", "/ˈpæʃn/", "danh từ", "niềm đam mê", "Design is my passion.", "Thiết kế là niềm đam mê của tôi."]
  ],
  grammar: {
    name: "Ôn tập Unit 15", nameEn: "Review: job interviews",
    desc: "Quá khứ đơn (đã xong, có mốc) / HTHT (đến nay) / QKHT (trước một mốc quá khứ) khi kể kinh nghiệm · good at + V-ing, One of my strengths is… · Câu hỏi gián tiếp về lương · Mục tiêu: I’d like to… / I’m hoping to… / In five years, I see myself + V-ing.",
    formula: [["·", "<b>In five years, I see myself leading</b> a design team."], ["·", "<b>I’m hoping to</b> get a certification next year."], ["·", "<b>Before</b> I became a designer, I <b>had worked</b> in sales."], ["·", "<b>I’d like to</b> upskill in 3D rendering."]],
    examples: [["<b>Since</b> I joined, I<b>’ve attended</b> two international conferences.", "Từ khi vào công ty, tôi đã dự hai hội nghị quốc tế."], ["<b>My long-term goal is to</b> start my own design studio.", "Mục tiêu dài hạn của tôi là mở studio thiết kế riêng."]],
    mistake: ["In five years, I see myself lead a design team.", "In five years, I see myself leading a design team.", "see myself + V-ing."]
  },
  dialogue: { title: "Câu hỏi cuối buổi phỏng vấn", lines: [
    ["A", "Where do you see yourself in five years?", "Năm năm nữa anh thấy mình ở đâu?"],
    ["B", "I see myself leading a design team.", "Tôi thấy mình dẫn dắt một đội thiết kế."],
    ["A", "How will you get there?", "Anh sẽ làm thế nào để đạt được?"],
    ["B", "I'd like to upskill in 3D and project management.", "Tôi muốn nâng cao kỹ năng 3D và quản lý dự án."],
    ["A", "We support professional development.", "Chúng tôi hỗ trợ phát triển chuyên môn."],
    ["B", "That's great. Design is my passion.", "Tuyệt quá. Thiết kế là niềm đam mê của tôi."]
  ] },
  drills: {
    fill: [
      ["In five years, I see myself ___ a design team.", "leading", ["leading", "lead", "to lead"], "see myself + V-ing.", "Năm năm nữa tôi thấy mình dẫn dắt đội thiết kế.", "Chọn dạng đúng"],
      ["Since I joined, I ___ attended two conferences.", "have", ["have", "had", "did"], "since + HTHT.", "Từ khi vào công ty, tôi đã dự hai hội nghị.", "Chọn từ đúng"]
    ],
    error: [
      ["In five years, I see myself lead a design team.", 6, "leading", ["leading", "led", "leads"], "see myself + V-ing."]
    ]
  },
  reading: {
    title: "From site engineer to design lead",
    sentences: [
      ["Hoang studied civil engineering and spent his first three years as a site engineer, which gave him hands-on experience with materials and builders.", "Hoàng học xây dựng và dành ba năm đầu làm kỹ sư công trường, giúp anh có kinh nghiệm thực tế về vật liệu và thợ."],
      ["By the time he left the construction company, he had supervised more than twenty projects, but he wanted a more creative career path.", "Đến lúc rời công ty xây dựng, anh đã giám sát hơn hai mươi dự án, nhưng anh muốn con đường sự nghiệp sáng tạo hơn."],
      ["He took evening courses in interior design and 3D rendering, and he updated his CV and LinkedIn profile.", "Anh học buổi tối về thiết kế nội thất và dựng 3D, rồi cập nhật CV và hồ sơ LinkedIn."],
      ["At his interview with Nova Interiors, he explained that one of his strengths was understanding how designs are actually built.", "Trong buổi phỏng vấn ở Nova Interiors, anh giải thích rằng một trong những thế mạnh của mình là hiểu thiết kế được thi công thực tế ra sao."],
      ["He was offered the job after a two-month probation period, and the company has since paid for his project management certification.", "Anh được nhận chính thức sau hai tháng thử việc, và từ đó công ty đã chi trả cho chứng chỉ quản lý dự án của anh."],
      ["Today he leads a team of six designers, and his long-term goal is to become an entrepreneur and open his own studio.", "Hôm nay anh dẫn dắt đội sáu nhà thiết kế, và mục tiêu dài hạn là khởi nghiệp, mở studio riêng."]
    ],
    tf: [["Hoang started his career as a designer.", false], ["He had supervised more than twenty projects before leaving.", true], ["The company paid for his certification.", true]],
    mc: [["What did Hoang say was one of his strengths?", ["Drawing by hand", "Understanding how designs are built", "Speaking several languages"], 1]],
    qa: [
      ["What did Hoang study?", "Hoàng học ngành gì?", ["civil engineering|engineering"], "Civil engineering."],
      ["How long was his probation period?", "Thời gian thử việc của anh bao lâu?", ["two months|2 months"], "Two months."],
      ["What is his long-term goal?", "Mục tiêu dài hạn của anh là gì?", ["studio|entrepreneur|own"], "To become an entrepreneur and open his own studio."]
    ]
  },
  writing: [
    ["Thiết kế là niềm đam mê của tôi.", ["Design is my passion.", "Designing is my passion."], ["passion"], ""],
    ["Tôi muốn nâng cao kỹ năng dựng 3D.", ["I want to upskill in 3D rendering.", "I'd like to upskill in 3D rendering.", "I would like to upskill in 3D rendering."], ["upskill"], ""],
    ["Cập nhật hồ sơ LinkedIn của bạn.", ["Update your LinkedIn profile."], ["linkedin"], ""]
  ]
}

);
