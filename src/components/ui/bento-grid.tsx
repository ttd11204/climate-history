import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between rounded-3xl border border-neutral-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] hover:border-orange-300',
        className
      )}
    >
      {/* {header && <div>{header}</div>} */}
      <div className='flex flex-col gap-5 transition-all duration-300 group-hover/bento:translate-x-1.5'>
        {/* {icon && <div className='text-4xl'>{icon}</div>} */}
        <div className='text-2xl font-bold text-orange-700 underline underline-offset-4'>
          {title}
        </div>
        <div className='text-gray-700 leading-relaxed whitespace-pre-wrap'>
          {description}
        </div>
      </div>
    </div>
  );
};
