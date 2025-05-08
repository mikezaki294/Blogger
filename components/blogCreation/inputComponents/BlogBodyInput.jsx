'use client';

/****** FLAGGED FOR REFACTOR/SEPARATION ******/
// Replace custom MDE for react-quill or tiptap in future

import { useTheme } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Tooltip,
} from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {blogBodyInputStyle} from '../../../styles/blogBodyStyles'

export default function BlogBodyInput({ value, onChange }) {
  const theme = useTheme();
  const inputRef = useRef(null);

  // Handle formatting to give users some custom formatting
  const handleFormat = (type) => {
    const textarea = inputRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.slice(start, end);

    let before = value.slice(0, start);
    let after = value.slice(end);
    let formatted = '';

    if (type === 'bold') {
      formatted = `**${selected || 'bold'}**`;
    } else if (type === 'italic') {
      formatted = `*${selected || 'italic'}*`;
    } else if (type === 'underline') {
      formatted = `__${selected || 'underline'}__`;
    } else if (type === 'ul') {
      formatted = `${selected || '- List item'}`;
      if (!selected.includes('- ')) formatted = `- ${formatted}`;
    } else if (type === 'ol') {
      formatted = `${selected || '1. List item'}`;
      if (!selected.includes('1.')) formatted = `1. ${formatted}`;
    } else if (type === 'emoji') {
      formatted = `${selected} 😊`;
    }

    const newValue = before + formatted + after;
    onChange(newValue);

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = before.length + formatted.length;
    }, 0);
  };

  // Prevents default tab behavior in browser, allows tab to indent
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = inputRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const tab = '  ';

      const newValue = value.slice(0, start) + tab + value.slice(end);
      onChange(newValue);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + tab.length;
      }, 0);
    }
  };

  // Allows keyboard shortcuts for bold, italicize, etc
  useEffect(() => {
    const handler = (e) => {
      const textarea = inputRef.current;
      if (!textarea || document.activeElement !== textarea) return;

      const isMac = navigator.platform.toUpperCase().includes('MAC');
      const ctrlKey = isMac ? e.metaKey : e.ctrlKey;

      if (!ctrlKey) return;

      if (e.key === 'b') {
        e.preventDefault();
        handleFormat('bold');
      } else if (e.key === 'i') {
        e.preventDefault();
        handleFormat('italic');
      } else if (e.key === 'u') {
        e.preventDefault();
        handleFormat('underline');
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [value]);

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}> {/** <-- contains all of the text format icons*/}
        <Tooltip title="Bold">
          <IconButton onClick={() => handleFormat('bold')}>
            <FormatBoldIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Italic">
          <IconButton onClick={() => handleFormat('italic')}>
            <FormatItalicIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline">
          <IconButton onClick={() => handleFormat('underline')}>
            <FormatUnderlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Bullet List">
          <IconButton onClick={() => handleFormat('ul')}>
            <FormatListBulletedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Numbered List">
          <IconButton onClick={() => handleFormat('ol')}>
            <FormatListNumberedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Emoji">
          <IconButton onClick={() => handleFormat('emoji')}>
            <InsertEmoticonIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <TextField
        multiline
        fullWidth
        minRows={8}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
        placeholder="Write your blog content here..."
        sx={blogBodyInputStyle(theme)}
      />
    </Box>
  );
}