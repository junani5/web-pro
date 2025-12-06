import React from 'react';
import './procedure.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Footer } from '../../../components/Footer/Footer';
import { Banner } from "../../../components/Banner/Banner";
import topImage from '../../../assets/images/BannerTop.png';

export const Procedure = () => {
    return (
        <>
        <Navbar />
        <Banner imageSrc={topImage} title="입소신청" />
        
        <div className="pro-container">
            
        </div>
    
        <Footer />
        </>
    );
    }
