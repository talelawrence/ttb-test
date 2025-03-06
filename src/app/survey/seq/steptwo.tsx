'use client';
import { Container, RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function StepTwo({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    setCanProceed(selected !== null);
  }, [selected, setCanProceed]);

  return (
    <Container sx={{ textAlign: 'center', maxWidth: '400px', bgcolor: 'white', py: 5, borderRadius: '12px', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 120px)' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2D3748' }}>
          คำถามสำหรับ radio
        </Typography>
        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
          {['ความเร็วในการเปิด', 'การค้นหาเมนูที่ใช้บ่อย', 'การถอนเงินโดยไม่ใช้บัตร'].map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio sx={{ color: '#FF8C00', '&.Mui-checked': { color: '#FF8C00' } }} />}
              label={<Typography sx={{ fontWeight: 'bold', color: selected === option ? '#FF8C00' : '#2D3748' }}>{option}</Typography>}
              sx={{
                width: '100%',
                border: selected === option ? '2px solid #FF8C00' : '1px solid #CBD5E0',
                borderRadius: '8px',
                p: 1.5,
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: selected === option ? '#FFF7EB' : 'transparent',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </RadioGroup>
      </Box>
    </Container>
  );
}