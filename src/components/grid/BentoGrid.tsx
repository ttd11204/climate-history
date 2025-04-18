import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import OpenQuestion from '@/components/open-question/OpenQuestion';

export function BentoGridDemo() {
  return (
    <div className='mb-20'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold'>
          Giải quyết vấn đề đặt ra ở đầu bài
        </h1>
      </div>
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>

      <OpenQuestion />
    </div>
  );
}

const Skeleton = () => (
  <div className='flex w-full h-32 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'></div>
);

const items = [
  {
    title: 'Bối cảnh lịch sử cụ thể',
    description: `  Trong thời kỳ chiến tranh, nhiệm vụ trung tâm của đất nước là giải phóng dân tộc, giành độc lập tự do cho Tổ quốc.
  Trong hoàn cảnh ấy, chính trị (đặc biệt là nhiệm vụ chiến lược cách mạng) trở thành yếu tố quyết định đến sự tồn vong của dân tộc, do đó phải đặt lên hàng đầu.
`,
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-8 w-8 text-orange-500' />,
  },
  {
    title: 'Chính trị dẫn dắt kinh tế trong thời chiến',
    description: `Khi chiến tranh diễn ra, mọi hoạt động sản xuất, phân phối, huy động nhân lực đều phải phục vụ mục tiêu chính trị là giành thắng lợi trong cuộc kháng chiến.
  Do đó, kinh tế không thể tách rời chính trị mà cần được tổ chức, huy động theo định hướng của chính trị.

`,
    header: <Skeleton />,
    icon: <IconFileBroken className='h-8 w-8 text-orange-500' />,
  },
  {
    title: 'Vai trò lãnh đạo của Đảng và nhà nước cách mạng',
    description: `Đảng ta xác định: Muốn thắng lợi trong chiến tranh, phải có đường lối chính trị đúng. Tức là nếu chính trị được xác lập vững vàng, thì kinh tế mới có thể được huy động và tổ chức hiệu quả.
  Nếu chính trị lỏng lẻo, không ổn định, thì kinh tế dù phát triển cũng không thể đảm bảo chiến thắng chiến tranh.

`,
    header: <Skeleton />,
    icon: <IconSignature className='h-8 w-8 text-orange-500' />,
  },
  {
    title: 'Tính biện chứng của mối quan hệ kinh tế - chính trị',
    description: `Theo quan điểm của chủ nghĩa Mác – Lênin, trong những giai đoạn đặc biệt (như chiến tranh, khủng hoảng), kiến trúc thượng tầng có thể phát huy tính độc lập tương đối mạnh mẽ, tác động trực tiếp đến sự tồn tại của cơ sở hạ tầng.
  Ở Việt Nam, nếu không có sự lãnh đạo chính trị đúng đắn, thì không thể tổ chức, huy động được lực lượng toàn dân, và không thể giành thắng lợi trong kháng chiến, bất kể tiềm lực kinh tế có ra sao.
`,
    header: <Skeleton />,
    icon: <IconTableColumn className='h-8 w-8 text-orange-500' />,
  },
  {
    // title: 'Tính định hướng của chính trị đối với kinh tế',
    description: <img src='/co.jpg' alt='relationship' />,
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='h-8 w-8 text-orange-500' />,
  },
];
