'use client';
import { Container, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export default function StepOne({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setCanProceed(selected !== null);
  }, [selected, setCanProceed]);

  return (
    <Container sx={{ textAlign: 'center', maxWidth: '400px', bgcolor: 'white', py: 5, borderRadius: '12px', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 120px)' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2D3748' }}>
          จากการใช้งานผ่านช่องทางที่ผ่านมา ท่านพอใจแค่ไหน
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Button
              key={num}
              variant={selected === num ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '50%',
                width: 48,
                height: 48,
                fontSize: '1.2rem',
                minWidth: 'auto',
                color: selected === num ? 'white' : '#2D3748',
                borderColor: selected === num ? '#FF8C00' : '#CBD5E0',
                bgcolor: selected === num ? '#FF8C00' : 'transparent',
                '&:hover': {
                  bgcolor: selected === num ? '#E07B00' : 'transparent',
                  borderColor: '#FF8C00',
                },
              }}
              onClick={() => setSelected(num)}
            >
              {num}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, mb: 3, color: '#4A5568' }}>
          <Typography variant="body2">1 คือไม่พอใจมาก</Typography>
          <Typography variant="body2">5 คือพอใจมาก</Typography>
        </Box>
      </Box>
    </Container>
  );
}