import React from 'react'
import Description from '../../all_shared/description'
import Heading from '../../all_shared/Heading'
import PicksCard from './picks_card'

const StandoutSection = () => {
  return (
    <div className='standout-container py-4'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Description title="DANCEX" align="center"/>
                    <Heading title="Standout DanceX Picks" />
                    <div className='d-flex flex-wrap'>
                        <PicksCard />
                        <PicksCard />
                        <PicksCard />
                        <PicksCard />
                        <PicksCard />
                        <PicksCard />
                        <PicksCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StandoutSection