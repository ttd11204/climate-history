"use client";
import React, { useRef, useState, useEffect, FC } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- TYPE DEFINITIONS ---
interface IntroPoint {
  title: string;
  description: string;
}
interface CarouselItem {
  src: string;
  caption: string;
}
interface IntroSectionData {
  id: string;
  title: string;
  subtitle: string;
  similarities: IntroPoint[];
  differences: IntroPoint[];
}
interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType;
  content: IntroPoint[];
  summary: string;
  carouselItems?: CarouselItem[];
}
interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

// --- ICONS ---
const EconomyIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />{" "}
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /> <path d="M12 18V6" />{" "}
  </svg>
);
const PoliticsIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M21 6l-5.33 5.33-4-4L3 16" /> <path d="M15 6h6v6" />{" "}
    <path d="M3 10v6h6" />{" "}
  </svg>
);
const CultureIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />{" "}
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />{" "}
  </svg>
);
const PlayIcon: FC = () => (
  <svg height="24" width="24" viewBox="0 0 384 512">
    {" "}
    <path
      fill="currentColor"
      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    />{" "}
  </svg>
);
const PauseIcon: FC = () => (
  <svg height="24" width="24" viewBox="0 0 320 512">
    {" "}
    <path
      fill="currentColor"
      d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    />{" "}
  </svg>
);
const CheckCircleIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />{" "}
    <path d="M22 4 12 14.01l-3-3" />{" "}
  </svg>
);
const XCircleIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <circle cx="12" cy="12" r="10" /> <path d="m15 9-6 6" />{" "}
    <path d="m9 9 6 6" />{" "}
  </svg>
);
const ChevronRightIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polyline points="9 18 15 12 9 6"></polyline>{" "}
  </svg>
);
const ChevronLeftIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polyline points="15 18 9 12 15 6"></polyline>{" "}
  </svg>
);

// --- DATA ---
const introSectionData: IntroSectionData = {
  id: "gccn-hien-nay",
  title: "Giai cấp công nhân hiện nay",
  subtitle: "So sánh giữa thế kỷ XIX và bối cảnh đương đại",
  similarities: [
    {
      title: "Địa vị kinh tế - xã hội",
      description:
        'Về cơ bản, họ vẫn là tầng lớp "vô sản", không sở hữu tư liệu sản xuất chủ yếu của xã hội, buộc phải bán sức lao động để kiếm sống.',
    },
    {
      title: "Đối tượng bị bóc lột",
      description:
        "Dù hình thức có tinh vi hơn, GCCN vẫn là đối tượng chính của sự bóc lột giá trị thặng dư - bản chất cốt lõi của chủ nghĩa tư bản.",
    },
    {
      title: "Lực lượng sản xuất hàng đầu",
      description:
        "Là chủ thể trực tiếp của quá trình sản xuất công nghiệp, tạo ra phần lớn của cải vật chất và là động lực cho sự phát triển xã hội.",
    },
    {
      title: "Sứ mệnh lịch sử",
      description:
        "Mục tiêu lật đổ chế độ tư bản, xóa bỏ áp bức bóc lột, xây dựng xã hội xã hội chủ nghĩa và cộng sản chủ nghĩa vẫn là sứ mệnh cốt lõi.",
    },
  ],
  differences: [
    {
      title: "Xu hướng trí tuệ hóa",
      description:
        '"Công nhân áo xanh" dần được thay thế bởi "công nhân áo trắng" có trình độ cao, vận hành công nghệ phức tạp.',
    },
    {
      title: 'Xu hướng "trung lưu hóa"',
      description:
        'Một bộ phận công nhân có thu nhập cao, sở hữu cổ phần, tạo nên tầng lớp "trung lưu", làm phức tạp thêm nhận thức về đấu tranh giai cấp.',
    },
    {
      title: "Đa dạng hóa cơ cấu",
      description:
        "Sự bùng nổ của ngành dịch vụ và công nghệ đã tạo ra nhiều loại hình công nhân mới, vượt ra ngoài khuôn khổ nhà máy truyền thống.",
    },
    {
      title: "Bối cảnh cách mạng 4.0",
      description:
        "Toàn cầu hóa và tự động hóa đặt ra những thách thức mới về việc làm, đồng thời tạo điều kiện để GCCN đoàn kết trên quy mô quốc tế.",
    },
  ],
};
const missionSections: SectionData[] = [
  {
    id: "kinh-te-xa-hoi",
    title: "2.1",
    subtitle: "Về nội dung kinh tế - xã hội",
    icon: EconomyIcon,
    summary:
      "Là nhiệm vụ nền tảng, GCCN phải là lực lượng đi đầu trong việc xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội.",
    content: [
      {
        title: "Nâng cao năng suất lao động",
        description:
          "Đi đầu trong việc áp dụng khoa học - công nghệ, phát huy sáng kiến để tạo ra năng suất lao động cao hơn chủ nghĩa tư bản.",
      },
      {
        title: "Xác lập chế độ công hữu",
        description:
          "Tổ chức lại nền sản xuất, từng bước xác lập chế độ công hữu về tư liệu sản xuất, đảm bảo sản xuất phục vụ lợi ích chung.",
      },
      {
        title: "Phân phối công bằng",
        description:
          "Xây dựng nguyên tắc phân phối theo lao động là chủ đạo, đồng thời đảm bảo an sinh xã hội, phúc lợi cho mọi người dân.",
      },
    ],
  },
  {
    id: "chinh-tri-xa-hoi",
    title: "2.2",
    subtitle: "Về nội dung chính trị - xã hội",
    icon: PoliticsIcon,
    summary:
      "Giành và giữ vững vai trò lãnh đạo, xây dựng một nền dân chủ thực sự cho nhân dân.",
    carouselItems: [
      {
        src: "https://substackcdn.com/image/fetch/$s_!2No7!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F42fd1280-5f6d-462c-a553-5eb37f517ddb_1400x788.jpeg",
        caption:
          'Phong trào "Chiếm lấy Wall Street" (2011) phản kháng chống lại bất bình đẳng kinh tế.',
      },
      {
        src: "/podcast/dinhcong.jpg",
        caption:
          "Các cuộc đình công của công nhân ngành ô tô tại Mỹ đòi tăng lương và cải thiện điều kiện làm việc.",
      },
      {
        src: "/podcast/cuba.jpeg",
        caption:
          "Nhân dân Cuba tham gia xây dựng và bảo vệ chính quyền xã hội chủ nghĩa.",
      },
    ],
    content: [
      {
        title: "Giữ vững vai trò lãnh đạo của Đảng",
        description:
          "Thông qua Đảng Cộng sản, giai cấp công nhân thực hiện sự lãnh đạo đối với nhà nước và toàn xã hội.",
      },
      {
        title: "Xây dựng nhà nước pháp quyền XHCN",
        description:
          'Củng cố và hoàn thiện nhà nước "của dân, do dân, vì dân".',
      },
      {
        title: "Xây dựng khối liên minh vững chắc",
        description:
          "Củng cố khối liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức.",
      },
    ],
  },
  {
    id: "van-hoa-tu-tuong",
    title: "2.3",
    subtitle: "Về nội dung văn hóa, tư tưởng",
    icon: CultureIcon,
    summary:
      "Thực hiện cuộc cách mạng trên lĩnh vực tinh thần, xây dựng nền văn hóa và con người mới xã hội chủ nghĩa.",
    carouselItems: [
      {
        src: "/podcast/hocvu.jpeg",
        caption:
          'Các lớp học "bình dân học vụ" sau Cách mạng Tháng Tám ở Việt Nam là minh chứng cho việc nâng cao dân trí.',
      },
      {
        src: "/podcast/xaydung.jpeg",
        caption:
          "Xây dựng các nhà văn hóa, thư viện cộng đồng góp phần nâng cao đời sống tinh thần cho người lao động.",
      },
      {
        src: "/podcast/codong.jpeg",
        caption:
          "Nghệ thuật cổ động được sử dụng để truyền bá lý tưởng và xây dựng tinh thần tập thể.",
      },
    ],
    content: [
      {
        title: "Củng cố hệ tư tưởng Mác-Lênin",
        description:
          "Xây dựng và bảo vệ nền tảng tư tưởng của Đảng, đấu tranh chống lại các quan điểm sai trái, thù địch.",
      },
      {
        title: "Xây dựng nền văn hóa tiên tiến",
        description:
          "Xây dựng nền văn hóa có nội dung xã hội chủ nghĩa và tính dân tộc sâu sắc, tiếp thu tinh hoa văn hóa nhân loại.",
      },
      {
        title: "Kiến tạo con người mới",
        description:
          "Giáo dục, rèn luyện để hình thành con người mới có lý tưởng cách mạng, đạo đức trong sạch, có tri thức và năng lực làm chủ.",
      },
    ],
  },
];
const quizQuestions: QuizQuestion[] = [
  {
    question:
      "Đâu là ĐIỂM TƯƠNG ĐỒNG CỐT LÕI nhất của GCCN thế kỷ XIX và GCCN hiện đại?",
    options: [
      "Mức sống và thu nhập.",
      "Địa vị không sở hữu tư liệu sản xuất.",
      "Trình độ học vấn và kỹ năng.",
      "Môi trường làm việc quốc tế.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Địa vị kinh tế - xã hội là điểm tương đồng bản chất nhất, vì nó quyết định việc họ phải bán sức lao động và là đối tượng của sự bóc lột.",
  },
  {
    question:
      "Nhiệm vụ NỀN TẢNG, quyết định sự thắng lợi của chế độ mới trong sứ mệnh của GCCN là gì?",
    options: [
      "Nội dung chính trị - xã hội.",
      "Nội dung văn hóa, tư tưởng.",
      "Nội dung kinh tế - xã hội.",
      "Nội dung quốc phòng - an ninh.",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Kinh tế là cơ sở vật chất. Năng suất lao động là yếu tố quan trọng nhất cho sự thắng lợi của trật tự xã hội mới.",
  },
  {
    question:
      'Xu hướng "trung lưu hóa" trong GCCN hiện đại dẫn đến hệ quả nào?',
    options: [
      "Tăng cường tinh thần đấu tranh giai cấp.",
      "Khiến nhận thức về vị trí giai cấp trở nên phức tạp hơn.",
      "Xóa bỏ hoàn toàn sự bóc lột của chủ nghĩa tư bản.",
      "Làm giảm trình độ chung của công nhân.",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Việc một bộ phận công nhân có đời sống khá giả hơn có thể làm họ tạm hài lòng, làm phức tạp nhận thức về sự đối kháng giai cấp.",
  },
  {
    question:
      "Mục tiêu cuối cùng và cao cả nhất của nội dung văn hóa, tư tưởng là gì?",
    options: [
      "Phê phán các hệ tư tưởng lỗi thời.",
      "Nâng cao dân trí và xóa mù chữ.",
      "Kế thừa và phát huy văn hóa dân tộc.",
      "Xây dựng con người mới phát triển toàn diện.",
    ],
    correctAnswerIndex: 3,
    explanation:
      "Tất cả các nhiệm vụ khác đều nhằm hướng tới mục tiêu cuối cùng là giải phóng và phát triển con người một cách toàn diện.",
  },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};
const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// --- HELPER FUNCTIONS & COMPONENTS ---
const wrap = (min: number, max: number, v: number): number => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ImageCarousel: FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex = wrap(0, items.length, page);
  const paginate = (newDirection: number) => {
    setPage((prev) => [prev[0] + newDirection, newDirection]);
  };
  useEffect(() => {
    const autoplay = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(autoplay);
  }, []);
  return (
    <div className="relative aspect-video w-full h-full flex items-center justify-center rounded-lg shadow-2xl overflow-hidden border-4 border-stone-700/50 bg-stone-900">
      {" "}
      <AnimatePresence initial={false} custom={direction}>
        {" "}
        <motion.img
          key={page}
          src={items[imageIndex].src}
          custom={direction}
          variants={carouselVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full object-cover grayscale-[30%] contrast-125"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/800x450/2a2a2a/999999?text=Image+Error";
          }}
        />{" "}
      </AnimatePresence>{" "}
      {/* <div
        onClick={() => paginate(-1)}
      >
        {" "}
        <ChevronLeftIcon />{" "}
      </div>{" "}
      <div
        onClick={() => paginate(1)}
      >
        {" "}
        <ChevronRightIcon />{" "}
      </div>{" "} */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/80 to-transparent">
        {" "}
        <AnimatePresence mode="wait">
          {" "}
          <motion.p
            key={items[imageIndex].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-center text-sm"
          >
            {" "}
            {items[imageIndex].caption}{" "}
          </motion.p>{" "}
        </AnimatePresence>{" "}
      </div>{" "}
    </div>
  );
};
const PodcastPlayer: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
  };
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <motion.div
      className="bg-stone-800/60 backdrop-blur-md border border-stone-700 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-2xl shadow-stone-950/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      {" "}
      <audio
        ref={audioRef}
        src="/podcast/podcast.mp4"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />{" "}
      <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center border-4 border-stone-700 shadow-lg">
        {" "}
        <motion.div
          className="w-full h-full bg-black rounded-full flex items-center justify-center"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {" "}
          <div
            className="w-28 h-28 md:w-36 md:h-36 bg-cover bg-center rounded-full"
            style={{
              backgroundImage:
                "url('https://placehold.co/150x150/CD5C5C/FFFFFF?text=Podcast&font=serif')",
            }}
          >
            {" "}
            <div className="w-full h-full bg-black/20 rounded-full flex items-center justify-center">
              {" "}
              <div className="w-8 h-8 bg-stone-200 rounded-full border-4 border-stone-800"></div>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
      <div className="w-full">
        {" "}
        <h3 className="text-2xl md:text-3xl font-bold text-stone-100">
          {" "}
          PODCAST{" "}
        </h3>{" "}
        <p className="text-stone-300 mb-4 text-lg">
          Phân tích Sứ mệnh Lịch sử
        </p>{" "}
        <div className="flex gap-2 mb-4">
          {" "}
          <span className="bg-stone-700 text-stone-300 text-xs font-semibold px-3 py-1 rounded-full">
            {" "}
            Chủ nghĩa xã hội{" "}
          </span>{" "}
          <span className="bg-stone-700 text-stone-300 text-xs font-semibold px-3 py-1 rounded-full">
            {" "}
            Lịch sử{" "}
          </span>{" "}
        </div>{" "}
        <div className="bg-stone-900/50 rounded-lg p-3 flex items-center gap-4">
          {" "}
          <button
            onClick={handlePlayPause}
            className="text-stone-200 hover:text-amber-300 transition-colors"
          >
            {" "}
            {isPlaying ? <PauseIcon /> : <PlayIcon />}{" "}
          </button>{" "}
          <div className="w-full flex items-center gap-2">
            {" "}
            <span className="text-xs text-stone-400">
              {" "}
              {formatTime(currentTime)}{" "}
            </span>{" "}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-stone-600 rounded-lg appearance-none cursor-pointer range-sm"
            />{" "}
            <span className="text-xs text-stone-400">
              {" "}
              {formatTime(duration)}{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
};
const ModernWorkerSection: FC<{ data: IntroSectionData }> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<"similarities" | "differences">(
    "similarities"
  );
  const content =
    activeTab === "similarities" ? data.similarities : data.differences;
  return (
    <motion.section
      id={data.id}
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {" "}
      <motion.div variants={itemVariants} className="text-center mb-12">
        {" "}
        <h2
          className="text-4xl md:text-5xl font-bold text-amber-100/95 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {" "}
          {data.title}{" "}
        </h2>{" "}
        <p className="text-lg text-stone-400">{data.subtitle}</p>{" "}
      </motion.div>{" "}
      <motion.div variants={itemVariants} className="flex justify-center mb-12">
        {" "}
        <div className="bg-stone-800/50 border border-stone-700 rounded-full p-1.5 flex gap-2">
          {" "}
          <button
            onClick={() => setActiveTab("similarities")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "similarities"
                ? "bg-amber-400 text-stone-900"
                : "text-stone-300 hover:bg-stone-700/50"
            }`}
          >
            {" "}
            Điểm tương đồng{" "}
          </button>{" "}
          <button
            onClick={() => setActiveTab("differences")}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "differences"
                ? "bg-amber-400 text-stone-900"
                : "text-stone-300 hover:bg-stone-700/50"
            }`}
          >
            {" "}
            Biến đổi & Khác biệt{" "}
          </button>{" "}
        </div>{" "}
      </motion.div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {" "}
        <AnimatePresence mode="wait">
          {" "}
          {content.map((item, index) => (
            <motion.div
              key={activeTab + index}
              className="bg-gradient-to-br from-stone-800 to-stone-800/70 p-6 rounded-xl border border-stone-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {" "}
              <h4 className="font-bold text-lg text-amber-200/95 mb-2">
                {" "}
                {item.title}{" "}
              </h4>{" "}
              <p className="text-stone-300 leading-relaxed text-sm">
                {" "}
                {item.description}{" "}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </AnimatePresence>{" "}
      </div>{" "}
    </motion.section>
  );
};
const EconomicSection: FC<{ section: SectionData }> = ({ section }) => {
  return (
    <motion.section
      id={section.id}
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {" "}
      <motion.div variants={itemVariants} className="text-center mb-12">
        {" "}
        <h3 className="text-2xl font-semibold text-amber-100/90 tracking-wide">
          {" "}
          {section.subtitle}{" "}
        </h3>{" "}
        <p className="mt-2 text-stone-400 italic max-w-2xl mx-auto">
          {" "}
          {section.summary}{" "}
        </p>{" "}
      </motion.div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {" "}
        {section.content.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-stone-800/50 p-6 rounded-lg border border-stone-700 text-center hover:bg-stone-800 transition-colors"
          >
            {" "}
            <div className="mx-auto bg-amber-300/20 text-amber-300 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
              {" "}
              <EconomyIcon />{" "}
            </div>{" "}
            <h4 className="font-bold text-lg text-amber-200/95 mb-2">
              {" "}
              {item.title}{" "}
            </h4>{" "}
            <p className="text-stone-300 leading-relaxed text-sm">
              {" "}
              {item.description}{" "}
            </p>{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </motion.section>
  );
};
const QuizSection: FC<{ questions: QuizQuestion[] }> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const handleAnswerSelect = (index: number) => {
    if (selectedAnswerIndex !== null) return;
    setSelectedAnswerIndex(index);
    const correct =
      index === questions[currentQuestionIndex].correctAnswerIndex;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };
  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center bg-stone-800/50 border border-stone-700 rounded-2xl p-8"
      >
        {" "}
        <h3 className="text-3xl font-bold text-amber-200 mb-4">
          {" "}
          Hoàn thành!{" "}
        </h3>{" "}
        <p className="text-lg text-stone-300 mb-6">
          {" "}
          Bạn đã trả lời đúng{" "}
          <span className="font-bold text-amber-400 text-xl">
            {score}
          </span> /{" "}
          <span className="font-bold text-xl">{questions.length}</span> câu.{" "}
        </p>{" "}
        <button
          onClick={handleRestart}
          className="bg-amber-400 text-stone-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-all duration-300 transform hover:scale-105"
        >
          {" "}
          Làm lại{" "}
        </button>{" "}
      </motion.div>
    );
  }
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {" "}
      <div className="text-center mb-12">
        {" "}
        <h2
          className="text-4xl md:text-5xl font-bold text-amber-100/95 mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {" "}
          Kiểm tra kiến thức{" "}
        </h2>{" "}
        <p className="text-lg text-stone-400">
          {" "}
          Cùng ôn lại những nội dung chính đã tìm hiểu.{" "}
        </p>{" "}
      </div>{" "}
      <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 min-h-[30rem] flex flex-col justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-stone-400 mb-2">
            {" "}
            Câu hỏi {currentQuestionIndex + 1}/{questions.length}{" "}
          </p>{" "}
          <AnimatePresence mode="wait">
            {" "}
            <motion.h4
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-semibold text-stone-100 mb-8"
            >
              {" "}
              {currentQuestion.question}{" "}
            </motion.h4>{" "}
          </AnimatePresence>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {" "}
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswerIndex === index;
              const isCorrectAnswer =
                index === currentQuestion.correctAnswerIndex;
              let buttonClass = "bg-stone-700/50 hover:bg-stone-700";
              if (selectedAnswerIndex !== null) {
                if (isSelected) {
                  buttonClass = isCorrect ? "bg-green-500/80" : "bg-red-500/80";
                } else if (isCorrectAnswer) {
                  buttonClass = "bg-green-500/80";
                } else {
                  buttonClass = "bg-stone-700/50 opacity-50";
                }
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswerIndex !== null}
                  className={`p-4 rounded-lg text-left transition-all duration-300 ${buttonClass}`}
                >
                  {" "}
                  {option}{" "}
                </button>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
        <AnimatePresence>
          {" "}
          {selectedAnswerIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 pt-6 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              {" "}
              <div>
                {" "}
                <p
                  className={`flex items-center gap-2 font-bold ${
                    isCorrect ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {" "}
                  {isCorrect ? <CheckCircleIcon /> : <XCircleIcon />}{" "}
                  {isCorrect ? "Chính xác!" : "Chưa chính xác."}{" "}
                </p>{" "}
                <p className="text-stone-400 text-sm mt-1">
                  {" "}
                  {currentQuestion.explanation}{" "}
                </p>{" "}
              </div>{" "}
              <button
                onClick={handleNext}
                className="bg-amber-400 text-stone-900 font-bold py-3 px-8 rounded-full hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 w-full md:w-auto flex-shrink-0"
              >
                {" "}
                {currentQuestionIndex < questions.length - 1
                  ? "Câu tiếp theo"
                  : "Xem kết quả"}{" "}
              </button>{" "}
            </motion.div>
          )}{" "}
        </AnimatePresence>{" "}
      </div>{" "}
    </motion.div>
  );
};
const PoliticalSection: FC<{ section: SectionData }> = ({ section }) => (
  <motion.section
    id={section.id}
    className="py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    {" "}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {" "}
      <motion.div variants={itemVariants}>
        {" "}
        <h3 className="text-2xl font-semibold text-amber-100/90 tracking-wide">
          {" "}
          {section.subtitle}{" "}
        </h3>{" "}
        <p className="mt-2 text-stone-400 italic mb-8">{section.summary}</p>{" "}
        <div className="space-y-6 border-l-2 border-amber-300/30 pl-6">
          {" "}
          {section.content.map((item, index) => (
            <div key={index}>
              {" "}
              <h4 className="font-bold text-lg text-amber-200/95">
                {" "}
                {item.title}{" "}
              </h4>{" "}
              <p className="text-stone-300 leading-relaxed">
                {" "}
                {item.description}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </motion.div>{" "}
      <motion.div variants={itemVariants}>
        {" "}
        {section.carouselItems && (
          <ImageCarousel items={section.carouselItems} />
        )}{" "}
      </motion.div>{" "}
    </div>{" "}
  </motion.section>
);
const CulturalSection: FC<{ section: SectionData }> = ({ section }) => (
  <motion.section
    id={section.id}
    className="py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    {" "}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {" "}
      <motion.div variants={itemVariants} className="lg:order-last">
        {" "}
        <h3 className="text-2xl font-semibold text-amber-100/90 tracking-wide">
          {" "}
          {section.subtitle}{" "}
        </h3>{" "}
        <p className="mt-2 text-stone-400 italic mb-8">{section.summary}</p>{" "}
        <div className="space-y-6 border-l-2 border-amber-300/30 pl-6">
          {" "}
          {section.content.map((item, index) => (
            <div key={index}>
              {" "}
              <h4 className="font-bold text-lg text-amber-200/95">
                {" "}
                {item.title}{" "}
              </h4>{" "}
              <p className="text-stone-300 leading-relaxed">
                {" "}
                {item.description}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </motion.div>{" "}
      <motion.div variants={itemVariants} className="lg:order-first">
        {" "}
        {section.carouselItems && (
          <ImageCarousel items={section.carouselItems} />
        )}{" "}
      </motion.div>{" "}
    </div>{" "}
  </motion.section>
);
const headerLines = ["Sứ mệnh Lịch sử của", "Giai cấp Công nhân"];

const MissionPage: FC = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [bgVisible, setBgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBgVisible(true);
      setTimeout(() => setTextVisible(true), 1200);
    }, 200);
  }, []);
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap'); body { background-color: #1c1917; } input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; background: #fcd34d; border-radius: 50%; cursor: pointer; margin-top: -7px; transition: background-color 0.2s; } input[type="range"]::-webkit-slider-thumb:hover { background: #fbbf24; } input[type="range"]::-moz-range-thumb { width: 16px; height: 16px; background: #fcd34d; border-radius: 50%; cursor: pointer; }`}</style>
      <main
        ref={scrollRef}
        className="bg-[#1c1917] text-stone-200 min-h-screen font-sans relative z-10"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div>
          <header
            className="text-center h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
            style={{
              backgroundImage:
                "linear-gradient(rgba(28, 25, 23, 0.8), rgba(28, 25, 23, 1)), url('/podcast/main_bg@2x.webp')",
            }}
          >
            {/* Overlay fade-in effect */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: bgVisible ? 0 : 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                background: "#111",
                zIndex: 2,
              }}
            />
            <div style={{ position: "relative", zIndex: 3 }}>
              {headerLines.map((line, idx) => (
                <motion.h1
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: textVisible ? idx * 0.5 : 0,
                    ease: "easeOut",
                  }}
                  className="text-5xl md:text-7xl font-bold text-amber-100/95 mb-2 leading-tight px-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {line}
                </motion.h1>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.8,
                delay: textVisible ? 1.2 : 0,
                ease: "easeOut",
              }}
              className="text-lg text-stone-400 max-w-2xl px-6"
              style={{ position: "relative", zIndex: 3 }}
            >
              Khám phá nội dung, vai trò và những biến đổi của giai cấp công
              nhân trong bối cảnh đương đại.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                textVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.8,
                delay: textVisible ? 1.7 : 0,
                ease: "easeOut",
              }}
              className="w-40 h-0.5 bg-amber-200/40 mx-auto mt-8"
              style={{ position: "relative", zIndex: 3 }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 text-stone-500 animate-bounce"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ zIndex: 3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </motion.div>
          </header>
          <div className="space-y-10 max-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PodcastPlayer />
            <ModernWorkerSection data={introSectionData} />
            <div className="text-center">
              <h2
                className="text-4xl md:text-5xl font-bold text-amber-100/95 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {" "}
                Thực hiện Sứ mệnh Lịch sử{" "}
              </h2>
              <p className="text-lg text-stone-400">
                {" "}
                Các nội dung cốt lõi trên mọi lĩnh vực{" "}
              </p>
            </div>
            <EconomicSection section={missionSections[0]} />
            <PoliticalSection section={missionSections[1]} />
            <CulturalSection section={missionSections[2]} />
            <QuizSection questions={quizQuestions} />
          </div>
          <motion.footer
            className="text-center py-12 mt-24 border-t border-stone-700/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <p className="text-stone-500 text-sm">
              {" "}
              Nội dung dựa trên Giáo trình Chủ nghĩa xã hội khoa học (2021).{" "}
            </p>
            <p className="text-stone-600 text-xs mt-2">
              {" "}
              Thiết kế và phát triển bởi Trí tuệ nhân tạo.{" "}
            </p>
          </motion.footer>
        </div>
      </main>
    </>
  );
};

export default MissionPage;
