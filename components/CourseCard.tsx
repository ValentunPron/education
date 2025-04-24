import CardImage from '@/public/cardCourse01.png';
import Image from 'next/image';
import Link from 'next/link';

const CourseCard = () => {    
  return (
    <div className="course-card mx-auto">
        <Image src={CardImage} alt="Image Course" className='rounded-t-2xl w-full h-auto'/>
        <div className='flex flex-col gap-4 py-5 px-3'>
            <h3 className='subTitle courseTitle'>Інтернет Речей</h3>
            <p className='desc'>Кожен курс містить велику кількість практичних завдань та реальних кейсів для ефективного навчання.</p>
            <p className='desc'>Тривалість курсу: <b>12 годин</b></p>
            <Link href='/course' className='button text-center'>ДЕТАЛЬНІШЕ</Link>
        </div>
    </div>
  )
}

export default CourseCard;