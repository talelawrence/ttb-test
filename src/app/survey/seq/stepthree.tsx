'use client';
import { Container, Typography, Box, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import datamock from '../../../mockdata/text.json';

export default function StepThree({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {
  const [inputValue, setInputValue] = useState('');
  const MAX_LENGTH = 100; // กำหนดจำนวนตัวอักษรสูงสุด

  useEffect(() => {
    setCanProceed(true); // ปุ่มถัดไปสามารถกดได้เสมอ
  }, [setCanProceed]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setInputValue(e.target.value);
    }
  };

  return (
    <Container>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, bgcolor: '#F5F7FA' }}>
          {datamock.title}
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="ความคิดเพิ่มเติม"
          value={inputValue}
          onChange={handleInputChange}
          inputRef={(input) => input && input.setAttribute('maxlength', datamock.settings[0].value)} // Alternative to inputProps
          sx={{
            bgcolor: 'white',
            borderRadius: '8px',
            '& .MuiOutlinedInput-root': { borderColor: '#CBD5E0' }
          }}
        />
        {/* แสดงจำนวนตัวอักษรที่พิมพ์ไปแล้ว */}
        <Typography variant="body2" sx={{ textAlign: 'right', color: '#A0AEC0', mt: 1 }}>
          {inputValue.length}/{MAX_LENGTH}
        </Typography>
      </Box>
    </Container>
  );
}
