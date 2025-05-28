import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
} from '@mui/material';
import {
  Menu,
  X,
  Home,
  Info,
  GalleryHorizontal,
  Briefcase,
  Mail,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';



export default function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [galleryOpen, setGalleryOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) setGalleryOpen(false); // close submenu when drawer closes
  };

  const toggleGallery = () => {
    setOpen(true)
    setGalleryOpen((prev) => !prev);
    
  };

  // Main nav links — exactly from your Navbar, except Gallery is handled separately below
  const navLinks = [
    { label: 'HOME', path: '/', icon: <Home size={18} /> },
    { label: 'BLOGS', path: '/blogs', icon: <Info size={18} /> }, // used Info icon as placeholder
    // SERVICES was commented out in your Navbar, so skip here
    { label: 'FAQs', path: '/faq', icon: <Briefcase size={18} /> }, // reused Briefcase icon for FAQs
    { label: 'CONTACT US', path: '/contact-us', icon: <Mail size={18} /> },
  ];

  // Gallery submenu links as per your Navbar
  const galleryLinks = [
    { label: 'Classical Dance Photography', path: '/gallery/classical' },
    { label: 'Family Portrait Photography', path: '/gallery/family' },
    { label: 'Kids Photoshoots', path: '/gallery/kids' },
    { label: 'Business Photoshoots', path: '/gallery/bussiness' },
    { label: 'Alliance Portrait Photography', path: '/gallery/allience' },
    { label: 'Maternity Photoshoots', path: '/gallery/meternity' },
  ];

  return (
    <div className="md:hidden">
      <div className="bg-white rounded-md" onClick={toggleDrawer(true)}>
        {open ? (
          <X className="text-[#38C6C6] font-extrabold w-8 h-8 cursor-pointer" />
        ) : (
          <Menu className="text-[#38C6C6] font-extrabold w-8 h-8 cursor-pointer" />
        )}
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => {}}>
          <List>
            {/* Gallery menu with submenu */}
            <ListItem disablePadding key="gallery-menu">
              <ListItemButton onClick={toggleGallery}>
                <ListItemIcon className="min-w-[30px]">
                  <GalleryHorizontal size={18} />
                </ListItemIcon>
                <ListItemText primary="Gallery" />
                {galleryOpen ? (
                  <span style={{ fontSize: 18 }}>−</span>
                ) : (
                  <span style={{ fontSize: 18 }}>+</span>
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={galleryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {galleryLinks.map((gLink) => (
                  <ListItem key={gLink.path} disablePadding sx={{ pl: 4 }}>
                    <NavLink
                      to={gLink.path}
                      className={({ isActive }) =>
                        `w-full block px-2 py-1 text-sm ${
                          isActive ? 'text-[#005f85] bg-[#e0f8f8]' : 'text-gray-700'
                        } hover:bg-[#d5ffff] transition duration-200`
                      }
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemButton>
                        <ListItemText primary={gLink.label} />
                      </ListItemButton>
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {/* Render all other nav links */}
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `w-full block px-2 ${
                      isActive ? 'text-[#005f85] bg-[#e0f8f8]' : 'text-gray-700'
                    } hover:bg-[#d5ffff] transition duration-200`
                  }
                  onClick={toggleDrawer(false)}
                >
                  <ListItemButton>
                    <ListItemIcon className="min-w-[30px]">{link.icon}</ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
