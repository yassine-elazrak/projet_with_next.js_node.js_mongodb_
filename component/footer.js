import React, { Component } from 'react'

export class footer extends Component {
	render() {
		return (
			<>
				<footer className="page-footer font-small pt-4">

					<div className="container-fluid text-center blue text-md-left ">

						<div className="row">
							<div className="col-md-4   mt-md-0 mt-3 c4">

								<h5 className="text-uppercase" dir="rtl" > <u>تابع توصيله علي</u></h5>
								<div className="mb-5 ">

									<a className="fb-ic">
										<i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
									</a>
									<a className="tw-ic">
										<i className="fab fa-twitter fa-lg white-text mr-4"> </i>
									</a>

									<a className="ins-ic">
										<i className="fab fa-instagram fa-lg white-text mr-4"> </i>
									</a>

								</div>
							</div>


							<div className="line"></div>

							<div className="col-md-4   mb-md-0 mb-3 c4 " dir="rtl">


								<h5 className="text-uppercase"></h5>
								<br></br>

								<ul className="list-unstyled" dir="rtl">
									<li dir="rtl">
										<a href="#!" dir="rtl" >من نحن </a>
									</li>
									<li>
										<a href="#!" dir="rtl" >تواصل معنا</a>
									</li>
									<li>
										<a href="#!" dir="rtl"> سياسية خصوصية</a>
									</li>
									<li>
										<a href="#!" dir="rtl" ></a>
									</li>
								</ul>

							</div>



							<div className="line"></div>
							< div className="col-md-4   mb-md-0 mb-3 c4" >


								<h5 className="text-uppercase">
									<u dir="rtl" >موقع توصيله   </u></h5>

								<ul className="list-unstyled">
									<li>
										<a href="#!" dir="rtl" >الذين</a>
									</li>
									<li>
										<a href="#!" dir="rtl" >كيف يعمل الموقع</a>
									</li>
									<li>
										<a href="#!" dir="rtl">الأسئلة الشائعة</a>
									</li>
									<li>
										<a href="#!" dir="rtl">اعرف كيف تضمن حقوقك</a>
									</li>
								</ul>

							</div >



						</div>


					</div>



					<div className="footer-copyright text-center py-3 ft"   >© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> tawsila.com</a>
					</div>

				</footer>

				<style jsx>{`
				
				.line {
					width: 2px;
					border-left: 2px solid white;
					margin-bottom: 40px !important;
					margin-top: 40px !important;
					padding-bottom: 0px !important;
					padding-top: 0px;
				}
				.blue {
					background-color: #355c7d !important;
				}

				.list-unstyled  {
					list-style: none;
					text-align: right !important;
					padding-right: 40%;
				}
				.text-uppercase {
					text-transform: uppercase !important;
					font-weight: 900;
					text-align: center !important;
					padding: 20px;
				}
				.text-md-left {
					text-align: center !important;
				}
				a:hover {
					color: #0056b3;
					text-decoration: underline;
				}
				footer.page-footer .ft {
					overflow: hidden;
					color: #fff;
					background-color: #355c90;
				}
				.c4 {
					flex: 0 0 33.333333%;
					max-width: 33%;
					font-family: droid_arabic_naskh_regular;
				}

				`}</style>
			</>
		)
	}
}

export default footer









