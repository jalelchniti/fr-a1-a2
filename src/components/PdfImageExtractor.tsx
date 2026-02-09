// src/components/PdfImageExtractor.tsx
import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfImageExtractorProps {
  file: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const PdfImageExtractor: React.FC<PdfImageExtractorProps> = ({ file, pageNumber, x, y, width, height }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onDocumentLoadSuccess = async ({ numPages }: { numPages: number }) => {
    if (pageNumber > numPages) {
      console.error('Invalid page number');
      return;
    }
  };

  const onPageLoadSuccess = async (page: any) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const viewport = page.getViewport({ scale: 1.5 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const context = canvas.getContext('2d');
    if (!context) return;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    await page.render(renderContext).promise;

    // Create a new canvas to clip the image
    const clippedCanvas = document.createElement('canvas');
    clippedCanvas.width = width;
    clippedCanvas.height = height;
    const clippedContext = clippedCanvas.getContext('2d');
    if (!clippedContext) return;

    clippedContext.drawImage(canvas, x, y, width, height, 0, 0, width, height);
    setImageUrl(clippedCanvas.toDataURL());
  };

  return (
    <div>
      <div style={{ display: 'none' }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} canvasRef={canvasRef} onLoadSuccess={onPageLoadSuccess} />
        </Document>
      </div>
      {imageUrl && <img src={imageUrl} alt={`Page ${pageNumber}`} style={{ width: '100%' }} />}
    </div>
  );
};

export default PdfImageExtractor;
