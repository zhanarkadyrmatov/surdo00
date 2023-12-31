import Image from 'next/legacy/image';
import Link from 'next/link';
import s from './page.module.scss';
import NewsImage from '../../../public/imgs/newsPost.png';
import { FiArrowUpRight } from 'react-icons/fi';
import NewCards from '@/components/Cards/NewCards/NewCards';
import { fetchNews } from '@/app/getData/getData';
import Paginate from '@/components/Paginate/Paginate';

import noneImage from '../../../public/imgs/noneImage.png';
export const metadata = {
  title: 'Новости',
  description: '',
};

export default async function NewsPage() {
  const data = await fetchNews();
  const newsData = data?.results || [];

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      {newsData.length > 0 ? (
        <div className="container">
          <div className={s.news}>
            <h2>Последние новости</h2>
            <div className={s.new_card}>
              <div className={s.image}>
                {newsData[0].images_slides.length > 0 ? (
                  <Image
                    objectFit="cover"
                    width={1564}
                    height={500}
                    src={newsData[0].images_slides[0].photo}
                    alt=""
                  />
                ) : (
                  <Image
                    objectFit="cover"
                    width={1564}
                    height={500}
                    src={noneImage}
                    alt=""
                  />
                )}
              </div>
              <div className={s.title}>
                <h3>{newsData[0].thesis}</h3>
                <div className={s.data}>
                  <p>{formatDate(newsData[0].created_at)}</p>
                  <Link className={s.link} href={`News/${newsData[0].id}`}>
                    Читать полностью <FiArrowUpRight className={s.logo} />{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Paginate newsData={newsData} />
        </div>
      ) : (
        <center>
          <h3>пусто</h3>
        </center>
      )}
    </div>
  );
}
