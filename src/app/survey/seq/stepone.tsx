'use client';
import { Container, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import datamock from '../../../mockdata/rank.json';

export default function StepOne({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setCanProceed(selected !== null);
  }, [selected, setCanProceed]);

  return (
    <Container>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, bgcolor: '#F5F7FA'}}>
          {datamock.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          {datamock.settings.map((num) => {
            return (
              <Button
              key={num.key}
              variant={selected === num.value ? 'contained' : 'outlined'}
              sx={{
                borderRadius: '50%',
                width: 48,
                height: 48,
                fontSize: '1.2rem',
                minWidth: 'auto',
                color: selected === num.value ? 'white' : '#2D3748',
                borderColor: selected === num.value ? '#FF8C00' : '#CBD5E0',
                bgcolor: selected === num.value ? '#FF8C00' : 'transparent',
                '&:hover': {
                  bgcolor: selected === num.value ? '#E07B00' : 'transparent',
                  borderColor: '#FF8C00',
                },
              }}
              onClick={() => setSelected(num.value)}
            >
              {num.value}
            </Button>
            )
          })
          }
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, mb: 3, color: '#4A5568' }}>
          <Typography variant="body2">1 คือไม่พอใจมาก</Typography>
          <Typography variant="body2">5 คือพอใจมาก</Typography>
        </Box>
      </Box>
    </Container>
  );
}