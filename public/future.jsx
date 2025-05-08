/****  Future attempt at using React-Quill for BlogBodyInput ****/

// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import 'react-quill-new/dist/quill.snow.css';
// import { Box, Typography, useTheme } from '@mui/material';

// const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

// export default function BlogBodyInput({ value, onChange }) {
//   const [quillLoaded, setQuillLoaded] = useState(false);
//   const theme = useTheme();

//   useEffect(() => {
//     import('react-quill-new').then((quillModule) => {
//       if (quillLoaded) return;
//       const Quill = quillModule.Quill;

//       const SizeStyle = Quill.import('attributors/style/size');
//       SizeStyle.whitelist = ['10px', '12px', '14px', '16px', '18px', '24px', '30px', '36px'];
//       Quill.register(SizeStyle, true);

//       const Font = Quill.import('attributors/class/font');
//       Font.whitelist = [
//         'arial', 'georgia', 'helvetica', 'times-new-roman',
//         'courier-new', 'verdana', 'tahoma', 'lucida',
//         'impact', 'comic-sans',
//       ];
//       Quill.register(Font, true);

//       setQuillLoaded(true);
//     });
//   }, [quillLoaded]);

//   if (!quillLoaded) {
//     return (
//       <Box sx={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Typography sx={{ color: theme.palette.text.secondary }}>
//           Loading editor...
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ mt: 2 }}>
//       <Box
//         sx={{
//           overflow: 'auto',
//           height: 250,
//           borderRadius: 2,
//           boxShadow: theme.shadows[2],
//           border: `1px solid ${theme.palette.divider}`,
//           backgroundColor: theme.palette.background.paper,
//         }}
//       >
//         <ReactQuill
//           theme="snow"
//           value={value}
//           onChange={onChange}
//           style={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             fontSize: '12px',
//             height: '100%',
//             borderRadius: theme.shape.borderRadius,
//             overflow: 'auto',
//           }}
//           modules={{
//             toolbar: [
//               [{ font: [
//                 'arial', 'georgia', 'helvetica', 'times-new-roman',
//                 'courier-new', 'verdana', 'tahoma', 'lucida',
//                 'impact', 'comic-sans'
//               ] }],
//               [{ size: ['10px', '12px', '14px', '16px', '18px', '24px', '30px', '36px'] }],
//               ['bold', 'italic', 'underline', 'strike'],
//               [{ list: 'ordered' }, { list: 'bullet' }],
//               ['link', 'image'],
//               ['clean'],
//             ],
//           }}
//           formats={[
//             'font', 'size',
//             'bold', 'italic', 'underline', 'strike',
//             'list', 'link', 'image'
//           ]}
//         />
//       </Box>
//     </Box>
//   );
// }