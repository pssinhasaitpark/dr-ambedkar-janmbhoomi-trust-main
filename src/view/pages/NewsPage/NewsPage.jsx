import React from 'react'
import { Link } from 'react-router-dom';
import { newsimg,news1} from '../../../assests/index';
import {  Row, Col, Card } from 'react-bootstrap';
const NewsPage = () => {
 
    return (
    <div className='all-section-width'>
       <div className="img-banner ">
              <img src={news1} alt="about-image" className="mb-2 all-image" />
            </div>
     
        <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 m-0 p-0 ">News and Updates</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Latest news on events related to Dr. Ambedkar's birthplace :</span> Political Leaders' Homage: In late December 2024, Defence Minister
          Rajnath Singh, accompanied by Chief of Army Staff General Upendra Dwivedi, paid floral tributes at Dr. Ambedkar's memorial in Mhow, Madhya Pradesh.
        </p>
      </div>
  
        <Row className="mb-4">
          <Col className='p-0 m-0'>
            <Card className="border-1 rounded-0">
              <Card.Body>
                <Row>
                  <Col lg={5} md={12} className="mb-3 mb-lg-0">
                    <img
                      src={newsimg}
                      alt="Dr. Ambedkar viewing documents"
                      className="w-100 h-100"
                    />
                  </Col>
                  <Col lg={7} md={12}>
                    <h5 className="mb-3 fs-4">Recent events at Dr. B.R. Ambedkar's birthplace in Mhow, Madhya Pradesh, have underscored its significance in India's socio-political landscape:</h5>
                    <h6 className='fs-5'>Political Gatherings and Rallies:</h6>
                    <ul className='lh-base'>
                      <li className='fs-5'>Congress Party's 'Samvidhan' Rally: On January 26, 2025, Congress leaders Mallikarjun Kharge and Rahul Gandhi visited Mhow to launch the "Jai Bapu, Jai Bhim, Jai Samvidhan" rally. This event aimed to honor Dr. Ambedkar's legacy and address concerns over constitutional values.</li>
                      <li className='fs-5'>BJP's Response: In anticipation of the Congress rally, BJP state president V.D. Sharma criticized the Congress, urging its leaders to apologize for past injustices towards Dr. Ambedkar before holding events in Mhow.</li>
                      <li className='fs-5'>Memorial Developments:</li>
                      <li className='fs-5'>Enhancements to Ambedkar Memorial: Madhya Pradesh Chief Minister Mohan Yadav announced plans to establish additional faculties at Dr. B.R. Ambedkar University of Social Sciences in Mhow. This initiative aims to further educational opportunities and honor Dr. Ambedkar's contributions.</li>
                    </ul>
  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className='border rounded-0'>
          <Row className="">
            <Col className='p-0 m-0'>
              <h5 className="mb-3 p-4 pb-0 fs-4">Articles, media coverage, and updates about ongoing projects: Dr. B.R. Ambedkar's multifaceted contributions have been the subject of extensive scholarly analysis. Here are some notable articles that delve into various aspects of his life and work</h5>
            </Col>
          </Row>
          <Row className="">
            <Col lg={6} md={12} className="mb-3 p-0 m-0">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Row>
                    <Col xs={5}>
                      <img
                        src={newsimg}
                        alt="Dr. Ambedkar"
                        className="img-fluid h-100"
                      />
                    </Col>
                    <Col xs={7}>
                      <p className='fs-5 mb-3 fw-medium'>Dr. B.R. Ambedkar as a Nation-Builder</p>
                      <p className="fs-5 lh-base">This article examines Ambedkar's pivotal role in shaping modern India, highlighting his efforts in promoting constitutionalism and social reforms</p>
                      <p><Link to="/" className="text-decoration-none text-dark fw-bold fs-5">ReadMore...</Link></p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} className="mb-3 p-0 m-0">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Row>
                    <Col xs={5}>
                      <img
                        src={newsimg}
                        alt="Dr. Ambedkar"
                        className="img-fluid h-100"
                      />
                    </Col>
                    <Col xs={7}>
                    <p className='fs-5 mb-3 fw-medium'>Organic Intellectuals from Modern India: B.R. Ambedkar and R.M. Lohia</p>
  
                    <p className="fs-5 lh-base">This study revisits the intellectual history of inequality through the perspectives of Ambedkar and Lohia, focusing on their critiques of social hierarchies.</p>
                    <p><Link to="/" className="text-decoration-none text-dark fw-bold fs-5">ReadMore...</Link></p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="">
            <Col lg={6} md={12} className="mb-3 p-0 m-0">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Row>
                    <Col xs={5}>
                      <img
                        src={newsimg}
                        alt="Dr. Ambedkar"
                        className="img-fluid h-100"
                      />
                    </Col>
                    <Col xs={7}>
                    <p className='fs-5 mb-3 fw-medium'>Dr. B.R. Ambedkar, Navayana Buddhism, and Complexity in Social Work</p>
                    <p className="fs-5 lh-base">This paper explores Ambedkar's reinterpretation of Buddhism and its implications for social work, emphasizing his approach to addressing systemic social issues.</p>
                    <p><Link to="/" className="text-decoration-none text-dark fw-bold fs-5">ReadMore...</Link></p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} className="mb-3 p-0 m-0">
              <Card className="h-100 border-0">
                <Card.Body>
                  <Row>
                    <Col xs={5}>
                      <img
                        src={newsimg}
                        alt="Dr. Ambedkar"
                        className="img-fluid h-100"
                      />
                    </Col>
                    <Col xs={7}>
                    <p className='fs-5 mb-3 fw-medium'>Understanding Dr. B.R. Ambedkar's Vision for Cinema in India</p>
                    <p className="fs-5 lh-base">This article analyzes Ambedkar's insights into the medium of film, based on a rarely discussed interview, and discusses his vision for cinema as a tool for social change.</p>
                    <p><Link to="/" className="text-decoration-none text-dark fw-bold fs-5">ReadMore...</Link></p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Row className="my-4">
          <Col className='p-0 m-0'>
          <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Articles, media coverage, and updates about ongoing projects :</span> Dr. B.R. Ambedkar's enduring legacy continues to inspire various initiatives and projects aimed at promoting social justice and equality. Here's an overview of recent media coverage and ongoing projects related to Dr. Ambedkar:
        </p>
          </Col>
        </Row>
       
  
        <Row className="mb-4">
        <Col className='p-0 m-0'>
            <Card className="border rounded-0">
              <Card.Body>
                <Row>
                  <Col md={5} sm={12} className="mb-3 mb-md-0">
                    <img
                      src={newsimg}
                      alt="Dr. Ambedkar reading document"
                      className="img-fluid w-100 h-100"
                    />
                  </Col>
                  <Col md={7} sm={12}>
                    <h5 className="mb-3 fs-4">Media Coverage</h5>
                    <div className="mb-4 fs-5">
                    <p className='fs-5 fw-medium p-0 m-0'>1. Dr. Ambedkar's Perspective on Journalism</p>
                      <p className='lh-lg fs-5'>Dr. Ambedkar was critical of the mainstream media of his time, believing it marginalized the issues of marginalized communities. He emphasized that journalism should enlighten readers, foster new thinking, and develop a scientific outlook. His critique of media bias remains relevant, highlighting the need for inclusive and unbiased reporting.</p>
                    </div>
                    <div className="mb-4 fs-5">
                    <p className='fs-5 fw-medium p-0 m-0'>2. Celebrating Ambedkar, the Journalist</p>
                      <p className='lh-lg fs-5'>Beyond his roles as a social reformer and principal architect of the Indian Constitution, Dr. Ambedkar was also a journalist who founded several newspapers to voice the concerns of the oppressed. He believed that mainstream media was biased and did not adequately report on the atrocities faced by Dalits, leading him to establish his own publications.</p>
                    </div>
  
                  </Col>
                  <div className='mt-4 fs-5'>
                  <p className=" fw-medium  mt-2 paragraph-birth ">
                  <span className="fs-3">3. Media's Role in Hero-Worship</span> Dr. Ambedkar warned against the media's tendency towards hero-worship, stating that such practices could lead to degradation and eventual dictatorship. He criticized journalism that served more as glorification of leaders rather than objective reporting.</p>
                  </div>
            
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        <Row className="mb-4">
        <Col className='p-0 m-0'>
            <p className='lh-lg mb-0 fs-4'><strong className='fs-3'>Ongoing Projects :</strong> Dr. B.R. Ambedkar's legacy continues to inspire numerous projects worldwide, focusing on social justice, education, and memorialization. Here are some notable ongoing initiatives:</p>
          </Col>
        </Row>
  
        <Row className="mb-4">
        <Col className='p-0 m-0'>
            <Card className="border rounded-0">
              <Card.Body>
                <p className="fs-4 fw-medium m-0">1. Dr. Babasaheb Ambedkar Memorial in Mumbai</p>
                <p className='m-0 p-0 fs-5 mb-4'>The Government of Maharashtra is constructing a grand memorial for Dr. Ambedkar at the Indu Mills Compound in Mumbai. Known as the "Statue of Equality," this monument will feature a 137.3-meter tall bronze statue of Dr. Ambedkar atop a 30.5-meter pedestal, making it one of the tallest statues globally. The memorial will also include a stupa, a museum, and a library dedicated to his life and work. The project is expected to be completed by May 2026.</p>
  
                <p className='m-0 p-0 fs-5 mt-5'>2. Dr. Ambedkar International Centre (DAIC) in New Delhi</p>
                <p className='m-0 p-0 fs-5 mb-4'>Inaugurated on December 7, 2017, by Prime Minister Narendra Modi, the DAIC serves as a center of excellence for study and research in socio-economic transformation. Located at 15 Janpath, New Delhi, the center focuses on reducing socio-political and economic inequalities through rigorous research and policy analysis.</p>
  
                <p className='m-0 p-0 fs-5 mt-5'>3. Statue of Social Justice in Vijayawada</p>
                <p className='m-0 p-0 fs-5 mb-4'>Unveiled on January 19, 2024, by Andhra Pradesh Chief Minister Y.S. Jagan Mohan Reddy, the "Statue of Social Justice" is a 206-foot bronze statue of Dr. Ambedkar located in Vijayawada. This statue stands as a symbol of equality and social justice, honoring Dr. Ambedkar's contributions to the nation.</p>
                <p className='m-0 p-0 fs-5 mt-5'>4. Dr. Ambedkar Foundation Initiatives</p>
                <p className='m-0 p-0 fs-5 '>The Dr. Ambedkar Foundation, under the Ministry of Social Justice and Empowerment, Government of India, has undertaken several projects, including:</p>
                <ul className="pl-3 mt-1">
                  <li className='fs-5 m-0 p-0'> Publication of Dr. Ambedkar's Collected Works: Translating and publishing his works in multiple languages to reach a broader audience.</li>
                  <li className='fs-5 m-0 p-0'>Educational Schemes: Offering interest subsidies on educational loans for overseas studies to students from OBC and EBC communities.</li>
                </ul>
                <p className="m-0 p-0 fs-5">These initiatives aim to preserve and propagate Dr. Ambedkar's teachings, ensuring that his vision for an equitable society continues to inspire future generations.</p>
                <p className="m-0 p-0 fs-5">For a visual perspective on media coverage related to Dr. Ambedkar, you may find the following video insightful:</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </div>
    );
  };

export default NewsPage