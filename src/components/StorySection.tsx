type Props = {
  title: string;
  content: string;
};

const StorySection = ({ title, content }: Props) => {
  return (
    <section className='section min-h-[100vh] flex flex-col justify-center items-center text-center'>
      <h2 className='text-4xl font-bold mb-4'>{title}</h2>
      <p className='text-lg max-w-xl'>{content}</p>
    </section>
  );
};

export default StorySection;
