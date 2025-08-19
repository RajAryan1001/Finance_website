import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq_resouces from './Pages/Faq&resouces';
// src/App.js
import FinancialPlanning from './Components/Services/FinancialPlanning/FinancialPlanning';
import GSTRegistration from './Components/Services/Gst_registration/gst_registration';
import GST_Return_Filling from './Components/Services/Gst_return_filling/gst_return_filling';
import Income_tax_return from './Components/Services/Income_tax_return_filling/income_tax_returns';
import TdsReturnFilling from './Components/Services/TDS_Return_Filling/tds_return _filling';
import Accounting from './Components/Services/Accounting/accounting';
import Digital_Signature from './Components/Services/Dig_Sign/digital_sign';
import ROC_Nature from './Components/Services/ROC_Return/roc_return_filling';
import PSANDESI from './Components/Services/PS&ESI/ps&esi';
import Company_Registration from './Components/Services/Company_Regi/company_regitration';
import Firm_Registration from './Components/Services/FirmRegistration/firm_registration';
import Financial_Reports from './Components/Services/Financial_Report/financial_report';
import Text_Audit from './Components/Services/Text_Audit/text_audit';
import MSME from './Components/Services/MSME/ms&me';
import TradeLoan from './Components/Services/Trade&loan/trade&loan';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faq&resouces" element={<Faq_resouces />} />
        {/* Services */}
        <Route path="/services/financial-planning" element={<FinancialPlanning />} />
        <Route path="/services/gst_registration" element={<GSTRegistration />} />
        <Route path="/services/gst_return_filling" element={<GST_Return_Filling />} />
        {/* <Route path="/services/income_tax_return_filling" element={<Income_tax_return />} /> */}
        <Route path="/services/tds_return _filling" element={<TdsReturnFilling />} />
        <Route path="/services/accounting" element={<Accounting />} />
        <Route path="/services/digital_signnature" element={<Digital_Signature />} />
        <Route path="/services/roc_return_filling" element={< ROC_Nature />} />
        <Route path="/services/ps&esi" element={< PSANDESI />} />
        <Route path="/services/company_registration" element={< Company_Registration />} />
        <Route path="/services/firm_registration" element={< Firm_Registration />} />
        <Route path="/services/financial_reports" element={< Financial_Reports />} />
        <Route path="/services/text_audit" element={< Text_Audit />} />
        <Route path="/services/ms&me" element={< MSME />} />
        <Route path="/services/trade&loan" element={< TradeLoan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
