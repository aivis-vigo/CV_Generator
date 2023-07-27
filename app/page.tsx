"use client";
import React, { useRef, useState } from 'react';
import useFormInput from './input';
import { PDFViewer } from '@react-pdf/renderer';
import CV from './pdf';

function PersonData() {
  const name = useFormInput('');
  const objective = useFormInput('');
  const email = useFormInput('');
  const phone = useFormInput('');
  const location = useFormInput('');
  const website = useFormInput('');

  return (
    <div className="flex">
      <div className="flex flex-col w-full p-8">
        <div className="border-2 rounded-lg">
          <div>
            Name:
            <input type="text" {...name} className="text-black" />
          </div>

          <div>
            Objective:
            <input type="text" {...objective} className="text-black" />
          </div>

          <div className="flex justify-between">
            <div>
              Email:
              <input type="email" {...email} className="text-black" />
            </div>
            <div>
              Phone:
              <input type="number" {...phone} className="text-black" />
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              Location:
              <input type="text" {...location} className="text-black" />
            </div>

            <div>
              Website:
              <input type="text" {...website} className="text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-1/2 p-8 dark:text-white">
          <p>{name.value}</p>
          <p>{objective.value}</p>
          <p>{email.value}</p>
          <p>{phone.value}</p>
          <p>{location.value}</p>
          <p>{website.value}</p>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  const [formData, setPersonData] = useState({})

  return (
      <PDFViewer className="w-1/2 h-screen">
          <CV person={formData} />
      </PDFViewer>
  )
};

export default function HomePage() {
  return (
    <main>
      <div className="flex">
        <PersonData />
        <App />
      </div>
    </main>
  )
}

{/*
function GeneratePDF() {
  const handleDownloadPDF = () => {
    const input = document.getElementById('content');

    const pdfWidth = 210;
    const pdfHeight = 297;

    html2canvas(input as HTMLInputElement, { scale: 5 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv.pdf');
    });
  };

  return (
    <main>
      <div id="content">
        <PersonData />
      </div>

      <button onClick={handleDownloadPDF}>Download PDF</button>
    </main>
  )
}
*/}