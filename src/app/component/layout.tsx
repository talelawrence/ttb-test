'use client';
import { Container, Box, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Layout({ children, step, setStep, canProceed, showThankYou }: { children: React.ReactNode; step: number; setStep: () => void; canProceed: boolean; showThankYou: boolean }) {
  const router = useRouter();
  return (
    <div>
      <Container maxWidth="sm" sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', pt: 3, pb: 3, borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={() => router.back()} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Image src="/ttb-logo.png" alt="TTB Logo" width={80} height={40} />
        </Box>
        <Box sx={{ flex: 1 }}>{children}</Box>
        {!showThankYou && step < 4 && (
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#FF8C00', color: 'white', fontWeight: 'bold', py: 1.5, borderRadius: '8px', '&:hover': { bgcolor: '#E07B00' }, mt: 2 }}
            onClick={setStep}
            disabled={!canProceed}
          >
            ถัดไป
          </Button>
        )}
      </Container>
    </div>
  );
}