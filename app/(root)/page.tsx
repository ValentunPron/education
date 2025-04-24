import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import FilterMain from '@/components/FilterMain';
import CourseCard from '@/components/CourseCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion"

import HeroImage from '@/public/hero01.png'
import Hero02Image from '@/public/hero02.png'
import Advantages01 from '@/public/Advantages01.png'
import Advantages02 from '@/public/Advantages02.png'
import Advantages03 from '@/public/Advantages03.png'

export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query =  (await searchParams).query;

  return (
    <>
      <section className="section flex flex-col md:flex-row justify-center gap-5 items-center container">
        <Image src={HeroImage} alt='hero' id='hero_image' className='max-w-[250px] rotate-12  md:max-w-sm w-full h-auto'/>
        <div className='flex text-center md:text-left flex-col gap-2 max-w-lg'>
          <h1 className='mainTitle'>Навчись створювати IoT</h1>
          <h3 className='subTitle'>Курси від Університету ІФНТУНГ</h3>
          <p className='desc'>
            Запишіться на курси та почніть свою подорож в майбутнє технологій вже сьогодні. Курс включає в себе як теоретичні знання, так і практичні завдання, що дозволяють розвивати реальні проекти.
          </p>
                    
          <p className="mt-5">Зареєструйтеся зараз та станьте частиною технологічної революції в світі IoT!</p>

          <Link className='button buttonBite' href={'./'}>ПОЧАТИ УЖЕ</Link>
        </div>
      </section>

      <section className='section flex flex-col gap-2 container'>
        <div className='flex flex-col gap-2'>
          <h2 className='mainTitle'>Наші курси</h2>
          <h3 className='subTitle'>Актуальні курси від ІФНТУНГ</h3>
        </div>
        <FilterMain query={query} />

        <div className='mt-5 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>

        <div className='inline-flex w-full justify-center'>
          <Link href='/course' className='button w-full buttonBite'>Всі курси</Link>
        </div>
      </section>

      <section className='section container'>
        <h2 className='mainTitle text-center'>Переваги наших курсів</h2>

        <div className='flex gap-7 flex-wrap justify-between mt-10'>
          <div className='flex flex-col items-center text-center gap-4 max-w-[300px] mx-auto'>
            <Image src={Advantages01} width={300} height={300} alt='Advantage'  />
            <h4 className='subTitle'>Гнучкий  графік</h4>
            <p className='desc'>Ви можете обирати зручний для вас час для проходження курсів та отримувати доступ до матеріалів 24/7.</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 max-w-[300px] mx-auto'>
            <Image src={Advantages02} className="w-full" width={300} height={30} alt='Advantage'  />
            <h4 className='subTitle'>Практичні навички</h4>
            <p className='desc'>Кожен курс містить велику кількість практичних завдань та реальних кейсів для ефективного навчання.</p>
          </div>

          <div className='flex flex-col items-center text-center gap-4 max-w-[300px] mx-auto'>
            <Image src={Advantages03}  width={300} height={300} alt='Advantage'  />
            <h4 className='subTitle'>Постійний фідбек</h4>
            <p className='desc'>Під час навчання ви отримаєте постійний фідбек через тести, завдання та перевірку результатів.</p>
          </div>
        </div>
        
      </section>


      <section className="section container">
        <div className='flex justify-center  gap-5 items-center '>
          <div className='h-full flex text-center md:text-left flex-col gap-2 max-w-lg'>
            <h2 className='mainTitle'>Як проходить навчання?</h2>

            <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger className='subTitle'>01 Оберіть курс</AccordionTrigger>
                  <AccordionContent className='desc'>
                    Перегляньте каталог курсів оберіть той, що вам підходить
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className='subTitle'>02 Аналізуйте матеріал</AccordionTrigger>
                  <AccordionContent className='desc'>
                    Перегляньте каталог курсів оберіть той, що вам підходить
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className='subTitle'>03 Виконуйте завдання </AccordionTrigger>
                  <AccordionContent className='desc'>
                    Перегляньте каталог курсів оберіть той, що вам підходить
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className='subTitle'>04 Слідкуй за прогресом  </AccordionTrigger>
                  <AccordionContent className='desc'>
                    Перегляньте каталог курсів оберіть той, що вам підходить
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            <Link className='button buttonBite' href={'./'}>ПОЧАТИ УЖЕ</Link>
          </div>
          <Image src={Hero02Image} alt='hero' id='hero_image' className='hidden md:block-rotate-12 md:max-w-sm w-full h-auto'/>
          </div>
      </section>
    </>
  );
}
