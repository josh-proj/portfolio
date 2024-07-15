const handleDownload = () => {
    // Path to the PDF file
    const pdfPath = '../public/CV_JoshSG.pdf';

    // Fetch the PDF file
    fetch(pdfPath)
        .then(response => response.blob())
        .then(blob => {
            // Create a temporary URL for the PDF blob
            const url = window.URL.createObjectURL(blob);

            // Create a temporary <a> element to trigger the download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CV_JoshSG.pdf'; // Set the desired file name
            document.body.appendChild(a);

            // Simulate a click on the <a> element to trigger the download
            a.click();

            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(error => console.error('Error fetching PDF:', error));
};