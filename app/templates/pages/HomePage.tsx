import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '@/app/templates/components/AppAppBar';
import Hero from '@/app/templates/components/Hero';
import LogoCollection from '@/app/templates/components/LogoCollection';
import Highlights from '@/app/templates/components/Highlights';
import Pricing from '@/app/templates/components/Pricing';
import Features from '@/app/templates/components/Features';
import Testimonials from '@/app/templates/components/Testimonials';
import FAQ from '@/app/templates/components/FAQ';
import Footer from '@/app/templates/components/Footer';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
