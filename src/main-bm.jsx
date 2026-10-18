import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import {BmHeader} from './BmHeader';
import {BmHome} from './BmHome';
import {NewsSection} from './NewsSection';
import {ProjectMap} from './ProjectMap';
import {Partners} from './PartnerGrid';
import './styles.css';
import './refinements.css';
import './bm.css';
import './typography.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><div className="bm-site"><App HeaderComponent={BmHeader} HomeComponent={BmHome} NewsComponent={NewsSection} ProjectMapComponent={ProjectMap} PartnersComponent={Partners} inlineBrand brandImage="brand-motion-black.svg"/></div></React.StrictMode>);




