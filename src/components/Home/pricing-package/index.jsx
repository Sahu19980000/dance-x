import React, { useContext, useState } from 'react'
import Description from '../../all_shared/description'
import Heading from '../../all_shared/Heading'
import Package_component from './package'
import { ThemeContext } from '../home'
import circle from "../../../assets/circle-one.png";
import circle_two from "../../../assets/circle-two.png"
import Sub_heading from '../../all_shared/sub_heading'

const Pricing_package = (props) => {
  const [theme, setTheme] = useState('transparent');
  const value = useContext(ThemeContext);

  const free = [
    'Employee directory',
    'Task management',
    'Calendar integration',
    'File storage',
    'Communication tools',
    'Reporting and analytics'
  ];

  const Enterprise = [
    'Advanced employee directory',
    'Project management',
    'Resource scheduling',
    'Version control',
    'Team collaboration',
    'Advanced analytics'
  ];

  const Business = [
    'Customizable employee directory ',
    'Client project management',
    'Client meeting schedule',
    'Compliance tracking',
    'Client communication',
    'Create custom reports tailored  '
  ];

  return (
    <div className='pricing-package-container py-4'>
      <div className="container">
        <div className='text-center'>
        <Sub_heading title="PRICING" align="center" />
        </div>
       
        <Heading title="Find the best packages" color="#f97738" />
        <div className="row">
          <div className="col-lg-4 col-md-4 border-2">
            <Package_component 
            circle_img = {circle}
            title={props.title} 
            content={props.content}
            price={props.price}
            discountprice={props.discountprice}
            theme='-webkit-linear-gradient(180deg, #F8605E 0%, #FA8C16)'
            cliptext="text " 
            textfillcolor="transparent"
            features={free} />
          </div>
          <div className="col-lg-4 col-md-4">
            <Package_component 
             circle_img = {circle_two}
             title={props.title2} 
             content={props.content2}
             price={props.price2}
             discountprice={props.discountprice2}
            theme='-webkit-linear-gradient(180deg, #F8605E 0%, #FA8C16)' 
            cliptext="none " 
            textfillcolor="none"
            features={Enterprise} 
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Pricing_package;
