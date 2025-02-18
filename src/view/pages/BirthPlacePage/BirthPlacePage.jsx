import React from 'react'
import { birth, birth1, birth2, dajt } from "../../../assests/index.js";
const BirthPlacePage = () => {
  return (
    <div className="container">
    <div className="img-banner mt-3">
      <img src={dajt} alt="about-image" className="w-100" />
    </div>
    <div className=" ">
      <h2 className="text-uppercase fs-1 mt-4">The Birthplace</h2>
      <p className="mb-4 fs-5">Dr. Bhimrao Ambedkar</p>
      <p className="fs-5 fw-medium lh-lg">
        <span className="fs-3">Birthplace:</span> Dr. B.R. Ambedkar – Mhow,
        Madhya Pradesh Dr. Bhimrao Ramji Ambedkar was born on April 14,
        1891, in Mhow, a British military cantonment in present-day Madhya
        Pradesh, India. His birthplace holds great historical significance
        as the origin of one of India's greatest social reformers, who later
        became the architect of the Indian Constitution and a champion of
        Dalit rights, social justice, and equality.
      </p>
    </div>
    <div className="border p-4 mt-4 shadow-sm mb-4 ">
      <h5 className="fs-3">
        Historical Significance of Dr. B.R. Ambedkar’s Birthplace
      </h5>
      <ul>
        <li className="fs-5 lh-lg">
          {" "}
          Dr. Bhimrao Ramji Ambedkar was a multifaceted personality—an
          economist, social reformer, jurist, and principal architect of the
          Indian Constitution. His major achievements include:
        </li>
        <p className="fs-5 m-0 lh-base">
          {" "}
          a.Symbol of Social Justice Movement: Mhow is where the journey of
          India’s foremost social reformer and the father of the Indian
          Constitution began. His early life experiences with caste
          discrimination shaped his lifelong fight for equality, justice,
          and human rights.{" "}
        </p>
        <p className="fs-5 m-0 lh-base">
          {" "}
          b.Inspiration for Dalit Rights: Being born in an oppressed
          community, Ambedkar’s life from Mhow to global academic
          institutions became an inspiration for marginalized communities to
          pursue education and self-respect{" "}
        </p>

        <p className="fs-5 m-0 lh-base">
          {" "}
          c.Now a National Memorial: Today, his birthplace is recognized as
          "Dr. Ambedkar Nagar," featuring monuments and memorials that
          attract visitors, scholars, and leaders who seek to understand and
          honor his legacy.
        </p>
      </ul>

      <ul>
        <li className="fs-5  lh-base">
          {" "}
          Mhow remains a sacred site for social justice movements,
          symbolizing Ambedkar’s transformative vision for an equal and
          democratic India.{" "}
        </li>
      </ul>
    </div>
    <div className="row mt-3">
      <div className="col-sm-4">
        <img src={birth} alt="birth-image" />
      </div>
      <div className="col-sm-4">
        <img src={birth1} alt="birth-image" />
      </div>
      <div className="col-sm-4">
        <img src={birth2} alt="birth-image" />
      </div>
    </div>
    <div className="border p-4 mt-4 shadow-sm">
        <p></p>
      <h5 className="fs-3">Timeline of the Development of Dr. B.R. Ambedkar’s Birthplace (Mhow, Madhya Pradesh) </h5>
      <p className="fs-5 lh-base">
      Dr. B.R. Ambedkar’s birthplace in Mhow (now Dr. Ambedkar Nagar), Madhya Pradesh, has evolved over the years into a site of national significance, with several initiatives aimed at preserving his legacy. Here’s a timeline of its development 1. British Era & Early Years (1891–1947) ✅ April 14, 1891 – Dr. B.R. Ambedkar was born in Mhow, a British military cantonment.
      </p>
      <p className="fs-5  lh-base">
        {" "}
        ✅ 1907 – Passed Matriculation (10th standard), first from his
        community to do so.
      </p>
      <p className="fs-5  lh-base">
        ✅ 1912 – Graduated with a degree in Economics & Political Science
        from Bombay University.
      </p>
      <p className="fs-5 lh-base">
        {" "}
        ✅ 1913 – Won a scholarship from the Maharaja of Baroda to study in
        the U.S.
      </p>
      <p className=" fs-5 lh-base">
        {" "}
        ✅ 1915 – Earned a Master’s degree in Economics from Columbia
        University, New York.
      </p>
      <p className="fs-5  lh-base">
        ✅ 1916 – Presented a research paper on caste discrimination at
        Columbia University.
      </p>
      <p className="fs-5 lh-base">
        {" "}
        ✅ 1917 – Joined London School of Economics & Gray’s Inn to study
        law and economics.
      </p>
      <p className="fs-5 lh-base mb-4">
        {" "}
        ✅ 1923 – Earned Doctor of Science (D.Sc.) in Economics from London.
      </p>
      <h5 className="fs-3 m-3">Social and Political Reforms (1924–1947)</h5>
      <p className="fs-5 lh-base mt-1">
        {" "}
        ✅ April 14, 1891 – Born in Mhow, Madhya Pradesh, into the Mahar
        caste (considered untouchables).
      </p>
      <p className="fs-5  lh-base">
        {" "}
        ✅ 1907 – Passed Matriculation (10th standard), first from his
        community to do so.
      </p>
      <p className="fs-5  lh-base">
        ✅ 1912 – Graduated with a degree in Economics & Political Science
        from Bombay University.
      </p>
      <p className="fs-5 lh-base">
        {" "}
        ✅ 1913 – Won a scholarship from the Maharaja of Baroda to study in
        the U.S.
      </p>
      <p className=" fs-5 lh-base">
        {" "}
        ✅ 1915 – Earned a Master’s degree in Economics from Columbia
        University, New York.
      </p>
      <p className="fs-5  lh-base">
        ✅ 1916 – Presented a research paper on caste discrimination at
        Columbia University.
      </p>
      <p className="fs-5 lh-base">
        {" "}
        ✅ 1917 – Joined London School of Economics & Gray’s Inn to study
        law and economics.
      </p>
      <p className="fs-5 lh-base">
        {" "}
        ✅ 1923 – Earned Doctor of Science (D.Sc.) in Economics from London.
      </p>
    </div>
  </div>
  )
}

export default BirthPlacePage