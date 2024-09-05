import './Grid.css';
import { toPng } from 'html-to-image';
import { Button, Snackbar, CircularProgress } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import { Cell } from '../Cell/Cell';

export function Grid({ width, height }: { width: number; height: number }) {
  const elementRef = useRef(null);

  const [errorOpen, setErrorOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(Math.random());
  const [pxWidth, setPxWidth] = useState(0);
  const [pxHeight, setPxHeight] = useState(0);

  const handleSaveClick = () => {
    setIsLoading(true);
    if (elementRef.current) {
      toPng(elementRef.current, { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'generated-image.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(() => {
          setErrorOpen(true);
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (elementRef.current) {
      setPxWidth((elementRef.current as any).offsetWidth);
      setPxHeight((elementRef.current as any).offsetHeight);
    }

    const handleResize = () => {
      if (elementRef.current) {
        setPxWidth((elementRef.current as any).offsetWidth);
        setPxHeight((elementRef.current as any).offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isLoading && <CircularProgress />}
      <Snackbar
        open={errorOpen}
        autoHideDuration={5000}
        onClose={() => setErrorOpen(false)}
        message="Problem saving image. Please try again later."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      <div className="Grid" ref={elementRef} key={key}>
        {Array.apply(null, Array(width)).map((column, columnIndex) => {
          return (
            <div key={`${column}-${columnIndex}`}>
              {Array.apply(null, Array(height)).map((row, rowIndex) => {
                return (
                  <Cell
                    pxWidth={pxWidth}
                    width={width}
                    height={height}
                    pxHeight={pxHeight}
                    key={`${row}-${rowIndex}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="ButtonContainer">
        <div className="Button">
          <Button variant="contained" onClick={() => setKey(Math.random())}>
            Generate New Art
          </Button>
        </div>
        <div className="Button">
          <Button variant="contained" onClick={handleSaveClick}>
            Save Image
          </Button>
        </div>
      </div>
    </div>
  );
}
