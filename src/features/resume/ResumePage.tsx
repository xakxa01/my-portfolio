import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { IconExternalLink } from "@tabler/icons-react";
import "@/styles/components/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const publicId = import.meta.env.VITE_CLOUDINARY_RESUME_PUBLIC_ID;
const inferredResourceType = publicId?.toLowerCase().endsWith(".pdf") ? "raw" : "image";
const resourceType = (import.meta.env.VITE_CLOUDINARY_RESUME_RESOURCE_TYPE ?? inferredResourceType).toLowerCase();

const buildResumeUrl = () => {
  if (!cloudName || !publicId) return "";
  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${publicId}`;
};

const ResumePage = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageWidth, setPageWidth] = useState(900);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const missingConfig = !cloudName || !publicId;
  const resumeUrl = useMemo(() => buildResumeUrl(), []);

  if (missingConfig) {
    return (
      <main className="resume__page">
        <section className="resume__card">
          <h1 className="resume__title">Resume</h1>
          <p className="resume__text">
            Missing Cloudinary configuration. Add
            <code> VITE_CLOUDINARY_CLOUD_NAME </code>
            and
            <code> VITE_CLOUDINARY_RESUME_PUBLIC_ID </code>
            in your environment.
          </p>
          <a href="/" className="resume__backLink">
            Back to portfolio
          </a>
        </section>
      </main>
    );
  }

  useEffect(() => {
    const element = viewerRef.current;
    if (!element) return;

    const updateWidth = () => {
      const nextWidth = Math.max(280, Math.floor(element.clientWidth - 24));
      setPageWidth(nextWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="resume__page">
      <header className="resume__header">
        <h1 className="resume__title">Resume</h1>
        <div className="resume__actions">
          <a href="/" className="resume__backLink">
            Back to portfolio
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume__openLink"
          >
            <IconExternalLink size={18} aria-hidden />
            Open original
          </a>
        </div>
      </header>

      <section className="resume__viewer" aria-label="Resume preview" ref={viewerRef}>
        <Document
          file={resumeUrl}
          onLoadSuccess={({ numPages: loadedPages }) => setNumPages(loadedPages)}
          loading={<p className="resume__status">Loading resume...</p>}
          error={<p className="resume__status">Could not load PDF. Verify Cloudinary public ID and access settings.</p>}
          className="resume__pdfDoc"
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="resume__pdfPage"
            />
          ))}
        </Document>
      </section>
    </main>
  );
};

export default ResumePage;
