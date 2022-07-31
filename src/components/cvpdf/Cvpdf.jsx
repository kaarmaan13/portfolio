import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import PDFViewer from "pdf-viewer-reactjs";

export default function Cvpdf() {
  const urlbase = "http://localhost:1337";
  // const [error, setError] = useState(null);
  // const [curriculum, setCurriculum] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${urlbase}/cvs`)
  //     .then(({ data }) => setCurriculum(data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) {
  //   // Print errors if any
  //   return (
  //     <div>
  //       Ha ocurrido un error: <i>{error.message}</i>
  //     </div>
  //   );
  // }
  const curriculum = [
    {
      id: 1,
      published_at: "2022-07-19T21:57:08.000Z",
      created_at: "2022-07-19T21:57:06.000Z",
      updated_at: "2022-07-19T21:57:08.000Z",
      curriculumpdf: {
        id: 3,
        name: "manuel-del-castillo-cv-202.pdf",
        alternativeText: "",
        caption: "",
        width: null,
        height: null,
        formats: null,
        hash: "manuel_del_castillo_cv_202_b9bf4f29c7",
        ext: ".pdf",
        mime: "application/pdf",
        size: 1032.19,
        url: "/uploads/manuel_del_castillo_cv_202_b9bf4f29c7.pdf",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        created_at: "2022-07-19T21:55:37.000Z",
        updated_at: "2022-07-19T21:55:37.000Z",
      },
    },
  ];

  const pdfCurriculum = `${urlbase}${curriculum[0].curriculumpdf.url}`;

  console.log(pdfCurriculum);

  return (
    <>
      <PDFViewer
        document={{
          url: {pdfCurriculum},
        }}
      />
    </>
  );
}
