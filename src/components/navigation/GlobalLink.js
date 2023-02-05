import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

const GlobalLink = ({defaultValue}) => {
  const [copy, setCopy] = useState(false);
  const clipboard = useClipboard();
  const onFocus = (e) => e.target.select();
  const onClick = function () {
    clipboard.copy();
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className='GlobalLink-container'>
      <input ref={clipboard.target} defaultValue={defaultValue} onFocus={onFocus} className="g-link" />
      <button onClick={onClick} className="GlobalLink--button">{copy === true 
        ? <DoneIcon sx={{ width: '12px', height: '12px', color: '#1976d2'}}/> 
        : <ContentCopyIcon sx={{ width: '12px', height: '12px'}}/>
      }</button>
    </div>
  )
}

export default GlobalLink;