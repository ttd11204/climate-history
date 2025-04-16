'use client';
import { MaskContainer } from '@/components/ui/svg-mask-effect';

export function SVGMaskEffectDemo() {
  return (
    <div className='flex w-full items-center justify-center overflow-hidden  py-10'>
      <MaskContainer
        revealText={
          <p className='text-center text-3xl font-semibold text-gray-800 leading-relaxed mx-auto max-w-4xl'>
            Trong thời kỳ chiến tranh, nếu bạn là người lãnh đạo, bạn sẽ chọn
            tập trung phát triển
            <span className='text-red-600 font-bold'> kinh tế </span> hay tập
            trung củng cố
            <span className='text-red-600 font-bold'> chính trị</span>?
          </p>
        }
        className='h-[36rem] w-full max-w-6xl rounded-xl shadow-xl'
      >
        <p className='text-3xl text-white text-justify leading-relaxed'>
          Có nhận định cho rằng "Kinh tế phát triển thì chứng tỏ chính trị có sự
          tiến bộ nhất định; ngược lại, kinh tế khủng hoảng là dấu hiệu cho thấy
          sự bất cập của chính trị và đòi hỏi chính trị phải có sự điều chỉnh".
          Vậy tại sao trong thời kỳ chiến tranh, Đảng ta xác định, phải ưu tiên
          chính trị, kinh tế là nhân tố phục vụ cho mục tiêu chính trị?
        </p>
      </MaskContainer>
    </div>
  );
}
