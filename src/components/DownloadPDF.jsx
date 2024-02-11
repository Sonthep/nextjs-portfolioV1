export const DownloadLink = ({ pdfUrl, displayText }) => {
    return (
      <a className="text-[12px]" href={pdfUrl} target="_blank" download="downloaded-file.pdf">
        {displayText} 
      </a>
    );
  }