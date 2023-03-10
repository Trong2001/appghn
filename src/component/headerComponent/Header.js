import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineRight,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { authProvider } from "../../app/Context/AuthProvider";
import { auth } from "../../app/firebase/configfb";
import "./header.css";

export default function Header() {
  const handleModalTablet = () => {
    const modalTablet = document.getElementById("modalTablet");
    const overlayModal = document.getElementById("overlayModal");
    overlayModal.classList.remove("hidden");
    modalTablet.classList.remove("hidden");
  };
  const closeModal = () => {
    const modalTablet = document.getElementById("modalTablet");
    const overlayModal = document.getElementById("overlayModal");
    const modalInformations = document.getElementById("modalInformations");
    const modalService = document.getElementById("modalService");

    modalTablet.classList.add("hidden");
    modalService.classList.add("hidden");
    overlayModal.classList.add("hidden");
    modalInformations.classList.add("hidden");
  };
  const handleCloseService = () => {
    const modalTablet = document.getElementById("modalTablet");
    const modalService = document.getElementById("modalService");
    modalTablet.classList.remove("hidden");
    modalService.classList.add("hidden");
  };
  const handleModalService = () => {
    const modalService = document.getElementById("modalService");
    const modalTablet = document.getElementById("modalTablet");
    const overlayModal = document.getElementById("overlayModal");

    overlayModal.classList.remove("hidden");
    modalTablet.classList.add("hidden");
    modalService.classList.remove("hidden");
  };
  const handleModalInformation = () => {
    const modalInformations = document.getElementById("modalInformations");
    const modalTablet = document.getElementById("modalTablet");
    const overlayModal = document.getElementById("overlayModal");

    modalInformations.classList.remove("hidden");
    overlayModal.classList.remove("hidden");
    modalTablet.classList.add("hidden");
  };

  const handleCloseInformations = () => {
    const modalTablet = document.getElementById("modalTablet");
    const modalInformations = document.getElementById("modalInformations");
    modalTablet.classList.remove("hidden");
    modalInformations.classList.add("hidden");
  };
  const [hideenModal, setHiddenModal] = useState(false);
  const redirect = useNavigate();
  let user = useContext(authProvider);

  const handleLogout = () => {
    if (window.confirm("B???n c?? mu???n ????ng xu???t?") === true) {
      signOut(auth)
        .then(() => redirect("/"))
        .catch(() => console.log("Logout failed"));
    } else {
    }
  };

  return (
    <div className="h-[86px] fixed z-20 laptop:-ml-52">
      <nav className="bg-white tablet:w-full laptop:ml-4 tablet:mr-[20rem]">
        <div className="laptop:flex laptop:justify-between container laptop:m-auto">
          <div className="laptop:flex items-center mobile:hidden">
            <div className="navbar-header laptop:block mobile:hidden max-w-[14%]">
              <Link to="/">
                <img src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=491" />
              </Link>
            </div>
            <ul className="nav navbar-nav laptop:block items-center text-center">
              <li>
                <Link
                  className="hover:border-b-primary border-transparent mr-2 hover:bg-zinc-900 font-semibold text-2xl hover:text-primary border-b-2"
                  to="/"
                >
                  TRANG CH???
                </Link>
              </li>
              <li
                className="icon-transform leading-8 dropdown border-b-primary mr-2 hover:border-b-0 font-semibold text-2xl"
                href="#"
              >
                <div className="inline-flex items-end mt-6 hover:text-primary">
                  <p className="mr-2">D???CH V???</p>
                  <span className="">
                    <ion-icon
                      style={{ fontSize: "12px" }}
                      name="chevron-down-outline"
                    ></ion-icon>
                  </span>
                </div>

                <ul className="dropdown-menu p-6">
                  <div className="row w-[600px] container h-[252px]">
                    <div className=" text-center h-[152px]">
                      <div className="p-4 pt-8 col-sm-6 h-full border-[1px] border-x-primary border-t-primary">
                        <Link
                          className="flex hover:no-underline"
                          to="/ghn-express"
                        >
                          <div className="imgGhn bg-ghn"></div>
                          <div className="pl-4 text-left">
                            <h2 className="pb-4 text-2xl font-semibold text-[#00467f]">
                              GHN EXPRESS
                            </h2>
                            <p className="leading-10 tracking-wide hover:text-primary">
                              D???ch v??? giao h??ng th????ng m???i
                              <br></br> ??i???n t???, giao nhanh to??n qu???c,<br></br>{" "}
                              mi???n ph?? thu h??? COD, mi???n ph??<br></br> giao l???i,
                              mi???n ph?? tr??? h??ng.
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="p-4 pt-8 col-sm-6 h-full border-[1px] border-r-primary border-t-primary">
                        <Link
                          className="flex hover:no-underline"
                          to="/ghn-fullfilment"
                        >
                          <div className="imgGhn bg-ghn"></div>
                          <div className="pl-4 text-left">
                            <h2 className="pb-4 text-2xl font-semibold text-[#00467f]">
                              GHN FULFILLMENT
                            </h2>
                            <p className="tracking-tight leading-10  hover:text-primary">
                              D???ch v??? kho b??i v?? x??? l?? h??ng h??a,<br></br> di???n
                              t??ch kho b??i h??n 100.000m2<br></br> gi??p b???n t???i
                              ??u nhu c???u xu???t-<br></br>nh???p-t???n kho.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="h-[90px] col-sm-12 border-[1px] p-4 pt-8  border-primary">
                      <a
                        className="flex hover:no-underline"
                        href="https://www.ahamove.com/"
                      >
                        <div className="imgGhn bg-ahamove"></div>
                        <div className="pl-4 text-left">
                          <h2 className="pb-4 text-2xl font-semibold text-[#00467f]">
                            AHAMOVE
                          </h2>
                          <p className="tracking-tight leading-10  hover:text-primary">
                            D???ch v??? giao h??ng t???c th???i 30 ph??t - 4 gi??? trong n???i
                            th??nh H??? Ch?? Minh v?? H?? N???i.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </ul>
              </li>
              <li>
                <Link
                  className="border-b-primary mr-2 font-semibold text-2xl hover:text-primary hover:border-b-2"
                  to="/pages/notification"
                >
                  TIN T???C
                </Link>
              </li>

              <li
                className="font-semibold mt-6 mr-2 text-2xl icon-transform dropdown hover:shadow-orange-500 border-b-primary hover:border-b-0"
                // href="#"
              >
                <div className="inline-flex hover:text-primary ">
                  <p className=" mr-2">TH??M TH??NG TIN</p>
                  <span className="">
                    <ion-icon
                      style={{ fontSize: "12px" }}
                      name="chevron-down-outline"
                    ></ion-icon>
                  </span>
                </div>
                <ul className="dropdown-menu">
                  <div className="row w-[352px] pl-6">
                    <div className="col-sm-6">
                      <ul className="font-normal text-2xl">
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/ve-ghn"
                          >
                            V??? GHN
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="#"
                          >
                            PROFILE GHN
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/table-price"
                          >
                            B???NG GI??
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/technolgy-ghn"
                          >
                            C??NG NGH???
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="#"
                          >
                            B??U C???C
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="font-normal text-2xl">
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/contact-ghn"
                          >
                            LI??N H???
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/xu-ghn"
                          >
                            GHN XU
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="/pages/work-ghn"
                          >
                            TUY???N D???NG
                          </Link>
                        </li>
                        <li className="py-4">
                          <Link
                            className="hover:no-underline hover:text-primary"
                            to="#"
                          >
                            TIP B??N H??NG
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>

          <div className="laptop:flex laptop:items-center tablet:pt-6 mobile:pt-6 laptop:pb-6 text-center">
            {user !== undefined ? (
              <div className="flex w-[250px] items-center relative">
                {user.photoURL ? (
                  <img
                    className="rounded-full w-[40px] h-[40px] mr-2"
                    src={user.photoURL}
                  ></img>
                ) : (
                  <p className="mr-2 text-2xl font-medium">Xin ch??o</p>
                )}
                <p className="font-medium text-2xl mr-2 primary-color">{user.displayName}</p>
                <button
                  onClick={() => setHiddenModal(!hideenModal)}
                  className="mt-2"
                >
                  <AiFillCaretDown 
                    className="primary-color"
                  />
                </button>
                {hideenModal ? (
                  <div className="absolute top-16 bg-white px-2 border-2 mobile:right-0 tablet:left-40">
                    <ul>
                      <Link to="/pages/notification">
                        <li className="hover:cursor-pointer hover:underline">
                          Th??m th??ng tin
                        </li>
                      </Link>
                      <li
                        onClick={handleLogout}
                        className="border-t-2 hover:cursor-pointer"
                      >
                        ????ng xu???t
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="flex justify-between w-[480px]">
                <div className="flex border-2 tablet:w-[710px] mobile:w-[80%] mobile:ml-6 justify-between laptop:w-[200px] mr-4 tablet:ml-4 p-2 rounded-xl">
                  <input
                    className="focus:outline-none w-full"
                    placeholder="T??m ki???m"
                  ></input>
                  <a href="/pages/notification" className="text-4xl">
                    <AiOutlineSearch />
                  </a>
                </div>
                <div className="flex justify-between w-[210px]">
                  <a href="/registor" target="_blank">
                    <button className="btn primary text-center w-[100px] mobile:hidden laptop:block">
                      ????ng k??
                    </button>
                  </a>
                  <Link to="/login">
                    <button className="btn primary text-center w-[100px] mobile:hidden laptop:block">
                      ????ng nh???p
                    </button>
                  </Link>
                </div>
              </div>
            )}
            <div className="laptop:hidden flex text-5xl items-center tablet:ml-0 tablet:justify-between mobile:justify-between">
              <AiOutlineMenu onClick={handleModalTablet} />
              <img
                itemProp="logo"
                src="//theme.hstatic.net/200000472237/1000829412/14/logo.png?v=512"
                alt="GHN.VN"
                className="h-[85px] w-[150px] tablet:mr-[11%] mobile:mr-[11%]"
              ></img>
            </div>
            <div className="laptop:hidden">
              <div className="flex">
                <div
                  className="tablet:w-[400px] mobile:w-[250px] tablet:border-2 mobile:border-[1px] hidden bg-white tablet:left-[-13%] mobile:left-[-5%]"
                  id="modalTablet"
                >
                  <h3 className="bg-[#e1e1e1] py-4">MENU</h3>
                  <ul>
                    <li className="p-6 border-t-[1px] text-2xl text-left">
                      <a className="hover:no-underline" href="/">
                        Trang ch???
                      </a>
                    </li>
                    <li
                      onClick={handleModalService}
                      className="border-t-[1px] flex tablet:justify-between items-center text-2xl text-left"
                    >
                      <p className="p-5 border-r-2 tablet:pr-[76%] mobile:pr-[65%]">
                        D???ch v???
                      </p>
                      <AiOutlineRight style={{ marginRight: "6px" }} />
                    </li>
                    <li className="p-6 border-t-[1px] text-2xl text-left">
                      Tin t???c
                    </li>
                    <li
                      onClick={handleModalInformation}
                      className="border-t-[1px] flex justify-between items-center text-2xl text-left"
                    >
                      <p className="p-5 border-r-2 tablet:pr-[63%] mobile:pr-[44%] hover:underline">
                        Th??m th??ng tin
                      </p>
                      <AiOutlineRight style={{ marginRight: "6px" }} />
                    </li>
                  </ul>
                  <div className="bg-primary p-6">
                    <p>????NG K?? D???CH V???</p>
                  </div>
                  <ul className="text-left mt-4">
                    <li className="p-2">-Ch??nh s??ch b???i th?????ng</li>
                    <li className="p-2">-Quy ?????nh v??? khi???u n???i</li>
                    <li className="p-2">-??i???u kho???n s??? d???ng</li>
                    <li className="p-2">-Ch??nh s??ch b???o m???t</li>
                  </ul>
                  <span className="bg-[#e1e1e1] pl-4 flex items-center py-4">
                    <BsTelephonePlus />
                    <p className="ml-4 font-bold">1900 636677</p>
                  </span>
                  <div className="mt-3">
                    <button
                      onClick={() => redirect("/registor")}
                      className="bg-primary p-4"
                    >
                      ????ng k??/????ng nh???p
                    </button>
                  </div>
                </div>

                <div
                  className="tablet:w-[400px] mobile:w-[250px] border-2 hidden tablet:left-[-13%] mobile:left-[-5%]"
                  id="modalService"
                >
                  <p className="bg-[#e1e1e1] tablet:pl-4 mobile:pl-4 flex items-center py-4">
                    <AiOutlineLeft onClick={handleCloseService} />
                    <span className="tablet:ml-60 mobile:ml-28">D???CH V???</span>
                  </p>
                  <ul className="bg-white h-full">
                    <a className="hover:no-underline" href="/ghn-express">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        GHN EXPRESS
                      </li>
                    </a>
                    <a className="hover:no-underline" href="/ghn-fullfilment">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        GHN FULFILLMENT
                      </li>
                    </a>
                    <a className="hover:no-underline" href="">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        AHAMOVE
                      </li>
                    </a>
                  </ul>
                </div>

                <div
                  className="tablet:w-[400px] mobile:w-[250px] border-2 hidden tablet:left-[-13%] mobile:left-[-5%]"
                  id="modalInformations"
                >
                  <p className="bg-[#e1e1e1] tablet:pl-4 mobile:pl-4 flex items-center py-4">
                    <AiOutlineLeft onClick={handleCloseInformations} />
                    <span className="tablet:ml-60 mobile:ml-28">
                      TH??M TH??NG TIN
                    </span>
                  </p>
                  <ul className="bg-white h-full">
                    <a className="hover:no-underline" href="/pages/ve-ghn">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        V??? GHN
                      </li>
                    </a>
                    <a className="hover:no-underline" href="#">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        PROFILE GHN
                      </li>
                    </a>
                    <a className="hover:no-underline" href="/pages/table-price">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        B???NG GI??
                      </li>
                    </a>
                    <a
                      className="hover:no-underline"
                      href="/pages/technolgy-ghn"
                    >
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        C??NG NGH???
                      </li>
                    </a>
                    <a className="hover:no-underline" href="#">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        B??U C???C
                      </li>
                    </a>
                    <a className="hover:no-underline" href="/pages/contact-ghn">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        LI??N H???
                      </li>
                    </a>
                    <a className="hover:no-underline" href="/pages/xu-ghn">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        GHN XU
                      </li>
                    </a>
                    <a className="hover:no-underline" href="/pages/work-ghn">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        TUY???N D???NG
                      </li>
                    </a>
                    <a className="hover:no-underline" href="#">
                      <li className="p-6 border-t-[1px] text-2xl text-left">
                        T??P B??N H??NG
                      </li>
                    </a>
                  </ul>
                </div>
                <div
                  onClick={closeModal}
                  id="overlayModal"
                  className="overlayModal tablet:left-[-56px] mobile:left-[50px] hidden"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
