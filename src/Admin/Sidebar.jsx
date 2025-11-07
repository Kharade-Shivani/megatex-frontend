import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Settings, ChevronRight, Menu, X, Image, Package, FolderTree, ListTree, Box, Layers } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Auto-collapse sidebar on mobile
      if (mobile) {
        setIsCollapsed(true);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      id: 'banner',
      label: 'Banner Master',
      icon: Image,
      path: '/admin/banner'
    },
    {
      id: 'category',
      label: 'Category Master',
      icon: FolderTree,
      path: '/admin/category'
    },
    {
      id: 'subcategory',
      label: 'Subcategory Master',
      icon: ListTree,
      path: '/admin/subcategory'
    },
    {
      id: 'product',
      label: 'Product Master',
      icon: Package,
      path: '/admin/product'
    },
    {
      id: 'fibc',
      label: 'FIBC Master',
      icon: Box,
      path: '/admin/fibc'
    },
    {
      id: 'tarpaulin',
      label: 'Tarpaulin Master',
      icon: Layers,
      path: '/admin/tarpaulin'
    }
  ];

  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-emerald-50 flex">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="fixed z-50 p-2 rounded-md bg-green-700 text-white top-4 left-4 transition-all duration-300 md:hidden shadow-lg hover:bg-green-600"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          h-screen bg-gradient-to-b from-green-800 via-emerald-800 to-green-900 text-white fixed left-0 top-0 z-40
          transition-all duration-300 ease-in-out shadow-2xl
          ${isMobile 
            ? (mobileMenuOpen ? 'w-72 translate-x-0' : '-translate-x-full') 
            : (isCollapsed ? 'w-20' : 'w-72')
          }
        `}
      >
        {/* Header */}
        <div className={`flex items-center ${isCollapsed && !isMobile ? 'justify-center p-4' : 'justify-between p-6'} border-b border-green-700 relative`}>
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-300 to-amber-300 bg-clip-text text-transparent">
                  Megatex Admin
                </h2>
                <p className="text-xs text-green-300">Product Management</p>
              </div>
            </div>
          )}
          
          {/* Desktop collapse button */}
          {!isMobile && (
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-md hover:bg-green-700 absolute -right-3 top-1/2 transform -translate-y-1/2 bg-green-800 shadow-lg border border-green-600 hover:border-green-500 transition-colors"
            >
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className={`p-4 ${isCollapsed && !isMobile ? 'space-y-4' : 'space-y-2'}`}>
          {/* Dashboard */}
          <button
            onClick={() => handleNavigation('/admin')}
            className={`
              w-full flex items-center ${isCollapsed && !isMobile ? 'justify-center p-3' : 'justify-between p-4'} 
              rounded-xl transition-all duration-200 group
              ${isActive('/admin') 
                ? 'bg-gradient-to-r from-green-600 to-amber-600 shadow-lg transform scale-105' 
                : 'hover:bg-green-700 hover:transform hover:scale-105'
              }
            `}
          >
            <div className={`flex items-center ${isCollapsed && !isMobile ? '' : 'space-x-4'}`}>
              <div className={`
                p-2 rounded-lg transition-colors
                ${isActive('/admin') 
                  ? 'bg-white bg-opacity-20' 
                  : 'bg-green-700 group-hover:bg-green-600'
                }
              `}>
                <Home className="w-5 h-5" />
              </div>
              {(!isCollapsed || isMobile) && <span className="font-medium">Dashboard</span>}
            </div>
            {(!isCollapsed || isMobile) && (
              <ChevronRight className={`
                w-4 h-4 transition-transform duration-200
                ${isActive('/admin') ? 'rotate-90' : 'group-hover:rotate-90'}
              `} />
            )}
          </button>

          {/* Menu Items */}
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`
                  w-full flex items-center ${isCollapsed && !isMobile ? 'justify-center p-3' : 'justify-between p-4'} 
                  rounded-xl transition-all duration-200 group
                  ${isActive(item.path) 
                    ? 'bg-gradient-to-r from-green-600 to-amber-600 shadow-lg transform scale-105' 
                    : 'hover:bg-green-700 hover:transform hover:scale-105'
                  }
                `}
              >
                <div className={`flex items-center ${isCollapsed && !isMobile ? '' : 'space-x-4'}`}>
                  <div className={`
                    p-2 rounded-lg transition-colors
                    ${isActive(item.path) 
                      ? 'bg-white bg-opacity-20' 
                      : 'bg-green-700 group-hover:bg-green-600'
                    }
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {(!isCollapsed || isMobile) && <span className="font-medium">{item.label}</span>}
                </div>
                {(!isCollapsed || isMobile) && (
                  <ChevronRight className={`
                    w-4 h-4 transition-transform duration-200
                    ${isActive(item.path) ? 'rotate-90' : 'group-hover:rotate-90'}
                  `} />
                )}
              </button>
            );
          })}
        </nav>

       
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isMobile ? 'ml-0' : (isCollapsed ? 'ml-20' : 'ml-72')
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;