'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Button, TextField, Typography, Chip, Stack, Tooltip, Snackbar, Alert } from '@mui/material';
import CoverImageUpload from './inputComponents/CoverImageUpload'
import BlogTitleInput from './inputComponents/BlogTitleInput'
import BlogTagsInput from './inputComponents/BlogTagsInput'
import BlogBodyInput from './inputComponents/BlogBodyInput'
import Header from './structure/Header';
import Footer from './structure/Footer';




export default function CreateBlog({ handleClose, triggerRefresh }) {
  const { data: session } = useSession();
  // State declarations
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

// Submitting
const handleSubmit = async () => {
  // Parse blogdata, make any needed adjustments, then post to DB

  const blogData = {
    authorUsername: session?.user?.name || 'Anonymous',
    authorAvatar: session?.user?.image || 'https://ui-avatars.com/api/?name=A&background=aaa&color=fff&bold=true',
    title,
    body: body,
    tags,
    coverImageUrl: coverImage,
  };

  try {
    const res = await fetch('/api/blogs/newBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || 'Something went wrong');

    setSuccessOpen(true);
    setTimeout(() => { triggerRefresh(); handleClose(); }, 1500);
  } catch (err) {
    console.log(' Blog creation error:', err.message);
    alert(`Error: ${err.message}`);
  }
};

  // Ensure all required fields are obtained from user
  const isFormComplete = title && coverImage && body && tags.length > 0;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '75dvh'}} >
      {/* Pinned Header */}
      <Header
        handleClose={handleClose}
        isFormComplete={isFormComplete}
        handleSubmit={handleSubmit}
        successOpen={successOpen}
        setSuccessOpen={setSuccessOpen}
      />

      {/* Scrollable Form Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 3,
          pl:0,
          pr:5,
        }}
      >

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',

          gap: 3,
          p: 1,
        }}>
          <BlogTitleInput title={title} setTitle={setTitle} />
          <BlogBodyInput value={body} onChange={setBody} />

          <CoverImageUpload onUpload={(url) => setCoverImage(url)} />
          <BlogTagsInput
            tags={tags}
            setTags={setTags}
            tagInput={tagInput}
            setTagInput={setTagInput}
          />
        </Box>

      </Box>


      <Footer isFormComplete={isFormComplete}
        handleSubmit={handleSubmit}
        successOpen={successOpen}
        setSuccessOpen={setSuccessOpen} />
    </Box>
  );
}