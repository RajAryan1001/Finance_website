
// import React, { useState, useEffect } from 'react';
// import { Box, AppBar, Typography, Toolbar, Drawer, IconButton, List, ListItem, ListItemText, Collapse } from '@mui/material';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import '../../styles/HeaderStyles.css';

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleServicesToggle = () => {
//     setServicesOpen(!servicesOpen);
//   };

//   const menuItems = [
//     { text: 'Home', path: '/' },
//     {
//       text: 'Services',
//       path: '/services',
//       subItems: [
//         { text: 'Financial Planning', path: '/services/financial-planning' },
//         { text: 'GST Registration', path: '/services/gst_registration' },
//         { text: 'GST Rturn Filling', path: '/services/gst_return_filling' },
//         { text: 'Income Tax Retun Filling', path: '/services/Income_tax_return_filling' },
//         { text: 'TDS Return Filling', path: '/services/tds_return _filling' },
//         { text: 'Accounting', path: '/services/accounting' },
//         { text: 'Digital Signature', path: '/services/digital_signnature' },
//         { text: 'ROC Return Filling', path: '/services/roc_return_filling' },
//         { text: 'PF and ESI', path: '/services/ps&esi' },
//         { text: 'Company Regitration', path: '/services/company_registration' },
//         { text: 'Firm Regitration', path: '/services/firm_registration' },
//         { text: 'Financial Reports', path: '/services/financial_reports' },
//         { text: 'Text Audit', path: '/services/text_audit' },
//         { text: 'MSME/Udhyam Certificate', path: '/services/ms&me' },
//         { text: 'Trade Licence & Loan Service', path: '/services/trade&loan' },
//       ],
//     },
//     { text: 'Contact', path: '/contact' },
//     { text: 'About', path: '/about' },
//   ];

//   const drawer = (
//     <Box onClick={handleDrawerToggle} className="drawer">
//       <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
//         Finance
//       </Typography>
//       <List>
//         {menuItems.map((item) => (
//           <React.Fragment key={item.text}>
//             {item.subItems ? (
//               <>
//                 <ListItem button onClick={handleServicesToggle}>
//                   <ListItemText primary={item.text} />
//                   {servicesOpen ? <ExpandLess /> : <ExpandMore />}
//                 </ListItem>
//                 <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
//                   <div className="subitem-container"  style={{
//                         display: 'grid',
//                         gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
//                         gap: '10px', // Space between items
//                         padding: '10px', // Padding around the grid container
//                         }}>
//                     {item.subItems.map((subItem, index) => (
//                       <ListItem
//                         button
//                         component={Link}
//                         to={subItem.path}
//                         key={subItem.text}
//                         style={{
//                           backgroundColor: '#f5f5f5',
//                           borderRadius: '8px',
//                           padding: '10px',
//                           display: 'flex',
//                           justifyContent: 'center',
//                           alignItems: 'center',
//                         }}
//                         className="subitem"
//                       >
//                         <ListItemText primary={subItem.text} />
//                       </ListItem>
//                     ))}
//                   </div>
//                 </Collapse>
//               </>
//             ) : (
//               <ListItem button component={Link} to={item.path}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box>
//       <AppBar component="nav" className={`appBar ${scrolled ? 'scrolled' : ''}`}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             sx={{ mr: 2, display: { sm: "none" } }}
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography color="gold" variant="h6" component={Link} to="/" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//             <FastfoodIcon sx={{ mr: 1 }} />
//             Finance
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             <ul className="navigationMenu">
//               {menuItems.map((item) => (
//                 <li key={item.text}>
//                   {item.subItems ? (
//                     <div className="dropdown">
//                       <Link to={item.path} className="link">{item.text}</Link>
//                       <div className="dropdown-content">
//                         {item.subItems.map((subItem) => (
//                           <Link key={subItem.text} to={subItem.path} className="link">{subItem.text}</Link>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link to={item.path} className="link">{item.text}</Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Toolbar /> {/* This empty Toolbar acts as a spacer */}
//     </Box>
//   );
// }

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UniqueHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { text: 'Financial Planning', path: '/services/financial-planning' },
        { text: 'GST Registration', path: '/services/gst_registration' },
        { text: 'GST Return Filing', path: '/services/gst_return_filling' },
        { text: 'Income Tax Return Filing', path: '/services/Income_tax_return_filling' },
        { text: 'TDS Return Filing', path: '/services/tds_return _filling' },
        { text: 'Accounting', path: '/services/accounting' },
        { text: 'Digital Signature', path: '/services/digital_signnature' },
        { text: 'ROC Return Filing', path: '/services/roc_return_filling' },
        { text: 'PF and ESI', path: '/services/ps&esi' },
        { text: 'Company Registration', path: '/services/company_registration' },
        { text: 'Firm Registration', path: '/services/firm_registration' },
        { text: 'Financial Reports', path: '/services/financial_reports' },
        { text: 'Text Audit', path: '/services/text_audit' },
        { text: 'MSME/Udhyam Certificate', path: '/services/ms&me' },
        { text: 'Trade Licence & Loan Service', path: '/services/trade&loan' },
      ],
    },
    { name: "FAQ & Resources", href: "/Faq&resouces" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
   
  ];

  return (
    <header className={`unique-header ${isScrolled ? 'unique-header-scrolled' : ''}`}>
      <div className="unique-container">
        <Link to="/" className="unique-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="unique-logo-icon"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="unique-logo-text">ShreeRam&Company</span>
        </Link>
        <nav className="unique-desktop-nav">
          {menuItems.map((item) => (
            <div key={item.name} className="unique-nav-item">
              {item.submenu ? (
                <div 
                  className="unique-dropdown"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.href} className="unique-nav-link">
                    {item.name}
                    <svg className="unique-chevron-down" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  {activeDropdown === item.name && (
                    <div className="unique-dropdown-menu">
                      <div className="unique-submenu-grid">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.text} to={subItem.path} className="unique-submenu-item">
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.href} className="unique-nav-link">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <button className="unique-mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="unique-sr-only">Toggle menu</span>
          <svg className="unique-menu-icon" viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="unique-mobile-menu">
          <nav className="unique-mobile-nav">
            {menuItems.map((item) => (
              <div key={item.name} className="unique-mobile-nav-item">
                {item.submenu ? (
                  <>
                    <button 
                      className="unique-mobile-dropdown-toggle"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <svg className={`unique-chevron-down ${activeDropdown === item.name ? 'unique-open' : ''}`} viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="unique-mobile-submenu-grid">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.text} to={subItem.path} className="unique-mobile-submenu-item">
                            {subItem.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href} className="unique-mobile-nav-link">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
      <style>
        {`
          .unique-header {
            font-family: 'Inter', sans-serif;
            position: sticky;
            top: 0;
            z-index: 1000;
            width: 100%;
            background-color: #f8fafc;
            transition: background-color 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .unique-header-scrolled {
            background-color: #3b82f6;
          }

          .unique-header-scrolled .unique-nav-link,
          .unique-header-scrolled .unique-logo-text,
          .unique-header-scrolled .unique-mobile-menu-toggle,
          .unique-header-scrolled .unique-chevron-down {
            color: #ffffff;
          }

          .unique-header-scrolled .unique-logo-icon {
            stroke: #ffffff;
          }

          .unique-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .unique-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #3b82f6;
          }

          .unique-logo-icon {
            width: 24px;
            height: 24px;
            margin-right: 0.5rem;
          }

          .unique-logo-text {
            font-weight: bold;
            font-size: 1.25rem;
          }

          .unique-desktop-nav {
            display: none;
          }

          .unique-nav-item {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
          }

          .unique-nav-link {
            text-decoration: none;
            color: #333;
            font-size: 0.875rem;
            transition: color 0.3s ease;
            padding: 0.5rem 1rem;
            height: 100%;
            display: flex;
            align-items: center;
          }

          .unique-nav-link:hover {
            color: #3b82f6;
          }

          .unique-dropdown {
            position: relative;
            height: 100%;
          }

          .unique-chevron-down {
            width: 16px;
            height: 16px;
            margin-left: 0.25rem;
            transition: transform 0.3s ease;
          }

          .unique-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ffffff;
            border: 1px solid #3b82f6;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            padding: 0.5rem;
            z-index: 1000;
            min-width: 400px;
          }

          .unique-submenu-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }

          .unique-submenu-item {
            padding: 0.5rem;
            text-decoration: none;
            color: #333;
            font-size: 0.875rem;
            transition: background-color 0.3s ease;
            border-radius: 0.5rem;
          }

          .unique-submenu-item:hover {
            background-color: #3b82f6;
            color: #ffffff;
          }

          .unique-mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            color: #333;
          }

          .unique-menu-icon {
            width: 24px;
            height: 24px;
          }

          .unique-mobile-menu {
            display: block;
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ffffff;
            padding: 1rem;
            overflow-y: auto;
          }

          .unique-mobile-nav-item {
            margin-bottom: 1rem;
          }

          .unique-mobile-nav-link {
            display: block;
            padding: 0.5rem 0;
            text-decoration: none;
            color: #333;
            font-size: 1rem;
            transition: color 0.3s ease;
          }

          .unique-mobile-nav-link:hover {
            color: #3b82f6;
          }

          .unique-mobile-dropdown-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            padding: 0.5rem 0;
            font-size: 1rem;
            color: #333;
            cursor: pointer;
          }

          .unique-mobile-submenu-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            margin-top: 0.5rem;
          }

          .unique-mobile-submenu-item {
            padding: 0.5rem;
            text-decoration: none;
            color: #333;
            font-size: 0.875rem;
            transition: background-color 0.3s ease;
            border-radius: 0.5rem;
          }

          .unique-mobile-submenu-item:hover {
            background-color: #3b82f6;
            color: #ffffff;
          }

          .unique-sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }

          @media (min-width: 768px) {
            .unique-desktop-nav {
              display: flex;
              align-items: center;
              height: 100%;
            }

            .unique-mobile-menu-toggle {
              display: none;
            }

            .unique-mobile-menu {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
}
