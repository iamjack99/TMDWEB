export interface RealmInfo {
  name: string;
  subtitle: string;
  phase: string;
  phaseLabel: string;
  description: string;
  traits: string;
  abilities: string;
}

export const REALM_DATA: RealmInfo[] = [
  // ── GIAI ĐOẠN 1: PHÀM NHÂN NGHỊCH MỆNH (HẠ GIỚI) ──
  {
    name: 'Luyện Khí',
    subtitle: 'Dẫn Khí Nhập Thể',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Bước chân đầu tiên vào con đường tu chân. Khai mở kinh mạch, dẫn linh khí mỏng manh của trời đất vào cơ thể.',
    traits:
      'Thể chất bắt đầu thanh lọc bài trừ tạp chất nhẹ, tai thính mắt tinh hơn người phàm. Linh lực lưu chuyển dưới dạng khí trong kinh mạch.',
    abilities:
      'Sử dụng được các loại tiểu pháp thuật sơ cấp (Hỏa cầu, Phong nhận, Khinh thân), dùng được phù lục và điều khiển binh khí tầm gần. Thọ nguyên ~100-120 tuổi.',
  },
  {
    name: 'Trúc Cơ',
    subtitle: 'Xây Dựng Đạo Cơ',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description: 'Đặt viên gạch móng vững chắc cho con đường đại đạo.',
    traits:
      'Linh khí từ dạng sương/khí nén lại, hóa lỏng thành linh dịch tích tụ đầy trong đan điền (Tẩy Tủy Phạt Mao triệt để). Xương tủy trắng như ngọc, gân cốt cứng cáp vượt xa phàm nhân.',
    abilities:
      'Bắt đầu sinh ra Thần Thức sơ cấp; có khả năng ngự kiếm phi hành, điều khiển linh khí ngoại phóng tạo thành hộ thể linh quang. Thọ nguyên ~200-300 năm.',
  },
  {
    name: 'Kết Đan',
    subtitle: 'Kim Đan Đạo Quả',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Nén toàn bộ linh dịch trong đan điền lại thành một khối hạt tròn rắn chắc gọi là "Kim Đan".',
    traits:
      'Tùy vào phẩm chất đan (Hạ phẩm, Trung phẩm, Cực phẩm/Cửu Chuyển) mà quyết định tiềm năng tương lai. Đan điền hóa thành một "tiểu thái dương" liên tục phóng thích chân nguyên hùng hậu.',
    abilities:
      'Sản sinh Đan Hỏa (dùng để luyện đan, luyện khí), ngự không mà không cần dựa dẫm vào phi kiếm; nhục thân đao thương phàm trần khó đả thương. Thọ nguyên ~500 năm.',
  },
  {
    name: 'Nguyên Anh',
    subtitle: 'Phá Đan Thành Anh',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Đập vỡ Kim Đan, dựng nên một "bản thể thu nhỏ" bằng linh hồn thuần khiết ngự trị trong đan điền (Nguyên Anh).',
    traits:
      'Tu sĩ có hai mạng sống. Dù nhục thân bị chém nát, chỉ cần Nguyên Anh trốn thoát thì có thể đoạt xá hoặc trùng tu lại thể xác.',
    abilities:
      'Sử dụng được thuật Thuấn Di (dịch chuyển cự ly ngắn), ngự bảo giết địch ngoài ngàn dặm, Thần Thức bao phủ cả một tòa thành. Thọ nguyên ~1.000 năm.',
  },
  {
    name: 'Hóa Thần',
    subtitle: 'Thần Thức Hóa Vạn Vật',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Nguyên Anh tiến hóa thành "Nguyên Thần", bắt đầu chạm tay vào việc câu thông với Thiên Địa Quy Tắc.',
    traits:
      'Thần niệm mạnh mẽ đến mức có thể hóa hình thực thể. Tu sĩ bắt đầu cảm nhận được sự tồn tại của Ý Cảnh và Pháp Tắc sơ khai.',
    abilities:
      'Khai mở Ngụy Lĩnh Vực / Lĩnh Vực sơ khai; Nguyên Thần có thể xuất khiếu ngao du thiên hạ, điều động một phần thiên địa linh khí quy mô lớn để trấn áp đối thủ. Thọ nguyên ~2.000 - 3.000 năm.',
  },
  {
    name: 'Luyện Hư',
    subtitle: 'Phản Phác Quy Chân',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      '"Luyện thực hóa hư, hư thực bất định". Dung hợp Nguyên Thần vào hư không thiên địa.',
    traits:
      'Nhìn bề ngoài không khác gì phàm nhân (khí tức hoàn toàn ẩn giấu). Bắt đầu lĩnh ngộ được bản chất của hư không và sự rạn nứt không gian.',
    abilities:
      'Tự do đi lại trong các kẽ nứt không gian (Hư Không Lạc Bộ), mượn lực lượng hư vô để phòng ngự hoặc xé nát chiêu thức của kẻ thù. Thọ nguyên ~5.000 năm.',
  },
  {
    name: 'Hợp Thể',
    subtitle: 'Thân Hồn Hợp Nhất',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Đưa Nguyên Thần dung nhập hoàn hảo trở lại vào Nhục Thân, đạt đến cảnh giới "Thân tức là Hồn, Hồn tức là Thân".',
    traits:
      'Nhục thân đạt tới độ cứng cáp phi phàm, không còn điểm yếu chí mạng của việc phân tách Thần - Xác.',
    abilities:
      'Ngưng tụ Pháp Tướng Thiên Địa (hóa thân khổng lồ cao hàng trăm trượng mang uy năng hủy diệt), có thể tự diễn biến ra Lĩnh Vực hoàn chỉnh riêng biệt. Thọ nguyên vạn năm.',
  },
  {
    name: 'Đại Thừa',
    subtitle: 'Viên Mãn Hạ Giới',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Toàn bộ công pháp, tâm cảnh, thể xác và pháp tắc ở thế giới phàm trần đều đã đạt tới cảnh giới cực hạn tối cao (Đại Viên Mãn).',
    traits:
      'Linh lực trong người bắt đầu tự động chuyển hóa thành Tiên Nguyên Lực. Khí tức của tu sĩ bắt đầu bị giới diện bài xích vì quá mạnh.',
    abilities:
      'Thao túng pháp tắc hoàn chỉnh của một tiểu thế giới; một ý niệm dời non lấp biển, chưởng khống quy luật sinh tử của ức vạn sinh linh hạ giới.',
  },
  {
    name: 'Độ Kiếp',
    subtitle: 'Vượt Cửa Tử Đăng Tiên',
    phase: 'ha-gioi',
    phaseLabel: 'Phàm Nhân Nghịch Mệnh',
    description:
      'Giai đoạn đón nhận Thiên Kiếp (Cửu Trọng Lôi Kiếp, Tâm Ma Kiếp) để rửa sạch phàm cốt, thử thách đạo tâm cuối cùng trước khi phi thăng.',
    traits:
      'Cực kỳ hung hiểm, "cửu tử nhất sinh". Vượt qua được thì vũ hóa phi thăng, thất bại thì nhẹ hóa thành Tán Tiên, nặng thì tro bụi tiêu tán.',
    abilities:
      'Mượn sấm sét của Thiên Đạo để rèn đúc ra Tiên Thể; xé rách màng ngăn giới diện để bước lên Tiên Giới.',
  },
  // ── GIAI ĐOẠN 2: CHÂN CHÍNH ĐẮC ĐẠO (TIÊN GIAI) ──
  {
    name: 'Chân Tiên',
    subtitle: 'Thoát Phàm Nhập Tiên',
    phase: 'tien-giai',
    phaseLabel: 'Chân Chính Đắc Đạo',
    description:
      'Đã chính thức có tên trong Tiên tịch. Hoàn toàn rũ bỏ phàm thai.',
    traits:
      'Cơ thể vận hành 100% bằng Tiên Khí / Tiên Nguyên, ngưng tụ Tiên Cách sơ cấp.',
    abilities:
      'Thọ mệnh sánh ngang trời đất ở hạ giới (vài chục vạn năm, miễn nhiễm bệnh tật, lão hóa); thi triển được Tiên Thuật chân chính.',
  },
  {
    name: 'Địa Tiên',
    subtitle: 'Đạo Căn Thổ Nhưỡng',
    phase: 'tien-giai',
    phaseLabel: 'Chân Chính Đắc Đạo',
    description:
      'Mượn sức mạnh của Tiên Thổ, Sơn Xuyên, Địa Mạch của Tiên Giới để cắm rễ tu vi.',
    traits:
      'Tu sĩ gắn kết một phần bản mệnh với một vùng đất, địa mạch tiên cảnh; đứng trên đất của mình thì linh lực cuồn cuộn không bao giờ cạn kiệt.',
    abilities:
      'Thao túng địa từ quy tắc, "Súc Địa Thành Thốn" (thu hẹp ngàn dặm đất thành một bước chân), tạo dựng động thiên phúc địa riêng.',
  },
  {
    name: 'Thiên Tiên',
    subtitle: 'Lạc Đạo Quy Thiên',
    phase: 'tien-giai',
    phaseLabel: 'Chân Chính Đắc Đạo',
    description:
      'Thoát khỏi sự ràng buộc của mặt đất, thân thể tự do hòa vào cửu thiên mây gió của Tiên Giới.',
    traits:
      'Linh hồn thanh khiết, tản mát tiên quang rực rỡ, không còn chịu trói buộc bởi trọng lực hay địa từ quy tắc.',
    abilities:
      'Ngự hành vượt qua các tinh vực, điều động thiên phong, tiên lôi quy mô lớn; bắt đầu cảm nhận được sự vận hành của dòng chảy Thời Gian và Không Gian Tiên Giới.',
  },
  {
    name: 'Huyền Tiên',
    subtitle: 'Huyền Diệu Khôn Lường',
    phase: 'tien-giai',
    phaseLabel: 'Chân Chính Đắc Đạo',
    description:
      'Chữ "Huyền" đại diện cho sự huyền bí, thâm sâu. Bắt đầu hiểu rõ các quy luật nghịch chuyển của nhân quả và không gian đa chiều.',
    traits:
      'Đạo hạnh đạt mức thâm sâu khó lường, kẻ dưới nhìn vào chỉ thấy như một màn sương mù huyền ảo, không cách nào đoán định được thực lực.',
    abilities:
      'Có khả năng can thiệp nhẹ vào Nhân Quả, ngưng tụ được "Huyền Quang Hộ Thể" vạn pháp bất xâm, bẻ cong không gian xung quanh để miễn nhiễm các đòn đánh vật lý/tiên thuật cấp thấp.',
  },
  {
    name: 'Kim Tiên',
    subtitle: 'Bất Hủ Chi Thân',
    phase: 'tien-giai',
    phaseLabel: 'Chân Chính Đắc Đạo',
    description:
      '"Kim" ở đây là bất hoại, vĩnh cửu. Đạt tới quả vị Bất Hủ Cảnh.',
    traits:
      'Đúc thành Bất Diệt Kim Thân, linh hồn hóa thành Kim Tiên Chi Hồn. Dù bị chặt thành muôn mảnh hay đánh nát thành tro, chỉ cần một giọt máu hay một ý niệm còn sót lại vẫn có thể tái sinh hoàn chỉnh.',
    abilities:
      'Miễn nhiễm với sự ăn mòn của thời gian thông thường; thọ nguyên vô hạn (trừ khi bị giết bởi thực thể mạnh hơn), xé rách các rào cản tinh hà chỉ bằng một quyền.',
  },
  // ── GIAI ĐOẠN 3: ĐỈNH CAO CHƯ THIÊN (ĐẠI ĐẠO CHI ĐỈNH) ──
  {
    name: 'Thái Ất Kim Tiên',
    subtitle: 'Siêu Việt Thời Không',
    phase: 'dai-dao',
    phaseLabel: 'Đỉnh Cao Chư Thiên',
    description:
      '"Thái Ất" là sự tinh thuần và tự do tuyệt đối. Cắt đứt sợi xích ràng buộc của Dòng Sông Thời Gian (Vận Mệnh Trường Hà).',
    traits:
      'Ý thức thoát ly khỏi dòng chảy thời gian đơn hướng. Quá khứ, hiện tại và tương lai của bản thân bắt đầu hội tụ lại làm một điểm.',
    abilities:
      'Bước chân vào Dòng Sông Thời Gian; kẻ thù không thể giết chết họ ở quá khứ hay tương lai; một cái phất tay có thể phong tỏa thời gian của cả một hệ sao.',
  },
  {
    name: 'Đại La Kim Tiên',
    subtitle: 'Nhất Niệm Vạn Pháp',
    phase: 'dai-dao',
    phaseLabel: 'Đỉnh Cao Chư Thiên',
    description:
      '"Đại La" tức là vô tận, bao la, tối cao. Đây là cảnh giới Đỉnh Phong của Tiên Đạo truyền thống.',
    traits:
      'Tụ Tam Hoa (tinh - khí - thần), Ngũ Khí Triều Nguyên. Vĩnh viễn không bao giờ rơi vào luân hồi, tự do tự tại giữa các vũ trụ, chư thiên vạn giới đều phải xưng tụng tôn hiệu.',
    abilities:
      'Đạt đến cảnh giới "Vô Sở Bất Tri, Vô Sở Bất Năng" ở cấp độ tiểu vũ trụ; nắm giữ trọn vẹn nhiều đầu nguồn Pháp Tắc hoàn chỉnh; lời nói ra hóa thành chân lý (Khẩu Xuất Tùy Pháp).',
  },
  {
    name: 'Đạo Nguyên',
    subtitle: 'Khởi Nguồn Vạn Đạo',
    phase: 'dai-dao',
    phaseLabel: 'Đỉnh Cao Chư Thiên',
    description:
      'Vượt qua việc "hiểu và sử dụng Pháp Tắc", bắt đầu chạm tới và kiểm soát Bản Nguyên (Origin) của vũ trụ.',
    traits:
      'Tự bản thân tu sĩ trở thành một nhánh cội nguồn của Đạo. Nếu kẻ đó ngộ ra "Hỏa Đạo Nguyên", thì tất cả ngọn lửa trong đa vũ trụ đều chịu sự chi phối và tôn kẻ đó làm tổ tiên.',
    abilities:
      'Tự mình tạo ra những quy tắc hoàn toàn mới chưa từng tồn tại trong Thiên Đạo; có khả năng kiến tạo ra các đại thế giới hoàn chỉnh với quy luật vật lý/tiên đạo riêng biệt.',
  },
  {
    name: 'Hỗn Nguyên',
    subtitle: 'Hỗn Nguyên Đại La Kim Tiên',
    phase: 'dai-dao',
    phaseLabel: 'Đỉnh Cao Chư Thiên',
    description:
      'Đỉnh cao tối thượng của toàn bộ hệ thống. Trở về trạng thái Hỗn Độn sơ khai trước khi trời đất phân định. Ký thác Chân Linh vào Đại Đạo / Thiên Đạo.',
    traits:
      'Đại diện cho chính Vũ Trụ và Đạo Căn. Trời đất sụp đổ họ không chết, Kỷ nguyên hủy diệt (Lượng Kiếp) họ không tan. Nhìn vạn vật hưng thịnh hay suy tàn chỉ như một giấc mộng thoảng qua.',
    abilities:
      'Bất Diệt Bất Hoại — Thiên Đạo còn thì họ còn. Sáng Thế & Diệt Thế — một ý niệm sinh ra hàng ức vạn vũ trụ, một cái chớp mắt hủy diệt toàn bộ chư thiên vạn giới trở về cõi hư vô. Đứng ngoài mọi nhân quả, số phận, luân hồi và quy tắc.',
  },
];
