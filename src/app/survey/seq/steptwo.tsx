import { Container, Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import datamock from '../../../mockdata/radio.json';
import { useEffect, useState } from 'react';

export default function SurveyRadio({ setCanProceed }: { setCanProceed: (canProceed: boolean) => void }) {

    const [selected, setSelected] = useState<string | null>(null);
  
    useEffect(() => {
      setCanProceed(selected !== null);
    }, [selected, setCanProceed]);
    
  return (
    <Container>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2}}>
        {datamock.title}
        </Typography>
        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
          {datamock.choices.map((option) => (
            <Box sx={{ padding:'5px' ,boxShadow:'rgba(0, 0, 0, 0.1)'}}>
              <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio sx={{ color: '#FF8C00', '&.Mui-checked': { color: '#FF8C00' } }} />}
              label={
                <Typography sx={{ fontWeight: 'bold', color: selected === option.value ? '#FF8C00' : '#2D3748' }}>
                  {option.title}
                </Typography>
              }
              sx={{
                width: '100%',
                border: selected === option.value ? '2px solid #FF8C00' : '1px solid #CBD5E0',
                borderRadius: '12px', 
                p: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                bgcolor: selected === option.value ? '#FFF7EB' : '#FFFFFF', 
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#FF8C00',
                },
              }}
            />
            </Box>
          ))}
        </RadioGroup>
      </Box>
    </Container>
  );
}
