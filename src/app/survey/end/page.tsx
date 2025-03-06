'use client';
import { Container, Typography, Box } from '@mui/material';

export default function ThankYouPage() {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: 'white', minHeight: '100vh', textAlign: 'center', pt: 5 }}>
      <Typography variant="h5" sx={{ mt: 3, fontWeight: 'bold' }}>ขอบคุณที่ร่วมตอบแบบสอบถาม</Typography>
    </Container>
  );
}