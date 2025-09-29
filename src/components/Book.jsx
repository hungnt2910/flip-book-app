import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

function Book() {
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
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-2 py-1">Tiêu chí</th>
                <th className="border border-gray-400 px-2 py-1">
                  Gia đình (khái niệm chung)
                </th>
                <th className="border border-gray-400 px-2 py-1">
                  Gia đình trong xã hội chủ nghĩa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Nguồn gốc, hình thành</td>
                <td className="border px-2 py-1">
                  Xuất hiện ở mọi xã hội, dựa trên hôn nhân, huyết thống, nuôi
                  dưỡng
                </td>
                <td className="border px-2 py-1">
                  Hình thành trong xã hội XHCN, dựa trên hôn nhân tự nguyện, một
                  vợ một chồng, bình đẳng
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Bản chất quan hệ</td>
                <td className="border px-2 py-1">
                  Có thể chịu ảnh hưởng của phong tục, tôn giáo, giai cấp, bất
                  bình đẳng giới
                </td>
                <td className="border px-2 py-1">
                  Quan hệ tiến bộ, bình đẳng giới, đề cao tình yêu, trách nhiệm
                  và pháp luật
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Chức năng xã hội</td>
                <td className="border px-2 py-1">
                  Tái sản xuất con người, nuôi dưỡng – giáo dục, kinh tế, tình
                  cảm
                </td>
                <td className="border px-2 py-1">
                  Ngoài các chức năng chung, còn gắn với nhiệm vụ xây dựng con
                  người mới XHCN, thực hiện công bằng xã hội
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Giá trị chi phối</td>
                <td className="border px-2 py-1">
                  Có thể chứa hủ tục, bất bình đẳng, áp lực giai cấp
                </td>
                <td className="border px-2 py-1">
                  Đề cao dân chủ, văn minh, tiến bộ, hạnh phúc, nhân văn
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Vai trò xã hội</td>
                <td className="border px-2 py-1">
                  Tế bào của xã hội, môi trường nuôi dưỡng cá nhân
                </td>
                <td className="border px-2 py-1">
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
      description: `- Nếu tình yêu không hướng đến hôn nhân – gia đình, xã hội mất nền tảng ổn định.\n\n- Thiếu tái sản xuất, nuôi dưỡng, giáo dục thì xã hội khó phát triển.\n\n- Tình yêu tự do không gắn trách nhiệm → quan hệ thế hệ lỏng lẻo.\n\n- Tình yêu có vai trò quan trọng nhưng không phải duy nhất; gia đình còn dựa trên trách nhiệm, nghĩa vụ, huyết thống, chia sẻ.`,
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
    <HTMLFlipBook
      width={700}
      height={700}
      maxShadowOpacity={0.5}
      drawShadow={true}
      showCover={true}
      size="fixed"
    >
      <div className="bg-[#e5dcc5]" style={{ background: "transparent" }}>
        <div className="bg-[#fdf6e3] font-serif text-brown-900 h-full px-5 flex flex-col justify-center items-center">
          <div className="text-center space-y-6 p-8">
            <div className="w-10 h-10 mx-auto mb-4">
              <img
                src="/family-tree-icon-with-heart.jpg"
                alt="Family tree with heart"
                className="w-[50%] h-[50%]"
              />
            </div>
            <h1 className="text-2xl font-bold text-blue-800">
              Gia Đình và Xã Hội
            </h1>
            <p className="text-lg text-blue-600">
              Khái niệm và vai trò của gia đình trong xã hội chủ nghĩa
            </p>
          </div>
        </div>
      </div>

      {bookPages.map((page) => (
        <div className="page" key={page.id}>
          <div className="bg-[#fdf6e3] font-serif text-gray-900 h-full flex flex-col px-10" style={{
            padding: '20px',
          }}>
            {/* Title always on top */}
            <h2 className="text-xl font-bold text-blue-800 mb-2 px-4 py-2 border-b border-gray-300" style={{
              marginBottom: "20px"
            }}>
              {page.title}
            </h2>

            {/* Scrollable content area */}
            <div className={`${page.id === "3" ? "flex justify-center items-center overflow-auto p-4" : ""}`} style={
              page.id === "3" ? { marginTop: '60px' } : { height: 'calc(100% - 60px)' }
            }>
              {page.id === "3" ? (
                page.description
              ) : (
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {page.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book;
