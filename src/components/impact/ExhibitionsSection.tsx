import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImpactCard from './ImpactCard';

const impacts = [
  {
    id: 1,
    title: 'Vì sao tác động trở lại?',
    content: [
      'Do tính độc lập tương đối của KTTT, tính năng động, sáng tạo của ý thức, tinh thần.',
      'Do vai trò sức mạnh vật chất của bộ máy tổ chức - thể chế',
    ],
    imageSrc: '/impact/info.jpg',
  },
  {
    id: 2,
    title: 'Nội dung của tác động trở lại',
    content: [
      'Củng cố, hoàn thiện và bảo vệ CSHT sinh ra nó, thực chất là bảo vệ lợi ích kinh tế của giai cấp',
      'Ngăn chặn CSHT mới, xóa bỏ tàn dư CSHT cũ',
      'Định hướng, tổ chức, xây dựng chế độ kinh tế',
    ],
    imageSrc: '/impact/question.jpg',
  },
  {
    id: 3,
    title: 'Phương thức tác động trở lại',
    content: [
      'Sự tác động của KTTT đối với CSHT diễn ra theo hai chiều hướng:',
      'Nếu KTTT tác động cùng chiều với sự phát triển của cơ sở hạ tầng sẽ thúc đẩy cơ sở hạ tầng phát triển. ',
      'Nếu KTTT tác động ngược chiều với sự phát triển của cơ sở hạ tầng, của cơ cấu kinh tế thì sẽ kìm hãm sự phát triển của CSHT, kinh tế.',
    ],
    imageSrc: '/impact/rotate.jpg',
  },
];

const ImpactsSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = sectionRef.current?.querySelectorAll('.impact-card');

    if (cards) {
      gsap.from(Array.from(cards), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold'>
          Sự tác động trở lại của kiến trúc thượng tầng đối với cơ sở hạ tầng
        </h1>
      </div>
      <div ref={sectionRef} className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
        {impacts.map((impact) => (
          <ImpactCard
            key={impact.id}
            title={impact.title}
            content={impact.content}
            imageSrc={impact.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ImpactsSection;
