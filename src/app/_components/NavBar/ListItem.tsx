// 'use client'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/navigation'
import SendIcon from '@mui/icons-material/Send';

interface listItemProps {
    url: string;
}

export default function ListItem({url}: listItemProps) {
  const router = useRouter()

return (
    <ListItemButton  onClick={() => router.push('pokemon')}>
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary={url} />
    </ListItemButton>)
}