import { ReactNode } from 'react';
import CustomCursor from './CustomCursor';
import AnimatedBackground from './AnimatedBackground';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showAnimatedBackground?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children, showAnimatedBackground = false, showHeader = true, showFooter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative transition-colors duration-300">
      <CustomCursor />
      {showAnimatedBackground && <AnimatedBackground />}
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;