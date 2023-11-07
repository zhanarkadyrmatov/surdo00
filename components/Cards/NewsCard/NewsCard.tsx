import React from 'react'
import s from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import News from '../../../public/imgs/news.png'


export default function NewsCard() {
  return (
    <div className={s.card}>
      <Image className={s.image} width={100} height={100} src={News} alt="" />
      <div className={s.card_wrapper}>
        <div className={s.title}>
          <h2>
            Lorem ipsum
          </h2>
          <p>Lorem Ipsum has been the indust bl...</p>
        </div>
        <Link className={s.link} href="#">
          <FiArrowUpRight className={s.logo} />
        </Link>
      </div>
    </div>
  )
}