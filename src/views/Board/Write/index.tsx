import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import "./style.css";
import MaterialInput from "components/BoardWrite/MaterialInput";
import SequenceBox from "components/BoardWrite/SequenceBox";

//					component: 게시물 작성 페이지 					//
export default function BoardWrite() {
  const TitleImage = () => {
    //                  state: 대표 이미지 상태                 //
    const [titleImage, setTitleImage] = useState<string | null>("");
    //                  state: 대표 이미지 input ref 상태                 //
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    //          event handler: 대표이미지 클릭 이벤트 처리          //
    const onTitleImageClickHandler = () => {
      if (!fileInputRef.current) return;
      fileInputRef.current.click();
    };

    //          event handler: 프로필 이미지 변경 이벤트 처리          //
    const onTitleImageChangeHandler = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      if (!event.target.files || !event.target.files.length) return;
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setTitleImage(imageUrl);
    };

    return (
      <div onClick={onTitleImageClickHandler}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onTitleImageChangeHandler}
        />
        {titleImage === "" ? (
          <div className="board-write-title-image">
            <div className="title-icon-box">
              <div className="title-camera-icon"></div>
              <div className="title-image-text">
                {"대표 사진을 등록해주세요. "}
                <span className="required-value">{"*"}</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="title-image-box"
              style={{ backgroundImage: `url(${titleImage})` }}
            >
              <div className="title-image"></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  //					component: 게시물 작성 상단 페이지 					//
  const WriteMainTop = () => {
    //					render: 게시물 작성 상단 렌더링					//
    return (
      <div>
        <div className="board-write">
          <div className="board-write-title-box">
            <div className="board-write-title">{"레시피 등록"}</div>
          </div>
          <div className="board-write-info-container">
            <TitleImage />
            <div className="board-write-info-box">
              <div className="board-write-info-title-box">
                <div className="board-write-info-title-message">
                  <div className="board-write-info-title">
                    {"레시피 제목 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <span className="">{"*은 필수 입력 사항입니다."}</span>
                </div>
                <input
                  spellCheck="false"
                  type="text"
                  placeholder={"예) 소고기 듬뿍 미역국"}
                  className="info-input1"
                />
              </div>
              <div className="board-write-description-box">
                <div className="board-write-description-title">
                  {"간단 요리소개 "}
                  <span className="required-value">{"*"}</span>
                </div>
                <textarea
                  spellCheck="false"
                  placeholder={
                    "예) 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미"
                  }
                  className="info-input2"
                />
              </div>
              <div className="board-write-info-choice-box">
                <div className="board-write-cooking-time-box">
                  <div className="board-write-cooking-choice-title">
                    {"소요시간 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <input
                    className="board-write-choice"
                    placeholder={"예) 10분"}
                    spellCheck="false"
                    type="text"
                  />
                </div>
                <div className="board-write-cooking-level-box">
                  <div className="board-write-cooking-choice-title">
                    {"난이도 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <select className="board-write-choice1" name="level">
                    <option value="쉬움">{"쉬움"}</option>
                    <option value="보통">{"보통"}</option>
                    <option value="어려움">{"어려움"}</option>
                  </select>
                </div>
                <div className="board-write-cooking-person-box">
                  <div className="board-write-cooking-choice-title">
                    {"인원 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <select className="board-write-choice1" name="person">
                    <option value="1인분">{"1인분"}</option>
                    <option value="2인분">{"2인분"}</option>
                    <option value="3인분">{"3인분"}</option>
                    <option value="4인분">{"4인분"}</option>
                    <option value="5인분">{"5인분"}</option>
                    <option value="6인분">{"6인분"}</option>
                  </select>
                </div>
              </div>
              <div className="board-write-category-box">
                <div className="board-write-cooking-choice-title">
                  {"카테고리 "}
                  <span className="required-value">{"*"}</span>
                </div>
                <div className="board-write-category-choice">
                  <select className="board-write-choice1" name="job">
                    <option value="">{"종류별"}</option>
                    <option value="국/탕">{"국/탕"}</option>
                    <option value="찌개">{"찌개"}</option>
                    <option value="디저트">{"디저트"}</option>
                    <option value="면">{"면"}</option>
                    <option value="한식">{"한식"}</option>
                    <option value="퓨전">{"퓨전"}</option>
                    <option value="양식">{"양식"}</option>
                    <option value="김치/젓갈/장류">{"김치/젓갈/장류"}</option>
                    <option value="차/음료/술">{"차/음료/술"}</option>
                    <option value="안주">{"안주"}</option>
                    <option value="기타">{"기타"}</option>
                  </select>
                  <select className="board-write-choice1" name="job">
                    <option value="">{"방법별"}</option>
                    <option value="볶음">{"볶음"}</option>
                    <option value="끓이기">{"끓이기"}</option>
                    <option value="부침">{"부침"}</option>
                    <option value="조림">{"조림"}</option>
                    <option value="무침">{"무침"}</option>
                    <option value="비빔">{"비빔"}</option>
                    <option value="찜">{"찜"}</option>
                    <option value="절임">{"절임"}</option>
                    <option value="튀김">{"튀김"}</option>
                    <option value="삶기">{"삶기"}</option>
                    <option value="굽기">{"굽기"}</option>
                    <option value="데치기">{"데치기"}</option>
                    <option value="기타">{"기타"}</option>
                  </select>
                  <select className="board-write-choice1" name="job">
                    <option value="">{"재료별"}</option>
                    <option value="소고기">{"소고기"}</option>
                    <option value="돼지고기">{"돼지고기"}</option>
                    <option value="닭고기">{"닭고기"}</option>
                    <option value="육류">{"육류"}</option>
                    <option value="해물류">{"해물류"}</option>
                    <option value="채소류">{"채소류"}</option>
                    <option value="달걀/유제품">{"달걀/유제품"}</option>
                    <option value="가공식품류">{"가공식품류"}</option>
                    <option value="곡물류">{"곡물류"}</option>
                    <option value="기타">{"기타"}</option>
                  </select>
                </div>
              </div>
              <div className="board-write-tag-box">
                <div className="board-write-tag-title">{"태그"}</div>
                <input
                  placeholder={"예) #태그 #지역 #재료"}
                  spellCheck="false"
                  type="text"
                  className="info-input1"
                />
              </div>
              <div className="board-write-video-box">
                <div className="board-write-video-title">
                  {"유튜브 동영상 링크"}
                </div>
                <input
                  placeholder={"예) http://www.youtube.com"}
                  spellCheck="false"
                  type="text"
                  className="info-input1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  //					component: 게시물 재료 등록 페이지 					//
  const WriteMaterial = () => {
    //					render: 게시물 재료 등록 페이지 렌더링 					//
    return (
      <div className="write-material-wrapper">
        <div className="write-material-title">
          {"재료 등록"}
          <span className="required-value">{"*"}</span>
        </div>
        <div className="write-material-input-box">
          <MaterialInput />
          <MaterialInput />
        </div>
        <div className="material-bundle-add-box">
          <div className="material-bundle-add-button"></div>
          <div className="material-bundle-add-text">{"묶음 추가"}</div>
        </div>
      </div>
    );
  };
  //					component: 게시물 조리 순서 페이지 					//
  const CookingSequence = () => {
    //					render: 게시물 조리 순서 페이지 렌더링					//
    return (
      <div className="cooking-sequence-wrapper">
        <div className="write-cooking-sequense-title">
          {"조리 순서"}
          <span className="required-value">{"*"}</span>
        </div>
        <SequenceBox />
        <div className="material-bundle-add-box">
          <div className="material-bundle-add-button"></div>
          <div className="material-bundle-add-text">{"순서 추가"}</div>
        </div>
        <div className="cooking-tip-box">
          <div className="cooking-tip"></div>
          <input className="cooking-sequence-input" type="text" />
        </div>
      </div>
    );
  };
  //					component: 요리 완성 사진 페이지 					//
  const CookingCompletionImage = () => {
    const CompleteCookingPhoto = () => {
      return (
        <div className="cooking-completion-image-upload-container">
          <div className="cooking-completion-image-upload-icon"></div>
        </div>
      );
    };
    //					render: 요리 완성 사진 페이지 렌더링					//
    return (
      <div className="cooking-completion-image-box">
        <div className="cooking-completion-image-title">
          {"요리 완성 사진"}
          <span className="required-value">{"*"}</span>
        </div>
        <div className="cooking-completion-image-upload">
          <CompleteCookingPhoto />
        </div>
      </div>
    );
  };
  //					component: 버튼 페이지 					//
  const BoardButton = () => {
    //					render: 버튼 페이지 렌더링					//
    return (
      <div className="board-button-box">
        <div className="save-button">{"임시 저장"}</div>
        <div className="upload-button">{"등록"}</div>
        <div className="cancle-button">{"취소"}</div>
      </div>
    );
  };

  //					render: 게시물 작성 페이지 렌더링					//
  return (
    <div id="board-write-wrapper">
      <div className="board-write-main">
        <WriteMainTop />
        <div className="write-divider"></div>
        <WriteMaterial />
        <div className="write-divider"></div>
        <CookingSequence />
        <div className="write-divider"></div>
        <CookingCompletionImage />
        <div className="write-divider"></div>
        <BoardButton />
      </div>
    </div>
  );
}
