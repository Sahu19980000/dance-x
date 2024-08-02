import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import video_play from '../../assets/video_play.png'
import profile from "../../assets/profile.png"
import image_card_one from "../../assets/Card 2.png"
import image_card_two from "../../assets/Card 3.png"
import Description from '../all_shared/description';
import Heading from '../all_shared/Heading';
import zumba from "../../assets/zumba 1.png"
import Button_component from '../all_shared/button';



const DanceProfile = () => {
    const [show, setShow] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = (url) => {
      setVideoUrl(url);
      setShow(true);
    };
  
    return (
      <div className="container dance-x">
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between">
            <div>
            <img src={image_card_one} alt="Video Thumbnail" className="img-thumbnail" onClick={() => handleShow('video_url1.mp4')} />
            </div>
           
            <img src={image_card_two} alt="Video Thumbnail" className="img-thumbnail" onClick={() => handleShow('video_url2.mp4')} />
            <img src={image_card_one} alt="Video Thumbnail" className="img-thumbnail" onClick={() => handleShow('video_url3.mp4')} />
            <img src={image_card_two} alt="Video Thumbnail" className="img-thumbnail" onClick={() => handleShow('video_url4.mp4')} />
          </div>
        </div>
        <div className="row text-start">
          <div className="col-12 d-flex">
            <div>
            <img src={profile} alt="Profile" className="rounded-circle" style={{ width: '150px' }} />
            </div>
            <div className='p-4'>
            <h2 className="mt-3">Musfiqur Rahman</h2>
            <p className="text-primary">Dance Artist</p>
            </div>
          </div>
          <div className='col-12 p-4'>
          <p>My work: Dance Artist</p>
            <p>Email: musfiqur@gmail.com</p>
            <p>I spend too much time: Dance Artist</p>
            <h3>Meet your Artist</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <Description 
            title="OFFER" 
            color="#fff"
            align="center"
            />
            <Heading title="What This place offer" textAlign="center"  />

            <div className="d-flex justify-content-around flex-wrap">
              <div className="p-2"><img src={zumba} /> Classic dance</div>
              <div className="p-2"><img src={zumba} /> Modern dance</div>
              <div className="p-2"> <img src={zumba} />Ballet dance</div>
              <div className="p-2"> <img src={zumba} />Hip hop dance</div>

            </div>
          </div>
        </div>
        <div className="row mt-4 text-center">
          <div className="col-12">
            <Button_component title="View All"/>
          </div>
        </div>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Video Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video controls width="100%">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
        </Modal>
      </div>
    );
};
  
export default DanceProfile;
  