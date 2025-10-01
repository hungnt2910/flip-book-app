import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

function Book() {
  const [dimensions, setDimensions] = useState({ width: 700, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // Calculate responsive dimensions
      let bookWidth, bookHeight;
      
      if (screenWidth < 640) { // mobile
        bookWidth = Math.min(screenWidth * 0.9, 350);
        bookHeight = Math.min(screenHeight * 0.6, 450);
      } else if (screenWidth < 768) { // tablet
        bookWidth = Math.min(screenWidth * 0.8, 500);
        bookHeight = Math.min(screenHeight * 0.7, 550);
      } else if (screenWidth < 1024) { // small desktop
        bookWidth = Math.min(screenWidth * 0.7, 600);
        bookHeight = Math.min(screenHeight * 0.75, 600);
      } else { // large desktop
        bookWidth = 700;
        bookHeight = 600;
      }
      
      setDimensions({ width: bookWidth, height: bookHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const pokemonData = [
    {
      id: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      description:
        "Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.",
    },
    {
      id: "025",
      name: "Pikachu",
      types: ["Electric"],
      description:
        "When Pikachu meet, they touch tails to exchange electricity as a greeting.",
    },
    {
      id: "125",
      name: "Electabuzz",
      types: ["Electric"],
      description:
        "Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.",
    },
    {
      id: "185",
      name: "Sudowoodo",
      types: ["Rock"],
      description:
        "Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.",
    },
    {
      id: "448",
      name: "Lucario",
      types: ["Fighting", "Steel"],
      description:
        "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.",
    },
    {
      id: "658",
      name: "Greninja",
      types: ["Water", "Dark"],
      description:
        "Creates throwing stars from compressed water that can slice through metal when thrown at high speed.",
    },
    {
      id: "491",
      name: "Darkrai",
      types: ["Dark"],
      description:
        "A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares.",
    },
  ];

  const bookPages = [
    {
      id: "1",
      title: "Khái niệm chung về gia đình",
      description: `Gia đình là một thiết chế xã hội đặc thù, được hình thành chủ yếu trên cơ sở hôn nhân, huyết thống hoặc quan hệ nuôi dưỡng, trong đó các thành viên gắn bó với nhau bằng tình cảm, trách nhiệm, nghĩa vụ và quyền lợi cả về vật chất lẫn tinh thần. Gia đình được coi là tế bào của xã hội, là môi trường đầu tiên và quan trọng nhất hình thành, nuôi dưỡng, giáo dục và phát triển nhân cách con người.`,
    },
    {
      id: "2",
      title: "Vai trò của gia đình",
      description: `- Tế bào của xã hội: Gia đình là đơn vị cơ bản cấu thành nên xã hội, gia đình ổn định thì xã hội phát triển bền vững.\n\n- Chức năng tái sản xuất con người: Gia đình bảo đảm sự kế tục các thế hệ, duy trì và phát triển nòi giống.\n\n- Chức năng nuôi dưỡng – giáo dục: Gia đình là nơi hình thành nhân cách, truyền thụ giá trị văn hóa, đạo đức, lối sống cho thế hệ trẻ.\n\n- Chức năng kinh tế: Gia đình là đơn vị tiêu dùng cơ bản, đồng thời tham gia lao động, sản xuất, đóng góp cho xã hội.\n\n- Chức năng tình cảm – tâm lý: Gia đình là nơi thỏa mãn nhu cầu tình cảm, tạo sự gắn kết, yêu thương, chia sẻ giữa các thành viên.\n\n- Vai trò văn hóa – xã hội: Gia đình giữ gìn và phát huy các giá trị văn hóa truyền thống, góp phần xây dựng cộng đồng bền vững, tiến bộ.`,
    },
    {
      id: "3",
      title: "So sánh: Gia đình chung và gia đình trong XHCN",
      description: (
        <div className="overflow-x-auto overflow-y-auto max-h-full">
          <table className="table-auto border-collapse border border-gray-400 w-full text-xs sm:text-sm min-w-[500px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-1 sm:px-2 py-1 text-xs sm:text-sm font-bold">Tiêu chí</th>
                <th className="border border-gray-400 px-1 sm:px-2 py-1 text-xs sm:text-sm font-bold">
                  Gia đình (khái niệm chung)
                </th>
                <th className="border border-gray-400 px-1 sm:px-2 py-1 text-xs sm:text-sm font-bold">
                  Gia đình trong xã hội chủ nghĩa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium">Nguồn gốc, hình thành</td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Xuất hiện ở mọi xã hội, dựa trên hôn nhân, huyết thống, nuôi
                  dưỡng
                </td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Hình thành trong xã hội XHCN, dựa trên hôn nhân tự nguyện, một
                  vợ một chồng, bình đẳng
                </td>
              </tr>
              <tr>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium">Bản chất quan hệ</td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Có thể chịu ảnh hưởng của phong tục, tôn giáo, giai cấp, bất
                  bình đẳng giới
                </td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Quan hệ tiến bộ, bình đẳng giới, đề cao tình yêu, trách nhiệm
                  và pháp luật
                </td>
              </tr>
              <tr>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium">Chức năng xã hội</td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Tái sản xuất con người, nuôi dưỡng – giáo dục, kinh tế, tình
                  cảm
                </td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Ngoài các chức năng chung, còn gắn với nhiệm vụ xây dựng con
                  người mới XHCN, thực hiện công bằng xã hội
                </td>
              </tr>
              <tr>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium">Giá trị chi phối</td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Có thể chứa hủ tục, bất bình đẳng, áp lực giai cấp
                </td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Đề cao dân chủ, văn minh, tiến bộ, hạnh phúc, nhân văn
                </td>
              </tr>
              <tr>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm font-medium">Vai trò xã hội</td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Tế bào của xã hội, môi trường nuôi dưỡng cá nhân
                </td>
                <td className="border px-1 sm:px-2 py-1 text-xs sm:text-sm">
                  Tế bào lành mạnh, văn minh của xã hội XHCN, góp phần hình
                  thành xã hội công bằng, dân chủ, văn minh
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "4",
      title: "Vai trò gia đình trước khi xây dựng XHCN",
      description: `- Bị chi phối bởi quan hệ giai cấp và phong kiến: Gia đình thường mang tính bất bình đẳng, đặc biệt là bất bình đẳng giới.\n\n- Chức năng kinh tế khép kín: Gia đình chủ yếu là đơn vị sản xuất tự cấp tự túc, ít liên kết với lợi ích chung.\n\n- Chức năng giáo dục hạn chế: Việc giáo dục con cái chịu ảnh hưởng tư tưởng phong kiến, củng cố sự phục tùng.\n\n- Giá trị tình cảm – xã hội: Tình cảm gắn với huyết thống, nhưng chưa gắn chặt lợi ích cộng đồng.`,
    },
    {
      id: "5",
      title: "Gia đình trong xã hội XHCN",
      description: `- Tế bào lành mạnh của xã hội mới, gắn với sự phát triển công bằng, dân chủ, văn minh.\n\n- Bình đẳng, tiến bộ, văn minh: hôn nhân tự nguyện, một vợ một chồng, nam nữ bình quyền.\n\n- Chức năng giáo dục mở rộng: tham gia hình thành con người mới XHCN.\n\n- Chức năng kinh tế gắn với xã hội: đơn vị kinh tế cơ bản trong nền kinh tế thị trường định hướng XHCN.\n\n- Giá trị tình cảm – xã hội mới: lan tỏa giá trị nhân văn, dân chủ, văn hóa XHCN.\n\nKết luận: Gia đình trở thành nền tảng tiến bộ xã hội, đào tạo con người mới, gắn lợi ích gia đình với xã hội.`,
    },
    {
      id: "6",
      title: "Liên hệ thực tiễn Việt Nam thời kỳ quá độ",
      description: `- Gia đình Việt Nam biến đổi dưới tác động công nghiệp hóa, hiện đại hóa, hội nhập.\n\n- Vẫn giữ vai trò nuôi dưỡng, giáo dục, truyền thống văn hóa – đạo đức.\n\n- Giá trị mới: hôn nhân tự nguyện, bình đẳng giới, quyền trẻ em, chăm sóc người già.\n\n- Xã hội XHCN tạo điều kiện cho gia đình phát triển qua pháp luật, an sinh, bình đẳng giới.\n\n- Gia đình nền tảng để xây dựng con người XHCN.\n\n- Thách thức: chênh lệch giàu nghèo, tệ nạn xã hội.\n\n- Ý nghĩa: xây dựng gia đình văn hóa, hạnh phúc, bình đẳng là chiến lược XHCN.`,
    },
    {
      id: "7",
      title: "CQ9.2 – Câu hỏi thảo luận",
      description: `- Sẽ ra sao nếu một xã hội có đích đến của tình yêu không phải là hôn nhân và gia đình?\nNếu tình yêu chỉ dừng lại ở quan hệ tình cảm mà không hướng đến hôn nhân – gia đình, xã hội sẽ mất đi nền tảng ổn định.\n\nGia đình là tế bào của xã hội; nếu thiếu đi chức năng tái sản xuất con người, nuôi dưỡng, giáo dục thì xã hội khó phát triển bền vững.\n\nMột xã hội chỉ có tình yêu tự do, không gắn với trách nhiệm, sẽ dẫn đến sự lỏng lẻo trong quan hệ giữa các thế hệ, giảm tính ổn định và kỷ cương xã hội.\n\n- Có phải tình yêu là mối quan hệ quan trọng nhất trong gia đình không?\nTình yêu là cơ sở quan trọng để xây dựng hôn nhân và duy trì sự gắn bó, nhưng không phải yếu tố duy nhất.\n\nGia đình còn tồn tại trên nền tảng trách nhiệm, nghĩa vụ, tình cảm huyết thống, sự chia sẻ và giáo dục.\n\nNhư vậy, tình yêu là điểm khởi đầu, nhưng sự bền vững của gia đình phụ thuộc vào tình yêu + trách nhiệm + sự gắn kết xã hội.`,
    },
    {
      id: "8",
      title: "CQ9.3 – Hope School của FPT",
      description: `- Hope School nuôi dưỡng trẻ mồ côi COVID-19.\n\n- Chức năng gia đình được thực hiện: nuôi dưỡng, giáo dục, tình cảm.\n\n- So với gia đình truyền thống, thiếu huyết thống trực tiếp, nhưng về xã hội đã thực hiện chức năng gia đình XHCN.`,
    },
    {
      id: "9",
      title: "CQ10.1 – Hôn nhân một vợ một chồng",
      description: `- Phong kiến: tồn tại nhưng không triệt để, còn đa thê.\n\n- Tư sản: đề cao nhưng gắn với pháp lý – tài sản.\n\n- XHCN: hôn nhân tự nguyện, bình đẳng giới, dân chủ, xóa bỏ chi phối giai cấp, gắn mục tiêu gia đình hạnh phúc – xã hội tiến bộ.`,
    },
    {
      id: "10",
      title: "CQ10.2 – Gia đình hạt nhân",
      description: `- Gia đình hạt nhân phát triển trong đô thị hóa.\n\n- Ưu: năng động, tự chủ.\n\n- Hạn chế: giảm gắn kết thế hệ, nguy cơ mất truyền thống.\n\n- Quan trọng: giữ gìn giá trị truyền thống trong hình thức mới.`,
    },
    {
      id: "11",
      title: "CQ10.3 – Người trẻ ngại kết hôn",
      description: `- Xu hướng thực tế do áp lực kinh tế, công việc, tự do cá nhân.\n\n- Hệ quả: giảm dân số, suy giảm vai trò giáo dục gia đình, ảnh hưởng bền vững xã hội.\n\n- Giải pháp: chính sách an sinh, hỗ trợ, bình đẳng giới để hôn nhân là hạnh phúc, không phải gánh nặng.`,
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-full p-4">
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="stretch"
        minWidth={300}
        maxWidth={700}
        minHeight={400}
        maxHeight={700}
        className="shadow-2xl"
      >
      <div className="bg-[#e5dcc5]" style={{ background: "transparent" }}>
        <div className="bg-[#fdf6e3] font-serif text-brown-900 h-full px-2 sm:px-5 flex flex-col justify-center items-center">
          <div className="text-center space-y-3 sm:space-y-6 p-4 sm:p-8">
            <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4">
              <img
                src="/family-tree-icon-with-heart.jpg"
                alt="Family tree with heart"
                className="w-[30%] h-[30%] object-contain"
              />
            </div>
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-800 leading-tight">
              Gia Đình và Xã Hội
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-blue-600 leading-relaxed">
              Khái niệm và vai trò của gia đình trong xã hội chủ nghĩa
            </p>
          </div>
        </div>
      </div>

      {bookPages.map((page) => (
        <div className="page" key={page.id}>
          <div className="bg-[#fdf6e3] font-serif text-gray-900 h-full flex flex-col px-2 sm:px-4 lg:px-6" style={{
            padding: '10px 20px',
          }}>
            {/* Title always on top */}
            <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-blue-800 mb-2 px-2 sm:px-4 py-1 sm:py-2 border-b border-gray-300" style={{
              marginBottom: "15px"
            }}>
              {page.title}
            </h2>

            {/* Scrollable content area */}
            <div className={`${page.id === "3" ? "flex justify-center items-start overflow-auto p-1 sm:p-2 lg:p-4" : "overflow-y-auto"}`} style={
              page.id === "3" ? { marginTop: '10px', height: 'calc(100% - 50px)' } : { height: 'calc(100% - 50px)' }
            }>
              {page.id === "3" ? (
                page.description
              ) : (
                <p className="text-xs sm:text-sm lg:text-base text-gray-700 whitespace-pre-line leading-relaxed">
                  {page.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Book;
