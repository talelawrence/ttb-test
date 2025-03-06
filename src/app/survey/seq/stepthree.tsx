'use client';
import { Container, Typography, Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

export default function StepThree({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setCanProceed(true); // ปุ่มถัดไปสามารถกดได้เสมอ
  }, [setCanProceed]);

  return (
    <Container sx={{ textAlign: 'center', maxWidth: '400px', bgcolor: 'white', py: 5, borderRadius: '12px', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 120px)' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2D3748' }}>
          คำแนะนำอื่นๆ (ถ้ามี)
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="ความคิดเพิ่มเติม"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{ bgcolor: 'white', borderRadius: '8px', '& .MuiOutlinedInput-root': { borderColor: '#CBD5E0' } }}
        />
      </Box>
    </Container>
  );
}
