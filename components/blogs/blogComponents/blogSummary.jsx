// Displays summary on the cards
import { Box, Typography, useTheme } from '@mui/material';
import { summaryBox, summaryText } from '@/styles/blogSummaryStyles';

export default function BlogSummary({ summary }) {
  const theme = useTheme();

  return (
    <Box sx={summaryBox(theme)}>
      <Typography variant="body2" sx={summaryText(theme)}>
        {summary}
      </Typography>
    </Box>
  );
}