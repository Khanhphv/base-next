import React, { useCallback, useImperativeHandle, useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { extendSxProp } from '@mui/system';

const NextSlideBar = React.forwardRef((props, ref) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const show = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    collapse() {
      show();
    },
  }));

  return (
    <Box
      onTransitionEnd={e => {
        console.log(e.target.offsetWidth);
      }}
      sx={{ width: isOpen ? 300 : 100, transition: 'width 0.5s' }}>
      <List component="nav" sx={{ paddingTop: 10 }}>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Sent mail" />}
        </ListItemButton>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Drafts" />}
        </ListItemButton>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Sent mail" />}
        </ListItemButton>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Sent mail" />}
        </ListItemButton>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Sent mail" />}
        </ListItemButton>
        <ListItemButton sx={{ whiteSpace: 'nowrap', height: 50 }}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Sent mail" />}
        </ListItemButton>
      </List>
    </Box>
  );
});

export default NextSlideBar;
