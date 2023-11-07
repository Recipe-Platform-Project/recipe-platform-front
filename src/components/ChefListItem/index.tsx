import React, { useState, useEffect, useRef, forwardRef } from "react";
import "./style.css";
import { ChefInfoItem } from "Types";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useCookies } from "react-cookie";
import { chefInfoMock } from "mocks";
import { CHEF_LIST_PATH } from "constant";

//					component: 쉐프 리스트 컴포넌트 					//
export default function ChefList2() {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [chefList, setChefList] = useState<ChefInfoItem[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  //          function: 네비게이트 함수         //
  const navigator = useNavigate();

  //          interface: Chef 리스트 아이템 컴포넌트 Props         //
  interface Props {
    chefItem: ChefInfoItem;
  }

  //          component: Chef 리스트 아이템 컴포넌트          //
  const ChefItem = forwardRef<HTMLDivElement, Props>(
    ({ chefItem }: Props, ref) => {
      //          state: Propertites          //
      const { email, profileImage, nickname } = chefItem;
      //          state: 구독 상태          //
      const [subscription, setSubscription] = useState<boolean>(false);
      //          state: 쿠키 상태          //
      const [cookies, setCookies] = useCookies();

      //          event handler: 구독 버튼 클릭 이벤트 처리 함수          //
      const onSubscriptionClickHandler = () => {
        if (!cookies.email) {
          alert("로그인이 필요합니다");
          return;
        }
        setSubscription(!subscription);
      };

      //          event handler: Chef Click 이벤트 처리 함수          //
      const onChefClickHandler = () => {
        navigator(`/user/${email}`);
      };
      //          render: Chef 리스트 아이템 컴포넌트 렌더링          //
      return (
        <div ref={ref} className="chef-list-center-bottom-info-box">
          <div
            className="chef-list-center-bottom-profile-image-box"
            onClick={onChefClickHandler}
          >
            <div
              className="chef-list-center-bottom-profile-image"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
            <div className="chef-list-center-bottom-nickname">{nickname}</div>
          </div>
          <div onClick={onSubscriptionClickHandler}>
            {subscription ? (
              <div className="chef-list-center-bottom-subscription-on">
                {"구독중"}
              </div>
            ) : (
              <div className="chef-list-center-bottom-subscription">
                {"구독하기"}
              </div>
            )}
          </div>
        </div>
      );
    }
  );
  //					effect: 컴포넌트가 마운트 시 쉐프 리스트 불러오기					//
  useEffect(() => {
    // TODO: API 호출로 변경
    setChefList(chefInfoMock);
  }, []);
  // //          event handler: 다음 이미지로 이동하는 함수          //
  // const nextSlide = () => {
  //   if (!slideRef.current || !itemRef.current) return;
  //   if (chefList.length - 10 === current) {
  //     return;
  //   }
  //   if (current === chefList.length) {
  //     return;
  //   }
  //   const newTranslate = translate - 129;
  //   setTranslate(newTranslate);
  //   slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  //   setCurrent(current + 1);
  // };

  // //          event handler: 이전 이미지로 이동하는 함수          //
  // const prevSlide = () => {
  //   if (!slideRef.current || !itemRef.current) return;
  //   if (current === 0) return;
  //   const newTranslate = translate + 129;
  //   setTranslate(newTranslate);
  //   slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  //   setCurrent(current - 1);
  // };

  //          event handler: 쉐프 리스트 더보기 Click 이벤트 처리 함수          //
  const onChefMoreButtonClickHandler = () => {
    navigator(CHEF_LIST_PATH);
  };

  const nextSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = chefList.length - 10;
    const newCurrent = current === lastIndex ? 0 : current + 10;
    setCurrent(newCurrent);
    const newTranslate = -129 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const prevSlide = () => {
    if (!slideRef.current) return;
    const lastIndex = chefList.length - 10;
    const newCurrent = current === 0 ? lastIndex : current - 10;
    setCurrent(newCurrent);
    const newTranslate = -129 * newCurrent;
    slideRef.current.style.transform = `translateX(${newTranslate}px)`;
  };
  //          render: 쉐프 리스트 컴포넌트 렌더링         //
  return (
    <div id="chef-list-wrapper">
      <div className="list-left">
        <div className="list-bottom-left-icon" onClick={prevSlide}></div>
      </div>
      <div className="chef-list-center">
        <div className="chef-list-center-top">
          <div className="chef-list-center-top-title">{"쉐프"}</div>
          <div
            className="chef-list-center-top-more-button"
            onClick={onChefMoreButtonClickHandler}
          >
            {"더보기"}
          </div>
        </div>
        <div className="chef-list-center-bottom">
          <div
            ref={slideRef}
            className="chef-list-center-bottom-info-container"
            style={{ transform: `translateX(${translate}px)` }}
          >
            {chefList.map((chefItem) => (
              <div>
                <ChefItem ref={itemRef} chefItem={chefItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-right">
        <div className="list-bottom-right-icon" onClick={nextSlide}></div>
      </div>
    </div>
  );
}
