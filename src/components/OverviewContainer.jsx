import React from 'react'

import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const convertNumberToK = (number) => {
  if (number >= 10000) {
      number = number / 1000;
      return `${number}k`;
  } else {
      return number;
  }
}

export const OverviewContainer = () => {
  return (
    <section className='absolute top-[191px] left-0 right-0 max-w-[1440px] mx-auto flex flex-wrap place-content-center gap-[30px]'>
      {
        data.overview.map( object =>
          <OverviewCard 
            key={object.id} 
            user={object.user} 
            audience={ convertNumberToK(object.audience) } 
            audienceType={object.audienceType} 
            today={object.today} 
            network={object.network} 
            isUp={object.isUp}
          />
        )
      }
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h1 className='text-2xl text-Dark-Grayish-Blue dark:text-Desaturatedated-Blue font-bold mb-[27px] ml-[32px]'>OverviewCard Today</h1>
      <div className='flex flex-wrap'>
        {
          data['overview-today'].map( object =>
            <OverviewTodayCard
            key={object.id} 
            network={object.network} 
            stats={ convertNumberToK(object.stats) } 
            statsType={object.statsType} 
            porcentage={object.porcentage}
            isUp={object.isUp} 
            />
          )
        }
      </div>
    </section>
  )
}