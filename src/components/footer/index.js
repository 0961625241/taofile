import React, { Component } from "react";
import "./footer.css"
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer_content container">
          <div className="row footer_top">
            <div className="col-sm-3">
              <h3>CYBERMOVIE</h3>
              <p>
                Cybermovie giúp bạn mua vé trực tuyến và cập nhật thường xuyên
                các thông tin như trailer, tin tức, thông tin rạp, suất chiếu,
                các đánh giá phim, chương trình khuyến mãi từ các rạp và của
                riêng CyberPhim dành cho người sử dụng
              </p>
            </div>
            <div className="col-sm-3">
              <h3>VỀ CHÚNG TÔI</h3>
              <div className="footer_about">
                <ul>
                  <li>
                    <a href="#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#">Lịch chiếu</a>
                  </li>
                  <li>
                    <a href="#">Cụm rạp</a>
                  </li>
                  <li>
                    <a href="#">Tin tức</a>
                  </li>
                  <li>
                    <a href="#">Đăng nhập</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <h3>HỖ TRỢ KHÁCH HÀNG</h3>
              <div className="footer_support">
                <ul>
                  <li>
                    <a href>Trung tâm hỗ trợ</a>
                  </li>
                  <li>
                    <a href>Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href>Quy chế hoạt động</a>
                  </li>
                  <li>
                    <a href>Quyền lợi thành viên</a>
                  </li>
                  <li>
                    <a href>Câu hỏi thành viên</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <h3>ĐỐI TÁC</h3>
              <div className="footer_partner">
                <a href="https://www.cgv.vn/" target="_blank">
                  <img
                    src="./img/cgv_icon.jpg"
                    alt
                    height="30px"
                    width="30px"
                  />
                </a>
                <a href="http://bhdstar.vn/" target="_blank">
                  <img
                    src="./img/bhd_icon.png"
                    alt
                    height="30px"
                    width="30px"
                  />
                </a>
                <a href="http://galaxycine.vn/" target="_blank">
                  <img
                    src="./img/galaxy_icon.jpg"
                    alt
                    height="30px"
                    width="30px"
                  />
                </a>
                <a
                  href="https://www.techcombank.com.vn/trang-chu"
                  target="_blank"
                >
                  <img
                    src="./img/techcombank.png"
                    alt
                    height="30px"
                    width="30px"
                  />
                </a>
                <a
                  href="https://portal.vietcombank.com.vn/Pages/Home.aspx"
                  target="_blank"
                >
                  <img
                    src="./img/vietcombank_icon.png"
                    alt
                    height="30px"
                    width="30px"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row footer_bottom">
            <div className="col-sm-6 text-left">
              <h3>CHẤP NHẬN THANH TOÁN</h3>
              <div className="footer_bottom_img">
                <a href="https://naspa.com/" target="_blank">
                  <img src="./img/naspas.png" alt />
                </a>
                <a
                  href="https://www.visa.com.vn/vi_VN/pay-with-visa/find-a-card/credit-cards.html"
                  target="_blank"
                >
                  <img src="./img/visa.png" alt />
                </a>
                <a href="https://www.mastercard.us/en-us.html" target="_blank">
                  <img src="./img/master.png" alt />
                </a>
                <a href="https://momo.vn/" target="_blank">
                  <img src="./img/momo.jpg" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
