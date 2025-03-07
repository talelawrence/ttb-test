'use client';
import { Container, Box, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Layout({ children, step, setStep, canProceed, showThankYou }: { children: React.ReactNode; step: number; setStep: () => void; canProceed: boolean; showThankYou: boolean }) {
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
      
      {/* Fixed Header */}
      <Box 
        sx={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          bgcolor: '#F5F7FA', 
          zIndex: 10,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
          py: 2
        }}
      >
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Logo */}
          <div>
            <Image src="/ttb-logo.png" alt="TTB Logo" width={80} height={40} style={{ marginBottom: '8px' }} />
          </div>

          {/* Back Button */}
          <IconButton onClick={() => router.back()} sx={{ alignSelf: 'flex-start' }}>
            <ArrowBackIcon />
          </IconButton>
        </Container>
      </Box>

      {/* Content Section (No Scroll) */}
      <Container 
        maxWidth="sm" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          mt: '100px',  // ให้เว้นที่สำหรับ Header
          pb: '80px',   // ให้เว้นที่สำหรับปุ่ม "ถัดไป"
          overflow: 'hidden' // ป้องกันการเกิด Scroll ใน children
        }}
      >
        <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {children}
        </Box>
      </Container>

      {/* Sticky Button Section */}
      {!showThankYou && step < 4 && (
        <Box 
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'white',
            py: 2,
            px: 2,
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            paddingLeft: '0px',
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: '90%', 
              maxWidth: '400px', 
              bgcolor: canProceed ? '#FF8C00' : '#E0E0E0',
              color: canProceed ? 'white' : '#A0A0A0',
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: '30px',
              fontSize: '16px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              '&:hover': { bgcolor: canProceed ? '#E07B00' : '#E0E0E0' }
            }}
            onClick={setStep}
            disabled={!canProceed}
          >
            ถัดไป
          </Button>
        </Box>
      )}
    </Box>
  );
}
